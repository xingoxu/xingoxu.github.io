---
title: 推特 Account Activity API 使用体验
categories:
  - dev
date: 2018-04-30 20:59:43
---

前几天使用了一下推特的 Account Activity API，这个 API 支持注册一个 webhook，用于接受授权账户的实时活动（推特文，事件，设置）。

包括以下内容：
- 推特内容
- at 提醒
- 回复
- 转发
- 带评论转发
- 点赞
- 发出的私信和接收到的私信
- 关注
- 拉黑
- 屏蔽
- 阅读回执

在试用的过程中，碰到了一些问题，做一个整理。

<!-- more -->

# 应用中心创建应用

首先需要到 https://apps.twitter.com/ 在这里按提示创建应用，获得应用的 key 与 Secret。

# 申请 Account Activity API 试用权限

https://developer.twitter.com/en/apply
到这里按照提示申请API权限，并附上 app ID（app ID相关解释：https://developer.twitter.com/en/docs/accounts-and-users/subscribe-account-activity/overview）

申请完成后会收到邮件
![申请成功回执](https://i.loli.net/2018/04/30/5ae7000843f53.png)

# 注册 webhook

## CRC 测试
webhook 的地址要求通过 CRC 测试，详细要求可以查看
https://developer.twitter.com/en/docs/accounts-and-users/subscribe-account-activity/guides/securing-webhooks

写了一个自己的demo，关于CRC测试的代码：
https://github.com/xingoxu/twitter-like-downloader/blob/master/routes/twitter.js#L13-L23

## 通过 postman 发送请求注册webhook

```
POST:
https://api.twitter.com/1.1/account_activity/all/env-beta/webhooks.json?url=${你的webhook地址}

Header:
Authorization: Bearer TOKEN
```

`Bearer TOKEN` 可以通过`https://api.twitter.com/oauth2/token`接口获得

注意
- webhook 地址 需要https，且只能使用443端口（https://twittercommunity.com/t/how-to-register-a-webhook-url-in-twitter/86096/36）


注册完成后可以通过

```
GET：https://api.twitter.com/1.1/account_activity/all/env-beta/subscriptions/list.json

Header:
Authorization: Bearer TOKEN
```

可以收到
```json
{
    "environment": "env-beta",
    "application_id": "12345678",
    "subscriptions": [
        {
            "user_id": "12345678"  // <- 自己的user_id
        }
    ]
}
```


# 测试

随便对一条推特点赞

可以收到推特来的 webhook object。



自己用这个写了一个推特的bot，可以作为参考。
https://github.com/xingoxu/twitter-like-downloader