---
title: Node.js 路径大小写的坑
categories:
  - dev
  - Front-End-Dev
date: 2020-07-01 18:59:40
---

大多数前端开发同学都用的是 macOS ，然而 macOS 上文件名不区分大小写，因此你不能在同一个文件夹下同时创建 `package.json` 和 `packagE.json`。

这个细节很小，因为大家不是英语母语，现在又越来越依靠 intelliSense 补全文件路径，在这个事情上翻跟头会比较少，就算翻了跟头也很容易忘记。

<!-- more -->

大多数情况下你在这个上边会跌进的一个坑是

# Linux 下部署时找不到 Module

可能哪位高人用记事本写的代码
```javascript
const list = require('./List');
```
然鹅现实生活中你的 List 的文件名是`list.js`

完了，你就得在你的代码库里把 List 统统改成 list

所以这其实是个很小的问题也很容易解决就是浪费了一点时间。

但我碰到一个浪费了我一个下午的问题，也促使我写了这篇其实没有什么技术含量的笔记

# `require('./a.js') !== require('./A.js')`

前因后果：

在用 TypeORM 写增删改查的时候，新引进了一张表，于是挂上去调试。发现一直报找不到表的错

```
TypeORM EntityMetadataNotFound: No metadata for "***" was found
```

就是这个错。

反反复复确认了表已经挂到了 option 下边。

怎么办，只能进 node_modules 下边直接改源码调试了（

进去 `console.log` 三下五除二，发现表确实挂载了，然而

https://github.com/typeorm/typeorm/blob/master/src/connection/Connection.ts

```typescript
    /**
     * Gets entity metadata for the given entity class or schema name.
     */
    getMetadata(target: Function|EntitySchema<any>|string): EntityMetadata {
        const metadata = this.findMetadata(target);
        if (!metadata)
            throw new EntityMetadataNotFoundError(target);

        return metadata;
    }
```

```typescript
    /**
     * Finds exist entity metadata by the given entity class, target name or table name.
     */
    protected findMetadata(target: Function|EntitySchema<any>|string): EntityMetadata|undefined {
        return this.entityMetadatas.find(metadata => {
            console.log(metadata.target, target, metadata.target === target) // ←ここ
            if (metadata.target === target)
                return true;
            if (target instanceof EntitySchema) {
                return metadata.name === target.options.name;
            }
            if (typeof target === "string") {
                if (target.indexOf(".") !== -1) {
                    return metadata.tablePath === target;
                } else {
                    return metadata.name === target || metadata.tableName === target;
                }
            }

            return false;
        });
    }
```

左边右边都是 Function xxx，但是却不完全相等。

于是我开始疯狂比较两边 import 的代码，最后才发现，import 的时候因为 Class 名和文件名一样，所以一个用的是 intelliSense 自动补全，一个是我复制粘贴的 Class 名，但是 Class 名是首字母大写的，但文件名不是。

那么为什么同样的文件，引用的时候文件名不同，引用会不同呢？

https://github.com/nodejs/node/blob/master/lib/internal/modules/cjs/loader.js#L936

我们都知道 Node.js 的 require 只会引用一次，究其原因是因为 Node.js 会把模块缓存到内存里，以便快速重复调用。
我们在上边的源代码可以看到，Node.js 会使用 filename 进行缓存，而这里的 filename 是你 require 的文件名 + 绝对路径。

因此 Node.js 会认为这是两个模块，就会重复 require 两次，但是如果是在 windows 下，filename 会被 path.resolve 给 toLowerCase 成一个模块，在 Linux 下，又会因为大小写敏感而找不到模块，也就是只会在 macOS 上出现的一个问题。


所幸不是到部署才发现的问题，也所幸这个只会在调试的时候出现问题。。。。

