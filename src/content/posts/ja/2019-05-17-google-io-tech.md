---
title: Google I/O 2019 フロントエンドまとめ
tags:
  - dev
  - Front-End-Dev
published: 2019-05-17 16:55:59
---

# Web 新プロダクト / 新技術
- web.dev というサイト
  - https://web.dev
  - フレームワーク、パフォーマンス、Web各種技術など載っているグーグルが作ったまとめサイト
  - 全部無料で学べる
  - 今フレームワークはReact.jsだけけど、今後追加予定
  - 実践 Codelab、その場で試すことはできます
  - 翻訳は今進行中らしい
- Lighthouse Performance Budgets
  - https://developers.google.com/web/tools/lighthouse/audits/budgets
  - Lighthouseにパフォーマンス時間 / ファイル大きさ予算を設定し、Lighthouseが測ってくれる
- PWA Desktop
  - PWA 今デスクトップOSにインストールできます
- Trusted Web Activity
  - https://developers.google.com/web/updates/2019/02/using-twa
  - Chrome Custom Tab のアップグレード版、タイトルバーがない
  - よく見られるユースケースは、現存のアプリの中で、ファミリーアプリのウェブ版を入れて、ネイテイブ感を作る
  - ウェブページにはschema urlでアプリにメッセージ送れます
  - アプリは URL の後ろにパラメータ付けるならウェブページにメッセージ送れます
- Perception Toolkit
  - https://web.dev/perception-toolkit
  - Shape Detection APIを使ってるツールキット
  - バーコード、実物、画像を取得してウェブサイトのmetaから取った情報と比較して、関連カードを出す
  - APIまだ使えないブラウザにWeb Assemblyを使う、互換性を保つ
- Puppeteer with Firefox
  - Firefoxが使えるようになりました
  - `npm i puppeteer-firefox`

<!-- more -->

# Web にもうすぐ使えるもの / 新Web API / 新 JavaScript API など

## Chrome Only (w3cにまだ書いてない)
- Lazy loading
  - 画像とiframeの中 loading="lazy" のアトリビュートを追加すると遅延ロードくれます
  - Chrome 75 から
- Portals
  - https://web.dev/hands-on-portals
  - 新たな要素、iframeみたい、埋め込む内容に切り替えるスムーズ体験を提供する
  - Chrome Canary 使える
- Web Packaging
  - https://github.com/WICG/webpackage
  - ウェブサイトをサインしてパッケージして、どこでもデプロイして、ブラウザはどこでも同じサイトとみなす（p2pの感じ）
  - 例はまだない
- Paint Holding
  - 同じサイト画面遷移時白い画面は出ない
  - Chrome Canary 見れる
- Cookie は Chrome 76 からちょっと変わる
  - https://web.dev/samesite-cookies-explained
  - Same-Site使っていないCookieは`Same-Site=LAX`を適用する

Chrome今開発中もの

