---
title: '新MacBook Pro连接U2715H并使用SwitchResX开启2K HiDPI'
published: 2016-12-18 21:57:37
tags:
  - maintaince
  - macbook
---

  **非Apple显示器字体模糊的终极方案**

  OSX的渲染和输出是分成两部分的，因此，我们可以利用这个机制在普通2K显示器上开启2K HiDPI

<!-- more -->

# 前言

等了一年半，很早就想入macbook的坑了，然而呢厨师貌似忘记了mbp这条产品线了，当然了，英特尔也是有一部分责任的，因此一年前的这个时候，我买了微软的surface pro 4。

结果这玩意非常不好使啊，开发者这边各种吃屎啊，各种没有快捷键啊，起个bash非常烦啊（最快也要右键），终于一个月前入手了macbook，但入手之后的那段时间，非常非常忙，各种事情吧，所以直到最近才有时间去配置各种开发环境。

当然我也不是果粉，os x这个破系统也是💊，各种问题，也有很吃屎的地方（有空整理），所以，surface pro 4还不能扔掉233

# 初次连接显示器

连上u2715h之后，我以为会展现一个比windows更好看更漂亮的，结果没想到，连上之后的字 是这样的：

![未调整前](https://ooo.0o0.ooo/2016/12/18/58569bffcf83b.png)

好好的東京のイケメン男子就被这个长满粉刺的字体给毁了，尤其是这个g，非常难看，感觉糊在一起了，整个人都不好了，怎么会这样

# google一下？

80%教你开启LCD字体平滑，但开启之后，并没有任何卵用

20%教你使用一个ruby脚本，将Television变成显示器，然而，还是没有任何卵用

上面那张图就是干完那两件事情之后的截图，还是那样，粉刺字体，像狗啃过

# 试试hidpi？

在surface上装过虚拟机的黑果，当时用过一个软件叫RDM，为高分屏而准备的（也就是变成Retina的渲染效果），打开发现，有HiDPI的选项，选择1280x800，开启了hidpi，字体平滑了，结果因为显示器是16:9，选择的是16:10，旁边有两条黑边，想选择1280x720，结果点了无反应，唉，无奈 回到原来的分辨率

所以通过这个事情知道了，并不是显示器的问题，只是苹果在1:1的显示下已经放弃了治疗（同时在思考macbook air朋友的心理阴影）

# 探索新可能

既然知道了hidpi是字体平滑的关键所在，那我就试试往这个方向搜索看看，由[这贴](https://www.v2ex.com/t/277921)和[这贴](https://www.v2ex.com/t/307893)和[这贴](https://www.zhihu.com/question/27610849)得知，osx的渲染和输出是两个步骤，得知了一款SwitchResX的软件，可以修改自定义分辨率，那就尝试一下

按照[此贴](https://www.zhihu.com/question/35300978)得票最高做法，安装SwitchResX，关闭SIP，重启，添加Custom Resolution，保存，重启

结果tm是 "Not active - invalid?" ，握日 折腾了一晚上，还是不行吗？心灰意冷之时，拉到下方看到 Sierra 做法，只是比上方多新建一个账户，感觉很奇怪，新建一个账户又能改变什么呢，抱着并不怎么会成功的心态尝试了一下，新建了账户，删除了原有的分辨率，填入了1080px2的分辨率 3840x2160，重启，进入新建的这个账户，尝试一下，居然成功了！

于是更大胆的思考了一下，既然是渲染与输出两部分，那也就是说，我可以使用5k分辨率HiDPI到2k，进行输出咯？于是我就尝试添加了一个5120x2880，重启，点击切换，哇！成了！字体变得顺滑了！

![成功在普通2K显示器开启2K HiDPI](https://ooo.0o0.ooo/2016/12/18/5856a391cadba.png)

![对比](https://ooo.0o0.ooo/2016/12/18/5856a5badb5b3.png)


# 后遗症

折腾了这么多的方法后，这些方法给我留下了后遗症，我并不能确定是SwitchResX这个软件留下的，还是因为这些个方法一起作用，导致了下面的后遗症

## 合盖的时候外接显示器必须不能是hidpi  

正常外接显示器的情况下，合盖之后，外接显示器黑屏，再亮屏

如果合盖之前外接显示器是hidpi，合盖之后，外接显示器一定黑屏毫无显示，此时其实有信号，有鼠标，但就是黑屏，打开盖子又正常了。尝试之后发现是合盖的时候外接显示器不能为hidpi，这并不意味着你开盖的时候外接显示器不能是hidpi，也并不意味着你合盖之后外接显示器不能变成hidpi，只是如果你要合盖，那外接显示器请不要是hidpi

## **开盖莫名其妙注销了**

真的是莫名其妙至极，插电插外显示器的情况下，开盖后要求输入密码，结果输入之后原有程序统统重新打开，黑人问号！

我尝试过把系统设置里取消勾掉再重新勾上，也尝试过把SwitchResX中的Sleep monitors after disabling给取消勾掉，更尝试过删除switchresx，并没有任何效果，所以这个后遗症需要十分注意！

当然我自己也找到了一个变通的方法，那就是，拔掉线，再开盖，就不会注销了，虽然麻烦了点，但我希望把我电脑搞出这个设定的人去吃屎

# 小问题

这个问题应该不是由软件引起的，没错，这个问题就是 卡

思考一下，你的显示器是2k的，显示效果完全都由显卡渲染，mac输出5k分辨率，再缩到2k，虽然是新款的macbook pro，系统的动画也不卡，但用chrome的时候，就会很明显的发现一些css3的效果非常明显的掉帧，大概降到了20帧/s吧，safari好一点，但也就比chrome好大概10帧左右

这个问题说大不大，说小不小，不大的原因是，chrome这种调显卡渲染的程序不要开太多，对于我这样拿mbp写代码的人，基本没有什么影响，也就是开一个chrome，开一个编辑器，编辑器基本无视，也就是chrome，chrome也就是看看文档，和显示的效果而已

不小的原因是，我今天中午下了个720p的新番全屏来看，结果看到一半，开始掉帧卡了，一摸macbook，贼热（我的macbook放在床上，因为天气很冷，所以也不怎么在意温度，不看视频的时候摸了下只是温的），马上放到了桌子上，让他散热，很快macbook的温度就降下来了（也让我看到了这么牛逼的散热，这surface简直是落后几个世纪），愉快的继续看视频

所以结论是
1. 保持散热
2. 别开太多浏览器

当然如果你很在乎性能，不在乎这点渲染效果，那还是还原成2k普通分辨率吧，我之前的switchresx应该也不是完全卸载，完全卸载官方的做法是在顶部菜单里uninstall，不过官方说会删除所有switchresx做过的修改，那估计自定义的分辨率也会被删除









