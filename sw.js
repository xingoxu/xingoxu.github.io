/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/03/WNDR4300-setup-log/index.html","74a59f92690b9b162773e7f2426eaf2f"],["/2015/03/android-hostname-change/index.html","0e2765e05b8ab56dd7c0288b0fd1ee93"],["/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","4748927125ade34e7791ea43e4dcb7c4"],["/2015/04/android-chrome-issues-with-webpage/index.html","97de051f370dc8c9be83982b406562e0"],["/2015/04/cpp-study-log/index.html","15d3af27a942f4712ff566793f75b2f4"],["/2015/04/github-pages-ssl/index.html","ccfabf1f6133a5254e267c01ae0f0d32"],["/2015/04/hello-world/index.html","285c2175ca1c2d8cb947b02284ce2fb6"],["/2015/04/hexo-setup-log/index.html","b4c7cb3db1c4ec9ee8466c1186dea4a9"],["/2015/04/self-copy-cd-inazuma-1-html/index.html","10dd72b546af417388ffe2dfd4c77eb5"],["/2015/05/cpp-inherit/index.html","1b4d937eda77abb838d0a03316fb5b83"],["/2015/05/cpp-polymorphism/index.html","e670d468363addc3f2719efdb0e253d1"],["/2015/09/android-root-ota/index.html","0420bc8e86b8c730c65627fc0d0d5382"],["/2015/09/java-learningNotes-1/index.html","92de8cf34c1e6d2e61f3d400dbc002dd"],["/2015/09/newblog-newlife-2015/index.html","ff33c2c8f13755aaaf2dad417e37a631"],["/2015/09/router-rebuild-2015/index.html","cd4b41e7e1c5e37b831ca42944890c0f"],["/2015/12/2015-12-21/index.html","f6918c8832cb0ec24b60a3ad52be4237"],["/2015/12/PixInTouch/index.html","6d67c981f3c8265f334c8b5929e0c8c8"],["/2015/12/git-study-1/index.html","3ff26ff8e038124c870e66a6166aaac4"],["/2015/12/hexo-backup-and-migrate/index.html","524a784f0e462b620c2782e48cf82279"],["/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","325d7f4856c48dbb34a3d456495ae572"],["/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","513d7bd06952124b8ce14c924b9e8558"],["/2015/12/router-reconfig-2015/index.html","5a1717d4c4f7b3f396a25fa4398e1e9c"],["/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","394fc94dc37a23d241caaf61926d4922"],["/2016/01/2016-stepping-further/index.html","7f1005754ca9e88fb788d460def3fd28"],["/2016/01/Android-Study-1-22/index.html","52058102d355ab1fc73267fc3f2815ac"],["/2016/03/2016-03-20/index.html","1964ca5ad3b45f946e58f04c96c70634"],["/2016/03/GSC-535/index.html","ca2a30f9c463cc139b592ef4266afea1"],["/2016/03/gulpjs-1/index.html","c17fbb9b8fc4f3a7abf00100e911165c"],["/2016/03/hexo-theme-paper-white/index.html","fa5785645a46e6ff47bb695c9605327c"],["/2016/04/2016-04-19/index.html","b5d6d9072f1ccb9bf9d377b70cc4041a"],["/2016/06/2016-06-16/index.html","6da7d05c485193f96da3b4ae91123a0b"],["/2016/09/2016-09-18/index.html","a5f3e2dcdf568c9b2efbd0b54b053b05"],["/2016/10/2016-10-27/index.html","019f94c13e640e9a2af7bd5150b8d9f4"],["/2016/12/config-switchresx-and-2khidpi/index.html","293ea9363e2d6b984edff505593d52a7"],["/2016/12/improve-duoshuo/index.html","3c36f344929d4b8d92bfcaf38bad6e43"],["/2016/12/use-travis-ci-your-blog/index.html","5b1f0bddf892771df9040ef3f13949a5"],["/2017/01/2017-iyahoi/index.html","07e2756c7a35fc44d10d5d4d5f0e9394"],["/2017/01/webpack-amd/index.html","5798af74736d66004a3a9400bdcda30a"],["/2017/04/kotobukiya-syaoran/index.html","da8cda74a0d118fd31d958aee76f3120"],["/2017/04/macbook-and-surface/index.html","87ecc3322ad4f45e4f5a60b33c31afc9"],["/2017/04/uc-hyakuya-yuichiro/index.html","7a02cfc85c28412829cd23ca22865ba2"],["/2017/06/noragami-seichijunrei/index.html","d56d2addf7767b11bbd507daca6666b5"],["/2017/08/cross-compile-55-libev/index.html","1e66508d4687a0adab4b8709d4fc86cf"],["/2017/08/explore-service-worker-working-lifetime/index.html","034c4ce21374653188f3994e321b37f7"],["/2017/08/kiminonawa-tokyo-seichijunrei/index.html","9b1c35d872cf3a62acf1f4acb0beeba6"],["/2017/09/record-user-login-status-methods/index.html","2b9d02ef2401b14616bd69c859a959b1"],["/2017/10/vue-typescript-early/index.html","b1e9e0bb55972bbbc0713fcebaed5f8d"],["/404.html","eac4c47d2bf9e899ca6cceb51b741b50"],["/about/index.html","1a4044303ea0301cc33ef655211518e2"],["/archives/2015/03/index.html","64e1cb9f578c0520ae41cb7cb395d362"],["/archives/2015/04/index.html","94e21a81d70be6f9744938f244d17ad9"],["/archives/2015/05/index.html","a64e3761a99cb28c8a1aa0eb59ca546f"],["/archives/2015/09/index.html","8341e6cc6951d36b922b7e108ab3f6c0"],["/archives/2015/12/index.html","25b798de76a27c34793ce829e5f0226b"],["/archives/2015/index.html","d1bea27d9d6d4e0b5f5db20af322d422"],["/archives/2015/page/2/index.html","f8bdc8da40a0fab39e831e8259e4695c"],["/archives/2015/page/3/index.html","ac2e2dc6bb039d50941a337373238e1f"],["/archives/2016/01/index.html","9cae85e163a8c139e499561eacdbf957"],["/archives/2016/03/index.html","e18b69e95e7cf9fecb76d652fce3dd91"],["/archives/2016/04/index.html","d2ead65c7c72d6ccac846e615b27e98a"],["/archives/2016/06/index.html","90e69112d45e45a834a3c2fc940aea48"],["/archives/2016/09/index.html","74b975f52bb3444451cb9026eb1797dc"],["/archives/2016/10/index.html","f55b473a4477fb92ab17464482ce5062"],["/archives/2016/12/index.html","6472eefb40fd942603ed5d70d1a674ae"],["/archives/2016/index.html","09e9197e346f2f25beb4c6f8f9555658"],["/archives/2016/page/2/index.html","ff76dddb2b68c2a7c3cce7a0951b6aef"],["/archives/2017/01/index.html","8a55053dca8e809cd61e41b4c4d4df57"],["/archives/2017/04/index.html","dac560230fd9295ba58cce31efa891f0"],["/archives/2017/06/index.html","cf762bd0ad2d453b7bd6cb9f2f698445"],["/archives/2017/08/index.html","da97f16c35c73f93c3f9093a77e35986"],["/archives/2017/09/index.html","7fa4c314161879df7cbebcd5a414f756"],["/archives/2017/10/index.html","90345ec42e48b4b7033116ab7945efa5"],["/archives/2017/index.html","ea8fa3eae76ef13d5e7fb77a53fa1b3d"],["/archives/2017/page/2/index.html","5678094597aa74f37e0765129a684d84"],["/archives/index.html","58a35350d578176a550c28dc5ee5b241"],["/archives/page/2/index.html","20e86686b98095651edf8f6b0790223c"],["/archives/page/3/index.html","72c8693c145ac1eb98e6d7c0c9a18cb4"],["/archives/page/4/index.html","7dd44e408605ae3f56d26a9a7348952f"],["/archives/page/5/index.html","684970282dbd10fa397ab057d95e6cc7"],["/assets/images/about-me.png","a066d06c3d9d1fe56c4d921cec7febf3"],["/baidu_verify_YbTSlpWIUJ.html","779049c3a50695ceb3a388ce1e8bc1b9"],["/categories/ACG/Music/index.html","7d68015a6f6c730fc6609182a99be3cf"],["/categories/ACG/Music/self-copy/index.html","cf5f31d1d93585de2f17e4ac9cc87d27"],["/categories/ACG/Travel/index.html","ebd7dcae61c361fca0d1bcff329485e3"],["/categories/ACG/figures/index.html","22739163d0a8003519b2018ce38c8f8f"],["/categories/ACG/index.html","0d7a7e3463301f5a0f4912138daf7c00"],["/categories/dev/Front-End-Dev/index.html","41ce8a207f8db0e737215a55d9f7b136"],["/categories/dev/HTML-CSS/index.html","b5ad8526d6e5de9377f8067ead107406"],["/categories/dev/android/index.html","b111ecc6a704164d518f4573fb9936c9"],["/categories/dev/cpp/index.html","d071924bd13622e1bb6955a7bc8d9aa4"],["/categories/dev/git/index.html","a379504e697011fb74267402253cae13"],["/categories/dev/index.html","acad5de279569bd892fa7e32635fd94e"],["/categories/dev/java/index.html","c0ece14020b4752a67d5e9832ec3c8a0"],["/categories/dev/page/2/index.html","d57873451e3d5d253653dbbc4eddb290"],["/categories/maintaince/blog-setup/index.html","8b5dca08a586d8a5fb810239c281f33e"],["/categories/maintaince/index.html","e56c84fe8d22cdd20961852e47a5cafc"],["/categories/maintaince/macbook/index.html","2f9f299aee61ccf76972cf2885c7c41e"],["/categories/maintaince/router-config/index.html","d09d3fe373883f54156e045f7f8f11d6"],["/categories/notes/index.html","3594f8e47eb12f4b9d2b7b7cce807b70"],["/categories/tricks/android/index.html","ec7bf9854fcd894e5749d53677ade222"],["/categories/tricks/index.html","f527416c18fa4d618d7158e0bb7f3f8b"],["/categories/uncategorized/index.html","51b2e60a5e62755d805a447477662ec1"],["/categories/works/Front-End-Dev/index.html","aa585e9e7b17da7df2c2a1596c030e26"],["/categories/works/csharp-wpf/index.html","a403d94ffa8f91a8ea55794eaef2af4e"],["/categories/works/index.html","d4f199b3539a1a6a077735f17076b6ff"],["/css/seichi.css","42693f35c4c482207368dd363ea27373"],["/css/style.css","a81f79e7bf311785886f2c1c31c8e4d4"],["/google311213f0c8d812a9.html","51f1ee3c2f13a21a1a40b3dae4954454"],["/img/coderwall.png","1976fe70f1ee8ed243e0975402e06a2d"],["/img/delicious.png","952d9b54d8bcfe7b998f67ff48c4dbce"],["/img/douban.png","d42a163f932100e621d22732db34ecdb"],["/img/facebook.png","4bd685f6c9fdaccabf07bdd52173facb"],["/img/github.png","3c4b6267a1a3fedebdc7d089610ecfe7"],["/img/google.png","c385f5304465716b2d6c9ada94c657ab"],["/img/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["/img/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["/img/linkedin.png","4c72c4896f3c23f736cb1ad08f0c866e"],["/img/mail.png","38a7b8302dac028bf03b22d228938abf"],["/img/pinboard.png","9b6186cb97adbe50311f94e50f2392cf"],["/img/pinterest.png","e1b8e655d1b99b40ebcbd96977ae234e"],["/img/rss.png","ec8cf9b5a98011aa75cc0a4f25024dc9"],["/img/scrollbar_arrow.png","be5381cedbd6b778b1d92e224fd71cf7"],["/img/stackoverflow.png","039128ececb47b33bccedd98dc9fc809"],["/img/twitter.png","d2289a4936fefa41d9f92cf89939be5b"],["/img/weibo.png","b382032b316ee38c6d537fe9d36ae54c"],["/img/zhihu.png","e6352c0e1957beef3009268ae747c3aa"],["/index.html","a00c264718fbb2300531d1e0e82d4001"],["/ja/2015/03/WNDR4300-setup-log/index.html","a2d49cafe0db472a48fa428c63ef9c91"],["/ja/2015/03/android-hostname-change/index.html","e661f8000d22c4221742920f1444395f"],["/ja/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","fdac5a3cfaa9240e2a81900fa64b206e"],["/ja/2015/04/android-chrome-issues-with-webpage/index.html","6c379b3c17892c0dd633a63b4b43f8cf"],["/ja/2015/04/cpp-study-log/index.html","98a25d33e4146de01a0a28b54d4f80e3"],["/ja/2015/04/github-pages-ssl/index.html","a782e30aadc2511f1598ba067da4d3b0"],["/ja/2015/04/hello-world/index.html","4263bbde508234d79c4845ade17b976e"],["/ja/2015/04/hexo-setup-log/index.html","72f1518743439a556e7023fbdcf2c029"],["/ja/2015/04/self-copy-cd-inazuma-1-html/index.html","1ba6cc6443afe7c5f87e16da612811ba"],["/ja/2015/05/cpp-inherit/index.html","c68c458ed6458d83235164231320652b"],["/ja/2015/05/cpp-polymorphism/index.html","302d0d831718b79c5768dc6c66bb4a7d"],["/ja/2015/09/android-root-ota/index.html","ddf81ffff09bf39be9541b293c02a614"],["/ja/2015/09/java-learningNotes-1/index.html","f0db4fb0805844cee094e07c43a4d9ae"],["/ja/2015/09/newblog-newlife-2015/index.html","3c188a5467bff68db5ca8f6f1fe2122d"],["/ja/2015/09/router-rebuild-2015/index.html","b32a8d59056c1532fc24dc806a45169e"],["/ja/2015/12/2015-12-21/index.html","0ef36a2e894ea57dc7c7a5ae15e807ce"],["/ja/2015/12/PixInTouch/index.html","138546cd14118ced53e597778998556c"],["/ja/2015/12/git-study-1/index.html","e6eef24ce7ad559793a8d3e80c935527"],["/ja/2015/12/hexo-backup-and-migrate/index.html","717732fe7bdec4dcb65b2581e7f5f10e"],["/ja/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","08bdc9b298d650d5932a021aed531a7c"],["/ja/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","fbb8d30b4c9d9104713f6374165a06a5"],["/ja/2015/12/router-reconfig-2015/index.html","78df9b6e6d70cca019fb3f3b0dd75c02"],["/ja/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","bdeb79bb07d0dcb4735a64b6f6e92dc1"],["/ja/2016/01/2016-stepping-further/index.html","68506f56097ca69f2dc059680a0e4b00"],["/ja/2016/01/Android-Study-1-22/index.html","56059faae947e22a8f3e6d9b32a9acd2"],["/ja/2016/03/2016-03-20/index.html","8a6d177cc1d756920ac07e254c1f4c09"],["/ja/2016/03/GSC-535/index.html","6988f1ee80018947f058d3f2b71dad82"],["/ja/2016/03/gulpjs-1/index.html","d16e54a2b2aaebfaae13e0561005a9bc"],["/ja/2016/03/hexo-theme-paper-white/index.html","9f0451933391568be7b57284f75b130c"],["/ja/2016/04/2016-04-19/index.html","dea0b8527826c3d0ad627bb2f9a9717c"],["/ja/2016/06/2016-06-16/index.html","50c35ff1918df1392d77c6d0cecc01fc"],["/ja/2016/09/2016-09-18/index.html","a093ee885c6513dc3569abdedac65a74"],["/ja/2016/10/2016-10-27/index.html","429519b96c191b9d5b847b9a01961d91"],["/ja/2016/12/config-switchresx-and-2khidpi/index.html","e7902512200217c583631afde4c52885"],["/ja/2016/12/improve-duoshuo/index.html","09645402e616bf59d9be198556e139bc"],["/ja/2016/12/use-travis-ci-your-blog/index.html","d08ad52b2742f552f4897da3a55f2f1f"],["/ja/2017/01/2017-iyahoi/index.html","c4b2735416c5d592a726c6991e01e63b"],["/ja/2017/01/webpack-amd/index.html","52d8531e7ad7adfe3f7dbbfc37195b32"],["/ja/2017/04/kotobukiya-syaoran/index.html","b865c23e274e7fff4555d2b21cdb6799"],["/ja/2017/04/macbook-and-surface/index.html","b53d7f864869d038598bfcc7aa1a5aa2"],["/ja/2017/04/uc-hyakuya-yuichiro/index.html","5c3376f64767237ed5080d94a133d530"],["/ja/2017/06/noragami-seichijunrei/index.html","6c45825f5d0b56db7ef34050418b5bbd"],["/ja/2017/08/cross-compile-55-libev/index.html","0635afa0e1f56945ec60306a2b446adb"],["/ja/2017/08/explore-service-worker-working-lifetime/index.html","9238d872cec251f3a5a0c27760550b39"],["/ja/2017/08/hello-jp-world/index.html","08e7f26a14bd679f7afbaf4513da5ffa"],["/ja/2017/08/kiminonawa-tokyo-seichijunrei/index.html","28ebbebf4f6ad325b5af34dfea908d55"],["/ja/2017/09/record-user-login-status-methods/index.html","3c5cb479d52140ac4afaa7a1d422166c"],["/ja/2017/10/vue-typescript-early/index.html","95b47a845df943b4132a8cb0d3250f03"],["/ja/404.html","80b08e5834846f01a7106ba75d21617c"],["/ja/about/index.html","b603842e14fed1904e5104af917afe8b"],["/ja/archives/2017/08/index.html","c68ef4489d0f3ebba5b20fda9c59b8bc"],["/ja/archives/2017/09/index.html","fcdc12fb626f3ea6724fc7f35016f564"],["/ja/archives/2017/10/index.html","cc1955a1e595bb54191bd895241c1e3a"],["/ja/archives/2017/index.html","693c5ab2544b9a8e55943245cfcbd78f"],["/ja/archives/index.html","38b64bbc5c964ae30e899c5b5afe96ca"],["/ja/categories/dev/Front-End-Dev/index.html","0ea10c78d3f853d50f9501d42d85f25c"],["/ja/categories/dev/index.html","e559f7a97c44e7042cda473f34d23219"],["/ja/categories/uncategorized/index.html","77cd52044f15e6dd6642256803cb166e"],["/ja/index.html","450aac1d7e890b83786da4883086daa4"],["/ja/nihongo-test-page/index.html","7acb503e1a8ea626c9c4344aa45cf197"],["/ja/resume/index.html","68e025d139462dcba1cbb2acfc237c92"],["/js/instagram.js","7d7a9e2e7286ba2d5b6d12068214f0c3"],["/js/jquery.lazyload.js","28c23bc40080d31144776e9a8736837f"],["/js/main.js","2e92f29b0cd90bddc062915eb46a858c"],["/js/mobile.js","dc84e1287e89e3c1bba67fd47b8656b1"],["/js/nextpageajax.js","c3bde8d7bb1f967fb319f57a187ea51a"],["/js/pc.js","631b535186aab0e262485ee2bf9da628"],["/js/ripple-effects.js","b9c11903da0ef5c3d790b41369c3137e"],["/js/share.js","de52ac3d43e43c1951a08b0804458a8e"],["/js/totop.js","661822968b58fd439f46bd54031238d6"],["/nihongo-test-page/index.html","07c787fcd6ac8fa21b3567a14694115b"],["/page/2/index.html","3dbc85abc62bb7efc256115d7c28e952"],["/page/3/index.html","2c9e7347e3e53c0943d15eefcc224d2a"],["/page/4/index.html","18fb2e9a310086cab0733b2abb6e5585"],["/page/5/index.html","a09d74f5a773e1924561c47df45b66f2"],["/photoswipe/default-skin/default-skin.css","426e8908d7426603ca203b6d16281b1e"],["/photoswipe/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photoswipe/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photoswipe/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photoswipe/photoswipe-ui-default.js","0c9196aa8943ce8a8045c9f4cc62915c"],["/photoswipe/photoswipe-ui-default.min.js","9517baca43cd4e9cb23ff337fbc1baa1"],["/photoswipe/photoswipe.css","7dc0df107159e1be66d4464171561e5b"],["/photoswipe/photoswipe.js","a8d26ff34943c859884acbd6b2531315"],["/photoswipe/photoswipe.min.js","f5cd6479c4e4682545a9603e6b50c741"],["/setup-log/blog-setup/github-pages-ssl.html","d5e315a4f7725d0c5a828ab2ac48dfe3"],["/sw-register.js","2704977f226960d37e8c4acc5b0c50b9"],["/zh-cn/archives/2015/03/index.html","263821d2a8297b37391cf9028f856dd7"],["/zh-cn/archives/2015/04/index.html","3be363bb912f9674766257adcc339958"],["/zh-cn/archives/2015/05/index.html","f5a79d11cb284bc3cf70bb00233ecc3d"],["/zh-cn/archives/2015/09/index.html","fdded8801642ca43dd069de89182a7fd"],["/zh-cn/archives/2015/12/index.html","4857caffd44076d47c7a30b5ebaf7dfc"],["/zh-cn/archives/2015/index.html","8de29edb71b34dac1056ff1a7b327a1a"],["/zh-cn/archives/2015/page/2/index.html","7cafec51348294b2974ee4d25c0db903"],["/zh-cn/archives/2015/page/3/index.html","36231adbff9749ae539f44f159d5a9e5"],["/zh-cn/archives/2016/01/index.html","f001f67d67c952792d81ddc1e3675ee0"],["/zh-cn/archives/2016/03/index.html","52abe065a28cac8ff7787b58e06286aa"],["/zh-cn/archives/2016/04/index.html","b24f776b35c40059944921fcd3b37c01"],["/zh-cn/archives/2016/06/index.html","f1b657f3cebc7063b11822e2806ff959"],["/zh-cn/archives/2016/09/index.html","3ed2694b2a1a1922a87782aa46db203d"],["/zh-cn/archives/2016/10/index.html","ac20cbdb0333c97604c8af96fd029f68"],["/zh-cn/archives/2016/12/index.html","95d76dd38cb5105aa352aeabd18cdeda"],["/zh-cn/archives/2016/index.html","b80d7d072a028bd971a682b5934f4da2"],["/zh-cn/archives/2016/page/2/index.html","11a1b06f507417151bc25376a8f89ea4"],["/zh-cn/archives/2017/01/index.html","a09c0bb9725671847eafc1c701ef3668"],["/zh-cn/archives/2017/04/index.html","3514da2b62ca9ea59fb7177dcfbfea14"],["/zh-cn/archives/2017/06/index.html","bd05622ce99d14536246e7cb891e01e7"],["/zh-cn/archives/2017/08/index.html","28451dbac772093b7427ca2f588b1e33"],["/zh-cn/archives/2017/09/index.html","3e04d6ced5330a04f4dc6e9328c5cc06"],["/zh-cn/archives/2017/10/index.html","0b79cfe72c47455ceef3f9f7939f2c92"],["/zh-cn/archives/2017/index.html","67023131cb5a3e2321cec9ed46324ef9"],["/zh-cn/archives/2017/page/2/index.html","b80f311ec9f3b3698b5b09a2f34dc2d9"],["/zh-cn/archives/index.html","2592c61f25b660e551aa9765d1c71722"],["/zh-cn/archives/page/2/index.html","ad9b30d631ff875e237ba4f297cc9a0f"],["/zh-cn/archives/page/3/index.html","7543374601ff1ee39e029cad8e7b7afa"],["/zh-cn/archives/page/4/index.html","36cd2725eaf28567011e227cfa784b33"],["/zh-cn/archives/page/5/index.html","5c5d8926648ae806393dccebec76e713"],["/zh-cn/categories/ACG/Music/index.html","c19b2629b3ac39ce6e868ebc1d327fc4"],["/zh-cn/categories/ACG/Music/self-copy/index.html","b0e40aa8e7814853b5f4b6f4eca10288"],["/zh-cn/categories/ACG/Travel/index.html","c420123a8ceed0fda4ff7c50b3d825d2"],["/zh-cn/categories/ACG/figures/index.html","86695470d56044bdfb6958bb7c0dbdd2"],["/zh-cn/categories/ACG/index.html","2f4ccf35237f229d423b3dd89bc5a79b"],["/zh-cn/categories/dev/Front-End-Dev/index.html","5a02c14e044e0d7a1d26bb996ca1ea3f"],["/zh-cn/categories/dev/HTML-CSS/index.html","d3ca1771b5695fbcb5506db164150de7"],["/zh-cn/categories/dev/android/index.html","98ced69116f4c8067b90c73a1d856afe"],["/zh-cn/categories/dev/cpp/index.html","dff62e04aa70dc4d53f8ee904b6bd70b"],["/zh-cn/categories/dev/git/index.html","02aff92307245ba60a2c3427bf12bdbe"],["/zh-cn/categories/dev/index.html","034ac0778d393ec7c34534c9269ad9e4"],["/zh-cn/categories/dev/java/index.html","f98327fcbcc3fdf3e1a9e2a7fda27f4e"],["/zh-cn/categories/dev/page/2/index.html","c898145225fea0a58539951e0dca3c9a"],["/zh-cn/categories/maintaince/blog-setup/index.html","a0e32fb3ce0279ac913ac11697773034"],["/zh-cn/categories/maintaince/index.html","631e65e447e0cb9e22b26bbb314f4af3"],["/zh-cn/categories/maintaince/macbook/index.html","381601dd9e621b0a57776b6cfd7e0ddb"],["/zh-cn/categories/maintaince/router-config/index.html","0141160dae4d420bee5b87ee872b986e"],["/zh-cn/categories/notes/index.html","b279b1168ff06ca0970f260a8f4817de"],["/zh-cn/categories/tricks/android/index.html","88dfee3b3278f75f3dbbaa9878077cd3"],["/zh-cn/categories/tricks/index.html","0f206790bcc60e2b862941928cc8c798"],["/zh-cn/categories/uncategorized/index.html","02e886b101259dd9b5d083624773e369"],["/zh-cn/categories/works/Front-End-Dev/index.html","3d1c49522cb24378b675a43b7507b995"],["/zh-cn/categories/works/csharp-wpf/index.html","a0b3425d1ae44f869e83c92c9f5b47c0"],["/zh-cn/categories/works/index.html","69fbcef9722a1b6748b5649df7b9ff37"],["/zh-cn/index.html","da5981902e281ff95f5ff11ee2e38990"],["/zh-cn/page/2/index.html","4d09139e3fe3afdd44f4c069a8eca01c"],["/zh-cn/page/3/index.html","11a97ea9750060677eeda871c14fad7a"],["/zh-cn/page/4/index.html","d9d0ee85ee0ba9f65c35de43c69ea3b2"],["/zh-cn/page/5/index.html","94e9079030e658b58f439ffe2f45a2ca"]];
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
