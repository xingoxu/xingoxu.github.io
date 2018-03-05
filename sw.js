/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/03/WNDR4300-setup-log/index.html","4ddc4d5f1da07e77552bed9b5b41a025"],["/2015/03/android-hostname-change/index.html","f6d16a403f6001bdcfee36963829575d"],["/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","4af0bdc42d1d254b9015eafcd66e2012"],["/2015/04/android-chrome-issues-with-webpage/index.html","24e496c044f9b1146a16f6a0eccb118e"],["/2015/04/cpp-study-log/index.html","3c748e7ffc0c850d0f878a2f50eed39c"],["/2015/04/github-pages-ssl/index.html","6bc7de701b92dd1547a80b6f519450ad"],["/2015/04/hello-world/index.html","a29a81570f1fd8037d0339fab36eba71"],["/2015/04/hexo-setup-log/index.html","a2dbbbb465a0f988786de62d088aabab"],["/2015/04/self-copy-cd-inazuma-1-html/index.html","2f206bb73349139e1f47ae76466abd51"],["/2015/05/cpp-inherit/index.html","05110c31abfb7605b6250b7b800a9b30"],["/2015/05/cpp-polymorphism/index.html","faf8d9dd7b6a6d79d35ee358f9ea41ef"],["/2015/09/android-root-ota/index.html","1e614920ba7a938d84f1213d3ea649bd"],["/2015/09/java-learningNotes-1/index.html","11bf590bf4015b8b68d0756b2ededb7c"],["/2015/09/newblog-newlife-2015/index.html","8e1c953d0d0d31092b00c7d14efd5719"],["/2015/09/router-rebuild-2015/index.html","cb94df08e50f39d2edf69e84a100f04e"],["/2015/12/2015-12-21/index.html","8f5008cdbcac28d8fde59f6e65bf7774"],["/2015/12/PixInTouch/index.html","dabaa580740af2d1b7974084b03c0ce9"],["/2015/12/git-study-1/index.html","57e78c5d632b7105abf5377e10b502e5"],["/2015/12/hexo-backup-and-migrate/index.html","55e7749201f361a604600ad98c6e1580"],["/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","cbad3c334d34bc22c3e43d1643f22e17"],["/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","e60f60c6ec29d46e8ba5a48b00f19eea"],["/2015/12/router-reconfig-2015/index.html","6632c3ab70ef586e651e68f3bba9b091"],["/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","b73c9004ecfa4ea454b05ba962f27cef"],["/2016/01/2016-stepping-further/index.html","4b74402549e2c0b988a6c74ceefd2d88"],["/2016/01/Android-Study-1-22/index.html","9c3a42954700180a3f06e82af97140ab"],["/2016/03/2016-03-20/index.html","018f8028fba860fb346a6ae232552ce2"],["/2016/03/GSC-535/index.html","ae41de944b886b18a5e4889918521def"],["/2016/03/gulpjs-1/index.html","b888a464e639e1d9e6949b4b44c35e6a"],["/2016/03/hexo-theme-paper-white/index.html","3420be63177a96b7d6afeef66c40b0ea"],["/2016/04/2016-04-19/index.html","82c4d511ee801a073c2684d51bb5019a"],["/2016/06/2016-06-16/index.html","c816843100d9bb378efb03f56c3e4205"],["/2016/09/2016-09-18/index.html","66dff1a12433ffa382d672a7b643a0f7"],["/2016/10/2016-10-27/index.html","81d5258aca4ebb0862c779aebf85a41a"],["/2016/12/config-switchresx-and-2khidpi/index.html","8686c091492905fb45583075dda16e10"],["/2016/12/improve-duoshuo/index.html","0119f76a4354499d2104538387b20fdd"],["/2016/12/use-travis-ci-your-blog/index.html","93ece9c808e197f5955ae44837d31173"],["/2017/01/2017-iyahoi/index.html","451438eb4a341200159e27f49bca77d7"],["/2017/01/webpack-amd/index.html","44ee1e68cc53667998a6fd63ccb366a8"],["/2017/04/kotobukiya-syaoran/index.html","1fab6ea0b95abb21bd1fbbf9310d55ad"],["/2017/04/macbook-and-surface/index.html","1f4564433f63e4855a62c9cc81f398ee"],["/2017/04/uc-hyakuya-yuichiro/index.html","ae8ea2b9e08ec4bb0c2676bbd0c7f625"],["/2017/06/noragami-seichijunrei/index.html","2970a5e28c9936d854d40e1b08669b08"],["/2017/08/cross-compile-55-libev/index.html","18eccc2d9b04ab7955e7461c6c475c56"],["/2017/08/explore-service-worker-working-lifetime/index.html","36c5a27875586e48034b52f8b9042704"],["/2017/08/kiminonawa-tokyo-seichijunrei/index.html","7d4776cd69752830d5f6acd73caaa8b8"],["/2017/09/record-user-login-status-methods/index.html","727a549e5ec2ce8b2daa98813c9cadb7"],["/2017/10/vue-typescript-early/index.html","6d08a099b963ba9e380f57b1fbbaf16f"],["/404.html","b7f2e3d4eda43a9f2c8f1f366bd04d59"],["/about/index.html","6e32841afbf3b629e5d5a463282072a1"],["/archives/2015/03/index.html","ac22fc71fd2cd50b636ba04d19516693"],["/archives/2015/04/index.html","36fbaf4c040ce7928f3faeddee2218e1"],["/archives/2015/05/index.html","109a11725c587b6ab0ac67fbbda8eef6"],["/archives/2015/09/index.html","00720080153e0cfdaaf0484794607666"],["/archives/2015/12/index.html","98a583f8c87cd5f4ba15ae86e8211748"],["/archives/2015/index.html","368ba41cc15b4283a688f6e5eb365a48"],["/archives/2015/page/2/index.html","e317dfa081e0f50e1435f6eee8a5ea41"],["/archives/2015/page/3/index.html","013d49d24e086272b9088ec50e33c2a9"],["/archives/2016/01/index.html","1b9d9a1f1aa9e5bb92dbe4c380f66d4e"],["/archives/2016/03/index.html","4e8b53a9b8dd83618abfd7c7bd89a2ca"],["/archives/2016/04/index.html","6d503b46a8e5a7f28e3ced3606fe56d3"],["/archives/2016/06/index.html","ca34f61b3e17707c9a5803a93da4cb43"],["/archives/2016/09/index.html","7dcdc4d0d1e713a38173be7c01397098"],["/archives/2016/10/index.html","aeea17f2a456255849804a3241c872dd"],["/archives/2016/12/index.html","6c16abc68ca61f2d7400a498edae37d2"],["/archives/2016/index.html","530277edb7ed7645bf0a983a4e9b6cbc"],["/archives/2016/page/2/index.html","f73abe2efca341e204d0637a0227d83c"],["/archives/2017/01/index.html","fafce7548b53c4a4b15d2a1bd7e7fb0f"],["/archives/2017/04/index.html","3cf8fcb134a17265af90b04fe14685b8"],["/archives/2017/06/index.html","bdd91f17d99f937e9a1d0d13c654f4e3"],["/archives/2017/08/index.html","f5bcb7d18980ce87cb9ccc4da6a76c60"],["/archives/2017/09/index.html","231aa30eccacedc2f013c5d88d52b450"],["/archives/2017/10/index.html","0e221d9fd277da700e8569ae06eec44b"],["/archives/2017/index.html","80eeee74c0c7f953920a2a4c49ec6475"],["/archives/2017/page/2/index.html","acccaa14206108412b8ad77e3157350f"],["/archives/index.html","30b4937be4fa54cffb14e57c6b0f306e"],["/archives/page/2/index.html","91d913e39d04a2e2df41230692686fe2"],["/archives/page/3/index.html","1395969e5cae7a301840a6890490e4c2"],["/archives/page/4/index.html","d58f2bcbbb3194d616f3d0d512c977fd"],["/archives/page/5/index.html","cded48e7956ef53e1de7ba94382353b3"],["/assets/images/about-me.png","a066d06c3d9d1fe56c4d921cec7febf3"],["/baidu_verify_YbTSlpWIUJ.html","779049c3a50695ceb3a388ce1e8bc1b9"],["/categories/ACG/Music/index.html","23e0e38832577866036b151f338e3bd1"],["/categories/ACG/Music/self-copy/index.html","b3962ecbc4444cdb8e30d3cd7e3c4588"],["/categories/ACG/Travel/index.html","35ad54c6b91c8986a5c68f60e680112b"],["/categories/ACG/figures/index.html","175fd114de4130fe37b1f4866f15fca6"],["/categories/ACG/index.html","ba26c5f45c222bd013e724840745c8ac"],["/categories/dev/Front-End-Dev/index.html","58ab535d1c1af416747ab6186dda9e12"],["/categories/dev/HTML-CSS/index.html","ec6aee5decb74a4a760e78b1d95c0c0d"],["/categories/dev/android/index.html","1b06888685e94530e3e7a37567abe89c"],["/categories/dev/cpp/index.html","adffe0c09b295f48cb89c22a1a6d1f69"],["/categories/dev/git/index.html","2235ff89a876b177257206996677bcd9"],["/categories/dev/index.html","5797fd7b54a3cdfd3727bec4493ee9dd"],["/categories/dev/java/index.html","b77ed954fd513b077d18e3080b124b72"],["/categories/dev/page/2/index.html","b1c560ea4d9470df3c238c8e38d4cb78"],["/categories/maintaince/blog-setup/index.html","f117c0eec20b15c207a5d1a541217fa2"],["/categories/maintaince/index.html","28b5f2a9c8fe4423d448475ea4cfb6d1"],["/categories/maintaince/macbook/index.html","8a6ef44ce3dca86e463905124efade75"],["/categories/maintaince/router-config/index.html","4cd071bf68205f5cb3db696a8fc25ac9"],["/categories/notes/index.html","62a54e8ca216dfe525a9d14e9fa0e25d"],["/categories/tricks/android/index.html","8fc908e8de50515f7b910c1f60a12bea"],["/categories/tricks/index.html","6bcd2f7790e64bc5d52a464adce3e3ec"],["/categories/uncategorized/index.html","32d1eeb302c1c3ea58aa91dac770e306"],["/categories/works/Front-End-Dev/index.html","e6a5642992bb0f0e02621feb1edfe685"],["/categories/works/csharp-wpf/index.html","0b2f2ee15ffe028431b3efd1988efca3"],["/categories/works/index.html","8ef767615efd8b6659eacc946451fdc0"],["/css/seichi.css","42693f35c4c482207368dd363ea27373"],["/css/style.css","a81f79e7bf311785886f2c1c31c8e4d4"],["/google311213f0c8d812a9.html","51f1ee3c2f13a21a1a40b3dae4954454"],["/img/coderwall.png","1976fe70f1ee8ed243e0975402e06a2d"],["/img/delicious.png","952d9b54d8bcfe7b998f67ff48c4dbce"],["/img/douban.png","d42a163f932100e621d22732db34ecdb"],["/img/facebook.png","4bd685f6c9fdaccabf07bdd52173facb"],["/img/github.png","3c4b6267a1a3fedebdc7d089610ecfe7"],["/img/google.png","c385f5304465716b2d6c9ada94c657ab"],["/img/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["/img/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["/img/linkedin.png","4c72c4896f3c23f736cb1ad08f0c866e"],["/img/mail.png","38a7b8302dac028bf03b22d228938abf"],["/img/pinboard.png","9b6186cb97adbe50311f94e50f2392cf"],["/img/pinterest.png","e1b8e655d1b99b40ebcbd96977ae234e"],["/img/rss.png","ec8cf9b5a98011aa75cc0a4f25024dc9"],["/img/scrollbar_arrow.png","be5381cedbd6b778b1d92e224fd71cf7"],["/img/stackoverflow.png","039128ececb47b33bccedd98dc9fc809"],["/img/twitter.png","d2289a4936fefa41d9f92cf89939be5b"],["/img/weibo.png","b382032b316ee38c6d537fe9d36ae54c"],["/img/zhihu.png","e6352c0e1957beef3009268ae747c3aa"],["/index.html","1d2ec28ac0224bb2023bac5b2354795d"],["/ja/2015/03/WNDR4300-setup-log/index.html","7c9c6989166118ba0246ee9b5c643bb9"],["/ja/2015/03/android-hostname-change/index.html","da146a678b2a48f14e5f3f88e49fcaa8"],["/ja/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","62eeb9f387d746794537168ed93dde40"],["/ja/2015/04/android-chrome-issues-with-webpage/index.html","5bc5e45815e9da07dcfc3dc172529750"],["/ja/2015/04/cpp-study-log/index.html","0763332fa2e65a3e71dc86bee0d1356d"],["/ja/2015/04/github-pages-ssl/index.html","8848aa29f066c7da7328d36c4b188ff9"],["/ja/2015/04/hello-world/index.html","56a7189d2ba80876793dc25568e0f914"],["/ja/2015/04/hexo-setup-log/index.html","cfb17bdb2756fb3b5fe5c014d85165d7"],["/ja/2015/04/self-copy-cd-inazuma-1-html/index.html","491b3a471fa233835366792e54736102"],["/ja/2015/05/cpp-inherit/index.html","ed3fe3d3d8e298685096785ee0da5c8f"],["/ja/2015/05/cpp-polymorphism/index.html","eec5d9a06efd9e0a19f17f0b001333fc"],["/ja/2015/09/android-root-ota/index.html","d916f7d3ecec19333bf46229306dddbd"],["/ja/2015/09/java-learningNotes-1/index.html","8496e5028e7e40b47da3fe1233fec896"],["/ja/2015/09/newblog-newlife-2015/index.html","dbf5f3d892a8a1ce0daf2584b2bf8264"],["/ja/2015/09/router-rebuild-2015/index.html","9c337049210430667b6108eee0f5ffdb"],["/ja/2015/12/2015-12-21/index.html","b57d34a173e953c161db960cea5f6cc1"],["/ja/2015/12/PixInTouch/index.html","2d595ac64d80bdf49e67971f63ed2d62"],["/ja/2015/12/git-study-1/index.html","8a13700764191dbfaea80037bd4c5cc5"],["/ja/2015/12/hexo-backup-and-migrate/index.html","02319e9f67bde039223396ca8accb04a"],["/ja/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","8ea508e9284e041db44a1eac08fd04f4"],["/ja/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","0b93db756919dcffdb3bbed9e57c086d"],["/ja/2015/12/router-reconfig-2015/index.html","df2edda85c26cbc401145bc503a3d15c"],["/ja/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","b97ff0bdc6de9cf475bb305f2854a0f9"],["/ja/2016/01/2016-stepping-further/index.html","2bb28634b2d1fcbdab10880ec8ddecf5"],["/ja/2016/01/Android-Study-1-22/index.html","9efc6d05f6c79c37c3856ef29e71c082"],["/ja/2016/03/2016-03-20/index.html","b06b4d5b3643d3a3ae802379b022d830"],["/ja/2016/03/GSC-535/index.html","fd8930897a6eee8a7b2b184e6bc160eb"],["/ja/2016/03/gulpjs-1/index.html","f54656296278a4121111d20c5ad4f19b"],["/ja/2016/03/hexo-theme-paper-white/index.html","ba86a18f9053484057cf1fa076e7003a"],["/ja/2016/04/2016-04-19/index.html","aaf9b8f2d44a46bd9d69920fe6863e76"],["/ja/2016/06/2016-06-16/index.html","18cec0770d898c99c457cdf5c92491b0"],["/ja/2016/09/2016-09-18/index.html","d7edfeec5289887b646e191fa6438cb2"],["/ja/2016/10/2016-10-27/index.html","a7260b2679a18653cbb1e6dceced3e2e"],["/ja/2016/12/config-switchresx-and-2khidpi/index.html","83cab38b0b3344197befea050cffa76d"],["/ja/2016/12/improve-duoshuo/index.html","eafffff65c4da1fe1975a38c63941c8a"],["/ja/2016/12/use-travis-ci-your-blog/index.html","437617b6ae06061684ce6827e27765a0"],["/ja/2017/01/2017-iyahoi/index.html","0fdf59ecdbb09fafaedbfb19b70dd34c"],["/ja/2017/01/webpack-amd/index.html","e9a866fed9468c52b17072d20e7934ce"],["/ja/2017/04/kotobukiya-syaoran/index.html","677ad22257cbb3e713baebf0a9b0ac17"],["/ja/2017/04/macbook-and-surface/index.html","076cf38581ffa1b1701ad54d2cbd3922"],["/ja/2017/04/uc-hyakuya-yuichiro/index.html","573671f8c6e82e55907cae874e0cfbfc"],["/ja/2017/06/noragami-seichijunrei/index.html","4a4e6b39a656090f8d112f3ebc68b88a"],["/ja/2017/08/cross-compile-55-libev/index.html","e08798c8f9c54a5ef16218c8b9a1aec8"],["/ja/2017/08/explore-service-worker-working-lifetime/index.html","5e926f2e7e78f9733b6f0b767ac3f8be"],["/ja/2017/08/hello-jp-world/index.html","2eef6c9cb3db42afa82b117990fb4197"],["/ja/2017/08/kiminonawa-tokyo-seichijunrei/index.html","b5d5eb8cfa1ae294a8dff48aff7be0d8"],["/ja/2017/09/record-user-login-status-methods/index.html","682df952a104f7f75a6bf0d55c63171c"],["/ja/2017/10/vue-typescript-early/index.html","2e57f612a1e54ac4389cbca7469de6fc"],["/ja/404.html","f960f8ba37ac57a43802ac57f1ad22fa"],["/ja/about/index.html","c49d85073f453ad3c325959d636522d3"],["/ja/archives/2017/08/index.html","78a79acd38c4a3019ec1a8fb69993fa2"],["/ja/archives/2017/09/index.html","5580adbc41a790455fe2deb14d271a43"],["/ja/archives/2017/10/index.html","0231ed64006890775cdfc82614e70acf"],["/ja/archives/2017/index.html","725ebc48c84a574687de78a3e0063c4d"],["/ja/archives/index.html","d1d94b5b22f16b18ecc33fdf3a7a2254"],["/ja/categories/dev/Front-End-Dev/index.html","ca420884adab1865282fc7c526f08fed"],["/ja/categories/dev/index.html","c5e5d0053a59519acfeda04e9ddcf5db"],["/ja/categories/uncategorized/index.html","3a02ac8cf51310ee3ca42011d4eb84b0"],["/ja/index.html","150a5d2255527e4a52a49190542e15b6"],["/ja/nihongo-test-page/index.html","4113d4857ea4ab5ebaf9492e63148c31"],["/js/instagram.js","7d7a9e2e7286ba2d5b6d12068214f0c3"],["/js/jquery.lazyload.js","28c23bc40080d31144776e9a8736837f"],["/js/main.js","2e92f29b0cd90bddc062915eb46a858c"],["/js/mobile.js","dc84e1287e89e3c1bba67fd47b8656b1"],["/js/nextpageajax.js","c3bde8d7bb1f967fb319f57a187ea51a"],["/js/pc.js","631b535186aab0e262485ee2bf9da628"],["/js/ripple-effects.js","b9c11903da0ef5c3d790b41369c3137e"],["/js/share.js","de52ac3d43e43c1951a08b0804458a8e"],["/js/totop.js","661822968b58fd439f46bd54031238d6"],["/nihongo-test-page/index.html","567092512aebddaa384cc0842d522f43"],["/page/2/index.html","ee15f68176b1fb1aa3f064b83782fa49"],["/page/3/index.html","24aefc0e74fa27d610361c5896860a4e"],["/page/4/index.html","9fb311814b4f8e8270dd644a72323d7f"],["/page/5/index.html","89b68eff1c496dbe37f2ad0a709ddabb"],["/photoswipe/default-skin/default-skin.css","426e8908d7426603ca203b6d16281b1e"],["/photoswipe/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photoswipe/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photoswipe/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photoswipe/photoswipe-ui-default.js","0c9196aa8943ce8a8045c9f4cc62915c"],["/photoswipe/photoswipe-ui-default.min.js","9517baca43cd4e9cb23ff337fbc1baa1"],["/photoswipe/photoswipe.css","7dc0df107159e1be66d4464171561e5b"],["/photoswipe/photoswipe.js","a8d26ff34943c859884acbd6b2531315"],["/photoswipe/photoswipe.min.js","f5cd6479c4e4682545a9603e6b50c741"],["/setup-log/blog-setup/github-pages-ssl.html","d5e315a4f7725d0c5a828ab2ac48dfe3"],["/sw-register.js","9e17b9984a0ae247c8d220c11709db4a"],["/zh-cn/archives/2015/03/index.html","98c4f8aabcc078a8f77510cd37a39992"],["/zh-cn/archives/2015/04/index.html","6c4a4447dd7143080cc1ec104564612f"],["/zh-cn/archives/2015/05/index.html","da0cc25497ec7fc6d9b05ce8225cdca6"],["/zh-cn/archives/2015/09/index.html","e5f4ad85b5f1edbda7b0bea0e4891b51"],["/zh-cn/archives/2015/12/index.html","aaee842b6c4914d4f4e32a7902454470"],["/zh-cn/archives/2015/index.html","ba9d92eb2af0a59abf72c18a401e12da"],["/zh-cn/archives/2015/page/2/index.html","b207717ee33b1226f7657505a4f34da2"],["/zh-cn/archives/2015/page/3/index.html","ea4fc7d432f8ab348384e1f5054461cf"],["/zh-cn/archives/2016/01/index.html","05dfb7f59b80cc86e87e6d528c56377a"],["/zh-cn/archives/2016/03/index.html","c545a5897b6fa0754c5905c9e671b386"],["/zh-cn/archives/2016/04/index.html","5346b68164de912d991cb14a4258d184"],["/zh-cn/archives/2016/06/index.html","20ee58b86a290863e6b821499b448c43"],["/zh-cn/archives/2016/09/index.html","44e9421132348db868c66f9ad94133b2"],["/zh-cn/archives/2016/10/index.html","984b35b48a7a31594f7d9805d30e8088"],["/zh-cn/archives/2016/12/index.html","5f79b6500f1b7fae75f37cd28fe8819f"],["/zh-cn/archives/2016/index.html","924020276e27a8b0801aa13df703da74"],["/zh-cn/archives/2016/page/2/index.html","bc74820a68db8fe3a9626a3bf7a0552b"],["/zh-cn/archives/2017/01/index.html","7ee77f6adfd6dec80b023f9bec312699"],["/zh-cn/archives/2017/04/index.html","459c00eae5581e92cc8fdd4e1453d7bd"],["/zh-cn/archives/2017/06/index.html","a31d1243ca637fbc613cf950aa556af2"],["/zh-cn/archives/2017/08/index.html","bc98c81af48d4463c194ad2088a8dc31"],["/zh-cn/archives/2017/09/index.html","bd8f4ee030ccb5506c7f1107f556855e"],["/zh-cn/archives/2017/10/index.html","0e11d09f32fdadf38abeca4ffcd5d2a5"],["/zh-cn/archives/2017/index.html","c9d22ec64a3c0722e47a89202d2f1d17"],["/zh-cn/archives/2017/page/2/index.html","243d1e28e11a70bef33179b510ebbfb6"],["/zh-cn/archives/index.html","2c47516d1794640931c27da09ef6aeb1"],["/zh-cn/archives/page/2/index.html","e65a1253b72b3e86ec397cd07049e640"],["/zh-cn/archives/page/3/index.html","a7a6cac0d510a58ec0a5bb1a023a21bf"],["/zh-cn/archives/page/4/index.html","f10121801f3d4e5651d3a2a7dba358b7"],["/zh-cn/archives/page/5/index.html","437815a69406e33d85214acab6ec5e01"],["/zh-cn/categories/ACG/Music/index.html","c64df0000b33f83900b748c3196337a7"],["/zh-cn/categories/ACG/Music/self-copy/index.html","0e8fc402a8cc1aaeb5529832c7ed7345"],["/zh-cn/categories/ACG/Travel/index.html","4e4035eebfb649ccbf70da926d592069"],["/zh-cn/categories/ACG/figures/index.html","f66067a0454e5bfd096949395c4a272e"],["/zh-cn/categories/ACG/index.html","961d072a322ecb7dc6ca817e8fe3c543"],["/zh-cn/categories/dev/Front-End-Dev/index.html","f2a7a1b2b147e504fd21a8bfe2fecf08"],["/zh-cn/categories/dev/HTML-CSS/index.html","ff5dcd75ca2c28a01b3646333329c5a9"],["/zh-cn/categories/dev/android/index.html","9a60d07e80efe3a01cc2b4f0699ad220"],["/zh-cn/categories/dev/cpp/index.html","a1d613d54efc33ec8914e1ba07ff5919"],["/zh-cn/categories/dev/git/index.html","fbde8fd17fa21a657c0767f03b82f44b"],["/zh-cn/categories/dev/index.html","495d690f8004356380b7ff0b21f013e8"],["/zh-cn/categories/dev/java/index.html","57465c3e56a7002cd8c6476a18b4ba53"],["/zh-cn/categories/dev/page/2/index.html","4485160856100909f7fbdfb7ea3c322c"],["/zh-cn/categories/maintaince/blog-setup/index.html","22b612c347dd299a0f6f21119b8d24ce"],["/zh-cn/categories/maintaince/index.html","4f26fc7c414bf0cae0fbb6906f404f19"],["/zh-cn/categories/maintaince/macbook/index.html","8dbd61d5afa57bd1eeac88e832c5e440"],["/zh-cn/categories/maintaince/router-config/index.html","64dd2f7a9b42d5b6e95711ed38298f38"],["/zh-cn/categories/notes/index.html","961a98ab0693207513267f374a678b95"],["/zh-cn/categories/tricks/android/index.html","7eb5988a3f35c638154223e32ff43c68"],["/zh-cn/categories/tricks/index.html","7bc0536c331ddcaff845db0d088785d3"],["/zh-cn/categories/uncategorized/index.html","d2105a06734d0b6835f0e03cf79faabc"],["/zh-cn/categories/works/Front-End-Dev/index.html","aba85c8c3e2bf33b9254c722ee8bb4de"],["/zh-cn/categories/works/csharp-wpf/index.html","c310c768dc33b178356ef5aa9872544b"],["/zh-cn/categories/works/index.html","8678e6d9d02ae328080b035b012888b6"],["/zh-cn/index.html","12a9ab57f770479d7fb143477e4fd91d"],["/zh-cn/page/2/index.html","6abc219d23288e71a22f34f5262732f8"],["/zh-cn/page/3/index.html","cf0c3f0baa7c1f1635e2687ba53a9ded"],["/zh-cn/page/4/index.html","673a3addc1e57c1ef788425160d18356"],["/zh-cn/page/5/index.html","ee0e5d68447a1a27ec0c41b8a2f5075b"]];
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
