---
title: 用 Astro 翻新我的博客
published: 2024-06-04
# description: ''
image: https://cdn.buttercms.com/xrVbfdR5TBy4iTaY4xl7
tags: ['notes', 'dev']
# category: ''
draft: false 
---

好久没有写博客了，忙是比较大的一个因素以外，事实上这几年也感觉确实没有什么积累，一方面前端虽然还是变化很快，但翻来覆去其实就那几个花样，我会觉得这也要写一篇文章水吗？另一方面博客本身也是各种长草，另外把想法组织成语言很难是因为当写成文章时就必须要归纳和整理，提升了整个难度。今天这篇文章主打一个想到哪里写哪里，希望能够降下自己写文章的门槛，聊一聊 2024 我用 Astro 翻新了我的博客。

<!-- more -->

# 为什么要写博客

在我刚开始工作的时候我觉得写博客只是一件很酷的事情，“哦你/他在写博客”，在我内心的想法中是为了记录所以才记录的感觉。然而最近我在写自己的项目的时候，当我思考如何解耦的时候我翻到了之前写的 [CLS](/2020/06/cls/)，最后成功的解决了问题，收获很大。我才意识到其实写博客是一个知识整理的过程，把工作时出现的问题能够记录下来在脑袋里消化最后用语言总结成文章，其实对自己应该是有所帮助的。

# 为啥很久没有写博客了

文章开头简单说了一下理由，首先前端本身在我个人的观测下其实整体架构趋于稳定，每件事情都有着固定的解决方案了，就算是Next.js，也只是整合整合再整合的感觉。
其次是写博客本身的心里难度，很多事情一旦有了条条杠杠，做起来就会觉得有了难度，比如一旦动起笔来就会想我这篇文章标题起什么，小标题起几个怎么分段等。而其实我们每个人有想法的时候经常是一段一段的，并不太会事先规划好。而且事实上我在写离职的那篇文章的时候，就是先在TickTick中把自己想到什么就写下来，最后再一起搬到记事本里调整顺序和归纳。因此从个人的习惯，到支撑整个博客的系统上需要能够支持这样的碎片化的想法。

# Hexo 的问题

直到2024年的年初为止，我都还是使用Hexo在书写博客。Hexo 之前的静态网站生成是 jekyll，jekyll 我没用过但 hexo 的命令行整体一看就是专为博客而生，再加上当时国内大学生之间都很流行，于是就用了。没想到这一用直接用了近10年，还蛮意外的。

Hexo 在我的观测下是内容和主题做到了分离，而且主题可以使用ejs等模板引擎进行一个不错的根据内容的区分进行生成。也正是这样简单的架构让我一直用到了现在，也催生了许许多多的主题的产生。几年以来我对我的博客主题修修补补，经历了多说倒闭到自己的评论系统的迁移等等。

早期 Hexo 的包依赖有 node-gyp 等，我不是很清楚为什么会有这样的依赖，导致 CI 有时掉线，换个平台就炸了生成不了，每次执行 npm i 总是心惊肉跳的，近年 Node 生态渐渐稳定，也有了锁定版本等等，但旧版本的 Hexo 在新 Node.js 版本上好像没法运行，再去官网看的时候发现更新了很多大版本。结果最近的大版本好像把很多设置项给取消掉了，主题也没法调用了。就觉得 Hexo 也开始显得老态龙钟了。

当然这只是一个导火索，长期以来前端环境不断发展，打包系统从 Gulp 到 Gulp 到 webpack 到 rollup 到 vite 等等等等，都是在补齐原生浏览器的包系统的不足和网络资源的最优化。然而 Hexo 对这些构建系统完全是没有支持的，那么在调试过程中就比较麻烦了，需要自己搭建构建系统后再开一个预览，但是 Hexo 的 markdown 就不是实时更新了。而且 Hexo 的 build 命令也不会帮助你去构建你的那些资源，也就其实相当于完全是两套。整体来说会变得相对麻烦，虽然理清楚了也还好。我也一直很想引入打包系统对整体的代码进行一个重构和前端代码压缩等等。但其实一想到要自己再搭个脚手架就完全没有了动力。

当然我对整体设计其实也不是很满意的，反而到了现在这个年龄我更会在乎内容，如果内容吸引人，那么自然会去找作者的信息，而不需要主动去展示自己的信息。之前的那个主题还是有点过于 fancy 和二次元了。

那么正好年初开始 Astro 开始流行了，于是便看了起来。

# Astro

