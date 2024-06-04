---
title: hexo的备份与迁移
tags:
  - maintaince
  - blog-setup
published: 2015-12-25 21:42:48
toc: false
---

原虚拟机效率太低，决定重新装新的虚拟机只跑node.js+hexo，正好学习如何备份hexo元数据。
<!-- more -->
原则上来说，只需要备份post和主题文件夹，到新的环境下重新部署一下hexo就可以了，然而重新部署的过程中，在生成时发现，居然无法生成index.html了，也不知道是哪里出了问题，也不知道是不是插件出了问题，完全没地方下手啊，直接开搜（。

发现一个巨简单的方法，可忙这样的东西难道不是just work就ok的吗，你管他版本号要多新，想要版本号新了用新特性就再重新部署呗

> 原文来自：https://www.zhihu.com/question/21193762/answer/45552939 
　　
　　
> 把整个hexo的文件夹打包即可  换电脑的时候 重新npm install就可以了~

使用后感受：这位小伙伴，你简直是天才！It works! 