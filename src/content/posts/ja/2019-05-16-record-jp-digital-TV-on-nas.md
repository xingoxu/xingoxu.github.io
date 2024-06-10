---
title: Synology NASに自宅で録画サーバーを立てました
tags:
  - dev
published: 2019-05-16 15:47:37
---

# なぜNASに

NASを持ってる方多いと思いますし、NASは24時間起動してるので、新しいデバイス買わなく節電できて録画サービスを任せろう。

# 使うもの

- Synology NAS 一台
  - アンテナを接続してリコードする
  - DockerとVirtual Machine Manager対応機種 （[機種一覧](https://www.synology.com/en-us/dsm/packages/Virtualization)）
- PLEX USB地上波アンテナ PX-S1UD V2.0
  - 初心者に優しい地デジアンテナ
  - 高くない、4530円
  - 1チャンネルのみの視聴、録画が可能、買い足して同時受信チャンネルが増やせる
  - [買う](https://www.amazon.co.jp/gp/product/B0141NFWSG/)
- SCM IC读卡器
  - B-CASカードの読み取り用、1000円ぐらい
  - [買う](https://www.amazon.co.jp/gp/product/B0085H4YZC/)
  - 型番は同じではないかも、SCMじゃないやつ届けられたら自己調整必要
  - SoftCASも使えるらしいが、私は使わない
- HDD
  - 録画した映像保存用
- B-CAS カード
  - テストはテレビから借りるのはいいと思います
  - アマゾンにも誰が売ってるらしいが、自己責任でお願いします
- アンテナ分波器 / 分配器 、接続線
  - TVと同時視聴するため。必須ではない。

<!-- more -->

# 注意

記事書く時点だけの有効性を保証します、エンドユーザー、コンピュータ初心者向けではない。
以下の手順は全て自己責任で、何かしらの問題が発生しても自力で対処できる方のみ実行してください。
テレビ番組のコピー、配信は違法となる場合があります。使用についても十分注意して下さい。
この記事を参考にしたことにより生じたあらゆる損害について、著者は一切の責任を負いません。


# 構造

![架构](https://static.xingoxu.com/blog/sinaimg/005BYqpggy1g336pg2yuyj30fm0akgm2.jpg)

大体こういう感じでやっていきたいと思います。

# NAS の準備

- Dockerをインストール
- Virtual Machine Manager　をインストール
- VMM に Ubuntu 16.04/18.04をインストール
  - 他のLinux Distrubtionもできるかも、本記事はUbuntu 18.04で説明します
  - Linuxのカーネルは3.15を越えないといけない（理由あと説明）
  - LANのみアクセスできるように設定するのはおすすめ

# アンテナ設置

VMにアンテナのドライバをインストールします

```
$ wget http://plex-net.co.jp/plex/px-s1ud/PX-S1UD_driver_Ver.1.0.1.zip
$ unzip PX-S1UD_driver_Ver.1.0.1.zip
$ sudo cp PX-S1UD_driver_Ver.1.0.1/x64/amd64/isdbt_rio.inp /lib/firmware/
```
完了。

アンテナドライバ最低3.15のLinux カーネル必要なので、Synology NASのLinuxカーネルは3.10なのでVMを立って使います。

もし今後 NAS のカーネルが3.15以上になったら、次回 https://github.com/Chinachu/docker-mirakurun-chinachu の Docker イメージを使ってみたいと思います。

# カードリーダーとB-CASの準備

カードリーダーソフトとビルドツールのパッケージをインストールします。

```
$ sudo apt-get install build-essential git cmake g++
$ sudo apt-get install pcscd libpcsclite-dev libccid pcsc-tools
```

完了後、`sudo pcsc_scan` を実行して、`Japanese Chijou Digital B-CAS Card (pay TV)`みたいものでたら完成です。

しかし、私はここ２つ問題遭った、
１つ目は入れ間違えたww、
２つ目はB-CASカード無効問題、B-CASカードを最初にテレビに入れて見てみたら多分分かると思います。

型番も問題になるかもしれない、参考した記事の作家さんは遭ったのでそちらの記事をお越しいただければと思います。

# B-CASのデコード用ライブラリのインストール

日本の地デジ放送は暗号化された状態で配信されているため、そのまま受信して保存すると再生や複製の際に問題が起こる。そこで、B-CASカードの情報を使って受信と同時に復号するのが望ましい。これを実現するライブラリがlibarib25だ。

コンパイル必要です
```
$ wget https://github.com/stz2012/libarib25/archive/master.zip
$ unzip master.zip
$ cd libarib25-master
$ cmake .
$ make
$ sudo make install
```
インストール完了です。

# 録画用コマンドのインストール

録画ソフトはこれを使って録画しますので、recdvbをインストールします。
ソースコードあるんけど、Githubに載っていない。

```
$ wget http://www13.plala.or.jp/sat/recdvb/recdvb-1.3.2.tgz
$ tar xvzf recdvb-1.3.2.tgz
$ cd recdvb-1.3.2
$ ./autogen.sh
$ ./configure --enable-b25
$ make 
$ sudo make install
```
インストール完了。

この時点で、コマンドでの録画が可能になった。例えば、
```
$ recdvb --b25 --strip <channel> <seconds> test.m2ts
```
チャンネルは受信タワーによる違いますので、[こちら](http://www.maspro.co.jp/contact/channel.pdf)から確認できます。

また、
```
$ recdvb --b25 --strip --http <port>
```
を使ったらリアルタイムストリーミングを配信します。

Windows / MacのVLCかMacのIINAからURLを開いたら直接見れます。
```
http://[IPアドレス]:8080/[channel number]
```
チャンネルは上と同じです。

だが、その前に、
VMの`/etc/hosts`を設定しなければいけない（安全保障かな）、
でも私のチューナーサーバーはWANに公開するつもりはないので下のリンクを参考して解除しました。

> https://nyanonon.hatenablog.com/entries/2015/11/17

`Ctrl+C` を押して終了させます。

# Mirakurunをインストールしてチューナーサーバーを立ちます

チューナーサーバーMirakurunではWeb APIを提供して、録画コマンドの並列処理や、複数チューナーの管理、優先度処理など様々な機能が利用できます。
Mirakurunのクライエントを通じて外でも番組を予約もできる。

Mirakurunのインストールはこちらへ参考していただければと思います。
> https://github.com/Chinachu/Mirakurun/blob/master/doc/Platforms.md

ざっくりここで書きます

## Node.js 10 をインストール
> 请参照 https://github.com/nodesource/distributions/blob/master/README.md#debinstall

## PM2をインストール

```
sudo npm install pm2 -g
```

## Mirakurun メインプログラムインストール

```
sudo npm install mirakurun -g --unsafe-perm --production
```

## Mirakurun を設定

Tuner設定
```
mirakurun config tuners
```

ここで半日間かかった！わけわからんパラメーターを抜いたら使えました！

```yml
- name: PX-S1UD-1
  types:
    - GR
  command: recdev --b25 --strip <channel> - -
  isDisabled: false
```
Mirakurun再起動します。
```
mirakurun restart
```
`pm2 log` で状況を見てみましょう、特になんのエラーが出てなく、`Recording` が出たら多分大丈夫です。

チャンネルの設定は Mirakurun は自分が取得しますので、5-10分ぐらい待てばいい。

ここまでチューナーサーバーの設定は完了しました。
MirakurunはAPIとHttp Streamingも提供してるので、
APIの使用はここへ
> https://github.com/Chinachu/Mirakurun

# Chinachu / ffmpeg をインストールする

でもGUIクライエントがないとめんどくさい、Chinachuをインストールします。

Dockerのイメージを作りましたので、DockerFile参照して使うか、自分がカストマイズするもよい。

> https://github.com/xingoxu/docker-chinachu-vaapi-ffmpeg


もし私のDockerFileを参照して立ているなら、下記を注意してください。
（Dockerを利用する方も見るといい）

- タイムゾーン問題
  - `/etc/localtime:/etc/localtime:ro`をマウント
- Chinachu の予約、設定データ
  - 下記のファイルとフォルダをマウントしてデータを保存しましょう
  - `./chinachu/data:/chinachu/data`
  - `./chinachu/rules.json:/chinachu/rules.json`
  - `./chinachu/config.json:/chinachu/config.json`
- 膨大ログ問題
  - Chinachuとpm2はログ入ってるから、Dockerのログはいらない、エラーだけを出力させろう
  - 下記スクリプトを書いて保存して入り口を設定します。
```
#!/bin/bash

npm install
pm2-runtime processes.json > /dev/null
```

- 録画ファルダのマウントをお忘れなく
  - `/volume2/TVRecorded:/chinachu/recorded`
- ポートの公開

## Chinachu 設定

公式ドキュメント
> https://github.com/Chinachu/Chinachu/wiki/Gamma-Configuration

基本、コピーしてちょっとカストマイズすれば大丈夫。

VAAPIについてはあとトランスコードの部分で説明します。

それで、Dockerを起動して、
`docker-compose`も利用可能ですので、自分のニーズをあわせてChinachuを起動します。

## できましたか

NASのURLとポート番号をブラウザに入力して下の画面見れると成功です。

![节目表](https://static.xingoxu.com/blog/sinaimg/6b8bbe7egy1g336sgurv5j224s17k1ky.jpg)


## 録画後のトランスコード

録画したファイルは大きな生TS、 大体 x86 アーキテクチャの NAS はハードウェアアクセラレーションついてるので、速いスピードでmp4にトランスコードして、どこでも見れるコーデックにしながら、ファイルサイズも小さくさせる。

注意するべきのはDockerにvaapi（Intel CPUのハードウェアアクセラレーション）を使うと、rootの権限でアプリを走らないと行けない（`/dev/dri/renderD128`をアクセスために）

だがこうすると、録画したファイルはrootが所有者になって、他のアプリの編集は出来ないので、録画後、トランスコードした後、chownを走らせましょう。

```
$ chown <uid>:<gid> </path/to/file>
```

ffmpegのパラメーターも共有しますが、自分のニーズをあわせて公式ドキュメントを参照して調整できます。

```
$ ffmpeg \
  -init_hw_device vaapi=intel:/dev/dri/renderD128 -hwaccel vaapi -hwaccel_output_format vaapi -hwaccel_device intel -filter_hw_device intel \
  -i /path/to/recorded/file \
  -analyzeduration 30M -probesize 30M \
  -vf 'format=nv12|vaapi,hwupload,deinterlace_vaapi' \
  -c:v h264_vaapi  \
  -threads 4 \
  /path/to/output/file
```

注意：ここのPATHは絶対にフルパスを指定してください、そうじゃないと妙なところに行っちゃいますよ。

名前をつけて、`afterRecord`とし、 `config.json` に

```json
{
  ...
  "recordedCommand": "./userScripts/afterRecord",
  ...
}
```
を編集して。

自分のニーズ合わせてスクリプトをカストマイズして自分唯一無二のサーバーを作りましょう！
僕はLINE通知を入ってて録画したら通知がLINEに来ますね。

# NASでやるべきのこと

## WebGUI パスワードをつける

WebGUIそのままWANに公開するとちょっと危ない、入るときパスワード機能を入れましょう、自分だけ入ることを確保しましょう。

僕docker-compose を使ったから、すぐ nginx を追加できます。

### パスワードを生成する
```
$ sudo htpasswd -c /path/to/.htpasswd <username>
```

### サーバーにコピーして

サーバーで生成する方はスキップー

### nginx を設定して docker-compose 再起動

```
...
location / {
    proxy_pass   http://localhost:5601;
    auth_basic " Basic Authentication ";      
    auth_basic_user_file "/etc/nginx/.htpasswd";       
}
...
```

```
$ docker-compose restart
```

ブラウザをリフレッシュして、ここでパスワードが求められてるはずです。

## NAS 再インデックス

自分のスクリプトで作ったファイルは NAS は知らないので、DLNAとかで出てこない。
そこで再インデックスする必要があります。

仮にすべて録画したファイルは`/path/to/record/folder`の第一層でいる、このようなスクリプトを書いて

```bash
#!/bin/bash

cd /path/to/record/folder

for mediafile in $(find /path/to/record/folder -maxdepth 1 -type f -mmin -<minutes> -not -name .DS_Store)
	do
		synoindex -a $mediafile
	done

```

`reindexTVRecorded`を名前を付けて、 `Control Panel - Task - New - Scheduled - User Script`、時間とか選択して、スクリプトのパス入れて「はい」を押したら完了。

![重新索引](https://static.xingoxu.com/blog/sinaimg/005BYqpggy1g336q15opxj31bx0u0wmy.jpg)

# 残りの問題と課題

- 字幕
  - 録画したTSはVLCで字幕見れますけど、どうすればsrtを抽出できる
  - assdumper使ったけど、何も出てこない
  - `Caption2Ass.exe`などwindowsプログラムは使ってない
- 多国音声
  - ２つの問題があって
  1. ステレオで一つずつモノラル音声で２つ国の音声放送された（NHKニュースよくある）
  2. 多ストリーミングで多国音声放送された
  - `-filter_complex channelsplit` か
    `-dual_mono_mode main`
    ネットによく見たパラメーターどっちを使ってもエラーが出ちゃう


心当たりがある方教えていただければ幸いです！ m__m

# 最後

NASがある場合は5000ぐらいで立てるのはいいと思います、今後どこでもテレビを見れると嬉しい。

記事の中は自分自身の特集のニーズいっぱい詰まってるし、記事を書くときも立てたから一ヶ月ぐらいがあって、抜けている箇所があるかもしれないし、変な日本語もあるかも、もし何が不明点があればコメントで書いてくださいー

# 参考

> [Raspberry Pi 3+Chinachuで地デジ録画サーバー構築](https://qiita.com/shotasano/items/3809b8f3e0b62d51d3c3)
> [Linuxの自宅サーバをテレビ化して家中どこでもテレビが見れる環境を作ろう(2)](https://ywnb.net/p/201612/3264)
> [通过Nginx反向代理配置Basic Authentication实现kibana的访问安全](https://www.jianshu.com/p/e62c2a1cd3ab)
> [2017/01/30 時点での録画サーバ構築手順](http://arc680.hatenablog.jp/entry/2017/01/31/005135)

最後まで読んでいただきありがとうございました！