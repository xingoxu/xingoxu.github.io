/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/03/WNDR4300-setup-log/index.html","1c2c9e68148440fea5c465d249dea44d"],["/2015/03/android-hostname-change/index.html","9fedc9e6fd3eda69ff67a2133194a319"],["/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","1ab0181c5b0737ec7d81f41c9307adbd"],["/2015/04/android-chrome-issues-with-webpage/index.html","8cc37b8140187578bff70933dff689b1"],["/2015/04/cpp-study-log/index.html","1f11584caad34e8957a136a9048ec95b"],["/2015/04/github-pages-ssl/index.html","898f57996f5e2d3745a55e26345e0499"],["/2015/04/hello-world/index.html","327b8e6a8a8f9a333a682c4a6eec81c0"],["/2015/04/hexo-setup-log/index.html","22c2ea4f049d6ddb6661207026f969ef"],["/2015/04/self-copy-cd-inazuma-1-html/index.html","cc4d1a8524dd93123284bb83b5c7fbed"],["/2015/05/cpp-inherit/index.html","618faca951676535f72ecdfe7e40f43d"],["/2015/05/cpp-polymorphism/index.html","9fa8b1fea8fecc7e8c7328e7097797bd"],["/2015/09/android-root-ota/index.html","5aa47d2752cf491f81c695a387a1fac0"],["/2015/09/java-learningNotes-1/index.html","061853544c250227701a19646299fe79"],["/2015/09/newblog-newlife-2015/index.html","b1815546d2843b78e6f3a629e43e06dd"],["/2015/09/router-rebuild-2015/index.html","b224095d8c953b9a91c5ab8e7ccd524d"],["/2015/12/2015-12-21/index.html","8bb62175ff032ac726bcbf69c36f3891"],["/2015/12/PixInTouch/index.html","29bfbd5b3862c0cb4bebd1f06edfa29e"],["/2015/12/git-study-1/index.html","9137527f7f22ec27be6bcb0b75793d1f"],["/2015/12/hexo-backup-and-migrate/index.html","360419cf6202cc442e496731dd8912f9"],["/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","a36e58bf9c6e67f35a3312d923e2c78a"],["/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","80c8e9cd0b2b8704f893c14bd59ae250"],["/2015/12/router-reconfig-2015/index.html","cb68de3e92638af26ad4d781a0d51e40"],["/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","3d4f3cece0e9eb42a3230e68ae19017a"],["/2016/01/2016-stepping-further/index.html","b68a45f1ba5e1f4d57482e19fb0d9242"],["/2016/01/Android-Study-1-22/index.html","3d58fc6c43dd20e6ca3148296f15184b"],["/2016/03/2016-03-20/index.html","95cbaa0221cc575ca6d168f5da2d86bb"],["/2016/03/GSC-535/index.html","9896bb39830d20796dc215bcc7a41877"],["/2016/03/gulpjs-1/index.html","832b8cf9ea6afee78881cf6ff328c76f"],["/2016/03/hexo-theme-paper-white/index.html","c0e9084a531ab40d4e303be43a979373"],["/2016/04/2016-04-19/index.html","e80e54cd89cad1977df107dd908ec777"],["/2016/06/2016-06-16/index.html","c30736f0925b930d4a6595cbd2aa38f4"],["/2016/09/2016-09-18/index.html","f41cb0d2aec9e380feda6c7116df46f2"],["/2016/10/2016-10-27/index.html","33aea63ebbf6db13d6f4e29292ba250d"],["/2016/12/config-switchresx-and-2khidpi/index.html","c226dbaeaf2a76e3fa096f52c4e6e379"],["/2016/12/improve-duoshuo/index.html","34faa99ad1254e04dd1cd2156a21a0a4"],["/2016/12/use-travis-ci-your-blog/index.html","74c2ce64de2f8e9e98534274226b72f3"],["/2017/01/2017-iyahoi/index.html","3082255ea9e966cfcaaa12a76027ebc3"],["/2017/01/webpack-amd/index.html","a091a3044e1a7f913ff425c1c256bb22"],["/2017/04/kotobukiya-syaoran/index.html","355c51450c6cc681d9a016700e03320d"],["/2017/04/macbook-and-surface/index.html","87f12688aaf02cd584b2939b4c0fbf24"],["/2017/04/uc-hyakuya-yuichiro/index.html","70c9181c9fe693666528948292eb6416"],["/2017/06/noragami-seichijunrei/index.html","c11a2a486671e60186f30235d945028f"],["/2017/08/cross-compile-55-libev/index.html","da5c74de458ba5dbd9caca95cd570616"],["/2017/08/explore-service-worker-working-lifetime/index.html","5e53f98581960a7fda51985fa2372b10"],["/2017/08/kiminonawa-tokyo-seichijunrei/index.html","206d0f9981181a6807add89657e7f166"],["/2017/09/record-user-login-status-methods/index.html","5868de119681b256f147ef5d5cb4aa1a"],["/2017/10/vue-typescript-early/index.html","0a8961fd00ccaa454daad135d47eee25"],["/2018/04/2017-end/index.html","cf3768d2bb9db3f34ddc186bba07a775"],["/2018/04/twitter-account-activity-api/index.html","2aa2053debe5f138803ccda2724fe4a9"],["/2018/05/buddy-complex-seichijunrei/index.html","91086ce372b877516a1705b0e8b0a13e"],["/404.html","85e184c7b4154026bc0ca6f7e5eae3bc"],["/about/index.html","5a7f2737f732ad0e6c2b4de0174877c8"],["/archives/2015/03/index.html","be5e406cf6ba7638be7a5c4837f80d17"],["/archives/2015/04/index.html","ebb5ac45c42f53efecfc9541678751f5"],["/archives/2015/05/index.html","29ade2cffddaff5498ca6eeebaecd5b2"],["/archives/2015/09/index.html","e85e3984ec4bd879fa4ace9b52f7920c"],["/archives/2015/12/index.html","3564c7f5c06fa180a0d8ab301d457d0c"],["/archives/2015/index.html","72da0b322b21446bbc64d78abec3395b"],["/archives/2015/page/2/index.html","be067833f185812fa167a8496429123b"],["/archives/2015/page/3/index.html","5bdf714af658715759de9195d6a6d632"],["/archives/2016/01/index.html","e2b5c262e7e8f2faa5a5a42480a6cae4"],["/archives/2016/03/index.html","04c2da30322f9df3907746e18c22d3a5"],["/archives/2016/04/index.html","b78dea71f739efd4cdd7425fa2a626e2"],["/archives/2016/06/index.html","61cb09bf4e205019d6c992e392180ae6"],["/archives/2016/09/index.html","296d9b4c5f5eb9aa82b57e20a0831dca"],["/archives/2016/10/index.html","a47db2eb99c831f6665232c02a12e508"],["/archives/2016/12/index.html","e13da3fc141ff198acf61e5260aff943"],["/archives/2016/index.html","1d7bed552fc4fc8cf0fe741ee0223665"],["/archives/2016/page/2/index.html","d09adabf02ebf59b635b58518e83de82"],["/archives/2017/01/index.html","abdf25283e5af147e972d7144a66bb9a"],["/archives/2017/04/index.html","ada00eb19564de70eff78b39b43786c3"],["/archives/2017/06/index.html","fe9b044679c989712eb1b59f2830d302"],["/archives/2017/08/index.html","d934d235d8320cc7e35cc545d5a81b4a"],["/archives/2017/09/index.html","25da6c921834ddd1049976a60e92dd62"],["/archives/2017/10/index.html","ec6bd59ea79ea7a060320e8374cb28fa"],["/archives/2017/index.html","7a40e65a0509826289cbe4cfa6add90d"],["/archives/2017/page/2/index.html","c1eed20e529075de7959383eb9fdb12a"],["/archives/2018/04/index.html","73dd5c0789ae6d0a6c4c1d4283d363c8"],["/archives/2018/05/index.html","f3fa15591e74436192b83e72f965c87d"],["/archives/2018/index.html","cb7468f54b1eeaf7f6d3ff2a1d015dba"],["/archives/index.html","97cdb334446e7436ae2ea83890721eb1"],["/archives/page/2/index.html","2e04dd7ad0248c809ab3d4a4c3385c4b"],["/archives/page/3/index.html","fe911dd11654ce0748a439374e8202e4"],["/archives/page/4/index.html","e2a4716c8ff13d2e4ea4c5ba886d6734"],["/archives/page/5/index.html","e3b1f138921230394fcf43d6594fffa7"],["/assets/images/about-me.png","a066d06c3d9d1fe56c4d921cec7febf3"],["/baidu_verify_YbTSlpWIUJ.html","779049c3a50695ceb3a388ce1e8bc1b9"],["/categories/ACG/Music/index.html","1345fbbf84d2fe205b4db9cd694603d9"],["/categories/ACG/Music/self-copy/index.html","13f1f8b0c4fb2eb2520d07a4e96a2444"],["/categories/ACG/Travel/index.html","c0aa6b3aad24171608619b03224d56df"],["/categories/ACG/figures/index.html","c1ed108c4e133bcb6cbf75cc3bb7c2de"],["/categories/ACG/index.html","5fef5e4ed4ba1fce8f41e6bad293448b"],["/categories/dev/Front-End-Dev/index.html","50f35067371d9e751766e762e13d9bf9"],["/categories/dev/HTML-CSS/index.html","2dec8d47d260baa4e74f572e00eb8f67"],["/categories/dev/android/index.html","7a216a345a90023a1f5df9fcf0643180"],["/categories/dev/cpp/index.html","1d047497c108568658aced482ac1e652"],["/categories/dev/git/index.html","f49c880dbf5af8c22bdf718276639067"],["/categories/dev/index.html","dd14a4673e7032e899a292c2380cb226"],["/categories/dev/java/index.html","849922617713c57ecdf4393a6b2e7055"],["/categories/dev/page/2/index.html","eb85df110bcca4bd0125252a2d4ffae4"],["/categories/maintaince/blog-setup/index.html","015c77b2b88b2c06f7c405bf1f639728"],["/categories/maintaince/index.html","00df7c62cfce0fbc7750a25707527f11"],["/categories/maintaince/macbook/index.html","aa65d7eb593be8ac7ad63fb0aa452b06"],["/categories/maintaince/router-config/index.html","d2e441a59dcaae93e3fc0260feacc277"],["/categories/notes/index.html","c554c468d32074c568484e0667e59561"],["/categories/tricks/android/index.html","5abbeace9abf31987379cb2bd64d9192"],["/categories/tricks/index.html","089458a0c8c3e48e1719aa68a5d8cc83"],["/categories/uncategorized/index.html","0362f50d9dcde5a2d2f34ce0495aa3de"],["/categories/works/Front-End-Dev/index.html","e2fa24371b8a370091bb6a8b6d77aa7b"],["/categories/works/csharp-wpf/index.html","86723568caa2ffa5fa8b8de32f313e1b"],["/categories/works/index.html","2215c7ff9a3d384c3e869030d6df0d5b"],["/css/seichi.css","42693f35c4c482207368dd363ea27373"],["/css/style.css","e21657d8ff2f701595db4e2404d14563"],["/google311213f0c8d812a9.html","51f1ee3c2f13a21a1a40b3dae4954454"],["/img/coderwall.png","1976fe70f1ee8ed243e0975402e06a2d"],["/img/delicious.png","952d9b54d8bcfe7b998f67ff48c4dbce"],["/img/douban.png","d42a163f932100e621d22732db34ecdb"],["/img/facebook.png","4bd685f6c9fdaccabf07bdd52173facb"],["/img/github.png","3c4b6267a1a3fedebdc7d089610ecfe7"],["/img/google.png","c385f5304465716b2d6c9ada94c657ab"],["/img/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["/img/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["/img/linkedin.png","4c72c4896f3c23f736cb1ad08f0c866e"],["/img/mail.png","38a7b8302dac028bf03b22d228938abf"],["/img/pinboard.png","9b6186cb97adbe50311f94e50f2392cf"],["/img/pinterest.png","e1b8e655d1b99b40ebcbd96977ae234e"],["/img/rss.png","ec8cf9b5a98011aa75cc0a4f25024dc9"],["/img/scrollbar_arrow.png","be5381cedbd6b778b1d92e224fd71cf7"],["/img/stackoverflow.png","039128ececb47b33bccedd98dc9fc809"],["/img/twitter.png","d2289a4936fefa41d9f92cf89939be5b"],["/img/weibo.png","b382032b316ee38c6d537fe9d36ae54c"],["/img/zhihu.png","e6352c0e1957beef3009268ae747c3aa"],["/index.html","56fe8bee6c14bc8e9c6997f707b1f28e"],["/ja/2015/03/WNDR4300-setup-log/index.html","a172ede58f7e589f29d59fb56bc494f2"],["/ja/2015/03/android-hostname-change/index.html","c88067e162ad24592d0e6b3ffccafaef"],["/ja/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","98a05faf70e9c957094f9f0b6e774cad"],["/ja/2015/04/android-chrome-issues-with-webpage/index.html","3dc5a35bfb602480387e41e7369cdba8"],["/ja/2015/04/cpp-study-log/index.html","3d2a0bc07ede49b23a2fb97a45894d82"],["/ja/2015/04/github-pages-ssl/index.html","0521f726bef46986dc25b3dfc5fd0d3f"],["/ja/2015/04/hello-world/index.html","bf49c91b9f3517ad6d8b9f3bd088cd8d"],["/ja/2015/04/hexo-setup-log/index.html","bd71e1a06f20924e6c33f526d31d8f05"],["/ja/2015/04/self-copy-cd-inazuma-1-html/index.html","259c705a2671b5b4718f39ab69b2f18c"],["/ja/2015/05/cpp-inherit/index.html","ebbb04f78058a21c028086eacbde805a"],["/ja/2015/05/cpp-polymorphism/index.html","371344d8722f78687f664c5dfdda4482"],["/ja/2015/09/android-root-ota/index.html","ceefcb92a3d3a22f5ae1d5bed6baca4f"],["/ja/2015/09/java-learningNotes-1/index.html","c561abf1ac9da8eca2a731ce930da651"],["/ja/2015/09/newblog-newlife-2015/index.html","e33b24c2f295110d49c97a5a5de9fc3f"],["/ja/2015/09/router-rebuild-2015/index.html","41e20e39cfd7171a859281896768e3ed"],["/ja/2015/12/2015-12-21/index.html","126594a0437da5b0caa5cb064c0a5570"],["/ja/2015/12/PixInTouch/index.html","9d843dd5c1a0513dffcd7c15a4395a0b"],["/ja/2015/12/git-study-1/index.html","b4cbbfa99fe891f1c90615d0d89cb79e"],["/ja/2015/12/hexo-backup-and-migrate/index.html","a58632fe30f7b90075e5a75d334b6bf0"],["/ja/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","616e64e405606ab434eab53a320a890b"],["/ja/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","7681a75903a713d06e4374fdd3a3ff9c"],["/ja/2015/12/router-reconfig-2015/index.html","f4ed019278bd86bdebd69d5c1a5425bd"],["/ja/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","d2dfcfc3b7f1970d82e9d38a1fb66fc2"],["/ja/2016/01/2016-stepping-further/index.html","8c68bb93c0019f048c2c63d3d9bd6d2e"],["/ja/2016/01/Android-Study-1-22/index.html","8ee9a1d0bc25fe067afa94672afe0beb"],["/ja/2016/03/2016-03-20/index.html","78df2594b34a9be6e8aa8f36b6e03f3d"],["/ja/2016/03/GSC-535/index.html","af6654ac23220f188499105f089a2f47"],["/ja/2016/03/gulpjs-1/index.html","503b13c60d8af0ab07bf3e5c553d2200"],["/ja/2016/03/hexo-theme-paper-white/index.html","ff71bd5d344cbfdd5c88037a987fa778"],["/ja/2016/04/2016-04-19/index.html","0ce82cea8eeb5366b2c6c3905d9abc4a"],["/ja/2016/06/2016-06-16/index.html","fb2bd6d7eb4ad76844b8442be2767b38"],["/ja/2016/09/2016-09-18/index.html","476d11f65764ca7716adf32510a2dd86"],["/ja/2016/10/2016-10-27/index.html","0953f2a5d501ecbf86f18804c58701c7"],["/ja/2016/12/config-switchresx-and-2khidpi/index.html","47d4ba6685d3a544fb5c7d8850be2d7b"],["/ja/2016/12/improve-duoshuo/index.html","88fcbb88d0255fd696e9cd0b36da32ef"],["/ja/2016/12/use-travis-ci-your-blog/index.html","544ac5f3b5b8dcd1ca7cbd050b23162c"],["/ja/2017/01/2017-iyahoi/index.html","e70b3af989035d70b9ec482eadd3d86b"],["/ja/2017/01/webpack-amd/index.html","ccfd72b3db0552352c5584de92ad9573"],["/ja/2017/04/kotobukiya-syaoran/index.html","a711a8187f14c2ef5df0df18ba64466d"],["/ja/2017/04/macbook-and-surface/index.html","118482234573cb51059ad9f269c44519"],["/ja/2017/04/uc-hyakuya-yuichiro/index.html","201882ce774f1ac4cdedbd03d8686bc1"],["/ja/2017/06/noragami-seichijunrei/index.html","c6430d5dacbfece6fa99c34c467fbf3b"],["/ja/2017/08/cross-compile-55-libev/index.html","29986e2110ad5d4ffccacbdd4f114534"],["/ja/2017/08/explore-service-worker-working-lifetime/index.html","dcd261c2fcdfc6046f70937db3a8e8ab"],["/ja/2017/08/hello-jp-world/index.html","e65e6a8a2f9c9f5d69f1cf339a7b51ca"],["/ja/2017/08/kiminonawa-tokyo-seichijunrei/index.html","f124073e2321fa914f07d1be5609ef3c"],["/ja/2017/09/record-user-login-status-methods/index.html","1bf022d43878072a34ab8131ad87eb16"],["/ja/2017/10/vue-typescript-early/index.html","66fe99e56941be0ba1ea0864e909c68a"],["/ja/2018/04/2017-end/index.html","7abcd25a3a5c566a494b28041b50b6f5"],["/ja/2018/04/twitter-account-activity-api/index.html","98b03e042597b908b844365b0ff8cb57"],["/ja/2018/05/buddy-complex-seichijunrei/index.html","66d56f0209ae31e5eb3ed7fd126effde"],["/ja/404.html","788d48fbde47605ed4dcf7443a171809"],["/ja/about/index.html","2c5dc619c135e93ad6106b611a5220ae"],["/ja/archives/2017/08/index.html","729282c2e841bb31acb0a53bcfbb2b7e"],["/ja/archives/2017/09/index.html","8906b92c75f5566c62cd45a40bd2a7c7"],["/ja/archives/2017/10/index.html","55fc692f134319ea4864d5e5cd4eae63"],["/ja/archives/2017/index.html","6b794c2a6c565025d504e82fd7c1671d"],["/ja/archives/2018/04/index.html","ed27b910d2ccd4780b3fa4d33f54b0c0"],["/ja/archives/2018/05/index.html","5be46c92e147ae817889a027c9679f65"],["/ja/archives/2018/index.html","e3c9433cc7568a22449c82d1a1a052e3"],["/ja/archives/index.html","7544607d928548dae3174b787a1d8494"],["/ja/categories/ACG/Travel/index.html","9437a00a470fd87c7b69629fe0c821f0"],["/ja/categories/ACG/index.html","0bb4b33b9a0a53dbca8f408f6e66d2c3"],["/ja/categories/dev/Front-End-Dev/index.html","1276b04b86c187ea4f28ad4ade6d58be"],["/ja/categories/dev/index.html","b56b711d34686d22d2929521865837b1"],["/ja/categories/uncategorized/index.html","5c95acf7cc07680e5a97aa0ee1aba426"],["/ja/index.html","e828c0324955b1da2d016070a8e52388"],["/ja/nihongo-test-page/index.html","cbe5b763b46f032259cc2adecc3e9f53"],["/js/instagram.js","7d7a9e2e7286ba2d5b6d12068214f0c3"],["/js/jquery.lazyload.js","28c23bc40080d31144776e9a8736837f"],["/js/main.js","2e92f29b0cd90bddc062915eb46a858c"],["/js/mobile.js","dc84e1287e89e3c1bba67fd47b8656b1"],["/js/nextpageajax.js","c3bde8d7bb1f967fb319f57a187ea51a"],["/js/pc.js","631b535186aab0e262485ee2bf9da628"],["/js/ripple-effects.js","b9c11903da0ef5c3d790b41369c3137e"],["/js/share.js","de52ac3d43e43c1951a08b0804458a8e"],["/js/totop.js","661822968b58fd439f46bd54031238d6"],["/nihongo-test-page/index.html","d37167a904a08dab594c4be8110911de"],["/page/2/index.html","c10f161915f89a242f45562969e26132"],["/page/3/index.html","4e5122240447a262444f47ee762f651a"],["/page/4/index.html","dd79d7f76714ef79f023441d8e8295b0"],["/page/5/index.html","cb9d80fba1463531d52d407c9917123d"],["/page/6/index.html","f025d796ee5dac7b9ee86c74966f2252"],["/photoswipe/default-skin/default-skin.css","426e8908d7426603ca203b6d16281b1e"],["/photoswipe/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photoswipe/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photoswipe/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photoswipe/photoswipe-ui-default.js","0c9196aa8943ce8a8045c9f4cc62915c"],["/photoswipe/photoswipe-ui-default.min.js","9517baca43cd4e9cb23ff337fbc1baa1"],["/photoswipe/photoswipe.css","7dc0df107159e1be66d4464171561e5b"],["/photoswipe/photoswipe.js","a8d26ff34943c859884acbd6b2531315"],["/photoswipe/photoswipe.min.js","f5cd6479c4e4682545a9603e6b50c741"],["/setup-log/blog-setup/github-pages-ssl.html","d5e315a4f7725d0c5a828ab2ac48dfe3"],["/sw-register.js","0ee7f6b019dbabf8a85b724eab2de9cc"],["/zh-cn/archives/2015/03/index.html","fc73110415f2f37859e88d35e7adc279"],["/zh-cn/archives/2015/04/index.html","fc29272fe6403d695986202a9ed8dfe7"],["/zh-cn/archives/2015/05/index.html","f0a9c858d36c636d6eaffa26b609eadf"],["/zh-cn/archives/2015/09/index.html","74dc6566f3e28274b0d08163a61a028d"],["/zh-cn/archives/2015/12/index.html","e578e225eb261fed99c0d356be653ba2"],["/zh-cn/archives/2015/index.html","c124be6a1a5b2384e6e03ff5cba29b85"],["/zh-cn/archives/2015/page/2/index.html","9de69bf2d1bb850023558c5538b80e04"],["/zh-cn/archives/2015/page/3/index.html","1821bffc0370ca0d82c529bd3910327d"],["/zh-cn/archives/2016/01/index.html","47239c4ad267fb87fd0ad0dd54507a5d"],["/zh-cn/archives/2016/03/index.html","33490ce5ae6865341923c6ff20e10399"],["/zh-cn/archives/2016/04/index.html","b1acd346dc151a45ba9de99e9cd153de"],["/zh-cn/archives/2016/06/index.html","e925e6639112c8b443700bfe0ecbed72"],["/zh-cn/archives/2016/09/index.html","626c19346c5975ac931958a856b6da91"],["/zh-cn/archives/2016/10/index.html","9b8fcbedbeb2cc4b0b6c565ec6551e9c"],["/zh-cn/archives/2016/12/index.html","4bae4722992d65a6fa9d1601fc1fec88"],["/zh-cn/archives/2016/index.html","b418d63e53427b4b7e3e1b400e53a5fb"],["/zh-cn/archives/2016/page/2/index.html","61bbf9573ace7b8a28809f4535aed518"],["/zh-cn/archives/2017/01/index.html","c6031157466043491d4d6c73cf9567fa"],["/zh-cn/archives/2017/04/index.html","f540eed70e99d3d0bce55937ee7bb8c9"],["/zh-cn/archives/2017/06/index.html","4218424549a1d61d374be3b4708abeac"],["/zh-cn/archives/2017/08/index.html","0963cde4619e7f4b667e1a147a1643f5"],["/zh-cn/archives/2017/09/index.html","892665dd91ca75e3e31e0f4a016c3b44"],["/zh-cn/archives/2017/10/index.html","ff906309997770c7cb4833675ec6ffbf"],["/zh-cn/archives/2017/index.html","ef9b22e9fec285228e28a67dc819c7ed"],["/zh-cn/archives/2017/page/2/index.html","b0ac4b1ffcb2cc773be07438d4bd29af"],["/zh-cn/archives/2018/04/index.html","56aabe4de68fa94aa50a6c1057f5d372"],["/zh-cn/archives/2018/05/index.html","709dfef1a37453529a707d8f915128b8"],["/zh-cn/archives/2018/index.html","a447fc5377fc0c1c2bfb6de73b3edfde"],["/zh-cn/archives/index.html","f895f1254754adfa691ba0f40740e01f"],["/zh-cn/archives/page/2/index.html","5b02230974e0ee246593592b323a3e95"],["/zh-cn/archives/page/3/index.html","913b70314e698248e2bbd712e2f836e8"],["/zh-cn/archives/page/4/index.html","3c4ade836da3e7356226afe7fea81229"],["/zh-cn/archives/page/5/index.html","6e10ea055aae442233c75e1fd999c53a"],["/zh-cn/categories/ACG/Music/index.html","60747988fe492f7723640b06885aedfe"],["/zh-cn/categories/ACG/Music/self-copy/index.html","1fbe82f1895eba47789b393a6125757d"],["/zh-cn/categories/ACG/Travel/index.html","c2cb50b896e1b2de52e8c198e32fead4"],["/zh-cn/categories/ACG/figures/index.html","11a00521c6702b498d80ac36533f607c"],["/zh-cn/categories/ACG/index.html","e0dfabcd427312510e29ca9093b9cde7"],["/zh-cn/categories/dev/Front-End-Dev/index.html","7866fca0ddd17f6d32bb3b300a6eece7"],["/zh-cn/categories/dev/HTML-CSS/index.html","3190d68c489ac8802112bcc4676c532b"],["/zh-cn/categories/dev/android/index.html","46ec40b362af8bde093fb8993738cfbd"],["/zh-cn/categories/dev/cpp/index.html","a266225e8bd9426ad0189eb89e1a5be7"],["/zh-cn/categories/dev/git/index.html","544aab3c73cac4a75b8f4ec150aac4f1"],["/zh-cn/categories/dev/index.html","ac13de89bc647bf5910d9cebcd87724f"],["/zh-cn/categories/dev/java/index.html","b5e2cfc9395401dbee2f59d9e201741c"],["/zh-cn/categories/dev/page/2/index.html","8f4fb55f977a542522587e03faa812bb"],["/zh-cn/categories/maintaince/blog-setup/index.html","3dd75d5817ac335193e482d6049eaf24"],["/zh-cn/categories/maintaince/index.html","884bc32c829ceb111372e57fa122de88"],["/zh-cn/categories/maintaince/macbook/index.html","f0020aa4da797768f8be8c4f376e4b7e"],["/zh-cn/categories/maintaince/router-config/index.html","fe81c1f6a87e5f95e5d292280e34d9d9"],["/zh-cn/categories/notes/index.html","884b1fb3f20e209172c3ef45336166ec"],["/zh-cn/categories/tricks/android/index.html","229bd825ce20b2ea03e2613513940fe8"],["/zh-cn/categories/tricks/index.html","f651afd0acbc973e81768dac136bb59f"],["/zh-cn/categories/uncategorized/index.html","a54286eccedab9d5c440fc51c363f3ae"],["/zh-cn/categories/works/Front-End-Dev/index.html","621db97573a13ac81a76147bdc96ec79"],["/zh-cn/categories/works/csharp-wpf/index.html","367929fd61251f54b64416c2ff7df702"],["/zh-cn/categories/works/index.html","ebe6877571ffbcfbc74ffbad15532016"],["/zh-cn/index.html","7958a2287742d2eb4ce399c07d5e5c2b"],["/zh-cn/page/2/index.html","87c4d501217539f4a76c815f25e820d4"],["/zh-cn/page/3/index.html","bf85eda0dbed33c68d39aedb32d68ec5"],["/zh-cn/page/4/index.html","8e18f0b1048d751964a264472cb99e94"],["/zh-cn/page/5/index.html","807f8a38fc106518bfd68b91f321a401"]];
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
