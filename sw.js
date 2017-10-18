/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/03/WNDR4300-setup-log/index.html","d4c841911e47a857caed67a367611142"],["/2015/03/android-hostname-change/index.html","a7d10d909f033b5a74b0b04951a22553"],["/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","60962093836064b2570a2a69c9df06b3"],["/2015/04/android-chrome-issues-with-webpage/index.html","29d2fb44a91761506d77ec88b14bbe0e"],["/2015/04/cpp-study-log/index.html","99b18084bbf2e50573494627cec5840e"],["/2015/04/github-pages-ssl/index.html","d7d6ad77e92dbb512c86353d174b79a2"],["/2015/04/hello-world/index.html","b051dcdad87c62867746fe99efb97199"],["/2015/04/hexo-setup-log/index.html","f22373eae60a1dbda7fc7bce7b273aff"],["/2015/04/self-copy-cd-inazuma-1-html/index.html","c328474580c4c7a0bd213b4866bfd4a9"],["/2015/05/cpp-inherit/index.html","f379ca24d378ca5e2986455571c87914"],["/2015/05/cpp-polymorphism/index.html","f7fddcb756bc7b73e5b874db3f0bc999"],["/2015/09/android-root-ota/index.html","04e83779313d6dcb70a6cff0c824895b"],["/2015/09/java-learningNotes-1/index.html","2c431a74e1e5948ed24a8b4634ac562b"],["/2015/09/newblog-newlife-2015/index.html","bcf0011f69250aa104f9f67b128f50de"],["/2015/09/router-rebuild-2015/index.html","45746a434a87504ecdefd2b49d0d976d"],["/2015/12/2015-12-21/index.html","bce9e8eeebc6fae51f8a35aac6f4930e"],["/2015/12/PixInTouch/index.html","7e17bcb5200615fff35bd6e8e822dbd5"],["/2015/12/git-study-1/index.html","059cd982e1f84ce4e1ff8e786540f0a1"],["/2015/12/hexo-backup-and-migrate/index.html","063d2dabeb868bec7306acd4318bb3bc"],["/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","d963dc39b1064bafd3a36a75320069fb"],["/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","4f48092812389fc952325535da2d3c84"],["/2015/12/router-reconfig-2015/index.html","9fc533cfd52a1cbf34382ca45e8422c3"],["/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","9d960b275428fd44ee48f11d558ee956"],["/2016/01/2016-stepping-further/index.html","d52d97efbe0d2ee855272a878faf10c0"],["/2016/01/Android-Study-1-22/index.html","3f1982d67292d9107e988762ed041c00"],["/2016/03/2016-03-20/index.html","3f474677d95818f0bd8d850ec47c6519"],["/2016/03/GSC-535/index.html","bc35214701c36a9ef1a8c5498fcb5976"],["/2016/03/gulpjs-1/index.html","c0c596d9440b9e66c4f891d37accc0f3"],["/2016/03/hexo-theme-paper-white/index.html","a9d15b8799214d2496b82b712118d449"],["/2016/04/2016-04-19/index.html","5961caa9f073ae8c0ef71099a7275916"],["/2016/06/2016-06-16/index.html","cc0634395d29a87a1f35004387ab336e"],["/2016/09/2016-09-18/index.html","b9017359693ed369cd0893ee3a04bbd4"],["/2016/10/2016-10-27/index.html","86582fcdbf15d50be54f6da64dbb2310"],["/2016/12/config-switchresx-and-2khidpi/index.html","d619d604253304af8910e75d92862912"],["/2016/12/improve-duoshuo/index.html","17372d3056fda5c583f7969bd2455553"],["/2016/12/use-travis-ci-your-blog/index.html","ee82bf30de732f79926d78af54a89112"],["/2017/01/2017-iyahoi/index.html","0e5fb7de6c31e2733bb0e2fb0cd1faaa"],["/2017/01/webpack-amd/index.html","957e7a4eca6958f9dd871891324e67c1"],["/2017/04/kotobukiya-syaoran/index.html","1dc36052b2bd8c965fc974de4b4d18a9"],["/2017/04/macbook-and-surface/index.html","83fc3d13febc0d2cae0002e1d07af52f"],["/2017/04/uc-hyakuya-yuichiro/index.html","1e3508fb42bf886fc037010d8cbfb203"],["/2017/06/noragami-seichijunrei/index.html","651761bab20f7fab5d0dedf724aa5212"],["/2017/08/cross-compile-55-libev/index.html","05818514b322914c7b634a3594d41e18"],["/2017/08/explore-service-worker-working-lifetime/index.html","a6be6351cebf17e3b7acad5d584d46fa"],["/2017/08/kiminonawa-tokyo-seichijunrei/index.html","c66083b4a908239a23a1d963ecc5912a"],["/2017/09/record-user-login-status-methods/index.html","c0492be685b9c8c05f405800b88edc76"],["/2017/10/vue-typescript-early/index.html","1220d7bf476be2f59b9b4088468d27e8"],["/404.html","9f30d1fecc4428f05f76a9ebcb64dd62"],["/about/index.html","c4d1aecad8db6967bf84cceb8ffdfbeb"],["/archives/2015/03/index.html","a781813d14934654fba7f65e7d3ac4cd"],["/archives/2015/04/index.html","64a921fb8d41093c0819a98a836f2417"],["/archives/2015/05/index.html","7f296a7a7eb1b7868b3add54a8ee96fb"],["/archives/2015/09/index.html","d836f5093aa3fa545ab2f7da64525d2b"],["/archives/2015/12/index.html","ded4458c77ba2bb1bf06f117ed35034e"],["/archives/2015/index.html","e06e3ed18a3016d3be666813884a08bd"],["/archives/2015/page/2/index.html","0c82a9c2c2f90187a63d6700048b67fc"],["/archives/2015/page/3/index.html","1febcdf8766a2e88779a68e241eebc93"],["/archives/2016/01/index.html","de20f3c1fbfe3f18bda1dc3a53aae939"],["/archives/2016/03/index.html","8707c44ce29d0702a4de0b818216141f"],["/archives/2016/04/index.html","9437f367c2ee79142c9c93da1bb068e1"],["/archives/2016/06/index.html","a821bf080b4c843011573b484fbbfc6f"],["/archives/2016/09/index.html","a465767863839cba3cc3b09507ef9717"],["/archives/2016/10/index.html","e17771c59ae5d1077f8e9d5b3129a19d"],["/archives/2016/12/index.html","7a58e3a27ec73142cddb50659db81f92"],["/archives/2016/index.html","e4844282d22610320b048e7897107cab"],["/archives/2016/page/2/index.html","3bf5a68d1864a3284a0d4689e4ba2976"],["/archives/2017/01/index.html","ab72efbb476c0ee27ac0820ef7d44191"],["/archives/2017/04/index.html","844776e031825ee4e2a3f474a2be0041"],["/archives/2017/06/index.html","bd4f652dce5d0e94bfaea3fd4220276b"],["/archives/2017/08/index.html","ae42565cfe69d1a5b5e438b3288096fe"],["/archives/2017/09/index.html","098248a471fc4287644fa72fcd36d04b"],["/archives/2017/10/index.html","c48166dae9f743d89b80841a6e869edd"],["/archives/2017/index.html","7956928f4bbb518700bf99a6572ab7df"],["/archives/2017/page/2/index.html","545884ae983cccf7faedaf7296649372"],["/archives/index.html","d93f29a53d0a2cf9d671d244c8244a04"],["/archives/page/2/index.html","2aad3aba5fe839a89cb3135c613f830c"],["/archives/page/3/index.html","8144479ed4305247fa62b4b7d46059b2"],["/archives/page/4/index.html","2023839fe3e1481e5200228b8e134183"],["/archives/page/5/index.html","8cb024b980cb51bd9b8133660fcea6db"],["/assets/images/about-me.png","a066d06c3d9d1fe56c4d921cec7febf3"],["/baidu_verify_YbTSlpWIUJ.html","779049c3a50695ceb3a388ce1e8bc1b9"],["/categories/ACG/Music/index.html","0efdbb016be1cec713b8a0789a64d704"],["/categories/ACG/Music/self-copy/index.html","6c9126f1e434799e23e6a5bdb9b75e1a"],["/categories/ACG/Travel/index.html","bc1298ac4b4ca16339421a3e75398bee"],["/categories/ACG/figures/index.html","05cfb3ca5f3f5c32536e5215d3be9b74"],["/categories/ACG/index.html","181fedb646f641e5675a51b135b85aff"],["/categories/dev/Front-End-Dev/index.html","b72567aa7944bb44cbf1f263788a0c7b"],["/categories/dev/HTML-CSS/index.html","c0d6e250051d70ab677c4f7057e8dab4"],["/categories/dev/android/index.html","903f99629967ec8fdeb8f5eb804e92f2"],["/categories/dev/cpp/index.html","074959a19c246f263d6d7f16a69e463d"],["/categories/dev/git/index.html","c23e314137e907af38f2125b61675cef"],["/categories/dev/index.html","c424ce0c0e765b726080b8183fd5bd31"],["/categories/dev/java/index.html","0e3634a66e8118c74ebde817a0cb760f"],["/categories/dev/page/2/index.html","a400aaaa6a87dee29576977edd5488b9"],["/categories/maintaince/blog-setup/index.html","e01c81847418a22308fdb99a5f7a6f2e"],["/categories/maintaince/index.html","f405cf2343e461a17ab546e5586318b9"],["/categories/maintaince/macbook/index.html","688f5b7aec37548cfd3ada4230d50994"],["/categories/maintaince/router-config/index.html","e59f41edcd7904d3dae7f717d297762b"],["/categories/notes/index.html","84916cfd25c9e67dbf2b785cde1cf6b2"],["/categories/tricks/android/index.html","83bbe2aa8798311535b9dea57b901ea8"],["/categories/tricks/index.html","bb70b14b4b50a08a33694e78ae374c7b"],["/categories/uncategorized/index.html","658306b932efe1f07bbb3c0ba4a4f195"],["/categories/works/Front-End-Dev/index.html","8e2c900bd9a12127d156bdb18dc1ad3d"],["/categories/works/csharp-wpf/index.html","b8c7b6e79df487f7807e12979958dd3a"],["/categories/works/index.html","bfe297876d97dac270419a6a77b0b452"],["/css/seichi.css","42693f35c4c482207368dd363ea27373"],["/css/style.css","a81f79e7bf311785886f2c1c31c8e4d4"],["/google311213f0c8d812a9.html","51f1ee3c2f13a21a1a40b3dae4954454"],["/img/coderwall.png","1976fe70f1ee8ed243e0975402e06a2d"],["/img/delicious.png","952d9b54d8bcfe7b998f67ff48c4dbce"],["/img/douban.png","d42a163f932100e621d22732db34ecdb"],["/img/facebook.png","4bd685f6c9fdaccabf07bdd52173facb"],["/img/github.png","3c4b6267a1a3fedebdc7d089610ecfe7"],["/img/google.png","c385f5304465716b2d6c9ada94c657ab"],["/img/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["/img/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["/img/linkedin.png","4c72c4896f3c23f736cb1ad08f0c866e"],["/img/mail.png","38a7b8302dac028bf03b22d228938abf"],["/img/pinboard.png","9b6186cb97adbe50311f94e50f2392cf"],["/img/pinterest.png","e1b8e655d1b99b40ebcbd96977ae234e"],["/img/rss.png","ec8cf9b5a98011aa75cc0a4f25024dc9"],["/img/scrollbar_arrow.png","be5381cedbd6b778b1d92e224fd71cf7"],["/img/stackoverflow.png","039128ececb47b33bccedd98dc9fc809"],["/img/twitter.png","d2289a4936fefa41d9f92cf89939be5b"],["/img/weibo.png","b382032b316ee38c6d537fe9d36ae54c"],["/img/zhihu.png","e6352c0e1957beef3009268ae747c3aa"],["/index.html","32adb0109b52f7abe87aa45e75b067ac"],["/ja/2015/03/WNDR4300-setup-log/index.html","8776b744c52d1096c411b09f37da9671"],["/ja/2015/03/android-hostname-change/index.html","51d65b305f1d703accdf22bc4c06d823"],["/ja/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","f5960c00702e10674ea9b7ab7393e249"],["/ja/2015/04/android-chrome-issues-with-webpage/index.html","7b2277c753755fdadd4ee40c3886556f"],["/ja/2015/04/cpp-study-log/index.html","303b35525f1c2415969d8923e8a20803"],["/ja/2015/04/github-pages-ssl/index.html","dd0be427e949114d727b5665599ebc6b"],["/ja/2015/04/hello-world/index.html","e88d0ada96a9075dfe2d52fdba783aa8"],["/ja/2015/04/hexo-setup-log/index.html","cbf28c3a5e2968f68d2977395f900b3c"],["/ja/2015/04/self-copy-cd-inazuma-1-html/index.html","c5d16dc93a53effff298705a755f7665"],["/ja/2015/05/cpp-inherit/index.html","45670ab2ed4ad549501ff742a3bca501"],["/ja/2015/05/cpp-polymorphism/index.html","c62c3459a9b64e5cc816e88057e6abd4"],["/ja/2015/09/android-root-ota/index.html","f695ffe10f7213d467758ab50bc378e6"],["/ja/2015/09/java-learningNotes-1/index.html","10bea07e31386e1c0f7b063dce2b0dd0"],["/ja/2015/09/newblog-newlife-2015/index.html","a921b09249fd2a7bc4c200c35bb6783e"],["/ja/2015/09/router-rebuild-2015/index.html","3872fafcd10f04218e5dc0f749afa87c"],["/ja/2015/12/2015-12-21/index.html","66e6f34d295d6ca3caa37aa73b4735b8"],["/ja/2015/12/PixInTouch/index.html","9e30ccd3cf1b1bcf0d14d5a817b59884"],["/ja/2015/12/git-study-1/index.html","f9592b9f31afdbbef56a940be6a37990"],["/ja/2015/12/hexo-backup-and-migrate/index.html","2f209d13e52d693b9f876d6f20a0cafd"],["/ja/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","a2e543ad107f6c85c051e3eaa1f5b359"],["/ja/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","4e34fd01a36c77bc5787064103a605f9"],["/ja/2015/12/router-reconfig-2015/index.html","05226c0dbc1076dc4c2b84e139c39222"],["/ja/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","044cd4bb72b568e65bce99df910cc577"],["/ja/2016/01/2016-stepping-further/index.html","774b6c81f82fc11c6e69f7787bac859c"],["/ja/2016/01/Android-Study-1-22/index.html","c222d87655b7a2ac3f380a1ea912f440"],["/ja/2016/03/2016-03-20/index.html","56b098f6c7b560995f9802a853863a8d"],["/ja/2016/03/GSC-535/index.html","33031508d3981edcf0f3c42400966565"],["/ja/2016/03/gulpjs-1/index.html","da90ec0550aa2a3422f7c6899cb020e9"],["/ja/2016/03/hexo-theme-paper-white/index.html","90c09732c967f97c1425c9ba758b43ba"],["/ja/2016/04/2016-04-19/index.html","1b29d9b1b928666f1f1dff9f92bfbb66"],["/ja/2016/06/2016-06-16/index.html","43131d5d53b6ae12b36f07c0a972a6c4"],["/ja/2016/09/2016-09-18/index.html","200d19fe1dda094bb9cc1a17a0aa5c27"],["/ja/2016/10/2016-10-27/index.html","7ec00a75e0d87478efa02c51466271dc"],["/ja/2016/12/config-switchresx-and-2khidpi/index.html","bee73cddc36b28cb394b31392584d99f"],["/ja/2016/12/improve-duoshuo/index.html","b371a97930f8f320e0b5d6955fe3dd12"],["/ja/2016/12/use-travis-ci-your-blog/index.html","7ba3cc34c124d30b0c7114cd20b9f610"],["/ja/2017/01/2017-iyahoi/index.html","56aaeb3d4bd116dd4b02ffbdf44306a2"],["/ja/2017/01/webpack-amd/index.html","0e36a506a9dfae728730c27715d56f0b"],["/ja/2017/04/kotobukiya-syaoran/index.html","d27766e1e31b540d8c5530abaa5b4595"],["/ja/2017/04/macbook-and-surface/index.html","8f8ba7525e465e6c2c43bdd5b942e92b"],["/ja/2017/04/uc-hyakuya-yuichiro/index.html","4d36a69ede33000577f4084eb816b0d6"],["/ja/2017/06/noragami-seichijunrei/index.html","1b6aedf66f80de596f6935e3ebe29588"],["/ja/2017/08/cross-compile-55-libev/index.html","b193ea329966b9514949cf7b7c38873c"],["/ja/2017/08/explore-service-worker-working-lifetime/index.html","d0b5d366a1553b9bf25bdc7c915bd118"],["/ja/2017/08/hello-jp-world/index.html","c4dd80f408d0ea093a051e4360a82b65"],["/ja/2017/08/kiminonawa-tokyo-seichijunrei/index.html","4c63da14c4b4e08bd7630c0060b3d4a8"],["/ja/2017/09/record-user-login-status-methods/index.html","2ae5b31ef82309f04f6355e4026dfe87"],["/ja/2017/10/vue-typescript-early/index.html","82c58a665fe44785e0eb5d437f0acb6a"],["/ja/404.html","2b27c1423d8bb9ba21e9a5872da576c7"],["/ja/about/index.html","61bf08be8632a94852bd02369e2fb5b9"],["/ja/archives/2017/08/index.html","95f9ef8282ed7f457687e6e6465b516b"],["/ja/archives/2017/09/index.html","49f68ea2d1e563ff8ec423e3a18ad20c"],["/ja/archives/2017/10/index.html","34b63c7bbaad2df90d155924ba311651"],["/ja/archives/2017/index.html","9375c1adde657d358bc588966c769a44"],["/ja/archives/index.html","0f669b9d181d0d574702b90b43adc39a"],["/ja/categories/dev/Front-End-Dev/index.html","fe2eae80fbf4af2f3178348b09ed7dc3"],["/ja/categories/dev/index.html","683c6ae4991745e1c1f0043935620dc3"],["/ja/categories/uncategorized/index.html","848e098fa3783d8cddea2588424a739e"],["/ja/index.html","bd11949c1818199d3e8835f5a3e82e5c"],["/ja/nihongo-test-page/index.html","4f47af618e40feb2f44ff8a4b2975729"],["/ja/resume/index.html","c7f378b03407e2ac19303c2a16872549"],["/js/instagram.js","7d7a9e2e7286ba2d5b6d12068214f0c3"],["/js/jquery.lazyload.js","28c23bc40080d31144776e9a8736837f"],["/js/main.js","2e92f29b0cd90bddc062915eb46a858c"],["/js/mobile.js","dc84e1287e89e3c1bba67fd47b8656b1"],["/js/nextpageajax.js","c3bde8d7bb1f967fb319f57a187ea51a"],["/js/pc.js","631b535186aab0e262485ee2bf9da628"],["/js/ripple-effects.js","b9c11903da0ef5c3d790b41369c3137e"],["/js/share.js","de52ac3d43e43c1951a08b0804458a8e"],["/js/totop.js","661822968b58fd439f46bd54031238d6"],["/nihongo-test-page/index.html","808dcf6eddeac717688a5b93335b0ebe"],["/page/2/index.html","f13128566355d99d5db14b535f4bfe9f"],["/page/3/index.html","e12110cf8735fb37deb0bf7c979b02b1"],["/page/4/index.html","6cd8b070a82de94100f49f65d2f2b641"],["/page/5/index.html","706103fafbce203535211885190a65b0"],["/photoswipe/default-skin/default-skin.css","426e8908d7426603ca203b6d16281b1e"],["/photoswipe/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photoswipe/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photoswipe/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photoswipe/photoswipe-ui-default.js","0c9196aa8943ce8a8045c9f4cc62915c"],["/photoswipe/photoswipe-ui-default.min.js","9517baca43cd4e9cb23ff337fbc1baa1"],["/photoswipe/photoswipe.css","7dc0df107159e1be66d4464171561e5b"],["/photoswipe/photoswipe.js","a8d26ff34943c859884acbd6b2531315"],["/photoswipe/photoswipe.min.js","f5cd6479c4e4682545a9603e6b50c741"],["/setup-log/blog-setup/github-pages-ssl.html","d5e315a4f7725d0c5a828ab2ac48dfe3"],["/sw-register.js","a03dcd346fe6604fd74951e6cce0ab5c"],["/zh-cn/archives/2015/03/index.html","cdfceb31a8e7e99a0618c31a033813a9"],["/zh-cn/archives/2015/04/index.html","6488a7918603c73e16351a6462f07b5b"],["/zh-cn/archives/2015/05/index.html","926a00e9388a0a8fd3832dabfb9e0f76"],["/zh-cn/archives/2015/09/index.html","7e22f3b3249f07ffeb81418c67c5df9f"],["/zh-cn/archives/2015/12/index.html","51cd60e513a582cc7414890239da8b14"],["/zh-cn/archives/2015/index.html","877fb5588dc6c948db0eaa15b6643e45"],["/zh-cn/archives/2015/page/2/index.html","d67984cbb86b790c81d46f89fdd7e783"],["/zh-cn/archives/2015/page/3/index.html","1697038eeb92d0ff32254da90ad9c5b2"],["/zh-cn/archives/2016/01/index.html","b57d066afa9af6f2f6955c10e0b44c25"],["/zh-cn/archives/2016/03/index.html","31313a78ddb0c444ec3527eba3b6cb24"],["/zh-cn/archives/2016/04/index.html","60454c2b891b2e70eac5975d8f04da28"],["/zh-cn/archives/2016/06/index.html","cb3ebc81859d663391c200306a41e687"],["/zh-cn/archives/2016/09/index.html","9a1dc633a513e2a254eaa86c4ce0de89"],["/zh-cn/archives/2016/10/index.html","71d5fbbe6948e113f3d8cf782a05ed72"],["/zh-cn/archives/2016/12/index.html","dc83300c4ebf8091b473f26cb96eb418"],["/zh-cn/archives/2016/index.html","fb3e782e45be635199afddeb85e2c6f8"],["/zh-cn/archives/2016/page/2/index.html","7eb64fa4a9cd83b22f4c56ef15d621c2"],["/zh-cn/archives/2017/01/index.html","518c10df624f6bf09e5a0d884cc6b7fc"],["/zh-cn/archives/2017/04/index.html","89d6cc47b8f0e3fbd6a64fd557b6ed3c"],["/zh-cn/archives/2017/06/index.html","ae4ebf0da63fe6fbeadc326e2ed63533"],["/zh-cn/archives/2017/08/index.html","6f0267d009a5d9cca58dcc44ed8f6298"],["/zh-cn/archives/2017/09/index.html","79929d7705079832f98858da7fddf21f"],["/zh-cn/archives/2017/10/index.html","8950360449885dea2ef9acbeb6c0ed2c"],["/zh-cn/archives/2017/index.html","2c4215595a9468240ff58c4217fada64"],["/zh-cn/archives/2017/page/2/index.html","7e2dda1d2a94efaf33749f19ede135da"],["/zh-cn/archives/index.html","224931b6835ca72a116c4684519cdb7f"],["/zh-cn/archives/page/2/index.html","48b3078132aceb718ae99b558c316b62"],["/zh-cn/archives/page/3/index.html","ff6837fe956eba769ac61bb110bb3d3d"],["/zh-cn/archives/page/4/index.html","78e9c162cec6935a3c3c06ced98b1604"],["/zh-cn/archives/page/5/index.html","426a7842e3de5b9f719bcd3bb602ea9d"],["/zh-cn/categories/ACG/Music/index.html","5aeb8953390a460d6e3b2b7a9b04c9fa"],["/zh-cn/categories/ACG/Music/self-copy/index.html","07148c15ac1bb47ad0c44e7489feda4d"],["/zh-cn/categories/ACG/Travel/index.html","44631452e37f5a0c515cc079bc3dc8ec"],["/zh-cn/categories/ACG/figures/index.html","72f46421cee6f389300f9749ee9c504d"],["/zh-cn/categories/ACG/index.html","66209ae5695a0ca6fab2f0b5f13487eb"],["/zh-cn/categories/dev/Front-End-Dev/index.html","5b526eb5975d07d602f9002e9bcb7f22"],["/zh-cn/categories/dev/HTML-CSS/index.html","cd11b90d2deb37a1503b1668774d3bd2"],["/zh-cn/categories/dev/android/index.html","fdfa4c0369fde68d7ebee3af9e877b35"],["/zh-cn/categories/dev/cpp/index.html","236caae06e3fb784e4a8284aee1e5ce0"],["/zh-cn/categories/dev/git/index.html","60c6135d90eb92f25bd25b02b210d304"],["/zh-cn/categories/dev/index.html","84be5c6067f13dfd0e28d3077a0b99e9"],["/zh-cn/categories/dev/java/index.html","afacddaa1095b085421c420aef249d3e"],["/zh-cn/categories/dev/page/2/index.html","d8c350a68246a1e72ae455bec7cc7f36"],["/zh-cn/categories/maintaince/blog-setup/index.html","f99bd6115720f68ef2a711710878e6ba"],["/zh-cn/categories/maintaince/index.html","2af9aeb13d9548e90f30a80aebdc19c7"],["/zh-cn/categories/maintaince/macbook/index.html","bdf1df4fffb29614b25c07b28ddad64a"],["/zh-cn/categories/maintaince/router-config/index.html","941a64cd8b59e3e0bfafd14796f28275"],["/zh-cn/categories/notes/index.html","8b89c7656568f6df23ff71acec8afc68"],["/zh-cn/categories/tricks/android/index.html","587df71cbfa5346024366d8cde0723a0"],["/zh-cn/categories/tricks/index.html","8f8055d2fadc6550d11bcfcd29e6d369"],["/zh-cn/categories/uncategorized/index.html","8a808be5af743a01d8d9a5027787a2f7"],["/zh-cn/categories/works/Front-End-Dev/index.html","e2c5d459f29e64234a4b6deead45e76b"],["/zh-cn/categories/works/csharp-wpf/index.html","9784d97247fe93e61bbbdaa88e859584"],["/zh-cn/categories/works/index.html","7287fd7534497797d9e5a058b1e67e04"],["/zh-cn/index.html","7ad819c9577a895e11d26f8fc6232f6b"],["/zh-cn/page/2/index.html","01757668d565792f3ffa7bd6f549989a"],["/zh-cn/page/3/index.html","42f98e7cb2f23f448f38ff63ce9231ad"],["/zh-cn/page/4/index.html","d0db1eab04becf5645fd5e5e461a72d2"],["/zh-cn/page/5/index.html","90d23e26698b5fcf36b4d188e80dc930"]];
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
