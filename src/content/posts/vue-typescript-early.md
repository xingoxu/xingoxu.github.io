---
title: Vue + TypeScript 尝鲜体验
tags:
  - dev
  - Front-End-Dev
published: 2017-10-18 15:04:23
---

> 适用 Vue.version < 2.5 && Vue.version >= 2.2

其实我个人一开始很讨厌 TypeScript 这个东西，就是因为讨厌 Java 的啰里巴嗦，突然在我眼前出现了 Javascript，便爱上了这门语言。

但现在的我稍稍又觉得这样的东西其实还行，只使用类型系统也并没有完全限制 Javascript 本身的灵活性，并且他帮助我不会犯一些低级错误，而且还能配合 Visual Studio Code 的提示，我觉得这个还是很不错的，最近忙起来的时候，甚至经常把两个输入框的 value 直接进行比较了，于是就想尝试一下 TypeScript。

<!-- more -->

# 官方做法

Vue 2.2 以上之后，官方给 Vue已经添加了很多类型声明，那么我们就来实践一下在单文件 Vue 中使用 TypeScript。


## webpack rules 中添加 ts-loader 相关（这里使用 webpack 2）

```javascript
{
  test: /\.ts$/,
  exclude: /node_modules|vue\/src/,
  loader: 'ts-loader',
  options: {
    appendTsSuffixTo: [/\.vue$/]
  }
}
```
表示对 .ts 文件编译时使用 ts-loader 进行读取，appendTsSuffixTo 是为了让 tsc 对 vue 文件能够当成一个 module 进行处理，以解决 moudle not found 的问题（tsc 本身不认识 vue 结尾的文件）

## 添加 .d.ts文件

```typescript
declare module "*.vue" {
  import Vue from 'vue'
  export default Vue
}
```

也是为了让 vscode 在 ts 文件中识别 vue 结尾文件

## 项目根目录下添加 tsconfig.json
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
`allowSyntheticDefaultImports` 是为了能够用 es6 形式的 import，其他就参照 Vue 和官网的弄了个最小化的 json。

## 万事俱备，让我们 `npm run dev` 跑起来！

在这里，我们假设使用 Vue 官方的 webpack boilerplate，对 Hello.vue 进行一下改造。

在模板的 msg 下新增一行
```html
<h2>Say Hello Times: {{ count }}</h2>
```

并将 script 部分修改成
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
这段代码没有什么太大的问题

接着我们改造一下 App.vue
```html
<img src="./assets/logo.png" @click="sayHello">
```
```html
<script lang="ts">
  import Vue, { ComponentOptions } from 'vue';
  import { interface as helloInterface, default as Hello } from './components/Hello.vue';
  interface App extends Vue {
    $refs: {
      // 对 helloComponent 进行声明，可以使用 helloComponent 上的方法和属性
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

也就是说，像 refs 这种动态的在运行时才能确定的东西，如果需要在 coding 过程中静态化，则需要在 interface 中对其进行声明，写的 code 稍微有点多，不过可以接受。

> 注： App.vue 修改成 `lang=ts` 后，顶层的 main.js 需要换成 main.ts 并修改 webpack 入口点，否则发生 file not found 错误

# vue-class-component

官方的另一种推荐做法是 `vue-class-component`，不过 demo 和 readme 有点小问题，可把我这个 TypeScript 新手给难到啦，提了 pr 希望快快通过。

让我们看看使用 `vue-class-component` 之后的 Hello.vue

```html
<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'

  @Component
  export default class Hello extends Vue {
    msg: string = 'Welcome to Your Vue.js App'
    count: number = 0
    sayHello(): number {
      this.count++;
      return this.count;
    }
  }
</script>
```

再让我们看看 App.vue

```html
<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'
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
  }
</script>
```
非常 Cool，非常精炼，暂时没有想到可能会发生的没法解决的因为 vue 或者 vue 组件 和 TypeScript 水土不服的编译错误，而且都有了类型和提示。


# 总结

尤大佬说在接下来的 Vue 2.5 还会加强一系列的 TypeScript 支持（[链接](https://medium.com/the-vue-point/upcoming-typescript-changes-in-vue-2-5-e9bd7e2ecf08)），不知道是怎样的支持呢。
另外，欢迎大家在评论区发表 Vue + TypeScript 的使用场景以及你遇到的错误。
