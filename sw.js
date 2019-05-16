/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/03/WNDR4300-setup-log/index.html","c3c0d48f906a943aa3689c707d6b160a"],["/2015/03/android-hostname-change/index.html","b24d3bbee83fc34731e28460c323371c"],["/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","6334b4417682071195e43ca4431c8846"],["/2015/04/android-chrome-issues-with-webpage/index.html","cbf668cea6149f95d2017550dfbab8fc"],["/2015/04/cpp-study-log/index.html","9c62f14c4bf710fd637b1ed6327ca104"],["/2015/04/github-pages-ssl/index.html","a2eaebc200475fc39ead33b8d7dd725d"],["/2015/04/hello-world/index.html","7d84fce232838522da84d9b7299548d4"],["/2015/04/hexo-setup-log/index.html","2be68b7acb2ea4610828c7df3ac10a17"],["/2015/04/self-copy-cd-inazuma-1-html/index.html","fb4f7a0fa8c04feae30713ad005c3fc0"],["/2015/05/cpp-inherit/index.html","68f80399ea2c44cf474dfed135893d51"],["/2015/05/cpp-polymorphism/index.html","6b9930fa6b4f6c485704a4c1b20322df"],["/2015/09/android-root-ota/index.html","50cdc0ae07d7149e9bb08707488aafba"],["/2015/09/java-learningNotes-1/index.html","1ff18aed46d508fdf700684c49edd039"],["/2015/09/newblog-newlife-2015/index.html","055cb6185c084e2eaeed6211e1759eaf"],["/2015/09/router-rebuild-2015/index.html","cdd8024faa6dbda891cc427a1e28321e"],["/2015/12/2015-12-21/index.html","1fc5fba1f683785829a14fd6bfb3fe1d"],["/2015/12/PixInTouch/index.html","19a07bce9353e057147f827a08e64f8e"],["/2015/12/git-study-1/index.html","1df69d603260952c7966371eb94c6970"],["/2015/12/hexo-backup-and-migrate/index.html","f5a1772381a33318966de37a7856b541"],["/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","5e1f953455b73975e7dd8924c4c6f570"],["/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","78612d8f1c2a27ba0875ca9617cc697a"],["/2015/12/router-reconfig-2015/index.html","0621793e54898186ddc24e248af27a5a"],["/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","16a2f916476f43bd0c7eca2886b966ae"],["/2016/01/2016-stepping-further/index.html","6d9b9dc5ea08941676c616163790fc01"],["/2016/01/Android-Study-1-22/index.html","4eb77daaf9bc2cdecd33cc7fa64a87a0"],["/2016/03/2016-03-20/index.html","63a89c61a864493df8aedff15ec29611"],["/2016/03/GSC-535/index.html","c951dd861ce5afd4372a1fffaef9941e"],["/2016/03/gulpjs-1/index.html","192dbca98706bcbeab943bf42ccf8316"],["/2016/03/hexo-theme-paper-white/index.html","b8b0cb202f503dc818b96725a747ae68"],["/2016/04/2016-04-19/index.html","0cfc185ac2196a8b82868c721d872e79"],["/2016/06/2016-06-16/index.html","6b71429f7c29df370d7f08df14e2b76c"],["/2016/09/2016-09-18/index.html","308938a1412d95639fd3a8228c90dc50"],["/2016/10/2016-10-27/index.html","a01e168b3bdf3d01ee53aeee31cf16dd"],["/2016/12/config-switchresx-and-2khidpi/index.html","98299a5ade1526d4e395ac19df809796"],["/2016/12/improve-duoshuo/index.html","0b2874b310d6155fa013a0dc049a8cc6"],["/2016/12/use-travis-ci-your-blog/index.html","26d3be9a7b3d1ef2d26b1bf9a9d808e9"],["/2017/01/2017-iyahoi/index.html","245095f3e20d70c91faf92ca3b646e2c"],["/2017/01/webpack-amd/index.html","ce751ac930a83fc7de9363fe12833333"],["/2017/04/kotobukiya-syaoran/index.html","e7906623bbc6662f5e88a769ae604e63"],["/2017/04/macbook-and-surface/index.html","1abfcae28bb47fdd4baef39ef3e89110"],["/2017/04/uc-hyakuya-yuichiro/index.html","4f2ab35f43009e39967a667ff2e0e11b"],["/2017/06/noragami-seichijunrei/index.html","2ce2679c41b9fd3ac378fdb45a69d2b7"],["/2017/08/cross-compile-55-libev/index.html","d3d6fa6e6e468d2ce93b4b0774d47370"],["/2017/08/explore-service-worker-working-lifetime/index.html","624baf01474cd0048e6db3d4e689346f"],["/2017/08/kiminonawa-tokyo-seichijunrei/index.html","8540752882bdaf7adbc8ff0e4d7ef516"],["/2017/09/record-user-login-status-methods/index.html","b21bb13306586e12c9bb476b31fde2bb"],["/2017/10/vue-typescript-early/index.html","efce3e3626bb04c8b5ed80af7e31511b"],["/2018/04/2017-end/index.html","28e1c834324a68b5a57b019671c84e2f"],["/2018/04/twitter-account-activity-api/index.html","a4ee354099d01e719bc085cab79bbb79"],["/2018/05/buddy-complex-seichijunrei/index.html","f37e2c0565567559dbeabebd6a050021"],["/2019/05/2019-05-16-record-jp-digital-TV-on-nas/index.html","41f47553f5d5d634fe7add31a5a85cbe"],["/404.html","6f47be319cee32a46e51aaf8096ef533"],["/about/index.html","9eff55c286787917a752d1bedc600dc0"],["/archives/2015/03/index.html","84c06b44c375ea41845df36d21418b46"],["/archives/2015/04/index.html","b497371dedcd6c80caaf0dfd4d6f8d49"],["/archives/2015/05/index.html","005f8b6472aa593ad4dd3eaf7455f5a2"],["/archives/2015/09/index.html","adc890bd4bb7c87889d48378aa2a3a72"],["/archives/2015/12/index.html","ceee03a3401e7935965ff49cd58623eb"],["/archives/2015/index.html","96b133038afe897a02452e1b2f4a1174"],["/archives/2015/page/2/index.html","e903582ec3f96c37f355327f38fc6bf3"],["/archives/2015/page/3/index.html","672c7efb4db95a87d430b21e645e6325"],["/archives/2016/01/index.html","3bb0db48ca858d43b0c8971dfd1f3b00"],["/archives/2016/03/index.html","d1076e97587989cf640e467be0a906e0"],["/archives/2016/04/index.html","8ba655dcc4687175d73250d3248d9af6"],["/archives/2016/06/index.html","28b55e18c0dcb5a1a23421844a4762ed"],["/archives/2016/09/index.html","6f0bec9b7b885a05500c4d029173baf6"],["/archives/2016/10/index.html","583d2baff51691a848e6c37c1e079c97"],["/archives/2016/12/index.html","b123a910d56259a256974162fde91b14"],["/archives/2016/index.html","fcdd97e822612740dc5036fe4c51cf56"],["/archives/2016/page/2/index.html","cd39843afea7335323602858e6a6148e"],["/archives/2017/01/index.html","55ea76ee8d9cd3cf27fdfaa559e34aa0"],["/archives/2017/04/index.html","0f471c9c93736d86245f9d4fe21732be"],["/archives/2017/06/index.html","3e78463129737a209a6805511b33e4bf"],["/archives/2017/08/index.html","59d2df1e16dd0c0bd0fecdd5050ec174"],["/archives/2017/09/index.html","d78df5dc0ebfc71d5d610d2e99583f07"],["/archives/2017/10/index.html","703bedf9c94ac60ac601647c1ffe4ed9"],["/archives/2017/index.html","8d792f0d9e36140b4053584d752a3722"],["/archives/2017/page/2/index.html","2ef437aacac92c9cdf4e88ed6f065341"],["/archives/2018/04/index.html","3a22afb2ca3e9859327b4e2140336926"],["/archives/2018/05/index.html","760c22856e1647367bd6a26906b2e9c4"],["/archives/2018/index.html","a0abf9919cb50e92678ee646e5ccab4c"],["/archives/2019/05/index.html","c298cd31e02139ea5b0956ae04769f10"],["/archives/2019/index.html","da1aad82dd4c5c4d9768de7f950abc01"],["/archives/index.html","eaeeaf4bd3b4f7e143f1953fb8b0b91d"],["/archives/page/2/index.html","536161bb3cde0ad604d9b99af5b82e3a"],["/archives/page/3/index.html","d753801be12d86a751e36f8db334b410"],["/archives/page/4/index.html","8a150192ec6922306da5c267b2288a8a"],["/archives/page/5/index.html","6dd5d1f11cf16a1efcbcec0071ca051b"],["/archives/page/6/index.html","fd22b910ffc87259f15b3f10acf9d207"],["/assets/images/about-me.png","a066d06c3d9d1fe56c4d921cec7febf3"],["/baidu_verify_YbTSlpWIUJ.html","779049c3a50695ceb3a388ce1e8bc1b9"],["/categories/ACG/Music/index.html","823f9e8e345625545f29817ec9f84d7f"],["/categories/ACG/Music/self-copy/index.html","02eac243e6d850982f04fd7b61b0941a"],["/categories/ACG/Travel/index.html","59d266a11841dd91a9df42e333190586"],["/categories/ACG/figures/index.html","41ed3fc56e35001c8914c7a84e4bdbf3"],["/categories/ACG/index.html","180226d750f3b30e6628c3b0ddf4c238"],["/categories/dev/Front-End-Dev/index.html","803340c8c8e500cbd2fab5f29e4b8df7"],["/categories/dev/HTML-CSS/index.html","a8ccc689357d3a1cb1658817d5fe01f4"],["/categories/dev/android/index.html","0c398a5bfbd1182c8b0c941cf922a411"],["/categories/dev/cpp/index.html","b6f5d116f1a3182280f0b1082f19e440"],["/categories/dev/git/index.html","673082d6f7d624ad0f6038fd1a748653"],["/categories/dev/index.html","9638bc7c4a3d54290a3b868d30ad09c3"],["/categories/dev/java/index.html","61d7c4a657d53374e2bb4247f3d34401"],["/categories/dev/page/2/index.html","f00c028ca2b7d2dc45263d9148821fe7"],["/categories/maintaince/blog-setup/index.html","15a3a04dbfe93f17a940f90dcd1ddc12"],["/categories/maintaince/index.html","0ee7f84a9ba5f17dce396c5f423d7618"],["/categories/maintaince/macbook/index.html","2691c1a5dfb051182ac2f9600f1180ac"],["/categories/maintaince/router-config/index.html","47ecb0acc9a3890cf645e66d34917448"],["/categories/notes/index.html","cfdb051d70f2652898379d698efd054f"],["/categories/tricks/android/index.html","ecf9e15657acba51c3bfef790fefca58"],["/categories/tricks/index.html","538b098d3d77744677ed2237e37b4653"],["/categories/uncategorized/index.html","cbfa493636343bbfda4a178f4e5ca8dc"],["/categories/works/Front-End-Dev/index.html","05430a7a01c0072a46de736ea6244b88"],["/categories/works/csharp-wpf/index.html","254ff8dce6cf4cd4ac8286930b28ab86"],["/categories/works/index.html","ba9102fcdce88bbdb4ae9d6ebf8a6438"],["/css/seichi.css","42693f35c4c482207368dd363ea27373"],["/css/style.css","3a889bdecdea7d51589943325864751a"],["/google311213f0c8d812a9.html","51f1ee3c2f13a21a1a40b3dae4954454"],["/img/coderwall.png","1976fe70f1ee8ed243e0975402e06a2d"],["/img/delicious.png","952d9b54d8bcfe7b998f67ff48c4dbce"],["/img/douban.png","d42a163f932100e621d22732db34ecdb"],["/img/facebook.png","4bd685f6c9fdaccabf07bdd52173facb"],["/img/github.png","3c4b6267a1a3fedebdc7d089610ecfe7"],["/img/google.png","c385f5304465716b2d6c9ada94c657ab"],["/img/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["/img/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["/img/linkedin.png","4c72c4896f3c23f736cb1ad08f0c866e"],["/img/mail.png","38a7b8302dac028bf03b22d228938abf"],["/img/pinboard.png","9b6186cb97adbe50311f94e50f2392cf"],["/img/pinterest.png","e1b8e655d1b99b40ebcbd96977ae234e"],["/img/rss.png","ec8cf9b5a98011aa75cc0a4f25024dc9"],["/img/scrollbar_arrow.png","be5381cedbd6b778b1d92e224fd71cf7"],["/img/stackoverflow.png","039128ececb47b33bccedd98dc9fc809"],["/img/twitter.png","d2289a4936fefa41d9f92cf89939be5b"],["/img/weibo.png","b382032b316ee38c6d537fe9d36ae54c"],["/img/zhihu.png","e6352c0e1957beef3009268ae747c3aa"],["/index.html","66a6657f1926df5f4a95f221e24ea67f"],["/ja/2015/03/WNDR4300-setup-log/index.html","f8c9ad3546fc537fb6c48df0449ccb12"],["/ja/2015/03/android-hostname-change/index.html","8a4c3e6dfda567ab7e32808e2e20f78d"],["/ja/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","e97f3d1a4a2635b896b06716b5c9d5ce"],["/ja/2015/04/android-chrome-issues-with-webpage/index.html","df29b72b8a447ba2f955fca0d67cbbb1"],["/ja/2015/04/cpp-study-log/index.html","d34508943a4ae55e87b5009536dd9431"],["/ja/2015/04/github-pages-ssl/index.html","61567a4bc21991f85d35b116e9a93955"],["/ja/2015/04/hello-world/index.html","fdc8832977a288f3b16aa73d882f9b58"],["/ja/2015/04/hexo-setup-log/index.html","5d6d4741f329247b86b0dc28ce48768b"],["/ja/2015/04/self-copy-cd-inazuma-1-html/index.html","f004fe3069673be4578171cc1e842d01"],["/ja/2015/05/cpp-inherit/index.html","ce85c1d5cb1dc5a2d5bde93ed5b21948"],["/ja/2015/05/cpp-polymorphism/index.html","e55a1e65da0f57bf6f7eed061ef19aa4"],["/ja/2015/09/android-root-ota/index.html","ca931e0fedca57775697d07731334a9d"],["/ja/2015/09/java-learningNotes-1/index.html","201171f82019fd5c0c64a980606899be"],["/ja/2015/09/newblog-newlife-2015/index.html","a46ad77c392a6ea848c51de059f9e8cd"],["/ja/2015/09/router-rebuild-2015/index.html","28d5fe99c6eb9818520ae869723905b3"],["/ja/2015/12/2015-12-21/index.html","5160761b76f4b12b7418dd86ed8b6bff"],["/ja/2015/12/PixInTouch/index.html","898d75145bb2ed306ba00f1f6642ccbf"],["/ja/2015/12/git-study-1/index.html","a9ef370283758657aa5c0b8f7910bbf7"],["/ja/2015/12/hexo-backup-and-migrate/index.html","d56a044fbc08d2e5776d845cad5c0d39"],["/ja/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","7fbea02489250e5024a34533c4cce1f1"],["/ja/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","d81abb69bfc1827d4a548fd81c751c0d"],["/ja/2015/12/router-reconfig-2015/index.html","4318f3cf978838fac6b35548acebf600"],["/ja/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","7ce1722d55b60363b7041b7457224e29"],["/ja/2016/01/2016-stepping-further/index.html","ef9345757fc3e945db83d0770b6edaef"],["/ja/2016/01/Android-Study-1-22/index.html","928f5430d89d6120cc54932e2d340746"],["/ja/2016/03/2016-03-20/index.html","c53d7017e6da9485b29354d8e3ec643b"],["/ja/2016/03/GSC-535/index.html","fa85087e5a29bac3b51cf1328a84c984"],["/ja/2016/03/gulpjs-1/index.html","472580a30317b50c0be7323e30c4fc2b"],["/ja/2016/03/hexo-theme-paper-white/index.html","be109a537c49fa39be2334bc6d0e1a08"],["/ja/2016/04/2016-04-19/index.html","450d11180a0e267f4daaea4899fb8813"],["/ja/2016/06/2016-06-16/index.html","bc995015cbc5b653bcabf2601301b550"],["/ja/2016/09/2016-09-18/index.html","6cd4f3836ec8f680db3d41c26c8e41e1"],["/ja/2016/10/2016-10-27/index.html","6ae78c4ca22876ef995cdd78a988c61a"],["/ja/2016/12/config-switchresx-and-2khidpi/index.html","710bd92d6fb0b966bc4004507d891445"],["/ja/2016/12/improve-duoshuo/index.html","808a0c55f256d8a585bde14a290e7f87"],["/ja/2016/12/use-travis-ci-your-blog/index.html","34554366cb94c9a702e39af0b00c9be2"],["/ja/2017/01/2017-iyahoi/index.html","481d5c3a5827b461c1b74c98db6f871e"],["/ja/2017/01/webpack-amd/index.html","449f3feeda7171fe4d9c523ca9fd1687"],["/ja/2017/04/kotobukiya-syaoran/index.html","0345c0608c837cb261700e031af6dee5"],["/ja/2017/04/macbook-and-surface/index.html","bdc45f80475f8cca450fbcee8327376a"],["/ja/2017/04/uc-hyakuya-yuichiro/index.html","f6e4a6b46b789653e1cddfd71558f8d8"],["/ja/2017/06/noragami-seichijunrei/index.html","784b41d5a86c1d78f546bb2b57ad3138"],["/ja/2017/08/cross-compile-55-libev/index.html","69258b0983516a6e42429dc409e54588"],["/ja/2017/08/explore-service-worker-working-lifetime/index.html","91293f6dc5c0fdd847b41588a1b5e054"],["/ja/2017/08/hello-jp-world/index.html","56d9dc67c3a51d366190b0c7140d35dd"],["/ja/2017/08/kiminonawa-tokyo-seichijunrei/index.html","aa388dca7b0df683fa255c9523322061"],["/ja/2017/09/record-user-login-status-methods/index.html","f93dd73caa4011c6df9d27eaacd422c1"],["/ja/2017/10/vue-typescript-early/index.html","25eed31332544ca58e529debbcb03c94"],["/ja/2018/04/2017-end/index.html","78538b9cecd60bf6eb5b7c1f7c6e1d2c"],["/ja/2018/04/twitter-account-activity-api/index.html","1d95e52ac02fc272150547a9296e079c"],["/ja/2018/05/buddy-complex-seichijunrei/index.html","e7f6b643042250b22296253449ace8d4"],["/ja/2019/05/2019-05-16-record-jp-digital-TV-on-nas/index.html","e778c5fb21dbaff2f6366143a737838f"],["/ja/404.html","7a2b2e3ac92bf23009a4953361e764f6"],["/ja/about/index.html","8338b718a5d4514e9c01d2aeaf28db14"],["/ja/archives/2017/08/index.html","6c92fc76de3522657a404f82680d0e9b"],["/ja/archives/2017/09/index.html","95b5ee5900e40291b521e3178c726a14"],["/ja/archives/2017/10/index.html","2aa02d25ac6fac389a85c429c0dabe69"],["/ja/archives/2017/index.html","ac0e1752378b6fd5e445d72c3e505a47"],["/ja/archives/2018/04/index.html","790780d03eb8626b261727e178419f37"],["/ja/archives/2018/05/index.html","569218cedb99b80b83ebbbd97ba4b655"],["/ja/archives/2018/index.html","086cb25f28abfc11c47052b6843a0e21"],["/ja/archives/2019/05/index.html","a05ca530e8662c03316676b499f545dd"],["/ja/archives/2019/index.html","d3081dbed3e82c6e2711cc0c44585d1d"],["/ja/archives/index.html","966f575bbe41433656e93a0406b8666f"],["/ja/categories/ACG/Travel/index.html","024579b2f7279997c87305beb8f3ba40"],["/ja/categories/ACG/index.html","66255b7c758112b1d50c0858c980d8a1"],["/ja/categories/dev/Front-End-Dev/index.html","ed4243afd1b57ab290607317baeb81d1"],["/ja/categories/dev/index.html","716b250148938d361da2fc5936af87a2"],["/ja/categories/uncategorized/index.html","7acd30c0c3d4755b3c3adec139e4cad7"],["/ja/index.html","4ec7a0afa660988eaad80ae752b64f1d"],["/ja/nihongo-test-page/index.html","69f3e59bc22ddcd3781d3975fc0fd801"],["/js/instagram.js","7d7a9e2e7286ba2d5b6d12068214f0c3"],["/js/jquery.lazyload.js","28c23bc40080d31144776e9a8736837f"],["/js/main.js","2e92f29b0cd90bddc062915eb46a858c"],["/js/mobile.js","dc84e1287e89e3c1bba67fd47b8656b1"],["/js/nextpageajax.js","c3bde8d7bb1f967fb319f57a187ea51a"],["/js/pc.js","631b535186aab0e262485ee2bf9da628"],["/js/ripple-effects.js","b9c11903da0ef5c3d790b41369c3137e"],["/js/share.js","de52ac3d43e43c1951a08b0804458a8e"],["/js/totop.js","661822968b58fd439f46bd54031238d6"],["/nihongo-test-page/index.html","098d12f075c09eaf9d7fdb260c5ce41d"],["/page/2/index.html","a3a0015a817d2a77c7bdcc132352de6f"],["/page/3/index.html","ed8e91719015448530f1f7a78c2de8aa"],["/page/4/index.html","f066aaf29321cb0cc80839a36c3728c6"],["/page/5/index.html","90a4bca872ed06dbb65d7b71f463ab64"],["/page/6/index.html","799174719a0c509ac883c330d96a8155"],["/photoswipe/default-skin/default-skin.css","426e8908d7426603ca203b6d16281b1e"],["/photoswipe/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photoswipe/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photoswipe/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photoswipe/photoswipe-ui-default.js","0c9196aa8943ce8a8045c9f4cc62915c"],["/photoswipe/photoswipe-ui-default.min.js","9517baca43cd4e9cb23ff337fbc1baa1"],["/photoswipe/photoswipe.css","7dc0df107159e1be66d4464171561e5b"],["/photoswipe/photoswipe.js","a8d26ff34943c859884acbd6b2531315"],["/photoswipe/photoswipe.min.js","f5cd6479c4e4682545a9603e6b50c741"],["/setup-log/blog-setup/github-pages-ssl.html","d5e315a4f7725d0c5a828ab2ac48dfe3"],["/sw-register.js","dafe186240c6419909319be1327821db"],["/zh-cn/archives/2015/03/index.html","37e76cc8317db6c2160af85e9cbccdd4"],["/zh-cn/archives/2015/04/index.html","29920d9b968684e043277966de1a4819"],["/zh-cn/archives/2015/05/index.html","ab75009b27affcd96548ec48ba022334"],["/zh-cn/archives/2015/09/index.html","44cd2a021eb252072e89a4ad180d97f9"],["/zh-cn/archives/2015/12/index.html","6255a3601472c4b343e3969f0a4ea6d5"],["/zh-cn/archives/2015/index.html","79ddf063052e3ba0a5e4ee7d32556911"],["/zh-cn/archives/2015/page/2/index.html","39655aa6131bb372f8cb1765b61e4d77"],["/zh-cn/archives/2015/page/3/index.html","bb8ada9e0f3627bc1999ad171ee752f8"],["/zh-cn/archives/2016/01/index.html","ff9cac743edaeac55bf06e2aba2fd3ee"],["/zh-cn/archives/2016/03/index.html","067faea8005833d3e9a84919d990d646"],["/zh-cn/archives/2016/04/index.html","7aa02b2ca4d15b79c97bcb690395cf0e"],["/zh-cn/archives/2016/06/index.html","ef504d08a64f0bd077bd69a177927f2e"],["/zh-cn/archives/2016/09/index.html","4bd45f590f20aa3193de622a0c32d07a"],["/zh-cn/archives/2016/10/index.html","af8d68ef23de79476ccbc3758d88879f"],["/zh-cn/archives/2016/12/index.html","fec93389b022eddf7c53d318c96918ac"],["/zh-cn/archives/2016/index.html","26ad779e58b851ce90153120cbebd2d5"],["/zh-cn/archives/2016/page/2/index.html","91eaa13f84637e765508d6a5402d0f02"],["/zh-cn/archives/2017/01/index.html","34018f798240d7f7ba2f248c447fa42a"],["/zh-cn/archives/2017/04/index.html","def4044d7824705f126042d5adbef53f"],["/zh-cn/archives/2017/06/index.html","a2fc41c479b280ea94369b599463a475"],["/zh-cn/archives/2017/08/index.html","7b56a463d6b0962ee89a00c5961fed4e"],["/zh-cn/archives/2017/09/index.html","51f957196559e307586907e0c1b5ad1c"],["/zh-cn/archives/2017/10/index.html","c1d84ef0c7cf41128c6f31b4c616f69c"],["/zh-cn/archives/2017/index.html","a4f45f72c9217f6ad8a15acf4e6f596f"],["/zh-cn/archives/2017/page/2/index.html","10a4a9c7e3f251b2fe86078bf328b219"],["/zh-cn/archives/2018/04/index.html","6b90c0295c12344c4254cd76266f5779"],["/zh-cn/archives/2018/05/index.html","4f74dde7f4590e229fdaa7a9aa50278f"],["/zh-cn/archives/2018/index.html","9faaf9579ff5e52af706b639d7aef20d"],["/zh-cn/archives/2019/05/index.html","1bbe1b8ad2d1b60def184cc0726358fb"],["/zh-cn/archives/2019/index.html","62f65cc592190d0c000b0b7608a827be"],["/zh-cn/archives/index.html","c9ea210a6d56c849e437f48761792b14"],["/zh-cn/archives/page/2/index.html","e5f91d1ae3aa9c441a12afc376a32247"],["/zh-cn/archives/page/3/index.html","242deeaea1f0e0811614cc159d6d9802"],["/zh-cn/archives/page/4/index.html","a3564976cbdfec62a149780840663d52"],["/zh-cn/archives/page/5/index.html","c0c283857fd6f47dd5fb9178ae33f76b"],["/zh-cn/archives/page/6/index.html","264999692b122b04e0608bb849bcde8d"],["/zh-cn/categories/ACG/Music/index.html","4964a365b240af22dee0125e8d6d29a4"],["/zh-cn/categories/ACG/Music/self-copy/index.html","5ed72699cdb4e779e3711016b046ab5a"],["/zh-cn/categories/ACG/Travel/index.html","d2a96234de074fa08eebd60bd136fd63"],["/zh-cn/categories/ACG/figures/index.html","3263d88640b07b3018163880029cfa31"],["/zh-cn/categories/ACG/index.html","86bff4dd70ed7c1199e18cd2f2077354"],["/zh-cn/categories/dev/Front-End-Dev/index.html","1368883ece5e6c325f47535f3a74f0bb"],["/zh-cn/categories/dev/HTML-CSS/index.html","67ba36c65169fd02d67b47c87716802e"],["/zh-cn/categories/dev/android/index.html","1669e6d1f306f76fed38cd788cbaa24d"],["/zh-cn/categories/dev/cpp/index.html","c4643cb585a85341363f3e8d948f9a63"],["/zh-cn/categories/dev/git/index.html","361532c5d549fdf1f914c591c9db6efe"],["/zh-cn/categories/dev/index.html","a423f2137942788d37c2dae26c763534"],["/zh-cn/categories/dev/java/index.html","f74525d0b489ec9982801e508bcb0c5b"],["/zh-cn/categories/dev/page/2/index.html","0ebfb2cb10f0282f57237f91bfa8407e"],["/zh-cn/categories/maintaince/blog-setup/index.html","09cb0f9f682b63df44950816fb633a6c"],["/zh-cn/categories/maintaince/index.html","300f3ec095571d22feb56e7daaf74f67"],["/zh-cn/categories/maintaince/macbook/index.html","c0ab09212a3ced13d7b6688878ec6efd"],["/zh-cn/categories/maintaince/router-config/index.html","309215fe33b92144f713b1579e271988"],["/zh-cn/categories/notes/index.html","ab1af09d75160c91b9c608286d0d9b71"],["/zh-cn/categories/tricks/android/index.html","3e6c6abe436c9b2bc00ae03588a3a06d"],["/zh-cn/categories/tricks/index.html","13bf0c2e7a3fc1fd4fd15b95665a759c"],["/zh-cn/categories/uncategorized/index.html","c354f459ee809400692a2c8c8c226f97"],["/zh-cn/categories/works/Front-End-Dev/index.html","6d37cf93588c2f75f236dc3a1b9bc772"],["/zh-cn/categories/works/csharp-wpf/index.html","98d71a4aca57ad9df13d8884f3e457e3"],["/zh-cn/categories/works/index.html","aa126fcb15bb57fb965922427e5711c4"],["/zh-cn/index.html","706edbfb0955ec4121143ab5f6cabad4"],["/zh-cn/page/2/index.html","0b81f6a7fbc7390590b89735303c5647"],["/zh-cn/page/3/index.html","5ec6c389cb4fabdde1fcb0357cb210bd"],["/zh-cn/page/4/index.html","611e118dda1a4604ce04bd31d18d83ac"],["/zh-cn/page/5/index.html","fdacda23493593c4d5f3412cb37346a3"],["/zh-cn/page/6/index.html","7e627fd98f54b8660d86bfd271e9a329"]];
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