- [ネイテイブファイルシステム](https://github.com/WICG/native-file-system)
- [申請しなくもローカルでファイルを保存できる](https://bugs.chromium.org/p/chromium/issues/detail?id=897276)
- [SMS基づくユーザー検証](https://github.com/sso-google/sms-otp-retrieval)

> 関連Session： What’s New with Chrome and the Web (Google I/O ’19)

_独自APIを開発するから海外でも好評得ていないらしい…_

## Web API

- 開発中
  - ウェブシェア -> Web Share API (Shipped) -> Web Share Target (v2) (Working)
  - media control on System level -> mediaSession API (Shipped)
  - バーコード、画像、実物探知 -> Shape Detection API (FaceDetect / BarcodeDetect both shipped in Chrome Canary) 
  - App Badging (アプリアイコンの数字) -> window.Badge / window.ExperimentalBadge (Origin Trial 78)
  - Wake Lock -> (Screen wake lock / System wake lock) -> Wake Lock (In Development)
  - ファイル -> File Picker -> chooseFileSystemEntries (提案中 / In Development)
  - シリアルデバイスサクセス（プリンターなど） -> Serial API (提案済み)
  - HID デバイスアクセス -> WebHID (提案済み / In Development)
  - 連絡帳サクセス -> Contacts Picker (提案済み / Experimenting)
  - インストールしたフォントをアクセス -> 提案済み / In Development

- もうすぐ実装します
  - Clipboard API with Image （クリップボードAPIに画像も添付できる）
  - [SMS基づくOTP検証](https://bit.ly/sms-verification-explainer)
  - Notification Triggers API （時間基づくプッシュ通知）


> 上記内容年内実装
> Chrome で試すまたフィードバックは下記サイトまで
> https://developers.chrome.com/origintrials

> Web API は Project huguで 確認できます [Project hugu](https://bugs.chromium.org/p/chromium/issues/list?can=2&q=proj-fugu&sort=m&colspec=ID%20Pri%20M%20Stars%20ReleaseBlock%20Component%20Status%20Owner%20Summary%20OS%20Modified)

![Web API スケジュール](http://static.xingoxu.com/blog/sinaimg/6b8bbe7egy1g356dbrkpgj21rs0xs4qp.jpg)

> 関連Session： Unlocking New Capabilities for the Web (Google I/O ’19)

## JavaScript API / Syntax
- Class のプライベート属性 (実装済み) - working on privatter method and getters and setters
- String.prototype.matchAll (実装済み)
- Number spearater (Chrome 75)
- BigInt (Chrome 74 と Firefox nightly と node 実装済み & transpiler available)
- Array.prototype.flat (in chrome firefox safari node)
- Entries から Object に転換する Object.entriesの逆操作 (in chrome firefox safari node )
- globalThis (in chrome firefox safari node )
- Array.sortの安定性を標準の中に書くように努力してる
- 多言語について
  - Intl.RelativeTimeFormat -> today yesterday tomorrow (in chrome firefox node)
  - Intl.ListFormat -> ex. A, B or C  (in chrome node)
  - Intl.DateTimeFormat -> ex. May, 5  (in chrome)
  - Intl.Locale -> Internal Translation (in chrome node)
- Promise.allSettled (in chrome 76 nightly) / Promise.any
- WeakRef and finalizers (in chrome with flags) & 標準の中に書くように

> 関連Session： What’s new in JavaScript (Google I/O ’19)

# 経験シェアとパフォーマンス

Chrome はフレームワークなどスケジュールAPIを提供したい、
連続実行、レンダリングの時もユーザーの操作受けるように。

- Scheduling API
  - https://github.com/WICG/main-thread-scheduling
  - https://github.com/WICG/is-input-pending
  - https://github.com/WICG/display-locking


Google はパフォーマンスにやり方とアドバイス

- 段階的SSR
- JS完全ロード前のクリック事件を取るように
- 一定サイズの初期JS
- インタラクション駆動型遅延ロード
- 依存関係グラフ、宣言型機能ロード、同時にデータを取る

![Google Important Piece](http://static.xingoxu.com/blog/sinaimg/6b8bbe7egy1g356nnvqhfj21ra0z2e81.jpg)

Google のパフォーマンスアドバイス

1. 遅延ロード
2. レスポンシブ画像（ピクセル密度による画像をロードする）
3. 画像CDN
4. サードパーティのJSを遅延する
5. 高価なライブラリを削除する
6. コード分割
7. Web Fontの白いフラッシュを避ける
8. Prefetch
9. Preconnect
10. Preload
11. クリティカルCSS（はじめの画面だけ必要のCSSをロードする）
12. gzip -> Brotli 
13. 端末、ブラウザによるJSをロードする

また、Lighthouse を使って、性能予算を設定する

![Performance Suggestion](http://static.xingoxu.com/blog/sinaimg/6b8bbe7egy1g358gekpplj21430l4k2y.jpg)

> 関連Session：   
> Elevating the Web Platform with the JavaScript Framework Community (Google I/O ’19)  
> Speed at Scale: Web Performance Tips and Tricks from the Trenches (Google I/O ’19)

# その他

他のパフォーマンスユースケース、ノウハウ、Web内容はここへ
https://www.youtube.com/playlist?list=PLNYkxOF6rcIATmAmz7HcCzongGvQEtx8i

<!-- Google 的架构建议
1. 为不断发展的Web API而设计程序
2. 避免惩罚新浏览器（polyfill等）
3. 持续服务器缓存，保持高CDN命中率
4. 避免重大修改并增强现有工具 -->

