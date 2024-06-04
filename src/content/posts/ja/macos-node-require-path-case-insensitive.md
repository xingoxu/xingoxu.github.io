---
title: Node.js 依存モジュールのファイルはケースセンシティブの件
tags:
  - dev
  - Front-End-Dev
published: 2020-07-01 18:59:40
---

皆さん開発の時ほとんど macOS を使ってるんでしょうか、だが macOS のファイル名はケースインセンシティブ（大小文字は区別しない）。つまり同じフォルダ下に `package.json` と `packagE.json` は一緒にいられない。

ほとんどの人は知ってるかにもかかわらず、あまりこれに注意を払ってないのではないかなと思って、だってみんなの母語は英語ではないし、インポートの際は intelliSense も結構賢く補足してもらってるので、あんまりここに転んだことはないと思います。転んでもすぐ忘れるんだろう。

<!-- more -->

よく会った問題はこれです👇

# Linux でデプロイ時にモジュールは見つからない

多分誰がメモ帳で書いたコード

```javascript
const list = require('./List');
```

でも List のファイル名は`list.js`、

そしたらすべての List を list に変えなきゃいけない。

細かい点で解決には難しくないが、時間ちょっと無駄しましたね。

でも今日話したいのは僕の午後をまるごと無駄しましてこの技術的な内容あまりない記事を書くことになったこれです👇

# `require('./a.js') !== require('./A.js')`

TypeORM を使ってる時新しいスキーマ（テーブル）を入れたが、デバッグの時ずーとそのスキーマが見つからないエラーに怒られて

```
TypeORM EntityMetadataNotFound: No metadata for "***" was found
```

option に何度も確認しまして確かにスキーマは入ってるが。

どうしようと思って、 node_modules に入って直接ソースコードを改ざんしてデバッグすることになった。

`console.log` でスキーマはたしかに入ってますが、

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

左と右は同じく `Function xxx` がリファレンスは同じではない。

これは事件ですね。んでファイル両方の import を一行一行で確認して、最終的に import のパスに問題を見つかった。
自分がインポートした際に、一つは Class 名をそのままコピペしたが、もう一つはファイル名でしたが、Class 名は PascalCase が、ファイル名は camelCase でした。

そしたらなぜ同じファイルで使う時ファイル名が違ったらリファレンスは違うになりますか？

Node.js のソースコードに見てきました。
https://github.com/nodejs/node/blob/master/lib/internal/modules/cjs/loader.js#L936

Node.js の require は一回しか実行しない、その原因は Node.js はモジュールをメモリに保存して、その後コードの中で require したらすぐ使えるという意図で設計されました。
ソースコードからも見えて、Node.js はファイル名でキャッシュしますが、ここの filename は require のファイル名 + 絶対パス。

なので Node.js は２つモジュールとみなすが、windows だと、 filename は path.resolve で toLowerCase で同じファイル名にするが、Linux だとケースセンシティブでモジュール見つからないで弾かれますが、この問題は macOS しか出ませんね。

ま、デプロイまで問題出るよりラッキーですね。
