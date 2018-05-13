/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/03/WNDR4300-setup-log/index.html","48854c25171a2bf7aa8baafce86fb4a0"],["/2015/03/android-hostname-change/index.html","c3158a44998bda8af4bd21bc6e430dfe"],["/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","acb8f4adb46207b44cc4a9d6bd1cce1f"],["/2015/04/android-chrome-issues-with-webpage/index.html","dd465f2baa5b1cc4c874d1f4a117e060"],["/2015/04/cpp-study-log/index.html","024ce2bf233e3d1986691af259a3400a"],["/2015/04/github-pages-ssl/index.html","a8add93be1ffac611cde40281afebcbe"],["/2015/04/hello-world/index.html","91bbd8a43d7637552a06a37769b8e260"],["/2015/04/hexo-setup-log/index.html","842623ae7df44604b2bfd0d04000ccc4"],["/2015/04/self-copy-cd-inazuma-1-html/index.html","f35e66d224a5408897062e67e3813b4e"],["/2015/05/cpp-inherit/index.html","90fddaf3988235c0414e981998c06bd5"],["/2015/05/cpp-polymorphism/index.html","48d3aa8c78ef6c174362f9470b252c7e"],["/2015/09/android-root-ota/index.html","d16cd82f27c032c00e440b5c15d7da45"],["/2015/09/java-learningNotes-1/index.html","c795c07156f9eddad13611f1cd05ddbe"],["/2015/09/newblog-newlife-2015/index.html","fe838b7c3ef37fbcbcaa48579ee12c7c"],["/2015/09/router-rebuild-2015/index.html","182b57196c8316578c41525062e833c4"],["/2015/12/2015-12-21/index.html","8a9c2d43713fe3596818f240aa9be3e8"],["/2015/12/PixInTouch/index.html","cd5ea24622aaf64a75fc69e13691b3fd"],["/2015/12/git-study-1/index.html","dec1a1b7c7933f093d37a8324d9de2b5"],["/2015/12/hexo-backup-and-migrate/index.html","8d4ca862f1a41241b99ec791dffbf891"],["/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","c7cdda8bfe63bbb89fdeaeac157d3188"],["/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","049c7ac3e5ac56eb027b86f679bcd6ad"],["/2015/12/router-reconfig-2015/index.html","27b94aa34f53e7c7af0378f509ab71fe"],["/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","7e5bbf2da03db7d9dc7c9e3df5b5cbeb"],["/2016/01/2016-stepping-further/index.html","d2b529dc139ad765102b508f8c796785"],["/2016/01/Android-Study-1-22/index.html","7bc93fb48cb015f2c33b9937adba80e9"],["/2016/03/2016-03-20/index.html","8f83c8dd7240e779e4a1ee83798768be"],["/2016/03/GSC-535/index.html","a7a1a7096a59086a77de86f2c7c5d89f"],["/2016/03/gulpjs-1/index.html","673ab04dbf0918bc020a999dd7f78231"],["/2016/03/hexo-theme-paper-white/index.html","f2a08a7b4b2e112b63126f5c97147cc4"],["/2016/04/2016-04-19/index.html","5e949dfcf462acc2d442df69d5906cd7"],["/2016/06/2016-06-16/index.html","b74e68a78f7e849d6d734b981262f682"],["/2016/09/2016-09-18/index.html","3acc487346098f445c943d7c71189913"],["/2016/10/2016-10-27/index.html","685cdb411c165ccf6ed814625ab88298"],["/2016/12/config-switchresx-and-2khidpi/index.html","1cec451814d8d32e559e819271c6026a"],["/2016/12/improve-duoshuo/index.html","8e6a21bdf6a7476f1cf5ab826375926a"],["/2016/12/use-travis-ci-your-blog/index.html","cecc77f00be57c23e7a051b926dbba46"],["/2017/01/2017-iyahoi/index.html","886e6938584bf584ce02896fe5f0bc09"],["/2017/01/webpack-amd/index.html","096961dd92f340926280701686407a65"],["/2017/04/kotobukiya-syaoran/index.html","d25758d7a04bdef7fdaf5fc7e29e927c"],["/2017/04/macbook-and-surface/index.html","bde135abf0251f6b03799102ff1b3c67"],["/2017/04/uc-hyakuya-yuichiro/index.html","8ca3e8dee841beb5f5faeca4a37b07a4"],["/2017/06/noragami-seichijunrei/index.html","f85faa9bcffb2b208c2162513528bfef"],["/2017/08/cross-compile-55-libev/index.html","9e112d75fa8cea69bb9e139657d210ce"],["/2017/08/explore-service-worker-working-lifetime/index.html","1b5d5a478c92d2793bb80187884855b6"],["/2017/08/kiminonawa-tokyo-seichijunrei/index.html","13cb2f4df174066bf36a047a81d9ca53"],["/2017/09/record-user-login-status-methods/index.html","7f27f8a24e24ea303b9166f3f5446818"],["/2017/10/vue-typescript-early/index.html","8cf2aeeee5cf6d6a3f3f12333f05eeca"],["/2018/04/2017-end/index.html","fe631b424aeb8d5bc7692ba1d9d400ee"],["/2018/04/twitter-account-activity-api/index.html","1b3ee31cc4fa0528f4cf34ea1d56518e"],["/2018/05/buddy-complex-seichijunrei/index.html","fc4cec0148a672e4770a8e72fc8eacc6"],["/404.html","5fb792ad19e430d0554cfd440393cbec"],["/about/index.html","e477fafbf4a9fa5c9cebc5014d348b71"],["/archives/2015/03/index.html","d9f0756108d4667494be1b18a3f1c4b9"],["/archives/2015/04/index.html","c37aa4211dd5bcad9729c999f3931591"],["/archives/2015/05/index.html","7b37164c207fd97a45066788eafacec4"],["/archives/2015/09/index.html","80863530600b190b31a00c7d0be8b5c3"],["/archives/2015/12/index.html","c89bf76d87ea6879916e64ff94cf873e"],["/archives/2015/index.html","65ea9e70ed5bd8ca5966ee1bdabb4f64"],["/archives/2015/page/2/index.html","39fab29bd637b098f2eb63c1db2c71c7"],["/archives/2015/page/3/index.html","b1670dfec184ec5c10ea99318f7afa21"],["/archives/2016/01/index.html","2b766a64a19d2b11e7253eabb2853801"],["/archives/2016/03/index.html","be6a91f98cc56121bb8bc38db54a1745"],["/archives/2016/04/index.html","8020c9e296c8c3bbc71bdfd9ee63412d"],["/archives/2016/06/index.html","cbf3249cacb1efd09400c1bc13aec8c8"],["/archives/2016/09/index.html","0df7b524b43212661f15ea2153adeb94"],["/archives/2016/10/index.html","c961c565afa100606877fd81a1ada6ee"],["/archives/2016/12/index.html","3c4f78667548d8b51c04e2beee66edd2"],["/archives/2016/index.html","39bac1e77c0b1bc30a70f1696ec25ae2"],["/archives/2016/page/2/index.html","10df550eb44b47982855f44e315082f2"],["/archives/2017/01/index.html","a894bb61b39fc0d2074a49f774ea6ff0"],["/archives/2017/04/index.html","de47200f963db2caaabe149100227eb8"],["/archives/2017/06/index.html","cc8748b3f8779ba9d40f385b354c1c1e"],["/archives/2017/08/index.html","cf4a65a92ee99c73ab4ab8247382917d"],["/archives/2017/09/index.html","0fc43e01599b1baee2eb612f5a6b6606"],["/archives/2017/10/index.html","3d1d39f59d12ce8cf1fc687b807e3021"],["/archives/2017/index.html","15112ae7138c12ebed7e122aa5a97071"],["/archives/2017/page/2/index.html","bba2b95c51c2dbcc86ec94bb99a716a8"],["/archives/2018/04/index.html","10a7ae5a80ef1079d92a207402635c09"],["/archives/2018/05/index.html","c15819582c31320618a0d0307f2839fa"],["/archives/2018/index.html","5b9272fa6e7d13700131c1e685d9b26b"],["/archives/index.html","33446337b57000bb365b9bbc0d7e999b"],["/archives/page/2/index.html","15d96891e979d2ba259fe58109f539db"],["/archives/page/3/index.html","5930d45941ad43cd15221ea44344a474"],["/archives/page/4/index.html","5224949f0dd6e956ea7bb8f16a04f73e"],["/archives/page/5/index.html","e71c0ae04dbca9d790c51e85cf3e1894"],["/assets/images/about-me.png","a066d06c3d9d1fe56c4d921cec7febf3"],["/baidu_verify_YbTSlpWIUJ.html","779049c3a50695ceb3a388ce1e8bc1b9"],["/categories/ACG/Music/index.html","12539310e3729b2daa36d248f8feb124"],["/categories/ACG/Music/self-copy/index.html","94802a6695fd7f28a5c5bd2cedf30dbe"],["/categories/ACG/Travel/index.html","cd0ef95d63f091599f476db6078c36f4"],["/categories/ACG/figures/index.html","07a831ff6f1a6b2e8e38f93f1cf5d794"],["/categories/ACG/index.html","f9e62f652e95778a0d0e68cdcd89e140"],["/categories/dev/Front-End-Dev/index.html","ae30fa5d5f671cdca9ab2a255e57b49d"],["/categories/dev/HTML-CSS/index.html","0d8ebf1b3e5ba036456abbd7cbe2ffc5"],["/categories/dev/android/index.html","3007dcd50ebdef4eec472a2a88fce00d"],["/categories/dev/cpp/index.html","a89b378d85ffc3e3279f25236a2f28cc"],["/categories/dev/git/index.html","ba77d7e4f5fd048f723005dc4443aff9"],["/categories/dev/index.html","40f05cf06f013dad6de003d1d97db5cf"],["/categories/dev/java/index.html","903c592e4303fe31c48d66f1f05a01bb"],["/categories/dev/page/2/index.html","da11f199b3c971bc5cca5a9d0c18a844"],["/categories/maintaince/blog-setup/index.html","f13fa0ac6da0701b134c9b759ef94804"],["/categories/maintaince/index.html","28b65e02e3d26f0984671d000fa1cce5"],["/categories/maintaince/macbook/index.html","4dca98377353f6e592cfea79dfcea5ad"],["/categories/maintaince/router-config/index.html","c574c0fd3bc2171d823888e52262e4b6"],["/categories/notes/index.html","1b7f48d81e61812d5e9993f2bde7b0d3"],["/categories/tricks/android/index.html","9098596c88d37ddec6665c9de030e331"],["/categories/tricks/index.html","62bfe4d6765e44df7d9d5fdb85f6f460"],["/categories/uncategorized/index.html","82019f58f54b80dd70ce34c3de8ef2ed"],["/categories/works/Front-End-Dev/index.html","7f92cc241437ede2f5d1a14f57892dc5"],["/categories/works/csharp-wpf/index.html","3abb0bc78a575d4e14b34614c32a6348"],["/categories/works/index.html","e0b83d26e109b4f4a5ac5cc6f1b00aea"],["/css/seichi.css","42693f35c4c482207368dd363ea27373"],["/css/style.css","a81f79e7bf311785886f2c1c31c8e4d4"],["/google311213f0c8d812a9.html","51f1ee3c2f13a21a1a40b3dae4954454"],["/img/coderwall.png","1976fe70f1ee8ed243e0975402e06a2d"],["/img/delicious.png","952d9b54d8bcfe7b998f67ff48c4dbce"],["/img/douban.png","d42a163f932100e621d22732db34ecdb"],["/img/facebook.png","4bd685f6c9fdaccabf07bdd52173facb"],["/img/github.png","3c4b6267a1a3fedebdc7d089610ecfe7"],["/img/google.png","c385f5304465716b2d6c9ada94c657ab"],["/img/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["/img/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["/img/linkedin.png","4c72c4896f3c23f736cb1ad08f0c866e"],["/img/mail.png","38a7b8302dac028bf03b22d228938abf"],["/img/pinboard.png","9b6186cb97adbe50311f94e50f2392cf"],["/img/pinterest.png","e1b8e655d1b99b40ebcbd96977ae234e"],["/img/rss.png","ec8cf9b5a98011aa75cc0a4f25024dc9"],["/img/scrollbar_arrow.png","be5381cedbd6b778b1d92e224fd71cf7"],["/img/stackoverflow.png","039128ececb47b33bccedd98dc9fc809"],["/img/twitter.png","d2289a4936fefa41d9f92cf89939be5b"],["/img/weibo.png","b382032b316ee38c6d537fe9d36ae54c"],["/img/zhihu.png","e6352c0e1957beef3009268ae747c3aa"],["/index.html","5bfb4cb246a374fff8dd23da0aca10b8"],["/ja/2015/03/WNDR4300-setup-log/index.html","a12f30a3f8cff90b9483d00cbc45d349"],["/ja/2015/03/android-hostname-change/index.html","dd1f668da408614e8b8bf38fdd3d0840"],["/ja/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","587f0100840ee2cc20d86ba0ae16f0bf"],["/ja/2015/04/android-chrome-issues-with-webpage/index.html","b4f30da98d2d3de9f2f41239bc7f48a2"],["/ja/2015/04/cpp-study-log/index.html","15e5a3288e6684e8f7ea4a487920e6cd"],["/ja/2015/04/github-pages-ssl/index.html","9da6686a6084de92dc8d8ac0ed2298de"],["/ja/2015/04/hello-world/index.html","02707068230a1a41053bab7e706090cc"],["/ja/2015/04/hexo-setup-log/index.html","3fe1d8990b8bdd77e0fac367c5c77165"],["/ja/2015/04/self-copy-cd-inazuma-1-html/index.html","37da2325301014a590c9bb63f9af61ad"],["/ja/2015/05/cpp-inherit/index.html","869a3ce394e14ea0068aacd059904130"],["/ja/2015/05/cpp-polymorphism/index.html","1dc60e13a1a376678939d717d21be1a9"],["/ja/2015/09/android-root-ota/index.html","405b8b8910f3fa64ddb33c9e3e75e7a6"],["/ja/2015/09/java-learningNotes-1/index.html","2832ff75b102b6d8b2f4fc2e33dd5395"],["/ja/2015/09/newblog-newlife-2015/index.html","f3f73b4d357dd47f5aba5d69e5d3cd41"],["/ja/2015/09/router-rebuild-2015/index.html","0fa16f3f776690d64ffaae1aa27a9f53"],["/ja/2015/12/2015-12-21/index.html","bb67ff642bee074b643d48f4d7b03218"],["/ja/2015/12/PixInTouch/index.html","4cf4a5d2bd75608e148bb9f4432e84e8"],["/ja/2015/12/git-study-1/index.html","5346d186acd5103dbbfbd2cb252fb787"],["/ja/2015/12/hexo-backup-and-migrate/index.html","a4f26a05bd1ac2000d57121b91738f78"],["/ja/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","ce6777d3a71f61f9e6a82c6798f746cb"],["/ja/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","0b9a9d90f6c1f135245e8911d4845e67"],["/ja/2015/12/router-reconfig-2015/index.html","98c1133fe27bb41189441817e4ac3ff9"],["/ja/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","e618424f2b6b75e498be190df3ae8eb3"],["/ja/2016/01/2016-stepping-further/index.html","22df007bf436b42678881b0883095b92"],["/ja/2016/01/Android-Study-1-22/index.html","6afc1617726073ffa541379d41870cb9"],["/ja/2016/03/2016-03-20/index.html","bd3a4288325d9dd891e4dcee6d71dbbe"],["/ja/2016/03/GSC-535/index.html","8efcd1e30ff3926c568a594d958ed991"],["/ja/2016/03/gulpjs-1/index.html","ea3add327e7b9df6c429ec08d654ac9b"],["/ja/2016/03/hexo-theme-paper-white/index.html","c81240ddc9e1d9c094eb8b50adf19806"],["/ja/2016/04/2016-04-19/index.html","9bf91b91016b9c1eeed2858e04f9d6ff"],["/ja/2016/06/2016-06-16/index.html","0d871e2bb5a57843c754c46997fcab40"],["/ja/2016/09/2016-09-18/index.html","0fc19afe63e659ab1aa9f17923f7c14a"],["/ja/2016/10/2016-10-27/index.html","a9c0c6ec4702e26166b334b06c626fe5"],["/ja/2016/12/config-switchresx-and-2khidpi/index.html","bdb639e690de521fbc2c2041c8ec8913"],["/ja/2016/12/improve-duoshuo/index.html","cc0981f9c769580d2c56033712bc3bfc"],["/ja/2016/12/use-travis-ci-your-blog/index.html","8afabd95cc46ab81d1389688289ed890"],["/ja/2017/01/2017-iyahoi/index.html","be7dd74e6240aad266ad75aa8fd16691"],["/ja/2017/01/webpack-amd/index.html","4ac9796f36c51faa7937a3158764ab58"],["/ja/2017/04/kotobukiya-syaoran/index.html","000535706851d36e390a15a35addbffd"],["/ja/2017/04/macbook-and-surface/index.html","64243becd75b1d10674a294477aa00d4"],["/ja/2017/04/uc-hyakuya-yuichiro/index.html","d4e8d4b6a420fcdccb4402a1a032c80a"],["/ja/2017/06/noragami-seichijunrei/index.html","e893901d3150f75e8cbf7896e3182aea"],["/ja/2017/08/cross-compile-55-libev/index.html","d2479192123fc4db1f84293a0a5e0412"],["/ja/2017/08/explore-service-worker-working-lifetime/index.html","52c624adf853b54f28860d8f6af7be9e"],["/ja/2017/08/hello-jp-world/index.html","9c5d6e710a287451a2d0839d7b262bee"],["/ja/2017/08/kiminonawa-tokyo-seichijunrei/index.html","d2f305c934cf81a1aab815bc3826eceb"],["/ja/2017/09/record-user-login-status-methods/index.html","39437b3cb155dc08c2fb1d6f69570033"],["/ja/2017/10/vue-typescript-early/index.html","9a0091e4d97f34b63819730594b99f42"],["/ja/2018/04/2017-end/index.html","d95670edef6cf8d9acbf86070a1a6f14"],["/ja/2018/04/twitter-account-activity-api/index.html","36b69d3a85eee7469d31367895c29f63"],["/ja/2018/05/buddy-complex-seichijunrei/index.html","9a771d3a437fd03f77002a5eaad5229a"],["/ja/404.html","40092e1dd5404dacd4e81e3f1f458da6"],["/ja/about/index.html","61c609383b6f5f3196ac4d1211499e6a"],["/ja/archives/2017/08/index.html","640bc281b86a667caec46625f27e40f7"],["/ja/archives/2017/09/index.html","2e54fe7ff9cbe82733f14fc57e68ddc7"],["/ja/archives/2017/10/index.html","6fea34cc11448e9098401bccfbad3d8f"],["/ja/archives/2017/index.html","1583fbd6293f8d18a8e77db311f2fda8"],["/ja/archives/2018/04/index.html","8c250cc2fbad891685ae4c54a593f9d8"],["/ja/archives/2018/05/index.html","054f2b4eb0e4a148f8580d205e1b4920"],["/ja/archives/2018/index.html","51031b3752216a56c8fb8482bf698e80"],["/ja/archives/index.html","57dfd408ef9f3b102cfb53005a720628"],["/ja/categories/ACG/Travel/index.html","0217d440a7756cd5de83f8a31c415597"],["/ja/categories/ACG/index.html","2b3482cf7cd7ade68a4d3f3435eda465"],["/ja/categories/dev/Front-End-Dev/index.html","7addb427ea0cffa3bcdfa7f764c09b89"],["/ja/categories/dev/index.html","698927f4fd7a872e6a60c7e8436642b2"],["/ja/categories/uncategorized/index.html","6b9efbc1f087ed1792d759a5609387bb"],["/ja/index.html","d94bff326edbfa5f0d2abb037c863f0c"],["/ja/nihongo-test-page/index.html","f91c0eebbb8f6f5378efa50ef9954272"],["/js/instagram.js","7d7a9e2e7286ba2d5b6d12068214f0c3"],["/js/jquery.lazyload.js","28c23bc40080d31144776e9a8736837f"],["/js/main.js","2e92f29b0cd90bddc062915eb46a858c"],["/js/mobile.js","dc84e1287e89e3c1bba67fd47b8656b1"],["/js/nextpageajax.js","c3bde8d7bb1f967fb319f57a187ea51a"],["/js/pc.js","631b535186aab0e262485ee2bf9da628"],["/js/ripple-effects.js","b9c11903da0ef5c3d790b41369c3137e"],["/js/share.js","de52ac3d43e43c1951a08b0804458a8e"],["/js/totop.js","661822968b58fd439f46bd54031238d6"],["/nihongo-test-page/index.html","e62a86cca1767a502ad03c109faedae4"],["/page/2/index.html","5d4a305552eb41354137543ab89311cc"],["/page/3/index.html","d22044babe342d179901a4fe7b47d3cd"],["/page/4/index.html","2d4f11bef389ca03026ae645a6768061"],["/page/5/index.html","c892f1ba6c62852199f29575e481aeb7"],["/page/6/index.html","644ff9a483299e3bb9ad451f903a3f0e"],["/photoswipe/default-skin/default-skin.css","426e8908d7426603ca203b6d16281b1e"],["/photoswipe/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photoswipe/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photoswipe/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photoswipe/photoswipe-ui-default.js","0c9196aa8943ce8a8045c9f4cc62915c"],["/photoswipe/photoswipe-ui-default.min.js","9517baca43cd4e9cb23ff337fbc1baa1"],["/photoswipe/photoswipe.css","7dc0df107159e1be66d4464171561e5b"],["/photoswipe/photoswipe.js","a8d26ff34943c859884acbd6b2531315"],["/photoswipe/photoswipe.min.js","f5cd6479c4e4682545a9603e6b50c741"],["/setup-log/blog-setup/github-pages-ssl.html","d5e315a4f7725d0c5a828ab2ac48dfe3"],["/sw-register.js","920b5ade7d25a1dce2f6f3a9164f0fd9"],["/zh-cn/archives/2015/03/index.html","9fd0264fbb8c54c8639f0f9448fd1af0"],["/zh-cn/archives/2015/04/index.html","0cd5be2a22edab56e6ac5374705fea69"],["/zh-cn/archives/2015/05/index.html","a018b9462e3a4c7beb5ef113076f6aa5"],["/zh-cn/archives/2015/09/index.html","6f09a49d5cfb51dd9e9ea570901fc31f"],["/zh-cn/archives/2015/12/index.html","dd7dfcee4b68d557c2825eccc6926dc9"],["/zh-cn/archives/2015/index.html","32d05cb4de9c97ab7dfbd8f525e9c786"],["/zh-cn/archives/2015/page/2/index.html","2d922f59bd116d4ec6b9c3a963c643aa"],["/zh-cn/archives/2015/page/3/index.html","06fd25ed5875cf9c6d0d46ed44107b93"],["/zh-cn/archives/2016/01/index.html","e862d5465f9b6278da9b6f5c18f9451c"],["/zh-cn/archives/2016/03/index.html","482a8c4ccc9852d7bfa2b7ab0b613f9c"],["/zh-cn/archives/2016/04/index.html","e55872a57e0fa5265eb1afbf616d8fe8"],["/zh-cn/archives/2016/06/index.html","18bab63af9b0abb1e5bd25ab66b564cb"],["/zh-cn/archives/2016/09/index.html","48f31fab96368c434763ce3493d4b8ef"],["/zh-cn/archives/2016/10/index.html","1d9db02ad0fa348d7b0614622c76e183"],["/zh-cn/archives/2016/12/index.html","5e5b6830b55ba13c845617abf03f6500"],["/zh-cn/archives/2016/index.html","2fdd806be0d822e4dde4dc6c1dd9d8df"],["/zh-cn/archives/2016/page/2/index.html","8ff744d59d4fc8240f7a82f43510c175"],["/zh-cn/archives/2017/01/index.html","617b0d91caf2f238000910d8f0ede7cb"],["/zh-cn/archives/2017/04/index.html","6d732550fee5052e4ceaf397ede1ec3c"],["/zh-cn/archives/2017/06/index.html","1367150537502b1eaae934976914dec0"],["/zh-cn/archives/2017/08/index.html","c57859e9455fb75967be8c1561d5597a"],["/zh-cn/archives/2017/09/index.html","b164d166f40cc4adfd791d8f2f744801"],["/zh-cn/archives/2017/10/index.html","03cbe4ed16d051d14860bc686c604770"],["/zh-cn/archives/2017/index.html","d5ea8d789d7f5a5d137b560884d2ac01"],["/zh-cn/archives/2017/page/2/index.html","0f7eafb483d9cfd4c1aa801bfa6e909f"],["/zh-cn/archives/2018/04/index.html","a5010335ca7f0cd2a9f186b3cc280f7a"],["/zh-cn/archives/2018/05/index.html","1e6603998f6c0c14ee48c16c65b87324"],["/zh-cn/archives/2018/index.html","59eb95b67331c5017a900498f7623b04"],["/zh-cn/archives/index.html","f9659415f29f7ecfca840d0107ca5baf"],["/zh-cn/archives/page/2/index.html","241939c64dbe2ff86ce8dc888cced646"],["/zh-cn/archives/page/3/index.html","baef2771444636078046b236fc92ded1"],["/zh-cn/archives/page/4/index.html","22a16e3512e8cedf067f861e0274d0d2"],["/zh-cn/archives/page/5/index.html","a561731b1bff8b799d019b212e2177e9"],["/zh-cn/categories/ACG/Music/index.html","629849893b4139e6b657a6debe12cb77"],["/zh-cn/categories/ACG/Music/self-copy/index.html","edadd3b2538247660268ae7621f0b5e1"],["/zh-cn/categories/ACG/Travel/index.html","8dc8d90467f8c579a783d2fa9c47c256"],["/zh-cn/categories/ACG/figures/index.html","6ce931e3a3ccb026e401c43de9e4fb40"],["/zh-cn/categories/ACG/index.html","8a54774404656d31e3066e76bedfcaa3"],["/zh-cn/categories/dev/Front-End-Dev/index.html","c6a5c08b344f4cc3a562d774475fd802"],["/zh-cn/categories/dev/HTML-CSS/index.html","e0f775052121d8ec83f55dd4e6461a86"],["/zh-cn/categories/dev/android/index.html","dba51032d71200a4c86d9911ef5122cd"],["/zh-cn/categories/dev/cpp/index.html","4f35bcfbef7ae9d0b748afaa1f09b958"],["/zh-cn/categories/dev/git/index.html","1cb23d56cc0d18ae08d99529c7680f88"],["/zh-cn/categories/dev/index.html","63bfd8df545433e4e1769518a67b6de5"],["/zh-cn/categories/dev/java/index.html","01b0541af0ddf35b64d817d4b58a4ff9"],["/zh-cn/categories/dev/page/2/index.html","e23a4e3910bde6dc831dde8b9e027d5c"],["/zh-cn/categories/maintaince/blog-setup/index.html","3909066e4306b963dc3e532b0d60508b"],["/zh-cn/categories/maintaince/index.html","c82f380b25b79535230440fc6e35b944"],["/zh-cn/categories/maintaince/macbook/index.html","dcdf76ae0b991a7ae3243538cfbb7e0a"],["/zh-cn/categories/maintaince/router-config/index.html","aa2e26517847dc592dc4ed0722175070"],["/zh-cn/categories/notes/index.html","91134e439f70a4ac98b8f2b609d9216f"],["/zh-cn/categories/tricks/android/index.html","441e2b59de6fb03c8fc5399855af018a"],["/zh-cn/categories/tricks/index.html","b9753304f7f0fa621bc9343e66303dc7"],["/zh-cn/categories/uncategorized/index.html","8d748380c48464b2fd198e14fa87d80b"],["/zh-cn/categories/works/Front-End-Dev/index.html","b5b74d15a0c73c06c751ee3754c40624"],["/zh-cn/categories/works/csharp-wpf/index.html","73bdfa2feea589b92ad4522c6a5340ee"],["/zh-cn/categories/works/index.html","38d9f86a7db9ae2f2851b9240080cbf4"],["/zh-cn/index.html","5080ce751ecd86f17aa7716656b50d3b"],["/zh-cn/page/2/index.html","fd7b2f989b7f228a6c85c5006f4b6f64"],["/zh-cn/page/3/index.html","e6d5befd695ee9b0651ea0ca4145923a"],["/zh-cn/page/4/index.html","96b7721a191232fd33ea9d1e71f68908"],["/zh-cn/page/5/index.html","074f9bf13d00a16bfee44f9ce72461d5"]];
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
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdn.bootcss.com"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"i.loli.net"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"dn-xingoxu.qbox.me"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"od8634671.qnssl.com"});





/* eslint-enable */
