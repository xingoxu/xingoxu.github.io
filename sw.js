/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/03/WNDR4300-setup-log/index.html","7a41b785fdda83babb3fe4433531a994"],["/2015/03/android-hostname-change/index.html","cab27aca0cde48275a169d60e1d1391a"],["/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","bc649ee05f9fbd53ecee07df3eaa645a"],["/2015/04/android-chrome-issues-with-webpage/index.html","e58b0339b5561fedc9d34769528799ad"],["/2015/04/cpp-study-log/index.html","2f28e9f18b85fa41e5b4fe41c5f7ef74"],["/2015/04/github-pages-ssl/index.html","c369095388c2ef04ad2ef1c7136c1734"],["/2015/04/hello-world/index.html","6cb56308e4df11245bda4843303f9046"],["/2015/04/hexo-setup-log/index.html","a454c85fc7b1cfd495d22952c3fd4b91"],["/2015/04/self-copy-cd-inazuma-1-html/index.html","42038c74067ccd1cded72c6e88292147"],["/2015/05/cpp-inherit/index.html","f94deb2aede17e1914bfb3014c118f74"],["/2015/05/cpp-polymorphism/index.html","adf184b24e5b0587a82cc31aaed972fc"],["/2015/09/android-root-ota/index.html","303ba8e55d69a8437fb9d95e95ce0449"],["/2015/09/java-learningNotes-1/index.html","e86506ca597e02a6cd959f34ce6baeb7"],["/2015/09/newblog-newlife-2015/index.html","dd0a61abcb7aeb923e8c0b30a214e319"],["/2015/09/router-rebuild-2015/index.html","658983126703c612822e08ec04af357e"],["/2015/12/2015-12-21/index.html","7ac1768987bb0fff35915f6161ff50b4"],["/2015/12/PixInTouch/index.html","524ff5addb6112adc2522af9e843d7fa"],["/2015/12/git-study-1/index.html","5ae26f63840685ce0eb48ffadb36333a"],["/2015/12/hexo-backup-and-migrate/index.html","277b99f92a5eb7ef2817b870b11f9dfd"],["/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","80a5e0ab907f23214c5a5ca137276a36"],["/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","95fb2d6c04aeb7b9a07b4ee5c82ec281"],["/2015/12/router-reconfig-2015/index.html","5634c2d06ef8f2d3f1c1aa15acb2b6cd"],["/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","adc94649b13c4c61c3f740f5f83898fd"],["/2016/01/2016-stepping-further/index.html","6c229484bca2f1eb7d4736097e76d291"],["/2016/01/Android-Study-1-22/index.html","bce673228d1ee79d87345551dd475ebd"],["/2016/03/2016-03-20/index.html","305109f4c87ea5f5297b25f94348ca1f"],["/2016/03/GSC-535/index.html","7e6c0d9514554472879696e2f8ecf23f"],["/2016/03/gulpjs-1/index.html","d6b4ec9eb0798b86a7b2c56bd5452ff4"],["/2016/03/hexo-theme-paper-white/index.html","b6633c73cc6eeabdd08380bc8a502220"],["/2016/04/2016-04-19/index.html","2a171a4090b8aa9bfaea7d9934145ba0"],["/2016/06/2016-06-16/index.html","7136e08dede94a7405610a6fa3648713"],["/2016/09/2016-09-18/index.html","841baba01d74a929933383f74b2a6a7b"],["/2016/10/2016-10-27/index.html","d46d60dc64895f28ab31dc8aac889474"],["/2016/12/config-switchresx-and-2khidpi/index.html","a5123b330eb6b1951f7f055bb5c428c4"],["/2016/12/improve-duoshuo/index.html","32ede8f1fa4a8eb454a25725d4e98784"],["/2016/12/use-travis-ci-your-blog/index.html","e441939e4a124cd5135298d739438179"],["/2017/01/2017-iyahoi/index.html","8c7114c6accbded14f4827fdd940d7fb"],["/2017/01/webpack-amd/index.html","b954d70b1ffaa7ff05bc1b247a425beb"],["/2017/04/kotobukiya-syaoran/index.html","6c8e7a7afcf464b7da811c51e4ed50ca"],["/2017/04/macbook-and-surface/index.html","2551246a019474999be6f1fdf553ec77"],["/2017/04/uc-hyakuya-yuichiro/index.html","eec0f0c7c158a6e94361b02de095b04d"],["/2017/06/noragami-seichijunrei/index.html","c827089730edf0613220b005b91ca96c"],["/2017/08/cross-compile-55-libev/index.html","05f506eaea3726f2e86db59bfc456925"],["/2017/08/explore-service-worker-working-lifetime/index.html","e02f833ae69b15c10fdc06770b16841a"],["/2017/08/kiminonawa-tokyo-seichijunrei/index.html","b81bd85d24c869cbbd9cccd96ad826da"],["/2017/09/record-user-login-status-methods/index.html","030bdaf472c90480510e820e9c52c379"],["/2017/10/vue-typescript-early/index.html","d70109a89e52ce484ed280b9462f7662"],["/2018/04/2017-end/index.html","edfa8b2bcc3ae8253807941ab78f3cf2"],["/2018/04/twitter-account-activity-api/index.html","f3ad55e52c3ba6a5dc3d1efb7c9bb8bc"],["/2018/05/buddy-complex-seichijunrei/index.html","f95d611114badd6d3c48dba2dcae7a69"],["/2019/05/2019-05-16-record-jp-digital-TV-on-nas/index.html","2d7a367c321fd83f0acceb12c6469a07"],["/2019/05/2019-05-17-google-io-tech/index.html","89653ef25181422f9c843e9f2512ff14"],["/404.html","4734d837ad45b18610e35ac5e15cbf18"],["/about/index.html","76ddac7a1af3181469131f744af23868"],["/archives/2015/03/index.html","00faa5e61ed293ca86717d31f5754671"],["/archives/2015/04/index.html","e362788cb9cf5cb259b44e907330bc1d"],["/archives/2015/05/index.html","8cfab6956be26b0973baa6ed4e9114df"],["/archives/2015/09/index.html","f79ecdcc7572ddd86eeaa8aa4572fd9b"],["/archives/2015/12/index.html","04ad3a86837e307888516848287e3fe4"],["/archives/2015/index.html","9567aa427e70b01fa929f500b0a4f9a8"],["/archives/2015/page/2/index.html","2084f31d423d8c642ea02c784eb89b3c"],["/archives/2015/page/3/index.html","d480fa0ef83b5b7507ba936554c75ece"],["/archives/2016/01/index.html","ae78ef391ddd76159d6f0bd5a87f2a93"],["/archives/2016/03/index.html","7de7493c01a082ff2de9b66bf0ea51a4"],["/archives/2016/04/index.html","49058d47bf4888f123850a42cb82734e"],["/archives/2016/06/index.html","fc356be58f719a1c771c69b345ed04ec"],["/archives/2016/09/index.html","20a1a12cabedc00c05ba401e11c68afe"],["/archives/2016/10/index.html","9da408ac71f9c6675dec4396c46bb41e"],["/archives/2016/12/index.html","76c2f0db6d5b4bc857504c8ba3110e04"],["/archives/2016/index.html","79a31642696119a4b96442c94b92141e"],["/archives/2016/page/2/index.html","9303e4a2b5ab2419a65ad3b199491f5e"],["/archives/2017/01/index.html","0ecddb4fb0a52df6f69b9dac1664df42"],["/archives/2017/04/index.html","87f1c0d3b289dc83912adb83a0bbb3d6"],["/archives/2017/06/index.html","2dc4109c3c8b9de52ff8965fccef26bc"],["/archives/2017/08/index.html","b0bb91916ba4e9e38b60c98aab10b314"],["/archives/2017/09/index.html","fecf42e3beb5bfe03950d01f486fdcfb"],["/archives/2017/10/index.html","fc493d1a23234550e97ef64a5b5b574d"],["/archives/2017/index.html","ce1560cd61d0a1ed84b4257cf29ff668"],["/archives/2017/page/2/index.html","991b0b185eaa4164cd706348fee8ff72"],["/archives/2018/04/index.html","0534bf7c79a41a8ac9ba6cf20bfe8179"],["/archives/2018/05/index.html","915f93a5bb796e176a73f879b7f41a0a"],["/archives/2018/index.html","ad34a934294403a177a7f5a6a4c84407"],["/archives/2019/05/index.html","b7b3004ea193f854c74aec4ee309c45e"],["/archives/2019/index.html","06b70d356f8556f78636eca9d8a10053"],["/archives/index.html","5ce69f39b1cf6e0c86b58c89e83ace64"],["/archives/page/2/index.html","a487444c850268b497493370de3a8ce1"],["/archives/page/3/index.html","1730c31b861ddb559ced4ca2c4eff9ee"],["/archives/page/4/index.html","24729b7b59c6e6f152501378c51ed2b8"],["/archives/page/5/index.html","a5c6c1a2e06143a4c091146b1df46f2b"],["/archives/page/6/index.html","b239558cc1b45173762ceeae33f4676f"],["/assets/images/about-me.png","a066d06c3d9d1fe56c4d921cec7febf3"],["/baidu_verify_YbTSlpWIUJ.html","779049c3a50695ceb3a388ce1e8bc1b9"],["/categories/ACG/Music/index.html","bf320fd63e5a19883e1f493190abae11"],["/categories/ACG/Music/self-copy/index.html","7798a5a1d24f7a249ba6a913c2255a0f"],["/categories/ACG/Travel/index.html","59ae1878bd1f1c670e1cf26be3cc1e8e"],["/categories/ACG/figures/index.html","895b65754a3aa090f4f21343a9298503"],["/categories/ACG/index.html","ca48a1f7bfcf56e918f3b0a8f1b971a9"],["/categories/dev/Front-End-Dev/index.html","4b7cd69506f42e836a3299d40eebd318"],["/categories/dev/HTML-CSS/index.html","b62d9fbd08823a657081f6b43f8262a7"],["/categories/dev/android/index.html","c3309d45a82ee21e735463f029cf8a07"],["/categories/dev/cpp/index.html","8dcabc1021660043b2a10b86dc1e147d"],["/categories/dev/git/index.html","2fa661c709a788de012aebd5d615f7a1"],["/categories/dev/index.html","639fc1b9a7c67241dc35c6cdce964c71"],["/categories/dev/java/index.html","06a78e7738ab031ec674346bd4b43142"],["/categories/dev/page/2/index.html","f50c110c5afc9bedf8c2cbae8e5214cd"],["/categories/maintaince/blog-setup/index.html","c7c1db76b0739892e8a3355f8974f858"],["/categories/maintaince/index.html","23014551d32f0586f6280f80fb7e7e89"],["/categories/maintaince/macbook/index.html","76aedd027e2b59dbac39bd782836d64f"],["/categories/maintaince/router-config/index.html","a5c8e3d87167fb9c9df68454d65afb39"],["/categories/notes/index.html","d888181ebe96ffe3771e9b7a0be813a8"],["/categories/tricks/android/index.html","0b2f15c0d4c5606a30362cfa6d168c87"],["/categories/tricks/index.html","c2ad4ce9973aa811e649579521c1709e"],["/categories/uncategorized/index.html","5bf14626bda1a052f29942eb069e99b4"],["/categories/works/Front-End-Dev/index.html","274160be7c40168cb8939513549f05b6"],["/categories/works/csharp-wpf/index.html","cf68c51d1f35f4005881b1a0c737bcc4"],["/categories/works/index.html","b9bfb548d5d68fe05c16fc54aff9c5ea"],["/css/seichi.css","c60ad00990790aacbe0a9ff08766c515"],["/css/style.css","e3abc56736917946e8536ef38cc2c5cd"],["/google311213f0c8d812a9.html","51f1ee3c2f13a21a1a40b3dae4954454"],["/img/coderwall.png","1976fe70f1ee8ed243e0975402e06a2d"],["/img/delicious.png","952d9b54d8bcfe7b998f67ff48c4dbce"],["/img/douban.png","d42a163f932100e621d22732db34ecdb"],["/img/facebook.png","4bd685f6c9fdaccabf07bdd52173facb"],["/img/github.png","3c4b6267a1a3fedebdc7d089610ecfe7"],["/img/google.png","c385f5304465716b2d6c9ada94c657ab"],["/img/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["/img/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["/img/linkedin.png","4c72c4896f3c23f736cb1ad08f0c866e"],["/img/mail.png","38a7b8302dac028bf03b22d228938abf"],["/img/pinboard.png","9b6186cb97adbe50311f94e50f2392cf"],["/img/pinterest.png","e1b8e655d1b99b40ebcbd96977ae234e"],["/img/rss.png","ec8cf9b5a98011aa75cc0a4f25024dc9"],["/img/scrollbar_arrow.png","be5381cedbd6b778b1d92e224fd71cf7"],["/img/stackoverflow.png","039128ececb47b33bccedd98dc9fc809"],["/img/twitter.png","d2289a4936fefa41d9f92cf89939be5b"],["/img/weibo.png","b382032b316ee38c6d537fe9d36ae54c"],["/img/zhihu.png","e6352c0e1957beef3009268ae747c3aa"],["/index.html","93a6bc5bad4b60980dbd51403b8b1c6e"],["/ja/2015/03/WNDR4300-setup-log/index.html","3650ccfe177e9e1ab38b0fe9d452ce9a"],["/ja/2015/03/android-hostname-change/index.html","c6575af1667fef3def54970abb9c9e36"],["/ja/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","a7bfe99706510ba3863fd088270ca832"],["/ja/2015/04/android-chrome-issues-with-webpage/index.html","bdc1bfb10f1bbacc2e93d41cabe73ba0"],["/ja/2015/04/cpp-study-log/index.html","40ce7b829dcd708a6a3263e734b212eb"],["/ja/2015/04/github-pages-ssl/index.html","3096af8f53aebd44396782a1cf5fb688"],["/ja/2015/04/hello-world/index.html","6709b54413b31bd5b4310b9106f6a73e"],["/ja/2015/04/hexo-setup-log/index.html","3e1ed1de9f5a55962a45978e613663f5"],["/ja/2015/04/self-copy-cd-inazuma-1-html/index.html","62814138629179150f2bba62f3977c0b"],["/ja/2015/05/cpp-inherit/index.html","5aa18acf0f209383feb76c0f3cc30cc9"],["/ja/2015/05/cpp-polymorphism/index.html","4b8cb917602a53de0087d2800ac317cd"],["/ja/2015/09/android-root-ota/index.html","7e0f5b115212b8503b67a12a6e786e92"],["/ja/2015/09/java-learningNotes-1/index.html","a3e71ea7005c437ea3efb15e0c50bf2d"],["/ja/2015/09/newblog-newlife-2015/index.html","5e569159cb89eec0c59674f95a5147d8"],["/ja/2015/09/router-rebuild-2015/index.html","c19a4581323a00513ccd1b25d6364dcd"],["/ja/2015/12/2015-12-21/index.html","70dea6f2e58ea85078d62928bd1ba1ad"],["/ja/2015/12/PixInTouch/index.html","81c0c08d164a51f6d232d345e72ac99d"],["/ja/2015/12/git-study-1/index.html","5fb8795de0d96c32ee004a37d05629d1"],["/ja/2015/12/hexo-backup-and-migrate/index.html","e4c81bbb552388aee62caecd72e5a8d4"],["/ja/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","2d21c19485df8ea4e06812896e4d64fd"],["/ja/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","734868cb54f607baed9a00af319e22bf"],["/ja/2015/12/router-reconfig-2015/index.html","85b2e42f7f16c60c1eb93b9926fa43d2"],["/ja/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","866c5d73899c1ba0ddc365ee5eedd5ed"],["/ja/2016/01/2016-stepping-further/index.html","92593b59fc71b119e2c6ccec865a2d2d"],["/ja/2016/01/Android-Study-1-22/index.html","d424dd0515e193ab0336ac2612c2a316"],["/ja/2016/03/2016-03-20/index.html","f7ca5aad40d4c27468b0547bc90a6e5d"],["/ja/2016/03/GSC-535/index.html","87ca47d821ac1d3d0a861cabe58561a5"],["/ja/2016/03/gulpjs-1/index.html","e8ae03b4141917782ddabbd79b999d47"],["/ja/2016/03/hexo-theme-paper-white/index.html","423cd9f37c861f7c3f97bcbee1549322"],["/ja/2016/04/2016-04-19/index.html","0373a9fe43f7f78456e286c310af69e4"],["/ja/2016/06/2016-06-16/index.html","da22d7cbe4fb20e024d9b65d50f19a7a"],["/ja/2016/09/2016-09-18/index.html","35142f69ef153851eac2222c1c8ecfed"],["/ja/2016/10/2016-10-27/index.html","076a5b1ae0fb990814190af221a51326"],["/ja/2016/12/config-switchresx-and-2khidpi/index.html","ec91c1d45ef5e21af046b7081ab72407"],["/ja/2016/12/improve-duoshuo/index.html","8fbd3bf62562621f9ce824da8f6dfbe9"],["/ja/2016/12/use-travis-ci-your-blog/index.html","61b62bee7297c86815ca1ee1ff9bfc49"],["/ja/2017/01/2017-iyahoi/index.html","7a3b070f17b03b023d36342bf393d594"],["/ja/2017/01/webpack-amd/index.html","8cf8fec2b15d3e51662002221ba7ed05"],["/ja/2017/04/kotobukiya-syaoran/index.html","d0cb7e96aa7847415628bb3c2b550bad"],["/ja/2017/04/macbook-and-surface/index.html","b44a0fe7b7ed6387cc8fa72309fbfc89"],["/ja/2017/04/uc-hyakuya-yuichiro/index.html","71f269d5b737b30c8cf760e972282a2e"],["/ja/2017/06/noragami-seichijunrei/index.html","6a4447057edeb010ab00c300f19eba7d"],["/ja/2017/08/cross-compile-55-libev/index.html","f994518e11bf4d926ddafc3de75790dd"],["/ja/2017/08/explore-service-worker-working-lifetime/index.html","995c766798e756099f0dc60883d079f0"],["/ja/2017/08/hello-jp-world/index.html","1138d33cf3c8c9626367964534fa5511"],["/ja/2017/08/kiminonawa-tokyo-seichijunrei/index.html","49fd53dd43b82121b8b57ef8a06c5af0"],["/ja/2017/09/record-user-login-status-methods/index.html","b16ebb71a65b8c533424ba40a1173a7a"],["/ja/2017/10/vue-typescript-early/index.html","6fa6e92e11db2723968c398bbeabb404"],["/ja/2018/04/2017-end/index.html","2102f9e6b90a1cd9c49ae5b6aa1f22f7"],["/ja/2018/04/twitter-account-activity-api/index.html","42aa1be36fac8412c658e74a5f7d4666"],["/ja/2018/05/buddy-complex-seichijunrei/index.html","f5510a3cca828dc6ebdca8c977f5f823"],["/ja/2019/05/2019-05-16-record-jp-digital-TV-on-nas/index.html","b44f30291e7c83821326586ed82e02c7"],["/ja/2019/05/2019-05-17-google-io-tech/index.html","4a2a88264d4234988d41667b8beb003b"],["/ja/404.html","4e8fd9de232801d650ffca4c65f24786"],["/ja/about/index.html","87f9297e389b95fecc0deee27f91491a"],["/ja/archives/2017/08/index.html","128112bf0e9fa728b1743d835935a8b1"],["/ja/archives/2017/09/index.html","3713b8e385c47e63bb36f0e184d8df5b"],["/ja/archives/2017/10/index.html","a10659d728db537636ba806c6e938557"],["/ja/archives/2017/index.html","1a157fad4993e7556cb8ade6bcf74b8f"],["/ja/archives/2018/04/index.html","da6bc382b928c183c7b43e530d7d703f"],["/ja/archives/2018/05/index.html","e791e008abb3d2d90d0d0235cd44fb11"],["/ja/archives/2018/index.html","502222b6f7c6162b6711affdbabc531e"],["/ja/archives/2019/05/index.html","23cde05a59b1a27f03a7f9078c82d48d"],["/ja/archives/2019/index.html","9cf5e4d5fc026e2fd9cd23d84546a1ce"],["/ja/archives/index.html","f7abf57ce192e9889578e12b27508c85"],["/ja/categories/ACG/Travel/index.html","f6ada56475ed2b737211794a2862e4f3"],["/ja/categories/ACG/index.html","804393674eb8bb9e5514ffb3b36a8ea7"],["/ja/categories/dev/Front-End-Dev/index.html","68e83d2cb87ebacbea098e73b6f81574"],["/ja/categories/dev/index.html","0421082fa3e46de7d0e03e45d4d0ab45"],["/ja/categories/uncategorized/index.html","40427168f2c21bd13434b103fa245d06"],["/ja/index.html","e11677da23d15054a5a734ed650d5fd2"],["/ja/nihongo-test-page/index.html","3dcbf25a0839b6c549f21cab7a5f2143"],["/ja/resume/en/index.html","8d83fda81bc5bca1db12faf2e3c56c38"],["/ja/resume/index.html","a66df8db52a9750823b0ba0c6022cce8"],["/ja/resume/ja/index.html","dc30e429bae19fe4db7dda2ebd9a6a82"],["/js/instagram.js","7d7a9e2e7286ba2d5b6d12068214f0c3"],["/js/jquery.lazyload.js","28c23bc40080d31144776e9a8736837f"],["/js/main.js","2e92f29b0cd90bddc062915eb46a858c"],["/js/mobile.js","20029df2609ddd5d2b2d346edbb297c0"],["/js/nextpageajax.js","c3bde8d7bb1f967fb319f57a187ea51a"],["/js/pc.js","631b535186aab0e262485ee2bf9da628"],["/js/ripple-effects.js","b9c11903da0ef5c3d790b41369c3137e"],["/js/share.js","de52ac3d43e43c1951a08b0804458a8e"],["/js/totop.js","661822968b58fd439f46bd54031238d6"],["/keep_origin/affiliate_jump.html","71bf6d72c5d080ec2b3f8ecfae3d71ed"],["/nihongo-test-page/index.html","8447448310947f0324bec8d0b365a058"],["/page/2/index.html","242046f2144e3b20297f025d142c8803"],["/page/3/index.html","fb690d23e3a29e57fd17765ecc5ccaa1"],["/page/4/index.html","387fb22165ca7ae6d2f135e8ffacd89e"],["/page/5/index.html","ac2b3cf5b126f7faa19853742f0bb268"],["/page/6/index.html","871a84555fb46196f7fdc4a40518212d"],["/photoswipe/default-skin/default-skin.css","426e8908d7426603ca203b6d16281b1e"],["/photoswipe/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photoswipe/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photoswipe/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photoswipe/photoswipe-ui-default.js","0c9196aa8943ce8a8045c9f4cc62915c"],["/photoswipe/photoswipe-ui-default.min.js","9517baca43cd4e9cb23ff337fbc1baa1"],["/photoswipe/photoswipe.css","7dc0df107159e1be66d4464171561e5b"],["/photoswipe/photoswipe.js","a8d26ff34943c859884acbd6b2531315"],["/photoswipe/photoswipe.min.js","f5cd6479c4e4682545a9603e6b50c741"],["/resume/en/index.html","0a4ee4e3ebe0ac2cf1b5f03160d8b823"],["/resume/index.html","3bb5eec9f53924dfc7b4e467041c6b65"],["/resume/ja/index.html","ab11a3e3d7ba3aed30c4e1b6cddf3a0a"],["/setup-log/blog-setup/github-pages-ssl.html","d5e315a4f7725d0c5a828ab2ac48dfe3"],["/sw-register.js","c1b683497b3da947ff8e006b8748cc85"],["/zh-cn/archives/2015/03/index.html","ebea5b4f37f4663d2710fd8412849894"],["/zh-cn/archives/2015/04/index.html","e4c275bc0fa1318bc203e8c714555192"],["/zh-cn/archives/2015/05/index.html","4bd663ce16b6b1079465e798ba6b13d4"],["/zh-cn/archives/2015/09/index.html","58cc94d6ef95455a893ff8c4671fa2d9"],["/zh-cn/archives/2015/12/index.html","d15c44bb4fc4f2f71be15e3cc8b394fe"],["/zh-cn/archives/2015/index.html","8f640cf8d599fea4461d94979de976c9"],["/zh-cn/archives/2015/page/2/index.html","69000b48da8d9629de2f5592bcd309dc"],["/zh-cn/archives/2015/page/3/index.html","4786267e69c594398753f053b27f346c"],["/zh-cn/archives/2016/01/index.html","8e8d342df1b2fe6109760c9e5f4536cd"],["/zh-cn/archives/2016/03/index.html","60632dc11ed2857bbcd76523fe43ebae"],["/zh-cn/archives/2016/04/index.html","20556221dcaef44b2017386c75425bed"],["/zh-cn/archives/2016/06/index.html","9969ca166acd72698f155a06afcb3587"],["/zh-cn/archives/2016/09/index.html","8840fc3a3250e69463b6e257d9a9c4f7"],["/zh-cn/archives/2016/10/index.html","d6d683b44ff05dbf4762dfd17b9a761e"],["/zh-cn/archives/2016/12/index.html","dbff9e226f0805f67787724b0c05da1a"],["/zh-cn/archives/2016/index.html","6e4c1787ec2ce42d3f5c5fcf678c086a"],["/zh-cn/archives/2016/page/2/index.html","5bc2b42404fc7e5f1aa59c44e7c04773"],["/zh-cn/archives/2017/01/index.html","cb0742d69b2dc7f1ed0573a00ae5d077"],["/zh-cn/archives/2017/04/index.html","650a7cb76343ae9e39a2abb73e146cad"],["/zh-cn/archives/2017/06/index.html","bb972b17ef0dea1f306953ed1d37591f"],["/zh-cn/archives/2017/08/index.html","64846fa2243d713d6cd2fcac3f164b36"],["/zh-cn/archives/2017/09/index.html","bcc894e94d7c064a36a239e775c86908"],["/zh-cn/archives/2017/10/index.html","7f5a77ad4d7d24ee298cdf05837f6374"],["/zh-cn/archives/2017/index.html","25a31592b7308f9f7cffb301628186d3"],["/zh-cn/archives/2017/page/2/index.html","c23e1cdec472bfcb572fefb51e1080d5"],["/zh-cn/archives/2018/04/index.html","2fa74e8e6df28e2ee5175e8bb116eb5a"],["/zh-cn/archives/2018/05/index.html","151a38c705f0b6a2d67ea75707b245b6"],["/zh-cn/archives/2018/index.html","08fe7f687f71485f22865952c92d4599"],["/zh-cn/archives/2019/05/index.html","223f7646e86d18f37cae88c86222a198"],["/zh-cn/archives/2019/index.html","d2d0f94902316d04a4ee473104144d75"],["/zh-cn/archives/index.html","c8f22c980e608fd848f0e571fde487e9"],["/zh-cn/archives/page/2/index.html","55a2bc583b4489ce77a1d28d978fde69"],["/zh-cn/archives/page/3/index.html","68c780fb8a8b821a730d74d1ceff5feb"],["/zh-cn/archives/page/4/index.html","555e1c3e831d544a2a55fa1fee808777"],["/zh-cn/archives/page/5/index.html","146f073cefd2b3d41af57118e24a5db9"],["/zh-cn/archives/page/6/index.html","44e4afba56c410e733452121154245fb"],["/zh-cn/categories/ACG/Music/index.html","8fc24ad14fcd0aca59aafb5457f80373"],["/zh-cn/categories/ACG/Music/self-copy/index.html","3e0beab56afcec25a342e01aa17da9d2"],["/zh-cn/categories/ACG/Travel/index.html","4fa5c91f1527fcac64c53c8f3f7b135b"],["/zh-cn/categories/ACG/figures/index.html","578f6931c5e7f704484638be1413d146"],["/zh-cn/categories/ACG/index.html","be218dfbc01f437faa7a63008fc1f70c"],["/zh-cn/categories/dev/Front-End-Dev/index.html","874fcfd4555735a38c76207c485e690b"],["/zh-cn/categories/dev/HTML-CSS/index.html","3c7e3ba2c1a3d4d1dd28a63d50f7f5db"],["/zh-cn/categories/dev/android/index.html","6ca0e7aa202f0949b45eb9ec8e0736b6"],["/zh-cn/categories/dev/cpp/index.html","fa37f94571220fc458235af1cb2d57c9"],["/zh-cn/categories/dev/git/index.html","f253f426c58ff6c5796db2f9cdb7e57f"],["/zh-cn/categories/dev/index.html","f5635509882b5bbe5aedc5db01ced963"],["/zh-cn/categories/dev/java/index.html","8276e69bacd8dffdae69011baa6f992a"],["/zh-cn/categories/dev/page/2/index.html","f13ae2107c5020264ba98a560656f1af"],["/zh-cn/categories/maintaince/blog-setup/index.html","90b21acd7d139a07acfc9ae2a17ab4bb"],["/zh-cn/categories/maintaince/index.html","2ec8adbcbcd7efbd5dff690bf69fb067"],["/zh-cn/categories/maintaince/macbook/index.html","525b2580b845b6fecd47db8ac5c02dc1"],["/zh-cn/categories/maintaince/router-config/index.html","0d421da71dff962f273bbedb320cb37e"],["/zh-cn/categories/notes/index.html","c9172b4d52026ed99620397d4d1e1433"],["/zh-cn/categories/tricks/android/index.html","1c4facea4e51b97bebe485ebd5dbe510"],["/zh-cn/categories/tricks/index.html","9a2c1c2ce44007f7bab70fa400f0d2c9"],["/zh-cn/categories/uncategorized/index.html","39979fc11b943f943e467f7c5e5610b0"],["/zh-cn/categories/works/Front-End-Dev/index.html","f2abe9fd8cd66fa14e90253bcfba98d5"],["/zh-cn/categories/works/csharp-wpf/index.html","4f1ee457386057c361e15b47d5c3279f"],["/zh-cn/categories/works/index.html","f75e1920f757ba72bf7988572c789cf4"],["/zh-cn/index.html","9aeb651fbe24bf6f0a7ed1a7a75622e5"],["/zh-cn/page/2/index.html","df10a5c693f6e0d6c9de169134c14529"],["/zh-cn/page/3/index.html","b7f71bb2b22fef462e3bb9a1108a8536"],["/zh-cn/page/4/index.html","694bcca0510528f539a5279df773cac3"],["/zh-cn/page/5/index.html","4b4ff79c6eb35c7b22378487aae7bd5a"],["/zh-cn/page/6/index.html","ac8e1e28f777bd8a4f3296e9ca4cacb4"]];
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
