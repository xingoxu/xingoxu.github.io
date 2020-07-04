/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/03/WNDR4300-setup-log/index.html","d56dcbdad9957cc84a53a5c6fa8460ae"],["/2015/03/android-hostname-change/index.html","4c6f16570d47581f72ec1af2f9e6ea2d"],["/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","6295bb41c7633520a917150abd8f1e3c"],["/2015/04/android-chrome-issues-with-webpage/index.html","9b91836814ff404ee1cfa59d67367d1a"],["/2015/04/cpp-study-log/index.html","11ae5f9dcb9d7139025aeb212d64c3f4"],["/2015/04/github-pages-ssl/index.html","3796071f7d245beb5f62c6b64376f68d"],["/2015/04/hello-world/index.html","d4da6a97abd7980c4ca0a1facbbcedbf"],["/2015/04/hexo-setup-log/index.html","a762f0844ca57ef1651e3d0c85ad08d9"],["/2015/04/self-copy-cd-inazuma-1-html/index.html","98fe57459938b826ae036ebf96cb85a7"],["/2015/05/cpp-inherit/index.html","a64c8e20be86dc8f3e4235f6e8865958"],["/2015/05/cpp-polymorphism/index.html","90c006097c05fc915239ac52648eebf0"],["/2015/09/android-root-ota/index.html","353579e61fd904f50a07375a22bc48ac"],["/2015/09/java-learningNotes-1/index.html","faa95a0144661bf29ac9cba0252e12f7"],["/2015/09/newblog-newlife-2015/index.html","470d38a601d1ff4d39f267309cd44366"],["/2015/09/router-rebuild-2015/index.html","3f5dc96dfb55aaceaa5892d93daefcc7"],["/2015/12/2015-12-21/index.html","a1463849081b053c5060ae2e56ad35e2"],["/2015/12/PixInTouch/index.html","0ecbcc5ad84ce2970d4f46d0b35f858d"],["/2015/12/git-study-1/index.html","88f1b1549b16a898f9e8dacd4997ad31"],["/2015/12/hexo-backup-and-migrate/index.html","204e8d9ec06b577ee232edb7e7f76df6"],["/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","aa9eb98e80ab20e04d827f18855a3f8b"],["/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","ae021da2da327824390b30b869ef8365"],["/2015/12/router-reconfig-2015/index.html","57d627ca9736a3925175efd08b1a3901"],["/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","f08da4608bcb8d4a6e379a764bd76a2a"],["/2016/01/2016-stepping-further/index.html","56ed4b66b83a2bf3886592e4b0e077aa"],["/2016/01/Android-Study-1-22/index.html","698d3a9304ee6a9215b85da084fd8c93"],["/2016/03/2016-03-20/index.html","66bef1926799887d89cd67d266e7b330"],["/2016/03/GSC-535/index.html","b5adf10588d224264b199ac905e07e39"],["/2016/03/gulpjs-1/index.html","cb3eda64e5ce21c95aab0e784deb5eff"],["/2016/03/hexo-theme-paper-white/index.html","1b10a0c2b57c956693966546c7c33142"],["/2016/04/2016-04-19/index.html","320a5ff11428135cddffaf55634256f5"],["/2016/06/2016-06-16/index.html","efe6712bd7c15a7ab458eb614be09a1c"],["/2016/09/2016-09-18/index.html","4f217a2620586188b53c71eeaadbea3a"],["/2016/10/2016-10-27/index.html","63850da675f1d583efa9ee34467098ab"],["/2016/12/config-switchresx-and-2khidpi/index.html","d976dfb6b6735eb26b4dec6f5447c394"],["/2016/12/improve-duoshuo/index.html","fb5dd91b87b37ed350f2f78c0bf38c5b"],["/2016/12/use-travis-ci-your-blog/index.html","4548ad5e3e7f1b49b2ebd451f7414de3"],["/2017/01/2017-iyahoi/index.html","0c7127412fa2d43cccce10e1f8d126f0"],["/2017/01/webpack-amd/index.html","221ab07058c6d412e59142f23cd9e5bb"],["/2017/04/kotobukiya-syaoran/index.html","d9bcfb9dc832ce75b0d5f438e2cd8def"],["/2017/04/macbook-and-surface/index.html","f9df26f59f93aed98869d64dbb8c7408"],["/2017/04/uc-hyakuya-yuichiro/index.html","e7676b2453f7ee12c5e2c20d9aea205e"],["/2017/06/noragami-seichijunrei/index.html","de7dc6822bd275d0dbd7c294d95783e6"],["/2017/08/cross-compile-55-libev/index.html","15206355bb4ec02cf182a81d49e8e54e"],["/2017/08/explore-service-worker-working-lifetime/index.html","12f5f506cfad1783313a88a964209a7f"],["/2017/08/kiminonawa-tokyo-seichijunrei/index.html","62894af361bbda77cebd8ca3d0370884"],["/2017/09/record-user-login-status-methods/index.html","4b869fe15aeb649245c61514a1c88474"],["/2017/10/vue-typescript-early/index.html","7a747e5c145a28c810541264b0bbe011"],["/2018/04/2017-end/index.html","d9654c3e57cc04cdcf6647a943ffd3c8"],["/2018/04/twitter-account-activity-api/index.html","d12258a9768d9a678cf150d9d2f227e8"],["/2018/05/buddy-complex-seichijunrei/index.html","946f164832e639e2fdef10f4b3fc9044"],["/2019/05/2019-05-16-record-jp-digital-TV-on-nas/index.html","43b1de063a67f1f87970d4ad5cb86eb2"],["/2019/05/2019-05-17-google-io-tech/index.html","43ca7e105343852a8b7d07099ae8c7ea"],["/2020/06/cls/index.html","27934e6f8f022645ec7776af17f3e5ed"],["/2020/06/try-serverless/index.html","8edb99bbad2d49316f640cd45e44d476"],["/2020/07/macos-node-require-path-case-insensitive/index.html","445badd2beed8763cd56540540c4eab8"],["/404.html","43ecc584443c39de2777a7f1b1a18327"],["/about/index.html","097d1fd33f78cbb60a3a998f66431e12"],["/archives/2015/03/index.html","453543a84bd13b2735882bd21ec92a8b"],["/archives/2015/04/index.html","4293b0a591ee6ea74950d2ca2cc4a15c"],["/archives/2015/05/index.html","58c6db9e9ad80fe6e62de69114f86892"],["/archives/2015/09/index.html","8ddbaab55880dde82fa86055540b02a5"],["/archives/2015/12/index.html","18ea37dade021e92913dd62c9ec048d6"],["/archives/2015/index.html","ed04a32029ec4cc9362285a3f54605e6"],["/archives/2015/page/2/index.html","66cadedfa6c9d453b13be27939e34389"],["/archives/2015/page/3/index.html","2ea8e8488fee5d273c6cea976cc446c0"],["/archives/2016/01/index.html","60de8492b89b28bead4b32f242b09ea4"],["/archives/2016/03/index.html","6925b7841d22376706baf37c67580955"],["/archives/2016/04/index.html","756cbe5dacf17ebe7ee66280a8a025d3"],["/archives/2016/06/index.html","5cb2c8e936b800a7ca788d2b9517d78c"],["/archives/2016/09/index.html","d2e2583eed2f545742e0a53d91194e3e"],["/archives/2016/10/index.html","e615b6a4b656132f788db6520be9aece"],["/archives/2016/12/index.html","9c76acbc42e985d94ee1d7827695d512"],["/archives/2016/index.html","a74f951f39a650053148597307a12ea8"],["/archives/2016/page/2/index.html","84b3614918a6feb52b82d4cad0cdef9e"],["/archives/2017/01/index.html","0b65bd7cca667bd2543fa1a60b097b52"],["/archives/2017/04/index.html","c82348145c2590697a8932616c253bcb"],["/archives/2017/06/index.html","b11a66b690c61fc3778dcc4a4c66d620"],["/archives/2017/08/index.html","4bbafee8a467cb4ecd48ca09d855e7ee"],["/archives/2017/09/index.html","04029f6bbde497c2998d4317343a8bd0"],["/archives/2017/10/index.html","7d896a1b7abef9605bc55bade55b60a0"],["/archives/2017/index.html","09ce60b190fcce571427616d9606763a"],["/archives/2017/page/2/index.html","a42753cfc03075879cf27e35a957fe8b"],["/archives/2018/04/index.html","6a94a5e9b4eb2c491e6e899624fcbbb4"],["/archives/2018/05/index.html","ecfc175ace19d7d22633e7b1f2bb07d1"],["/archives/2018/index.html","58d4dd2314720f436e5f8911c9829fbc"],["/archives/2019/05/index.html","b145194cbeb0f73467fe366a028f5eae"],["/archives/2019/index.html","db9595852f08cf76aa475f690a50ad49"],["/archives/2020/06/index.html","cb7d1df38e5e8b970a681971c579fca0"],["/archives/2020/07/index.html","140843b9fe8d32a827d822ae57c65a8c"],["/archives/2020/index.html","b24f2915d12d30b91d15392d60041e41"],["/archives/index.html","84ea33cac0d1de96716d16869d1cc066"],["/archives/page/2/index.html","a3663c1244cf12406799f1a4056e1e01"],["/archives/page/3/index.html","9e41227d29355bb82da458a91e7ed899"],["/archives/page/4/index.html","edf887c01d4ee79cbca3d4331a9e2512"],["/archives/page/5/index.html","0a78e04d872284899116018dac12cc17"],["/archives/page/6/index.html","9e1373058901e78d6daa12a0ec6c9e3c"],["/assets/images/about-me.png","a066d06c3d9d1fe56c4d921cec7febf3"],["/baidu_verify_YbTSlpWIUJ.html","779049c3a50695ceb3a388ce1e8bc1b9"],["/categories/ACG/Music/index.html","11ba6214899e068af24d4b1f9aa9fcd6"],["/categories/ACG/Music/self-copy/index.html","126e8517a3ad6254634122e85e9ccf50"],["/categories/ACG/Travel/index.html","6d56d3cccbf6925edbc3d6af733719a6"],["/categories/ACG/figures/index.html","4248f9d06e27388cbd7556934320542b"],["/categories/ACG/index.html","8ec8f21c64fb3dc798b2faa007fac465"],["/categories/dev/Front-End-Dev/index.html","7b472c78f824d008076f28569d0ea1e8"],["/categories/dev/Front-End-Dev/page/2/index.html","fe421f91d1c5ad07cd97069188ad2f27"],["/categories/dev/HTML-CSS/index.html","7d79c881bc4f8ee4ed145fe4a4d7f5f8"],["/categories/dev/android/index.html","ad22c165077cc88389da449b00e697cf"],["/categories/dev/cpp/index.html","6d291d16db4353030a7f752536d2b925"],["/categories/dev/git/index.html","6243917bc92241303ae6cbaa66386c74"],["/categories/dev/index.html","15f1c1da66dcee9ae121c9a9026344ba"],["/categories/dev/java/index.html","685e29f773abf7e9929441afe57d726f"],["/categories/dev/page/2/index.html","ba744fefd9123681f45cace599022435"],["/categories/dev/page/3/index.html","3e3e2076bc806ef38871a7e8defd1ee6"],["/categories/maintaince/blog-setup/index.html","69353d9c26f6c0897b4addc84d64f097"],["/categories/maintaince/index.html","8d08d10170dd77f1fa40d6f380e3747d"],["/categories/maintaince/macbook/index.html","24a63fa30e55f4b606d5fccbf839ea49"],["/categories/maintaince/router-config/index.html","53607774b3897cc255350d901de81d9a"],["/categories/notes/index.html","b6336d0a4440321fddf75d65665a65d1"],["/categories/tricks/android/index.html","62b7d52e5e613b7122edc53c8c12f7de"],["/categories/tricks/index.html","6c3af7f4dc77aa6001ebe99f262a2c29"],["/categories/uncategorized/index.html","af826abd95eee234b1e89e456f84556a"],["/categories/works/Front-End-Dev/index.html","f6075181919aaf09da9582da89fee818"],["/categories/works/csharp-wpf/index.html","29178d866ef66fca4532dd12f405b937"],["/categories/works/index.html","fc7ac13f487b645ff4fb29e30623b3fe"],["/css/seichi.css","c60ad00990790aacbe0a9ff08766c515"],["/css/style.css","e3abc56736917946e8536ef38cc2c5cd"],["/google311213f0c8d812a9.html","51f1ee3c2f13a21a1a40b3dae4954454"],["/img/coderwall.png","1976fe70f1ee8ed243e0975402e06a2d"],["/img/delicious.png","952d9b54d8bcfe7b998f67ff48c4dbce"],["/img/douban.png","d42a163f932100e621d22732db34ecdb"],["/img/facebook.png","4bd685f6c9fdaccabf07bdd52173facb"],["/img/github.png","3c4b6267a1a3fedebdc7d089610ecfe7"],["/img/google.png","c385f5304465716b2d6c9ada94c657ab"],["/img/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["/img/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["/img/linkedin.png","4c72c4896f3c23f736cb1ad08f0c866e"],["/img/mail.png","38a7b8302dac028bf03b22d228938abf"],["/img/pinboard.png","9b6186cb97adbe50311f94e50f2392cf"],["/img/pinterest.png","e1b8e655d1b99b40ebcbd96977ae234e"],["/img/rss.png","ec8cf9b5a98011aa75cc0a4f25024dc9"],["/img/scrollbar_arrow.png","be5381cedbd6b778b1d92e224fd71cf7"],["/img/stackoverflow.png","039128ececb47b33bccedd98dc9fc809"],["/img/twitter.png","d2289a4936fefa41d9f92cf89939be5b"],["/img/weibo.png","b382032b316ee38c6d537fe9d36ae54c"],["/img/zhihu.png","e6352c0e1957beef3009268ae747c3aa"],["/index.html","0121159839e03a663cb928c80f8f4c57"],["/ja/2015/03/WNDR4300-setup-log/index.html","317e43be44ce7a9d740bcf71aa352bca"],["/ja/2015/03/android-hostname-change/index.html","bc608da28cbf05d13ad4b97b623b893f"],["/ja/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","d3705cc6f660a50db809a1282173e0fb"],["/ja/2015/04/android-chrome-issues-with-webpage/index.html","b99a0d231f606e93c2ad4bece1e01161"],["/ja/2015/04/cpp-study-log/index.html","c70a05341db8733a9407b8b78fa07389"],["/ja/2015/04/github-pages-ssl/index.html","cdb11a43a6357a9801010d9ab26b9c31"],["/ja/2015/04/hello-world/index.html","cb5b295dfc9d1c14647dbf625477b557"],["/ja/2015/04/hexo-setup-log/index.html","d807983c90eb09380a694384fd671b9b"],["/ja/2015/04/self-copy-cd-inazuma-1-html/index.html","52bfc4a91605caf6aa2b712a39bc8bcf"],["/ja/2015/05/cpp-inherit/index.html","198912de3e27ac78e806a7601ed8193c"],["/ja/2015/05/cpp-polymorphism/index.html","780a1214bf27f1a0d88d4d692a6f214e"],["/ja/2015/09/android-root-ota/index.html","097c3b4e03e12ece8c57fd2980fdb7d3"],["/ja/2015/09/java-learningNotes-1/index.html","441ae370e1810c4a043ef3e1e793b797"],["/ja/2015/09/newblog-newlife-2015/index.html","1da93f3a39f49ecc67bf94269b226dc3"],["/ja/2015/09/router-rebuild-2015/index.html","e19dbcb3ffe6a364c31772c93e18193a"],["/ja/2015/12/2015-12-21/index.html","b92745a6673591e2f89410050f603f48"],["/ja/2015/12/PixInTouch/index.html","5450ff5e9ff00cee148ba8edc6eaa392"],["/ja/2015/12/git-study-1/index.html","39ab6f09b27b009410cea6603b8e096d"],["/ja/2015/12/hexo-backup-and-migrate/index.html","a347570aa1cd30b5b9b7c8c8599319a5"],["/ja/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","75e128c4a5504ce4694602d18c8b3a94"],["/ja/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","ef530ad5f0eb453bd198da4de6896ae7"],["/ja/2015/12/router-reconfig-2015/index.html","bee25983564444ed824954adb76d7c0b"],["/ja/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","1e0a20dc9f3d9c283a9777061ec5b36d"],["/ja/2016/01/2016-stepping-further/index.html","f802a8ab331c1830fbf932d9af54b4ae"],["/ja/2016/01/Android-Study-1-22/index.html","75a770ded2c7ab6bdd752d00a9249735"],["/ja/2016/03/2016-03-20/index.html","c40d3ec010a26b73f0fb6c0b6f0218a2"],["/ja/2016/03/GSC-535/index.html","b6121b6a3f74db8ba00f43aaf448e76f"],["/ja/2016/03/gulpjs-1/index.html","3febad8aa070a7e63311f98b63e3ffad"],["/ja/2016/03/hexo-theme-paper-white/index.html","c286e633610757392417c6a79e3edef5"],["/ja/2016/04/2016-04-19/index.html","d2ec3ba74b096bf3e512c2a92bab03ca"],["/ja/2016/06/2016-06-16/index.html","0867626a80dc70ee34d17227573d1383"],["/ja/2016/09/2016-09-18/index.html","7feff64089024a9ddb3ddf38c882140d"],["/ja/2016/10/2016-10-27/index.html","1a767430610271d500d2e5a004d60d38"],["/ja/2016/12/config-switchresx-and-2khidpi/index.html","fcb93151d18893028ef1b7b00b93980d"],["/ja/2016/12/improve-duoshuo/index.html","5a97b14b2e7786c901fb04663605dd89"],["/ja/2016/12/use-travis-ci-your-blog/index.html","3332192f51f14f3be6a2c42e0f8cda43"],["/ja/2017/01/2017-iyahoi/index.html","041dc5162073f0f6677633a40c9bdfd9"],["/ja/2017/01/webpack-amd/index.html","ccfc627f090bedc5aa2d7a3c571295da"],["/ja/2017/04/kotobukiya-syaoran/index.html","029b1dbfaf20ce891524e1e895c57a05"],["/ja/2017/04/macbook-and-surface/index.html","aa2f4f3d90d7266c39fb689542cf2bf0"],["/ja/2017/04/uc-hyakuya-yuichiro/index.html","7185c7f0a82335753e194a33414ccb03"],["/ja/2017/06/noragami-seichijunrei/index.html","f13c517ec25b86be54115112051558b6"],["/ja/2017/08/cross-compile-55-libev/index.html","9cac5c903e73671f49339e47912d0b56"],["/ja/2017/08/explore-service-worker-working-lifetime/index.html","4254b64b0fb94cbb1f80f35868e7d74e"],["/ja/2017/08/hello-jp-world/index.html","894ef0d65cc59c28795446f31e1da80a"],["/ja/2017/08/kiminonawa-tokyo-seichijunrei/index.html","0797b3e33204474dea6a73e4dd49a36c"],["/ja/2017/09/record-user-login-status-methods/index.html","5dde5728efb80ce502c5176317dd09b5"],["/ja/2017/10/vue-typescript-early/index.html","fee8f88ada9bfbc6162ed1d70ec4692a"],["/ja/2018/04/2017-end/index.html","e437fc5cc84ceaa1b2ca205a7a84586b"],["/ja/2018/04/twitter-account-activity-api/index.html","a0370ffec66d47ab28f92f746673fd0f"],["/ja/2018/05/buddy-complex-seichijunrei/index.html","c70af12f467e6a20fc7d4f63ce7b07ac"],["/ja/2019/05/2019-05-16-record-jp-digital-TV-on-nas/index.html","068d11e31cc46bafd4c58367f091a0cb"],["/ja/2019/05/2019-05-17-google-io-tech/index.html","fd2d09d237cb9cc9eead8f27968ad1df"],["/ja/2020/06/cls/index.html","ee723b84c4f6519648a2035afaa6196f"],["/ja/2020/06/try-serverless/index.html","66678d8b5d8251f605e58ab938d0627b"],["/ja/2020/07/macos-node-require-path-case-insensitive/index.html","2d43b7ef2342bc8a2faa974bfd6299bd"],["/ja/404.html","71788a2c1fe3d1726d361913dd67ac31"],["/ja/about/index.html","d89481bde019027962b4ef63d21e32d9"],["/ja/archives/2017/08/index.html","d91593c66fb2f5755061fe315974ec22"],["/ja/archives/2017/09/index.html","33de81dc4837ce1ac818ce86d74a65cf"],["/ja/archives/2017/10/index.html","8c924cd8293763e9557caed12fba1966"],["/ja/archives/2017/index.html","7db079515614c81776c8bea7cd2ad5e7"],["/ja/archives/2018/04/index.html","b3e03c6c3b5d4dc84290e2c6203febb2"],["/ja/archives/2018/05/index.html","40cfc8657756b5aaff1e1743711470ff"],["/ja/archives/2018/index.html","4ff809a3380378978e322a821bf0a91f"],["/ja/archives/2019/05/index.html","51792618237e9270fbd7e2189a90b384"],["/ja/archives/2019/index.html","11f1ebde311069921f824575c2c6e531"],["/ja/archives/2020/06/index.html","4c48dc1e44d82a1a326604e7c6740897"],["/ja/archives/2020/07/index.html","e18864ffe07b0334e9d609556959736f"],["/ja/archives/2020/index.html","5ecf7c36edc9704c210fe4d8062f8b5f"],["/ja/archives/index.html","6253f4929bd2a6df5f623b8e852badab"],["/ja/categories/ACG/Travel/index.html","27d621924b9a623b8be55b90d9ad72b4"],["/ja/categories/ACG/index.html","c1dc672b78251e2d0da823e6516995f9"],["/ja/categories/dev/Front-End-Dev/index.html","af7bb81bd82b41a703fa7f6eded470a3"],["/ja/categories/dev/index.html","e1fba9bd3cf9a3f1a151e9c1feb0b13e"],["/ja/categories/uncategorized/index.html","8f62dc28f72d22843e7777cf250aa596"],["/ja/index.html","0b520e1781a73167b1c4727b58f5553b"],["/ja/nihongo-test-page/index.html","3b02aae51a5d2cde51afeb512b731ae7"],["/ja/resume/en/index.html","17ca305f5220e5d34010ffb4f1ffc3e0"],["/ja/resume/index.html","87dbdbae9f42da1d525bc8406811057d"],["/ja/resume/ja/index.html","045dc1c5da76be7b6a5fac0cd8e1e9f8"],["/js/instagram.js","7d7a9e2e7286ba2d5b6d12068214f0c3"],["/js/jquery.lazyload.js","28c23bc40080d31144776e9a8736837f"],["/js/main.js","2e92f29b0cd90bddc062915eb46a858c"],["/js/mobile.js","20029df2609ddd5d2b2d346edbb297c0"],["/js/nextpageajax.js","c3bde8d7bb1f967fb319f57a187ea51a"],["/js/pc.js","631b535186aab0e262485ee2bf9da628"],["/js/ripple-effects.js","b9c11903da0ef5c3d790b41369c3137e"],["/js/share.js","de52ac3d43e43c1951a08b0804458a8e"],["/js/totop.js","661822968b58fd439f46bd54031238d6"],["/keep_origin/affiliate_jump.html","71bf6d72c5d080ec2b3f8ecfae3d71ed"],["/nihongo-test-page/index.html","f3dbc84c9c90fd00743d4adb54f02597"],["/page/2/index.html","b71f768dd8fc363bec55b51b8e35bd90"],["/page/3/index.html","0aa6dd17f810f20dcc9cd6940214b027"],["/page/4/index.html","de5a99a19032667f49b32e0c7d8f4942"],["/page/5/index.html","5d9b1d21ed41c241789b9ead128a2216"],["/page/6/index.html","0597186133e0304da40a0e172b1fe1cd"],["/page/7/index.html","7e24be50be0181bf2894667d217e8093"],["/photoswipe/default-skin/default-skin.css","426e8908d7426603ca203b6d16281b1e"],["/photoswipe/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photoswipe/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photoswipe/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photoswipe/photoswipe-ui-default.js","0c9196aa8943ce8a8045c9f4cc62915c"],["/photoswipe/photoswipe-ui-default.min.js","9517baca43cd4e9cb23ff337fbc1baa1"],["/photoswipe/photoswipe.css","7dc0df107159e1be66d4464171561e5b"],["/photoswipe/photoswipe.js","a8d26ff34943c859884acbd6b2531315"],["/photoswipe/photoswipe.min.js","f5cd6479c4e4682545a9603e6b50c741"],["/resume/en/index.html","a887b352854e6ebd6efbd4fb38d18835"],["/resume/index.html","e687c6bd1ad5c91c8de82dc645ac0aa8"],["/resume/ja/index.html","b87fa375f302e56cecc9e9423a287001"],["/setup-log/blog-setup/github-pages-ssl.html","d5e315a4f7725d0c5a828ab2ac48dfe3"],["/sw-register.js","5771fd59e7e4f6e3e061d3d127f0b551"],["/zh-cn/archives/2015/03/index.html","8d6894896fff309286dbe1430c6559d1"],["/zh-cn/archives/2015/04/index.html","bcec18ae62395a9bafaff7a87e3efc1c"],["/zh-cn/archives/2015/05/index.html","0eca6f57fbaa0c92ec34e0e2528171a9"],["/zh-cn/archives/2015/09/index.html","00a29b434734ec2174f72ca37b8276f6"],["/zh-cn/archives/2015/12/index.html","9e5e8b5ee062dfb09737327e82030c28"],["/zh-cn/archives/2015/index.html","2b7a212bd18f888c0bf285e651124236"],["/zh-cn/archives/2015/page/2/index.html","d8aaa7b9ff102e9ff5a49c784c763d73"],["/zh-cn/archives/2015/page/3/index.html","1eab427856db24ea25d5f48cdb126c55"],["/zh-cn/archives/2016/01/index.html","7631c65da38cd5ee4399130e94482ce4"],["/zh-cn/archives/2016/03/index.html","ce9d69cefab88d4b51dd84a5d0519cdb"],["/zh-cn/archives/2016/04/index.html","653f816a90146609111cdf54defac626"],["/zh-cn/archives/2016/06/index.html","d4237336793a3aa5b0bf8fa9181609e2"],["/zh-cn/archives/2016/09/index.html","8640215f16962f4de9a15f64c1d2a58f"],["/zh-cn/archives/2016/10/index.html","f69fca47ab4522f9206a21b875c07b81"],["/zh-cn/archives/2016/12/index.html","ce4c5801b58cfe0e47f648d0c8a84644"],["/zh-cn/archives/2016/index.html","fa020fd4c2874b564d5c67dde6d5f5a2"],["/zh-cn/archives/2016/page/2/index.html","2baecf6cda2b3823f912528fa96d4a50"],["/zh-cn/archives/2017/01/index.html","0c8dc19c3a18176e46f4464c8af5ed58"],["/zh-cn/archives/2017/04/index.html","591c5b5bbdd0155f7637aa3b31ce8bce"],["/zh-cn/archives/2017/06/index.html","3f172b6a5f98b4a43f801dffdcda6c0d"],["/zh-cn/archives/2017/08/index.html","68efffa3ac6d00bb8e7c958dc11ed33b"],["/zh-cn/archives/2017/09/index.html","0c073a4a5f16550fb5ba54c6ec7851ba"],["/zh-cn/archives/2017/10/index.html","4d60452fedab970775d60a45c4ef95b3"],["/zh-cn/archives/2017/index.html","d9db34fd7d75eae34c605e273d83b9e5"],["/zh-cn/archives/2017/page/2/index.html","c6be00e5eb35b12692314295e4b51516"],["/zh-cn/archives/2018/04/index.html","35f68b69e70e73dd6cf021bc2b1112d1"],["/zh-cn/archives/2018/05/index.html","a09d6aef974ee8b0bcb697fbd7e20c36"],["/zh-cn/archives/2018/index.html","895e84885d0e867e76b1c8c40df6f148"],["/zh-cn/archives/2019/05/index.html","22905255ec131648c9f7bf493e463b61"],["/zh-cn/archives/2019/index.html","752041e52b43a0809d6eb6744457b6b8"],["/zh-cn/archives/2020/06/index.html","ab4646374edd7b8a9159a8e9f41e00b5"],["/zh-cn/archives/2020/07/index.html","8bce9c5cb3fb2190dc5c0a8f7d21d53f"],["/zh-cn/archives/2020/index.html","f68403a828a28fad39111a263df411cd"],["/zh-cn/archives/index.html","d77cfefbc3fcdf0a01f5b22a3827a74e"],["/zh-cn/archives/page/2/index.html","9c60651bf878284715e32ac2f7261b27"],["/zh-cn/archives/page/3/index.html","cc050a5f04d024306298769200b3d046"],["/zh-cn/archives/page/4/index.html","06fd0b23e346e729012691c3b74ee5ee"],["/zh-cn/archives/page/5/index.html","c56157c643ecccfb4184023d5c03fe0f"],["/zh-cn/archives/page/6/index.html","043cad048dcae198cbe23d15ace707fb"],["/zh-cn/categories/ACG/Music/index.html","d3ee2c23667e5d2381d35b5212f211e8"],["/zh-cn/categories/ACG/Music/self-copy/index.html","12e408fcfe51023e09aea34f154d170e"],["/zh-cn/categories/ACG/Travel/index.html","a7796b39d40e604b2c8c7012c04cf37a"],["/zh-cn/categories/ACG/figures/index.html","3f7fee2b15b62ccae5fc428505473539"],["/zh-cn/categories/ACG/index.html","1b1068120ade156d49f0c6146a2fb7cb"],["/zh-cn/categories/dev/Front-End-Dev/index.html","31c9ddde20888bbbd20c4e91adb26715"],["/zh-cn/categories/dev/Front-End-Dev/page/2/index.html","b25a77359b9ee022dd7fcb3739d757a1"],["/zh-cn/categories/dev/HTML-CSS/index.html","eb1329ce8d7dde4bbdfc2a31387e3d41"],["/zh-cn/categories/dev/android/index.html","1ddb6cbab531feca325572338fab4121"],["/zh-cn/categories/dev/cpp/index.html","65ac40c85317c678a72e67d0931a0dd9"],["/zh-cn/categories/dev/git/index.html","caa1974d1f2adb4416ddc0cedd262904"],["/zh-cn/categories/dev/index.html","00f75bbcf9ae599413fa97448992daaa"],["/zh-cn/categories/dev/java/index.html","12daa47e21d2d530afe2b86e8ca2e792"],["/zh-cn/categories/dev/page/2/index.html","dfbb48d546e3bf222f86b36064876657"],["/zh-cn/categories/dev/page/3/index.html","b1f5ae5a46960eb6d0457a6372442d30"],["/zh-cn/categories/maintaince/blog-setup/index.html","4622c6cfcd69b17aa60410659ac3f3cc"],["/zh-cn/categories/maintaince/index.html","0f488eec82f8de458861871622f88659"],["/zh-cn/categories/maintaince/macbook/index.html","5db58575179268a10ba8bdeac859d7be"],["/zh-cn/categories/maintaince/router-config/index.html","7d87e125ff47843893d6cc2aea59f977"],["/zh-cn/categories/notes/index.html","265920f061c971bb3ed6451e8c3ead06"],["/zh-cn/categories/tricks/android/index.html","03de6d7dc56ef8c2b21666ddec50de04"],["/zh-cn/categories/tricks/index.html","49409db17b4d4ebe0d293ae37b53e6e8"],["/zh-cn/categories/uncategorized/index.html","302964a63d9cbc5d5582ad449e2d8a2e"],["/zh-cn/categories/works/Front-End-Dev/index.html","5374e271d8595c6d50560b7c0beb23b4"],["/zh-cn/categories/works/csharp-wpf/index.html","4e5420972657e0b7f1197b435ce3fdbe"],["/zh-cn/categories/works/index.html","7b04991bcd2ef63ff21c472653123ef0"],["/zh-cn/index.html","5e125948aeb1ca55e8f09a245e1ba4bf"],["/zh-cn/page/2/index.html","fbcf90709e03701d350ad28783023259"],["/zh-cn/page/3/index.html","fde78a12b8e9a535969d51daa1b3c140"],["/zh-cn/page/4/index.html","96aff0036c5bc8f7156e25ce884b86b8"],["/zh-cn/page/5/index.html","358c9b1c9a97e4daa27e854d9097d876"],["/zh-cn/page/6/index.html","285f29a4c650b6a1539a49965553027e"]];
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
