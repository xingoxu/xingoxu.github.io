title: 初识命令行git
categories:
  - dev
  - git
date: 2015-12-25 21:50:12
---


git的教程很多，但很杂，留一篇自用吧
<!-- more --> 

# 机遇
以前一直使用傻瓜式的SourceTree，然而今天（2015-12-1）升了级之后全部爆炸，完全push不上去，好吧，不得不感叹一下windows平台真的越来越像个定时炸弹（微软再这么玩真的。。。）
在部署blog的时候也学习了git的一点点概念，所以上手挺快

# 0 安装

在windows平台上，git的客户端有很多，在这里我选择git for windows(以前是msysgit)

首先你得从他的官网(https://git-for-windows.github.io/)上下载下来

安装过程中没有什么需要配置的，如果看不懂，请自行学习英语这一门语言

安装后先打开git然后输入两条命令

```
git config --global user.name "user_test"
#git的全局设置，设置一次即可，这里设置用户名
git config --global user.email "user_test@user.test"
#git的全局设置，设置一次即可，这里设置邮件
git config --global push.default simple
#听说需要设置
```

# 1 初始化仓库

不管是远程已经有了仓库，还是自己家有仓库，首先在git里你都必须新建一个仓库，如果在文件夹下没有检测到.git文件夹，他就不会对这个文件夹有任何操作，such as pull or push

可以在任何你想建立仓库的父文件夹下右键git bash here(如果你没有在安装时去除这个钩钩的话)

进入后输入命令
```
mkdir 仓库名
cd 仓库名
git init
```
![git init][1]
[1]: https://ooo.0o0.ooo/2017/05/25/5926482034f7a.png
你的仓库就初始化好了！

# 2 设置你的SSH Key

在与我们的github服务器进行交流前，我们要告诉他，我们是谁。在github中，我们可以用密码登陆，也可以用ssh key来操作仓库

如果你想使用其他方式与github服务器交流，请搜索其他文章，如果你已经初始化了ssh key，也请搜索其他文章如何关联

键入命令：
```
ssh-keygen -C '你的email' -t rsa
```

看清英文，一步一步，如果你需要设置密码，在途中自行输入，以后上传时都会要求输入密码，当然也可以不设置


# 3 pull and push

首先先将我们的仓库与远程仓库进行关联

``` 
 git remote add origin ssh地址
```
![ssh path][2]
[2]: https://ooo.0o0.ooo/2017/05/25/592648208b7e8.png
ssh地址都可以在github仓库页面上找到，以git@github.com:开头的，请将它们整个复制进去

操作完成后不会有任何提示

## pull

```
git pull origin master
```
## add
```
git add .
```
可以将当前所有文件加入push list(.git文件夹)

## push

在push前，请记得打commit
```
git commit -m "commit注释"
```
```
git push -u origin master
```
目前还不明白 -u参数作用

# 4 What if I did wrong? 

起因: 不小心把pixiv的账号密码一起传到了github上。。。

方法: 

    git reset --hard <commit_id>

    git push origin HEAD --force



其他:

    根据–soft –mixed –hard，会对working tree和index和HEAD进行重置:
    git reset –mixed：此为默认方式，不带任何参数的git reset，即时这种方式，它回退到某个版本，只保留源码，回退commit和index信息
    git reset –soft：回退到某个版本，只回退了commit的信息，不会恢复到index file一级。如果还要提交，直接commit即可
    git reset –hard：彻底回退到某个版本，本地的源码也会变为上一个版本的内容


    HEAD 最近一个提交
    HEAD^ 上一次
    <commit_id>  每次commit的SHA1值. 可以用git log 看到,也可以在页面上commit标签页里找到.
	
> From： http://www.douban.com/note/189603387/

# References: 
> [如何在Markdown中显示链接中带括号的图片](http://www.jianshu.com/p/R5nTSR)