[Astro](https://astro.build/) 也是一个静态网站生成器，但他与其说静态网站，其实也在服务器上运行，并有处理类似 cookie 这种和 db 交互的能力（SSR模式）。具体就不介绍了 ~~（我自己也会去摸透）~~  。

谈一下 Astro 的优点，首先是卖点全新 Markdown 格式 MDX，Markdown里可以插组件，导入包等等。大概挺好用的吧，~~我暂时没这个需求让我怎么评价~~，这个格式暂时观望吧，因为如果有其他框架，其他 CMS 支持的话，那我也许会使用，但我更倾向于在 layout 也就是主题上做文章，我觉得对张鑫旭这些写 sample 教学文章的大佬可能会有用，同样一个 component 可以直接展示出来。

其次是框架混用，Astro 自己的 layout 里边可以使用你喜欢的框架比如 svelte，Vue，React等等，但内容本身都是在静态生成命令执行的时候产生的，所以传统的 onMount、useEffect 等等都不会如你所想的在客户端进行绑定事件监听。需要在调用框架组件的时候加入以 `client:` 为首的 directive。但无论加入哪个指令，script中的内容将会完整的被打包系统吐出来最后写进脚本里，因此做多语言的时候你的语言 Map 有可能会被单独打包成一个chunk，有人可能会在乎，有人可能不会，而对于我来说，HTML中既然已经存在了这样的语言，是不是就不应该再写一遍进 JavaScript，那么我就会用 props 传进去之后，调用直接渲染模板，就不会被打包了。但这样进而会导致写法冗长，不利于代码的可读性，不过这也是仁者见仁，或者说是全看写代码的人如何协调了。

以及还有一些小问题吧，比如我需要format时间，Astro 经过 parse 后给到我的时间是一个 UTC 时间，我理解 Astro 支持多时区，文章的DateTime可以有时区信息，但现有的文章全都是没有时区的，因此我必须把 Node.js 的市区也得默认改成 UTC，然而官方的推荐做法是根目录添加`.env`使用 `import.meta.env`，进而避免对 `process.env` 的污染？但现有的框架比如 date-fns 都没有使用 import.meta.env 就导致了我还得手动去想在哪里安排设置这个环境变量。


另外每个“框架组件”都会生成一个 chunk，即使我在 vite 中配置成合并一个，但仍然产生了 1kb 的 import chunk，这我就觉得很奇怪了，但也不知道该怎么去搜和提 issue。以及在 src 下的图片引入一定经过 processor，就算把 astro-compress 的图片选项关掉，也还是被进行了一次转换。我就觉得很不能忍受。

我很有理由怀疑这些个问题我不但不会去找解决方案，可能直接就下次换新框架了🌚

至于为啥不用 Hugo，兄弟，前端你必须得用最新的啊，不然这堆翔你都赶不上热的啊

# Waline

评论的问题之前自己撸了一个实现，但打工人，没有什么时间去维护这些事情，而且当时没有加入包括验证码等防止刷评论的实现，以及把 home server 换掉之后，构建完成的前端 dist 我忘记移动到新的 server 了，又懒得去再从源代码上重新构建一下，于是那就找个现有的实现吧。

现在 2024/05 的时间点上，self-hosted 的评论系统有 waline 、 twikoo 、 artalk 这三个，另外还有个利用 github 的 giscus，
首先我对评论借 github 这个行为不是很喜欢，总觉得有种错误使用方式的感觉因此排除，而且我曾经在数据库里的评论数据感觉也不是很好导入（花时间肯定可以）排除。几家的实现功能和实现方式和我当时构想的都差不多，那么剩下三个就是比较一下星星数和开发状态，issue 状态，有没有踩到自己不能忍受的雷点等等。

最后还是选择了星星数和开发状态最活跃的 Waline。数据库用的 PostgreSQL，改了一下mySQL导出的语句三下五除二就复原了原来的数据并现在展示了出来。


# 余留课题

- [ ] Google Analytics & Google AD ***能恰的话还是想恰口饭的嘛（谁不想呢）***
- [x] photoswiper →　fancybox ***我靠 2024 年的 photoswiper 居然可定制化程度还没2014年的高？***
- [ ] 分类显示不同语言的post ***自己给自己挖了个大坑吧，routing 搞的自己头都大。。。***
- [x] 代码片段支持复制 ***真的很需要，但好像得写插件 / 纯 JS 添加***


# Reference

> [Astro & Shiki line number issue](https://github.com/shikijs/shiki/issues/3)

> [.nojekyll](https://stackoverflow.com/questions/74489844/astro-js-deployment-media-files-not-rendering)

