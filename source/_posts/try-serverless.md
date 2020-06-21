---
title: 用最热的Serverless，以最快的速度，写最野的JavaScript
categories:
  - dev
  - Front-End-Dev
date: 2020-06-21 15:52:35
---

Serverless，云原生，年初到现在，我关注的好几个前端公众号和资讯号都在疯狂推这些东西，去年年底就早有耳闻，原来以为是各种活动大会组织联合云厂商在对 devops 卖票整的新技术，但热度越来越强，于是我也跃跃欲试蹭个热度

<!-- more -->

# Serverless 到底是什么¿

一句话概括就是 Cloud Function + Object Storage + Cloud Database + API Gateway and more by Cloud Service Provider. 简单来说就是有个叫 serverless 的开源框架把云厂商提供的这些服务整合成了一个配置文件，后端运维统统都不要了。好处显而易见，服务弹性伸缩，价格按量收费，大多数的运维问题，你的云服务提供商统统帮你兜了，小学生也能写网站。

这么牛逼，前端可得好好学学，让后端和运维统统下岗咯？

# Serverless、启动！

既然 Serverless 图的就是快，那我们自然是不能自己手动一个一个的去到云服务商那里去手动设置的咯。
当然你也可以这么做，只不过我的服务今天就上线，你的服务可能就要等到后天了。

Github 星星 3万个，1000万下载的 serverless npm package，`npm install -g serverless`，下载！启动！

任意位置，terminal 输入 

```bash
$ serverless
```

友好向导一步一步带你迈向 serverless 美好~~大坑~~

进入你刚创建的项目，敲下

```bash
$ sls deploy
```

点击屏幕给出的连接！

```
Hello World!
```

牛逼！我们的后端服务器已经搭好了！太简单了吧！

> 国内用户 serverless 自动使用腾讯云
> 以上内容其实在 https://www.serverless.com/framework/docs/providers/aws/examples/hello-world/node/ 都有

# 套个模板，快上加快

> 以下内容使用 aws 进行操作

今天我打算做一个信用卡外汇比价工具，三步搞定：

1. 抓取汇率
2. 保存当天汇率（云函数没有状态）
3. 前端计算比价

非常适合 serverless 的初学应用

代码已经开源并上线，欢迎大家边看边 review

成品地址：https://whichcard.xingoxu.com/
代码地址：https://github.com/xingoxu/whichcard-abroad

serverless 这个框架，还能使用 template 来创建项目，既然图的就是快，找一个现成的模板套进去，填一填就上线是不是更美滋滋

技术栈，就选 nuxt.js，开启 SSR，再加上可编程使用，妙啊

搜一搜

```bash
serverless create --template-url https://github.com/tonyfromundefined/nuxt-serverless -n whichcard-abroad
```

创建项目后，我们编辑一下 `serverless.yml`，加上非关系型数据库相关配置

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

数据库需要配置权限，要给运行 lambda function 的用户，也就是第一次使用 serverless 的时候让你发行的那个key所代表的用户，给他权限，那，同样在 `serverless.yml` 下加入

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

好了，我们服务器已经配置完了，开始编写后端

刚才用的这个模板，大多数已经搭建好了，只不过后端这里没有 typescript 支持

