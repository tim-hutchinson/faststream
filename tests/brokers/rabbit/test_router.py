import asyncio
from typing import Any

import pytest

from faststream import Path
from faststream.rabbit import (
    ExchangeType,
    RabbitBroker,
    RabbitExchange,
    RabbitPublisher,
    RabbitQueue,
    RabbitRoute,
    RabbitRouter,
    TestRabbitBroker,
)
from tests.brokers.base.router import RouterLocalTestcase, RouterTestcase


@pytest.mark.rabbit
class TestRouter(RouterTestcase):
    broker_class = RabbitRouter
    route_class = RabbitRoute
    publisher_class = RabbitPublisher

    def get_broker(self, apply_types: bool = False, **kwargs: Any) -> RabbitBroker:
        return RabbitBroker(apply_types=apply_types, **kwargs)

    async def test_router_path(
        self,
        queue,
        event,
        mock,
        router,
    ):
        @router.subscriber(
            RabbitQueue(
                queue,
                routing_key="in.{name}.{id}",
            ),
            RabbitExchange(
                queue + "1",
                type=ExchangeType.TOPIC,
            ),
        )
        async def h(
            name: str = Path(),
            id: int = Path("id"),
        ):
            event.set()
            mock(name=name, id=id)

        pub_broker = self.get_broker(apply_types=True)
        pub_broker.include_router(router)

        await pub_broker.start()

        await pub_broker.request(
            "",
            "in.john.2",
            queue + "1",
        )

        assert event.is_set()
        mock.assert_called_once_with(name="john", id=2)

    async def test_router_delay_handler_path(
        self,
        queue,
        event,
        mock,
        router,
    ):
        async def h(
            name: str = Path(),
            id: int = Path("id"),
        ):
            event.set()
            mock(name=name, id=id)

        r = type(router)(
            handlers=(
                self.route_class(
                    h,
                    queue=RabbitQueue(
                        queue,
                        routing_key="in.{name}.{id}",
                    ),
                    exchange=RabbitExchange(
                        queue + "1",
                        type=ExchangeType.TOPIC,
                    ),
                ),
            )
        )

        pub_broker = self.get_broker(apply_types=True)
        pub_broker.include_router(r)

        await pub_broker.start()

        await pub_broker.request(
            "",
            "in.john.2",
            queue + "1",
        )

        assert event.is_set()
        mock.assert_called_once_with(name="john", id=2)

    async def test_queue_obj(
        self,
        router: RabbitRouter,
        queue: str,
        event: asyncio.Event,
    ):
        broker = self.get_broker()

        router.prefix = "test/"

        r_queue = RabbitQueue(queue)

        @router.subscriber(r_queue)
        def subscriber(m):
            event.set()

        broker.include_router(router)

        async with broker:
            await broker.start()

            await asyncio.wait(
                (
                    asyncio.create_task(
                        broker.publish("hello", f"test/{r_queue.name}")
                    ),
                    asyncio.create_task(event.wait()),
                ),
                timeout=3,
            )

            assert event.is_set()

    async def test_queue_obj_with_routing_key(
        self,
        router: RabbitRouter,
        queue: str,
        event: asyncio.Event,
    ):
        broker = self.get_broker()

        router.prefix = "test/"

        r_queue = RabbitQueue("useless", routing_key=f"{queue}1")
        exchange = RabbitExchange(f"{queue}exch")

        @router.subscriber(r_queue, exchange=exchange)
        def subscriber(m):
            event.set()

        broker.include_router(router)

        async with broker:
            await broker.start()

            await asyncio.wait(
                (
                    asyncio.create_task(
                        broker.publish("hello", f"test/{queue}1", exchange=exchange)
                    ),
                    asyncio.create_task(event.wait()),
                ),
                timeout=3,
            )

            assert event.is_set()

    async def test_delayed_handlers_with_queue(
        self,
        event: asyncio.Event,
        router: RabbitRouter,
        queue: str,
    ):
        def response(m):
            event.set()

        r_queue = RabbitQueue(queue)

        r = type(router)(
            prefix="test/", handlers=(self.route_class(response, queue=r_queue),)
        )

        pub_broker = self.get_broker()
        pub_broker.include_router(r)

        async with pub_broker:
            await pub_broker.start()

            await asyncio.wait(
                (
                    asyncio.create_task(
                        pub_broker.publish("hello", f"test/{r_queue.name}")
                    ),
                    asyncio.create_task(event.wait()),
                ),
                timeout=3,
            )

            assert event.is_set()


class TestRouterLocal(RouterLocalTestcase):
    broker_class = RabbitRouter
    route_class = RabbitRoute
    publisher_class = RabbitPublisher

    def get_broker(self, apply_types: bool = False, **kwargs: Any) -> RabbitBroker:
        return RabbitBroker(apply_types=apply_types, **kwargs)

    def patch_broker(self, broker: RabbitBroker, **kwargs: Any) -> RabbitBroker:
        return TestRabbitBroker(broker, **kwargs)
