/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/03/WNDR4300-setup-log/index.html","f2c6ccde6223a0ddae46315679f1559f"],["/2015/03/android-hostname-change/index.html","00afa89abb7cffa7b4d2e3ee2c72b568"],["/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","1703c458543569c9581382073b2af061"],["/2015/04/android-chrome-issues-with-webpage/index.html","65da76f22a1f53e413da6386658cb02c"],["/2015/04/cpp-study-log/index.html","1ed73b111121f456f030a5980bfe4ff3"],["/2015/04/github-pages-ssl/index.html","964afcb140edb8d9df0e0a3963f507b1"],["/2015/04/hello-world/index.html","ae5c68a7443a96f2572d6e96c00833dc"],["/2015/04/hexo-setup-log/index.html","845810246939279a0cde3ea811d77a0c"],["/2015/04/self-copy-cd-inazuma-1-html/index.html","36aa55e5dd43265b946755cf36e0a50b"],["/2015/05/cpp-inherit/index.html","1d9e4c17a52afa05929bf5442ca5d37e"],["/2015/05/cpp-polymorphism/index.html","51a068b3ce02dc761512c0e1792ec941"],["/2015/09/android-root-ota/index.html","78c8ac1be1802b608a05256723628e9a"],["/2015/09/java-learningNotes-1/index.html","fcbb94e1facecd36a5c42d7eb6b07453"],["/2015/09/newblog-newlife-2015/index.html","71e825550e31fce29583daed77237a0a"],["/2015/09/router-rebuild-2015/index.html","564511871683cf5918d89a4f9f978006"],["/2015/12/2015-12-21/index.html","4973c5cf1d7b49af8afede8dc3a240cd"],["/2015/12/PixInTouch/index.html","282654059ed7255704b3b887d01f0dd4"],["/2015/12/git-study-1/index.html","be66b619dcbed19110277f9557173946"],["/2015/12/hexo-backup-and-migrate/index.html","4c2dca7181bc9618a1c3f66f0896bd26"],["/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","9dea7363075f68f6e8b8ec5e50c7719d"],["/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","cd85c738ff534a5d967687eb588fed79"],["/2015/12/router-reconfig-2015/index.html","8d9fe9fd0e0af625caead4ce4accf850"],["/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","1b39faf0d93b928df8f8662e3ab5364e"],["/2016/01/2016-stepping-further/index.html","dbc7b4776ef5ec41c0983b9d81b24416"],["/2016/01/Android-Study-1-22/index.html","627b4acca97ae653b45e5c3045416438"],["/2016/03/2016-03-20/index.html","95c6cf13b568d908f17e6a3cd56eaf45"],["/2016/03/GSC-535/index.html","51307e6cca15adaf4a4a62242e8c245d"],["/2016/03/gulpjs-1/index.html","65e57a52b4fa14a57fc3116feda5f3c6"],["/2016/03/hexo-theme-paper-white/index.html","d9cfc794bf579d9c26376a468da25aad"],["/2016/04/2016-04-19/index.html","9e9da0c6ff588ce30aae2966278daeb7"],["/2016/06/2016-06-16/index.html","248dabe5ad47cfe0e654369998f486d2"],["/2016/09/2016-09-18/index.html","5983dd5bebdb396d482af38d13c6efd0"],["/2016/10/2016-10-27/index.html","cde3560d4daa8f860f86e0087433c5bc"],["/2016/12/config-switchresx-and-2khidpi/index.html","223096efddb0bf0b2942dd0c99eaac52"],["/2016/12/improve-duoshuo/index.html","983e9edf14d0e3c8b5be63865da92cb6"],["/2016/12/use-travis-ci-your-blog/index.html","8a38b9d6ec5f17ea5c23da3d11acafc9"],["/2017/01/2017-iyahoi/index.html","61eaac686104855ebceadbc2116e0c95"],["/2017/01/webpack-amd/index.html","05d4a0ca707c32aeaf6f385afaa2b8b1"],["/2017/04/kotobukiya-syaoran/index.html","c355b9f0029c096642b3e619b3d79c40"],["/2017/04/macbook-and-surface/index.html","40361bffb0cdf839c728a81ffb9852bb"],["/2017/04/uc-hyakuya-yuichiro/index.html","636f0bfece19f42465641e061269a7f4"],["/2017/06/noragami-seichijunrei/index.html","5b6e0f7df2d6954ae40598ad35b7f258"],["/2017/08/cross-compile-55-libev/index.html","9f7151b9646cbe4e3318d649dee1ac67"],["/2017/08/explore-service-worker-working-lifetime/index.html","2c0e34ce4dbdb663ba8d398361ef6bc7"],["/2017/08/kiminonawa-tokyo-seichijunrei/index.html","43d68a3ea7735a29743913c8247f0a1a"],["/2017/09/record-user-login-status-methods/index.html","d6df157dc6d7737eddc95f76b3bc07a3"],["/2017/10/vue-typescript-early/index.html","caf49c71c1d6fcfbed796432ecbd7e55"],["/2018/04/2017-end/index.html","cb55ebe34d64f03fc3051063c01fb9dc"],["/2018/04/twitter-account-activity-api/index.html","769895ccc7976040a53c8ce93ea73a1b"],["/2018/05/buddy-complex-seichijunrei/index.html","c673e2d5e53b36641f4783fce4c869a2"],["/2019/05/2019-05-16-record-jp-digital-TV-on-nas/index.html","a3a9c31f4452f00e188653d97d862988"],["/2019/05/2019-05-17-google-io-tech/index.html","3717bb58a8c9342e11e4ed4e3df85c1b"],["/2020/06/cls/index.html","6bad41d3cf25b7e2c518dd49b3f44994"],["/2020/06/try-serverless/index.html","d0eeb5d295d26d39f620cf4ee4ae38c1"],["/2020/07/macos-node-require-path-case-insensitive/index.html","cc70b954a19e547dbc82acd27a40bbb9"],["/2024/01/transmission-under-vpn/index.html","25fc22016ed8a0bb7f910658d4d9ffb2"],["/404.html","845ecf5679480178d79de94174f558f1"],["/about/index.html","e1a7a3ff09d4844a84f3e56856637b18"],["/archives/2015/03/index.html","5ff7b1ce5e683eb4964a92fc4fc8577b"],["/archives/2015/04/index.html","7c8d854bdf007983698cbb23007e7940"],["/archives/2015/05/index.html","b446e00ac57c35edace3c1cf38073208"],["/archives/2015/09/index.html","097d908dc51d4472ad4e309dfd13c5b3"],["/archives/2015/12/index.html","d5ea7768d34154eb6016218825c27aaf"],["/archives/2015/index.html","e14d01033ff501090a5686568eebae28"],["/archives/2015/page/2/index.html","3a747a43ae53ba55d4845869528f7cbc"],["/archives/2015/page/3/index.html","5550187fb43a74adf9d39a29161e10ae"],["/archives/2016/01/index.html","370c6ba5b4c2ae850affb6ba0676cb73"],["/archives/2016/03/index.html","32fe96a004316819cbaacb69e4bd318b"],["/archives/2016/04/index.html","11bf973a2975ede99aa7eaa0cd3faa2f"],["/archives/2016/06/index.html","92b9a7ca3f8aa898bdb6db267f8b1237"],["/archives/2016/09/index.html","4032b5f237e05a215c4592bf2bfd0f5f"],["/archives/2016/10/index.html","a044530a3181032565ae141a96f0c376"],["/archives/2016/12/index.html","509efc1657a23861ec6170bf53ad094d"],["/archives/2016/index.html","99faa989385eea48b8a09e89f51a4d10"],["/archives/2016/page/2/index.html","e697f80dd5c65d9aecdd621e37204ee8"],["/archives/2017/01/index.html","f4b2a9de32ccf1536d338cba01c09b23"],["/archives/2017/04/index.html","0c9941f8bbf4d915722afb737f0c4426"],["/archives/2017/06/index.html","cda32370f0cc862115e3e0309e899d23"],["/archives/2017/08/index.html","f94ed941bf7dd90d94ed8891ca039dff"],["/archives/2017/09/index.html","8c82426d0991529dd20561a80a570e95"],["/archives/2017/10/index.html","f983e2d7ca9682ed10b87ddca19d6e55"],["/archives/2017/index.html","214c03d45c86ebfe077c3f6ded4a08e4"],["/archives/2017/page/2/index.html","f8a62bc313f8577571f2573d4698fed1"],["/archives/2018/04/index.html","a769db1194d2a21b63e06ac7eafb7d97"],["/archives/2018/05/index.html","174eff69bd6ef6d223f4a462e08c567d"],["/archives/2018/index.html","ba1a041825fee71949c5aca838675d40"],["/archives/2019/05/index.html","f274ba05fa5f2685b13f0537253a7923"],["/archives/2019/index.html","b625a97e1a8f6e28d6a792805dc34a2e"],["/archives/2020/06/index.html","1fe450f689d7506dbb87a4245126ef01"],["/archives/2020/07/index.html","00eeeb87b7c8d12224d45c12ad823936"],["/archives/2020/index.html","db19daad67c621f7c48bf12aa1fd73e1"],["/archives/2024/01/index.html","da046fa1a7e7837dfd9e037f138b9f64"],["/archives/2024/index.html","ba97841e3a7bddd2c0a0f26c5b07e6fa"],["/archives/index.html","8e873dfa8ea58e4f6265388bfdc8937a"],["/archives/page/2/index.html","a35a5ad212365cafdcbcfb51a8c85a8f"],["/archives/page/3/index.html","2f2c60b1a7b8f038825973e6f2ebe7f7"],["/archives/page/4/index.html","f6a63f4254f723cd692d04dd9a00ec62"],["/archives/page/5/index.html","79e588f6156d5818d1fb48ee7d68b478"],["/archives/page/6/index.html","d0be11800c083bfe77064c0a7f501449"],["/assets/images/about-me.png","a066d06c3d9d1fe56c4d921cec7febf3"],["/baidu_verify_YbTSlpWIUJ.html","779049c3a50695ceb3a388ce1e8bc1b9"],["/categories/ACG/Music/index.html","9cd90d9141c1f3a42b4aec951ae1c68f"],["/categories/ACG/Music/self-copy/index.html","5a08daa90fe108429b69875f203366ab"],["/categories/ACG/Travel/index.html","46b6af6e166f0008bcad8972c620f872"],["/categories/ACG/figures/index.html","e475f49c407878945004af55e5cf7138"],["/categories/ACG/index.html","1871e9f0d38ad514ddd76ff4914b3942"],["/categories/dev/Front-End-Dev/index.html","679d2171363e084e72f26dcb907c1bb0"],["/categories/dev/Front-End-Dev/page/2/index.html","8a13fd24e06bb0248f44d35dea3f18b0"],["/categories/dev/HTML-CSS/index.html","51b084e5880180e99abd09790b002d18"],["/categories/dev/android/index.html","c7cc710144972a6638fe2caeef21949a"],["/categories/dev/cpp/index.html","e339a2d2389e57e0e3a37bcc65ed858d"],["/categories/dev/git/index.html","d7b3f98f2cdca5dd97cc824e42c365be"],["/categories/dev/index.html","780002b92af08bd275026cda40c0dd88"],["/categories/dev/java/index.html","1b4dec8a80aee6612d6d4651315256ac"],["/categories/dev/page/2/index.html","b31ed9252680875531c247b192521d22"],["/categories/dev/page/3/index.html","4fe1ed9ad059d68cddfc8c25248d1ccf"],["/categories/maintaince/blog-setup/index.html","2bd133a523ca0597021d0d1f8663031e"],["/categories/maintaince/index.html","fe1c851badc2ac1f069eddc3e17dbbd1"],["/categories/maintaince/macbook/index.html","bfbba3a31f4565d5b383008be6b20f92"],["/categories/maintaince/router-config/index.html","4987d46f3c5cbe1f6d7edddedd9f0067"],["/categories/notes/index.html","171a241d8279df87a06cd7d54f29bea8"],["/categories/tricks/android/index.html","5e98b6ef6bf3ac215d58bda0fd079d71"],["/categories/tricks/index.html","cb7445f4f2019a8c3173763feb14b79c"],["/categories/uncategorized/index.html","e5c70150cd86a66883438b5eaddf90f6"],["/categories/works/Front-End-Dev/index.html","a95c6177440518b0c0c6762f83d73686"],["/categories/works/csharp-wpf/index.html","e41d24a5f51489547cd6f7138dff5bb7"],["/categories/works/index.html","5176032c38c6b4fd894c22d42dd3b8bc"],["/css/seichi.css","c60ad00990790aacbe0a9ff08766c515"],["/css/style.css","e3abc56736917946e8536ef38cc2c5cd"],["/google311213f0c8d812a9.html","51f1ee3c2f13a21a1a40b3dae4954454"],["/img/coderwall.png","1976fe70f1ee8ed243e0975402e06a2d"],["/img/delicious.png","952d9b54d8bcfe7b998f67ff48c4dbce"],["/img/douban.png","d42a163f932100e621d22732db34ecdb"],["/img/facebook.png","4bd685f6c9fdaccabf07bdd52173facb"],["/img/github.png","3c4b6267a1a3fedebdc7d089610ecfe7"],["/img/google.png","c385f5304465716b2d6c9ada94c657ab"],["/img/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["/img/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["/img/linkedin.png","4c72c4896f3c23f736cb1ad08f0c866e"],["/img/mail.png","38a7b8302dac028bf03b22d228938abf"],["/img/pinboard.png","9b6186cb97adbe50311f94e50f2392cf"],["/img/pinterest.png","e1b8e655d1b99b40ebcbd96977ae234e"],["/img/rss.png","ec8cf9b5a98011aa75cc0a4f25024dc9"],["/img/scrollbar_arrow.png","be5381cedbd6b778b1d92e224fd71cf7"],["/img/stackoverflow.png","039128ececb47b33bccedd98dc9fc809"],["/img/twitter.png","d2289a4936fefa41d9f92cf89939be5b"],["/img/weibo.png","b382032b316ee38c6d537fe9d36ae54c"],["/img/zhihu.png","e6352c0e1957beef3009268ae747c3aa"],["/index.html","8e7adc357a188c70b440b96a1b8edf48"],["/ja/2015/03/WNDR4300-setup-log/index.html","bd0410f76ac1acd60771523e7a811640"],["/ja/2015/03/android-hostname-change/index.html","c22b00db384cfe60accc5f054606354c"],["/ja/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","51f1a8a8403ca0a6fbcea082d15323aa"],["/ja/2015/04/android-chrome-issues-with-webpage/index.html","8a1707d2baadcb68a56e23573b8c7dfd"],["/ja/2015/04/cpp-study-log/index.html","80bdbbb2e9a639777e0448544914ee06"],["/ja/2015/04/github-pages-ssl/index.html","861d5e8285e038b83623586fd3c44729"],["/ja/2015/04/hello-world/index.html","908d0a24742d45d597427b861b9638d4"],["/ja/2015/04/hexo-setup-log/index.html","ed200e282b04c66c9f364121e091f17c"],["/ja/2015/04/self-copy-cd-inazuma-1-html/index.html","0f2ac0fbae2e0eb37967f76e03b728f7"],["/ja/2015/05/cpp-inherit/index.html","b9b3fc6f9d7fb517fccb7757e5a9d01c"],["/ja/2015/05/cpp-polymorphism/index.html","c540e2ba886ee8ba577af12e5d924f5b"],["/ja/2015/09/android-root-ota/index.html","409f68bb4dcc875d75630c2a9b182d16"],["/ja/2015/09/java-learningNotes-1/index.html","50a14f3bc86647e9419166880e974dde"],["/ja/2015/09/newblog-newlife-2015/index.html","99d0bf445fd63260814aefa210e8a40b"],["/ja/2015/09/router-rebuild-2015/index.html","425e60d87f2f6fa63f897b71548bf6a2"],["/ja/2015/12/2015-12-21/index.html","6c7e4f852f817defde82f885ceb057c2"],["/ja/2015/12/PixInTouch/index.html","f5c634feebd2200d6d8a012fbcbec7ad"],["/ja/2015/12/git-study-1/index.html","764bcc1ba10ab090630e6bc9ea5046be"],["/ja/2015/12/hexo-backup-and-migrate/index.html","69815132324dcc1880dea1393c37b446"],["/ja/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","348b5845661cd8092c50218b7793a357"],["/ja/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","bf0659507798796654f2946723e30a65"],["/ja/2015/12/router-reconfig-2015/index.html","53c818fbe893312e217c19f33f4e740f"],["/ja/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","a3d1ff2564494c2e0cd4d599faba16ef"],["/ja/2016/01/2016-stepping-further/index.html","dd6f988941b6e402eb23d43a7ba9de70"],["/ja/2016/01/Android-Study-1-22/index.html","120e98f85f94a485f1cf101a1e989665"],["/ja/2016/03/2016-03-20/index.html","ceda9450f8954d9288166a7b99d0fcd8"],["/ja/2016/03/GSC-535/index.html","387d7642249b4fe2dd1c77944ab86b9d"],["/ja/2016/03/gulpjs-1/index.html","050136df853f3e9e0fb34be3719deb09"],["/ja/2016/03/hexo-theme-paper-white/index.html","266e89959db8fcd2df7030a5838c18f3"],["/ja/2016/04/2016-04-19/index.html","d334457bfb6290b0ff9fdb0396242483"],["/ja/2016/06/2016-06-16/index.html","1398e63615517c4749303a70fb8e28de"],["/ja/2016/09/2016-09-18/index.html","26346e5c41f74943b427d3d8f2d14065"],["/ja/2016/10/2016-10-27/index.html","7284c51b5fc80a1f17418aaefaaa5467"],["/ja/2016/12/config-switchresx-and-2khidpi/index.html","78a3f6254ab819f6349d53b951215ffe"],["/ja/2016/12/improve-duoshuo/index.html","ab0388cfd6dc596a0dd0b2abd96bc77c"],["/ja/2016/12/use-travis-ci-your-blog/index.html","89cf79a8d74216b57ecdae2521de98ff"],["/ja/2017/01/2017-iyahoi/index.html","5807cb3281aecc5b1db69771f60276b5"],["/ja/2017/01/webpack-amd/index.html","c0f5923958f7068ca521d1cc56f1ffa9"],["/ja/2017/04/kotobukiya-syaoran/index.html","74ef5f798804b59b12e882311c8f5ddb"],["/ja/2017/04/macbook-and-surface/index.html","a5d166f30ae3578621eead33feb5f87b"],["/ja/2017/04/uc-hyakuya-yuichiro/index.html","d5cc9d16418ec7bd7f2089d338ff7cdf"],["/ja/2017/06/noragami-seichijunrei/index.html","3bf1f621331713c02970849381153065"],["/ja/2017/08/cross-compile-55-libev/index.html","9db1252284fb98b13535dae9a888a5f6"],["/ja/2017/08/explore-service-worker-working-lifetime/index.html","f629a73b8e4b7c2e176580cc3a8c2acf"],["/ja/2017/08/hello-jp-world/index.html","b8b5d942954bc8f5b26eff318eaa7ea2"],["/ja/2017/08/kiminonawa-tokyo-seichijunrei/index.html","f86c42ed694acefdaf83b3d4eab08ee4"],["/ja/2017/09/record-user-login-status-methods/index.html","bc0eb21eb0a8512b24d5daa77af6bc81"],["/ja/2017/10/vue-typescript-early/index.html","a562dcd83c4459ae32369d57611a0e38"],["/ja/2018/04/2017-end/index.html","c10d6b8c519bb2bfaf5fe1687bdfaede"],["/ja/2018/04/twitter-account-activity-api/index.html","27cf7d3024c9b1a5c924a90e8d53e9c3"],["/ja/2018/05/buddy-complex-seichijunrei/index.html","37b4d6e1583e35fdb72ba1e2d64953e9"],["/ja/2019/05/2019-05-16-record-jp-digital-TV-on-nas/index.html","e6125c514566c5382690ca5a11a88370"],["/ja/2019/05/2019-05-17-google-io-tech/index.html","990ff7d1c04189083e85d55675fff9a0"],["/ja/2020/06/cls/index.html","398fecac2a81afdc955a5db137cfcd3b"],["/ja/2020/06/try-serverless/index.html","67e09586fa019ba8fc78fcd41dce930b"],["/ja/2020/07/macos-node-require-path-case-insensitive/index.html","97f0b351ce9da15be45faf906ce396e1"],["/ja/2024/01/transmission-under-vpn/index.html","594601d801897aa14ad0dcf7dffe57c3"],["/ja/404.html","ec6772c7411bee995fda786db75a1b68"],["/ja/about/index.html","6e9908b92500aa772289393c8e624a98"],["/ja/archives/2017/08/index.html","19ee0826b77ae72b0c79c068e146a14e"],["/ja/archives/2017/09/index.html","326e58b039c8d6bba33d83068270b801"],["/ja/archives/2017/10/index.html","7690c949fc42f042520b4c36cd58bf6a"],["/ja/archives/2017/index.html","149899ab277b39f050ef147d452e6579"],["/ja/archives/2018/04/index.html","c45b2d1837b0a7e8b8e3dd68b342aedb"],["/ja/archives/2018/05/index.html","f3a506fe87952e4114ba8cdcb409eea5"],["/ja/archives/2018/index.html","fb1031357f7379e4fde3593ddf43da55"],["/ja/archives/2019/05/index.html","9ed2a6ccb4218650edee53d7ea9804fc"],["/ja/archives/2019/index.html","bb4b2392ebf0a226f10c18bd73ffaddb"],["/ja/archives/2020/06/index.html","f2925f281cee30db804cef2388e4f55a"],["/ja/archives/2020/07/index.html","917142080d858c5a3841dfb25c78bff5"],["/ja/archives/2020/index.html","6aa82cffb5bda8af725d3355d7a2bd3c"],["/ja/archives/index.html","1a7e168f493dbb6b65d67d7ad20d82a7"],["/ja/categories/ACG/Travel/index.html","b472d6be9ab1a91abbcd62a73d1b0211"],["/ja/categories/ACG/index.html","8d44946816f9616a50a0f4a1cede7671"],["/ja/categories/dev/Front-End-Dev/index.html","1e4a1b47289a75fa328ef52cdac5f73c"],["/ja/categories/dev/index.html","a6f21999a4356e7aa9b06d68462bb479"],["/ja/categories/uncategorized/index.html","d8309660fcb41dcdb427c717597f6401"],["/ja/index.html","33e5e8d67ed252b2e0f407f59c711c8c"],["/ja/nihongo-test-page/index.html","424535f8b0a1ed971eaabada89ed5de4"],["/ja/resume/en/index.html","4e8e45dfb7f3414f6df3066e915741cf"],["/ja/resume/index.html","87d01888c6430dbd2b74441262a1aebe"],["/ja/resume/ja/index.html","df8954ae1ae11fe8821a6579dc0ba78c"],["/js/instagram.js","7d7a9e2e7286ba2d5b6d12068214f0c3"],["/js/jquery.lazyload.js","28c23bc40080d31144776e9a8736837f"],["/js/main.js","2e92f29b0cd90bddc062915eb46a858c"],["/js/mobile.js","20029df2609ddd5d2b2d346edbb297c0"],["/js/nextpageajax.js","c3bde8d7bb1f967fb319f57a187ea51a"],["/js/pc.js","631b535186aab0e262485ee2bf9da628"],["/js/ripple-effects.js","b9c11903da0ef5c3d790b41369c3137e"],["/js/share.js","de52ac3d43e43c1951a08b0804458a8e"],["/js/totop.js","661822968b58fd439f46bd54031238d6"],["/keep_origin/affiliate_jump.html","71bf6d72c5d080ec2b3f8ecfae3d71ed"],["/nihongo-test-page/index.html","6cdd8df995203f232b68678fbd4ff38f"],["/page/2/index.html","010f8dce63efc1d58e7af51b08d50506"],["/page/3/index.html","836ca3bd59cad1b40a4effc9895b83ee"],["/page/4/index.html","59e2ae9be255aad025eb984664be832d"],["/page/5/index.html","880f2c584bdc0d7e6b24c05c019f1be8"],["/page/6/index.html","6fa3d0413d7880ca681d9705315c3648"],["/page/7/index.html","b2fbdd3855013124ae4957d5a0195284"],["/photoswipe/default-skin/default-skin.css","426e8908d7426603ca203b6d16281b1e"],["/photoswipe/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photoswipe/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photoswipe/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photoswipe/photoswipe-ui-default.js","0c9196aa8943ce8a8045c9f4cc62915c"],["/photoswipe/photoswipe-ui-default.min.js","9517baca43cd4e9cb23ff337fbc1baa1"],["/photoswipe/photoswipe.css","7dc0df107159e1be66d4464171561e5b"],["/photoswipe/photoswipe.js","a8d26ff34943c859884acbd6b2531315"],["/photoswipe/photoswipe.min.js","f5cd6479c4e4682545a9603e6b50c741"],["/resume/en/index.html","0215408896b4a5f35367a51b9c66fe0a"],["/resume/index.html","06cf039b1b7e107484dd221c6eeba048"],["/resume/ja/index.html","d3ac6dbbdd3325f92429a50f50590069"],["/setup-log/blog-setup/github-pages-ssl.html","d5e315a4f7725d0c5a828ab2ac48dfe3"],["/sw-register.js","e5d3ff3b495dc875bce86ce0d5704a4b"],["/zh-cn/archives/2015/03/index.html","4ec2f0f8a1e893c39b97bb4e610e5d67"],["/zh-cn/archives/2015/04/index.html","ea3eac12e969e79c5caa6845285afa48"],["/zh-cn/archives/2015/05/index.html","5102ee4d408a01cf70c45c14da0713bc"],["/zh-cn/archives/2015/09/index.html","8b6c17d5457296899e88cf235690e152"],["/zh-cn/archives/2015/12/index.html","2cffaf72d90901e31aa189751e3456c3"],["/zh-cn/archives/2015/index.html","bf7ecfd573b6ed013854781c65cc7a5c"],["/zh-cn/archives/2015/page/2/index.html","fb1541f83cc5e7f91881180bece249da"],["/zh-cn/archives/2015/page/3/index.html","6aaf2fa58b2e1a24fdd395ebfdb13d2f"],["/zh-cn/archives/2016/01/index.html","ddfe23db005ed319b49a9a47ce36f653"],["/zh-cn/archives/2016/03/index.html","288b56e15a500448a383f54db5588f41"],["/zh-cn/archives/2016/04/index.html","00b5eb36a649cb7150016c7fdf124c8e"],["/zh-cn/archives/2016/06/index.html","50c2d228f437843870fc78d63c0052df"],["/zh-cn/archives/2016/09/index.html","dc7ffb92d995193162d3f6b7ae4f93ee"],["/zh-cn/archives/2016/10/index.html","2a293c62683a75c3e9ddc787b60e353c"],["/zh-cn/archives/2016/12/index.html","c729462661e210d4e2d81e0bb08c2b1b"],["/zh-cn/archives/2016/index.html","342bcd694c02344983b5ff4dd9ea17d8"],["/zh-cn/archives/2016/page/2/index.html","3a967a97703e83e7e36856fc0044ff7f"],["/zh-cn/archives/2017/01/index.html","7818d7b7ffb2f04300c0a30d79bcfceb"],["/zh-cn/archives/2017/04/index.html","bf552c652aa98f57da4f00cedee0641d"],["/zh-cn/archives/2017/06/index.html","0a50501f488a82f63e0c87d0a3ad5240"],["/zh-cn/archives/2017/08/index.html","1001f61cec518eabe914b3b04c47b686"],["/zh-cn/archives/2017/09/index.html","3dbfadc0cf28bf769fc5dd638b0b6ef3"],["/zh-cn/archives/2017/10/index.html","e659f78fb8632b20bd50e2b65d77fbf9"],["/zh-cn/archives/2017/index.html","320ae16c939f1ae063ce2e82bc803657"],["/zh-cn/archives/2017/page/2/index.html","9b0fd91dfc126183120cb20b2e9e5592"],["/zh-cn/archives/2018/04/index.html","9a96adea73e338f2ebdd64e59f8751a8"],["/zh-cn/archives/2018/05/index.html","774ce19df562295f5bec6f1b12ffc343"],["/zh-cn/archives/2018/index.html","da7bc6d1663a794de335a9efb6eba660"],["/zh-cn/archives/2019/05/index.html","13837bce41f513ba7035e6e9e94484d1"],["/zh-cn/archives/2019/index.html","5ba56b86ec8b4827472cffe8f1c42734"],["/zh-cn/archives/2020/06/index.html","981ac8f6ee63d80a0475910d1b7fbce0"],["/zh-cn/archives/2020/07/index.html","93cbc86e9a2294ef7ab0d7b716ee3224"],["/zh-cn/archives/2020/index.html","7939aec4044e22380fac25eeb3803cc8"],["/zh-cn/archives/2024/01/index.html","c02787889fc01f791ab388d6b6a7690c"],["/zh-cn/archives/2024/index.html","17dea80828f041b66db09072234ead13"],["/zh-cn/archives/index.html","b5d5386bda32601ac12bdb6e805f6ea3"],["/zh-cn/archives/page/2/index.html","4f4f5ee1eacffd02f2f1eea8c3623fbd"],["/zh-cn/archives/page/3/index.html","034ae27484a97573e213685763dc5db1"],["/zh-cn/archives/page/4/index.html","02f208a8b0b72877e68fac97bf669a40"],["/zh-cn/archives/page/5/index.html","683c2f7dfa9ea2b8f50e58fde120d65f"],["/zh-cn/archives/page/6/index.html","4b50a6b2bacbdacc941eddf0f8aef110"],["/zh-cn/categories/ACG/Music/index.html","b11cd08bcb018e52c40e7cf8b08e4d5a"],["/zh-cn/categories/ACG/Music/self-copy/index.html","59ced66660dbdb0e6d19170a97fd4f20"],["/zh-cn/categories/ACG/Travel/index.html","a29e47a57ed5c8eaa328048bf79e0bd8"],["/zh-cn/categories/ACG/figures/index.html","377e53d7ff74b2281ae91072b42b790a"],["/zh-cn/categories/ACG/index.html","f61f37fabf8a7940675d4ee118b0f250"],["/zh-cn/categories/dev/Front-End-Dev/index.html","508a45fb370fddbd725f518b4c8a7f3e"],["/zh-cn/categories/dev/Front-End-Dev/page/2/index.html","09a44446808e2be78fff61bce38d507b"],["/zh-cn/categories/dev/HTML-CSS/index.html","f2be83ee051763d4f7781166d5691a81"],["/zh-cn/categories/dev/android/index.html","69ea3afc788003d041d8055c386f318a"],["/zh-cn/categories/dev/cpp/index.html","05324d2dcf0e0b023f3bfbe7ee83ae8a"],["/zh-cn/categories/dev/git/index.html","4944096324f2baf771cab8202f82c74b"],["/zh-cn/categories/dev/index.html","7861dcba5920963fcec819480bbc3ca7"],["/zh-cn/categories/dev/java/index.html","ba1d494593c43639442b1ba721fd0075"],["/zh-cn/categories/dev/page/2/index.html","a861fb555787c3eacb2be4d368e6c881"],["/zh-cn/categories/dev/page/3/index.html","d20646bd1bd58e8edf1e17679b289faf"],["/zh-cn/categories/maintaince/blog-setup/index.html","d143981351c1b3290ab5842345dc861d"],["/zh-cn/categories/maintaince/index.html","ddf88e864fc1e1c3db75c3d23a715095"],["/zh-cn/categories/maintaince/macbook/index.html","283fa0fb90bd4c90140312c57ddf81a6"],["/zh-cn/categories/maintaince/router-config/index.html","0261adc3cea3afeacda73692d39d246c"],["/zh-cn/categories/notes/index.html","1a1e7043ae2e0e86beb1853fb0a23725"],["/zh-cn/categories/tricks/android/index.html","166d9b4a0a0afa88346ffa240eafc48f"],["/zh-cn/categories/tricks/index.html","b99fa26d85d4502053fa2aaa1a5c316b"],["/zh-cn/categories/uncategorized/index.html","2f0ff8986a83e161fb2631371c24333c"],["/zh-cn/categories/works/Front-End-Dev/index.html","4501ce58fc381d4ee9744fbc68b797ee"],["/zh-cn/categories/works/csharp-wpf/index.html","8d65adf393142f9acdd2b4c70c5cfa13"],["/zh-cn/categories/works/index.html","d62c4e25485357e5ddc46d2404ff7118"],["/zh-cn/index.html","b1e1fb4f730938aec1acb0206eeac7e3"],["/zh-cn/page/2/index.html","c7646204568208e257aca80597ed0590"],["/zh-cn/page/3/index.html","3b38f79f70150d6144df71c0136f235e"],["/zh-cn/page/4/index.html","50d77e37aa774b4d1604aafc38451292"],["/zh-cn/page/5/index.html","75b2be8d5bbf8146f23185dcad37ca80"],["/zh-cn/page/6/index.html","baa541cd9d84516bc69d0ceb3e5ae0b3"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });



// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache 配置转换后的 toolbox 代码.

toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"ooo.0o0.ooo"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdnjs.loli.net"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"i.loli.net"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"static.xingoxu.com"});





/* eslint-enable */
