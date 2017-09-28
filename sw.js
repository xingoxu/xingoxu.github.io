/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/03/WNDR4300-setup-log/index.html","9ada01faaebeb5914a6bf2c8b6a3a559"],["/2015/03/android-hostname-change/index.html","93a6239a4c7c0db8f2343edf2c6cd2f5"],["/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","0d74f15871455c1fb96f52d9a7aa40a2"],["/2015/04/android-chrome-issues-with-webpage/index.html","bebdefc110c161cc1255b58b2750f489"],["/2015/04/cpp-study-log/index.html","92ea2cb21462d8549ac7c4ae1dd4df6a"],["/2015/04/github-pages-ssl/index.html","afd925d344cfe1046b4b3847734bbc9d"],["/2015/04/hello-world/index.html","4915b35e3785cfa25279ea87278b089c"],["/2015/04/hexo-setup-log/index.html","c2637aa8b864e8255ceecd5ca5d2cce5"],["/2015/04/self-copy-cd-inazuma-1-html/index.html","688c3ab96abc5e6698633589b9fe4984"],["/2015/05/cpp-inherit/index.html","0e9534104a6d938e6d16e946260a0d23"],["/2015/05/cpp-polymorphism/index.html","c4db961c3eeb00bf1b6183586918f3eb"],["/2015/09/android-root-ota/index.html","b33175512f492eed9fa480951ad035b3"],["/2015/09/java-learningNotes-1/index.html","0d5c955b02a9140aecd5913568040253"],["/2015/09/newblog-newlife-2015/index.html","deae695bbf3447769f9a3b974a15ca1d"],["/2015/09/router-rebuild-2015/index.html","0ab7eccc9b12886d3bbaf32a7c834309"],["/2015/12/2015-12-21/index.html","814391ffc33a962f7f60a8f7fe95561d"],["/2015/12/PixInTouch/index.html","4599226122f7c7de1ebe42735bf88a0c"],["/2015/12/git-study-1/index.html","3b1f2fe58886c7d81397480e2d376002"],["/2015/12/hexo-backup-and-migrate/index.html","efdd3818ea3dcb1468d3c5babd5b0be2"],["/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","9a8700c9718894f4e1275a4d3b6fe9ff"],["/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","39daa6688a0ad88f1b09701b5dccbde1"],["/2015/12/router-reconfig-2015/index.html","adf13c4c6622f8287dc0deabfadb20fb"],["/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","260dbce7ae62214e22824bbe14efb163"],["/2016/01/2016-stepping-further/index.html","52ee65b58daa9f52726b1a839a8b3502"],["/2016/01/Android-Study-1-22/index.html","6a38e53aecc6326a18da4480e625d334"],["/2016/03/2016-03-20/index.html","5476ad3b4846b6b51081691c36167e39"],["/2016/03/GSC-535/index.html","6ab5970b0b4a400d2ea5dfb634749a4d"],["/2016/03/gulpjs-1/index.html","df31a60351f8217c5bb45fb0e32d9bfe"],["/2016/03/hexo-theme-paper-white/index.html","9ee8cda8211c518adb3aa8624e9a6faf"],["/2016/04/2016-04-19/index.html","f119c577f11877416f349b41d6cc133e"],["/2016/06/2016-06-16/index.html","2b64bd89bcbf11be73ae0725dd4b2d64"],["/2016/09/2016-09-18/index.html","af58572da4fa8182f84b92485e40ebde"],["/2016/10/2016-10-27/index.html","8505e41ac92f3e4cbdcd7af70306eaa8"],["/2016/12/config-switchresx-and-2khidpi/index.html","a4242de6ac3e250961de033f70676fcb"],["/2016/12/improve-duoshuo/index.html","1f93f13856dae26f049a7a9e591d98cc"],["/2016/12/use-travis-ci-your-blog/index.html","0f7166e8b134bc68061a5fd1c78a4e29"],["/2017/01/2017-iyahoi/index.html","d1e9c52a2caff4ec657a6486e2036080"],["/2017/01/webpack-amd/index.html","60918a5115f841df02cd6366bb9b487d"],["/2017/04/kotobukiya-syaoran/index.html","2920c2c664a4c19e8a0e6928960cadc7"],["/2017/04/macbook-and-surface/index.html","1207ce67613d10c4a116adc54f6de2c1"],["/2017/04/uc-hyakuya-yuichiro/index.html","5f44745d06ad409833e7482fff1d46f0"],["/2017/06/noragami-seichijunrei/index.html","8b895a813f78d0ce89af8eef032f9d9f"],["/2017/08/cross-compile-55-libev/index.html","b168e94de0f63e5addb6fceac47facf1"],["/2017/08/explore-service-worker-working-lifetime/index.html","df05c6a8237528c7f5dbf826252dfcca"],["/2017/08/kiminonawa-tokyo-seichijunrei/index.html","7a97cdb4e37c0e1ddbaa8508e337a082"],["/2017/09/record-user-login-status-methods/index.html","1281fb900800a7329a4c154b78c2b1cd"],["/404.html","dcf1dba2dab7f3692a51b5abb8729355"],["/about/index.html","8779128e1e82b35da2c2053415714c3a"],["/archives/2015/03/index.html","666bec8f5f4898b292750c2b78ea809f"],["/archives/2015/04/index.html","fc480777df0b955f40627afc1d008e37"],["/archives/2015/05/index.html","9be5181df8730c77ab1a7756f5e3d324"],["/archives/2015/09/index.html","022b73e8dc4977ed36bafc1d0c0a4a90"],["/archives/2015/12/index.html","f0c1ff69f4511a3992fb440f0bf90761"],["/archives/2015/index.html","d65827bae289d94e0f58c694555fc093"],["/archives/2015/page/2/index.html","d82f6407d20534471865b87ce04897a9"],["/archives/2015/page/3/index.html","91de7523e5eafb9564ced6f04a73f1be"],["/archives/2016/01/index.html","e0aeb183c238640154f3f1bc8181404a"],["/archives/2016/03/index.html","12e6732cc0946d01296dd03ffe52cf64"],["/archives/2016/04/index.html","890069f7ea9a8dbd33bd15508ddcf252"],["/archives/2016/06/index.html","a4f590924dc26d56706fe0ce40beb9e1"],["/archives/2016/09/index.html","b2de5447aad4bcc19970864530d9a660"],["/archives/2016/10/index.html","8bfe7596822895c47c11763a3212cf59"],["/archives/2016/12/index.html","df196a85c346dfa57d44a2a3644cab56"],["/archives/2016/index.html","0d92d8a018424d232ab8bb7d22fb85d7"],["/archives/2016/page/2/index.html","71d0a0f134128fea677af30e9db6c26b"],["/archives/2017/01/index.html","ba9778f4d838a36b42919d17aa7b927a"],["/archives/2017/04/index.html","7db11ce5a1a5faf6057f2ac8abeb6c00"],["/archives/2017/06/index.html","9da122e440cfc65c94338380a681ae39"],["/archives/2017/08/index.html","0ecb3303265ddaf057029dd6dafef928"],["/archives/2017/09/index.html","021a7b04100faef3cbcdbd02d0acf9f2"],["/archives/2017/index.html","d969a47875545e2a252e4a94bdc5fc30"],["/archives/index.html","67de88a494bbf2dd433015f7096613f8"],["/archives/page/2/index.html","cf2f6f028253d280913ed96af2e93adf"],["/archives/page/3/index.html","09976b0f9d345f97ee4294c0d2354844"],["/archives/page/4/index.html","f305443b21edb3efe9414036be16a81a"],["/archives/page/5/index.html","9c20ad698ef646575a23aa6d041d6b57"],["/assets/images/about-me.png","a066d06c3d9d1fe56c4d921cec7febf3"],["/baidu_verify_YbTSlpWIUJ.html","779049c3a50695ceb3a388ce1e8bc1b9"],["/categories/ACG/Music/index.html","d69db9a3585316421f6569b2b72c8340"],["/categories/ACG/Music/self-copy/index.html","80bbb32f4102e5235fb69be07dcf8a49"],["/categories/ACG/Travel/index.html","9baaee3f4baf668bb2ce0e85ab5f0d31"],["/categories/ACG/figures/index.html","1a8b3e4772183c8cbdf9330e591e5d0b"],["/categories/ACG/index.html","2310126800ad8313cde8c39e5223e592"],["/categories/dev/Front-End-Dev/index.html","7ffc38ab20d47d5f77c5fe7857569a14"],["/categories/dev/HTML-CSS/index.html","5fac96b9e7afdbfb4d7e3cabd09d0989"],["/categories/dev/android/index.html","0d56afdb21e57eb182db4061e08b40cc"],["/categories/dev/cpp/index.html","a414cc38af1f45f5e2f827cb51565076"],["/categories/dev/git/index.html","ab8d7f2bcc2758296b866b3687a7b146"],["/categories/dev/index.html","0cff4c39e2e2375c95b2ea47aa843204"],["/categories/dev/java/index.html","b4a7800a67b18feee07b08f496ce4024"],["/categories/dev/page/2/index.html","eef2d08e0b87892d55420ce1cafaba5a"],["/categories/maintaince/blog-setup/index.html","ae5f9fba8e910f3a6c5f793b5161f8b3"],["/categories/maintaince/index.html","632a521adb3557968f605243a3929d61"],["/categories/maintaince/macbook/index.html","b444360d5b60cbc2ec6a8ab824f48119"],["/categories/maintaince/router-config/index.html","e382a2d123aefffa06dc7b1c2d32f2e0"],["/categories/notes/index.html","92ec25057f78ffeb5d7ae5c7ad36d969"],["/categories/tricks/android/index.html","e2cfc76de15649a584375e39a3ea8133"],["/categories/tricks/index.html","ff5ab3956e5c6928992ddd30383513fc"],["/categories/uncategorized/index.html","5e843271d36d3ed3a2f54b18f6f5944d"],["/categories/works/Front-End-Dev/index.html","2fe94f4953299bfb10c5c69af8a9c0e8"],["/categories/works/csharp-wpf/index.html","b2fc45be45c537542c88a5e5fb8f534a"],["/categories/works/index.html","db4e4522483740ceff18a3072e60586d"],["/css/seichi.css","42693f35c4c482207368dd363ea27373"],["/css/style.css","a81f79e7bf311785886f2c1c31c8e4d4"],["/google311213f0c8d812a9.html","51f1ee3c2f13a21a1a40b3dae4954454"],["/img/coderwall.png","1976fe70f1ee8ed243e0975402e06a2d"],["/img/delicious.png","952d9b54d8bcfe7b998f67ff48c4dbce"],["/img/douban.png","d42a163f932100e621d22732db34ecdb"],["/img/facebook.png","4bd685f6c9fdaccabf07bdd52173facb"],["/img/github.png","3c4b6267a1a3fedebdc7d089610ecfe7"],["/img/google.png","c385f5304465716b2d6c9ada94c657ab"],["/img/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["/img/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["/img/linkedin.png","4c72c4896f3c23f736cb1ad08f0c866e"],["/img/mail.png","38a7b8302dac028bf03b22d228938abf"],["/img/pinboard.png","9b6186cb97adbe50311f94e50f2392cf"],["/img/pinterest.png","e1b8e655d1b99b40ebcbd96977ae234e"],["/img/rss.png","ec8cf9b5a98011aa75cc0a4f25024dc9"],["/img/scrollbar_arrow.png","be5381cedbd6b778b1d92e224fd71cf7"],["/img/stackoverflow.png","039128ececb47b33bccedd98dc9fc809"],["/img/twitter.png","d2289a4936fefa41d9f92cf89939be5b"],["/img/weibo.png","b382032b316ee38c6d537fe9d36ae54c"],["/img/zhihu.png","e6352c0e1957beef3009268ae747c3aa"],["/index.html","5b7f6e17ec8e3e35ec61bedc5fa9f1d2"],["/ja/2015/03/WNDR4300-setup-log/index.html","7bbe7be95a6274393b0a486de8711ee5"],["/ja/2015/03/android-hostname-change/index.html","a4f6ee6befb0e1a09696266cc95f54ea"],["/ja/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","d67dc28b0f0a8bbd4e9544fcea8c2213"],["/ja/2015/04/android-chrome-issues-with-webpage/index.html","b32c08c3c8768dab7ae8f145c9a72bc2"],["/ja/2015/04/cpp-study-log/index.html","5a88e7c9c2ab4af5d29357221e829dd5"],["/ja/2015/04/github-pages-ssl/index.html","ff28f2d14d893b69488c2b738a6f7bb6"],["/ja/2015/04/hello-world/index.html","894efd021c1fdaa4544c19bf225aa42c"],["/ja/2015/04/hexo-setup-log/index.html","3f28f9cdafb82a0b8aa49e8394f2653e"],["/ja/2015/04/self-copy-cd-inazuma-1-html/index.html","bff3cbc45cf7fa75e42b6446f7ceb9ff"],["/ja/2015/05/cpp-inherit/index.html","0050a472c451719e50571548499821ae"],["/ja/2015/05/cpp-polymorphism/index.html","ea9448acf42a5c9c4703a38c91510b41"],["/ja/2015/09/android-root-ota/index.html","2f9f1ad0247691d929d27d9e9d9e847a"],["/ja/2015/09/java-learningNotes-1/index.html","cf059ab7227c918b71b8deb3f199cac1"],["/ja/2015/09/newblog-newlife-2015/index.html","5c0f84e67cfb6be0be7a5b5b61c8f3fc"],["/ja/2015/09/router-rebuild-2015/index.html","2c770070ef403fb3e5c2b1c98fbe3362"],["/ja/2015/12/2015-12-21/index.html","b01e217fea548183c9930c4790cfa153"],["/ja/2015/12/PixInTouch/index.html","6c61b0b36e9177ea5385c8fac175339c"],["/ja/2015/12/git-study-1/index.html","5e4721d53bf7227cdfa6702e0864d5b5"],["/ja/2015/12/hexo-backup-and-migrate/index.html","b33c7a6256209e676d6bca95c6505668"],["/ja/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","7a784bdaa35d385b7d6558054ac7dfd9"],["/ja/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","8fafac5614d297c2e6bcad989bc8989f"],["/ja/2015/12/router-reconfig-2015/index.html","4da52c0f67f9366b7ff8e37c63a234ff"],["/ja/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","07e52db05a2a225ab952c59ec913638d"],["/ja/2016/01/2016-stepping-further/index.html","3ff4c6b95eba8096f6619ecb5baa43d1"],["/ja/2016/01/Android-Study-1-22/index.html","bfc61c5343ca4f94fb267fd7d86876fb"],["/ja/2016/03/2016-03-20/index.html","9468352d3bffb492ac7fb98790c0315f"],["/ja/2016/03/GSC-535/index.html","5eb84cbc29ab66f609628124581a1077"],["/ja/2016/03/gulpjs-1/index.html","d6880b909bf760386c58e6d0d52188af"],["/ja/2016/03/hexo-theme-paper-white/index.html","e45c699252ea79b4b1f3ec04c4a2934e"],["/ja/2016/04/2016-04-19/index.html","8c2e9a061d5704e5ce9410d2e1636d81"],["/ja/2016/06/2016-06-16/index.html","9eb29ee5fe8c960c089f48b44daf89b1"],["/ja/2016/09/2016-09-18/index.html","9f3cb879290542e5de2144ff019b5afc"],["/ja/2016/10/2016-10-27/index.html","cd383f2d6ee2f139ba57ac727b7bd03d"],["/ja/2016/12/config-switchresx-and-2khidpi/index.html","3f81df466d429bf167fa0d1300486e49"],["/ja/2016/12/improve-duoshuo/index.html","d257e31ddf34ad1dca174ba5b0bd2a85"],["/ja/2016/12/use-travis-ci-your-blog/index.html","0eebda97e24cc8743fba49953f1d080b"],["/ja/2017/01/2017-iyahoi/index.html","edbe16592d6a0579dca33c69df82c46c"],["/ja/2017/01/webpack-amd/index.html","9c2ce01669c28eedbab7af898e1db1d9"],["/ja/2017/04/kotobukiya-syaoran/index.html","c3ec9b49b592a3e914bd4c4abf21b2d8"],["/ja/2017/04/macbook-and-surface/index.html","ab67882e7d6e2d9cd385c1f213fd0073"],["/ja/2017/04/uc-hyakuya-yuichiro/index.html","a740e2556d05331be16739409e0578f4"],["/ja/2017/06/noragami-seichijunrei/index.html","19a49a01822b37afad3b933599ea372a"],["/ja/2017/08/cross-compile-55-libev/index.html","d526d04def47bb337d844d769e9ce261"],["/ja/2017/08/explore-service-worker-working-lifetime/index.html","4699110a22b384669df69c85e81836d0"],["/ja/2017/08/hello-jp-world/index.html","f9878292299d584774c3710f8fb1a3e3"],["/ja/2017/08/kiminonawa-tokyo-seichijunrei/index.html","43bc3555b31dfa2c4f265c7ab06aa164"],["/ja/2017/09/record-user-login-status-methods/index.html","80f1b668301ad30cdc6ae6d04971d672"],["/ja/404.html","ba338164116808deb263820a79736d29"],["/ja/about/index.html","d0f2a48999aa21617ffce9e27b708d2a"],["/ja/archives/2017/08/index.html","fe3184a003b7616379f90f5bd1822449"],["/ja/archives/2017/09/index.html","2d813be2d80577ba79c466876cb648e0"],["/ja/archives/2017/index.html","361e088fd4ae6e10f3a147f93fb77b8e"],["/ja/archives/index.html","14bebcf297c67523c4cc74773720a025"],["/ja/categories/dev/index.html","220bcd235c4df084766f7f7e6ffc57d8"],["/ja/categories/uncategorized/index.html","756175f89c2a48362cc9ba8b6c35026b"],["/ja/index.html","17444958f53f1a30411c3827fb935563"],["/ja/nihongo-test-page/index.html","a998740a83516fb040ca96218fe98307"],["/ja/resume/index.html","236482dad71e95c5cef785f8425839e7"],["/js/instagram.js","7d7a9e2e7286ba2d5b6d12068214f0c3"],["/js/jquery.lazyload.js","28c23bc40080d31144776e9a8736837f"],["/js/main.js","2e92f29b0cd90bddc062915eb46a858c"],["/js/mobile.js","dc84e1287e89e3c1bba67fd47b8656b1"],["/js/nextpageajax.js","c3bde8d7bb1f967fb319f57a187ea51a"],["/js/pc.js","631b535186aab0e262485ee2bf9da628"],["/js/ripple-effects.js","b9c11903da0ef5c3d790b41369c3137e"],["/js/share.js","de52ac3d43e43c1951a08b0804458a8e"],["/js/totop.js","661822968b58fd439f46bd54031238d6"],["/nihongo-test-page/index.html","65431e4ddb0ec434bb2fe427177d75e3"],["/page/2/index.html","3d53d4a8c8ee6f6989ba97b3946cea17"],["/page/3/index.html","78aa80b6fab4b2cf793be25764c8b64d"],["/page/4/index.html","7a95df0a538085e4a4ed6ba6c3797687"],["/page/5/index.html","5e634e2f8b85580a5ee16f19b0d10528"],["/photoswipe/default-skin/default-skin.css","426e8908d7426603ca203b6d16281b1e"],["/photoswipe/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photoswipe/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photoswipe/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photoswipe/photoswipe-ui-default.js","0c9196aa8943ce8a8045c9f4cc62915c"],["/photoswipe/photoswipe-ui-default.min.js","9517baca43cd4e9cb23ff337fbc1baa1"],["/photoswipe/photoswipe.css","7dc0df107159e1be66d4464171561e5b"],["/photoswipe/photoswipe.js","a8d26ff34943c859884acbd6b2531315"],["/photoswipe/photoswipe.min.js","f5cd6479c4e4682545a9603e6b50c741"],["/setup-log/blog-setup/github-pages-ssl.html","d5e315a4f7725d0c5a828ab2ac48dfe3"],["/sw-register.js","c55e6f08b25fc0b3ba54e02e2c7e5c5f"],["/zh-cn/archives/2015/03/index.html","59f69bc7810f9e248d69388f4d878f43"],["/zh-cn/archives/2015/04/index.html","b2cf92711f291a235ad247677d78c963"],["/zh-cn/archives/2015/05/index.html","77f73e7b310addfe69c217cf904bce0e"],["/zh-cn/archives/2015/09/index.html","094ec1992dd13046e215e1b4b537c0fb"],["/zh-cn/archives/2015/12/index.html","41f35a8e004caf99305573d0f9df6bcf"],["/zh-cn/archives/2015/index.html","19e48e438921c7f51ade7508f88cad70"],["/zh-cn/archives/2015/page/2/index.html","78415ea4bf8335d222bdc5e60bb69817"],["/zh-cn/archives/2015/page/3/index.html","10a3789667a7baea7eb48b4dec6e40de"],["/zh-cn/archives/2016/01/index.html","3b5dbdcf3c7fac3a1a142e27a1ea2ed9"],["/zh-cn/archives/2016/03/index.html","da0c3a3a3c14662427d31ce21d805f99"],["/zh-cn/archives/2016/04/index.html","ae7dc1860c085a66c8750cb598a110d8"],["/zh-cn/archives/2016/06/index.html","306527c242d9ca60ab5723e10efc05df"],["/zh-cn/archives/2016/09/index.html","4cf202a981758ea4a2cd115203bb7ed9"],["/zh-cn/archives/2016/10/index.html","1c5ec99bb135031cd3adaa7b312669ae"],["/zh-cn/archives/2016/12/index.html","810a347d44792d56007758c8c43890f4"],["/zh-cn/archives/2016/index.html","a5c95a96b3d6dcaa98e033c883174166"],["/zh-cn/archives/2016/page/2/index.html","3502b6f50f22fea3601062bf49701dd1"],["/zh-cn/archives/2017/01/index.html","a2500ba255bcadc5b2a0fd463795f6ce"],["/zh-cn/archives/2017/04/index.html","7241b7ac623816cbd7976a5370a1f0b0"],["/zh-cn/archives/2017/06/index.html","ab50e8273a91abcfd1f4dc959e35ab42"],["/zh-cn/archives/2017/08/index.html","af49f75076ad891d4b1c5436df7a8536"],["/zh-cn/archives/2017/09/index.html","278aeae8e3f720b961c41e941417cc23"],["/zh-cn/archives/2017/index.html","8fcaa16c6cfcd2fb5237cbbb588db905"],["/zh-cn/archives/index.html","768e95e0e2f3e315586b98d5c60036cf"],["/zh-cn/archives/page/2/index.html","2fe7964aa921bc77b0d04b4b7a4ec87d"],["/zh-cn/archives/page/3/index.html","1d6dbf9aec3f25cb7e6efba6addd775d"],["/zh-cn/archives/page/4/index.html","d0487e5d4728255a981e091f4358108e"],["/zh-cn/archives/page/5/index.html","af561fac22fe2e82a2b15ada74818428"],["/zh-cn/categories/ACG/Music/index.html","e4c75a86034b5d9359c57b489ba3d8b7"],["/zh-cn/categories/ACG/Music/self-copy/index.html","49123c50421edfc967f15cb702e3b639"],["/zh-cn/categories/ACG/Travel/index.html","e60b6f95f7db962096b476c429e6453b"],["/zh-cn/categories/ACG/figures/index.html","25d9e9e153a914bbd3da6ceebf591799"],["/zh-cn/categories/ACG/index.html","f00173efd4d0fba76fe7638abd2feb14"],["/zh-cn/categories/dev/Front-End-Dev/index.html","a0ff70571b635111acdc09fc8f278a29"],["/zh-cn/categories/dev/HTML-CSS/index.html","1cb10e5ed1a2a24035ae5222a04ba6f8"],["/zh-cn/categories/dev/android/index.html","521d0f4f170327e4971892c225ba66cb"],["/zh-cn/categories/dev/cpp/index.html","8306d353433d1677dc1ce4e8badcac9f"],["/zh-cn/categories/dev/git/index.html","84ce9ea9cef5a451d9b5af6c8fd7c9ea"],["/zh-cn/categories/dev/index.html","e523c2017a49792624ae40ce7da07823"],["/zh-cn/categories/dev/java/index.html","93536807840b9f5bb02da9ea951232af"],["/zh-cn/categories/dev/page/2/index.html","4ed31bd338883dcc038afb53c3bac636"],["/zh-cn/categories/maintaince/blog-setup/index.html","d636fd09efc8a0c706e6057ce8f681cb"],["/zh-cn/categories/maintaince/index.html","8b8aa6a1deeb4b4e32f9b0b38d1769e8"],["/zh-cn/categories/maintaince/macbook/index.html","8c90d44050cdbae844eac0dd265a3924"],["/zh-cn/categories/maintaince/router-config/index.html","bcc908b6aa7b467f5928be437c1d434f"],["/zh-cn/categories/notes/index.html","adf788bedd9eda4bf05f445ff7accb0e"],["/zh-cn/categories/tricks/android/index.html","3a9bf30322d3063249ef6858afd90d59"],["/zh-cn/categories/tricks/index.html","7ff6433acce26cb8504945c89db7b6d6"],["/zh-cn/categories/uncategorized/index.html","c2bcfb9a97288fb1c52cb3783bb5fda1"],["/zh-cn/categories/works/Front-End-Dev/index.html","8c9642fc04398c779a84be10a32ecf7e"],["/zh-cn/categories/works/csharp-wpf/index.html","65df041d1f02822add790e77971830de"],["/zh-cn/categories/works/index.html","2e696d2527a689c2d3155780ef3fcbbd"],["/zh-cn/index.html","e113920c307aca3e102453004223e887"],["/zh-cn/page/2/index.html","f5975c49ebdfdc83b62895df0d4e9726"],["/zh-cn/page/3/index.html","cdace338713e6b5af4976c2b6e3d5314"],["/zh-cn/page/4/index.html","2d300213fbecc31ea54c9b2c067dd6a7"],["/zh-cn/page/5/index.html","54ac521a99f97b1cb2283256f47f05c4"]];
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