[`tsconfig.json`](https://github.com/xingoxu/whichcard-abroad/blob/master/tsconfig.json) 复制一份，重命名 [`tsconfig-server.json`](https://github.com/xingoxu/whichcard-abroad/blob/master/tsconfig-server.json)

配置我就不粘过来了，大家可以自己参考上边连接。

用了 typescript 之后，我得把他变成 js 后才能被 lambda function 给读取，在 [`webpack.config.js`](https://github.com/xingoxu/whichcard-abroad/blob/master/webpack.config.js)加上 `ts-loader`。

## 抓取汇率

我们以 [VISA](https://github.com/xingoxu/whichcard-abroad/blob/master/src/api/functions/visa.ts) 为例，他的汇率当天公布在 [这个网页](https://usa.visa.com/support/consumer/travel-support/exchange-rate-calculator.html) 上

我们导入 `axios`，导入`cheerio`，三下五除二，jQuery一把梭，轻松加愉快，摸出了他的汇率


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

40行的代码我们就解决了战斗

## 保存当天汇率

既然按需付费，那么空闲的时候云厂商势必不可能给你资源，因此云函数是无状态这点其实还是比较 make sense 的

虽然我们可以对每个请求都实时抓取一次汇率，但是这显然也太影响打开速度、用户体验了吧。

而且如果被上游发现，对方直接把 aws 一整段 ip 给封了的事情也不是没有

即使是抓取公开数据这种事情，还是静悄悄搞比较好。

直接导入 `aws-sdk`，草草几行代码就能写好保存工具函数和查询工具函数

[源代码](https://github.com/xingoxu/whichcard-abroad/blob/master/src/api/utils/database.ts)
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

`DyanmodbRequestAdapter`和`DyanmodbResultAdapter`是为了解决 dyanmodb 存储的时候符合他的sdk的递归的key（加上类型），另外在这里篇幅过长略去了一些类型定义，大家可以在源代码里查看

同时，我们不要忘记，数据在抓取/存储的过程中都有可能发生新请求，因此我们再写一个工具类把刚才的抓取函数包装一下

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

## 前端计算比价

其实我们这个网站，如果没有关于帮助页面的话，就是只有一个页面的网站了。因此其实没有必要暴露 API，不过我这次为了尝试一下Nuxt.js的Programming Usage，那前端和后端就可以非常巧妙的结合在一起


我们直接在 SFC 中 import 进我们刚才写好的抓取函数

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

这样的话，就算是 SSR，也不需要自己向自己发送一个 `/currency` 的请求。

如果我们没有其他页面，那么 `/currency` 的API也不用暴露，相当于把 Nuxt.js 当成了模板引擎！

写过 Express.js 等的小伙伴很清楚，一般是先生成数据，然后渲染模板，但是在这里，我们的重点是先写好前端后，导入 server 的函数，把请求丢过去拿数据。

是不是很野！（此处应该有惊叹声（哇哦好野））

剩下的写界面啊，写排序啊什么的就略过。

# 解决一些小问题

## 记得开启 extractCSS

Nuxt.js 默认不开启 `extractCSS`，如果你像我一样引了一个 UI 库，还对这个 UI 库自定义了的话，那你的 HTML 可能会长到令人发指。记得在 `nuxt.config.js` 中启用哦

## Nuxt.js 把 aws-sdk 打包进了前端

我暂时还没有深入去看是 Nuxt.js 的 webpack 的问题，还是可能是 `vue-loader` 的问题（毕竟我们的宗旨是要快）

不过这个问题可以用 nuxt plugin 的方式去回避。


在 `plguins` 文件夹下创建 [`getData.server.ts`](https://github.com/xingoxu/whichcard-abroad/blob/master/src/plugins/getData.server.ts)，

把跟 server 有关的写成一个 handler，然后挂载到 `Vue` 上也可以，`context` 上也可以，都可以，只要是个在 SFC 中可以访问到的全局方法就可以了。

```typescript
import Vue from 'vue';
import { response } from '@/api/functions/currency';
import { Context } from '@nuxt/types';

Vue.$serverGetCurrency = (context: Context) => {
  return response(context.req);
};
```

然后到 SFC 里把刚才 Server 的方法改成这个全局方法

```typescript
if (process.server && context) {
  currencyData = await Vue.$serverGetCurrency(
    context
  );
}
```

另外 ts 定义的问题，在函数的旁边 declare 一下就没有问题了（[源代码](https://github.com/xingoxu/whichcard-abroad/blob/master/src/plugins/getData.server.ts)）


> 记得参考 [Nuxt.js Plugins](https://nuxtjs.org/guide/plugins/) & [Vue.js Augumenting Types for Use With Plugins](https://vuejs.org/v2/guide/typescript.html#Augmenting-Types-for-Use-with-Plugins)


# 这么香？我读书少，你不要骗我

Serverless 本身其实并不是什么新鲜东西，云函数运行环境、对象存储、云数据库哪个都不是2019年或者2020年才出现的新东西，但他的想法解决了小微服务的上线速度问题，对刚起步的成长型企业，没有基础设施的小公司，或者是我有一个想法就差一个程序员的公司来说，是一个非常省时间省事情节约人力物力成本的选择。

不过...

## 本地开发，云端调试¿

就问你怕不怕本地跑得好好的，放到云厂商那边炸了，然后调试无门！
为什么会这样呢，我们以 aws 为例，你有没有想过云原生是怎么处理 node_modules 这样的问题的？

> [Node.js 中的 AWS Lambda 部署程序包](https://docs.aws.amazon.com/zh_cn/lambda/latest/dg/nodejs-package.html)

答案是，和你的源代码一起上传！

🐂🍺了我的 aws，也就是说如果你的 node_modules 里边有依赖 native 能力的话，传上去必爆炸，而且你本地还检测不出任何问题。

> 比如 [npm install with AWS Lambda - Stack Overflow](https://stackoverflow.com/questions/36079438/npm-install-with-aws-lambda)

## 成本问题

云服务商又当基础服务提供商，又帮你干了运维 Scaling 的事情，还提供了友好的 Interface ，这么多这么好的事情，当然不可能是免费的，一年免费与看起来低价的 lambda 的背后，是高额的捆绑消费以及对价格不敏感群体的整体割韭菜

我没有办法直接对比使用 Serverless 的开销与传统服务器的开销，但是 以AWS 为例，Serverless 使用的 API Gateway 每百万次 $3.5 请求对于一个正常企业来说，应该是不小的开销，甚至如果遭受一次 DDNS 攻击的话，确实是有点害怕你的房子明天是不是还在了。。。

而相比之下只需要多花几刀钱买一个不错的云服务器，独享内存，相对稳定的CPU，以及几乎无限流量（Fair Use），显而易见应该是一个更省钱的选择。


## 但还是香

在大公司里有着自己的基础设置，运营着自己的云原生，那么适当的下放一些简单的增删改查需求给前端，效率提升应该是毋庸置疑的。


# 最后

以上，希望本文的整体思想，又或者是代码片段，能够给你带来一些灵感或者启发。

本文有任何问题欢迎指出，也欢迎你对我写的这个小学生网站提出任何意见。

欢迎给本文打赏（在线要饭）



