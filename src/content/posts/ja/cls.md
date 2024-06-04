---
title: CLS とは？ブラウザとNode.jsで CLS を実装してみます
tags:
  - dev
  - Front-End-Dev
published: 2020-06-29 19:48:05
---

資料を調べる際に、CLS の存在を知りました。エンジニアリングで結構いいデカップリングのやり方と感じまして、シェアしたいと思います。

<!-- more -->

# シチュエーション

ブラウザか、サーバーのNode.jsか、どっちでもエラーハンドリング、ユーザートラッキングのニーズは日常茶飯事。例えユーザーを特定しなくても、id をつけて、ユーザーの行為を追跡して、エラーの再現にも重要し、プロダクトの改善にも役たちます。

仮に今エラーハンドリングを書こうと思って、このエラーハンドリングはすべてのエラーを処理しますが、どのリクエストから生み出したエラーを知りたいと

```javascript
log.error("Error occured", req);
```

このハンドリングは req と結合しちゃった

仮に今このエラーどのユーザーから出たエラー、ユーザーが何をやったかを知りたいと

```javascript
log.info("User has done xxx", user);
log.error("Error occured by", user);
```

ユーザーとも結合しちゃった

この２つの例は一見するとそんなに大きいな問題ではなさそう、ただ２つのパラメータが増えただけじゃ。
だけど、大型サービスを作る時、どんどん増えた機能に対して、関数の引数と関数の長さと共にどんどん伸びちゃって気持ち悪くてリファクタリングしようとしょうもないこと、少なくありませんでしょうか？

# 解決してみよう

関数が同期のであれば、グローバルで変数につけたらいいじゃんー

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

だが、非同期関数のであれば

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

すべての global.event は同じイベントになちゃった(´；ω；｀)！それはだめですね。

我々必要なのは非同期呼び出しチェーンに最初から最後まで持続的なストレージ、
もしくは今走ってる非同期関数の呼び出しの唯一の識別子。

# CLS が登場

他の言語では、[Thread-local storage](https://en.wikipedia.org/wiki/Thread-local_storage)と呼ばれるものがあります。が JavaScript はマルチスレッドはありません（Web Workerなどはメインと関係ないし、自分でもマルチスレッドしない）。CLS という名前は TLS みたいに関数型プログラミングからの Continuation-passing style 名前をもらって、Continuation-local Storage、そのチェインの呼び出しの中で持続的データストレージをメンテナンスする。

## ブラウザの解決 Zone.js

どうのように解決したかちょっと見てみましょう

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

[`Zone.js`](https://github.com/angular/angular/tree/master/packages/zone.js) は Angular 2.0 から誕生したもので、もちろん他の機能も持ってる。

### この方法は残念なところがあります

考えてみましょう、 `Zone.js` はどうやってこれを実現しました。ブラウザは呼び出しに対して唯一の識別子を提供するAPIがなければ、すべての非同期関数をリライトしかできなく、そうすれば非同期が入る時と出る時 hook できて、この効果が実装できますね。

自分も書いてみました。

<!-- https://gist.github.com/xingoxu/58f8f7faa83732ec922fcd38299f3283 -->


<script src="https://gist.github.com/xingoxu/58f8f7faa83732ec922fcd38299f3283.js"></script>

また問題なさそうだけど、

[angular with tsconfig target ES2017 async/await will not work with zone.js](https://github.com/angular/angular/issues/31730)

#### ブラウザ今では完璧の解決方法はありません

実験をやってみましょう、console で下のコードを打ったら、

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

ブラウザは、async 関数のリターンをネイティブの Promise で再ラッピングします。ネイティブ文法なので、async 関数はリライトできない。
もちろん transpiler で async 関数を generator もしくは Promise にすることは可能ですが、完璧とは言わないでしょう。

## Node.js の解決 `async_hooks`

Node.js バージョン 8 以降出た `async_hook` モジュール、バージョン 14 の今でも `Experimental` ステータスから脱却してない。出たごろ性能に関しての議論もあったが、今はどうなってるかまだわからない状態ですが

> Experimental ステータスにしても安定性としては問題なさそう、大量な Node.js のトラッキング / APM が依存していて、問題があったら issue が立てられるはずです。

性能に関する問題はここは展開しない、コードの低結合と少しパフォーマンスの低下を交換するかしないかによりますね。

### 使い方

`async_hooks` は `createHook` という関数を提供した、これが非同期関数のライフサイクルに hook できます、しかも唯一識別子も提供してくれますので、CLS を簡単に作れます。

<!-- https://gist.github.com/xingoxu/590e7f99658ea160b1f77cdb4e956637 -->


<script src="https://gist.github.com/xingoxu/590e7f99658ea160b1f77cdb4e956637.js"></script>


### Node.js バージョン 13 からオフィシャルの実装も

コミュニティの中でたくさんの CLS ライブラリーがあった上に、Node.js 13.10 から `AsyncLocalStorage` の API がありました。

https://nodejs.org/api/async_hooks.html#async_hooks_class_asynclocalstorage

実はこれはすでにすぐに使える CLS です。

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

# 参照

- [Javascript与CLS（Continuation-local Storage）](https://juejin.im/post/5e23f89f6fb9a02fcf18e24a)
- [翻阅源码后，我终于理解了Zone.js](https://zhuanlan.zhihu.com/p/50835920)
- [使用 async_hooks 监听异步资源的生命周期](https://shanyue.tech/node/cls.html#async-hooks)
- [分布式追踪](https://blog.xizhibei.me/2018/04/07/distributed-tracing/)


