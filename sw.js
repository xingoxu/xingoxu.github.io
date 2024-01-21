/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/03/WNDR4300-setup-log/index.html","196a70bcef31cb87ec0dacdff9055d7e"],["/2015/03/android-hostname-change/index.html","45e07ebd353a0c766f652840936d0c85"],["/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","fe16ae90cee3dc6dd39eba1acf945818"],["/2015/04/android-chrome-issues-with-webpage/index.html","76530729a118e7aa04e4fc605a562e97"],["/2015/04/cpp-study-log/index.html","9985692a89fea843305e8d538a9736f9"],["/2015/04/github-pages-ssl/index.html","7c66d28bb90034bc64a5e3d250b9c806"],["/2015/04/hello-world/index.html","088c3a01c138a4520ae4c3c03da0c84d"],["/2015/04/hexo-setup-log/index.html","84949173b807ffac6107e6815f1d56b0"],["/2015/04/self-copy-cd-inazuma-1-html/index.html","e8c47dfe1678214017197101ded27798"],["/2015/05/cpp-inherit/index.html","7cf4208999fda931fe0084220e835c44"],["/2015/05/cpp-polymorphism/index.html","cc165a1173813fb436b53775417e29b9"],["/2015/09/android-root-ota/index.html","822900b7e2ed9ccf827b937532567181"],["/2015/09/java-learningNotes-1/index.html","f1a51c84708dd876d9e92eba0035ee1c"],["/2015/09/newblog-newlife-2015/index.html","6a3084337f18de7c3b7302f9be3bddab"],["/2015/09/router-rebuild-2015/index.html","22d4752d217e0e841ea3a9ac59da78e1"],["/2015/12/2015-12-21/index.html","c7708b4c47041ada917dae606c33a249"],["/2015/12/PixInTouch/index.html","449d3ba0e69b5f3ed0542eb460b50b9c"],["/2015/12/git-study-1/index.html","1274fd846cb637f1cd4932bff7b121a9"],["/2015/12/hexo-backup-and-migrate/index.html","a1123ac5bbd2f41017b8d03d6637f75e"],["/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","b251cc5815df9925c0fa0d841f46db1e"],["/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","2f8e2d27709c26dbb9372ed8bde47907"],["/2015/12/router-reconfig-2015/index.html","00c34bd3c52e7ec9fd43725ab149a424"],["/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","0c2bbf9cffd2900d8f193adf1763d0a3"],["/2016/01/2016-stepping-further/index.html","62250b7ccbd5e2889c1c0448b82162ea"],["/2016/01/Android-Study-1-22/index.html","d55d171a2060988aed0c57545b3d6b38"],["/2016/03/2016-03-20/index.html","396731980ecba63de7c00b76682b94df"],["/2016/03/GSC-535/index.html","baa346774bd7c0fe0edd87825f5a769e"],["/2016/03/gulpjs-1/index.html","c61b1d683fa0501692124f7a55dc531e"],["/2016/03/hexo-theme-paper-white/index.html","031a84fb221d8cd963dedc426c6eabe2"],["/2016/04/2016-04-19/index.html","15f4009378f89085aa02ab9d6d9fbf42"],["/2016/06/2016-06-16/index.html","8ce9051ae92adfcc90eda6adb19d71ad"],["/2016/09/2016-09-18/index.html","51b9f11ab44fd0d0026a8c0fb2457f23"],["/2016/10/2016-10-27/index.html","65650f9b1f2042360cac3f6276112b76"],["/2016/12/config-switchresx-and-2khidpi/index.html","d9766179a0d5696e0c233451e6da9074"],["/2016/12/improve-duoshuo/index.html","384a7cf254a2cfcde32849386ea18cb0"],["/2016/12/use-travis-ci-your-blog/index.html","59d964aed7f402fe0e645f1d14f39596"],["/2017/01/2017-iyahoi/index.html","725288c1585154e09737c3fca422087e"],["/2017/01/webpack-amd/index.html","86d9cd33933a59b7c0e4a710adf2c57c"],["/2017/04/kotobukiya-syaoran/index.html","d83ebeaf531134bd97d629cebca89b7c"],["/2017/04/macbook-and-surface/index.html","ef726dd48a8af33bc7cd4c46f024376c"],["/2017/04/uc-hyakuya-yuichiro/index.html","a601f4777ce4dd0ea243d6f1b6b82dbd"],["/2017/06/noragami-seichijunrei/index.html","dbd3ee5aa89276cbb8c34896dbffa083"],["/2017/08/cross-compile-55-libev/index.html","3f695e4714c43f8ba943bf3e4c1437f2"],["/2017/08/explore-service-worker-working-lifetime/index.html","31dd14899f1d4ddbbe68e069aac0ef1e"],["/2017/08/kiminonawa-tokyo-seichijunrei/index.html","0994e1ebd75249dc6dbbe9a88ddfbc4e"],["/2017/09/record-user-login-status-methods/index.html","31b8a34881cab2ce20632e4b54342542"],["/2017/10/vue-typescript-early/index.html","35c7cce5da3ccdd201694ae9c6e37356"],["/2018/04/2017-end/index.html","9f2ad466601fdacd57b6a7f41c754367"],["/2018/04/twitter-account-activity-api/index.html","815cb8f3dde37044db6fc43b88758cc8"],["/2018/05/buddy-complex-seichijunrei/index.html","c7fbe254d82ecc79134caa2a55d70db8"],["/2019/05/2019-05-16-record-jp-digital-TV-on-nas/index.html","311d70b50316d1ae73ee71b51481fcac"],["/2019/05/2019-05-17-google-io-tech/index.html","f930afb3791be6c2c6797f55478bcccf"],["/2020/06/cls/index.html","ceee7fff9562e524f60977b4edbd37d5"],["/2020/06/try-serverless/index.html","70f4c95417fe0572ac9d5497da2d829c"],["/2020/07/macos-node-require-path-case-insensitive/index.html","3e74bc19cd819f175430b590da1b3910"],["/2024/01/transmission-under-vpn/index.html","bc17893a8a64d0432051a041a33d04da"],["/404.html","9622e679363b612f202eca9f662761a6"],["/about/index.html","9b08b27ed18034435889c52797f70445"],["/archives/2015/03/index.html","ee980b918e18b3bdc5131861a3bd2b5d"],["/archives/2015/04/index.html","b2c63bed27d80e18f3850d796c625dfa"],["/archives/2015/05/index.html","201ba58e24c5d3f896d7f359275267b9"],["/archives/2015/09/index.html","bb9cb11be73680812c5faa210ebf4a31"],["/archives/2015/12/index.html","103b76e8188afec2358866e18a9cb343"],["/archives/2015/index.html","2272dd57e50fbfe2161b241d985c2f70"],["/archives/2015/page/2/index.html","b9154d401869c58f7c0451897514973b"],["/archives/2015/page/3/index.html","b7cdb85a1831c984fca30d61a978e98c"],["/archives/2016/01/index.html","54b41a8c771209e1bbaa1d4f5f4a8435"],["/archives/2016/03/index.html","5a7674a1db1a91be363c961e95c362dd"],["/archives/2016/04/index.html","46a78933ba24321054f11c2c8671e80b"],["/archives/2016/06/index.html","370ed1774356da8b2e54d762c9ed28dd"],["/archives/2016/09/index.html","9c8aa23381846140e4d35a2411f93655"],["/archives/2016/10/index.html","e25fee34df31aecf613476660605c8eb"],["/archives/2016/12/index.html","c85578285c4d41bed79aeaddbbdb6113"],["/archives/2016/index.html","b68a04c46cbafa1d5a2d1e7376ef4b5a"],["/archives/2016/page/2/index.html","b22eb2e570c74de4d5be22de7e38995f"],["/archives/2017/01/index.html","125abd9d9deb420bf283e8e53d4f82ca"],["/archives/2017/04/index.html","a6306241f3e5157158a519d80a5ac9a8"],["/archives/2017/06/index.html","6664e8ef2c126d73666ebe6c6b4a2d9f"],["/archives/2017/08/index.html","c12dbe6a92ab3c7eed929f9bee38b21f"],["/archives/2017/09/index.html","d58606a0fe3e197a39bb27d4cb0f07cd"],["/archives/2017/10/index.html","a8dd77a00d77d9239351fd9b25e9b2db"],["/archives/2017/index.html","6179b455e973946a34a0bb430cce1c39"],["/archives/2017/page/2/index.html","3e927f7e8ffeab29e0317311bc245959"],["/archives/2018/04/index.html","70d423e19699d94b4afd0c6db3267079"],["/archives/2018/05/index.html","150cbab1d479fc0d180377e6f05b9fb4"],["/archives/2018/index.html","b53073d472e111bac59d0f1a58febf4f"],["/archives/2019/05/index.html","5e2aeb75263bc24c04e736908fe1d2c7"],["/archives/2019/index.html","47204eeb3506706414bbb56ed4529011"],["/archives/2020/06/index.html","53335559ebdc95091a37b0dfa7b6ddb4"],["/archives/2020/07/index.html","318d05f39b1711e5d9331f9adba2153b"],["/archives/2020/index.html","d172da64b96c3b0bd32dd6d2d320e557"],["/archives/2024/01/index.html","297f3123bc5b8f0c2067ee73afe31a23"],["/archives/2024/index.html","8bb18fb74cc86ed8771ab65e0b4dfec2"],["/archives/index.html","2142c78bcf2e58e85f08bc581d3b12ae"],["/archives/page/2/index.html","46f77ff208f448d8cedca0f53cef84ed"],["/archives/page/3/index.html","5d2c38984e23bc2510339e19cb0e8b68"],["/archives/page/4/index.html","3d3bac13d8f989c1241c6be703cd428f"],["/archives/page/5/index.html","c4ce9fac67bf9ee312853ca93afaf4be"],["/archives/page/6/index.html","20b52958bd089378e2c62e6479451c57"],["/assets/images/about-me.png","a066d06c3d9d1fe56c4d921cec7febf3"],["/baidu_verify_YbTSlpWIUJ.html","779049c3a50695ceb3a388ce1e8bc1b9"],["/categories/ACG/Music/index.html","041c48b981e043f7dcbc4360585f8e6b"],["/categories/ACG/Music/self-copy/index.html","5e777bdcc5f5e4e503fd17db8697f6a8"],["/categories/ACG/Travel/index.html","a65ab410125b76a46fb790e8f3383e0e"],["/categories/ACG/figures/index.html","6d4d006d5388c6d5d6f0058edfb460b7"],["/categories/ACG/index.html","12ce2e3e4cb2692d0b740ce6bb69c743"],["/categories/dev/Front-End-Dev/index.html","650f1f6892ed7083a2d485c755c1bd92"],["/categories/dev/Front-End-Dev/page/2/index.html","ada80cffd4e92d86012fb414329e2bae"],["/categories/dev/HTML-CSS/index.html","a621f4535394fcca1eab2c2a92e6a20a"],["/categories/dev/android/index.html","55d26d52716a05514ca25f8102115bdc"],["/categories/dev/cpp/index.html","a3089e4794f4529a12fa6958c214b6dc"],["/categories/dev/git/index.html","fdefce2747797da9f06fb23adeeb4342"],["/categories/dev/index.html","0ad2895f3923597407c1b8fdd2c45b23"],["/categories/dev/java/index.html","888d714dd659d9d27ea0f3e89ceb1fdd"],["/categories/dev/page/2/index.html","befee47df6dc13da7479424a4e2fe261"],["/categories/dev/page/3/index.html","12c0db68fb071da67494f95ccbfbb8d7"],["/categories/maintaince/blog-setup/index.html","d6ddc819c6d7ff5bd116fb859003f920"],["/categories/maintaince/index.html","acd5a584a9a62d2a296e975d8bc78363"],["/categories/maintaince/macbook/index.html","2b076bb75b10abd606b2bf7ec46cb503"],["/categories/maintaince/router-config/index.html","ffd1a45a9c2b92e59a319726dda08da2"],["/categories/notes/index.html","6a6e8340168b71c3063c0c99c24f561c"],["/categories/tricks/android/index.html","2537b4d75d954e85307108432f6df702"],["/categories/tricks/index.html","421434afcd6bf3b6bfa3351087da7038"],["/categories/uncategorized/index.html","874537044290f124657303e275e23a08"],["/categories/works/Front-End-Dev/index.html","c41e4751ee3810d50b662ef4d0262c5a"],["/categories/works/csharp-wpf/index.html","47e152d001b09be0a87c94fd8cb628da"],["/categories/works/index.html","73428d0c002af3ea97ad129c5220479a"],["/css/seichi.css","c60ad00990790aacbe0a9ff08766c515"],["/css/style.css","e3abc56736917946e8536ef38cc2c5cd"],["/google311213f0c8d812a9.html","51f1ee3c2f13a21a1a40b3dae4954454"],["/img/coderwall.png","1976fe70f1ee8ed243e0975402e06a2d"],["/img/delicious.png","952d9b54d8bcfe7b998f67ff48c4dbce"],["/img/douban.png","d42a163f932100e621d22732db34ecdb"],["/img/facebook.png","4bd685f6c9fdaccabf07bdd52173facb"],["/img/github.png","3c4b6267a1a3fedebdc7d089610ecfe7"],["/img/google.png","c385f5304465716b2d6c9ada94c657ab"],["/img/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["/img/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["/img/linkedin.png","4c72c4896f3c23f736cb1ad08f0c866e"],["/img/mail.png","38a7b8302dac028bf03b22d228938abf"],["/img/pinboard.png","9b6186cb97adbe50311f94e50f2392cf"],["/img/pinterest.png","e1b8e655d1b99b40ebcbd96977ae234e"],["/img/rss.png","ec8cf9b5a98011aa75cc0a4f25024dc9"],["/img/scrollbar_arrow.png","be5381cedbd6b778b1d92e224fd71cf7"],["/img/stackoverflow.png","039128ececb47b33bccedd98dc9fc809"],["/img/twitter.png","d2289a4936fefa41d9f92cf89939be5b"],["/img/weibo.png","b382032b316ee38c6d537fe9d36ae54c"],["/img/zhihu.png","e6352c0e1957beef3009268ae747c3aa"],["/index.html","6a5eebab7b92879152f92d332fcb4ddd"],["/ja/2015/03/WNDR4300-setup-log/index.html","2609b8216301438f4d11fdbb66c960c8"],["/ja/2015/03/android-hostname-change/index.html","507bdf1d19a956cbf7bfce0e0139acf8"],["/ja/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","33e818daa3093a625bec7cdd7b4a9347"],["/ja/2015/04/android-chrome-issues-with-webpage/index.html","0b29b54584e8aad5a0ba81631b777e8c"],["/ja/2015/04/cpp-study-log/index.html","304fec88546c033fe6fba950815055a6"],["/ja/2015/04/github-pages-ssl/index.html","8096a64ed7c0fa04f8397a79c9f4ae9c"],["/ja/2015/04/hello-world/index.html","e5cf66149ca68e7e11dbf264d8c7cc52"],["/ja/2015/04/hexo-setup-log/index.html","3420316097c8ce2190151498120534ca"],["/ja/2015/04/self-copy-cd-inazuma-1-html/index.html","b789dd91bd407790fabbc031f3e68e71"],["/ja/2015/05/cpp-inherit/index.html","9c9a5acd8873fa213b803c7cafae44c8"],["/ja/2015/05/cpp-polymorphism/index.html","38e27e6e14a347446ebc4c89e8d44d86"],["/ja/2015/09/android-root-ota/index.html","77dafaca3967579f491d8eda1f1929f7"],["/ja/2015/09/java-learningNotes-1/index.html","91c23552bad77be0ec5d5a27539ad073"],["/ja/2015/09/newblog-newlife-2015/index.html","7a1162b1c7c1fc6591948e912f2ec00e"],["/ja/2015/09/router-rebuild-2015/index.html","076480ecdc15ab5a7d9e5fee6e23ffea"],["/ja/2015/12/2015-12-21/index.html","de1c5471ac780c2773de9604a5e52daa"],["/ja/2015/12/PixInTouch/index.html","2c2769d954f73bc94d64c68fbe143e77"],["/ja/2015/12/git-study-1/index.html","fb0c7527e39c6e9d9b0f040a4f22680c"],["/ja/2015/12/hexo-backup-and-migrate/index.html","bb27905982dab0451d986a1c421fdf55"],["/ja/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","8abf85a7952c5378ec6c111eb8d94c8e"],["/ja/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","0c63f617b1c1804d5d5a7ac800744b41"],["/ja/2015/12/router-reconfig-2015/index.html","67db5a5fa0da549f10b8c26066df7e07"],["/ja/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","1aa24f6b5a327b3066c670a2b1a76fd8"],["/ja/2016/01/2016-stepping-further/index.html","1d30e360e4801975e45e5f3685a7f1e9"],["/ja/2016/01/Android-Study-1-22/index.html","2cd20dd820f224fe236da4369f230f59"],["/ja/2016/03/2016-03-20/index.html","c955a548b1ad34c9149e1978efb6dc16"],["/ja/2016/03/GSC-535/index.html","0950a6db80e1bf830c4063ff434e4835"],["/ja/2016/03/gulpjs-1/index.html","e4bf4b320ca6220b5549e1be4f458d8e"],["/ja/2016/03/hexo-theme-paper-white/index.html","50bbc703fc9e5ba65e515e05d16d51b3"],["/ja/2016/04/2016-04-19/index.html","3ee9f9f490034c7b25b90bf0510ded77"],["/ja/2016/06/2016-06-16/index.html","bd75710de1292e02461cd3c8c352a08f"],["/ja/2016/09/2016-09-18/index.html","d82e094538c8440850dd02c676c55991"],["/ja/2016/10/2016-10-27/index.html","fc6e985f3fe6a07d97a10984f46d2959"],["/ja/2016/12/config-switchresx-and-2khidpi/index.html","1c9653a856311101d8cb5d76f8ac6b9c"],["/ja/2016/12/improve-duoshuo/index.html","cfd41aee2f27593cf0b23c567cb67bb9"],["/ja/2016/12/use-travis-ci-your-blog/index.html","8439ad575432b8c69594b62c7e79779d"],["/ja/2017/01/2017-iyahoi/index.html","f7e164871abdb6cb609840226bd62b0e"],["/ja/2017/01/webpack-amd/index.html","0c31a52beee69d88c8a264d3a3efdf29"],["/ja/2017/04/kotobukiya-syaoran/index.html","ddf0ff1124af080f9ec75ca7b48af6c1"],["/ja/2017/04/macbook-and-surface/index.html","2f13954040f0acc3ba38001a6722bc00"],["/ja/2017/04/uc-hyakuya-yuichiro/index.html","8692b796bd140e85a91dce29d56e0d3d"],["/ja/2017/06/noragami-seichijunrei/index.html","971ef2fdba7f6381868b2821d578606b"],["/ja/2017/08/cross-compile-55-libev/index.html","d10df9a8f9d84dcc628e0f2b16d2255a"],["/ja/2017/08/explore-service-worker-working-lifetime/index.html","56e84918aea81d331f641fd923b9a36a"],["/ja/2017/08/hello-jp-world/index.html","c82c239f5b6ed9bf07103e29c5cb0245"],["/ja/2017/08/kiminonawa-tokyo-seichijunrei/index.html","7cee14a1385ad0338b3b736def44d24e"],["/ja/2017/09/record-user-login-status-methods/index.html","5ad365fd74a4dcf9b3bd973567bd5e56"],["/ja/2017/10/vue-typescript-early/index.html","ab5443af135bd6968fb784396075822a"],["/ja/2018/04/2017-end/index.html","d47b4c3fa6814afd164640272da7b1c8"],["/ja/2018/04/twitter-account-activity-api/index.html","5544e88fe32df31eadc7dc3f70447557"],["/ja/2018/05/buddy-complex-seichijunrei/index.html","b4ee3d668fac43c0ec92b619d1f79a09"],["/ja/2019/05/2019-05-16-record-jp-digital-TV-on-nas/index.html","7d7388fb26ceaae81cfcac917145383b"],["/ja/2019/05/2019-05-17-google-io-tech/index.html","219e0132a097d05d8eb888b38812ef46"],["/ja/2020/06/cls/index.html","530d865d5bc6bc086fff604e4b097388"],["/ja/2020/06/try-serverless/index.html","9eb5d33aca0ffbc8440e2831c50ada11"],["/ja/2020/07/macos-node-require-path-case-insensitive/index.html","2c136e3fe068a3f13c866177446e7cdc"],["/ja/2024/01/transmission-under-vpn/index.html","8e2d06b110c2fc45c4768d27b28d5c58"],["/ja/404.html","9cc7e97d0cb672a6e395ce2305533ff1"],["/ja/about/index.html","f284b32d8cb12d227a5250f2de20cb0f"],["/ja/archives/2017/08/index.html","e06c29a54d99f053013dffcecb77ead2"],["/ja/archives/2017/09/index.html","e4427567751ef8e54f4a177114026316"],["/ja/archives/2017/10/index.html","fb16762903164cac38f2b74c449a890d"],["/ja/archives/2017/index.html","fe43d98d2775f39f7d2d9df1acf5f117"],["/ja/archives/2018/04/index.html","6dea2e084cda98b5d03f1217350489be"],["/ja/archives/2018/05/index.html","680adaea61d0a7ea5ed47770183acacc"],["/ja/archives/2018/index.html","928bd9f672a50feb1296e3338d83a69c"],["/ja/archives/2019/05/index.html","3b43b76f39e17a8835d952746123be89"],["/ja/archives/2019/index.html","fd3aa062b283c33275e2af73c9c8143b"],["/ja/archives/2020/06/index.html","c3f29492c8db9aa5ab82959599f4af26"],["/ja/archives/2020/07/index.html","130ea85255eb5b2f066619111585dd6f"],["/ja/archives/2020/index.html","deaa6635e6a6ddfa8ff08db5f7bf660d"],["/ja/archives/index.html","b739aab782604d301949e7499bd138b9"],["/ja/categories/ACG/Travel/index.html","daeb092ffe4a2bc24936b5471b25e36e"],["/ja/categories/ACG/index.html","720bed35caabe8ceeaa8b2efc0b87f74"],["/ja/categories/dev/Front-End-Dev/index.html","8a45901e3b5b00f8863c0d1e23735be9"],["/ja/categories/dev/index.html","397ba83b57ba5e824537fef4d81115fb"],["/ja/categories/uncategorized/index.html","77d253858d842865c2af4da5324658ff"],["/ja/index.html","08a01139507bc953196a3f9b2d00efac"],["/ja/nihongo-test-page/index.html","e2ea6b279525e16c4ead08035f297fc5"],["/ja/resume/en/index.html","eec1c2ebbd1231470e1838025250eaf5"],["/ja/resume/index.html","1e56adf9d6e9d2aae25e6be05444b34a"],["/ja/resume/ja/index.html","00e87cf589a881b0229654d57125315f"],["/js/instagram.js","7d7a9e2e7286ba2d5b6d12068214f0c3"],["/js/jquery.lazyload.js","28c23bc40080d31144776e9a8736837f"],["/js/main.js","2e92f29b0cd90bddc062915eb46a858c"],["/js/mobile.js","20029df2609ddd5d2b2d346edbb297c0"],["/js/nextpageajax.js","c3bde8d7bb1f967fb319f57a187ea51a"],["/js/pc.js","631b535186aab0e262485ee2bf9da628"],["/js/ripple-effects.js","b9c11903da0ef5c3d790b41369c3137e"],["/js/share.js","de52ac3d43e43c1951a08b0804458a8e"],["/js/totop.js","661822968b58fd439f46bd54031238d6"],["/keep_origin/affiliate_jump.html","71bf6d72c5d080ec2b3f8ecfae3d71ed"],["/nihongo-test-page/index.html","e98c7cf25e4ead32b07cb00f74246c5e"],["/page/2/index.html","a3b24f60268121dbdc080f6d31a8c962"],["/page/3/index.html","7da94e4838f9fb17493947dae7b17bcb"],["/page/4/index.html","dc74bdf25220b52587b2e179298dd06b"],["/page/5/index.html","5bbb3ef0859ec4a77b1453b67e0fe67b"],["/page/6/index.html","5b636ee7e39291a0e9c4a465d7d1c713"],["/page/7/index.html","d126cdc0a687175ae6f4584a2c8f4c44"],["/photoswipe/default-skin/default-skin.css","426e8908d7426603ca203b6d16281b1e"],["/photoswipe/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photoswipe/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photoswipe/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photoswipe/photoswipe-ui-default.js","0c9196aa8943ce8a8045c9f4cc62915c"],["/photoswipe/photoswipe-ui-default.min.js","9517baca43cd4e9cb23ff337fbc1baa1"],["/photoswipe/photoswipe.css","7dc0df107159e1be66d4464171561e5b"],["/photoswipe/photoswipe.js","a8d26ff34943c859884acbd6b2531315"],["/photoswipe/photoswipe.min.js","f5cd6479c4e4682545a9603e6b50c741"],["/resume/en/index.html","ddc80a7fb5c20c4a5df680d3e419c6f5"],["/resume/index.html","6b8f3bb8ce7e5523bfb9875640a09f62"],["/resume/ja/index.html","1267fc3ffda7ee9a2d0dda1529c0f742"],["/setup-log/blog-setup/github-pages-ssl.html","d5e315a4f7725d0c5a828ab2ac48dfe3"],["/sw-register.js","0163190b89ce56ce681cb5b5ec7188d2"],["/zh-cn/archives/2015/03/index.html","4a39a14162f85dd06dcc271a6fd34d1d"],["/zh-cn/archives/2015/04/index.html","180390b95da019cc09b6d577dbd7fb63"],["/zh-cn/archives/2015/05/index.html","b11e1332e67888185fb92e0c574a6c6e"],["/zh-cn/archives/2015/09/index.html","5a658378ca367fa9d48dc0e9e892cd32"],["/zh-cn/archives/2015/12/index.html","d9e102d3556ffd1b650e7a90014a63d7"],["/zh-cn/archives/2015/index.html","1dabaa6b39420636f18010eb79e45f9d"],["/zh-cn/archives/2015/page/2/index.html","2c7ca28248f19716303035083906e3ab"],["/zh-cn/archives/2015/page/3/index.html","15aef0d665f875e9a1f5132e57c8d70c"],["/zh-cn/archives/2016/01/index.html","857b13c6bd844df87214a76342bed8f0"],["/zh-cn/archives/2016/03/index.html","d61815689d0737de71268627928197d8"],["/zh-cn/archives/2016/04/index.html","0017b9f6abc2c30cc6ceed5c31bd2097"],["/zh-cn/archives/2016/06/index.html","550e650266489f9219971ac334869e16"],["/zh-cn/archives/2016/09/index.html","9e0e396334a609a687833d6c6f4f8375"],["/zh-cn/archives/2016/10/index.html","53ccebb249ab1cdb880ac96fe2bd2d05"],["/zh-cn/archives/2016/12/index.html","dd3be3a534798cd0f969cf1a3f05923c"],["/zh-cn/archives/2016/index.html","8a8fa169d3342cfca97e5782088ca02f"],["/zh-cn/archives/2016/page/2/index.html","5699968b8ab4347463b17e807eda54e1"],["/zh-cn/archives/2017/01/index.html","fc2b10d9d10118ff46ffb09022d65da9"],["/zh-cn/archives/2017/04/index.html","0dbfe86807f099085217932a03da220d"],["/zh-cn/archives/2017/06/index.html","d680a9690af349556d11d1cddd6d6921"],["/zh-cn/archives/2017/08/index.html","f645e411516348eacda1662235e25d63"],["/zh-cn/archives/2017/09/index.html","4fccbc0209edbb9a65f8825c96b09d04"],["/zh-cn/archives/2017/10/index.html","32791bbb697c7751b58a0fb4395279dd"],["/zh-cn/archives/2017/index.html","381120cdf84ceb43f1dbc1ae0af75d18"],["/zh-cn/archives/2017/page/2/index.html","a28d0045a34063fa72b08a4fccd11607"],["/zh-cn/archives/2018/04/index.html","f1259cb3fa48a6ffa9fd9a35b90a362d"],["/zh-cn/archives/2018/05/index.html","3320dd588d1e05cf4de38f9902509871"],["/zh-cn/archives/2018/index.html","27315bfabfa164b66782ee9821db6f93"],["/zh-cn/archives/2019/05/index.html","1f0ec68913fc3e1b6c9ddff1dd37a817"],["/zh-cn/archives/2019/index.html","5406fac681bc39e4275e5ffc4883efa5"],["/zh-cn/archives/2020/06/index.html","762e072d7d69983a8655abcd51ce8593"],["/zh-cn/archives/2020/07/index.html","fa63190b6deedc0f901d7e83ffe7f51a"],["/zh-cn/archives/2020/index.html","fdd8e62ec1a27148b0471cbafc1b9899"],["/zh-cn/archives/2024/01/index.html","f798fd54be9dc37b6578bffadc0a99e4"],["/zh-cn/archives/2024/index.html","453a082573a29e1db69f80168ff4bc06"],["/zh-cn/archives/index.html","5e9bd6b49c873105f0c11ef460100245"],["/zh-cn/archives/page/2/index.html","75e748963efa3e555d8d02b5515f4ace"],["/zh-cn/archives/page/3/index.html","cbdcf7a1f184fcc287c4e4defa670bc9"],["/zh-cn/archives/page/4/index.html","43e0967e4b7366f69f2923f482067514"],["/zh-cn/archives/page/5/index.html","74ddfbb3f40ec5239e9c83fcc17f1432"],["/zh-cn/archives/page/6/index.html","c3f155c6bc8e99cdf82abb0f8b3702e7"],["/zh-cn/categories/ACG/Music/index.html","a6b558f1665e273cfb347ce622831dbf"],["/zh-cn/categories/ACG/Music/self-copy/index.html","31b80d970b3602e011aaf2e97a7e3727"],["/zh-cn/categories/ACG/Travel/index.html","dfa3eaf7a8dee8ef8fdc5ca0a0c39562"],["/zh-cn/categories/ACG/figures/index.html","c4f568bbeedcad19554ea75ed25f7d04"],["/zh-cn/categories/ACG/index.html","d1f6cef340b7aa13c8b7ac113b9e3a2b"],["/zh-cn/categories/dev/Front-End-Dev/index.html","e077c9087cf5f3a4d8cb4a29f7937a84"],["/zh-cn/categories/dev/Front-End-Dev/page/2/index.html","c07885bccfc47606a6461ec50f93e9df"],["/zh-cn/categories/dev/HTML-CSS/index.html","5598546338d550fb82901463d28bab3a"],["/zh-cn/categories/dev/android/index.html","9abb0d5b897a96d49ba3bdb32fdd8bea"],["/zh-cn/categories/dev/cpp/index.html","db3ab851bf17884133bcd1b2e20fbc12"],["/zh-cn/categories/dev/git/index.html","e21b155a9be5073826b8c7e080ffdd6f"],["/zh-cn/categories/dev/index.html","f436cc323e5e0d30dfccdfe909c73969"],["/zh-cn/categories/dev/java/index.html","f6eaabb8a8278aa3b7761214dd527dd2"],["/zh-cn/categories/dev/page/2/index.html","403c4b41c162b93e606d9e1ac7165105"],["/zh-cn/categories/dev/page/3/index.html","274759af192ce77c32b6c7e1b5fd2086"],["/zh-cn/categories/maintaince/blog-setup/index.html","f91845bec8de2ba93f6676c2dc7bbb0c"],["/zh-cn/categories/maintaince/index.html","6281ec3a8752d8833578ed71fe719a7c"],["/zh-cn/categories/maintaince/macbook/index.html","1e1df74f7ebd35273896ddb9e5f62e20"],["/zh-cn/categories/maintaince/router-config/index.html","74b71f7855a998d49b382160bfcd7eb3"],["/zh-cn/categories/notes/index.html","6198ac60dd3f4b17718c1740aafaabc8"],["/zh-cn/categories/tricks/android/index.html","f7e0b12c3cd8cee0850e47d1805cf329"],["/zh-cn/categories/tricks/index.html","24ad6bc4250b67e697c8a0893a609bfc"],["/zh-cn/categories/uncategorized/index.html","fdddc5c040285aec5a2fe57d1de9c655"],["/zh-cn/categories/works/Front-End-Dev/index.html","27e4e7deb9659d4d918d399805465a80"],["/zh-cn/categories/works/csharp-wpf/index.html","4909b085aa5bcaff0fe590876ed58bbc"],["/zh-cn/categories/works/index.html","59cd4ba273ee81cfee27108b6f649788"],["/zh-cn/index.html","0648f570653061c381d5724a89eb719c"],["/zh-cn/page/2/index.html","27bfd614137f1cec3f72c9df75d15c5d"],["/zh-cn/page/3/index.html","4011670987eb7be5494a293362fc0473"],["/zh-cn/page/4/index.html","be46fe8e9a5312e8ae4a6c1a44568424"],["/zh-cn/page/5/index.html","251811e4d8f096ae55262720d5169a0f"],["/zh-cn/page/6/index.html","7d47a8b2f7379b908bf2fc5a41c5c2ab"]];
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
