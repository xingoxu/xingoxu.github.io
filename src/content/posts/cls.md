---
title: 什么是 CLS？在浏览器和 Node.js 中实现 CLS
tags:
  - dev
  - Front-End-Dev
published: 2020-06-29 19:48:05
---

在写 Flutter 和 Serverless 查资料的时候，在某个博客里看到了 CLS 的相关内容，感觉其实是个很不错的软件工程的解耦想法，于是保存了下来。今天回过头来仔细研究了一下并决定给自己留下一些记录。

<!-- more -->

# 场景

无论是在浏览器，还是在服务端 Node.js，我们经常会碰到打点上报，追踪错误这样的需求，即使不对特定用户进行追踪，我们也会给某个 session 分配唯一 ID 以在 log / analytics 界面能够看到用户的完整行为，对于产品分析与错误再现是十分重要的。

假设我们需要写一个 error handling ，这个 error handling 会 hold 住所有的请求的异常，我们如何分辨哪个错误是哪个请求造成的呢？

```javascript
log.error("Error occured", req);
```

那么这个 error handling 就跟 req 耦合了

假设我们需要追踪某个错误，是哪个 user 产生的，又或者是哪个错误，user 干了什么导致的？

```javascript
log.info("User has done xxx", user);
log.error("Error occured by", user);
```

于是跟 user 也深深的耦合了。

单单这样的例子好像没有什么大问题，不过多两个参数嘛。但写过大型应用的同学，后期不断增加功能的时候，你一定写过那种长长的参数列表的函数，又或者是好几百行的一个函数，实在是太不优雅，重构起来也太难。

# 尝试解决

函数如果是同步的，那么我们可以直接挂到全局变量（某个对象）下

```javascript
const global = {};
$("button").click((event) => {
  global.event = event;
  log("button clicked");
});

function log(...args) {
  console.log(global.event, ...args); // { x: xxx, y: xxx, target: xxx } 'button clicked'
  // other logic
}
```

显然这在异步中行不通

```javascript
const global = {};
$("button").click((event) => {
  global.event = event;
  setTimeout(() => {
    log("button clicked");
  }, 1000);
});

function log(...args) {
  console.log(global.event, ...args);
  // other logic
}
```

你会发现打印的 global.event 全变成了同一个对象

我们需要能够从始至终在同一个异步调用链中一个持续化的存储，
又或者是我们需要能够辨识当前的异步函数他的唯一辨识符，以和同样内容的异步函数但并不是本身的运行的这个作区分。

# CLS 登场

