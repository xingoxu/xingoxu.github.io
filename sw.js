/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/03/WNDR4300-setup-log/index.html","9e429d33c6107297294d97f0396a12d1"],["/2015/03/android-hostname-change/index.html","a0216cfc609d4a362cc3edd4a91d3f6e"],["/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","1242ea5133dc160bad0fcc6aa851b8e3"],["/2015/04/android-chrome-issues-with-webpage/index.html","c6069b4eae4070b6385374a222621f31"],["/2015/04/cpp-study-log/index.html","44bc7e3b5f99d5f57fe4a766392a5fa0"],["/2015/04/github-pages-ssl/index.html","1ecc660acfc6feeec70b846ff14674ff"],["/2015/04/hello-world/index.html","b178a2da5f46ac502003398b570664dc"],["/2015/04/hexo-setup-log/index.html","d1f9b7634b53b291971a2f7b9d61ad02"],["/2015/04/self-copy-cd-inazuma-1-html/index.html","c02de9133b7e0b8eb2316ae08495cf58"],["/2015/05/cpp-inherit/index.html","c19a597ce4663515587900219224b0e6"],["/2015/05/cpp-polymorphism/index.html","90d9268557bc47a94d747f536e312d11"],["/2015/09/android-root-ota/index.html","10d76147d8097f38f45672600b20d0e8"],["/2015/09/java-learningNotes-1/index.html","aeaf7640ed607e425118d18496271b40"],["/2015/09/newblog-newlife-2015/index.html","d173f5f7f48f79495e06c4c7f5cca0ea"],["/2015/09/router-rebuild-2015/index.html","2f3c267fb2ef7374d3b08b6cea99f8ed"],["/2015/12/2015-12-21/index.html","125f6554dfe11a15104260f7f6df78ce"],["/2015/12/PixInTouch/index.html","4a1ebfaf0a3f6150cebcc496270ffd81"],["/2015/12/git-study-1/index.html","851b0d1f145812daf374762d73a71850"],["/2015/12/hexo-backup-and-migrate/index.html","3c571816414b638b10e4d24f29872230"],["/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","5b24ba824afaad824383cd51440c2b25"],["/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","b741617d839ee2c5d209258cdac34aba"],["/2015/12/router-reconfig-2015/index.html","6e3a6af87ffafc46caace0185e78deac"],["/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","6255a61eddaae7b97f495fc191560010"],["/2016/01/2016-stepping-further/index.html","df7aa271a489b69e2e12bb62b9cf956a"],["/2016/01/Android-Study-1-22/index.html","fbc6171981428acc4a64f58d27e9ea31"],["/2016/03/2016-03-20/index.html","b13fbf55ce2cc4b0b31b6b5ff00e1a2e"],["/2016/03/GSC-535/index.html","4a02d7462999648a0fd8cc236b8532c9"],["/2016/03/gulpjs-1/index.html","830f43b6e541337a993725b849ecfead"],["/2016/03/hexo-theme-paper-white/index.html","a34b713206d6cdbe6ed6a4b1611dbac1"],["/2016/04/2016-04-19/index.html","b1ddb0d447cbdb3e91e86cd276dd8257"],["/2016/06/2016-06-16/index.html","e8baab19397312d7e8b5f4f30d82d7ae"],["/2016/09/2016-09-18/index.html","5288dde3be178f0abe2ae0c68fa57355"],["/2016/10/2016-10-27/index.html","5a17f263a940fbfb9f25db397b9ca29d"],["/2016/12/config-switchresx-and-2khidpi/index.html","f58520b4987a5db981f2301998eade41"],["/2016/12/improve-duoshuo/index.html","19836a687aaede957f21dad4ba6b3ab7"],["/2016/12/use-travis-ci-your-blog/index.html","41199709cf405c09412936ddf8bc6bd8"],["/2017/01/2017-iyahoi/index.html","19517e74c40095cd2ce13598997a749a"],["/2017/01/webpack-amd/index.html","8f8e6dd5a786ed1bfcc14225f99a5d3e"],["/2017/04/kotobukiya-syaoran/index.html","43db587c43288af70499bfe3726a9834"],["/2017/04/macbook-and-surface/index.html","a83b30e857313d20ae37385e9cdf9199"],["/2017/04/uc-hyakuya-yuichiro/index.html","ef85a2f27374826baa2b2f07837e589d"],["/2017/06/noragami-seichijunrei/index.html","6753a8da1e666252cfbccd71228d64d7"],["/2017/08/cross-compile-55-libev/index.html","b17e9350409681f093d7056645514018"],["/2017/08/explore-service-worker-working-lifetime/index.html","a1d307d8ea5339579b22bbc1b321b64e"],["/2017/08/kiminonawa-tokyo-seichijunrei/index.html","02a9eea0b40d5b2b6fa8159a45ec7f4f"],["/2017/09/record-user-login-status-methods/index.html","ba15f9effaa79ce1f2914bfee2a77f35"],["/2017/10/vue-typescript-early/index.html","662e5e95c410f4269d2ea6e43d0d11bf"],["/2018/04/2017-end/index.html","ea0126c56677737ccf70340c828a15e5"],["/2018/04/twitter-account-activity-api/index.html","7a3f7cda006de0d363ec2b304f5ae8e6"],["/2018/05/buddy-complex-seichijunrei/index.html","baf53cac7817f7da5ac6e2b31347b58b"],["/404.html","8d794421a024ca52cd0249a83213be37"],["/about/index.html","f5f7bea18e46e84e1b235ec9995ca9b8"],["/archives/2015/03/index.html","2dfff2b48e23f475b683f879378564e7"],["/archives/2015/04/index.html","32ea74969c5a46df4dbad27abef07f1e"],["/archives/2015/05/index.html","9fac66893163d78363693416be934ee6"],["/archives/2015/09/index.html","1dfdda15c161f5f37e9add950106570a"],["/archives/2015/12/index.html","4e0a8341c74b0368c0c3ffb7061802e5"],["/archives/2015/index.html","48686727a95ba80d2162a8c4cb5a8afb"],["/archives/2015/page/2/index.html","bb888910fff280ef455738300ba10f56"],["/archives/2015/page/3/index.html","e9411ce7ad5a9373e8b827c881a49dd4"],["/archives/2016/01/index.html","6c70d4578fab2acb748c92b39f677be6"],["/archives/2016/03/index.html","b86644fdf2c6be3cfd17546bd4c1a020"],["/archives/2016/04/index.html","aae9a41b25dada273871747d730efc6c"],["/archives/2016/06/index.html","0f8ab70b33e6d836b41df163735d4122"],["/archives/2016/09/index.html","19248d67c1e19e86a990335a3f6d7bc2"],["/archives/2016/10/index.html","e7bf8f35d4aa445794f87a279937ef0c"],["/archives/2016/12/index.html","145a706f7dde4d19eee6aa02a22fae48"],["/archives/2016/index.html","35b345fa74947ad1a061be9f5db1a18c"],["/archives/2016/page/2/index.html","518a7e4192ded11e0bd31312d9d404bc"],["/archives/2017/01/index.html","f2f5dff920dfbac4cce118f5177580b9"],["/archives/2017/04/index.html","976d98cb5ba99f4121fb5117a0806722"],["/archives/2017/06/index.html","9b23856f708bef77e32addace6a275ae"],["/archives/2017/08/index.html","76cf088312cafa3e6e40e18ea37846cc"],["/archives/2017/09/index.html","ab0f94309c2e7494723abd5b0cba7d1f"],["/archives/2017/10/index.html","593e841d5274d4b7812faee6d8cb2131"],["/archives/2017/index.html","56f0b1257aa148c1dfbf9190eec6a8ad"],["/archives/2017/page/2/index.html","2c4b29a62d944cf2a5ccc916f4ed75fb"],["/archives/2018/04/index.html","c6e77ad230bfb52672af54a6906622e5"],["/archives/2018/05/index.html","d17c1d2e483970a879c9c72eb5207337"],["/archives/2018/index.html","65f88e6851a0225c67d772d9b1b20066"],["/archives/index.html","5b68257e91625ed174fd78b68bb19fad"],["/archives/page/2/index.html","2370c62a4d1d0fe6028ca31ff0ec3fdf"],["/archives/page/3/index.html","e923f06900f61842b8213a87bb6baf2f"],["/archives/page/4/index.html","2206263d24a926b6374df9d1f6eda3e2"],["/archives/page/5/index.html","f64ca1af22b59c112f3982b7bdd6c0fe"],["/assets/images/about-me.png","a066d06c3d9d1fe56c4d921cec7febf3"],["/baidu_verify_YbTSlpWIUJ.html","779049c3a50695ceb3a388ce1e8bc1b9"],["/categories/ACG/Music/index.html","09d6edde49cc5c532f13fafb721fbc7e"],["/categories/ACG/Music/self-copy/index.html","1e98ece3f9bdeba4b2bcc56c15e1cd18"],["/categories/ACG/Travel/index.html","e8043d3080aa960ac82658e2551493d5"],["/categories/ACG/figures/index.html","0f565621f3048f45711b8a6a4cd16585"],["/categories/ACG/index.html","318fd68c99bde97620125e37233cfdff"],["/categories/dev/Front-End-Dev/index.html","558fa28a9f64a29e256d259475b1424c"],["/categories/dev/HTML-CSS/index.html","67f3431d69f23b0856caf04642dbb58d"],["/categories/dev/android/index.html","bb9d9249d8043ac1af68ec6c1363bf7f"],["/categories/dev/cpp/index.html","43c262238eb9bcc6dec0f4c341247ccc"],["/categories/dev/git/index.html","3a9dce1245ca73037ae62fa01d447029"],["/categories/dev/index.html","715446cc3121cfc9d25a084c826909c2"],["/categories/dev/java/index.html","78a97e53331e78182aa257831912c4c6"],["/categories/dev/page/2/index.html","73868990072ba515bc194d1cb224efcb"],["/categories/maintaince/blog-setup/index.html","a1cdbd135156da9d7758dfc0b7ee0e3c"],["/categories/maintaince/index.html","e023b1e5d884af6dbd186b253a829dbf"],["/categories/maintaince/macbook/index.html","4d9d64847350fbb8d478a050928e76bf"],["/categories/maintaince/router-config/index.html","a683f2a738798adc527d4e2ef882c4cf"],["/categories/notes/index.html","a88577484491153b81a088bfa680be3a"],["/categories/tricks/android/index.html","bde2451539ed873b251eab3cf35248c6"],["/categories/tricks/index.html","24a367ed88b9f4c6ae81cac083c009a8"],["/categories/uncategorized/index.html","11fd9a222ac896fbcf38d0d9e6c93d51"],["/categories/works/Front-End-Dev/index.html","c339c2937b3b6a22158707f1a78dd470"],["/categories/works/csharp-wpf/index.html","4c223e7d9f08103aff9f77fa8aed8a04"],["/categories/works/index.html","f0a880f63f4e708dbba0ec5373529b71"],["/css/seichi.css","42693f35c4c482207368dd363ea27373"],["/css/style.css","3a889bdecdea7d51589943325864751a"],["/google311213f0c8d812a9.html","51f1ee3c2f13a21a1a40b3dae4954454"],["/img/coderwall.png","1976fe70f1ee8ed243e0975402e06a2d"],["/img/delicious.png","952d9b54d8bcfe7b998f67ff48c4dbce"],["/img/douban.png","d42a163f932100e621d22732db34ecdb"],["/img/facebook.png","4bd685f6c9fdaccabf07bdd52173facb"],["/img/github.png","3c4b6267a1a3fedebdc7d089610ecfe7"],["/img/google.png","c385f5304465716b2d6c9ada94c657ab"],["/img/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["/img/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["/img/linkedin.png","4c72c4896f3c23f736cb1ad08f0c866e"],["/img/mail.png","38a7b8302dac028bf03b22d228938abf"],["/img/pinboard.png","9b6186cb97adbe50311f94e50f2392cf"],["/img/pinterest.png","e1b8e655d1b99b40ebcbd96977ae234e"],["/img/rss.png","ec8cf9b5a98011aa75cc0a4f25024dc9"],["/img/scrollbar_arrow.png","be5381cedbd6b778b1d92e224fd71cf7"],["/img/stackoverflow.png","039128ececb47b33bccedd98dc9fc809"],["/img/twitter.png","d2289a4936fefa41d9f92cf89939be5b"],["/img/weibo.png","b382032b316ee38c6d537fe9d36ae54c"],["/img/zhihu.png","e6352c0e1957beef3009268ae747c3aa"],["/index.html","150285fd74293671b1d6e7a7687f69d5"],["/ja/2015/03/WNDR4300-setup-log/index.html","dfed2fcd202df9f2eeed66048bbecba8"],["/ja/2015/03/android-hostname-change/index.html","2e1cc416b61ee4af9b421897e737beae"],["/ja/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","ebe6eb351b98804c8f9b5d07608bc22f"],["/ja/2015/04/android-chrome-issues-with-webpage/index.html","7c5bac7318b8af217093386cdab52631"],["/ja/2015/04/cpp-study-log/index.html","4ac4db19c96d3ceb25638ac9c91f9666"],["/ja/2015/04/github-pages-ssl/index.html","ee6da5e61f35055bd5e028d5a00ed70a"],["/ja/2015/04/hello-world/index.html","75cf718970c47c08bd70aa6ac214e76b"],["/ja/2015/04/hexo-setup-log/index.html","72b473cb9e3a86c920296f2c25f45818"],["/ja/2015/04/self-copy-cd-inazuma-1-html/index.html","5e1fd2a3bf61f154c758057f0496ae11"],["/ja/2015/05/cpp-inherit/index.html","e0372325ec34621e401a9503ee52f71e"],["/ja/2015/05/cpp-polymorphism/index.html","439d12813b69db411c0482a6afe62498"],["/ja/2015/09/android-root-ota/index.html","06830cd99b5f49bcce35b0f25a8f0904"],["/ja/2015/09/java-learningNotes-1/index.html","59ba01351a9d952a349c42afa2980668"],["/ja/2015/09/newblog-newlife-2015/index.html","c8bb1fdb35dde4d636472591280c27c0"],["/ja/2015/09/router-rebuild-2015/index.html","f00d8b3466639dfc88b2c84de7213b76"],["/ja/2015/12/2015-12-21/index.html","a7b2224e8bbcfed2c944408a8087450b"],["/ja/2015/12/PixInTouch/index.html","992d7e2cf37b6a7d12fd76757d989d8f"],["/ja/2015/12/git-study-1/index.html","1752b3090a7ef8bacd5f7c38cdb1c746"],["/ja/2015/12/hexo-backup-and-migrate/index.html","bd4b6184ccb1d4f2833e365f9fdec797"],["/ja/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","3c8a9d1e73260e2f7502c82dce29ec3e"],["/ja/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","13f3a528d49d93e6c24da5846f06f717"],["/ja/2015/12/router-reconfig-2015/index.html","370402f94b7cb9ed5bddcd52d2b331fc"],["/ja/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","59959b3d0c3c88db6ba004648da91fb6"],["/ja/2016/01/2016-stepping-further/index.html","c11081818265a0f3da2667fbf814092e"],["/ja/2016/01/Android-Study-1-22/index.html","85d962e7daa053a8ec208173e37895a0"],["/ja/2016/03/2016-03-20/index.html","de137d7f5e55dec839917ef5bf0cb8ce"],["/ja/2016/03/GSC-535/index.html","69ea581b47079dd39a6d7cce39601885"],["/ja/2016/03/gulpjs-1/index.html","a647952cb0c3fc7419cf9d23d5e90907"],["/ja/2016/03/hexo-theme-paper-white/index.html","0a4082339ceac1ea60ff25de54f22a52"],["/ja/2016/04/2016-04-19/index.html","fc9736633d926395c72940438e07e1a7"],["/ja/2016/06/2016-06-16/index.html","c01f8d744def15c92f362821ffbbeb10"],["/ja/2016/09/2016-09-18/index.html","6342276706d3d61d7aa5b0a4b06a684a"],["/ja/2016/10/2016-10-27/index.html","8405daa5bf9241ebf8dcfdacc601124b"],["/ja/2016/12/config-switchresx-and-2khidpi/index.html","24ca11a745a09974953c63ff80a5818e"],["/ja/2016/12/improve-duoshuo/index.html","ca5a3626dd9561188835bb9ccc5fab80"],["/ja/2016/12/use-travis-ci-your-blog/index.html","96298bcc678bfead45f12d7d5be8a3e1"],["/ja/2017/01/2017-iyahoi/index.html","51601258c0b6dc5c1314e1852549a71e"],["/ja/2017/01/webpack-amd/index.html","6746969a8eed9f8950ea5b73ce224be5"],["/ja/2017/04/kotobukiya-syaoran/index.html","cb7f6e79771a7a20bee1dac7f2f501c4"],["/ja/2017/04/macbook-and-surface/index.html","fea62544851c612d1c38fa23b837df4b"],["/ja/2017/04/uc-hyakuya-yuichiro/index.html","844d224059044fdeb720901fb6c815a6"],["/ja/2017/06/noragami-seichijunrei/index.html","76046984172809c2a8f0dffe64c1c2c1"],["/ja/2017/08/cross-compile-55-libev/index.html","398a6dacf65a6c28dd049c8cd0c5feee"],["/ja/2017/08/explore-service-worker-working-lifetime/index.html","96d143ff9aa02868732a065dc2b73d76"],["/ja/2017/08/hello-jp-world/index.html","221c309ea38b5d236bebbe4ffaf874a4"],["/ja/2017/08/kiminonawa-tokyo-seichijunrei/index.html","7eb740906da571706b429c5a553f6cdf"],["/ja/2017/09/record-user-login-status-methods/index.html","088734e05fe3a95c2e3e9cb4e844f656"],["/ja/2017/10/vue-typescript-early/index.html","f536a7a25b458106a7ded5d417e91f27"],["/ja/2018/04/2017-end/index.html","62ae4a53cfe589a13abba00b6f5c23da"],["/ja/2018/04/twitter-account-activity-api/index.html","0e915504cce2e2245e04eebb2fba6833"],["/ja/2018/05/buddy-complex-seichijunrei/index.html","034a85e1f12b71467d1e6884cd5a08f7"],["/ja/404.html","05664748ad3a12fb15e3a8f8fc99a6c7"],["/ja/about/index.html","69c95c3ec3fd2e274033fb4ad29883c7"],["/ja/archives/2017/08/index.html","9142820c2f65805e1f406bea04f51a4b"],["/ja/archives/2017/09/index.html","22692053b849bbd894aa00ad5604a340"],["/ja/archives/2017/10/index.html","56ff97d2187709e6873994bde5b98d92"],["/ja/archives/2017/index.html","f1fac08ae8b5a49c1e2a7a086dfe20f4"],["/ja/archives/2018/04/index.html","b6d8c36d85abddef804b9db34f525dc8"],["/ja/archives/2018/05/index.html","65ae2d475325e18b474f087fb16918b8"],["/ja/archives/2018/index.html","c0cc8a37da2e429652982fad87e2b9cc"],["/ja/archives/index.html","5771733c9cbc068d825dfac9aef09dbb"],["/ja/categories/ACG/Travel/index.html","4cdf5de4f2c69ad6226270a9cbeb75e6"],["/ja/categories/ACG/index.html","23f329ee831c5e7f99f6152207c073d4"],["/ja/categories/dev/Front-End-Dev/index.html","cf8603026d2c90507bb7b7bac25c17b3"],["/ja/categories/dev/index.html","9be7080d5f7777c2bba4856a2a9f4f9d"],["/ja/categories/uncategorized/index.html","23c419049f66d7258e278c64da69bfb0"],["/ja/index.html","8fde88950666c60bfb0e6998315f186b"],["/ja/nihongo-test-page/index.html","9da0ac7dacf7d7d1ee94ac8367114839"],["/js/instagram.js","7d7a9e2e7286ba2d5b6d12068214f0c3"],["/js/jquery.lazyload.js","28c23bc40080d31144776e9a8736837f"],["/js/main.js","2e92f29b0cd90bddc062915eb46a858c"],["/js/mobile.js","dc84e1287e89e3c1bba67fd47b8656b1"],["/js/nextpageajax.js","c3bde8d7bb1f967fb319f57a187ea51a"],["/js/pc.js","631b535186aab0e262485ee2bf9da628"],["/js/ripple-effects.js","b9c11903da0ef5c3d790b41369c3137e"],["/js/share.js","de52ac3d43e43c1951a08b0804458a8e"],["/js/totop.js","661822968b58fd439f46bd54031238d6"],["/nihongo-test-page/index.html","1bd2811425b0f3e709c066e482d8491c"],["/page/2/index.html","9106b0bf58847c1580d187ae173f3dad"],["/page/3/index.html","56a1ce1eaef0fa9ba6f8cd441de98d8b"],["/page/4/index.html","52497c295132674ee5e5363274520741"],["/page/5/index.html","23f9bf22c952e3f359bdd5b92b84c961"],["/page/6/index.html","38faf2e13e3ff442385cea623d498b86"],["/photoswipe/default-skin/default-skin.css","426e8908d7426603ca203b6d16281b1e"],["/photoswipe/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photoswipe/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photoswipe/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photoswipe/photoswipe-ui-default.js","0c9196aa8943ce8a8045c9f4cc62915c"],["/photoswipe/photoswipe-ui-default.min.js","9517baca43cd4e9cb23ff337fbc1baa1"],["/photoswipe/photoswipe.css","7dc0df107159e1be66d4464171561e5b"],["/photoswipe/photoswipe.js","a8d26ff34943c859884acbd6b2531315"],["/photoswipe/photoswipe.min.js","f5cd6479c4e4682545a9603e6b50c741"],["/setup-log/blog-setup/github-pages-ssl.html","d5e315a4f7725d0c5a828ab2ac48dfe3"],["/sw-register.js","c65c46ffa154cedd2545883efbe84b56"],["/zh-cn/archives/2015/03/index.html","7903479c7174bffce19391e9c986997d"],["/zh-cn/archives/2015/04/index.html","214e5f79702b6c19eea0c215a5534f80"],["/zh-cn/archives/2015/05/index.html","5688f23003b4a422b2d032603d0e4f3f"],["/zh-cn/archives/2015/09/index.html","bbeac45cf579304b98f452974acd681e"],["/zh-cn/archives/2015/12/index.html","63d7bca2c4b25df01ed6ec896520c43a"],["/zh-cn/archives/2015/index.html","95b118e7031f62e0d9bb88fdd6416e6e"],["/zh-cn/archives/2015/page/2/index.html","a4c9f27eae707517595dabb090bc1653"],["/zh-cn/archives/2015/page/3/index.html","45c5cd7d4208b14289aea087edfdca62"],["/zh-cn/archives/2016/01/index.html","e35a4a6b53cc9680ac20f23f9a1c0708"],["/zh-cn/archives/2016/03/index.html","3e3ae25d7e353d4e3f3ef06297d93bf4"],["/zh-cn/archives/2016/04/index.html","27d39c5f316555df37a01a6eaeed9071"],["/zh-cn/archives/2016/06/index.html","d4d136b0f542b664ee291b3312dc4bb3"],["/zh-cn/archives/2016/09/index.html","bcedeed45ecf1b65b67a527b74c6fac8"],["/zh-cn/archives/2016/10/index.html","b5b983531b97ab5a2b9f2638e09c2035"],["/zh-cn/archives/2016/12/index.html","1e931b873b837ba1d4c5d4dfda61d65d"],["/zh-cn/archives/2016/index.html","3fa51cefed7891eeff4b87298608468e"],["/zh-cn/archives/2016/page/2/index.html","0f0782811435507a567ab9b938787eaf"],["/zh-cn/archives/2017/01/index.html","518e62362e3993060583a0a51d11a15d"],["/zh-cn/archives/2017/04/index.html","8294bf8806c88fb07f8a70c383bc041f"],["/zh-cn/archives/2017/06/index.html","fc874d9a68fea900a2fc9f268ae7263c"],["/zh-cn/archives/2017/08/index.html","1453b7ebec0af445479158bea464ac42"],["/zh-cn/archives/2017/09/index.html","538cbb5f57ed350272ceb62ef572c4a4"],["/zh-cn/archives/2017/10/index.html","d999f9f88cc20a6750aa7706fd7a90d4"],["/zh-cn/archives/2017/index.html","719be4e7b77c0e90a7181c426bbacdc1"],["/zh-cn/archives/2017/page/2/index.html","e7250f4433117ed9845cf76b91f57112"],["/zh-cn/archives/2018/04/index.html","ad8dd60fc33bfd6cd0eb4792c6d45719"],["/zh-cn/archives/2018/05/index.html","cda17c8e049dbd9311f98d69a17ed906"],["/zh-cn/archives/2018/index.html","52b119d29d505cc89aff6aeb18c40241"],["/zh-cn/archives/index.html","63b5f68e973466070f46204eee9441b6"],["/zh-cn/archives/page/2/index.html","9ff8230dfd361450e6c92d0ec797ed91"],["/zh-cn/archives/page/3/index.html","7e43b01d7f62e091a3c2601d4771a0a8"],["/zh-cn/archives/page/4/index.html","799db438bc310544f22821b60fff7cec"],["/zh-cn/archives/page/5/index.html","b3ffcad7c982d183c096c14bb611a224"],["/zh-cn/categories/ACG/Music/index.html","a55aed8224bc6af4ebd5f031c6285beb"],["/zh-cn/categories/ACG/Music/self-copy/index.html","f72646dfa0358536a2b43a76bab78fa9"],["/zh-cn/categories/ACG/Travel/index.html","b5a3ce977da6172cbb40b6cbbf1580fd"],["/zh-cn/categories/ACG/figures/index.html","143f9c5e30f66240153a37acadacfa13"],["/zh-cn/categories/ACG/index.html","c8f4bfd689772154d6c414faad606a07"],["/zh-cn/categories/dev/Front-End-Dev/index.html","18d192e197c7a1dfa3f96a16f689c94b"],["/zh-cn/categories/dev/HTML-CSS/index.html","604265713c09fefe4973bc3ed56fe4c2"],["/zh-cn/categories/dev/android/index.html","4e94c8b329cadfa9b2b946d88efd9545"],["/zh-cn/categories/dev/cpp/index.html","16b33aa2ecc13654e9c4bc07c756a51a"],["/zh-cn/categories/dev/git/index.html","3075384af3b045a24b6053b265d21677"],["/zh-cn/categories/dev/index.html","5fb425758707a8f9bb578fe38f5acc56"],["/zh-cn/categories/dev/java/index.html","be2b7f177bb01dba56ab6393fdd16786"],["/zh-cn/categories/dev/page/2/index.html","d83df8ee09fcdd01d3e527d5713c557c"],["/zh-cn/categories/maintaince/blog-setup/index.html","be73b085618f03e214567de60ecca9bd"],["/zh-cn/categories/maintaince/index.html","541d7d4415cb5736b39a92ddd2ed7f15"],["/zh-cn/categories/maintaince/macbook/index.html","07758ccf8e0e695f9f158163391a566f"],["/zh-cn/categories/maintaince/router-config/index.html","04dcf4001a4ccd1634d0f7f3ea2386b4"],["/zh-cn/categories/notes/index.html","fa8d0f9708e7f0f5a0f871ae077917dc"],["/zh-cn/categories/tricks/android/index.html","91a40854335381d86ff01af6ad3aeb2d"],["/zh-cn/categories/tricks/index.html","376b63666ac8fb4cf59e5a891132f27b"],["/zh-cn/categories/uncategorized/index.html","cee26374fe6e5c1cb8e9a41fe26e19e6"],["/zh-cn/categories/works/Front-End-Dev/index.html","ce0f6430d0e4aad00fbae2c0bbb0cbdd"],["/zh-cn/categories/works/csharp-wpf/index.html","4a286f32c10c33fcdd3df9a0c915e610"],["/zh-cn/categories/works/index.html","039145f8185ea198908bfefec90ca46c"],["/zh-cn/index.html","c0a59f4e8299ec2f6748e865c5d53c3a"],["/zh-cn/page/2/index.html","24b704e88f508c6ef2e572fb3fe0b4b1"],["/zh-cn/page/3/index.html","01411b39ed8cc87581d0cb45b40801df"],["/zh-cn/page/4/index.html","7560af82763384e762b2bb4a892aa40d"],["/zh-cn/page/5/index.html","79286060240932e9472bab0d9cbfa1e2"]];
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
