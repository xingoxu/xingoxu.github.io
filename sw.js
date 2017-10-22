/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/03/WNDR4300-setup-log/index.html","732f110fc36c80f92b535d03b960f0b2"],["/2015/03/android-hostname-change/index.html","f9fe2c1df778d2e4736def7939a502a5"],["/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","56848155e4e2359aff0270c55c3a8912"],["/2015/04/android-chrome-issues-with-webpage/index.html","1bccb18992eaa452d94878cee0c01caf"],["/2015/04/cpp-study-log/index.html","067081082d447908d120972c35eb3746"],["/2015/04/github-pages-ssl/index.html","dc87b20ba34295942582b6113f2fd69d"],["/2015/04/hello-world/index.html","c284442484a215852d87c2348877f2ca"],["/2015/04/hexo-setup-log/index.html","30ff1dc563a42ffc44943e7c31a43a6e"],["/2015/04/self-copy-cd-inazuma-1-html/index.html","4ab91ecf3ea6cda3468f51c95de9b44c"],["/2015/05/cpp-inherit/index.html","814fc75a04efea5c75184cfc474849ee"],["/2015/05/cpp-polymorphism/index.html","31eb436b77ba89559217dc55227d6e0d"],["/2015/09/android-root-ota/index.html","9327e2847e2bf81156717a24d523fdc4"],["/2015/09/java-learningNotes-1/index.html","7ba7cd42823bc229a13ab083510ad6f1"],["/2015/09/newblog-newlife-2015/index.html","d102e96cace66a1b6276acc42ce2dcf7"],["/2015/09/router-rebuild-2015/index.html","3a8638255e957c701acadf6687a84f97"],["/2015/12/2015-12-21/index.html","25dfa5cd9b0244c1d02b18d7aa886b74"],["/2015/12/PixInTouch/index.html","ff378eb59c6d86429c876f322582d632"],["/2015/12/git-study-1/index.html","18f72d28f739be5006ed0fa1a9251917"],["/2015/12/hexo-backup-and-migrate/index.html","5a794c9db1d8913b22b297262624f893"],["/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","a7f352520a14065d8975eca52c956bb5"],["/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","de1a917cfbdb60555040dbb5ad488a97"],["/2015/12/router-reconfig-2015/index.html","7999a7c263506900776ff714b3b8be6f"],["/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","69708ac297e879fa74c9ad1ab3dd940e"],["/2016/01/2016-stepping-further/index.html","277fd8b615c2c31e20a9d6aa7be8f6d2"],["/2016/01/Android-Study-1-22/index.html","df2f7f6f46db3f14ed8dc26b2881f387"],["/2016/03/2016-03-20/index.html","7bb32b74646af9ff4fc9c4e3ec758fd5"],["/2016/03/GSC-535/index.html","13140795ca831930a2a7668d543b3f53"],["/2016/03/gulpjs-1/index.html","ee89af9dedec91d92391f3c46ffc3216"],["/2016/03/hexo-theme-paper-white/index.html","0b3212c6af0d6fa85a53477ebfa3227b"],["/2016/04/2016-04-19/index.html","944defbe7dda835829fcb3547def47e6"],["/2016/06/2016-06-16/index.html","7011ff62f693f4daa642cfaee6a30373"],["/2016/09/2016-09-18/index.html","fab5abe7e117d42d1223569509dafc2c"],["/2016/10/2016-10-27/index.html","26a8e742e8c1a4c59ba93bacc8aa01f8"],["/2016/12/config-switchresx-and-2khidpi/index.html","5f374bea802a873ecf9b108c7f1fb766"],["/2016/12/improve-duoshuo/index.html","b2a41adab099fcb92134ab95b16e2539"],["/2016/12/use-travis-ci-your-blog/index.html","78a1ac5f4e6472b1ffdbc49824156d7d"],["/2017/01/2017-iyahoi/index.html","8c1d0256538e25ac1c4941494fdf080d"],["/2017/01/webpack-amd/index.html","9ac0dee2c0773c222cd3a33f4b933d5c"],["/2017/04/kotobukiya-syaoran/index.html","90e641d8bf5e631c1a24b9ea1fb19536"],["/2017/04/macbook-and-surface/index.html","8dc9b1ecfd1bfac226687721a2c2401d"],["/2017/04/uc-hyakuya-yuichiro/index.html","973d9ce6431cf13f08d1f7242380931b"],["/2017/06/noragami-seichijunrei/index.html","5f5e6193d0daf0581daa178e0d74d15a"],["/2017/08/cross-compile-55-libev/index.html","7475c092eebe051c01af92986dcad1b7"],["/2017/08/explore-service-worker-working-lifetime/index.html","ea3c462571539cc81e6383e03624d18d"],["/2017/08/kiminonawa-tokyo-seichijunrei/index.html","9a8cd67a39b3e21907fdc1ed5db4562e"],["/2017/09/record-user-login-status-methods/index.html","a8d0d486a82a64456126a6cb08c1501a"],["/2017/10/vue-typescript-early/index.html","47a969388d8b1ed012ace57d5121fdc8"],["/404.html","6291c51fded5a141a24cad5c968f5ff7"],["/about/index.html","522e93a056717929412cc1ae8e0da502"],["/archives/2015/03/index.html","9754cd19599f3faa737f62b32c43d014"],["/archives/2015/04/index.html","99cbba23cbe35e06f8a86b10b6ff52ff"],["/archives/2015/05/index.html","65399d8a8d03bf0faff3c9c2d91afcc5"],["/archives/2015/09/index.html","09ac265ceababb106743e3e8d81df477"],["/archives/2015/12/index.html","3c650cd1bc3ae48680e13374953abe99"],["/archives/2015/index.html","b5aba4c48bde12f0a124a6f0a2e05b5f"],["/archives/2015/page/2/index.html","4ae6782c4439d4996a4c5c53bf6608eb"],["/archives/2015/page/3/index.html","f6afd3c1ba5f548965b4b6955c783079"],["/archives/2016/01/index.html","51b6b3b9c1f0d868312efdc94c12069d"],["/archives/2016/03/index.html","80600567a6aae1fd853740ba7fdb9e7b"],["/archives/2016/04/index.html","6b7fd5a8af6aa926fee37d5cf2cff99f"],["/archives/2016/06/index.html","b274970273d3e2e70077456e25b00bf0"],["/archives/2016/09/index.html","6741168945634a3397daea292a7a1706"],["/archives/2016/10/index.html","78d481f50ae2dd102480e43e9652b32a"],["/archives/2016/12/index.html","bc059575eccbea84e3dbee9e147fa70a"],["/archives/2016/index.html","1827e3dbcd0306157d300e0de6c368b6"],["/archives/2016/page/2/index.html","0fb8930c6700358715f1b94a5ef05c32"],["/archives/2017/01/index.html","1e2261d5e03e332e5d50f5d8a5f20d05"],["/archives/2017/04/index.html","37e23759b0e1d71eaea4d1ece0e448a4"],["/archives/2017/06/index.html","5fc34f309723506c554da53eb2d4d004"],["/archives/2017/08/index.html","1e74d7a0f42789a1f12e9954ce7c1395"],["/archives/2017/09/index.html","7a944f25f5013a2e545aac2c0010f744"],["/archives/2017/10/index.html","f82e57b7b8d3dfecbad92ab0cd6d953c"],["/archives/2017/index.html","53f221b1e190f4670228f43e7dcec622"],["/archives/2017/page/2/index.html","ebd70e4f545c3b4a6a8adf885e09b29f"],["/archives/index.html","635f1d5c6990f025e35823731aefaeca"],["/archives/page/2/index.html","b39ff5a14873ec59c4cf0c44649c7ed3"],["/archives/page/3/index.html","ff8eb82e75a10acaf4823a130bfb9854"],["/archives/page/4/index.html","e7acdc8d6d0e50bad6fc6856787f7a50"],["/archives/page/5/index.html","b8eb72ca8cfad1980417f9725c45b5b0"],["/assets/images/about-me.png","a066d06c3d9d1fe56c4d921cec7febf3"],["/baidu_verify_YbTSlpWIUJ.html","779049c3a50695ceb3a388ce1e8bc1b9"],["/categories/ACG/Music/index.html","aec0c05261c0ac33a20fecfcc81e7897"],["/categories/ACG/Music/self-copy/index.html","a115f5e7345a5efe070897d5b814d63a"],["/categories/ACG/Travel/index.html","7ebbcf42f538e8ec7c0abcb5ad8af6b6"],["/categories/ACG/figures/index.html","90add5b23e3946835ca8669c2dcea3e7"],["/categories/ACG/index.html","028d7a4114b0eb6736586ed0afdaed17"],["/categories/dev/Front-End-Dev/index.html","74afecb4432ac5f2397517a3188563d1"],["/categories/dev/HTML-CSS/index.html","57417cfc1df1bdc08f491fbeaf815150"],["/categories/dev/android/index.html","408b12b825c5eacb6e5d32a9aa396a66"],["/categories/dev/cpp/index.html","1b412eb7dc0588b801cf14bd77787379"],["/categories/dev/git/index.html","ec8e776870d0c8ed63e85cb13555561f"],["/categories/dev/index.html","552ea14c434d8dec268abcc64b7f5f94"],["/categories/dev/java/index.html","74ac04a6579713b94dc2ea39d5bdb7dd"],["/categories/dev/page/2/index.html","93066390ba526e15077dd533619ca25f"],["/categories/maintaince/blog-setup/index.html","c64d62393ce0a58c7d379cd22cb9bf54"],["/categories/maintaince/index.html","eca5693b4f9b28c8237b5c45128c91d5"],["/categories/maintaince/macbook/index.html","00e132c859c18cb0dd0d1612a7d72eee"],["/categories/maintaince/router-config/index.html","d6a9cdfe895acee91a1323e0bb0f2fa3"],["/categories/notes/index.html","975f994a8da129b3f1d02e3c4990e586"],["/categories/tricks/android/index.html","e532b1df954caf801772fa0cacec56c2"],["/categories/tricks/index.html","64dde8ec4ddc0489c546cca167b9ad5a"],["/categories/uncategorized/index.html","8800c6eaf343354b0546f115b5c332f5"],["/categories/works/Front-End-Dev/index.html","b051382502f437f98785c8f3a603ba0d"],["/categories/works/csharp-wpf/index.html","5afd33c2408212d9a1531280e392125d"],["/categories/works/index.html","f9f07819fd0eb023fca37a82057203aa"],["/css/seichi.css","42693f35c4c482207368dd363ea27373"],["/css/style.css","a81f79e7bf311785886f2c1c31c8e4d4"],["/google311213f0c8d812a9.html","51f1ee3c2f13a21a1a40b3dae4954454"],["/img/coderwall.png","1976fe70f1ee8ed243e0975402e06a2d"],["/img/delicious.png","952d9b54d8bcfe7b998f67ff48c4dbce"],["/img/douban.png","d42a163f932100e621d22732db34ecdb"],["/img/facebook.png","4bd685f6c9fdaccabf07bdd52173facb"],["/img/github.png","3c4b6267a1a3fedebdc7d089610ecfe7"],["/img/google.png","c385f5304465716b2d6c9ada94c657ab"],["/img/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["/img/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["/img/linkedin.png","4c72c4896f3c23f736cb1ad08f0c866e"],["/img/mail.png","38a7b8302dac028bf03b22d228938abf"],["/img/pinboard.png","9b6186cb97adbe50311f94e50f2392cf"],["/img/pinterest.png","e1b8e655d1b99b40ebcbd96977ae234e"],["/img/rss.png","ec8cf9b5a98011aa75cc0a4f25024dc9"],["/img/scrollbar_arrow.png","be5381cedbd6b778b1d92e224fd71cf7"],["/img/stackoverflow.png","039128ececb47b33bccedd98dc9fc809"],["/img/twitter.png","d2289a4936fefa41d9f92cf89939be5b"],["/img/weibo.png","b382032b316ee38c6d537fe9d36ae54c"],["/img/zhihu.png","e6352c0e1957beef3009268ae747c3aa"],["/index.html","a3b0404a97d4c9c146e1743309bc9ab5"],["/ja/2015/03/WNDR4300-setup-log/index.html","a014e52124008b9f1e8801c33b445fef"],["/ja/2015/03/android-hostname-change/index.html","4535ac952181fb2e5d4ab841f6f51858"],["/ja/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","5ae2f41569b0540ad7c1d63bc8a85740"],["/ja/2015/04/android-chrome-issues-with-webpage/index.html","2adf5902d35815f2795c45876e61301d"],["/ja/2015/04/cpp-study-log/index.html","114071a2314fc400c2e15cdd6a971e23"],["/ja/2015/04/github-pages-ssl/index.html","354534a621997a6b8bcbc0c85e8f010a"],["/ja/2015/04/hello-world/index.html","02b02222300fb14ba11fc3f0775f8395"],["/ja/2015/04/hexo-setup-log/index.html","25ad725823b54fef2ccb591df79d8652"],["/ja/2015/04/self-copy-cd-inazuma-1-html/index.html","61792c5b39d4f915a88f35ba9a4ddbb1"],["/ja/2015/05/cpp-inherit/index.html","e690b2979d11cb899a3de2092181fbd1"],["/ja/2015/05/cpp-polymorphism/index.html","5636e6449c09df9da43d07a2a08ecf45"],["/ja/2015/09/android-root-ota/index.html","bb6bfd644db1a3b78746f753a62a650f"],["/ja/2015/09/java-learningNotes-1/index.html","17886955eafae51a6299302fe3eeb541"],["/ja/2015/09/newblog-newlife-2015/index.html","a9e2cfd6c575706ed64a57398027ca9a"],["/ja/2015/09/router-rebuild-2015/index.html","97aa344c16441187e24d1f7bf09981ba"],["/ja/2015/12/2015-12-21/index.html","c3f8cdf978d5de8912194eb6029168dc"],["/ja/2015/12/PixInTouch/index.html","b679d593d3401234ab2d60899d5e0485"],["/ja/2015/12/git-study-1/index.html","fbd4dddfc93aa1ff801fa6e88b238a59"],["/ja/2015/12/hexo-backup-and-migrate/index.html","75c5720c5f86b4345de52de9a2e15ac3"],["/ja/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","42f901fc73f49a497ae7495a0718e06f"],["/ja/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","98cb33e8f177fd1d6438e4160c10249f"],["/ja/2015/12/router-reconfig-2015/index.html","088301c884c351d4e3fa415f9bd18797"],["/ja/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","62e8eaf4432114cc8f54a55cc2a8b453"],["/ja/2016/01/2016-stepping-further/index.html","248496d6399dfd128ea21453cb2eb891"],["/ja/2016/01/Android-Study-1-22/index.html","72b4f26df790d44818c295007c746609"],["/ja/2016/03/2016-03-20/index.html","66f91ea381a81443dbf67619be899d35"],["/ja/2016/03/GSC-535/index.html","c81cc3f2e77b60331bbd79e0da390079"],["/ja/2016/03/gulpjs-1/index.html","5b8774582834f938214d4b37771b955b"],["/ja/2016/03/hexo-theme-paper-white/index.html","bad8ed8f1d163fcc12ba242b88df5436"],["/ja/2016/04/2016-04-19/index.html","ef0b744f39a3979cc5812d280f228d83"],["/ja/2016/06/2016-06-16/index.html","3def4d9c0eb5b5d07ead5a0a33311a73"],["/ja/2016/09/2016-09-18/index.html","c2b6b5a956e9fefbc3082e9bee96d93c"],["/ja/2016/10/2016-10-27/index.html","c3717e2efeb8a49c0e50fd774e15f2c7"],["/ja/2016/12/config-switchresx-and-2khidpi/index.html","90f7f9eb699f3cbcef447239b5d41f4c"],["/ja/2016/12/improve-duoshuo/index.html","999a64759996f94ba43e32b05c26d768"],["/ja/2016/12/use-travis-ci-your-blog/index.html","e70f08dd5a10dd1d93e06b9c28b72a92"],["/ja/2017/01/2017-iyahoi/index.html","1d928dd02b4b72c57bb30b07cfa17dfd"],["/ja/2017/01/webpack-amd/index.html","c524eb49d12ed6910aa21787bc8b5856"],["/ja/2017/04/kotobukiya-syaoran/index.html","9011008b0206cd242ec9b725d477064c"],["/ja/2017/04/macbook-and-surface/index.html","53e9a33c91d529c6dcbd3fa43aa1eb3e"],["/ja/2017/04/uc-hyakuya-yuichiro/index.html","a1ab5a8e2a4b463a9e5a59861ac6a851"],["/ja/2017/06/noragami-seichijunrei/index.html","65b248bb9603984fce8e3f977f1d0584"],["/ja/2017/08/cross-compile-55-libev/index.html","8469e723a0c64961fa587fb88d6cc048"],["/ja/2017/08/explore-service-worker-working-lifetime/index.html","d2cb3b7eb0ac14159b3ad2dc61c76caa"],["/ja/2017/08/hello-jp-world/index.html","cf65f6ab3611d3981a1fb58750c9b38c"],["/ja/2017/08/kiminonawa-tokyo-seichijunrei/index.html","8ffa6c2440e4562b214c9d945dc9269b"],["/ja/2017/09/record-user-login-status-methods/index.html","a2db126190367355ed9033105234e78e"],["/ja/2017/10/vue-typescript-early/index.html","3bb1442bbfb0068d12cf6839f564fc21"],["/ja/404.html","e2e1035bc1f5676d710d25397c9c856c"],["/ja/about/index.html","42fac67b6021c57c2aefee438eeba84d"],["/ja/archives/2017/08/index.html","c92de429a395e7f221ee64b3a5ab7251"],["/ja/archives/2017/09/index.html","07a48f7f25866d46f28ccee0ff1fb181"],["/ja/archives/2017/10/index.html","1af5909edeadb64846265ff0c233b740"],["/ja/archives/2017/index.html","31095676df61ef2f64f8729c474cceac"],["/ja/archives/index.html","9a120c30a59d306d79c9918e8b41e5ec"],["/ja/categories/dev/Front-End-Dev/index.html","804d3fd374ce83e918f61bf8719fb85a"],["/ja/categories/dev/index.html","c6f892cf61c701cb6175bf647dac0f40"],["/ja/categories/uncategorized/index.html","ae3483be1a9e957d219f346032ebdbd6"],["/ja/index.html","d744e128d69d4001e38f68920d02030e"],["/ja/nihongo-test-page/index.html","19aff4d2f1fb73f00ac01967105c344f"],["/js/instagram.js","7d7a9e2e7286ba2d5b6d12068214f0c3"],["/js/jquery.lazyload.js","28c23bc40080d31144776e9a8736837f"],["/js/main.js","2e92f29b0cd90bddc062915eb46a858c"],["/js/mobile.js","dc84e1287e89e3c1bba67fd47b8656b1"],["/js/nextpageajax.js","c3bde8d7bb1f967fb319f57a187ea51a"],["/js/pc.js","631b535186aab0e262485ee2bf9da628"],["/js/ripple-effects.js","b9c11903da0ef5c3d790b41369c3137e"],["/js/share.js","de52ac3d43e43c1951a08b0804458a8e"],["/js/totop.js","661822968b58fd439f46bd54031238d6"],["/nihongo-test-page/index.html","dc616b97893bfaa6b4706ce6432f3514"],["/page/2/index.html","0f88bfe5a8f1eedad0aa736e32a045a0"],["/page/3/index.html","d85a627eb6143cafba37bd63e6f8989a"],["/page/4/index.html","62f51acf162d86c4c5a00f8ea8613a94"],["/page/5/index.html","050bd192ece12052c3d72f992ef02298"],["/photoswipe/default-skin/default-skin.css","426e8908d7426603ca203b6d16281b1e"],["/photoswipe/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photoswipe/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photoswipe/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photoswipe/photoswipe-ui-default.js","0c9196aa8943ce8a8045c9f4cc62915c"],["/photoswipe/photoswipe-ui-default.min.js","9517baca43cd4e9cb23ff337fbc1baa1"],["/photoswipe/photoswipe.css","7dc0df107159e1be66d4464171561e5b"],["/photoswipe/photoswipe.js","a8d26ff34943c859884acbd6b2531315"],["/photoswipe/photoswipe.min.js","f5cd6479c4e4682545a9603e6b50c741"],["/setup-log/blog-setup/github-pages-ssl.html","d5e315a4f7725d0c5a828ab2ac48dfe3"],["/sw-register.js","8549faf39345702b4d60e82f9fc8703c"],["/zh-cn/archives/2015/03/index.html","9a4160cef3a923f9958abaebe97ffd5e"],["/zh-cn/archives/2015/04/index.html","9e3273f43da1de90ae09db9954a295f2"],["/zh-cn/archives/2015/05/index.html","47dad80d0bc6b8b7c8074c19b725ef98"],["/zh-cn/archives/2015/09/index.html","0f17d2d58f4aa67966ada456dcdc9d78"],["/zh-cn/archives/2015/12/index.html","53f9843039e2967173c5e75db91a203e"],["/zh-cn/archives/2015/index.html","8903d2178c1d66cc02623bf1da3ae8a3"],["/zh-cn/archives/2015/page/2/index.html","53e789dcd4192c08ab5f1f5acfd9efdf"],["/zh-cn/archives/2015/page/3/index.html","906c4a5845633d9cb77e7fc53769e8ad"],["/zh-cn/archives/2016/01/index.html","79651d1d843d0a9ebbe661dd95191f92"],["/zh-cn/archives/2016/03/index.html","ecaf785b9fe6376603ec00dcae353667"],["/zh-cn/archives/2016/04/index.html","f8907c3493429bb84a69bfe538903a0c"],["/zh-cn/archives/2016/06/index.html","0bfa53614d8fc3b155e5d4341e90c88e"],["/zh-cn/archives/2016/09/index.html","7606e8c440442350a3e1de008850a478"],["/zh-cn/archives/2016/10/index.html","893d288143cc7dd8db2a2eceb0d3a7cc"],["/zh-cn/archives/2016/12/index.html","64a6219f30a1a17fa5f90c7b12f05fc0"],["/zh-cn/archives/2016/index.html","b4c423dc091fb8bbbd1c57ffcd05e52c"],["/zh-cn/archives/2016/page/2/index.html","cb880b27b06f2539042337b18bc66870"],["/zh-cn/archives/2017/01/index.html","f098f173b7f189e8b6bfa2abdfaecabf"],["/zh-cn/archives/2017/04/index.html","cc42e074bec96affac72c414e1e5eb56"],["/zh-cn/archives/2017/06/index.html","4e7a936048df4f3417160dfa4a35076c"],["/zh-cn/archives/2017/08/index.html","f65f19c28656c901fed25c417b65ab72"],["/zh-cn/archives/2017/09/index.html","ce44110592d1768cc1c81ae442eec014"],["/zh-cn/archives/2017/10/index.html","c063427f59d3d64a41c32f2faa3185da"],["/zh-cn/archives/2017/index.html","910a2ee4c0800acf5c28b9a2635b412b"],["/zh-cn/archives/2017/page/2/index.html","169a588b64e9a3e02e54802f84abe59e"],["/zh-cn/archives/index.html","7e8cb1b125bfdb4570b544ef4ec1375f"],["/zh-cn/archives/page/2/index.html","f543032cbe3a14bd0bed064395cffce1"],["/zh-cn/archives/page/3/index.html","0e33fee16c038d43524f2454d1e51afa"],["/zh-cn/archives/page/4/index.html","21d383bed7a427a23cacb96b5bfa9fdd"],["/zh-cn/archives/page/5/index.html","260e555f2998446d4180ff755937a45e"],["/zh-cn/categories/ACG/Music/index.html","855a3450b3f5972a9e256eb4bfb28e0b"],["/zh-cn/categories/ACG/Music/self-copy/index.html","ea4d113910c69343d372f16648becbd3"],["/zh-cn/categories/ACG/Travel/index.html","b9ba6675acf633599ffb2808648efb83"],["/zh-cn/categories/ACG/figures/index.html","664ed6f3ad0493fb47a8e48734675353"],["/zh-cn/categories/ACG/index.html","0439c3251662f5bb1e4b3bf99dcbe86e"],["/zh-cn/categories/dev/Front-End-Dev/index.html","3434545515607dce3b4506a3c125e93e"],["/zh-cn/categories/dev/HTML-CSS/index.html","a0f4e0d5d9427c11c38837d71c0f0f6f"],["/zh-cn/categories/dev/android/index.html","cbd30f67c43ffef6b390f84f5cd4c096"],["/zh-cn/categories/dev/cpp/index.html","86405209a1b5c50bf91fb8912e4d8f04"],["/zh-cn/categories/dev/git/index.html","9930a9cd70f6c0fa9f7a7a285efaeebd"],["/zh-cn/categories/dev/index.html","d46677a8c5aefe52fbc8a37770845ce0"],["/zh-cn/categories/dev/java/index.html","0a6e0e7775366474c798aa135e023277"],["/zh-cn/categories/dev/page/2/index.html","362c07515711cf21a8ad3303b3404ab6"],["/zh-cn/categories/maintaince/blog-setup/index.html","4f841a58aee5ce57b76cc483be147830"],["/zh-cn/categories/maintaince/index.html","cfa2384b2dc55d3b1a1bebbe74488067"],["/zh-cn/categories/maintaince/macbook/index.html","a4f40d5b17609f6e1dfb215dc8b6d632"],["/zh-cn/categories/maintaince/router-config/index.html","374c14bc067efc4cc2dc4365d0153da8"],["/zh-cn/categories/notes/index.html","699dfde01d6dfe72b92b8a38744e7f0d"],["/zh-cn/categories/tricks/android/index.html","c818453ca3d098f946c690ec3eadefff"],["/zh-cn/categories/tricks/index.html","f46a44bfd4fcb29ce18dc2299a6d6e8c"],["/zh-cn/categories/uncategorized/index.html","48cf5d34ef3a01142ccb531ef471ddd9"],["/zh-cn/categories/works/Front-End-Dev/index.html","93b96a1fc33b0f7f269371312a16ce2d"],["/zh-cn/categories/works/csharp-wpf/index.html","3c6c464ccd889251a50b732c825b41c4"],["/zh-cn/categories/works/index.html","d93821d78ed28bc721d300375f46ae41"],["/zh-cn/index.html","97e528deaceede53716d061a760fff72"],["/zh-cn/page/2/index.html","5c23cf531e00964a60cb1336159840a4"],["/zh-cn/page/3/index.html","18cd87a91cfd08090947ad115226030f"],["/zh-cn/page/4/index.html","caeb8b28ecb323d25ef6380296a460b4"],["/zh-cn/page/5/index.html","08b8794b2a315f025b533111f95524d9"]];
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
