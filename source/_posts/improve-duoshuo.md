---
title: '改进多说'
date: 2016-12-27 15:34:24
categories:
  - dev
  - Front-End-Dev
---

- 增加用户尾巴
- 头像/表情转换成https

<!-- more -->

# 多说现有问题

1. 稳定版不能切换表情
2. dev版不能收起表情框
3. 新浪头像/QQ头像/新浪表情 国内已经支持https了，多说没有及时跟进

另外多说记录了ua，在用户返回的数据里也给到了发评论的ua，想利用这个ua，展现我们睾贵的操作系统/浏览器/硬件等

相比不能切换表情，不能收起表情框稍微好那么一点，于是我决定将多说替换成开发版，而且对标准版增加UA以及https的教程网上也有很多，我也进行了参考，我自修改的[0.32版improve-duoshuo](https://github.com/xingoxu/improve-duoshuo/blob/b3985130b8fe565e5d47185edcc12c5efc4022ac/embed.js)就是使用标准版的多说进行了显示UA，只是没有替换https，如果你需要对标准版进行动手术，欢迎你参考我的这份，也欢迎你参考本篇blog的Reference

**以下内容使用多说dev版进行**

首先格式化多说，使其稍微好看一点

# 添加https

## 用户头像https
参考[多说插件支持站点 https](https://blog.nofile.cc/posts/2016/11/26/note-duoshuo-https.html)，在[第2634行](https://github.com/xingoxu/improve-duoshuo/commit/0c4a3456784e98f5a47ef0a46f5a5f4e3165f66a)替换a字符串

## 替换表情https

点击表情后，Network中出现

![点击表情后，DevTools-Network](https://ooo.0o0.ooo/2016/12/27/586228e6c8f9e.png)

格式化后发现

![格式化jsonp](https://ooo.0o0.ooo/2016/12/27/586229a1c0dae.png)

证明前缀写死在js中，搜索一下`http://`，发现和新浪有关的只有[第3333行](https://github.com/xingoxu/improve-duoshuo/commit/0c4a3456784e98f5a47ef0a46f5a5f4e3165f66a)，修改成https后，问题解决


# 增加ua

dev版多说格式化后找到`ds-comment-header` `ds-user-name` 附近，发现全部改成了react风格的绑定

尝试旧逻辑不变，直接插入`{ userTail.showAdmin(author) }`和 `{ userTail.showUA(comment) }` 
> userTail是之前0.32的全局helper

发现逻辑正常，证明模板可以读取全局变量，但输出字符被escape了

那就只能老老实实的改成模板形式了

代码参见[旧2869行/新2847行](https://github.com/xingoxu/improve-duoshuo/commit/81106ba23d110f0e866e627799fc95d6bec6bc76)，没啥技术含量

# Reference

> [多说插件支持站点 https](https://blog.nofile.cc/posts/2016/11/26/note-duoshuo-https.html)

> [多说回复后显示浏览器及操作系统信息（Useragent）](http://ssk.91txh.com/209)

# 吐槽

多说这几个礼拜天天炸，时不时500，看来是要跑路啊，赶紧趁跑路前上一波https装个逼（雾

也欢迎对我的[improve-duoshuo](https://github.com/xingoxu/improve-duoshuo)提issue提pr