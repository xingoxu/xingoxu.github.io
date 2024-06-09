---
title: 写一些最近Android学习中遇到的坑以及心得
tags:
  - dev
  - android
published: 2016-01-22 02:05:18
---

## Intro:
1. Android Studio Library的导入与导出
2. Java的Exception再复习
3. Handler的内存泄漏问题与其相关的Looper坑
4. AppCompat v7的Toolbar与Contextual ActionBar
5. 心得


<!-- more -->

## 最近Loop：[シュガーソングとビターステップ](http://music.163.com/#/song?id=32192451)

<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=86 src="https://music.163.com/outchain/player?type=2&id=32192451&auto=0&height=66"></iframe>


## Android Studio 库相关的正确使用姿势

Android Studio 1.5.x 更新后很多网上找到的其他教程包括回答基本都是旧版本的，直接lib下添加，然而在编译时总是遇到这样那样的问题，原因在于Gradle会把jar compile了，然而module本身的package(感觉相当于命名空间？)却没有导入，当你导入后，两行命令相互打架编译时能通过却无法生成apk提示错误。提示的错误五花八门，一会是java虚拟机非0退出，一会是Class文件重名。

### 引用其他人的jar/aar Lib
Library在Android Studio中相当于一个Module，在Project中如果想要导入其他人的库，则选择File->New Module...
![File->New Module...](https://ooo.0o0.ooo/2017/05/25/5926470bb0406.png)

选择Import .JAR/.AAR Package，之后简单，就不细说了，请不要忘了如果Lib作者有要求提示在Gradle中加入脚本的不要忘记加入
![Import Jar/AAR](https://ooo.0o0.ooo/2017/05/25/5926470bc2810.png)

### 新建Library Project

还是新建普通的Project，然后New Module选择Android Library，在新模块下工作，写demo的话就到app下进行工作就ok了

### 导出Library

对整个Module Build后就可以在模块路径下，build->outputs->aar中找到aar包了

## Java Exception

### 异常分类

所有的异常都派生于Throwable类

但所有的异常在Throwable下将分为两类:Error,Exception

Error是Java运行时系统的内部错误和资源耗尽错误，应用程序不应该抛出这样的错误。这一类不用管

Exception层则又分为两层，Runtime Exception和其他异常(Checked Exception)
   
   

Runtime Exception是运行时错误，是由于编写程序时的疏忽导致的，比如：

* 错误的类型转换
* 数组访问越界
* 访问空指针

其他异常包括：

* 打开不存在的文件
* 在EOF后尝试读取数据
* 根据字符串查找Class对象，然而该字符串表示的类并不存在


"如果出现了RuntimeException异常，那么就一定是你的问题"
去理解这句话与两类Exception，应该这么理解：

RuntimeException是指这样的问题能够在编写程序时完全避免，是逻辑异常！
**因此！**
程序运行时也不需要去针对发生这样的异常而去采取相应的解决措施。
**而且！**
不应在方法上对RuntimeException进行声明

而其他异常，也就是Checked Exception，是指在书写这一方法时，对那些格式正确，命令逻辑无错但却并不存在，命令无法执行，而且并不能知道如何去解决这些问题的时候所抛出的异常
对于这样的Exception，书写方法的人与调用方法的人都对这样的格式正确，逻辑无错的命令事先并不知情，对代码已检查过后抛出
**因此**
他叫已经检查过了的错误，所以这样的异常需要进行捕获，而不是事先便能排除。**但Java中并没有这样一类叫做Checked Exception**，这是语言规范。

事实上我觉得已检查异常这个名字真的很容易误解。~~已检查了的异常还用抛出咩233~~

**请注意，所有的异常都发生在运行时，而不仅仅是RuntimeException**

### 两类异常如何选择？


#### 使用方法时： 

当遇到RuntimeException时，应该是事先检查而避免发生异常，不是发生异常后进行捕捉处理
当遇到其他异常（已检查异常）时，则应try&catch，当发生异常时，如果能够解决，则处理，不能解决，则继续向上抛出

#### 编写方法时：

当遇到RuntimeException时，大多数情况下不必手动抛出，也不应在方法上声明，例如越界访问，一般来说，这样的运行时错误会被自动抛出，如若想自己对参数进行校正检验抛出可以继承RuntimeException类创建一个自定义运行时异常对象或者new RuntimeException对象
当遇到CheckedException时，直接抛出即可

### 如何考虑异常的捕获

“底层抛出，顶层记录解决”，是一句比较正确程序观的话。


## Handler的内存泄露问题

这个问题的引发是由于在实践Handler时使用匿名内部类/非静态内部类重写handleMessage方法，Android Studio的深色提示会显示：

![Handler Memory Leaks Tips](https://ooo.0o0.ooo/2017/05/25/5926470bb12d7.png)


这个问题的解决很多文章很多回答都有，贴两个：
http://blog.csdn.net/lincyang/article/details/46875157
http://www.jianshu.com/p/cb9b4b71a820

在看这些回答前，应该先了解，在Java中的引用与垃圾回收的机制，以及强弱引用
http://blog.csdn.net/matrix_xu/article/details/8424038

对于这些回答中的一些小疏漏就是，对于任何外界（生命周期比Handler短）的引用，都应该用WeakReference

### 深层次想法

对于内存泄漏，就是该释放的时候，系统的垃圾回收器没办法释放掉，原因是有强引用正在引用着这个对象，如果说两个对象的生命周期一致，则没有这个问题，如果说生命周期比我生成的对象要短，而且，我不一定需要这个对象一定是保存到我的对象结束为止的话，就应该使用弱引用而不是强引用

## Looper

Looper这个坑真是深的不行，所有的学习过程中，包括看视频啊，看书啊，看博客啊，都没有提到。
对于线程之间的通信，使用的是Handler/Message Queue进行相互交流，对于自行new 的线程，我们需要执行以下两步来初始化Looper以保证Handler能处理消息

```java

@Override
public void run() {
	//do anything
	Looper.prepare();
	//prepare your Handler here and do anything
	Looper.loop();
}

```

然而当我们的Handler处理完消息，我们的消息只需要处理一次，想要把线程终结了的时候，没有视频，没有书会告诉你，要记得把Looper关掉，源码是说Looper.loop()是死循环，因此Thread永远不会停止，Handler永远会接受消息，没错Handler的职责就是一直负责处理消息，然而如果没有消息再进来了，这时我们不需要这条线程这个Handler这个Looper了，如果一直不停的创建Looper，则会引发Android的Assert!
Assert的提示是：

```
Abort message: 'Could not create wake pipe.  errno=24'
```
或者是
```
Looper: Could not create epoll instance.  errno=24
```

有时会提示
```
/A art/runtime/indirect_reference_table.cc:77] Check failed: table_mem_map_.get() != nullptr ashmem_create_region failed for 'indirect ref table': Too many open files
```
真是千奇百怪的错误提示，google搜了一大圈都没搜到，也从来没有往Looper这个方向想，尽管loop是死循环，但对他死循环没有卡系统也就没有想太多

根本原因Looper的实现是用pipe//待探究

最后解决是如果我处理完了信息不需要Looper了，对Looper**对象**进行quit()就可以了：looper.quit();，这样线程也就随之而结束了

> Looper对象如何获取：
> 在prepare后
> Looper looper = Looper.myLooper();
> 就可以了

当然啦，如果处理异步，规范的做法应该是两条线程，主线程交给后台线程进行处理耗时操作，而不是每次新开的一个线程里直接发送返回处理

~~（我不会说我在写这段话的时候才想起来应该这么做，这个问题可困扰我好长时间了）~~

对于有兴趣想知道为什么我会找到这样问题的可以来看：

[pixivImageCacheHelper](https://github.com/xingoxu/pixivAPI_android/blob/90de95bb4e475ad0211b449d22b06bdc3b7e7bf4/app/src/main/java/com/xingoxu/pixivapi_in_android/Logic/pixivImageCacheHelper.java)

> 想法是新开一个线程发送请求后就在当前线程处理返回的请求，应该做法是在新开的线程中定义Handler，将这个handler作为主线程发送的请求的参数

## AppCompat v7的Toolbar与Contextual ActionBar的坑

Google 在v7兼容包发布后对于Contextual ActionMode感觉上来说不太支持，所有的文档也并不鼓励使用Contextual ActionMode，然后在使用的过程中就感受到了满满的恶意

> [来自谷歌官方的提示：](http://developer.android.com/guide/topics/ui/menus.html#CAB)
> Note: The contextual action bar is not necessarily associated with the app bar. They operate independently, even though the contextual action bar visually overtakes the app bar position.

Toolbar and Contextual ActionBar with AppCompat-v7

https://stackoverflow.com/questions/26443403/toolbar-and-contextual-actionbar-with-appcompat-v7
http://stackoverflow.com/questions/27663853/how-to-make-the-contextual-actionmode-bar-overlay-the-appcompat-v7-toolbar-but-n


http://stackoverflow.com/questions/32318563/appcompat-v7-v23-0-0-statusbar-color-black-when-in-actionmode

最后对于ActionMode的status bar变黑问题上，我选择了：
http://stackoverflow.com/questions/30180091/when-using-actionmode-the-status-bar-turns-black-on-lollipop
的处理方法，虽然不够完美，有精力的话是会想重新自己造轮子的

## 心得
感谢你看到这里！

对Java/Android的设计模式感受到了前所未有的累，虽然知道他用的这个模式，自己在写的时候虽然只是模仿就已经是非常艰难了，因为是在学习，虽然是以作品驱动的学习动力，也不敢乱用第三方的库啊什么的，嘛，希望自己能够加油！ ~~自己选的坑含着泪也要跳下去~~

### IDEA/Android Studio的一些自用快捷键：
* Ctrl+P 方法参数提示
* Ctrl+Space 补全提示
* Ctrl+B 快速跳转定义/实现
* Ctrl+Q 文档显示

### References：
都是已经填平了的坑的文章，感谢这些作者的付出！

> [API Demos Source Code From Git at Google](https://android.googlesource.com/platform/development/+/master/samples/ApiDemos/)
> [Why do variable names often start with the letter 'm'?](http://stackoverflow.com/q/4237469)
> [imageView src与background关于alpha的两三事](http://my.oschina.net/blackylin/blog/144342)
> [RecyclerView的使用](http://blog.csdn.net/lmj623565791/article/details/45059587)
> [为RecyclerView 添加ChoiceMode](https://www.bignerdranch.com/blog/recyclerview-part-2-choice-modes/)
> 
> 大量图片异步加载
> http://blog.csdn.net/chdjj/article/details/20455791
> https://developer.android.com/training/displaying-bitmaps/cache-bitmap.html
> 
> SwipeRefreshLayout RecyclerView的下拉刷新与上拉加载
> http://51up.club/2015/10/13/SwipeRefreshLayout-RecyclerView-%E5%AE%9E%E7%8E%B0%E4%B8%8B%E6%8B%89%E5%88%B7%E6%96%B0%E5%92%8C%E4%B8%8A%E6%8B%89%E5%8A%A0%E8%BD%BD%E6%9B%B4%E5%A4%9A/
> https://www.easydone.cn/2015/10/26/