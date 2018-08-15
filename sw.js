/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/03/WNDR4300-setup-log/index.html","a5ee3d006bc7e2dafd09d34be0927a68"],["/2015/03/android-hostname-change/index.html","295f46e66b66a55c84e11e8abd784d4a"],["/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","7cbaaf09bdf457dbc753d86cc0c32471"],["/2015/04/android-chrome-issues-with-webpage/index.html","7aa487be4d22ba14acb5fde159264b58"],["/2015/04/cpp-study-log/index.html","5e77cee232ebecefe16d73f2603eaa9c"],["/2015/04/github-pages-ssl/index.html","27481b98305aab0fdac436a5f5b352a9"],["/2015/04/hello-world/index.html","a45b6b8c2bf8a691f46c136fec00cb06"],["/2015/04/hexo-setup-log/index.html","585a30922cc1de24ec90ec7e58324190"],["/2015/04/self-copy-cd-inazuma-1-html/index.html","a6642b28f7b8bbc78527f9956fc7ec69"],["/2015/05/cpp-inherit/index.html","099826b7cd8fbc8fc9045f5c67163117"],["/2015/05/cpp-polymorphism/index.html","edc10967ae4a251e9df660bfdd6ce67c"],["/2015/09/android-root-ota/index.html","3422bc99a02ca744ed37304c81fc3a6f"],["/2015/09/java-learningNotes-1/index.html","6dfd925da2deb1ab8cbe3c071b3a3d7c"],["/2015/09/newblog-newlife-2015/index.html","5817a2d9e4fa66887d21c4f04d33c945"],["/2015/09/router-rebuild-2015/index.html","0b72e7e72ec44017fbd3bf60c0c71519"],["/2015/12/2015-12-21/index.html","f9fa1f24253cdaea80ae607ac0373d25"],["/2015/12/PixInTouch/index.html","8da0993e3545225666a6771eff64f225"],["/2015/12/git-study-1/index.html","c36e479997edaf57ff9d9962c44b106f"],["/2015/12/hexo-backup-and-migrate/index.html","5a72383588718a3474e7642a91f40ca4"],["/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","075eaf9f4bc7e27e4d71f2fdd4d896ad"],["/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","736dc703912cf613387b51fbb186e29a"],["/2015/12/router-reconfig-2015/index.html","f42e1b3346ada7e6cf2769769cd1e763"],["/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","44effd1571f2e20ad2f787e9fe55749d"],["/2016/01/2016-stepping-further/index.html","518aae31fc656a2f188247faac2b4fe8"],["/2016/01/Android-Study-1-22/index.html","260c36327a3b4f1b4ac235a743424add"],["/2016/03/2016-03-20/index.html","6007a3af5794f695db772d75bc277c94"],["/2016/03/GSC-535/index.html","f767377a0905813f2e64c98d1fe1d1e4"],["/2016/03/gulpjs-1/index.html","1af359fe004d0cabdaed30c2477a7708"],["/2016/03/hexo-theme-paper-white/index.html","b64b518c6de589f2edc7f90db0f64c04"],["/2016/04/2016-04-19/index.html","1aea33824eeb28b909fe72cde01ed41f"],["/2016/06/2016-06-16/index.html","2ae87d4736212e06e525b98709ab4c7f"],["/2016/09/2016-09-18/index.html","1ddb9b0f745eceb4cf3d37a4a648f4df"],["/2016/10/2016-10-27/index.html","76537629ec77eb7f9cced5f10f171663"],["/2016/12/config-switchresx-and-2khidpi/index.html","ab5beb9e16eb2a9e3b30baa75d2b75d7"],["/2016/12/improve-duoshuo/index.html","7af053bfda6786a96815fa0ef2b2f272"],["/2016/12/use-travis-ci-your-blog/index.html","745ff80874c0537cee61bbcdc0b28e81"],["/2017/01/2017-iyahoi/index.html","aad3268c3d3a5ae8effe73cc38142a6d"],["/2017/01/webpack-amd/index.html","6823d565f69a241ffc130afd57a974cb"],["/2017/04/kotobukiya-syaoran/index.html","a5efbdeec6310699da36cd98a8a72179"],["/2017/04/macbook-and-surface/index.html","1459f0630a90786b2ec1c7565db57329"],["/2017/04/uc-hyakuya-yuichiro/index.html","9094ad890901256fd54cbab72eebd457"],["/2017/06/noragami-seichijunrei/index.html","1a0662ea15fca4c9d4d1abb35a183e75"],["/2017/08/cross-compile-55-libev/index.html","e7e43f3d6f650149a22704fafbe0ca14"],["/2017/08/explore-service-worker-working-lifetime/index.html","2bc9634c8530ca943c5041813d22a335"],["/2017/08/kiminonawa-tokyo-seichijunrei/index.html","9606030b7e49d55eddebf9de0d7ebb39"],["/2017/09/record-user-login-status-methods/index.html","e57b71b83ff22b8572b881aa5f9b4f3a"],["/2017/10/vue-typescript-early/index.html","9fcd11cabb2edf78a92ba9b68287b6ba"],["/2018/04/2017-end/index.html","36f7e015f0c48dc05c633e79319b1aa8"],["/2018/04/twitter-account-activity-api/index.html","027a99715c07a47f27cd85e4ae49eb90"],["/2018/05/buddy-complex-seichijunrei/index.html","1e1868787d992be14eb3bc980065ead7"],["/404.html","693344e2f5a9ce83477efc7dbd60c8fc"],["/about/index.html","e4cca51e55e1f5f29b47cb487fbfd136"],["/archives/2015/03/index.html","e93b262a7ab5f8253e46704c74c979ab"],["/archives/2015/04/index.html","523a2a0f9e98da5ceb38f589a8eaed3a"],["/archives/2015/05/index.html","2814c20f633ad7dcaa5d78bc519250eb"],["/archives/2015/09/index.html","c30c93bdcf9156b1157406413c1cc72d"],["/archives/2015/12/index.html","72d26fb9a7558737648670a36b6f0a31"],["/archives/2015/index.html","be0e12253303d004c3662a6adff881eb"],["/archives/2015/page/2/index.html","ebf3202497362b3a96e2e70af859c521"],["/archives/2015/page/3/index.html","34e6357eac37f3c4a9c129a70c389156"],["/archives/2016/01/index.html","784b0c7989936f4cb7b5d94b88b34ba6"],["/archives/2016/03/index.html","d46298bcf3380470cf75c3cfcde53778"],["/archives/2016/04/index.html","fe4aa1d9bb92c1fd9d4dba6e2116ba38"],["/archives/2016/06/index.html","51e17644f4a2add05071ad780d03c8e6"],["/archives/2016/09/index.html","e8b64800c9afe86f9de3be11c892e5c3"],["/archives/2016/10/index.html","4cf1afd4ac1c8503139f886ccb799c5c"],["/archives/2016/12/index.html","ce4b35ad2ed34f8f4c986f8966d29224"],["/archives/2016/index.html","3e89261d370bbbbb9eb6b925f3d86f5e"],["/archives/2016/page/2/index.html","a9e84914a7150a1c3ab470b41b455f08"],["/archives/2017/01/index.html","f31cc63406a17be5758c524fce64419d"],["/archives/2017/04/index.html","5a0f6e17ff3a91412a23406b924a81fe"],["/archives/2017/06/index.html","954c4b67dcbb4d424f015bf5f5ee7b41"],["/archives/2017/08/index.html","5c43d1957b8db60a43423acbfa4c3641"],["/archives/2017/09/index.html","a0505a400da2a260da45e1bd4ab82641"],["/archives/2017/10/index.html","796ae0e1f0968384a623582042ad6a76"],["/archives/2017/index.html","a1b4d3b4771de3df545fdd043f3fdc59"],["/archives/2017/page/2/index.html","38da553da583fe52620874e164455897"],["/archives/2018/04/index.html","75cb86558e499bbd3b4ea764d9548caf"],["/archives/2018/05/index.html","e97c0a28c1b0a4af49b427bdb569cbee"],["/archives/2018/index.html","31fe3f802bcc30018fd6895091460392"],["/archives/index.html","e48963d568e0c2ec608c93b4db0dbf9d"],["/archives/page/2/index.html","2a854e5082ddb2d2ba0613301d8b89c5"],["/archives/page/3/index.html","1b457b1a9c77eed7448936f2b3e358d9"],["/archives/page/4/index.html","fca0a969e57cdde32f4491d5c860e9fa"],["/archives/page/5/index.html","3dc88693b6d1a0fcc6589be2c1df6344"],["/assets/images/about-me.png","a066d06c3d9d1fe56c4d921cec7febf3"],["/baidu_verify_YbTSlpWIUJ.html","779049c3a50695ceb3a388ce1e8bc1b9"],["/categories/ACG/Music/index.html","b2e0b1b98f9fc03fe1675232d08d38ca"],["/categories/ACG/Music/self-copy/index.html","83964db4055d86712a861d925ed4b01e"],["/categories/ACG/Travel/index.html","74db384410cebc8ded2801244c18af87"],["/categories/ACG/figures/index.html","8d046e5faee78e4b542b7f4921f65776"],["/categories/ACG/index.html","a4d3589a7dd8ae9681f927e566e30dce"],["/categories/dev/Front-End-Dev/index.html","dc6c52751242392fdfcfc3eedcce8424"],["/categories/dev/HTML-CSS/index.html","af1219a0b6b40a85ae17dfa72b893a05"],["/categories/dev/android/index.html","a4470d3638d228db96d2fdc6d94c0ef5"],["/categories/dev/cpp/index.html","998e033fbcfa9fb57a89b8568416872c"],["/categories/dev/git/index.html","480c661b993b5618bddf2b6147007092"],["/categories/dev/index.html","44c8efd0daab8424c893094dfff97c6a"],["/categories/dev/java/index.html","3bdf70cd58b33ed002ffc90d346b1c18"],["/categories/dev/page/2/index.html","6305790811a0325ff3eb0e2b90b5be9e"],["/categories/maintaince/blog-setup/index.html","c8c749890248bfbf05339eabd1e7c581"],["/categories/maintaince/index.html","857b19255ecea787e5acc56b44cb91f9"],["/categories/maintaince/macbook/index.html","6b1b8d70c6804ac3d3b1d87e0fcf9218"],["/categories/maintaince/router-config/index.html","9c96ed2aad917c350a06d3c3c7b325ce"],["/categories/notes/index.html","f46f743fc51eaae35966a2d0f505a7ae"],["/categories/tricks/android/index.html","0060de271e02f6dd945d16fe09cf9d9b"],["/categories/tricks/index.html","8466a06a77199057b6bdbae088fdcfde"],["/categories/uncategorized/index.html","627d35a6b2fd0b8b6471071773c30ef8"],["/categories/works/Front-End-Dev/index.html","dbb5fa3b1dd088f9594c2d64cca6287f"],["/categories/works/csharp-wpf/index.html","715d92f14e72acac76714dc7e592222b"],["/categories/works/index.html","cf34821356fa4c776341e8babf54b026"],["/css/seichi.css","42693f35c4c482207368dd363ea27373"],["/css/style.css","e21657d8ff2f701595db4e2404d14563"],["/google311213f0c8d812a9.html","51f1ee3c2f13a21a1a40b3dae4954454"],["/img/coderwall.png","1976fe70f1ee8ed243e0975402e06a2d"],["/img/delicious.png","952d9b54d8bcfe7b998f67ff48c4dbce"],["/img/douban.png","d42a163f932100e621d22732db34ecdb"],["/img/facebook.png","4bd685f6c9fdaccabf07bdd52173facb"],["/img/github.png","3c4b6267a1a3fedebdc7d089610ecfe7"],["/img/google.png","c385f5304465716b2d6c9ada94c657ab"],["/img/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["/img/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["/img/linkedin.png","4c72c4896f3c23f736cb1ad08f0c866e"],["/img/mail.png","38a7b8302dac028bf03b22d228938abf"],["/img/pinboard.png","9b6186cb97adbe50311f94e50f2392cf"],["/img/pinterest.png","e1b8e655d1b99b40ebcbd96977ae234e"],["/img/rss.png","ec8cf9b5a98011aa75cc0a4f25024dc9"],["/img/scrollbar_arrow.png","be5381cedbd6b778b1d92e224fd71cf7"],["/img/stackoverflow.png","039128ececb47b33bccedd98dc9fc809"],["/img/twitter.png","d2289a4936fefa41d9f92cf89939be5b"],["/img/weibo.png","b382032b316ee38c6d537fe9d36ae54c"],["/img/zhihu.png","e6352c0e1957beef3009268ae747c3aa"],["/index.html","f3b1be4b3d328dd4789880f35b321cfb"],["/ja/2015/03/WNDR4300-setup-log/index.html","897f8b3568786ad21fef3ac11216a59b"],["/ja/2015/03/android-hostname-change/index.html","9f8365047e9c77a760247a4cb15cfeef"],["/ja/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","99ec8df92d1cb8f094aab617fae16622"],["/ja/2015/04/android-chrome-issues-with-webpage/index.html","3e63ad3d60abd4374d6eb5024bd97275"],["/ja/2015/04/cpp-study-log/index.html","e445fde9a4db09c2e2924249179b3e8f"],["/ja/2015/04/github-pages-ssl/index.html","1eadf2f27430fe55cdc0bd2121c7f9c2"],["/ja/2015/04/hello-world/index.html","3104f9a111fbec6d8ea75249ea4ab254"],["/ja/2015/04/hexo-setup-log/index.html","10fcf9807e83429b93c2cf42c5f73df7"],["/ja/2015/04/self-copy-cd-inazuma-1-html/index.html","f90963d67f61cad6b824aacf51f6d490"],["/ja/2015/05/cpp-inherit/index.html","dbe5e89b02fb4e48395fa7cf01979bc3"],["/ja/2015/05/cpp-polymorphism/index.html","7a0fd22cbe0cc7eadcebe49cc44fff42"],["/ja/2015/09/android-root-ota/index.html","5b449b26004d4a3506bab7ac666cb562"],["/ja/2015/09/java-learningNotes-1/index.html","3c5259f75448069b324f16fec82dc8a2"],["/ja/2015/09/newblog-newlife-2015/index.html","f582e27c24869a822e8aa52c05060031"],["/ja/2015/09/router-rebuild-2015/index.html","77e6f268a714391e230d06d282f38a6e"],["/ja/2015/12/2015-12-21/index.html","f937f8e7046dbb811b22033e76f9f13e"],["/ja/2015/12/PixInTouch/index.html","588d3539b701a6e2a5175f3652d27d04"],["/ja/2015/12/git-study-1/index.html","3add61d95777326a64b771bb79b166df"],["/ja/2015/12/hexo-backup-and-migrate/index.html","ad6d6430f7f9ee1937b433be7e9e1c60"],["/ja/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","4fd472c57606b33707d5b0e6a1e3ad03"],["/ja/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","00f692fdf6862ec81f0f7981e7a0e69f"],["/ja/2015/12/router-reconfig-2015/index.html","ca7a5dc71fa66911c8a1b75dbd6a1d03"],["/ja/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","e5ee663a0888bb073bfd62692176dabc"],["/ja/2016/01/2016-stepping-further/index.html","b7ad28ad02ff0a051427cdf4fbf203ba"],["/ja/2016/01/Android-Study-1-22/index.html","a8bbd3c118d2f2e70d1500aea3930cef"],["/ja/2016/03/2016-03-20/index.html","385780e65857c171c9722225fdc3ddf1"],["/ja/2016/03/GSC-535/index.html","154a069f06e99c767b54ba505ee3d47f"],["/ja/2016/03/gulpjs-1/index.html","780ff56981ed7ee193ba955a078f0dde"],["/ja/2016/03/hexo-theme-paper-white/index.html","d983fd3f3edd27edfefb9d4c1cb2ec93"],["/ja/2016/04/2016-04-19/index.html","a217574bb3ca023c41bd8b89240c7693"],["/ja/2016/06/2016-06-16/index.html","7f7a9dd2725f74f7bcaf900e88784676"],["/ja/2016/09/2016-09-18/index.html","f9143b1206928ef77865e08cfe61a24a"],["/ja/2016/10/2016-10-27/index.html","3440e203f5a1d017e7f9bc954db56e79"],["/ja/2016/12/config-switchresx-and-2khidpi/index.html","061d73a8bdb5184054fe2141e3f4936b"],["/ja/2016/12/improve-duoshuo/index.html","e9c72b934c1c5c3eb97c07428aedbdcb"],["/ja/2016/12/use-travis-ci-your-blog/index.html","2e5e7e81f15d9d6bb5f56d82a509725d"],["/ja/2017/01/2017-iyahoi/index.html","18df223628cc60ed4e9fdcceb740e13d"],["/ja/2017/01/webpack-amd/index.html","a9a15e75f25a8dd56162dff42e56ce6b"],["/ja/2017/04/kotobukiya-syaoran/index.html","1b69e473cea5d3c1d64960bfef82681a"],["/ja/2017/04/macbook-and-surface/index.html","f0ad40bba02fa9c509d380296de3f93f"],["/ja/2017/04/uc-hyakuya-yuichiro/index.html","01dc383e42c93fe0ee289d9200497939"],["/ja/2017/06/noragami-seichijunrei/index.html","8ab0e34db353758741f30eed8139fcbd"],["/ja/2017/08/cross-compile-55-libev/index.html","f51ed407bacbaeed9d6c872ba0171c19"],["/ja/2017/08/explore-service-worker-working-lifetime/index.html","4c3f7b446e6bb59f33583b2b5f884cd2"],["/ja/2017/08/hello-jp-world/index.html","d10f4c5696f1da1812d92200a27e34df"],["/ja/2017/08/kiminonawa-tokyo-seichijunrei/index.html","6c09220de06ee80db43e578bf102e910"],["/ja/2017/09/record-user-login-status-methods/index.html","f38d6621ba201fe4ba1803cf38e83d86"],["/ja/2017/10/vue-typescript-early/index.html","aade07117fdc29fa272e223df5b949f4"],["/ja/2018/04/2017-end/index.html","8a6d557e36d5897a946b21bd0b0d26d7"],["/ja/2018/04/twitter-account-activity-api/index.html","08085c7b322ce11fd3a1ce24094f926a"],["/ja/2018/05/buddy-complex-seichijunrei/index.html","f64874ef35764b7773b5ca2a5b91c2ab"],["/ja/404.html","048460b0d973485dcd659ba1e6cb4a5b"],["/ja/about/index.html","c6f193696aaf316c6aa16316777623f6"],["/ja/archives/2017/08/index.html","cca62cbdbe66150d7528249b7d24e5c3"],["/ja/archives/2017/09/index.html","85fa06a010a58c27d727165b1bf937e6"],["/ja/archives/2017/10/index.html","5b91e8a845fdbcc362467595eafb6206"],["/ja/archives/2017/index.html","174438fce77e4404e5b15ab0bd9e52e3"],["/ja/archives/2018/04/index.html","92e3d6ae240e10c33bdf4694747896ce"],["/ja/archives/2018/05/index.html","d1f9467d1fd0493ec8d7fc09511e7057"],["/ja/archives/2018/index.html","1c81305e0eef1c68e945f3ce8f6be7a5"],["/ja/archives/index.html","0e67e211fb2f58d1d7a7cec754415d17"],["/ja/categories/ACG/Travel/index.html","604d0afca434c2d2dc60a051bac69e7b"],["/ja/categories/ACG/index.html","61625eeff7853b6021232ca808d1fe49"],["/ja/categories/dev/Front-End-Dev/index.html","510b1bbad95892ab8c68a5d8d67b7076"],["/ja/categories/dev/index.html","edc29ad9228704378c3d5236a631f882"],["/ja/categories/uncategorized/index.html","feffec5b1f5242c67fa85c3435e7193b"],["/ja/index.html","6bb959c33f1d186ab626c20a93acfdce"],["/ja/nihongo-test-page/index.html","9a6011c87574a704e2461a9f59f28e4a"],["/js/instagram.js","7d7a9e2e7286ba2d5b6d12068214f0c3"],["/js/jquery.lazyload.js","28c23bc40080d31144776e9a8736837f"],["/js/main.js","2e92f29b0cd90bddc062915eb46a858c"],["/js/mobile.js","dc84e1287e89e3c1bba67fd47b8656b1"],["/js/nextpageajax.js","c3bde8d7bb1f967fb319f57a187ea51a"],["/js/pc.js","631b535186aab0e262485ee2bf9da628"],["/js/ripple-effects.js","b9c11903da0ef5c3d790b41369c3137e"],["/js/share.js","de52ac3d43e43c1951a08b0804458a8e"],["/js/totop.js","661822968b58fd439f46bd54031238d6"],["/nihongo-test-page/index.html","ccaf45c582e094cb880a47ab18c35247"],["/page/2/index.html","71787440b2b09eae52f89e2d9d71c91a"],["/page/3/index.html","62be11942c782f4dcaa3e3cc96df3d29"],["/page/4/index.html","ffff79701938e485ccf8275b09853301"],["/page/5/index.html","a215eae750af8536cf449c2745b0567b"],["/page/6/index.html","524f1be13613f8bdc9da55779e1ef101"],["/photoswipe/default-skin/default-skin.css","426e8908d7426603ca203b6d16281b1e"],["/photoswipe/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photoswipe/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photoswipe/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photoswipe/photoswipe-ui-default.js","0c9196aa8943ce8a8045c9f4cc62915c"],["/photoswipe/photoswipe-ui-default.min.js","9517baca43cd4e9cb23ff337fbc1baa1"],["/photoswipe/photoswipe.css","7dc0df107159e1be66d4464171561e5b"],["/photoswipe/photoswipe.js","a8d26ff34943c859884acbd6b2531315"],["/photoswipe/photoswipe.min.js","f5cd6479c4e4682545a9603e6b50c741"],["/setup-log/blog-setup/github-pages-ssl.html","d5e315a4f7725d0c5a828ab2ac48dfe3"],["/sw-register.js","e5dfa4f7b9fa89243cf599c5f697dc7e"],["/zh-cn/archives/2015/03/index.html","6f0098793e7558e2642891364f4105d2"],["/zh-cn/archives/2015/04/index.html","0b66ad65eebf1f87deb947f186eabf4b"],["/zh-cn/archives/2015/05/index.html","07abf678c04606b7774e8ae69e89f0dd"],["/zh-cn/archives/2015/09/index.html","a4c97261d03c75e55f7b9b91361b0d02"],["/zh-cn/archives/2015/12/index.html","e3158aaf77937f221217afddef58f72f"],["/zh-cn/archives/2015/index.html","81fda0314181cf2083eb647227da3736"],["/zh-cn/archives/2015/page/2/index.html","afc083a58584c2c6f7701f6da35603c9"],["/zh-cn/archives/2015/page/3/index.html","20363f2869e9ae1cd0a01156becab3f5"],["/zh-cn/archives/2016/01/index.html","eeae8aaa9ba98df876353b61f7d98824"],["/zh-cn/archives/2016/03/index.html","efcecd620fb0b4b997b4dbc8208a2eeb"],["/zh-cn/archives/2016/04/index.html","dc49f725d273721b5cf3ac516e919acb"],["/zh-cn/archives/2016/06/index.html","7c72016f292d90ae5ee94151b656df05"],["/zh-cn/archives/2016/09/index.html","7b8e416a9e3c8982f36183e4653922f8"],["/zh-cn/archives/2016/10/index.html","b65b03700e4ff1913f265d02b7f8aed1"],["/zh-cn/archives/2016/12/index.html","ad29518a103e4a858d155eb50be5b63c"],["/zh-cn/archives/2016/index.html","85d5bb48edf1528464b0815de6296ea0"],["/zh-cn/archives/2016/page/2/index.html","9455a31fc2a321261cf8bfb7285390b4"],["/zh-cn/archives/2017/01/index.html","3647920457bb4f92febe3c95ea49fce9"],["/zh-cn/archives/2017/04/index.html","7861ed961053286ca034980a3db14303"],["/zh-cn/archives/2017/06/index.html","fec4678176d2c536dbab1d7a1dfacd0a"],["/zh-cn/archives/2017/08/index.html","a2307dcdcfa3cdebe806861317ea001d"],["/zh-cn/archives/2017/09/index.html","1c012a29813c4d17173daff2af5a5f4c"],["/zh-cn/archives/2017/10/index.html","5cfe812fd8a44e882381da0b0d4fbc8a"],["/zh-cn/archives/2017/index.html","2a069c8f880d0522bc28dfe15746c18f"],["/zh-cn/archives/2017/page/2/index.html","fedf1533f42fdca387054e3c534a2c46"],["/zh-cn/archives/2018/04/index.html","8bc547ebda992a9a5a533501db94bd43"],["/zh-cn/archives/2018/05/index.html","75c7092c1d91e8f58484517c6bb01497"],["/zh-cn/archives/2018/index.html","92c57b9fe30761d5a26f9e32c0a0470f"],["/zh-cn/archives/index.html","1175da2edecb57d4138ef379671eb2cb"],["/zh-cn/archives/page/2/index.html","5c16dc048fb0686cc3f313e4aef74c8d"],["/zh-cn/archives/page/3/index.html","2ed2bbb52f9fa8e7a4311c0c57f8ac23"],["/zh-cn/archives/page/4/index.html","2cd058a90635325c152cee753a1962a7"],["/zh-cn/archives/page/5/index.html","2d1eb3519481b196fc2e1e8fe116bc1f"],["/zh-cn/categories/ACG/Music/index.html","40407c8279bdc914fb6e4808bb3b23f3"],["/zh-cn/categories/ACG/Music/self-copy/index.html","da12e454d37382d3b5d11b55fd9187db"],["/zh-cn/categories/ACG/Travel/index.html","7da9ed43d0d47fee0615efb46620c110"],["/zh-cn/categories/ACG/figures/index.html","f9bc559a9637662fe7f4edf0707ce6cb"],["/zh-cn/categories/ACG/index.html","4dadf8e7fe1c575b4211a5401e895883"],["/zh-cn/categories/dev/Front-End-Dev/index.html","ee4092009d27125f97e9d72c12d133fe"],["/zh-cn/categories/dev/HTML-CSS/index.html","7fdb46d586d28984b9e29d9bd3b62ea0"],["/zh-cn/categories/dev/android/index.html","93c44812afd01487dbe2387ce835662f"],["/zh-cn/categories/dev/cpp/index.html","c31ad5903432041c4b6248b3edd87bd8"],["/zh-cn/categories/dev/git/index.html","045fa7a0716fab605ce4dd479461f3de"],["/zh-cn/categories/dev/index.html","3840b460afe1a9617c01456484aeea12"],["/zh-cn/categories/dev/java/index.html","db2dfb267756051905c2379cc6820998"],["/zh-cn/categories/dev/page/2/index.html","1d26f30971caa95dee2e9ec3782f282b"],["/zh-cn/categories/maintaince/blog-setup/index.html","cebdbdadf5738039b6d327b95634bf74"],["/zh-cn/categories/maintaince/index.html","660d67b1c788f2fb8efdc2bfeb476d1b"],["/zh-cn/categories/maintaince/macbook/index.html","014283f769ab49be8cab5fcb195ea2ab"],["/zh-cn/categories/maintaince/router-config/index.html","99b0f8b045347a10bbbead77d398a963"],["/zh-cn/categories/notes/index.html","ef6b1a2bbd3234208a2ceea4e1cb0bb2"],["/zh-cn/categories/tricks/android/index.html","db888796f08446273be25922fe684370"],["/zh-cn/categories/tricks/index.html","18e1ea800e90294be8de81ff26957cdb"],["/zh-cn/categories/uncategorized/index.html","b1b04aaee1388a47e2fb51e33725e3eb"],["/zh-cn/categories/works/Front-End-Dev/index.html","0fefafbcfa176e6e6a5f3ae87c3be545"],["/zh-cn/categories/works/csharp-wpf/index.html","7cfb97408ad3351e7a2ef7cb2f352544"],["/zh-cn/categories/works/index.html","9f517ebba19a92ce7ca648b7208eac83"],["/zh-cn/index.html","5ed02f0491cde8810451eef502f60fd0"],["/zh-cn/page/2/index.html","3bf0a3c9d219bc7a6071239219a48233"],["/zh-cn/page/3/index.html","2ff6abcbfa669fd43d0df05a31306479"],["/zh-cn/page/4/index.html","9efea2b018106c8555f286edc14b6740"],["/zh-cn/page/5/index.html","44b6cd2913c6c6014dc7e2577278c13b"]];
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
