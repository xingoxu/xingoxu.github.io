---
title: ツイッターの Account Activity API 使ってみた
tags:
  - dev
published: 2018-04-30 20:59:43
---

前日ツイッターのAccount Activity APIを使ってみました、この API が一つ webhook 登録が可能です、アカウントのリアル活動（ツィート、通知、設定）を受信します。

以下のものが含まれます：
- ツィート
- at 通知
- リプライ
- リツイート
- 引用リツイート
- いいね
- ダイレクトメッセージとその受信
- フォロー
- ブロック
- ミュート

使う時実際起こった問題を書きました。

<!-- more -->

# アプリを作ります

まずここで https://apps.twitter.com/ チュートリアルに従ってアプリを作って、アプリの key と secret を取得します。

# Account Activity API を申請します

https://developer.twitter.com/en/apply
ここで権限を申請します，app ID の添付を忘れずに（app ID について：https://developer.twitter.com/en/docs/accounts-and-users/subscribe-account-activity/overview ）

申請成功したらメールが来ます
![申請成功のメール](https://i.loli.net/2018/04/30/5ae7000843f53.png)

# webhook URL を登録

## CRC テスト
webhook は CRC テストを合格しなければ登録できない、具体的な要望はここに書いている -> 
https://developer.twitter.com/en/docs/accounts-and-users/subscribe-account-activity/guides/securing-webhooks

自分もNode.jsのdemoを書きました、一応参考になれば：
https://github.com/xingoxu/twitter-like-downloader/blob/master/routes/twitter.js#L13-L23

## postman でリクエストを送って webhook URL を登録します

```
POST:
https://api.twitter.com/1.1/account_activity/all/env-beta/webhooks.json?url=${あなたのwebhook URL}

Header:
Authorization: Bearer TOKEN
```

`Bearer TOKEN` は`https://api.twitter.com/oauth2/token`で取得できます。

注意
- webhook URL は https と 443 ポートのみサポートします（https://twittercommunity.com/t/how-to-register-a-webhook-url-in-twitter/86096/36 ）


## postman でリクエストを送って subscription に webhook を登録します

```
GET:
https://api.twitter.com/1.1/account_activity/all/env-beta/webhooks.json

Header:
Authorization: Bearer TOKEN
```
さっきの webhook の id を取って

```
POST:
https://api.twitter.com/1.1/account_activity/all/env-beta/subscriptions.json

Header:
Authorization: OAuth 1.0

Body:
webhook_id: さっきの webhook の id
```
注意すべきところ：ここAuthorization は OAuth 1.0（user id 認識ため）

リスポンス内容はない、`HTTP Code: 204 No Conent`

登録したらここに見えます
```
GET：https://api.twitter.com/1.1/account_activity/all/env-beta/subscriptions/list.json

Header:
Authorization: Bearer TOKEN
```

これを受けれます
```json
{
    "environment": "env-beta",
    "application_id": "12345678",
    "subscriptions": [
        {
            "user_id": "12345678"  // <- 自分のuser_id
        }
    ]
}
```


# テスト

好きなツイートをいいねすると

ツイッターサーバーから webhook object 受けれます。

最後、Account Activity API使ってる自家用ツイッターBotです、参考になればぜひ
https://github.com/xingoxu/twitter-like-downloader


最後まで閲覧いただきありがとうございました。
