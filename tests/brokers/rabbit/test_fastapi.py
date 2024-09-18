import asyncio
from unittest.mock import MagicMock

import pytest

from faststream.rabbit import ExchangeType, RabbitExchange, RabbitQueue, RabbitRouter
from faststream.rabbit.fastapi import RabbitRouter as StreamRouter
from faststream.rabbit.testing import TestRabbitBroker
from tests.brokers.base.fastapi import FastAPILocalTestcase, FastAPITestcase


@pytest.mark.rabbit
class TestRouter(FastAPITestcase):
    router_class = StreamRouter
    broker_router_class = RabbitRouter

    @pytest.mark.asyncio
    async def test_path(
        self,
        queue: str,
        event: asyncio.Event,
        mock: MagicMock,
    ):
        router = self.router_class()

        @router.subscriber(
            RabbitQueue(
                queue,
                routing_key="in.{name}",
            ),
            RabbitExchange(
                queue + "1",
                type=ExchangeType.TOPIC,
            ),
        )
        def subscriber(msg: str, name: str):
            mock(msg=msg, name=name)
            event.set()

        async with router.broker:
            await router.broker.start()
            await asyncio.wait(
                (
                    asyncio.create_task(
                        router.broker.publish("hello", "in.john", queue + "1")
                    ),
                    asyncio.create_task(event.wait()),
                ),
                timeout=3,
            )

        assert event.is_set()
        mock.assert_called_once_with(msg="hello", name="john")


@pytest.mark.asyncio
class TestRouterLocal(FastAPILocalTestcase):
    router_class = StreamRouter
    broker_router_class = RabbitRouter

    def patch_broker(self, broker, **kwargs):
        return TestRabbitBroker(broker, **kwargs)

    async def test_path(self):
        router = self.router_class()

        @router.subscriber(
            RabbitQueue(
                "",
                routing_key="in.{name}",
            ),
            RabbitExchange(
                "test",
                type=ExchangeType.TOPIC,
            ),
        )
        async def hello(name):
            return name

        async with self.patch_broker(router.broker) as br:
            r = await br.request(
                "hi",
                "in.john",
                "test",
                timeout=0.5,
            )
            assert await r.decode() == "john"