在其他语言中，有一个叫做 [Thread-local storage](https://en.wikipedia.org/wiki/Thread-local_storage) 的东西，然而在 Javascript 中，并不存在多线程这种概念（相对而言，Web Worker 等与主进程并不冲突），于是 CLS ，Continuation-local Storage，一个类似于 TLS，得名于函数式编程中的 Continuation-passing style，旨在链式函数调用过程中维护一个持久的数据。

## 浏览器的解决方案 Zone.js

先看看是怎么解决的

```javascript
$('button').click(event => {
  Zone.current.fork({
    name: 'clickZone',
    properties: {
      event
    }
  }).run(
    setTimeout(() => {
      log('button clicked');
    }, 1000);
  );
});

function log(...args) {
  console.log(global.event, ...args);
  // other logic
}
```

[`Zone.js`](https://github.com/angular/angular/tree/master/packages/zone.js) 是 Angular 2.0 引入的，当然它的功能不只是提供 CLS，他还有其他相关 API。

### 一个并不完美的解决方案

我们试着思考一下， `Zone.js` 是如何做到这些的。如果浏览器没有提供异步函数运行环境的唯一标识，那么只剩下唯一的一条路，改写所有会产生异步的函数，包装了一层后也就能加入hook了。

我尝试自己写了一下

<!-- https://gist.github.com/xingoxu/58f8f7faa83732ec922fcd38299f3283 -->
<script src="https://gist.github.com/xingoxu/58f8f7faa83732ec922fcd38299f3283.js"></script>

看似好像没什么问题，不过

[angular with tsconfig target ES2017 async/await will not work with zone.js](https://github.com/angular/angular/issues/31730)

#### 浏览器中现在并没有完美的解决方案

我们可以做个实验，在 console 里敲下如下代码

```javascript
const _promise = Promise;
Promise = function () { console.log('rewrite by ourselves') };
new Promise(() => {}) instanceof Promise
// rewrite by ourselves
// true

async function test() {}
test() instanceof Promise
// false
test() instanceof _promise
// true

async function test() { return new Promise() }

test() instanceof Promise
// rewrite by ourselves
// false
test() instanceof _promise
// rewrite by ourselves
// true
```

也就是说浏览器会把 async 函数的返回值用原生 Promise 包装一层，因为是原生语法，也就无法 hook async 函数。
当然我们可以用 transpiler 把 async 函数改写成 generator 或者 Promise，不过这并不代表是完美的。

## Node.js 的解决方案 async_hooks

Node.js 8后出现的 `async_hook` 模块，到了版本14仍然没有移去他身上的 `Experimental` 状态。以及在刚出现的时候是有性能问题的讨论（3年后的今天虽然不知道性能怎么样，不过既然没有移去 `Experimental` 的标签，如果追求高性能的话还是应该保持观望）

> 虽然没有移去 Experimental 的状态，但是稳定性应该没有什么太大问题，大量的 Node.js 的追踪库 / APM 依赖着 async_hooks 模块，如果有重大问题，应该会及时上报并修复

对于性能问题，不展开篇幅讨论，取决于你是否愿意花一点点的性能下降来换取代码的低耦合。

### 如何使用

async_hooks 提供了一个 createHook 的函数，他可以帮助你监听异步函数的运行时创建以及退出等状态，并且附带了这个运行时的唯一辨识id，我们可以简单地用它来创建一个 CLS。

<!-- https://gist.github.com/xingoxu/590e7f99658ea160b1f77cdb4e956637 -->

<script src="https://gist.github.com/xingoxu/590e7f99658ea160b1f77cdb4e956637.js"></script>


### Node.js 13 后的官方实现

在社区中已经有了那么多优秀实现的前提下，Node.js 13.10 后新增了一个 `AsyncLocalStorage` 的 API

https://nodejs.org/api/async_hooks.html#async_hooks_class_asynclocalstorage

实际上他已经是开箱可用的 CLS 了

```javascript
const {
  AsyncLocalStorage,
} = require("async_hooks");

const express = require("express");
const app = express();

const session = new AsyncLocalStorage();

app.use((_req, _res, next) => {
  let userId = Math.random() * 1000;
  console.log(userId);
  session.enterWith({ userId });
  setTimeout(() => {
    next();
  }, userId);
});

app.use((_req, res, next) => {
  const { userId } = session.getStore();
  res.json({ userId });
});

app.listen(3000, () => {
  console.log("Listen 3000");
});


const fetch = require('node-fetch')

new Array(10).fill(0).forEach((_, i) => fetch('http://localhost:3000/test', {
  method: 'GET',
}).then(res => res.json()).then(console.log))

// Output:
// Listen 3000
// 355.9573987560112
// 548.3773445851497
// 716.2437886469793
// 109.84756385607896
// 907.6261832949347
// 308.34659685842513
// 407.0145853469649
// 525.820449114568
// 76.91502437038133
// 997.8611964598299
// { userId: 76.91502437038133 }
// { userId: 109.84756385607896 }
// { userId: 308.34659685842513 }
// { userId: 355.9573987560112 }
// { userId: 407.0145853469649 }
// { userId: 525.820449114568 }
// { userId: 548.3773445851497 }
// { userId: 716.2437886469793 }
// { userId: 907.6261832949347 }
// { userId: 997.8611964598299 }
```

# 参考

- [Javascript与CLS（Continuation-local Storage）](https://juejin.im/post/5e23f89f6fb9a02fcf18e24a)
- [翻阅源码后，我终于理解了Zone.js](https://zhuanlan.zhihu.com/p/50835920)
- [使用 async_hooks 监听异步资源的生命周期](https://shanyue.tech/node/cls.html#async-hooks)
- [分布式追踪](https://blog.xizhibei.me/2018/04/07/distributed-tracing/)


