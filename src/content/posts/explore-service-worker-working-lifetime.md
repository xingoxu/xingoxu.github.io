---
title: 探索 Service Worker “生命周期”
tags:
  - dev
  - Front-End-Dev
published: 2017-08-11 15:05:42
---

最近讨论 PWA 的好多啊，PWA 中有个非常重要的角色是 Service Worker 。刚写这篇文章的时候粗心一看，把现在发的 Working Draft 的发布时间以为就是 Service Worker 的发布时间，被棕神挑刺啦。spec 仓库的第一个 commit 是 2013 年 2 月 7 日，W3C 发第一个 Service Worker 的 public working draft 是 2014 年 5 月 8 日，第一个实现 Service Worker 的是 Chrome 40 （2015 年 1 月 21 日）

<!-- more -->

以下将Service Worker简称为SW

SW的功能略有耳闻，在MDN上它被描述为，“对资源缓存和自定义的网络请求进行控制的一个好的统筹机制”，同时他还具有“访问推送通知和后台同步API”

听起来很神奇，事实上看起来也很神奇，Twitter上个月更新了样式，大家都看到了推特变成了圆头像圆角，然而推特还使用了新的 SW，在允许推特使用Notification的情况下，推特可以在你Chrome开启的时候而没有打开网页的时候给你推送你所关注的内容（[传送门](https://twitter.com/settings/web_notifications)），有一种javascript在关闭网页后，甚至没有打开网页的情况下，就能在后台运行的感觉。

但事实上并非如此

# 编写一个最简单的 SW

从零创建 Service Worker，只需四步

**第一步**：我们需要一张 index.html

```html
<html>
  <head>
    <title>My first Service Worker test</title>
  </head>
  <body>
    Hello, Service Worker!
  </body>
</html>
```

**第二步**：我们需要一个 sw.js，他就是我们的service worker
```javascript
console.log('When you see this, we have successfully registered the SW!');
```

**第三步**：我们需要在刚才的网页上注册，我们可以在网页中的js引入注册，在这里我直接写在了index.html的script标签

```html
<script>
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js', { scope: '/' }).then(function(reg) {
      // registration worked
      console.log('Registration succeeded. Scope is ' + reg.scope);
    }).catch(function(error) {
      // registration failed
      console.log('Registration failed with ' + error);
    });
  }
</script>
```

**最后一步**：将上边的两个文件放在一个文件夹里，从这个文件夹起个服务器

打开浏览器，访问localhost，让我们看看控制台

![一个最简单的 SW](https://i.loli.net/2017/08/11/598d457727c83.png)

至此，我们的第一个 SW 就成功完成了

# SW 的 Debug

在chrome中，我们可以通过 [`chrome://serviceworker-internals/`](chrome://serviceworker-internals/) 查看浏览器注册的所有SW

![chrome://serviceworker-internals/](https://i.loli.net/2017/08/11/598d45b36a053.png)

可以在 [`chrome://inspect/#service-workers`](chrome://inspect/#service-workers) 查看到当前正在运行的所有 SW

![chrome://inspect/#service-workers](https://i.loli.net/2017/08/11/598d45ea6be64.png)

点击inspect，可以在Console中看到SW在控制台中输出的内容，在Source中，对SW进行断点调试

如果你还保留着刚才的那个localhost，你可以发现，在inspect service-worker页面中，我们刚才的sw.js还一直在运行着

# Service Worker 的“生命周期”

SW 的生命周期与事件可以在MDN上找到，也不再重复贴出，SW的缓存与推送通知就是靠着他的生命周期所发出的这些`event`来驱动的。

我想说的是另一个生命周期，我刚才说到，如果我们第一次进入localhost，并一直保留在那个页面，在inspect service-worker还可以看到service worker还一直运行着

我们可以将 sw.js 改写成如下

```javascript
setInterval(() => {
  console.log('test');
}, 5 * 1000);
```
在 chrome://serviceworker-internals/ 取消注册 SW ，并强制刷新 localhost（ mac下 ⌘+shift+R，windows 下 ctrl+shift+R ），我们会发现控制台中，每五秒就打印了一次 test，这也正是说明，SW在第一次进入的时候没有关闭页面的时候，一直在运行，我们也可以在刚才的 chrome://serviceworker-internals/ 看到这个 SW 正在运行。

![5秒打印console.log('test')](https://i.loli.net/2017/08/11/598d4776cc312.png)

然而当我们关闭localhost页面，稍等十几秒后，在两个调试页面上，sw.js都会消失/停止了运行

![关闭localhost后 sw 停止了运行](https://i.loli.net/2017/08/11/598d45b36a053.png)


我们再直接打开localhost，打开控制台，发现只有`Registration succeeded.`，而没有了test，再看两个调试页面，发现sw.js依然没有运行

![重新再次打开页面 sw 没有运行](https://i.loli.net/2017/08/11/598d498dc090f.png)

让我们关闭这个localhost，将 sw.js 改写如下

```javascript
console.log('Yet Another sw.js');
```

保存后，打开localhost

![第一次改写sw.js](https://i.loli.net/2017/08/11/598d4b2ce1e1e.png)

我们刚才对 SW 完成了一次更新，发现他注册 handler 只会注册一次，接下来我们对 SW 的生命周期与运行周期进行探索，看看他在打开网页时，会不会触发生命周期。

然后我们再对 sw.js 进行重写

```javascript
self.addEventListener('install', function (event) {
  console.log('install');
});

self.addEventListener('activate', function (event) {
  console.log('activate');
});
```

关闭localhost，等待sw停止运行或者deactivate它后再打开localhost，控制台显示出了`install`和`activate`

![改写sw.js 加入生命周期](https://i.loli.net/2017/08/11/598d4b85023f5.png)

再次关闭 localhost ，等待 sw 停止运行再打开 localhost ，控制台上只有 registration succeeded

![重新再次打开页面 sw 没有运行](https://i.loli.net/2017/08/11/598d498dc090f.png)

很明显，SW 的生命周期的事件也只会触发一次，只是相对于他第一次下载后。

更新SW的机制可以在MDN上的 [#更新你的Service Worker](https://developer.mozilla.org/zh-CN/docs/Web/API/Service_Worker_API/Using_Service_Workers#恢复失败的请求) 这章看到，但这仅仅几行文字，而且比较绕口，我认为这其实是SW自身的工作周期，或者说是运行机制


于是在W3C Working Draft找到了Service Worker的[Lifetime定义](https://www.w3.org/TR/service-workers-1/#service-worker-lifetime)

```
The lifetime of a service worker is tied to the execution lifetime of events and not references held by service worker clients to the ServiceWorker object.

A user agent may terminate service workers at any time it:

- Has no event to handle.
- Detects abnormal operation: such as infinite loops and tasks exceeding imposed time limits (if any) while handling the events.
```

于是我觉得SW的工作周期结合上边的表现可以由下边的图来表示


![SW 工作周期](https://i.loli.net/2017/08/11/598d4e045ebfe.png)

其实图里有一点不对的是，sw 的第一次运行并不一定是网页关闭才结束的，根据标准来的话，只要 sw 没有 event 需要 handle ，sw 的工作进程都可以结束，只是 Chrome 下是如此运行的。

另外需要一提的是因为工作线程结束了，因此在外边的变量不一定还保持着之前结束前的状态，所以不要写出如下的代码

```javascript
let count = 0;
self.addEventListener('fetch', function (event) {
  count++;
  console.log(count);
});
```

可能为1，也可能是2




# 最后

SW 是一个事件驱动型Worker，本质上，它是个Worker，工作在 worker context，所以没有访问 DOM 的权限

如果他要和window进行一些操作的话，与web worker类似，需要使用postMessage这样的方法来传递信息，在window里才能进行DOM操作

SW 是个Event bus，他的几个运行周期的事件，是专门为缓存与推送量身打造的（install事件和push事件），因此他的扩展性也非常好，以后如果有更多需求只需添加事件即可（比如chrome实现了sync事件是为了弥补离线时从本地到服务器post的不好体验），它将我们对资源拉的需求（对服务器的请求资源，对服务器的轮询），隐形转换为了推（本地缓存资源代码控制缓存，统一服务器推送）


