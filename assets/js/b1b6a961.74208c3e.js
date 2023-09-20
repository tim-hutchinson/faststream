"use strict";(self.webpackChunkfastkafka=self.webpackChunkfastkafka||[]).push([[4168],{3905:(e,a,n)=>{n.d(a,{Zo:()=>c,kt:()=>f});var t=n(7294);function o(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function r(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach((function(a){o(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,t,o=function(e,a){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(o[n]=e[n]);return o}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=t.createContext({}),l=function(e){var a=t.useContext(p),n=a;return e&&(n="function"==typeof e?e(a):r(r({},a),e)),n},c=function(e){var a=l(e.components);return t.createElement(p.Provider,{value:a},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return n?t.createElement(f,r(r({ref:a},c),{},{components:n})):t.createElement(f,r({ref:a},c))}));function f(e,a){var n=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var s={};for(var p in a)hasOwnProperty.call(a,p)&&(s[p]=a[p]);s.originalType=e,s[d]="string"==typeof e?e:o,r[1]=s;for(var l=2;l<i;l++)r[l]=n[l];return t.createElement.apply(null,r)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7251:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var t=n(7462),o=(n(7294),n(3905));const i={},r="Lifespan Events",s={unversionedId:"guides/Guide_05_Lifespan_Handler",id:"version-0.5.0/guides/Guide_05_Lifespan_Handler",title:"Lifespan Events",description:"Did you know that you can define some special code that runs before and",source:"@site/versioned_docs/version-0.5.0/guides/Guide_05_Lifespan_Handler.md",sourceDirName:"guides",slug:"/guides/Guide_05_Lifespan_Handler",permalink:"/docs/0.5.0/guides/Guide_05_Lifespan_Handler",draft:!1,tags:[],version:"0.5.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Defining a partition key",permalink:"/docs/0.5.0/guides/Guide_22_Partition_Keys"},next:{title:"Encoding and Decoding Kafka Messages with FastKafka",permalink:"/docs/0.5.0/guides/Guide_07_Encoding_and_Decoding_Messages_with_FastKafka"}},p={},l=[{value:"Lifespan example - Iris prediction model",id:"lifespan-example---iris-prediction-model",level:2},{value:"Lifespan",id:"lifespan",level:3},{value:"Async context manager",id:"async-context-manager",level:3},{value:"App demo",id:"app-demo",level:2},{value:"FastKafka app",id:"fastkafka-app",level:3},{value:"Data modeling",id:"data-modeling",level:3},{value:"Consumers and producers",id:"consumers-and-producers",level:3},{value:"Final app",id:"final-app",level:3},{value:"Running the app",id:"running-the-app",level:3},{value:"Recap",id:"recap",level:2}],c={toc:l},d="wrapper";function u(e){let{components:a,...n}=e;return(0,o.kt)(d,(0,t.Z)({},c,n,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"lifespan-events"},"Lifespan Events"),(0,o.kt)("p",null,"Did you know that you can define some special code that runs before and\nafter your Kafka application? This code will be executed just once, but\nit covers the whole lifespan of your app! \ud83d\ude80"),(0,o.kt)("p",null,"Lets break it down:"),(0,o.kt)("p",null,"You can define logic (code) that should be executed before the\napplication starts up. This is like a warm-up for your app, getting it\nready to consume and produce messages."),(0,o.kt)("p",null,"Similarly, you can define logic (code) that should be executed when the\napplication is shutting down. This is like a cool-down for your app,\nmaking sure everything is properly closed and cleaned up."),(0,o.kt)("p",null,"By executing code before consuming and after producing, you cover the\nentire lifecycle of your application \ud83c\udf89"),(0,o.kt)("p",null,"This is super handy for setting up shared resources that are needed\nacross consumers and producers, like a database connection pool or a\nmachine learning model. And the best part? You can clean up these\nresources when the app is shutting down!"),(0,o.kt)("p",null,"So lets give it a try and see how it can make your Kafka app even more\nawesome! \ud83d\udcaa"),(0,o.kt)("h2",{id:"lifespan-example---iris-prediction-model"},"Lifespan example - Iris prediction model"),(0,o.kt)("p",null,"Let\u2019s dive into an example to see how you can leverage the lifecycle\nhandler to solve a common use case. Imagine that you have some machine\nlearning models that need to consume incoming messages and produce\nresponse/prediction messages. These models are shared among consumers\nand producers, which means you don\u2019t want to load them for every\nmessage."),(0,o.kt)("p",null,"Here\u2019s where the lifecycle handler comes to the rescue! By loading the\nmodel before the messages are consumed and produced, but only right\nbefore the application starts receiving messages, you can ensure that\nthe model is ready to use without compromising the performance of your\ntests. In the upcoming sections, we\u2019ll walk you through how to\ninitialize an Iris species prediction model and use it in your developed\napplication."),(0,o.kt)("h3",{id:"lifespan"},"Lifespan"),(0,o.kt)("p",null,"You can define this startup and shutdown logic using the lifespan\nparameter of the FastKafka app, and an async context manager."),(0,o.kt)("p",null,"Let\u2019s start with an example and then see it in detail."),(0,o.kt)("p",null,"We create an async function lifespan() with yield like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from sklearn.datasets import load_iris\nfrom sklearn.linear_model import LogisticRegression\nfrom contextlib import asynccontextmanager\n\nfrom fastkafka import FastKafka\n\nml_models = {}\n\n@asynccontextmanager\nasync def lifespan(app: FastKafka):\n    # Load the ML model\n    print("Loading the model!")\n    X, y = load_iris(return_X_y=True)\n    ml_models["iris_predictor"] = LogisticRegression(random_state=0, max_iter=500).fit(X, y)\n    yield\n    # Clean up the ML models and release the resources\n    \n    print("Exiting, clearing model dict!")\n    ml_models.clear()\n    \n')),(0,o.kt)("p",null,"The first thing to notice, is that we are defining an async function\nwith ",(0,o.kt)("inlineCode",{parentName:"p"},"yield"),". This is very similar to Dependencies with ",(0,o.kt)("inlineCode",{parentName:"p"},"yield"),"."),(0,o.kt)("p",null,"The first part of the function, before the ",(0,o.kt)("inlineCode",{parentName:"p"},"yield"),", will be executed\n",(0,o.kt)("strong",{parentName:"p"},"before")," the application starts. And the part after the ",(0,o.kt)("inlineCode",{parentName:"p"},"yield")," will\nbe executed ",(0,o.kt)("strong",{parentName:"p"},"after")," the application has finished."),(0,o.kt)("p",null,"This lifespan will create an iris_prediction model on application\nstartup and cleanup the references after the app is shutdown."),(0,o.kt)("p",null,"The lifespan will be passed an KafkaApp reference on startup of your\napplication, which you can use to reference your application on startup."),(0,o.kt)("p",null,"For demonstration sake, we also added prints so that when running the\napp we can see that our lifespan was called."),(0,o.kt)("h3",{id:"async-context-manager"},"Async context manager"),(0,o.kt)("p",null,"Context managers can be used in ",(0,o.kt)("inlineCode",{parentName:"p"},"with")," blocks, our lifespan, for example\ncould be used like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"ml_models = {}\nasync with lifespan(None):\n    print(ml_models)\n")),(0,o.kt)("p",null,"When you create a context manager or an async context manager, what it\ndoes is that, before entering the ",(0,o.kt)("inlineCode",{parentName:"p"},"with")," block, it will execute the code\nbefore the ",(0,o.kt)("inlineCode",{parentName:"p"},"yield"),", and after exiting the ",(0,o.kt)("inlineCode",{parentName:"p"},"with")," block, it will execute\nthe code after the ",(0,o.kt)("inlineCode",{parentName:"p"},"yield"),"."),(0,o.kt)("p",null,"If you want to learn more about context managers and contextlib\ndecorators, please visit ",(0,o.kt)("a",{parentName:"p",href:"https://docs.python.org/3/library/contextlib.html"},"Python official\ndocs")),(0,o.kt)("h2",{id:"app-demo"},"App demo"),(0,o.kt)("h3",{id:"fastkafka-app"},"FastKafka app"),(0,o.kt)("p",null,"Lets now create our application using the created lifespan handler."),(0,o.kt)("p",null,"Notice how we passed our lifespan handler to the app when constructing\nit trough the ",(0,o.kt)("inlineCode",{parentName:"p"},"lifespan")," argument."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from fastkafka import FastKafka\n\nkafka_brokers = {\n    "localhost": {\n        "url": "<url_of_your_kafka_bootstrap_server>",\n        "description": "local development kafka broker",\n        "port": "<port_of_your_kafka_bootstrap_server>",\n    },\n}\n\nkafka_app = FastKafka(\n    title="Iris predictions",\n    kafka_brokers=kafka_brokers,\n    lifespan=lifespan,\n)\n\n')),(0,o.kt)("h3",{id:"data-modeling"},"Data modeling"),(0,o.kt)("p",null,"Lets model the Iris data for our app:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from pydantic import BaseModel, Field, NonNegativeFloat\n\nclass IrisInputData(BaseModel):\n    sepal_length: NonNegativeFloat = Field(\n        ..., example=0.5, description="Sepal length in cm"\n    )\n    sepal_width: NonNegativeFloat = Field(\n        ..., example=0.5, description="Sepal width in cm"\n    )\n    petal_length: NonNegativeFloat = Field(\n        ..., example=0.5, description="Petal length in cm"\n    )\n    petal_width: NonNegativeFloat = Field(\n        ..., example=0.5, description="Petal width in cm"\n    )\n\n\nclass IrisPrediction(BaseModel):\n    species: str = Field(..., example="setosa", description="Predicted species")\n')),(0,o.kt)("h3",{id:"consumers-and-producers"},"Consumers and producers"),(0,o.kt)("p",null,"Lets create a consumer and producer for our app that will generate\npredictions from input iris data."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'@kafka_app.consumes(topic="input_data", auto_offset_reset="latest")\nasync def on_input_data(msg: IrisInputData):\n    species_class = ml_models["iris_predictor"].predict(\n        [[msg.sepal_length, msg.sepal_width, msg.petal_length, msg.petal_width]]\n    )[0]\n\n    to_predictions(species_class)\n\n\n@kafka_app.produces(topic="predictions")\ndef to_predictions(species_class: int) -> IrisPrediction:\n    iris_species = ["setosa", "versicolor", "virginica"]\n\n    prediction = IrisPrediction(species=iris_species[species_class])\n    return prediction\n')),(0,o.kt)("h3",{id:"final-app"},"Final app"),(0,o.kt)("p",null,"The final app looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from sklearn.datasets import load_iris\nfrom sklearn.linear_model import LogisticRegression\nfrom contextlib import asynccontextmanager\n\nfrom pydantic import BaseModel, Field, NonNegativeFloat\n\nfrom fastkafka import FastKafka\n\nclass IrisInputData(BaseModel):\n    sepal_length: NonNegativeFloat = Field(\n        ..., example=0.5, description="Sepal length in cm"\n    )\n    sepal_width: NonNegativeFloat = Field(\n        ..., example=0.5, description="Sepal width in cm"\n    )\n    petal_length: NonNegativeFloat = Field(\n        ..., example=0.5, description="Petal length in cm"\n    )\n    petal_width: NonNegativeFloat = Field(\n        ..., example=0.5, description="Petal width in cm"\n    )\n\n\nclass IrisPrediction(BaseModel):\n    species: str = Field(..., example="setosa", description="Predicted species")\nml_models = {}\n\n@asynccontextmanager\nasync def lifespan(app: FastKafka):\n    # Load the ML model\n    print("Loading the model!")\n    X, y = load_iris(return_X_y=True)\n    ml_models["iris_predictor"] = LogisticRegression(random_state=0, max_iter=500).fit(X, y)\n    yield\n    # Clean up the ML models and release the resources\n    \n    print("Exiting, clearing model dict!")\n    ml_models.clear()\n    \nkafka_brokers = {\n    "localhost": {\n        "url": "<url_of_your_kafka_bootstrap_server>",\n        "description": "local development kafka broker",\n        "port": "<port_of_your_kafka_bootstrap_server>",\n    },\n}\n\nkafka_app = FastKafka(\n    title="Iris predictions",\n    kafka_brokers=kafka_brokers,\n    lifespan=lifespan,\n)\n\n@kafka_app.consumes(topic="input_data", auto_offset_reset="latest")\nasync def on_input_data(msg: IrisInputData):\n    species_class = ml_models["iris_predictor"].predict(\n        [[msg.sepal_length, msg.sepal_width, msg.petal_length, msg.petal_width]]\n    )[0]\n\n    to_predictions(species_class)\n\n\n@kafka_app.produces(topic="predictions")\ndef to_predictions(species_class: int) -> IrisPrediction:\n    iris_species = ["setosa", "versicolor", "virginica"]\n\n    prediction = IrisPrediction(species=iris_species[species_class])\n    return prediction\n')),(0,o.kt)("h3",{id:"running-the-app"},"Running the app"),(0,o.kt)("p",null,"Now we can run the app with your custom lifespan handler. Copy the code\nabove in lifespan_example.py and run it by running"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"fastkafka run --num-workers=1 --kafka-broker=localhost lifespan_example:kafka_app\n")),(0,o.kt)("p",null,"When you run the app, you should see a simmilar output to the one below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[262292]: [INFO] fastkafka._application.app: set_kafka_broker() : Setting bootstrap_servers value to '127.0.0.1:9092'\n[262292]: Loading the model!\n[262292]: [INFO] fastkafka._application.app: _create_producer() : created producer using the config: '{'bootstrap_servers': '127.0.0.1:9092'}'\n[262292]: [INFO] fastkafka._components.aiokafka_producer_manager: AIOKafkaProducerManager.start(): Entering...\n[262292]: [INFO] fastkafka._components.aiokafka_producer_manager: _aiokafka_producer_manager(): Starting...\n[262292]: [INFO] fastkafka._components.aiokafka_producer_manager: _aiokafka_producer_manager(): Starting send_stream\n[262292]: [INFO] fastkafka._components.aiokafka_producer_manager: AIOKafkaProducerManager.start(): Finished.\n[262292]: [INFO] fastkafka._components.aiokafka_consumer_loop: aiokafka_consumer_loop() starting...\n[262292]: [INFO] fastkafka._components.aiokafka_consumer_loop: aiokafka_consumer_loop(): Consumer created using the following parameters: {'bootstrap_servers': '127.0.0.1:9092', 'auto_offset_reset': 'latest', 'max_poll_records': 100}\n[262292]: [INFO] fastkafka._components.aiokafka_consumer_loop: aiokafka_consumer_loop(): Consumer started.\n[262292]: [INFO] aiokafka.consumer.subscription_state: Updating subscribed topics to: frozenset({'input_data'})\n[262292]: [INFO] aiokafka.consumer.consumer: Subscribed to topic(s): {'input_data'}\n[262292]: [INFO] fastkafka._components.aiokafka_consumer_loop: aiokafka_consumer_loop(): Consumer subscribed.\n[262292]: [WARNING] aiokafka.cluster: Topic input_data is not available during auto-create initialization\n[262292]: [INFO] aiokafka.consumer.group_coordinator: Metadata for topic has changed from {} to {'input_data': 0}. \nStarting process cleanup, this may take a few seconds...\n[INFO] fastkafka._server: terminate_asyncio_process(): Terminating the process 262292...\n[262292]: [INFO] fastkafka._components.aiokafka_consumer_loop: aiokafka_consumer_loop(): Consumer stopped.\n[262292]: [INFO] fastkafka._components.aiokafka_consumer_loop: aiokafka_consumer_loop() finished.\n[262292]: [INFO] fastkafka._components.aiokafka_producer_manager: AIOKafkaProducerManager.stop(): Entering...\n[262292]: [INFO] fastkafka._components.aiokafka_producer_manager: _aiokafka_producer_manager(): Exiting send_stream\n[262292]: [INFO] fastkafka._components.aiokafka_producer_manager: _aiokafka_producer_manager(): Finished.\n[262292]: [INFO] fastkafka._components.aiokafka_producer_manager: AIOKafkaProducerManager.stop(): Stoping producer...\n[262292]: [INFO] fastkafka._components.aiokafka_producer_manager: AIOKafkaProducerManager.stop(): Finished\n[262292]: Exiting, clearing model dict!\n[INFO] fastkafka._server: terminate_asyncio_process(): Process 262292 terminated.\n")),(0,o.kt)("h2",{id:"recap"},"Recap"),(0,o.kt)("p",null,"In this guide we have defined a lifespan handler and passed to our\nFastKafka app."),(0,o.kt)("p",null,"Some important points are:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Lifespan handler is implemented as\n",(0,o.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/contextlib.html#contextlib.asynccontextmanager"},"AsyncContextManager")),(0,o.kt)("li",{parentName:"ol"},"Code ",(0,o.kt)("strong",{parentName:"li"},"before")," yield in lifespan will be executed ",(0,o.kt)("strong",{parentName:"li"},"before"),"\napplication ",(0,o.kt)("strong",{parentName:"li"},"startup")),(0,o.kt)("li",{parentName:"ol"},"Code ",(0,o.kt)("strong",{parentName:"li"},"after")," yield in lifespan will be executed ",(0,o.kt)("strong",{parentName:"li"},"after"),"\napplication ",(0,o.kt)("strong",{parentName:"li"},"shutdown")),(0,o.kt)("li",{parentName:"ol"},"You can pass your lifespan handler to FastKafka app on\ninitialisation by passing a ",(0,o.kt)("inlineCode",{parentName:"li"},"lifespan")," argument")))}u.isMDXComponent=!0}}]);