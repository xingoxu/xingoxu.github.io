---
title: Serverless から見えてきた一体化設計
tags:
  - dev
  - Front-End-Dev
published: 2020-06-21 15:52:35
---

最近 Serverless を触ってみましてあるサイトを作ってみました、ってすごく便利で爆速でウェブを作れて、一番なのはNuxt.jsと相性良くてサーバーとフロントエンドが纏まって管理めっちゃ安くなったので紹介したいと思います。

<!-- more -->

# Serverless なにそれ？

一言いうと Cloud Function + Object Storage + Cloud Database + API Gateway and more by Cloud Service Provider. 簡単にいうと Serverless というとある OSS フレームワークが AWS/Azure/GCP などクラウドサービスを一つの設定ファイルにまとめて、バックエンドもいらずサーバーを立てる。

メリットとしては：
- サービスの弾性スケーリング
- 従量制料金
- インフラもクラウドサービス業者がやってくれる

肝心のロジックだけ集中する必要なので小学生でもサービスを爆速で作れる時代に入ったかも？

そんなにすごいならみんな覚えたらサーバーエンジニアの職がなくなったんじゃ！

# Serverless、やってやろう

> 以下、AWS を例として使います

爆速を言いまくったので、AWS で一つ一つ設定するわけがない。もちろんそうやっても問題ありませんが、今日俺のサービスを作って発表しますが、君のサービスは後日まで待たなきゃよ。

Github Star 3万個、一千万ダウンロード数の serverless npm package、`npm i -g serverless`でインストール、そして、ターミナルでこれを打つだけ

```bash
$ serverless
```

チュートリアルが出てきてお手軽に環境構築を手助けしますね。

そして、作ったプロジェクトのフォルダーに入って、

```bash
$ sls deploy
```

出てきたリンクをクリックして、

```
Hello World!
```

すっげぇじゃん、もうサーバー立てましたじゃん！

# Serverless と Nuxt.js 相性すごくいい

今日僕は https://whichcard.xingoxu.com/ このサイトを作ります。

何かというと、海外カードを使う時ポイント+手数料がどのカードが一番お得なのがわかんないので、ランキングがあるとわかりやすくと思って作ったわけ。

そして、これを作るために、たった三つのステップ。

1. 為替を取ってきて
2. 当日の為替を保存する（Cloud Functionは無ステータスのため）
3. フロントエンドで計算してランキングを出します

Serverless の実践としては最適と思いますね。

ソースコードはアップロードしましたので、そちらを見ながらレビューしていただけると大歓迎です。

## ってなぜ Nuxt.js 
- こんなに小さいもので環境構築したくない（爆速したい）
- Vue に一番詳しいのでなるべく Vue 使いたい（爆速わけ）
- SSR がほしい（←重要）
- Programmatically で使える（←超重要）

## Serverless テンプレートと設定

んで、検索したら意外と Serverless のテンプレートに Nuxt.js もありますね！
テンプレートを使ったら更に開発スピードを加速しよう、いいっすね～


```bash
serverless create --template-url https://github.com/tonyfromundefined/nuxt-serverless -n whichcard-abroad
```

作ったら、`serverless.yml`を編集します。Non-relation Database周りの設定をします。

```yml
resources:
  Resources:
    CurrencyTable:
      Type: AWS::DynamoDB::Table
      Properties:
        TableName: ${env:DYANMODB_TABLE}
        AttributeDefinitions:
          - AttributeName: ${env:DYANMODB_PRIMARY_KEY}
            AttributeType: S
        KeySchema:
          - AttributeName: ${env:DYANMODB_PRIMARY_KEY}
            KeyType: HASH
        ProvisionedThroughput:
          ReadCapacityUnits: 1
          WriteCapacityUnits: 1
```

データベースに権限を与えないとはいけないので、lambda function を走ってるユーザー、すなわち serverless を叩くときに key を発行されたユーザーに権限を与えますので、`serverless.yml` の中にこれを加えよう

