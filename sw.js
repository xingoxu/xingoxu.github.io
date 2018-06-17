/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/03/WNDR4300-setup-log/index.html","9baab6dabb542432eb141586f4141c07"],["/2015/03/android-hostname-change/index.html","74a501f80504f5bda686b571d67d39b5"],["/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","a8e07a69bb02cdd6c285ef20e666d986"],["/2015/04/android-chrome-issues-with-webpage/index.html","d2a26bc8e4f4496edaa8d53e099b979d"],["/2015/04/cpp-study-log/index.html","1e76829446922302ef7698c057db6128"],["/2015/04/github-pages-ssl/index.html","161f9c0a58ef5370423f27c2affceee3"],["/2015/04/hello-world/index.html","a3978b3a070a230dad96b38c19a16234"],["/2015/04/hexo-setup-log/index.html","579819fc5c651a2b0fd8328503795fa7"],["/2015/04/self-copy-cd-inazuma-1-html/index.html","2401837479fc495767bc0471c2d313a6"],["/2015/05/cpp-inherit/index.html","22917b6ec8d96a64f0911c7057c14ce2"],["/2015/05/cpp-polymorphism/index.html","e2596c5f84b46f6bdcfc15ed608cceb0"],["/2015/09/android-root-ota/index.html","6331f35620959b565306b2ee80501801"],["/2015/09/java-learningNotes-1/index.html","e46c2d52039a62511c455d315f73430e"],["/2015/09/newblog-newlife-2015/index.html","88cb8a293bb4a0f822552334cc7e575c"],["/2015/09/router-rebuild-2015/index.html","4388a3f7aaba65f5ef0bb95f3cd9df02"],["/2015/12/2015-12-21/index.html","eb8b352cbd141e7db2726cd6dd554673"],["/2015/12/PixInTouch/index.html","1b943af4a6a8767f993321b4615a738d"],["/2015/12/git-study-1/index.html","715f71b959dee6b3701d199027a43173"],["/2015/12/hexo-backup-and-migrate/index.html","99bcc143f627b5641316ae3bd896f8c1"],["/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","fbb76530161f1ce4d6d04bcf80359486"],["/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","1c270bca2ec0aaf49d3a56c961b6a0bf"],["/2015/12/router-reconfig-2015/index.html","2f007c6ef9cb9f17d8785979d79f1153"],["/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","65f01b351982c92c2224fad9019d2fcc"],["/2016/01/2016-stepping-further/index.html","a66f0b99e72153d1b149c723558749b3"],["/2016/01/Android-Study-1-22/index.html","2a04e8045af8fbaf18afe548c380b0e7"],["/2016/03/2016-03-20/index.html","fe1bb47513adc955c088beac84b135bf"],["/2016/03/GSC-535/index.html","5f4fb10ebbbf26ae0c6fc3bf534c31a8"],["/2016/03/gulpjs-1/index.html","6812969f4cf858658615410cc9380c6d"],["/2016/03/hexo-theme-paper-white/index.html","940afd3623d5ac9cd17e7916f18385d7"],["/2016/04/2016-04-19/index.html","5d73e44dd176675bb8a5b5ab8fa1d1bb"],["/2016/06/2016-06-16/index.html","0c7080c1f9e6b7bb435d3551916ed9b7"],["/2016/09/2016-09-18/index.html","69f9696142b59208b441b387c920d5b0"],["/2016/10/2016-10-27/index.html","b107ede68912e5527996b6d60236ab75"],["/2016/12/config-switchresx-and-2khidpi/index.html","77bc58886e5d261f4396a89cc3ca9e30"],["/2016/12/improve-duoshuo/index.html","54d4ea93d9f168de62dd4ead4830efd7"],["/2016/12/use-travis-ci-your-blog/index.html","4f436160ea4481a429538316acc5a775"],["/2017/01/2017-iyahoi/index.html","e94f8bd82930cfc6ac8e21afbe62922e"],["/2017/01/webpack-amd/index.html","385d7044ebe59869771092d9bf2167b8"],["/2017/04/kotobukiya-syaoran/index.html","93465cce8f46d33c0707f2ce00b24179"],["/2017/04/macbook-and-surface/index.html","5900ee99c3e967d3c354dbc8d1b05713"],["/2017/04/uc-hyakuya-yuichiro/index.html","05d3cc62cbe648db28fc2d25248ad91e"],["/2017/06/noragami-seichijunrei/index.html","71d7ffaab1978787bcb256b963d3f9d3"],["/2017/08/cross-compile-55-libev/index.html","d8b54945f7ee35fdf50ef05b05650b19"],["/2017/08/explore-service-worker-working-lifetime/index.html","12c52f89fc272f68bbc3addb38bbbddb"],["/2017/08/kiminonawa-tokyo-seichijunrei/index.html","b12d64e53def2cf5d0daf08a68fe6824"],["/2017/09/record-user-login-status-methods/index.html","3ff784d206fa6a99a3f1271018f6858d"],["/2017/10/vue-typescript-early/index.html","936a5139c56c8263550e28aa00c62689"],["/2018/04/2017-end/index.html","37a1af80821cfdfd69a923824f70e6f4"],["/2018/04/twitter-account-activity-api/index.html","71f723562c1bacc8cb07865e565c50bf"],["/2018/05/buddy-complex-seichijunrei/index.html","99c10a6b721cef9362828aec634abe7a"],["/404.html","8475151093afa7277e04caea27b732fe"],["/about/index.html","18952df25ca7b01a7a81a0d8d4bca15e"],["/archives/2015/03/index.html","25ca39041adedc953b5d2ca0e318f013"],["/archives/2015/04/index.html","c1650d0b6307b05c7b99afd74c2b8d21"],["/archives/2015/05/index.html","1f7269df8fc93311a08552fe019bc658"],["/archives/2015/09/index.html","a2b2b1f373849fd8f65843f4e5f5713e"],["/archives/2015/12/index.html","93d15b994f987dedeabc5c1faea48c86"],["/archives/2015/index.html","a658991a36760200b9296cc3f1e46f86"],["/archives/2015/page/2/index.html","bac56d294746b0643e46a5f64497c2a6"],["/archives/2015/page/3/index.html","27e9aa88bc7472153eb7b89439e85cff"],["/archives/2016/01/index.html","c4362ddf7017931f790bbe052a328527"],["/archives/2016/03/index.html","ba927f9a56b5034e4b55cd16473eca9d"],["/archives/2016/04/index.html","92247957ce286bf16a9664da7066bd85"],["/archives/2016/06/index.html","96741508da21579e28a8d7b2d1b5b290"],["/archives/2016/09/index.html","24be86d27e004f1210baae689de8f2de"],["/archives/2016/10/index.html","2002eac6b160146063bd980c99cc40e7"],["/archives/2016/12/index.html","dc1e93813307483e2ca7c8dcefc8e4c0"],["/archives/2016/index.html","2270519eb701034b189b67e2a7cc01d5"],["/archives/2016/page/2/index.html","00a191009361d58dbaf4ec475b6beafa"],["/archives/2017/01/index.html","f274d8546ed00fa3547a1752add3d088"],["/archives/2017/04/index.html","055f31f9b49ee329989c08ca9ba913e2"],["/archives/2017/06/index.html","365009a703a484ee1d8b176ef4c4ed37"],["/archives/2017/08/index.html","4f37e61d5a2167879a08b4ecaaeea08e"],["/archives/2017/09/index.html","9e0e9b901d29b675a819b91930e74d47"],["/archives/2017/10/index.html","024ec531a2b3140b5a7d765abe6481d2"],["/archives/2017/index.html","972c44e3cc876e65b8d17f37e789d45b"],["/archives/2017/page/2/index.html","41cf210b10b55f087c6d19daa9a1b2cd"],["/archives/2018/04/index.html","d779074da9b40ad222bffbb5b579dd3c"],["/archives/2018/05/index.html","3655757cd343b03303f17756e29a9150"],["/archives/2018/index.html","b8f0260b7ea8c4b58eb2d17dada5e8fa"],["/archives/index.html","dab0e1eef968b64692e72e0e206588c7"],["/archives/page/2/index.html","696972c6f18a7d7686d81e18daaa082b"],["/archives/page/3/index.html","7f2864bbd76c5bf0ea49e694653d0aaa"],["/archives/page/4/index.html","2b5dcfacb55d34ef22fd525412227fd3"],["/archives/page/5/index.html","d0e09bea319d4fafcb94a003812cc8a3"],["/assets/images/about-me.png","a066d06c3d9d1fe56c4d921cec7febf3"],["/baidu_verify_YbTSlpWIUJ.html","779049c3a50695ceb3a388ce1e8bc1b9"],["/categories/ACG/Music/index.html","b8edfe3508bea01cc355346b618a7da8"],["/categories/ACG/Music/self-copy/index.html","aecdecf183782a79c90830731b61ecc7"],["/categories/ACG/Travel/index.html","b6d453c8b8308cd7027a3ae4acb49d83"],["/categories/ACG/figures/index.html","0431f0375f8534624ba60c6868cda8e2"],["/categories/ACG/index.html","e50cdc0bbd1a029e302d7a428af1bcb1"],["/categories/dev/Front-End-Dev/index.html","c415f5437a4dedc13f0cd9708f18cc4b"],["/categories/dev/HTML-CSS/index.html","7ece74897159fe7df6b487a406484295"],["/categories/dev/android/index.html","9db4994068062b64f233d0a975382408"],["/categories/dev/cpp/index.html","ab2dc166690fa902e11f255bf3d23fc8"],["/categories/dev/git/index.html","86dd6bdabc673c8a45af8ce6cd430eb0"],["/categories/dev/index.html","d5deac3a155ed0ee56fec1063b1f9f6c"],["/categories/dev/java/index.html","903258d874d7ad533de102d358f92da4"],["/categories/dev/page/2/index.html","e736846bd2fc5ad8221446ceb0956530"],["/categories/maintaince/blog-setup/index.html","f0f59aba24f526c3f2c3af41d88b1824"],["/categories/maintaince/index.html","df581a833bcb354fe0579505b0b10162"],["/categories/maintaince/macbook/index.html","f578e16489cd3ef7d9cacc2fee13e645"],["/categories/maintaince/router-config/index.html","6faec4c4eea2262ba338ce04c7d36fdf"],["/categories/notes/index.html","b4b1beb325ed334967923b239b54ed0d"],["/categories/tricks/android/index.html","8b561f90c6a3d8e104f32e7f94f63a4c"],["/categories/tricks/index.html","e0f87d18890d7b1a2c6d8fbb979691b4"],["/categories/uncategorized/index.html","c8f8d652a5ee05e76a4bc0233153c2a4"],["/categories/works/Front-End-Dev/index.html","f9d0da1af820e28095c588c664e3c061"],["/categories/works/csharp-wpf/index.html","cd43d044abcd778171d0dc59f1dc99c9"],["/categories/works/index.html","8f0091922f44b3cf3fe5f29a66745352"],["/css/seichi.css","42693f35c4c482207368dd363ea27373"],["/css/style.css","60adc9c6a69d4d08533bbafd9ebde81f"],["/google311213f0c8d812a9.html","51f1ee3c2f13a21a1a40b3dae4954454"],["/img/coderwall.png","1976fe70f1ee8ed243e0975402e06a2d"],["/img/delicious.png","952d9b54d8bcfe7b998f67ff48c4dbce"],["/img/douban.png","d42a163f932100e621d22732db34ecdb"],["/img/facebook.png","4bd685f6c9fdaccabf07bdd52173facb"],["/img/github.png","3c4b6267a1a3fedebdc7d089610ecfe7"],["/img/google.png","c385f5304465716b2d6c9ada94c657ab"],["/img/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["/img/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["/img/linkedin.png","4c72c4896f3c23f736cb1ad08f0c866e"],["/img/mail.png","38a7b8302dac028bf03b22d228938abf"],["/img/pinboard.png","9b6186cb97adbe50311f94e50f2392cf"],["/img/pinterest.png","e1b8e655d1b99b40ebcbd96977ae234e"],["/img/rss.png","ec8cf9b5a98011aa75cc0a4f25024dc9"],["/img/scrollbar_arrow.png","be5381cedbd6b778b1d92e224fd71cf7"],["/img/stackoverflow.png","039128ececb47b33bccedd98dc9fc809"],["/img/twitter.png","d2289a4936fefa41d9f92cf89939be5b"],["/img/weibo.png","b382032b316ee38c6d537fe9d36ae54c"],["/img/zhihu.png","e6352c0e1957beef3009268ae747c3aa"],["/index.html","0d5b7392c758e606fe9d91b9b1d42703"],["/ja/2015/03/WNDR4300-setup-log/index.html","574aef56208b464274c95d2a8a5e92cd"],["/ja/2015/03/android-hostname-change/index.html","6fdb71ca6c5ffae4991297be2cd60c36"],["/ja/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","53dd713ead311b373c8f5a5eca4f85fc"],["/ja/2015/04/android-chrome-issues-with-webpage/index.html","a0875629a0ea993e3604e6bae208c6c4"],["/ja/2015/04/cpp-study-log/index.html","2b3b92e7927ace178ee1042d97b0b57a"],["/ja/2015/04/github-pages-ssl/index.html","d23c3fdedfabaa64bc05eb7a4584fe18"],["/ja/2015/04/hello-world/index.html","b8090d2dcd9dc6dca14151bfc0d46b06"],["/ja/2015/04/hexo-setup-log/index.html","f60f66027e29f9e63881141023a1f6ab"],["/ja/2015/04/self-copy-cd-inazuma-1-html/index.html","b2b6b212941b1f16a1a80999f09603e5"],["/ja/2015/05/cpp-inherit/index.html","0317a6a84d9295c86c923c14e95add3f"],["/ja/2015/05/cpp-polymorphism/index.html","0ff09ff535417533b86c9b55899dfd7e"],["/ja/2015/09/android-root-ota/index.html","c0b0c141a688e0dc9a4d25ad5e87fd39"],["/ja/2015/09/java-learningNotes-1/index.html","98a34e2749d3e88bc9b588fb96d2a44c"],["/ja/2015/09/newblog-newlife-2015/index.html","e369148dafd991e193c0b2ab6580db67"],["/ja/2015/09/router-rebuild-2015/index.html","19893f2fa3f5c25ab2fd54f4bb1ac99c"],["/ja/2015/12/2015-12-21/index.html","06d135580cb57b65597b3ca5736e7636"],["/ja/2015/12/PixInTouch/index.html","3aacd0b481c3a9de6d6d786f01dd527c"],["/ja/2015/12/git-study-1/index.html","58296f454723c359c546dc93e707a007"],["/ja/2015/12/hexo-backup-and-migrate/index.html","8d872a0669248a6046a6a69104c93983"],["/ja/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","ed3798354617a29c6dfaad5ea4dac3b4"],["/ja/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","e09bed5c9a7a4ca6c637ea042fbc428c"],["/ja/2015/12/router-reconfig-2015/index.html","6165138e84ea3a99ff4215884659d3c9"],["/ja/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","2972df859e4c8d8e6a47149c0d40cae3"],["/ja/2016/01/2016-stepping-further/index.html","5581dbc59cb08d97a41961da5af7ee9a"],["/ja/2016/01/Android-Study-1-22/index.html","80bce54241d7ab749f53d576ed69023d"],["/ja/2016/03/2016-03-20/index.html","dc1d4c4ab4349fb34d1eb5209a79e553"],["/ja/2016/03/GSC-535/index.html","147dd6609c937674147d647078817f54"],["/ja/2016/03/gulpjs-1/index.html","67204df6a6cf74d38d413f025409fcc9"],["/ja/2016/03/hexo-theme-paper-white/index.html","0a95266d7eff66b743849bc1a9f6d1e5"],["/ja/2016/04/2016-04-19/index.html","3284b9e979d7b75632f6c24f271f0ac9"],["/ja/2016/06/2016-06-16/index.html","0504184bca01cf1030de8a15df258857"],["/ja/2016/09/2016-09-18/index.html","237fb9e075250971a0a3e3cf84b98eaf"],["/ja/2016/10/2016-10-27/index.html","4a60113f5de3076c2f44861347388438"],["/ja/2016/12/config-switchresx-and-2khidpi/index.html","a2f948514a0a92ee226c5e9cdf91ab3d"],["/ja/2016/12/improve-duoshuo/index.html","78bc7d1926a7e5d8ffc857e9d824ce9e"],["/ja/2016/12/use-travis-ci-your-blog/index.html","42c866bf6f358da634c5db0182048f00"],["/ja/2017/01/2017-iyahoi/index.html","c2f2be10f5d0dc668ad3701cc558c87c"],["/ja/2017/01/webpack-amd/index.html","90bfdbb77392316f585e4a2e76c3281c"],["/ja/2017/04/kotobukiya-syaoran/index.html","1ef9704edb44c4632b18744104457e15"],["/ja/2017/04/macbook-and-surface/index.html","ccfda2ac88a09c1cf169ac0e98402dd8"],["/ja/2017/04/uc-hyakuya-yuichiro/index.html","e60634d05c0c8413987e0eb15f479597"],["/ja/2017/06/noragami-seichijunrei/index.html","edc285d6546221c20733c82f0d3efae4"],["/ja/2017/08/cross-compile-55-libev/index.html","083207fa606c3cd8852a5635af4f8696"],["/ja/2017/08/explore-service-worker-working-lifetime/index.html","9228ba45185fb0858f5f163f31a5728c"],["/ja/2017/08/hello-jp-world/index.html","caa542f2c7d4cebae999b805273beffb"],["/ja/2017/08/kiminonawa-tokyo-seichijunrei/index.html","6090aba3173206698980df97d066d98c"],["/ja/2017/09/record-user-login-status-methods/index.html","a4ea4c03a165224a8cf0bfd3461a651a"],["/ja/2017/10/vue-typescript-early/index.html","5b7b1a6a76bdde98de377b0a631f104a"],["/ja/2018/04/2017-end/index.html","e75e32f3e99bae5fdf0218015f61bd04"],["/ja/2018/04/twitter-account-activity-api/index.html","1e4cbfdd0d2c58475fad371eb62ef971"],["/ja/2018/05/buddy-complex-seichijunrei/index.html","5151774b9cfad1e6d714641fb75331e9"],["/ja/404.html","1c6c91ca8699b0bbea36dabe697db7a7"],["/ja/about/index.html","c88f9a33b3ac4a833242486d2b013f7b"],["/ja/archives/2017/08/index.html","0da7d534ac9bf8017eb472d10ec3b89e"],["/ja/archives/2017/09/index.html","6c840c41bb8bd37838afb74299218da6"],["/ja/archives/2017/10/index.html","f8164a604f2e8eb74389e8c6c83f2607"],["/ja/archives/2017/index.html","0bff43ff58eb3497d231676a17ea1cef"],["/ja/archives/2018/04/index.html","e80678123cb03e2c18b3b80618538456"],["/ja/archives/2018/05/index.html","e01fa6c55d8c3ab88968cfbae69e0036"],["/ja/archives/2018/index.html","d7f15e5e6fdcbf6909a428caad48db1f"],["/ja/archives/index.html","d340a31ef54d5fa39a09408caf2e00d0"],["/ja/categories/ACG/Travel/index.html","bfc6f68299a83bc46a17198a6ec6c8ee"],["/ja/categories/ACG/index.html","7f619d335b121d3dc2a651cc56e1dbfb"],["/ja/categories/dev/Front-End-Dev/index.html","dbf6f283f17b3d34ec4d6469dd515fd0"],["/ja/categories/dev/index.html","eacfaf889bee09ae893cd8bd2e23bfbe"],["/ja/categories/uncategorized/index.html","e6ea50c09c1b1f947e5d4635b9318f7d"],["/ja/index.html","2fba7af40e66c852fc25f0893756e362"],["/ja/nihongo-test-page/index.html","86cde17fdbc07f58da0b58da13450742"],["/js/instagram.js","7d7a9e2e7286ba2d5b6d12068214f0c3"],["/js/jquery.lazyload.js","28c23bc40080d31144776e9a8736837f"],["/js/main.js","2e92f29b0cd90bddc062915eb46a858c"],["/js/mobile.js","dc84e1287e89e3c1bba67fd47b8656b1"],["/js/nextpageajax.js","c3bde8d7bb1f967fb319f57a187ea51a"],["/js/pc.js","631b535186aab0e262485ee2bf9da628"],["/js/ripple-effects.js","b9c11903da0ef5c3d790b41369c3137e"],["/js/share.js","de52ac3d43e43c1951a08b0804458a8e"],["/js/totop.js","661822968b58fd439f46bd54031238d6"],["/nihongo-test-page/index.html","95a2ed1cf7c53818ecb6cc0cc462e9d9"],["/page/2/index.html","82d3ab84555ed38adb647bd91c30247f"],["/page/3/index.html","7217e7de14b5ee1ecf463236a00d5623"],["/page/4/index.html","a7f77844a04b1444154795d70358cae1"],["/page/5/index.html","0a4bb11a70f75f626ab80dc4bfc93803"],["/page/6/index.html","f5eb31bed2fff890b68c63f1698c6719"],["/photoswipe/default-skin/default-skin.css","426e8908d7426603ca203b6d16281b1e"],["/photoswipe/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photoswipe/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photoswipe/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photoswipe/photoswipe-ui-default.js","0c9196aa8943ce8a8045c9f4cc62915c"],["/photoswipe/photoswipe-ui-default.min.js","9517baca43cd4e9cb23ff337fbc1baa1"],["/photoswipe/photoswipe.css","7dc0df107159e1be66d4464171561e5b"],["/photoswipe/photoswipe.js","a8d26ff34943c859884acbd6b2531315"],["/photoswipe/photoswipe.min.js","f5cd6479c4e4682545a9603e6b50c741"],["/setup-log/blog-setup/github-pages-ssl.html","d5e315a4f7725d0c5a828ab2ac48dfe3"],["/sw-register.js","3cf7cd9345c0f268d35bb8c6962d6934"],["/zh-cn/archives/2015/03/index.html","3cc5aa876d9b831c062e88e05c96ddfb"],["/zh-cn/archives/2015/04/index.html","0b04a6613f69cbcd610f81464c500032"],["/zh-cn/archives/2015/05/index.html","49f2a3e2304487615219d90d4a4bd221"],["/zh-cn/archives/2015/09/index.html","7cf376557b917671bb7f592630a72ef4"],["/zh-cn/archives/2015/12/index.html","63b19975478358a5117a9dd658eda1d0"],["/zh-cn/archives/2015/index.html","0dd9410fdb268f267c36bcfea2123f0a"],["/zh-cn/archives/2015/page/2/index.html","3bfc1295866acf95d1aed5314fc73afa"],["/zh-cn/archives/2015/page/3/index.html","497ffd95c23265cc253fa487ffdaeb4b"],["/zh-cn/archives/2016/01/index.html","83dc72298a64f66586388dfd72a0bffa"],["/zh-cn/archives/2016/03/index.html","9b8de1f97987778607225472ab3c3521"],["/zh-cn/archives/2016/04/index.html","faef8be77b97fd5c088aa4a75acbee1b"],["/zh-cn/archives/2016/06/index.html","661657750c5967345331de22f8e511a1"],["/zh-cn/archives/2016/09/index.html","c61180804b8966bd9abb3b769df29883"],["/zh-cn/archives/2016/10/index.html","e191c4d4d96ae22460fdb045c1823c5b"],["/zh-cn/archives/2016/12/index.html","272cf39034659151ea9c835eee30d430"],["/zh-cn/archives/2016/index.html","cf53f0603d962789b399a10b0d544586"],["/zh-cn/archives/2016/page/2/index.html","518b343b742a5a43c5e5315d8773bf22"],["/zh-cn/archives/2017/01/index.html","3c7bc7b138a5ce74844cdecad5111104"],["/zh-cn/archives/2017/04/index.html","c3f2ae05de970c9744c4e65c8a11414f"],["/zh-cn/archives/2017/06/index.html","005bac168c398013c489c276a2d8eb6d"],["/zh-cn/archives/2017/08/index.html","4ae1d4680d104098c54d3adbd697126b"],["/zh-cn/archives/2017/09/index.html","a3e3483f5118b6587facd621f0637933"],["/zh-cn/archives/2017/10/index.html","086f817ecc9f20acf3447c47a2b2f3cf"],["/zh-cn/archives/2017/index.html","fd708c0d9d816f792e5a7d85f0a519a1"],["/zh-cn/archives/2017/page/2/index.html","82be8e975146f9698717814f28984dd6"],["/zh-cn/archives/2018/04/index.html","2fa72a067f7f8662b0f0d69540b7866e"],["/zh-cn/archives/2018/05/index.html","2a4118dd66c3e1e71dab2a36ad37e773"],["/zh-cn/archives/2018/index.html","0d859bde451c7a5cf659430c7209d659"],["/zh-cn/archives/index.html","3c9e4c0c314dfb90d0172ce8c30347cd"],["/zh-cn/archives/page/2/index.html","33c80211ea8903d79c4ce1d2848a9a0d"],["/zh-cn/archives/page/3/index.html","21bcb641923432231c074822ed673bde"],["/zh-cn/archives/page/4/index.html","9898b9912baf2e361d7b169f84fb6f1d"],["/zh-cn/archives/page/5/index.html","8bcaa260f310033789cfc889db0a99b8"],["/zh-cn/categories/ACG/Music/index.html","17139d5dd4544b1d83d83377684c5b90"],["/zh-cn/categories/ACG/Music/self-copy/index.html","2495a482ca0e95e8e841c0b11a5ecdae"],["/zh-cn/categories/ACG/Travel/index.html","878b2c1980c94b741778ac77f97f5ce5"],["/zh-cn/categories/ACG/figures/index.html","2a90fc170390f21b7d11273ff27ff34b"],["/zh-cn/categories/ACG/index.html","e8c2af5eecf7fe66a548e15e43ac182d"],["/zh-cn/categories/dev/Front-End-Dev/index.html","4b114cca705b15a3eccf71db932cf73e"],["/zh-cn/categories/dev/HTML-CSS/index.html","dc9cedab73e4ded077ff0c22564c0110"],["/zh-cn/categories/dev/android/index.html","9321cc0be8bd511ea377227b176d3d87"],["/zh-cn/categories/dev/cpp/index.html","e831b1bfe70e1445010dfe39d0736860"],["/zh-cn/categories/dev/git/index.html","36d5c5e5867e09deb632e311c146f6eb"],["/zh-cn/categories/dev/index.html","8dbb372fa7c7617b618a2f7ecfe80112"],["/zh-cn/categories/dev/java/index.html","f744d10ec52934f31bd96a5a4ff41d12"],["/zh-cn/categories/dev/page/2/index.html","5686a9c220e80db2f7bb44f067e463ae"],["/zh-cn/categories/maintaince/blog-setup/index.html","14d4cc7a732f2f67dd8b33da47c9576a"],["/zh-cn/categories/maintaince/index.html","782977f453aae67121deff1618a41b12"],["/zh-cn/categories/maintaince/macbook/index.html","d55425519cfe3a768fb86648ad0851bc"],["/zh-cn/categories/maintaince/router-config/index.html","b32fc5f1fa6fc42328a8a77a2807bde6"],["/zh-cn/categories/notes/index.html","3de469dbacc5b028600f9d23e4d8dfbf"],["/zh-cn/categories/tricks/android/index.html","6ad520b95637ce7d11e5eff07796cce7"],["/zh-cn/categories/tricks/index.html","6fa1078bc0ac0da3c836b13809cb723e"],["/zh-cn/categories/uncategorized/index.html","b3636932f7e1bdfc6ca053c97f58a0a7"],["/zh-cn/categories/works/Front-End-Dev/index.html","dc421c3335a722e892612a39c80f8f27"],["/zh-cn/categories/works/csharp-wpf/index.html","bb640f0a8be9d1624c422817a9c0502f"],["/zh-cn/categories/works/index.html","fa28f66dd5de8e44a92b7a7e5b4c28a3"],["/zh-cn/index.html","8c4601cae5f6b1dd23dd6e1b766ac526"],["/zh-cn/page/2/index.html","0af86320f5592ee1fb6ab233d9db590f"],["/zh-cn/page/3/index.html","ad6a9eafb7f710840a44361f3d8f28c9"],["/zh-cn/page/4/index.html","9228d865715ac8c47a83b25a1b871df4"],["/zh-cn/page/5/index.html","df66e18c121a2fdde3e7e90f23361b0b"]];
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
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"dn-xingoxu.qbox.me"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"od8634671.qnssl.com"});





/* eslint-enable */
