/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/03/WNDR4300-setup-log/index.html","11e902f96ceff794b5cbccb5c58fd6cd"],["/2015/03/android-hostname-change/index.html","311e70fbc5706c862c67093f0451de55"],["/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","bdedb8d6f872f55ea426170ccfdca116"],["/2015/04/android-chrome-issues-with-webpage/index.html","77e3bba5809fcf7d619e32a66486f968"],["/2015/04/cpp-study-log/index.html","203befb995452b520e17b517f70bce11"],["/2015/04/github-pages-ssl/index.html","f42309d080b8945228afdc1e5b8055ba"],["/2015/04/hello-world/index.html","7cb92e209f6f5a4b3b826c5e5f4aa0f1"],["/2015/04/hexo-setup-log/index.html","5e04cf14cdcb0015cdbe47abb2f0d7aa"],["/2015/04/self-copy-cd-inazuma-1-html/index.html","f92141a2c4c17f52927782acfa115aa6"],["/2015/05/cpp-inherit/index.html","b1f81e6eb8936f9c0b073b39eb04145b"],["/2015/05/cpp-polymorphism/index.html","2b2899dc09d9feebf47f44513e17f8d5"],["/2015/09/android-root-ota/index.html","3b62f9e7f483aa20acb8cbd20806d6be"],["/2015/09/java-learningNotes-1/index.html","e8ca2103005d815d593c0212a3b824f6"],["/2015/09/newblog-newlife-2015/index.html","fab6a1afc71c9c5246c9872c5eef7ca9"],["/2015/09/router-rebuild-2015/index.html","d195f128b39148f09bbfa4bb9ea79c7b"],["/2015/12/2015-12-21/index.html","4716e92119335ab934ad70bca02335dd"],["/2015/12/PixInTouch/index.html","e4de07f587a23986250bc6c0e29b420c"],["/2015/12/git-study-1/index.html","d1b4b6e1c7f27e23267fb260b7e7fd29"],["/2015/12/hexo-backup-and-migrate/index.html","5c87d9523ea77849ebce1d5a94179e5e"],["/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","07572743fbc8cecf7d1a8234af042447"],["/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","250f0835b4d31c88166c099b2667a165"],["/2015/12/router-reconfig-2015/index.html","7ae67d4b54be656b06c9a568ae8af3bd"],["/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","d4406936153666f714324aed6eb16039"],["/2016/01/2016-stepping-further/index.html","c09ba4cef0ccf2a23313b037c8ec522f"],["/2016/01/Android-Study-1-22/index.html","3e42e00ff9d33fc5f0821467332d45e5"],["/2016/03/2016-03-20/index.html","43b746d453d6e6372798aff5599951e3"],["/2016/03/GSC-535/index.html","6d7a64d037558ba69c76057ae931e0c9"],["/2016/03/gulpjs-1/index.html","5a65fdb39203e04b79c25972edbc7ffe"],["/2016/03/hexo-theme-paper-white/index.html","902365cfe42944bdcc13caf545478de1"],["/2016/04/2016-04-19/index.html","78a69c2b98660e2bd343b2a561a3ee93"],["/2016/06/2016-06-16/index.html","ac763fa2ff41bebc50c311896bcbcf9d"],["/2016/09/2016-09-18/index.html","438f1fbdf7e7d0533f2a82fa6be6a583"],["/2016/10/2016-10-27/index.html","4002f60fde24b3e8a3ba3c7b1735cbae"],["/2016/12/config-switchresx-and-2khidpi/index.html","f4ece68e731b7f0555792f21eb36df5b"],["/2016/12/improve-duoshuo/index.html","78e6dfd2d68bf247e5c1d46b6e972615"],["/2016/12/use-travis-ci-your-blog/index.html","d28906e7d64579c931c8967aa72ac172"],["/2017/01/2017-iyahoi/index.html","7ff8739127aae56a26795b399c546ce1"],["/2017/01/webpack-amd/index.html","2ad115a9ee548d73493ae82d48960700"],["/2017/04/kotobukiya-syaoran/index.html","b112573e1f666c7e2dfc43fe0f6a164f"],["/2017/04/macbook-and-surface/index.html","2a1280cb3e8ab3af2cdc1898f35a75e1"],["/2017/04/uc-hyakuya-yuichiro/index.html","d30e088de921fc7244a6100ea31b58e4"],["/2017/06/noragami-seichijunrei/index.html","e312d8854b40699881c0a191a32b2dea"],["/2017/08/cross-compile-55-libev/index.html","64e4905c6dec475224f17507cd8894c8"],["/2017/08/explore-service-worker-working-lifetime/index.html","10f1fe9952fe449c2e6d3328fee1deda"],["/2017/08/kiminonawa-tokyo-seichijunrei/index.html","317f496e61bb95774c4e61f3f55bba49"],["/2017/09/record-user-login-status-methods/index.html","786aa8bb9ae06c02ab8739654a8a6aa0"],["/2017/10/vue-typescript-early/index.html","80c4487c6dfa04a3f586f96e69f9a9c1"],["/2018/04/2017-end/index.html","b4fe6e9553714ae54def890a74195571"],["/2018/04/twitter-account-activity-api/index.html","2a33b24a795f0ea1e6b98fcf0a8a27cd"],["/2018/05/buddy-complex-seichijunrei/index.html","fb84933d2b3a6b7d562b8a78da44d4b1"],["/2019/05/2019-05-16-record-jp-digital-TV-on-nas/index.html","5f1d5d51394f38f785ac2fdf9c8d2f4f"],["/2019/05/2019-05-17-google-io-tech/index.html","073dc222239006d2d1643187a48041cd"],["/404.html","e2b768f7b60a7be0e16d958ceee93ba0"],["/about/index.html","72d8bc54bceabc88276643160fc1fcdc"],["/archives/2015/03/index.html","ed3cf76501d51a91013f2dc7ee279ba7"],["/archives/2015/04/index.html","69060d5b94e2bc98c1e403005edbea2a"],["/archives/2015/05/index.html","2196bdd803f1f33df9352648a0ac036d"],["/archives/2015/09/index.html","e1a89ad4636c51b206b7e1d90173760e"],["/archives/2015/12/index.html","5448604844eaae549dc8476c0f9ef797"],["/archives/2015/index.html","e4bfba13bb33aae958ebe0a20670c97b"],["/archives/2015/page/2/index.html","8d4f7a67f097e33b560db876c88ebaf5"],["/archives/2015/page/3/index.html","af746638f61e7b04a8dfcfa989a5c7e7"],["/archives/2016/01/index.html","f65f94d5b0f6a92db8582f7078240d7f"],["/archives/2016/03/index.html","066dcf072d096b28fcfa1d16f462624c"],["/archives/2016/04/index.html","95aea3accb69340735778f2e7ea0bb18"],["/archives/2016/06/index.html","ba37617b9729226d5cf82a451d03ce24"],["/archives/2016/09/index.html","8441654db96b0146133d0c4a6c97d897"],["/archives/2016/10/index.html","e274ea737a114d287736356e2057d640"],["/archives/2016/12/index.html","4bf9ba3ce7eafe22a847a6e4318c33f4"],["/archives/2016/index.html","36daa3d52fe7584d4ae9a5a988922132"],["/archives/2016/page/2/index.html","638e36e179cdf6b60cb871c76efb8fde"],["/archives/2017/01/index.html","018ed4873823fe45abc6ed69c2a1a5c4"],["/archives/2017/04/index.html","4be1f1312d6c913105575483038548c4"],["/archives/2017/06/index.html","02143537c96f23f60c388bbf03721729"],["/archives/2017/08/index.html","27151726979d6323852a87f95ae179f9"],["/archives/2017/09/index.html","435b436f937afcf3280aaf731d04f252"],["/archives/2017/10/index.html","a5ee1711d410e2578baf35e408911343"],["/archives/2017/index.html","b2c1de2be34a118447fdb2615cee438a"],["/archives/2017/page/2/index.html","16da520ea2955c49df22aae7460e8317"],["/archives/2018/04/index.html","34a9603d02de49cb2bce2fd6d34b932d"],["/archives/2018/05/index.html","27eab6f11c47b739b48f52b0bebb0cea"],["/archives/2018/index.html","fe6f2af8e65f1c226791d2f480be368e"],["/archives/2019/05/index.html","fadf598b102f8e3fe9d2274b5662a173"],["/archives/2019/index.html","663b8e5907b45ddae5e6f52a54973230"],["/archives/index.html","657716113ff4783144a3e4bcaf1d068e"],["/archives/page/2/index.html","688e49da4ceb770538cb2824296d62b3"],["/archives/page/3/index.html","413265a57dedde4a9b31e8c5ad3c0c6a"],["/archives/page/4/index.html","93d4293183b1588d29b182cc771f1477"],["/archives/page/5/index.html","3654270aeaf623746ebbfce2cfa553d8"],["/archives/page/6/index.html","a66048f322e533d65752cac5e09dede2"],["/assets/images/about-me.png","a066d06c3d9d1fe56c4d921cec7febf3"],["/baidu_verify_YbTSlpWIUJ.html","779049c3a50695ceb3a388ce1e8bc1b9"],["/categories/ACG/Music/index.html","4adf1a9c36195398ab31a54c9b7169f1"],["/categories/ACG/Music/self-copy/index.html","139674578b172fa9eec4f7f22aafcc0e"],["/categories/ACG/Travel/index.html","f20d64b9b58007df124636ea86bcc78c"],["/categories/ACG/figures/index.html","6cd7ccc9f56b6dd4323fe2a85fdf0c02"],["/categories/ACG/index.html","3b48489f807e5817b159867daf21fab0"],["/categories/dev/Front-End-Dev/index.html","d8b6f15ef0c9f461ebda17d41ceeb7ec"],["/categories/dev/HTML-CSS/index.html","826e8cb6c856661f9babf47fccd4a1e2"],["/categories/dev/android/index.html","9d25e23144cab65b4fb4e0b8befba705"],["/categories/dev/cpp/index.html","cb98c0032dd42bf26046544437a513eb"],["/categories/dev/git/index.html","4276d896fecf98ac6fd863a9edc5b7d1"],["/categories/dev/index.html","7e2a40e4cbdf9bead0c19ec461397688"],["/categories/dev/java/index.html","189bb5d1ba1443f768a16a4e00936f4b"],["/categories/dev/page/2/index.html","e9e4fad71febc08e33e5b826c723d259"],["/categories/maintaince/blog-setup/index.html","25b81ff3fe3aac82a74e5c6d871ef6fa"],["/categories/maintaince/index.html","5f314a38f92c3f5c007763f3e0b1c258"],["/categories/maintaince/macbook/index.html","054fea75a50a7231e1048a46ebdfb668"],["/categories/maintaince/router-config/index.html","e113b3f144c77a47d80de7233193ed61"],["/categories/notes/index.html","b1ce2d4a272693268f3864ece38f873d"],["/categories/tricks/android/index.html","5cb5c6913d18e971c17f449fb7bab235"],["/categories/tricks/index.html","4c2565bec376c20f16602fb9d0e39748"],["/categories/uncategorized/index.html","863c8da9ee67c58be37709d623a7e9a8"],["/categories/works/Front-End-Dev/index.html","f65cbec3d53ae4f6d0b0d25c40f91f7a"],["/categories/works/csharp-wpf/index.html","88027a0695a420bc61bc81ad6d7a07be"],["/categories/works/index.html","14b22bc8416b24b3922c75e5876f13ba"],["/css/seichi.css","42693f35c4c482207368dd363ea27373"],["/css/style.css","3a889bdecdea7d51589943325864751a"],["/google311213f0c8d812a9.html","51f1ee3c2f13a21a1a40b3dae4954454"],["/img/coderwall.png","1976fe70f1ee8ed243e0975402e06a2d"],["/img/delicious.png","952d9b54d8bcfe7b998f67ff48c4dbce"],["/img/douban.png","d42a163f932100e621d22732db34ecdb"],["/img/facebook.png","4bd685f6c9fdaccabf07bdd52173facb"],["/img/github.png","3c4b6267a1a3fedebdc7d089610ecfe7"],["/img/google.png","c385f5304465716b2d6c9ada94c657ab"],["/img/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["/img/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["/img/linkedin.png","4c72c4896f3c23f736cb1ad08f0c866e"],["/img/mail.png","38a7b8302dac028bf03b22d228938abf"],["/img/pinboard.png","9b6186cb97adbe50311f94e50f2392cf"],["/img/pinterest.png","e1b8e655d1b99b40ebcbd96977ae234e"],["/img/rss.png","ec8cf9b5a98011aa75cc0a4f25024dc9"],["/img/scrollbar_arrow.png","be5381cedbd6b778b1d92e224fd71cf7"],["/img/stackoverflow.png","039128ececb47b33bccedd98dc9fc809"],["/img/twitter.png","d2289a4936fefa41d9f92cf89939be5b"],["/img/weibo.png","b382032b316ee38c6d537fe9d36ae54c"],["/img/zhihu.png","e6352c0e1957beef3009268ae747c3aa"],["/index.html","62273e9bcebacbcbeb196d31b464fbd3"],["/ja/2015/03/WNDR4300-setup-log/index.html","5617c5bde29cd1aa7d038c49350efecc"],["/ja/2015/03/android-hostname-change/index.html","8cddd6e7ca1284f1536b606cac71118f"],["/ja/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","fdaef17cee5a1e80ab6dee5e92096ff5"],["/ja/2015/04/android-chrome-issues-with-webpage/index.html","3d6cd490ada5db100e5ea4d4b5ee7d89"],["/ja/2015/04/cpp-study-log/index.html","dfb139f6afb8673b7eb13cd39c3b341a"],["/ja/2015/04/github-pages-ssl/index.html","749776fc0d2b943b12d744fc2da2fe4d"],["/ja/2015/04/hello-world/index.html","3fa04cd04070b4b53a73519c165c13b2"],["/ja/2015/04/hexo-setup-log/index.html","cb3344900b4b3563fe8c1f37f4e8d3b3"],["/ja/2015/04/self-copy-cd-inazuma-1-html/index.html","94cff38bc2268073df33cea514fd3615"],["/ja/2015/05/cpp-inherit/index.html","3e558432b5cc9dc33ec6d3b88ae11025"],["/ja/2015/05/cpp-polymorphism/index.html","4854fec14eb18c052959ba1661c4fea9"],["/ja/2015/09/android-root-ota/index.html","45a3a81e4979a30af4e72e95e44a9282"],["/ja/2015/09/java-learningNotes-1/index.html","1c255ae463a8da44bdffbcc5c74aea90"],["/ja/2015/09/newblog-newlife-2015/index.html","4eee2f4bd50a1c427440c66bf612b180"],["/ja/2015/09/router-rebuild-2015/index.html","fb2c4680616d4b407108bac37fdaa09f"],["/ja/2015/12/2015-12-21/index.html","0b154c599b0e998d191b91cf0bfb67e9"],["/ja/2015/12/PixInTouch/index.html","d2e3409e018ff1fb7c920e6a8d8816af"],["/ja/2015/12/git-study-1/index.html","d16d8d9acdccb1ba29c448358732d255"],["/ja/2015/12/hexo-backup-and-migrate/index.html","20624b908fc0efb062f0c86ad2923b33"],["/ja/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","11619a148c09684c7fc384272b1de717"],["/ja/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","432018ecd2ffc6dd63bfab8f30d36ffd"],["/ja/2015/12/router-reconfig-2015/index.html","22bfd370cbb6213367f6e9546c55da2b"],["/ja/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","0a9a4f803fe464818b374e68210f39d3"],["/ja/2016/01/2016-stepping-further/index.html","e082559e32d875f0ab9ad2adda905afe"],["/ja/2016/01/Android-Study-1-22/index.html","1160211028a64cd79c3aad859b2b1470"],["/ja/2016/03/2016-03-20/index.html","18e716d5cca5d47930a851254b6b83b0"],["/ja/2016/03/GSC-535/index.html","28beaae59f472dcfe26134125ed2b2a3"],["/ja/2016/03/gulpjs-1/index.html","43ce6ade5ee17411f81952e2da49e9c3"],["/ja/2016/03/hexo-theme-paper-white/index.html","390e75561fe493e3f175a4d703db764a"],["/ja/2016/04/2016-04-19/index.html","6b1cfee11cf7c880a38d2c21f9346392"],["/ja/2016/06/2016-06-16/index.html","690de4acc0a02b56ae7ac6342c2f8966"],["/ja/2016/09/2016-09-18/index.html","01d04eb58734220c4889a9277ec2c08d"],["/ja/2016/10/2016-10-27/index.html","8652e6bf50be864c4ccd852360c5bf24"],["/ja/2016/12/config-switchresx-and-2khidpi/index.html","84e2059082d01bb599983f805fde1c5e"],["/ja/2016/12/improve-duoshuo/index.html","282bc14319da372f5a05764ba361007e"],["/ja/2016/12/use-travis-ci-your-blog/index.html","812665751b9717f172a17629ff6afaa2"],["/ja/2017/01/2017-iyahoi/index.html","fb874e14ff2b4fc98a6d1f95f6b57f6e"],["/ja/2017/01/webpack-amd/index.html","04796da89e57729815eaf04702903552"],["/ja/2017/04/kotobukiya-syaoran/index.html","15aee5af7a9d8c35be1e7b61395de678"],["/ja/2017/04/macbook-and-surface/index.html","e5a691521ca650099ae1b3363fdbb652"],["/ja/2017/04/uc-hyakuya-yuichiro/index.html","829255ef1207457b72539b78cab08a39"],["/ja/2017/06/noragami-seichijunrei/index.html","07091d80b4ad8becfe72d051fbeb306d"],["/ja/2017/08/cross-compile-55-libev/index.html","c0113786d0144514524befcdfa1fb901"],["/ja/2017/08/explore-service-worker-working-lifetime/index.html","e5cd07f48b0a6af591bdc63fe230d072"],["/ja/2017/08/hello-jp-world/index.html","f7d36850bec683223d744af12ac52e00"],["/ja/2017/08/kiminonawa-tokyo-seichijunrei/index.html","89cc843dce81617122f8280f199b87bf"],["/ja/2017/09/record-user-login-status-methods/index.html","911fdcac1199e8dfc8b0af8bb3edd2b7"],["/ja/2017/10/vue-typescript-early/index.html","11ae5177646912e5880fb2c9498da774"],["/ja/2018/04/2017-end/index.html","62dda493294d8d7eb6c92527060845d6"],["/ja/2018/04/twitter-account-activity-api/index.html","bf2dccd35315054ffbec75706159ab24"],["/ja/2018/05/buddy-complex-seichijunrei/index.html","9d84bf3803dca3cfe8d288f9662c22ad"],["/ja/2019/05/2019-05-16-record-jp-digital-TV-on-nas/index.html","7fb56ac422ffa21c0e4df3c6f5381cbd"],["/ja/2019/05/2019-05-17-google-io-tech/index.html","728b366cd96f52639b987e991c486686"],["/ja/404.html","1063c07b72444a92bcdd79355dd96126"],["/ja/about/index.html","13220d8a18d7e08a430837254973d634"],["/ja/archives/2017/08/index.html","0d65f25bd6db70bd1782c17999b27ceb"],["/ja/archives/2017/09/index.html","9a9d37257bf63462037602d9d2dfa4b1"],["/ja/archives/2017/10/index.html","667550b88b9bc5623dc07f75a3997e1e"],["/ja/archives/2017/index.html","4cb2ceb34c95260762dfb0233f397930"],["/ja/archives/2018/04/index.html","bde5168bba51be833e8b0d7fa361fcc2"],["/ja/archives/2018/05/index.html","9b99d890d1aeeeacf9ddc28bcc0e65f4"],["/ja/archives/2018/index.html","c62f6f4c9099ca0584e8dbbc013fc926"],["/ja/archives/2019/05/index.html","29c048a902354289e818d629141d4887"],["/ja/archives/2019/index.html","0f847b5a91abc50db28b864a9f7643ea"],["/ja/archives/index.html","2fdb37724ab6ce2c8133c9b74bb8b405"],["/ja/categories/ACG/Travel/index.html","2109207a017196e952009f80504c54bd"],["/ja/categories/ACG/index.html","c73d0500e5121e071145f2cf4718924f"],["/ja/categories/dev/Front-End-Dev/index.html","b6a5f23fd3a730a034f11fb589fe59be"],["/ja/categories/dev/index.html","7114da245e1482bea1b242c0ebabc09f"],["/ja/categories/uncategorized/index.html","eec33c617298e6f6dfac624509e0f2be"],["/ja/index.html","12ffe262a7a8c5a35c4bf4b593b93892"],["/ja/nihongo-test-page/index.html","698b06780874ed7cc526c7ce2d29226a"],["/js/instagram.js","7d7a9e2e7286ba2d5b6d12068214f0c3"],["/js/jquery.lazyload.js","28c23bc40080d31144776e9a8736837f"],["/js/main.js","2e92f29b0cd90bddc062915eb46a858c"],["/js/mobile.js","dc84e1287e89e3c1bba67fd47b8656b1"],["/js/nextpageajax.js","c3bde8d7bb1f967fb319f57a187ea51a"],["/js/pc.js","631b535186aab0e262485ee2bf9da628"],["/js/ripple-effects.js","b9c11903da0ef5c3d790b41369c3137e"],["/js/share.js","de52ac3d43e43c1951a08b0804458a8e"],["/js/totop.js","661822968b58fd439f46bd54031238d6"],["/nihongo-test-page/index.html","e34e0d6fb1cf259c06dc0c3c1b69cb59"],["/page/2/index.html","e0f57c566ffdbb40ec0573ecd47f3ead"],["/page/3/index.html","6ce93e9ef20b02b443884cff2a904a58"],["/page/4/index.html","889049ec154d0a4817b59349180a6b6a"],["/page/5/index.html","249efc2a592bae64141ef2d0012800f5"],["/page/6/index.html","ff05a6a287d7c93a607813d7ba6816e6"],["/photoswipe/default-skin/default-skin.css","426e8908d7426603ca203b6d16281b1e"],["/photoswipe/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photoswipe/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photoswipe/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photoswipe/photoswipe-ui-default.js","0c9196aa8943ce8a8045c9f4cc62915c"],["/photoswipe/photoswipe-ui-default.min.js","9517baca43cd4e9cb23ff337fbc1baa1"],["/photoswipe/photoswipe.css","7dc0df107159e1be66d4464171561e5b"],["/photoswipe/photoswipe.js","a8d26ff34943c859884acbd6b2531315"],["/photoswipe/photoswipe.min.js","f5cd6479c4e4682545a9603e6b50c741"],["/setup-log/blog-setup/github-pages-ssl.html","d5e315a4f7725d0c5a828ab2ac48dfe3"],["/sw-register.js","9e0df31915da15b4150249e20587a1fc"],["/zh-cn/archives/2015/03/index.html","296513408d31a16d6a9c72aae193445f"],["/zh-cn/archives/2015/04/index.html","e5709e802d2b526d00933008be24c831"],["/zh-cn/archives/2015/05/index.html","2edb01c09154450e651305e661e1dd01"],["/zh-cn/archives/2015/09/index.html","320d7f769750bf20f2d2c95bcc04d9f1"],["/zh-cn/archives/2015/12/index.html","df215ce0cad1ade0d44d111f45b598b9"],["/zh-cn/archives/2015/index.html","1c40d68ecb5cc24507fcabf297f3508a"],["/zh-cn/archives/2015/page/2/index.html","587cbf6aed0e6a83798ea440434e6718"],["/zh-cn/archives/2015/page/3/index.html","81869d5fb9a4098049d16a5f1790a323"],["/zh-cn/archives/2016/01/index.html","2abeb0aa3cd448419714ada5360429dc"],["/zh-cn/archives/2016/03/index.html","0ddc2cb52864fbc14ba26117613794b4"],["/zh-cn/archives/2016/04/index.html","27b036f58f3a05403207d6b2a3e757db"],["/zh-cn/archives/2016/06/index.html","5d4a56241c58ac006208a426e193179a"],["/zh-cn/archives/2016/09/index.html","e2416abf53410185e64481f86adc4f9e"],["/zh-cn/archives/2016/10/index.html","5a46132d7646331046371306fa1c0feb"],["/zh-cn/archives/2016/12/index.html","37bdb7638b1c1cf1109daaab55bb54fe"],["/zh-cn/archives/2016/index.html","b9127a8da717e62f431d1d7eb048116e"],["/zh-cn/archives/2016/page/2/index.html","f3c89e7329f54680be2a616e6a8abe08"],["/zh-cn/archives/2017/01/index.html","22ec0e67170629a34b42fc423a341c58"],["/zh-cn/archives/2017/04/index.html","9b4c73cb0ecf8b8a0bad512fda07a024"],["/zh-cn/archives/2017/06/index.html","fbeccea36b7632615eb2769df61fc05b"],["/zh-cn/archives/2017/08/index.html","d40666897b15cc05a7c03e24863b3378"],["/zh-cn/archives/2017/09/index.html","22746ba38ab54857c55e5e1c619f150a"],["/zh-cn/archives/2017/10/index.html","57c1142c5e99d131b672a880e55ef11b"],["/zh-cn/archives/2017/index.html","e4b899641be0630c4a7530600d292b6e"],["/zh-cn/archives/2017/page/2/index.html","6eaefa5e43129d3f098b3461f02b37cc"],["/zh-cn/archives/2018/04/index.html","8a10a4d5056fbf6609ad3139b135cbcd"],["/zh-cn/archives/2018/05/index.html","b53e7c24879cfcb452e713829a06ea51"],["/zh-cn/archives/2018/index.html","b7f820f5ef2ac88c31f605250a1cb42c"],["/zh-cn/archives/2019/05/index.html","87c6290a3301747750f2f473fe76808b"],["/zh-cn/archives/2019/index.html","527867d5f83c2394c88cfcc2e4f6c2e0"],["/zh-cn/archives/index.html","edcd0e9301241b4621904e667370cf31"],["/zh-cn/archives/page/2/index.html","c51bf5de6a1d02a27c17d8d33dd23f1a"],["/zh-cn/archives/page/3/index.html","6b8c8e7964ac8b1ad15b23f5dfe1ff02"],["/zh-cn/archives/page/4/index.html","bad730668d3bce2f02cce58540964e94"],["/zh-cn/archives/page/5/index.html","e51b32fa0d80db17aaddb4b818a360ac"],["/zh-cn/archives/page/6/index.html","80159831f46797071709ae91df1a9aaa"],["/zh-cn/categories/ACG/Music/index.html","2c0f5eeebe73fde06d83f3f6171d26f8"],["/zh-cn/categories/ACG/Music/self-copy/index.html","98eaa0d00345b3cec11eba60469f7d6d"],["/zh-cn/categories/ACG/Travel/index.html","0bc7006ba2837ae6b8a8ad5ad5560d47"],["/zh-cn/categories/ACG/figures/index.html","ed4bf5ed5d958b1912adf02c20a547ba"],["/zh-cn/categories/ACG/index.html","63cb6a1fd59ff864cb2ee1d28719baac"],["/zh-cn/categories/dev/Front-End-Dev/index.html","31c64d474b65750206b0cd91645cfec2"],["/zh-cn/categories/dev/HTML-CSS/index.html","38cd2ebb0b182503d0aa741cc97076b7"],["/zh-cn/categories/dev/android/index.html","8ce31abe87350d780ad2ca3f386ce451"],["/zh-cn/categories/dev/cpp/index.html","080606884cba858e4fb97960d6cba6e5"],["/zh-cn/categories/dev/git/index.html","3b3bba02c341e8d50a26c2a624dddb91"],["/zh-cn/categories/dev/index.html","9c8ba368205e9fc9a7f474085b7cc8cb"],["/zh-cn/categories/dev/java/index.html","b713b4999ef956842f0fcaf8aa8f9a96"],["/zh-cn/categories/dev/page/2/index.html","1de372f5fcddafac9bc4bb1b26680dd5"],["/zh-cn/categories/maintaince/blog-setup/index.html","917df0b43d52b102a9782f0ebfabbb6f"],["/zh-cn/categories/maintaince/index.html","b38ea9d36238cc546d0b6f28a3a43269"],["/zh-cn/categories/maintaince/macbook/index.html","6c78c65a65fa84013acfbd1576c09cab"],["/zh-cn/categories/maintaince/router-config/index.html","c274ae5bf29b617e6b9caad5a7c8450d"],["/zh-cn/categories/notes/index.html","db8f4fb5738fa1600a95a05d604f4be6"],["/zh-cn/categories/tricks/android/index.html","ab70e3db6ddcc74c022bbeca2e112cdf"],["/zh-cn/categories/tricks/index.html","060dfb082b94c750873de21bac5d0267"],["/zh-cn/categories/uncategorized/index.html","caa92ede8fb95ab1016e68f93f2f7082"],["/zh-cn/categories/works/Front-End-Dev/index.html","7ed52f5d0e98f31318bcc2222083ba91"],["/zh-cn/categories/works/csharp-wpf/index.html","c97d087c2e82cb57d724c51dabdadcbd"],["/zh-cn/categories/works/index.html","410d65440b6b9bc43cb38862e0318eb5"],["/zh-cn/index.html","af1f06bc0ee3aa179dc650bf0e4852aa"],["/zh-cn/page/2/index.html","49c7d58f860aa4c9e8f0cadfd095c3e5"],["/zh-cn/page/3/index.html","76bd4d3c5d10dc29f9d18a33df46b097"],["/zh-cn/page/4/index.html","19e9c440267b2ffc1a261be6cc247358"],["/zh-cn/page/5/index.html","f8769544da3c197e80811dceabc6c4be"],["/zh-cn/page/6/index.html","da5a257b940c796fc9640d744967a46e"]];
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