```yml
provider:
  iamRoleStatements:
    - Effect: Allow
      Action:
        - dynamodb:Query
        - dynamodb:Scan
        - dynamodb:GetItem
        - dynamodb:PutItem
        - dynamodb:UpdateItem
        - dynamodb:DeleteItem
      Resource: "arn:aws:dynamodb:${self:provider.region}:*:table/${env:DYANMODB_TABLE}"
```

はいサーバー設定終了🙌おめでとう

次は、バックエンドのTypeScriptを追加します

このテンプレートはバックエンド全部設定してくれましたが、バックエンドのTypeScriptは追加してないので、

[`tsconfig.json`](https://github.com/xingoxu/whichcard-abroad/blob/master/tsconfig.json) をコピーして、[`tsconfig-server.json`](https://github.com/xingoxu/whichcard-abroad/blob/master/tsconfig-server.json)に変更します。

内容もちょっと変わりましたが、ここに貼らなく上のリンクに見に行っていただけると🙏。

TypeScript追加したら js にコンパイルしなきゃ node.js の lambda function には使えないので [`webpack.config.js`](https://github.com/xingoxu/whichcard-abroad/blob/master/webpack.config.js)に`ts-loader`の追加をお忘れなく。

## 為替を取ってきて

[VISA](https://github.com/xingoxu/whichcard-abroad/blob/master/src/api/functions/visa.ts) カードを例として、為替は[ここで](https://usa.visa.com/support/consumer/travel-support/exchange-rate-calculator.html) 公表されます。

`axios`と`cheerio`を導入して、jQuery感で40行のコードで楽に為替を取ってきました

```typescript
import axios from 'axios';
import cheerio from 'cheerio';
import { format } from 'date-fns';

const getVisaCurrency = async ({
  transCurr = "USD",
  billCurr = "JPY",
  date
}) => {
  const { data: htmlBody } = await axios.get<
    string
  >(
    `https://usa.visa.com/support/consumer/travel-support/exchange-rate-calculator.html`,
    {
      params: {
        amount: 1,
        fee: '0.0',
        utcConvertedDate: '',
        exchangedate: format(
          date,
          'MM/dd/yyyy'
        ),
        fromCurr: billCurr,
        toCurr: transCurr,
        submitButton:
          'Calculate exchange rate'
      }
    }
  );
  const $ = cheerio.load(htmlBody);
  const $targetDOM = $(
    '.converted-amount-value'
  );
  const result = $targetDOM
    .eq($targetDOM.length - 2)
    .text()
    .match(/^\d+\.\d+/)![0];

  return result;
};

export { getVisaCurrency };
```

## 当日の為替を保存する

従量制課金なので、空いている時はリソースは配られるわけがない、なのでCloud Functionは無ステータスは筋が通っている。

一つのリクエストに対して、為替を取ってくるのは問題ないが、ユーザーエクスペリエンスとしては最低でした…

しかも、データが取られたサイトに見つかられたら、AWSのIP全部ブロックすると一番やばい。パブリックデータとしても、少しモラルがある方法で取るほうがいい。

`aws-sdk` をインポートして、TypeScriptではちょっと転換面では面倒（型定義では少しコード増やさなきゃ）だけど、基本的には時間かかってないと気がする。

```typescript
import { DynamoDB } from 'aws-sdk';
import { format } from 'date-fns';

const DATE_FORMAT = 'yyyy-MM-dd';
const DYANMODB_TABLE: string = "currencyTable";
const DYANMODB_PRIMARY_KEY: string = "currency";

const dynamoDBClient = new DynamoDB({
  region: process.env.DYANMODB_REGION
});

const queryFromCache = async (
  date: Date
): Promise<DBCurrencyObject | undefined> => {
  const {
    Count,
    Items
  } = await dynamoDBClient
    .query({
      TableName: DYANMODB_TABLE,
      KeyConditionExpression: `#key=:dt`,
      ExpressionAttributeNames: {
        '#key': DYANMODB_PRIMARY_KEY
      },
      ExpressionAttributeValues: {
        ':dt': {
          S: format(date, DATE_FORMAT)
        }
      }
    })
    .promise();
  if (Count && Count == 1)
    return DyanmodbResultAdapter(
      Items![0]
    ) as DBCurrencyObject;
  return undefined;
};

const storeResult = async ({
  date,
  result,
  billCurr,
  transCurr,
  brand
}): Promise<void> => {
  let cacheResult = await queryFromCache(
    date
  );
  if (!cacheResult)
    cacheResult = {
      date: format(date, DATE_FORMAT)
    };
  if (!cacheResult[brand])
    cacheResult[brand] = {};
  if (!cacheResult[brand]![transCurr])
    cacheResult[brand]![transCurr] = {};

  cacheResult[brand]![transCurr]![
    billCurr
  ] = result;

  await dynamoDBClient
    .updateItem({
      Key: {
        [DYANMODB_PRIMARY_KEY]: {
          S: format(date, DATE_FORMAT)
        }
      },
      TableName: DYANMODB_TABLE,
      UpdateExpression: `set ${brand}=:${brand}`,
      ExpressionAttributeValues: {
        [`:${brand}`]: {
          M: DyanmodbRequestAdapter(
            cacheResult[brand]!
          )
        }
      }
    })
    .promise();
};

export { queryFromCache, storeResult };
```

`DyanmodbRequestAdapter`と`DyanmodbResultAdapter`は aws-sdk を使うためにデータの転換関数。長いのでここで貼らなく、ソースコード見ていただけると思います。

データを取る時と保存する時リクエストが来る可能性もありますので、`asyncOnce`の関数を書いて入り口をラッピングして一回だけ実行させることを保証しましょう。

```typescript
export function asyncOnce<
  T extends (...args: any) => Promise<any>
>(
  func: (
    ...args: Parameters<T>
  ) => ReturnType<T>
) {
  let running: ReturnType<
    typeof func
  > | null = null;
  return (
    ...args: Parameters<typeof func>
  ) => {
    if (running === null) {
      running = func(...args);
      running.finally(() => {
        running = null;
      });
    }
    return running;
  };
}
```

## フロントエンドでランキングを計算します

さっきも言ったけど、Nuxt.js の Programmatically で使えるのは重要。なぜ重要というと、Cloud Function の入り口は一つで、リクエスト来る時フロントエンドのレンダリングとAPIのサービングは両方立たなきゃ。

従来のやり方としては、`Express.js` などでRouterを追加して、静的HTMLをレンダリングする、いわゆるサーバーレンダリング。

それだとフロントエンドエンジニアにとってはちょっと不便、でもこれを使ったら、サーバーとフロントが賢く纏まった。

ちょっと見てみましょう

SFC でさっき書いたサーバー関数を import します

```javascript
import { response } from '@/api/functions/currency';

export default {
  async asyncData(context) {
    let currencyData;
    if (process.server && context) {
      currencyData = await response(
        context.req
      );
    } else {
      const data = await axios.$get(
        '/currency',
        {
          params: { ...someParams }
        }
      );

      currencyData = data;
    }
    return { currencyData }
  }
}
```

そしたら、SSR の場合はサーバー自身が自身の `/currency` にリクエストすることはなくなりました。

また、この設計のいいところは、もしほかのページがなければ、`/currency` の API も外に出さなくてもいいです、Nuxt.js をテンプレートエンジンとして使った。

Node.js をサーバーとして使った方はわかると思います、普通のサーバーレンダリングはデータ生成してからレンダリングするが、ここではフロントエンドを先に書いちゃって、その後サーバーの関数をインポートして、データを取る。

書き心地もわかりやすい。

すごくない？

残りはインターフェイスなどは、ここでは略します。

# 問題を解決

## extractCSS をつける

Nuxt.js はデフォルトとしては `extractCSS` を閉じてます、UI Frameworkを使った方はもしかしてHTMLはとんでもない長さにされました。`nuxt.config.js` にての起用をお忘れなく。

## Nuxt.js が aws-sdk をフロントエンドのJavaScriptにバンドルしまった

Nuxt.js の webpackか、`vue-loader`かどっちの問題まだ深く見てないが（爆速で作るわけ）、nuxt plugin で迂回することはできる。

`plguins` フォルダ下に [`getData.server.ts`](https://github.com/xingoxu/whichcard-abroad/blob/master/src/plugins/getData.server.ts)を作ります、

サーバー関数をhandlerにして、`Vue` でもいいし、`context` でもいいし SFC でアクセスできるグローバル関数であればOK。

```typescript
import Vue from 'vue';
import { response } from '@/api/functions/currency';
import { Context } from '@nuxt/types';

Vue.$serverGetCurrency = (context: Context) => {
  return response(context.req);
};
```

SFCでさっきのところでこの関数を使う

```typescript
if (process.server && context) {
  currencyData = await Vue.$serverGetCurrency(
    context
  );
}
```

TypeScriptの型定義なら、その関数の隣で declare すればどこでも問題ないはずです（[ソースコード](https://github.com/xingoxu/whichcard-abroad/blob/master/src/plugins/getData.server.ts)）


> レファレンス [Nuxt.js Plugins](https://nuxtjs.org/guide/plugins/) & [Vue.js Augumenting Types for Use With Plugins](https://vuejs.org/v2/guide/typescript.html#Augmenting-Types-for-Use-with-Plugins)


# めっちゃ便利、落とし穴ないの？

Serverless は新しいものではない、Cloud Function、Object Storage、Cloud Database どっちでも2020年から出たものではない。ただそのコンセプトはスタートアップ企業のサービスのラウンチスピードをすごく手助けしました。彼達にとって、サーバーさえもないし、エンジニアもわずか数人もしくは一人だけかもしれませんが、そんな状況の企業にはとてもふさわしいも過言ではない。時間とコスト両方省けられる選択です。

でもね…

## ローカルで開発、そらでデバッグ

「あら、ローカルでちゃんと動いてるのに、アップロードしたらエラーが出ちゃった！」
それはなぜですか？AWS を例としてCloud Native はどう node_modules を処理してるのは見てみましょう。

> [Node.js の AWS Lambda デプロイパッケージ](https://docs.aws.amazon.com/ja_jp/lambda/latest/dg/nodejs-package.html)

その答えは、コードと一緒にアップロードします。

つまり、node_modulesにnode-gypなど native を依存してるかつ aws のハードウェア適してない場合は必ずエラーが出るのではないか、しかもローカルでは検知できない。

> ほら [npm install with AWS Lambda - Stack Overflow](https://stackoverflow.com/questions/36079438/npm-install-with-aws-lambda)

## コスト

さっきまだコストを省けると言ったのに、それなぜまた問題と視されますか？

クラウドサービスプラットフォーム、ベーシックサービスを提供しながら、インフラ、自動スケーリング、フレンドリーインターフェイスも提供し、そんなにいいこと無料のわけがない。最初に一年無料、従量制課金の後ろは、他のサービスを同梱して一緒に課金しちゃうと、価格に対して敏感ではない人を「騙す」


Serverless と従来のサーバーを直接で比較することはできない、ただ、AWS の API Gateway 百万回 $3.5の料金は高くない？DDNSを受けたら、お家飛んできそうよ。

$5では vultr 買えます、しかも無限トラフィック、安定してるリソース、サービスがでかくなったらコスト的には絶対勝つと思います。

## クラウドサービスプラットフォームに対しての依存性

AWS でサービスを立ったが、後日 AWS と揉めたら、また Amazon と利益上で対立して他のクラウドサービスに行きたい、もしくは自分のサーバーがありまして自分のサーバーに移行しようとすると、コードをもう一度書かなきゃし、設定とか見直さないとも行けないし…

## でもそのいいところを忘れないで

もしでかい会社のであれば、自分がそのインフラ持ってて、Serverless みたいのものを作ったら、適当に簡単なものをフロントエンド側に任せたら効率的にはすごく早いのではないかと考えられますね。

# 以上

ご閲覧ありがとうございました、この記事の考え、コード、あなたにアイデアまたはインスピレーションをもたらしたら嬉しいです。

記事について質問、またはこの小学生も作れるウェブサイトについて意見があれば大歓迎です。
