---
title: '使用Travis Ci使hexo自动生成并部署'
published: 2016-12-23 15:51:13
tags:
  - maintaince
  - blog-setup
---


前两天偶然看见v2ex上有人说使用travis ci做hexo的持续集成，想起对哦，何必需要每次写完博客再进行手动的hexo clean && hexo g && hexo d呢

<!-- more -->

# 为什么选择travis ci

因为他和github配合的很好，如果是github的开源项目，travis ci 永久免费

言下之意，如果你是使用github pages来托管你的博客的话，那travis ci简直就是最好的搭档

![travis ci 开源项目永久免费](https://ooo.0o0.ooo/2016/12/23/585cdeb7b5d87.png)

# 注册travis ci

什么鬼，没有注册，travis-ci.org也只支持使用github登录

## 开启travis ci对项目的trigger

没什么难的，进右上角头像里的accounts，按照出现的提示打开repo的开关就可以了

# 撰写.travis.yml

[官方的nodejs的specific doc](https://docs.travis-ci.com/user/languages/javascript-with-nodejs/)

[Getting Started](https://docs.travis-ci.com/user/customizing-the-build/)

如果你想再加hook，那么自己看官方文档去，这里对我自己的travis.yml稍作解释


> Hosted on [GitHub](https://github.com/xingoxu/xingoxu.github.io/blob/source/.travis.yml)
```yml
language: node_js
node_js:
  - '6'
before_install:
  - export TZ='Asia/Shanghai'
  - npm install hexo-cli -g
install:
  - npm install
script:
  - hexo clean && hexo g
after_script:
  - git config --global user.name "xingoxu"
  - git config --global user.email "xingoxu@gmail.com"
  - git clone https://${GH_REF} .deploy_git
  - cd .deploy_git
  - git checkout master
  - cd ../
  - sed -i'' "s~${GH_REF}~${GH_TOKEN}:x-oauth-basic@${GH_REF}~" _config.yml
  - hexo d > log.txt 2>&1
  - cat log.txt | sed "s~${GH_TOKEN}~TOKEN~g"
branches:
  only:
  - source
env:
  global:
  - GH_REF: github.com/xingoxu/xingoxu.github.io.git
```

前面的不用多说，需要关注的是部署的问题

## 解决git push的证书问题

普通的push肯定是需要ssh的key的，或者https的话需要输入用户名和密码

然鹅，这里是持续化环境中，也就是虚拟机环境中，那根本没法询问用户啊

所以我们要给我们的部署施加一些小魔法

那就是，github的开发者api。使用github的api，使用personal access token与push链接的拼接以达到不登陆的效果

进入Settings -> [Personal access tokens](https://github.com/settings/tokens)

新建一个token，我给他命名为travis

然后勾上repo的相应权限

![写在push链接里的token](https://ooo.0o0.ooo/2016/12/23/585cf0ac72c22.png)

然后，要注意的是，这样的密钥是不能写在.travis.yml中的，那坏人看到了，肯定能拿去干坏坏的事情

于是，可以放在travis ci的repo的settings的环境变量中

![travis ci repo setting](https://ooo.0o0.ooo/2016/12/23/585cf1ce75576.png)

可以在文件中以`${变量名}`来引用

文件中的env global，和在这里设置的效果相同

所以
```bash
sed -i'' "s~${GH_REF}~${GH_TOKEN}:x-oauth-basic@${GH_REF}~" _config.yml
```

就会变成

```bash
sed -i'' "s~github.com/xingoxu/xingoxu.github.io.git~这里是密钥:x-oauth-basic@github.com/xingoxu/xingoxu.github.io.git~"
```

以将config.yml中的deploy的地址改成这样的一个拼接地址，就不需要密钥啦

## 解决master commit树被清空

如果仅解决push问题，那么你会发现，你部署分支的commit树被清空了

其实也不是什么很大的问题，但感觉看起来很丑，每次更新都像是一个新站点，没有历史更新记录，虽然这样以后你可以用source的commit来记录和回溯，但，总觉得怪怪的

使用下面的git命令来解决问题
```bash
git clone https://${GH_REF} .deploy_git
cd .deploy_git
git checkout master
cd ../
```

其实是很简单的git操作，就是需要注意一下

最后注意下主题文件夹如果是git文件夹的问题，不过这个应该不算是持续集成的问题

## 解决hexo d显示出私钥的问题

travis ci的build log是可以被大家看到的，但是，在添加变量那边关掉后 就不会显示出来了，然而，这也仅限于使用`${}`来引用他的地方，git push时，会把此地址再显示一遍，这样你的私人密钥又会被显示了

于是乎我把hexo d的命令改成了这两行

```bash
hexo d > log.txt 2>&1
cat log.txt | sed "s~${GH_TOKEN}~TOKEN~g"
```

将hexo d的输出，包括标准与非标准，全部输入到log.txt，再cat出来的时候，使用sed对里边含有GH_TOKEN统统替换成TOKEN字符串

我对linux命令不怎么样熟悉，只能写成这样，如果您有更好的，不输出到log.txt的方法，可以在评论里指点一下

当然这样也有“缺点”，其实这个缺点在这里不成立，缺点就是把错误吞了，但不成立的原因是，after script的错误不错误不会影响到ci的过程

# 好处

写完文章后不再需要手动hexo clean && hexo g && hexo d了

# 坏处

也算不上什么坏处吧，非script部分出错了不会有提示，当然放在script里也没啥关系

还有一个就是毕竟是云端操作，时间会比性能强劲的本地电脑长


# References

> [Travis CI 自动部署 Hexo 博客到 Github](https://xin053.github.io/2016/06/05/Travis%20CI%E8%87%AA%E5%8A%A8%E9%83%A8%E7%BD%B2Hexo%E5%8D%9A%E5%AE%A2%E5%88%B0Github/)






