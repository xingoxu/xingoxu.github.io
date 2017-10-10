---
title: Vue + TypeScript 早期体験
categories:
  - dev
  - Front-End-Dev
lang: ja
date: 2017-10-10 17:33:23
---

> Vue.version < 2.5 && Vue.version >= 2.2　適用される

# 公式ドキュメントによるやり方

Vue 2.2 から、Vue にいろんな公式型宣言を提供しており、さっそく、単一ファイルコンポーネントに TypeScript を試してみましょう。

## webpack rules に ts-loader 相関を添付しましょう
> こっちは webpack2

```diff
module: {
  rules: [
+   {
+     test: /\.ts$/,
+     exclude: /node_modules|vue\/src/,
+     loader: 'ts-loader',
+     options: {
+       appendTsSuffixTo: [/\.vue$/]
+     }
+   },
    ...
```

<!-- more -->

.ts のファイルを ts-loader で読み込む
`appendTsSuffixTo`は vue を module として tsc でプロセスして、module not found の問題を解決する（tsc は .vue ファイルが知らない）

## .d.ts ファイルを作成する
どんな名前もいい、どこでもいい、tsconfig.json の include PATH にいればいい、必ず .d.ts を名前の終わりします。
```typescript
declare module "*.vue" {
  import Vue from 'vue'
  export default Vue
}
```
vscode の .ts ファイルに .vueファイルも知らせます。

## tsconfig.json を作成する
```json
{
  "compilerOptions": {
    "allowSyntheticDefaultImports": true,
    "lib": [
      "dom",
      "es5",
      "es2015.promise"
    ],
    "module": "es2015",
    "moduleResolution": "node",
    "isolatedModules": false,
    "target": "es5"
  },
  "include": [
    "./src/**/*.ts"
  ]
}
```
`allowSyntheticDefaultImports` は es6 の import を直接使えるの option

## 準備万端、`npm run dev` いきましょう！

こっちは vue-cli の webpack boilerplate を例として、Hello.vue を改造しましょう。

html template の msg の下に
```diff
  <h1>{{ msg }}</h1>
+ <h2>Say Hello Times: {{ count }}</h2>
  <h2>Essential Links</h2>
```

script の部分を
```html
<script lang="ts">
  import Vue, { ComponentOptions } from 'vue'
  // Declare the component's type
  interface HelloInterface extends Vue {
    msg: string,
    count: number,
    sayHello(): number
  }
  
  export {
    HelloInterface as interface
  }
  export default {
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        count: 0
      }
    },
    methods: {
      sayHello() {
        this.count++;
        return this.count;
      }
    }
    // We need to explicitly annotate the exported options object
    // with the Hello type
  } as ComponentOptions<HelloInterface>;
</script>
```
こうして改造します

親としての App.vue を改造してみて

```diff
  <div id="app">
-   <img src="./assets/logo.png">
+   <img src="./assets/logo.png" @click="sayHello">
-   <hello></hello>
+   <hello ref="helloComponent"></hello>
  </div>
```

```html
<script lang="ts">
  import Vue, { ComponentOptions } from 'vue';
  import { interface as helloInterface, default as Hello } from './components/Hello.vue';
  interface App extends Vue {
    $refs: {
      // helloComponent を宣言する、helloComponent のメソッドとプロパティを使えようになるました
      helloComponent: helloInterface
    }
  }
  export default {
    methods: {
      sayHello() {
        this.$refs.helloComponent.count++;
        this.$refs.helloComponent.sayHello();
      }
    },
    components: {
      Hello
    }
  } as ComponentOptions<App>;
</script>
```
refsといった動的なもの、interface に宣言して、typescript にオートコンプリートを使えます。

> App.vue の `script` を `lang=ts` 変更すると、main.js を main.ts に変更する必要があります、webpack の entry も忘れないでください，そうしないと file not found のエラーが発生する可能性がある。

コードはちょっと多いね、公式サイトによるの `vue-class-component` を使ってみますか？

# vue-class-component

`vue-class-component`の demo と readme はちょっと問題がある、TypeScript の新入りの私が困った、pr を提出した、速くマージされて欲しい。

`vue-class-component` を使っている Hello.vue の script 部分

```typescript
  import Vue from 'vue';
  import Component from 'vue-class-component';
  　
  @Component
  export default class Hello extends Vue {
    msg: string = 'Welcome to Your Vue.js App'
    count: number = 0
    sayHello(): number {
      this.count++;
      return this.count;
    }
  };
```

で、App.vue

```typescript
  import Vue from 'vue';
  import Component from 'vue-class-component';
  import Hello from './components/Hello.vue';
  　
  @Component({
    components: {
      Hello
    }
  })
  export default class App extends Vue {
    $refs: {
      helloComponent: Hello
    }
  　
    sayHello() {
      this.$refs.helloComponent.count++;
      this.$refs.helloComponent.sayHello();
    }
  };
```
随分清潔ですね、オートコンプリートもバッチリ！他の vue コンポーネントと TypeScript の不具合は一時的に考え出来ません。


# 終わりに

Vue 2.5から TypeScript のサポートはどんどん増えますと[言います](https://medium.com/the-vue-point/upcoming-typescript-changes-in-vue-2-5-e9bd7e2ecf08)、どんなサポートですね〜

日本語まだ下手ですから、変なところいっぱいと思います、コメントエリアに指摘すれば幸いです。

最後まで閲覧いただきありがとうございました。
