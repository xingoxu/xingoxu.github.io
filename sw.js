/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/03/WNDR4300-setup-log/index.html","c632af9e1c3c29637d7f28d6e1c942c5"],["/2015/03/android-hostname-change/index.html","d6e62dfa1f40eae561ab6e0b8329ac0f"],["/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","ea9acf81f3da26e5e1df0b6238f457fb"],["/2015/04/android-chrome-issues-with-webpage/index.html","19a81c8cfed665557e3f00a3960e879c"],["/2015/04/cpp-study-log/index.html","584533b8f0dc388302cc7089afd0c13a"],["/2015/04/github-pages-ssl/index.html","8d2f2a5d04643fcc213670bf716199fc"],["/2015/04/hello-world/index.html","98f865a7235d1a13d3fcb5857fa34bd5"],["/2015/04/hexo-setup-log/index.html","7c85433f5257151e840982967db386a9"],["/2015/04/self-copy-cd-inazuma-1-html/index.html","48d05f634e8c6abab329b2b6ec778054"],["/2015/05/cpp-inherit/index.html","27c7c108489cdeec1abc343baa9b2d8b"],["/2015/05/cpp-polymorphism/index.html","d025506792c84d9bd87a8c818c8f2f6c"],["/2015/09/android-root-ota/index.html","4fee87658391a740fe8f7588a2ef8211"],["/2015/09/java-learningNotes-1/index.html","1b44c70b0f4ec7d1fcc6ed48e62ab4fe"],["/2015/09/newblog-newlife-2015/index.html","f9006eee6a809a4829beea0a98456dda"],["/2015/09/router-rebuild-2015/index.html","c5498519bddc5940072f77a0774c54e3"],["/2015/12/2015-12-21/index.html","2a07e7f5e98b87d855e9fa1b6b586d93"],["/2015/12/PixInTouch/index.html","efd3616d14309c3166962fdb9e03033c"],["/2015/12/git-study-1/index.html","d664f2c545130b55303fb329091531c3"],["/2015/12/hexo-backup-and-migrate/index.html","4a84d788d9f47701e7e20a0c83a346b5"],["/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","382ec3fe3369d8557c2a75c1fda80caf"],["/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","8d0acf966d79d869d71b048f389303be"],["/2015/12/router-reconfig-2015/index.html","474d626a2e9ff43c45d21213ff2225d8"],["/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","2612392f36889acfe5723dccf5a7e2d0"],["/2016/01/2016-stepping-further/index.html","054fd2c7ce23c30560129a056cbad49b"],["/2016/01/Android-Study-1-22/index.html","f758ab0ff2a83a2e67fadee12a9f6642"],["/2016/03/2016-03-20/index.html","4df78e088060005792003ac7814e0607"],["/2016/03/GSC-535/index.html","bceffe906832b57ec3902a5309ddf003"],["/2016/03/gulpjs-1/index.html","ab4f9a3c057b04017735fb78181fb13b"],["/2016/03/hexo-theme-paper-white/index.html","348d6a435afdff6e7345b527f6c0610b"],["/2016/04/2016-04-19/index.html","34c4c9eed113aa24205bd5d904d88973"],["/2016/06/2016-06-16/index.html","67a35e05d7b4faf02f779abea9b9e9f8"],["/2016/09/2016-09-18/index.html","8c2345bd3db2377b19028113988f1aad"],["/2016/10/2016-10-27/index.html","f8beb0c15d4ba2ff75273557a58793d0"],["/2016/12/config-switchresx-and-2khidpi/index.html","0deeb2191b30fc938c3ce92f4e42d1a0"],["/2016/12/improve-duoshuo/index.html","679e2237d5cbb8a5ea1a3f5b90e6b453"],["/2016/12/use-travis-ci-your-blog/index.html","6338a0bb7de2fd3a7e3c23d037a4a338"],["/2017/01/2017-iyahoi/index.html","4915a2f4dfa4b012a02976f6520809f0"],["/2017/01/webpack-amd/index.html","a387e52439c629dfba6b09baa0d9fc42"],["/2017/04/kotobukiya-syaoran/index.html","5449422cc2ef90166a66efd0e0d5e09e"],["/2017/04/macbook-and-surface/index.html","1106b19834e40d1791dcf3b91a58336d"],["/2017/04/uc-hyakuya-yuichiro/index.html","45e964f1831775cca92324f8f863c99c"],["/2017/06/noragami-seichijunrei/index.html","2b5e9f2f3d2d462d7d38a8770a79b6f7"],["/2017/08/cross-compile-55-libev/index.html","632cf98b9ca81150258747fb66a277fe"],["/2017/08/explore-service-worker-working-lifetime/index.html","13f6e27385df376267b30c3e0fcea1ff"],["/2017/08/kiminonawa-tokyo-seichijunrei/index.html","8ccac1d4d4f010adc42771481ba7b175"],["/2017/09/record-user-login-status-methods/index.html","b55d731b0ae48275fb3fd0e544e2d9b5"],["/404.html","0bd087ba891d1055d6a48fac829ec588"],["/about/index.html","97aead13862061db89c912cba0436652"],["/archives/2015/03/index.html","b8a98f63ced31fc426befef6a2c98b59"],["/archives/2015/04/index.html","444fb032efe9f52d7b20ea9e5eeb89b7"],["/archives/2015/05/index.html","88a70ff4419d0481fbe5c2cd11666def"],["/archives/2015/09/index.html","1550961a328ef3f8bf92599127e328b0"],["/archives/2015/12/index.html","3705716b0e49e1f188326df9df9989a4"],["/archives/2015/index.html","e78e2b1e26e910cb55e88416b40717ad"],["/archives/2015/page/2/index.html","2728e074ccfa6deb07a2cb7e32fbe4bd"],["/archives/2015/page/3/index.html","bd57492288bb7041e0cad4ac11642e7e"],["/archives/2016/01/index.html","e62fa7fafacdb68b93c99140567210b9"],["/archives/2016/03/index.html","6143e96f0d69172bbfd32e5fbf5e1228"],["/archives/2016/04/index.html","f2c19194a96d970b264cf4a635a0cde3"],["/archives/2016/06/index.html","2190664b754bd5731c4c1beb0468ad44"],["/archives/2016/09/index.html","3392685c7f132f2a5ff018c470695107"],["/archives/2016/10/index.html","a2f71f83484d58f0d0998511974b70c1"],["/archives/2016/12/index.html","c23a66fff42971790f3da767a2750399"],["/archives/2016/index.html","ac8927b36412b4065fd55c37b2dafb32"],["/archives/2016/page/2/index.html","f33f4f3e7374a46825d3ab74b14667b2"],["/archives/2017/01/index.html","492b2aab7a1d89ed100280c436c296d0"],["/archives/2017/04/index.html","7e6381007635fd16cf88990d27df4f4d"],["/archives/2017/06/index.html","f93eeb41e0ba408580330f0f60ac20cd"],["/archives/2017/08/index.html","f4bd3238df7cca4be7e37477a6b47bf8"],["/archives/2017/09/index.html","7955c926a177b17792a2445f39788cea"],["/archives/2017/index.html","50e896be985d81ff7a4f60412d7a791a"],["/archives/index.html","ab2df844c25636e7c6b997bd69593d33"],["/archives/page/2/index.html","9d846b2e381f9ffe45515cb42c90b678"],["/archives/page/3/index.html","2243b91e670c7154adf8c4f62a6678a6"],["/archives/page/4/index.html","7a69bcd4ff9c41108867987620bb6808"],["/archives/page/5/index.html","fae7634aa767f3bfb2e1d97caa5b0b97"],["/assets/images/about-me.png","a066d06c3d9d1fe56c4d921cec7febf3"],["/baidu_verify_YbTSlpWIUJ.html","779049c3a50695ceb3a388ce1e8bc1b9"],["/categories/ACG/Music/index.html","47fa787e8f6e6c2f48eb8249f1db36b7"],["/categories/ACG/Music/self-copy/index.html","2c8cbb58564132b419281549cdc738b1"],["/categories/ACG/Travel/index.html","cb5a3c36c2cabe94f4d961abfff8309e"],["/categories/ACG/figures/index.html","cfe557d62999c5f0b9586871571dbd5d"],["/categories/ACG/index.html","cc4779a04ac01f863c795c6553d8edd7"],["/categories/dev/Front-End-Dev/index.html","90b278e8b58542371f3ffa1ac2866014"],["/categories/dev/HTML-CSS/index.html","75ba5b0a943642149d95733fdb5ee86f"],["/categories/dev/android/index.html","3df89d3cf557a20c7ac5d61c2170c33c"],["/categories/dev/cpp/index.html","c62aee95bd9d782cfbbcef0fc1581d30"],["/categories/dev/git/index.html","dd81e5f8b2327c7d4c7a53bfdab3d49e"],["/categories/dev/index.html","bff19693ac78cf68f4a0d6af8d6493d8"],["/categories/dev/java/index.html","6debcd13ef9a1a7cc6dac4aa6073aa29"],["/categories/dev/page/2/index.html","1cb0ec96137e1a7c82da311150b0875d"],["/categories/maintaince/blog-setup/index.html","41362db34ebee163241e4f54588d3b49"],["/categories/maintaince/index.html","25ae5f661c3e9ab57ada2af43233efcd"],["/categories/maintaince/macbook/index.html","f38ccc5a7b9592bcc14e229b4758ec5d"],["/categories/maintaince/router-config/index.html","dba7c0a97e761ff41902d5e2e8c0078f"],["/categories/notes/index.html","abec7ea24bdd5fe1500cd14ff7b10f46"],["/categories/tricks/android/index.html","56c94f4205a26a23b00b5c5afca51ba0"],["/categories/tricks/index.html","839e912d44222b705b2d260e2b4eec25"],["/categories/uncategorized/index.html","15d5c05faebc59b4be6cc7d1aea9e51e"],["/categories/works/Front-End-Dev/index.html","3e8822eaeb56ff3dd27bde1c8eced4d5"],["/categories/works/csharp-wpf/index.html","fee94edd91fc93cd0703fa10de28247b"],["/categories/works/index.html","31ece2f49cdde4f76c739e11016aec5b"],["/css/seichi.css","42693f35c4c482207368dd363ea27373"],["/css/style.css","a81f79e7bf311785886f2c1c31c8e4d4"],["/google311213f0c8d812a9.html","51f1ee3c2f13a21a1a40b3dae4954454"],["/img/coderwall.png","1976fe70f1ee8ed243e0975402e06a2d"],["/img/delicious.png","952d9b54d8bcfe7b998f67ff48c4dbce"],["/img/douban.png","d42a163f932100e621d22732db34ecdb"],["/img/facebook.png","4bd685f6c9fdaccabf07bdd52173facb"],["/img/github.png","3c4b6267a1a3fedebdc7d089610ecfe7"],["/img/google.png","c385f5304465716b2d6c9ada94c657ab"],["/img/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["/img/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["/img/linkedin.png","4c72c4896f3c23f736cb1ad08f0c866e"],["/img/mail.png","38a7b8302dac028bf03b22d228938abf"],["/img/pinboard.png","9b6186cb97adbe50311f94e50f2392cf"],["/img/pinterest.png","e1b8e655d1b99b40ebcbd96977ae234e"],["/img/rss.png","ec8cf9b5a98011aa75cc0a4f25024dc9"],["/img/scrollbar_arrow.png","be5381cedbd6b778b1d92e224fd71cf7"],["/img/stackoverflow.png","039128ececb47b33bccedd98dc9fc809"],["/img/twitter.png","d2289a4936fefa41d9f92cf89939be5b"],["/img/weibo.png","b382032b316ee38c6d537fe9d36ae54c"],["/img/zhihu.png","e6352c0e1957beef3009268ae747c3aa"],["/index.html","b249a948537edba290adca7d2a05a969"],["/ja/2015/03/WNDR4300-setup-log/index.html","9e1fe5130020b4f8c13c7c7b7fac10d8"],["/ja/2015/03/android-hostname-change/index.html","546198fd33d55ecb6b7d56da9ae87a29"],["/ja/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","8b29b1790a8b54e2292fb451281f405a"],["/ja/2015/04/android-chrome-issues-with-webpage/index.html","5c52122fb6660ca99cf7d67e96747527"],["/ja/2015/04/cpp-study-log/index.html","a0b80e84c14212a3cd6f68523831ebeb"],["/ja/2015/04/github-pages-ssl/index.html","d0137f4af2679cb5b2524298ebe9f995"],["/ja/2015/04/hello-world/index.html","851c829477901c826b24c123297fd984"],["/ja/2015/04/hexo-setup-log/index.html","5e4f87c28137f0c0c264a202023c4202"],["/ja/2015/04/self-copy-cd-inazuma-1-html/index.html","8fac5b89dd8425fd3370635033be368a"],["/ja/2015/05/cpp-inherit/index.html","63b1aeb188a5a760ebf518219f23a834"],["/ja/2015/05/cpp-polymorphism/index.html","2ab0c837de76b73630096c959d200fac"],["/ja/2015/09/android-root-ota/index.html","b2edbb8bd72681a4ad7ca4940dcbc8a3"],["/ja/2015/09/java-learningNotes-1/index.html","12cae8a44ab54b416d377cd1db6bf01a"],["/ja/2015/09/newblog-newlife-2015/index.html","3fbe1fd81ce5292e978e2458cfa680c1"],["/ja/2015/09/router-rebuild-2015/index.html","39083051e043932e6b02b19c8ad35fb8"],["/ja/2015/12/2015-12-21/index.html","a4abaef8cb96ad8fa7ab7c4f78b5664d"],["/ja/2015/12/PixInTouch/index.html","9432d8b03a595732d6642c26aca3ccb6"],["/ja/2015/12/git-study-1/index.html","e2241204c80cbc532a2c5639941d9675"],["/ja/2015/12/hexo-backup-and-migrate/index.html","cd209f10d9e99757eaf02edabf2d143f"],["/ja/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","6117ef82bc499e4c3ea4fea1d2bdcfb9"],["/ja/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","b7efa884a4eda1d1dcbe1604d7d47789"],["/ja/2015/12/router-reconfig-2015/index.html","008d5aff7293802fca3c21d5b289dfee"],["/ja/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","b1bfbf2feb7702948b368a908322024c"],["/ja/2016/01/2016-stepping-further/index.html","6f0b5757c75e235d9a50c5e85533ebfa"],["/ja/2016/01/Android-Study-1-22/index.html","1a2aefc84cdea4c7e764e554af21801f"],["/ja/2016/03/2016-03-20/index.html","be5964cfa12cf8908360b354ecc052ed"],["/ja/2016/03/GSC-535/index.html","dd6cb1d6a65756d1ec4fe2982c81b1d7"],["/ja/2016/03/gulpjs-1/index.html","129b58ac1c8497a1cd36d7a8879f54c8"],["/ja/2016/03/hexo-theme-paper-white/index.html","cf20de1b3385c2079ecf82e34d65357f"],["/ja/2016/04/2016-04-19/index.html","149eb253b9d77a2a79a6e090ed30f421"],["/ja/2016/06/2016-06-16/index.html","b0e94e492200501af99b45d7351b084d"],["/ja/2016/09/2016-09-18/index.html","e0b6451eebf898ec4456df51c40b4bd7"],["/ja/2016/10/2016-10-27/index.html","3dcaf2e03de684b001f95fe6a2166028"],["/ja/2016/12/config-switchresx-and-2khidpi/index.html","abbd6660e7c639b725c445f727724dbb"],["/ja/2016/12/improve-duoshuo/index.html","06f5158393bdb36469718fd893a82e88"],["/ja/2016/12/use-travis-ci-your-blog/index.html","c2e6f95534853b885f854a5a19de374f"],["/ja/2017/01/2017-iyahoi/index.html","763236ee39dbd77284d75ed3b89bf522"],["/ja/2017/01/webpack-amd/index.html","428fff4a9c2263a02352f290e503c79a"],["/ja/2017/04/kotobukiya-syaoran/index.html","17750b94fd758715095aadc518294afc"],["/ja/2017/04/macbook-and-surface/index.html","3feecca758e5f7d086d5a4fe119cc0ec"],["/ja/2017/04/uc-hyakuya-yuichiro/index.html","35698416f5ca39694b9c62f68d7169aa"],["/ja/2017/06/noragami-seichijunrei/index.html","9582177c869b7fdddd0f610a6dda0607"],["/ja/2017/08/cross-compile-55-libev/index.html","0c465fcdd3daf87e8f3505b9e31a7dae"],["/ja/2017/08/explore-service-worker-working-lifetime/index.html","accc61c679e5cf35a2392868ee15c965"],["/ja/2017/08/hello-jp-world/index.html","a3deaa81b206c00a9a54a0e45263156b"],["/ja/2017/08/kiminonawa-tokyo-seichijunrei/index.html","0e5bd8be734464d023ea0bf12c551a0e"],["/ja/2017/09/record-user-login-status-methods/index.html","a20bdaad5c0d9552df527c60074f7936"],["/ja/404.html","2bba671adfefd6903968a35dd5243344"],["/ja/about/index.html","f4f8beb17bdcb3bd99c1ab4d064fa672"],["/ja/archives/2017/08/index.html","81832e6e442af0f20bf2b97a37070e79"],["/ja/archives/2017/09/index.html","d5936c592230a331dcec78125c680716"],["/ja/archives/2017/index.html","dc12affa2825c98f3696fd8ffe49467f"],["/ja/archives/index.html","ebdc28ca2094677c755f30d8ba7e82de"],["/ja/categories/dev/index.html","1522d16bc770340a948d3cef616a88c5"],["/ja/categories/uncategorized/index.html","cbaaeb9d35f5fa9d0e35aeeafc05188b"],["/ja/index.html","e71b22553f136822b0d27f6c628e006e"],["/ja/nihongo-test-page/index.html","374360a529214f420eea92ac775d4731"],["/ja/resume/index.html","890571c9d2d6142278f2ee090281144e"],["/js/instagram.js","7d7a9e2e7286ba2d5b6d12068214f0c3"],["/js/jquery.lazyload.js","28c23bc40080d31144776e9a8736837f"],["/js/main.js","2e92f29b0cd90bddc062915eb46a858c"],["/js/mobile.js","dc84e1287e89e3c1bba67fd47b8656b1"],["/js/nextpageajax.js","c3bde8d7bb1f967fb319f57a187ea51a"],["/js/pc.js","631b535186aab0e262485ee2bf9da628"],["/js/ripple-effects.js","b9c11903da0ef5c3d790b41369c3137e"],["/js/share.js","de52ac3d43e43c1951a08b0804458a8e"],["/js/totop.js","661822968b58fd439f46bd54031238d6"],["/nihongo-test-page/index.html","952c84c702730c582c3f7046f600a027"],["/page/2/index.html","04ef01a6b1caaa99033f27d83356900f"],["/page/3/index.html","06bfd34127fe06cd1cf9f7138da3db6a"],["/page/4/index.html","384bfd3aaadc2275f294ce1f19af41c2"],["/page/5/index.html","817a63fc3686a8d6b552f55cb4c9dba6"],["/photoswipe/default-skin/default-skin.css","426e8908d7426603ca203b6d16281b1e"],["/photoswipe/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photoswipe/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photoswipe/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photoswipe/photoswipe-ui-default.js","0c9196aa8943ce8a8045c9f4cc62915c"],["/photoswipe/photoswipe-ui-default.min.js","9517baca43cd4e9cb23ff337fbc1baa1"],["/photoswipe/photoswipe.css","7dc0df107159e1be66d4464171561e5b"],["/photoswipe/photoswipe.js","a8d26ff34943c859884acbd6b2531315"],["/photoswipe/photoswipe.min.js","f5cd6479c4e4682545a9603e6b50c741"],["/setup-log/blog-setup/github-pages-ssl.html","d5e315a4f7725d0c5a828ab2ac48dfe3"],["/sw-register.js","b25ee09f024e2369a4efca52dfbdca60"],["/zh-cn/archives/2015/03/index.html","4b7d968be9f761d5fc7d51559abf5225"],["/zh-cn/archives/2015/04/index.html","0b2656eebd5e61c59e3f5d1b09ee00e4"],["/zh-cn/archives/2015/05/index.html","06a13eb86022288841227dfb8c961b19"],["/zh-cn/archives/2015/09/index.html","bc851978bd8a147c1ba45afde3663ff3"],["/zh-cn/archives/2015/12/index.html","c32c97b9e445853b01c9fa6a980c6fa3"],["/zh-cn/archives/2015/index.html","8a71fc367246b5b214e55911a4a32a0d"],["/zh-cn/archives/2015/page/2/index.html","4a1f19f2b5c62c623f3082d15ea769fa"],["/zh-cn/archives/2015/page/3/index.html","d352f347f1ecb9ce4197759976606ae3"],["/zh-cn/archives/2016/01/index.html","096a65a3ec6deb8d6d659bb93cea4f66"],["/zh-cn/archives/2016/03/index.html","fa49b31841dbc22e11e2f151cfc29fad"],["/zh-cn/archives/2016/04/index.html","a9cc045b2d39b65006be0b9c30f7bd52"],["/zh-cn/archives/2016/06/index.html","0d21aa677a09cdf269e76ac686b09774"],["/zh-cn/archives/2016/09/index.html","91d845dadba46798c08936c9d9506cc5"],["/zh-cn/archives/2016/10/index.html","cef5499f034159dbcb7c0360399b85c4"],["/zh-cn/archives/2016/12/index.html","a31a509b60ff86aa5bc6920f40b2937c"],["/zh-cn/archives/2016/index.html","c7aaa5500e53f6286612144a4404e42d"],["/zh-cn/archives/2016/page/2/index.html","cc17fef1c6c79402c9e7d3e8aa3041d3"],["/zh-cn/archives/2017/01/index.html","5acce830602996fb3515ee4b1532edd9"],["/zh-cn/archives/2017/04/index.html","46b12854ae945c3fd65e00249ce20369"],["/zh-cn/archives/2017/06/index.html","b178a6c2b7f34abadda82506b888fdd9"],["/zh-cn/archives/2017/08/index.html","a1fdaf848bf31798929ad933a2f256f1"],["/zh-cn/archives/2017/09/index.html","7f8eb7366b7c644e4d287d712a2088d5"],["/zh-cn/archives/2017/index.html","4c36822755b08c3d8aa2926811d9c69c"],["/zh-cn/archives/index.html","cc52282fc8f18d830e02f58f1ae3e914"],["/zh-cn/archives/page/2/index.html","04bedeb828c513c4633b0061b73ee53d"],["/zh-cn/archives/page/3/index.html","f70444478c82ca42ef702f6445534bcb"],["/zh-cn/archives/page/4/index.html","a2371851df156c970d61bdd12f84033d"],["/zh-cn/archives/page/5/index.html","234c34df1a5f50ef4168120684a51d12"],["/zh-cn/categories/ACG/Music/index.html","0b5c4ab9b2aa6b005116bd42d8f1f13d"],["/zh-cn/categories/ACG/Music/self-copy/index.html","6e652429d831735f9954fce2c7b6316b"],["/zh-cn/categories/ACG/Travel/index.html","db44c6ccb38bfc0381af24c045be44b9"],["/zh-cn/categories/ACG/figures/index.html","27544f1c145b474941352b8151495642"],["/zh-cn/categories/ACG/index.html","a31c775c70e5c673d2e6268f718a6bff"],["/zh-cn/categories/dev/Front-End-Dev/index.html","24b2635cbbb778299eda3f795b7bbdfc"],["/zh-cn/categories/dev/HTML-CSS/index.html","75565a0c5ba1a017443bb1247d33e8ed"],["/zh-cn/categories/dev/android/index.html","e8920bc3522926e725f4ea69a0a800e8"],["/zh-cn/categories/dev/cpp/index.html","d47403b337dde9b8cee192cb77adc1f9"],["/zh-cn/categories/dev/git/index.html","f2712e5a50b4f4535479a3a9d4de1915"],["/zh-cn/categories/dev/index.html","d46bc743c9be5b5cdfcdd4a354caa6e5"],["/zh-cn/categories/dev/java/index.html","5432881b9ae77f99c58939fe3084e964"],["/zh-cn/categories/dev/page/2/index.html","9b66664745d4d026e577a432e35de383"],["/zh-cn/categories/maintaince/blog-setup/index.html","7d23ae558f743e137affd01e93a0b07d"],["/zh-cn/categories/maintaince/index.html","9f0bfab670d2a947ad51970d6c221c1e"],["/zh-cn/categories/maintaince/macbook/index.html","f82ad5b8af38172716490897dc34955d"],["/zh-cn/categories/maintaince/router-config/index.html","c69ed3fd55b07da1e23ff55d170a5a27"],["/zh-cn/categories/notes/index.html","23000a7bb2bdcfdfd0ad26c5dca771d1"],["/zh-cn/categories/tricks/android/index.html","ba5f78804cb712f500fc786ef2594c0d"],["/zh-cn/categories/tricks/index.html","f7989a1ef2f0ef5faebdd6938bb1c48f"],["/zh-cn/categories/uncategorized/index.html","baf9bcc1539b7eab94e65350a757da83"],["/zh-cn/categories/works/Front-End-Dev/index.html","f4b2922af44995d16ab4e1f5eaa727b9"],["/zh-cn/categories/works/csharp-wpf/index.html","d5e50be525a509a52879864178af6cad"],["/zh-cn/categories/works/index.html","acb83b7e138ddd88fade590cd4aba107"],["/zh-cn/index.html","a8ea99b07683245f2bf1c6531c42b9c6"],["/zh-cn/page/2/index.html","9b9ac08694ad4d89b252070dd5631d5e"],["/zh-cn/page/3/index.html","e7c39968323c99e039ec64dcbae1cddf"],["/zh-cn/page/4/index.html","0545e5a6ba6f4c048556076ecc5dcc51"],["/zh-cn/page/5/index.html","2930e803c81493a483efe04d272334eb"]];
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
