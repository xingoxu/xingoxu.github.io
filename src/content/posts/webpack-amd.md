---
title: '探究/使用webpack的AMD'
published: 2017-01-22 17:13:19
tags:
  - dev
  - Front-End-Dev
---

什么？webpack出2了？

刚用了小半年的webpack就又要重头学过了？

![摊手](https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/09/pcmoren_tanshou_thumb.png)

那么试试吧？先试试改造一下blog？

我擦？怎么用requirejs？

<!-- more -->


# 前情提要

也不算熟悉webpack吧，1的时候用vue-cli bootstrap了萌购的几个手机页面，虽说其实完全不用关心构建这一块，只需要改改路径就可以了，但闲下来的时候好奇心也是会驱动自己看看别人是怎么写的构建文件的，不过看别人写的构建文件，又稍微看了点其他网站的webpack的有关教程，自己倒也是没有想到AMD这件事情，也对webpack并不怎么熟悉，而且1的文档也实在是狗屎的可以，就停留在会用，会模仿着套路写


前两天2出了，看看这新的文档站，手边又正好不怎么忙，那么看看

官方风格不错，也有很好的introduction和concept的解释，重新学习了一下官方对loaders的定义，不过2刚出，文档站里也有很多问题，比如loaders现在叫rules但文档里还是loaders等这样的小问题

不过这些字眼看多了，小困难轻松克服，再看看migrate，貌似并没有什么大改动，想给公司项目试试，不过看vue-cli官方生成的构建文件里的loaders是动态生成的，于是先暂时放一放。那先试试自己的blog，改造一下，打开主题的main.js，马上反应过来一个问题，靠，我以前用AMD写的

# import requirejs from 'requirejs';

前情提要结束，回到正题，webpack里怎么用上AMD？

直觉告诉我，import requirejs from 'requirejs';

好吧，在写下这行代码前，我去requirejs的官网看了[文档](http://requirejs.org/docs/node.html#3)
看了，也没讲到构建工具，但就写法来说，都是一样的，那么试试

哦对了，忘记贴我的构建文件了，不过也没东西，就指定了入口和出口
<script src="https://gist.github.com/xingoxu/9c73872db5fce038b939ce0cce1e7c01.js"></script>

然后 `npm install webpack --save-dev && npm install requirejs --save` 

然后入口点app.js

```javascript
import requirejs from 'requirejs';

console.log('passed', "I'm in app.js");

requirejs(['./async.js'], function (asyncModule) {
  asyncModule.init();
});
```

async.js

```javascript
define([],function(){
  return {
    init(){
      console.log("I'm in async.js");
    }
  }
})
```

![import requirejs](https://ooo.0o0.ooo/2017/01/22/58849f426e077.png)

好的，无情报错，unexpected character，打开看了一下这个r.js，第一行显示是注释，但在webpack却报错了，看来是姿势不对

# 搜索一下

那么在webpack中怎么用上AMD呢，搜了webpack 1的[文档](http://webpack.github.io/docs/api-in-modules.html#require-amd)

哦？原来直接就能写？
试试，去掉import，直接require看看？async.js不变，app.js

```javascript
console.log('passed', "I'm in app.js");

require(['./async.js'], function (asyncModule) {
  asyncModule.init();
});
```

此时出现
![直接require并传函数进去](https://ooo.0o0.ooo/2017/01/22/5884a3812a1e9.png)

发现我们的async被打包成了0.bundle.js

让我们打开浏览器看看
![浏览器成功运行1](https://ooo.0o0.ooo/2017/01/22/5884a3e560cd8.png)

看Network和源文件，的确是异步


![Network 1](https://ooo.0o0.ooo/2017/01/22/5884a41a3dfa0.png)
![Source 1](https://ooo.0o0.ooo/2017/01/22/5884a43180145.png)

# require.ensure

在2的文档中，并没有找到这个require的异步用法，倒是找到了migrating from v1的require.ensure，通过这个 找到了2的一个文档，疑似发现了webpack的AMD[文档](https://webpack.js.org/guides/code-splitting-require/#require-ensure-)

webpack 2把这个api单独拿出来讲了一整页是有它的道理
一个是，webpack2把这个现在这样的引用 也看成引用一个chunk，只不过是异步引用
另一个是，没有了以前1的require AMD用法，可能将来会弃用？

从文档上也得知了，用这样的api，可以对chunkname进行指定，那我们来试试，app.js改成

```javascript
console.log('passed', "I'm in app.js");

require.ensure(['./async.js'], function (require) {
  var asyncModule = require('./async.js');
  console.log(asyncModule); //等下再说
  asyncModule.init();
},'async');
```
浏览器控制台还是正常输出了

但我们输出的文件还是0.bundle.js啊

![使用require.ensure bash中 1](https://ooo.0o0.ooo/2017/01/22/5884a7e1b5563.png)

眉头一紧，觉得事情有蹊跷

赶紧搜索一下2的文档，[找到filename](https://webpack.js.org/configuration/output/#output-filename)

> Note this options does not affect output files for on-demand-loaded chunks. For these files the **output.chunkFilename** option is used. It also doesn't affect files created by loaders. For these files see loader options.

好的，去看[chunkFileName](https://webpack.js.org/configuration/output/#output-chunkfilename)

原来如此，给config加上这么一条`chunkFilename: '[name].js'`

现在再构建一次试试

![使用require.ensure bash中 2](https://ooo.0o0.ooo/2017/01/22/5884aab1c137b.png)

# AMD模块的写法

## es6的exports写法

让我们改变一下AMD模块的写法，之前我们是用标准的AMD define，那么ES6的exports写法会怎么样呢？

app.js 

```javascript
console.log('passed', "I'm in app.js");

require.ensure(['./async.src.js'], function (require) {
  var asyncModule = require('./async.js');
  console.log(asyncModule);
  asyncModule.init();
},'async');
```

async.src.js （刚才不当心取名async覆盖掉了原来的async.js）

```javascript
export default {
  init() {
    console.log("I'm in async.js");
  }
}
```
浏览器报错
![浏览器报错](https://ooo.0o0.ooo/2017/01/22/5884ada8243fb.png)

这个问题webpack没有给我们答案，不过我在 stackoverflow 的解释中看到了[答案](http://stackoverflow.com/questions/33704714/cant-require-default-export-value-in-babel-6-x)


## 自动检测的写法

有很多插件是这种写法

```javascript
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else {
        factory(root['jQuery']);
    }
}(this, function ($) {

    console.log($);
    console.log("I'm in async.js !");
    //$.fn.anything = funciton(){...}

}));
```

ok，webpack也能帮你amd使用amd，cmd使用cmd，不过cmd也不会走下面那条factory的路哦



# 总结

使用require.ensure进行AMD获取模块
对于AMD模块，最好使用AMD模块标准编写，因为还能在define时写好前置模块，让webpack自动帮我们处理打包

~~2的文档写的仍然非常有水准~~ 黑科技满满

# Why AMD？

有同学说 用了webpack，就不需要用AMD了啊，确实，一个页面只有一个css，一个js，依赖由webpack处理了，script要炸也是一起炸，不存在一个模块加载了另一个模块没有加载的情况，也不存在AMD的应用场景了啊

确实，在处理模块之间的关系，webpack已经全部处理了，那么业务呢？

业务总有扭曲的时候，老大如果今天跟你说：“前端同学们，我们手机和电脑要做两套逻辑”，那么我们现在，除了让 nginx/后端语言 根据userAgent返回两套网页，有了新的选择







