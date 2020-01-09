/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/03/WNDR4300-setup-log/index.html","f6762dbd13cd3a3640871a5c5ded248f"],["/2015/03/android-hostname-change/index.html","1452f73b1a97a8a726f39c58218db4c4"],["/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","88baa6fdc643c7b79dbc6d9f7ca800d5"],["/2015/04/android-chrome-issues-with-webpage/index.html","e45290182f60046c9a5ebafe87b52125"],["/2015/04/cpp-study-log/index.html","f26a49c110bca57a4e1c34c3338dcdbe"],["/2015/04/github-pages-ssl/index.html","44b7465e97495ae0bb1ef5efd89cb634"],["/2015/04/hello-world/index.html","8e16331d1515f420862ab47e867a829a"],["/2015/04/hexo-setup-log/index.html","b259904b50c1f3a6f045e3fb07d8ba47"],["/2015/04/self-copy-cd-inazuma-1-html/index.html","79b21824de4f4f4868a3141773598a22"],["/2015/05/cpp-inherit/index.html","b761b23d0f0ecdb730c5ee7556d0bd9f"],["/2015/05/cpp-polymorphism/index.html","e5f20b79fcf3a1860454164c74f003f7"],["/2015/09/android-root-ota/index.html","114528e9e9538a1e83a2cec9b0c6482e"],["/2015/09/java-learningNotes-1/index.html","d96f87f77a0af71231cd673a68204d99"],["/2015/09/newblog-newlife-2015/index.html","d06f89821fe7e454b4bce923e11399e9"],["/2015/09/router-rebuild-2015/index.html","5d5dc9ca3db14e56e4fd2d4696eb283c"],["/2015/12/2015-12-21/index.html","49ca3c4ce6f6aa667473b8234dfd7312"],["/2015/12/PixInTouch/index.html","fa18ed87f48d49e690eae9a77d6baef4"],["/2015/12/git-study-1/index.html","1d8c5a4bc38c53325c49b8e756162f48"],["/2015/12/hexo-backup-and-migrate/index.html","9b011fc225143d4639004f4c2d9708ca"],["/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","fef2241840fa61fecedac384b9315395"],["/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","d1cb77862b487e17d2083653321ac442"],["/2015/12/router-reconfig-2015/index.html","39160022f567bec12f5d3dddd2053a61"],["/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","883178423dc9b93de609a55f169cc2eb"],["/2016/01/2016-stepping-further/index.html","95f570e3ecee4547ab15dd7e75592cf9"],["/2016/01/Android-Study-1-22/index.html","cb82c1508185b1d0344c223418e0cc31"],["/2016/03/2016-03-20/index.html","ec50662284e95d0a6952b7c85000d41c"],["/2016/03/GSC-535/index.html","7cdd8d5037fdada113cb5bae5e244caa"],["/2016/03/gulpjs-1/index.html","ba568a39257a7b164465e71356e110eb"],["/2016/03/hexo-theme-paper-white/index.html","a783d616321417ba73c6b2717520d385"],["/2016/04/2016-04-19/index.html","ac222fc5e335b673cdc4a847085c9881"],["/2016/06/2016-06-16/index.html","aa80d887911ac2be80cadd5d762b933d"],["/2016/09/2016-09-18/index.html","54a662b57e1c422d3b70666007e4ce97"],["/2016/10/2016-10-27/index.html","09da7198e3acd37f15d6b3288c04ed2a"],["/2016/12/config-switchresx-and-2khidpi/index.html","ad4b1a1cd2e0643fa77e32c56d59cc66"],["/2016/12/improve-duoshuo/index.html","406986e798b938d8c77f0e64b3caa6dd"],["/2016/12/use-travis-ci-your-blog/index.html","5e0d457c45cfb9cf7d09f70f5dc7fe02"],["/2017/01/2017-iyahoi/index.html","9584a7fc5090e451b79ad9b33e2f948c"],["/2017/01/webpack-amd/index.html","0f9602e10a95966792bf92ac82df69b7"],["/2017/04/kotobukiya-syaoran/index.html","5dcab0d5c9b5ae388527f402ba7b865c"],["/2017/04/macbook-and-surface/index.html","8f834d44d19680e23e925b9468d0995f"],["/2017/04/uc-hyakuya-yuichiro/index.html","b6f423417747da397c9cc200cf457783"],["/2017/06/noragami-seichijunrei/index.html","e01f7d0c62f1ab790a5dba8c64e6ce94"],["/2017/08/cross-compile-55-libev/index.html","325c1ee46c4512bf6618212983597235"],["/2017/08/explore-service-worker-working-lifetime/index.html","d79aca14816b08063eef0cc1dda87f54"],["/2017/08/kiminonawa-tokyo-seichijunrei/index.html","0195551517b211c6c0b4024bbf3e9c6c"],["/2017/09/record-user-login-status-methods/index.html","72fb9df22701873769a90a7b868a06be"],["/2017/10/vue-typescript-early/index.html","a4a6d3490ea6739845c932d1e134ba5c"],["/2018/04/2017-end/index.html","bf062f6f7449515cc468f85d2af1ff57"],["/2018/04/twitter-account-activity-api/index.html","12d528f57bb6b8b7d9d7e7d5ce1ce2b8"],["/2018/05/buddy-complex-seichijunrei/index.html","5e792f03ca7071896903a3e34656f66f"],["/2019/05/2019-05-16-record-jp-digital-TV-on-nas/index.html","b6250fbf73e76051ca61f67275ddb908"],["/2019/05/2019-05-17-google-io-tech/index.html","88b8869c1b5af98b4358ba1bb8f7fb6c"],["/404.html","a019ff35eafc5d445b85298890e2c0d2"],["/about/index.html","795a663070b3407340ba6b0c9fec22e3"],["/archives/2015/03/index.html","4ffc96778c30782af8be81c5329d48c5"],["/archives/2015/04/index.html","b43962fb4851837d90ff8e308904bc26"],["/archives/2015/05/index.html","5538c1d0eac113cf6a167a3146679df3"],["/archives/2015/09/index.html","599636c7d25db3e54df8b9b431c6aa1d"],["/archives/2015/12/index.html","742db2887a605500f535da2a30cec0a8"],["/archives/2015/index.html","6ef595c6fa299e3596c767971f7beb64"],["/archives/2015/page/2/index.html","9ff3968542d1c7881b3ebddd368b5e2e"],["/archives/2015/page/3/index.html","3d4e09d2b6422cc0b1222f9271da8241"],["/archives/2016/01/index.html","620dcc9e273f8d63c2691493d53e86a8"],["/archives/2016/03/index.html","1546bf8ca69fae6194ed8d161fb429d6"],["/archives/2016/04/index.html","94962a2acb480d6fd7209b5f8f69b979"],["/archives/2016/06/index.html","0b19b2f77e9b37e22e007fe323f491d6"],["/archives/2016/09/index.html","ccce83bc8b97f4f00d22617f6be131ab"],["/archives/2016/10/index.html","c7a80767be261703c2a4aec7edb3bc7b"],["/archives/2016/12/index.html","292d76f950b97b3228f8f72ffd58ef6e"],["/archives/2016/index.html","02cd6ac8aba6541811d6124efd06d48b"],["/archives/2016/page/2/index.html","0855d5b66309c9a1bfa173d5c3f97404"],["/archives/2017/01/index.html","f9deb3c431c6f3850910665db340da36"],["/archives/2017/04/index.html","cf5d497fdacdf890b2e18e7522dc6290"],["/archives/2017/06/index.html","84cf714907e3625e88ad26234ea55a76"],["/archives/2017/08/index.html","fb2d79843990462db5c910a58957f4ce"],["/archives/2017/09/index.html","6d50e17d8728776355b7553e59f185b2"],["/archives/2017/10/index.html","e4fd48fca177f2fe307c0d0bec0a6f96"],["/archives/2017/index.html","05103838a74dad27befdd347ff9d7908"],["/archives/2017/page/2/index.html","ef90d27037a45837216b483073119c22"],["/archives/2018/04/index.html","aec3f354fbc561e2b473149f5370eeb4"],["/archives/2018/05/index.html","91c2bce2324955cb47087d219cc08e3b"],["/archives/2018/index.html","c17684f5a6e635dafc5ce0c598cf056a"],["/archives/2019/05/index.html","57e458c18cc59908b20e2f56dee25ef7"],["/archives/2019/index.html","11d986c1adce0db9794f3860467b85fd"],["/archives/index.html","09acf17471259e1d106f798b404db139"],["/archives/page/2/index.html","23bb541b84b59b122ca47cec35b8a9d8"],["/archives/page/3/index.html","c3aeecdde85b89fd379896e9210eacc0"],["/archives/page/4/index.html","1524dbbd80976795c7a67ece292fdcd7"],["/archives/page/5/index.html","eea704c495fde90b23e587a49766ed71"],["/archives/page/6/index.html","fa3b7781cd2dcbf40178be1e07afd631"],["/assets/images/about-me.png","a066d06c3d9d1fe56c4d921cec7febf3"],["/baidu_verify_YbTSlpWIUJ.html","779049c3a50695ceb3a388ce1e8bc1b9"],["/categories/ACG/Music/index.html","c429e88fd9df1c9a20e7096d73365c1e"],["/categories/ACG/Music/self-copy/index.html","edc7e4bdb2d5cd437a6ee9a72e34054f"],["/categories/ACG/Travel/index.html","6b0673783f112ee35bffc54d138f7b58"],["/categories/ACG/figures/index.html","127c7c109de074f1130cf33212646220"],["/categories/ACG/index.html","c606dca029fa8ea093799b7b719c0750"],["/categories/dev/Front-End-Dev/index.html","fa9af8b6b8e9b2c2d3db86dea4339840"],["/categories/dev/HTML-CSS/index.html","599ed293aec63370acf21fa70782a46f"],["/categories/dev/android/index.html","f06e8032f60a1f3f106ea91a72bc30f1"],["/categories/dev/cpp/index.html","333a3d6f443d704f82077a325f1080b4"],["/categories/dev/git/index.html","22dfbd1ec67ac03a8b33475af17739e3"],["/categories/dev/index.html","87931216e40b57cc8bdf5baf2eccf76b"],["/categories/dev/java/index.html","ad0fb7f5ebc9751ca355dab431668da9"],["/categories/dev/page/2/index.html","ee0fbcbe86e3c89db33a03bd1355d1c2"],["/categories/maintaince/blog-setup/index.html","aa278f33894a4be419a573663fd15370"],["/categories/maintaince/index.html","19bffe5588c7391622e382b7fcb95af9"],["/categories/maintaince/macbook/index.html","9a2f2c3f7b945b8e42d23cc6049a8571"],["/categories/maintaince/router-config/index.html","4481e1c917c054d8668032df7ccc77f5"],["/categories/notes/index.html","df87f9edfab713ea1211cd180dadf4d2"],["/categories/tricks/android/index.html","5dcf0656a0d0fd2220f0ab049ef71d5c"],["/categories/tricks/index.html","cc71ce42ef532c8edebdb779a7258348"],["/categories/uncategorized/index.html","313d5b8b5d6692ae38f678f44519c26e"],["/categories/works/Front-End-Dev/index.html","d9f862f371ae155cd30e80b04c63fbe8"],["/categories/works/csharp-wpf/index.html","242e18cc6751a8d62c64ae7558a8e1ec"],["/categories/works/index.html","3163d96a199421831ec91b43dd289dc2"],["/css/seichi.css","c60ad00990790aacbe0a9ff08766c515"],["/css/style.css","e3abc56736917946e8536ef38cc2c5cd"],["/google311213f0c8d812a9.html","51f1ee3c2f13a21a1a40b3dae4954454"],["/img/coderwall.png","1976fe70f1ee8ed243e0975402e06a2d"],["/img/delicious.png","952d9b54d8bcfe7b998f67ff48c4dbce"],["/img/douban.png","d42a163f932100e621d22732db34ecdb"],["/img/facebook.png","4bd685f6c9fdaccabf07bdd52173facb"],["/img/github.png","3c4b6267a1a3fedebdc7d089610ecfe7"],["/img/google.png","c385f5304465716b2d6c9ada94c657ab"],["/img/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["/img/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["/img/linkedin.png","4c72c4896f3c23f736cb1ad08f0c866e"],["/img/mail.png","38a7b8302dac028bf03b22d228938abf"],["/img/pinboard.png","9b6186cb97adbe50311f94e50f2392cf"],["/img/pinterest.png","e1b8e655d1b99b40ebcbd96977ae234e"],["/img/rss.png","ec8cf9b5a98011aa75cc0a4f25024dc9"],["/img/scrollbar_arrow.png","be5381cedbd6b778b1d92e224fd71cf7"],["/img/stackoverflow.png","039128ececb47b33bccedd98dc9fc809"],["/img/twitter.png","d2289a4936fefa41d9f92cf89939be5b"],["/img/weibo.png","b382032b316ee38c6d537fe9d36ae54c"],["/img/zhihu.png","e6352c0e1957beef3009268ae747c3aa"],["/index.html","4eab3d22f55aba18212018031533a2c0"],["/ja/2015/03/WNDR4300-setup-log/index.html","aa7c52c047b11fa820362c7335c74652"],["/ja/2015/03/android-hostname-change/index.html","47d2ef1e75fe3bfb5029b5a304739575"],["/ja/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","291e98c804d86fbe81f0fa9aacd89d7b"],["/ja/2015/04/android-chrome-issues-with-webpage/index.html","c5edb2465e4677e5e6e0476b1bda02e0"],["/ja/2015/04/cpp-study-log/index.html","7e2419c0feb67096d7b24db92b570407"],["/ja/2015/04/github-pages-ssl/index.html","b1dd4f648ff5d4dccd0450a7f75072f1"],["/ja/2015/04/hello-world/index.html","3b0133857ff701d06dd216e2373ee69c"],["/ja/2015/04/hexo-setup-log/index.html","8a307dcfe1ea1a2bbfbfac6ebd0a269e"],["/ja/2015/04/self-copy-cd-inazuma-1-html/index.html","b800b968f514291d89c072fc008aa24d"],["/ja/2015/05/cpp-inherit/index.html","cd1709bdacf4bb9158384327e974023d"],["/ja/2015/05/cpp-polymorphism/index.html","668c3b390b8cd1f658c19901a84b65cf"],["/ja/2015/09/android-root-ota/index.html","7692629b7b6bcd6bcfefc267732bcd99"],["/ja/2015/09/java-learningNotes-1/index.html","c3afeba7e162d3e62bd3a42fb9193370"],["/ja/2015/09/newblog-newlife-2015/index.html","5bd42562503b5011b64b708e471cab86"],["/ja/2015/09/router-rebuild-2015/index.html","7c5cf998c78d196b8126c315fdf5e66d"],["/ja/2015/12/2015-12-21/index.html","3aa57d542ee4a3f8c34848925e256af4"],["/ja/2015/12/PixInTouch/index.html","583d08d408ed1c675e2e90b8cdba431a"],["/ja/2015/12/git-study-1/index.html","5b9abd6f0385c55606842f044e610c39"],["/ja/2015/12/hexo-backup-and-migrate/index.html","e417082ea8d7bcdfe93c413bd797199c"],["/ja/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","68c23b757f93eb241528eb56955644a4"],["/ja/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","31c9130361c3ca3ef646f943ddd58448"],["/ja/2015/12/router-reconfig-2015/index.html","2fd1a85e5810c1f6dea96cd444ececfe"],["/ja/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","53aaa9e2a9bf23188c60192ee39b1da0"],["/ja/2016/01/2016-stepping-further/index.html","85bac78be02f39f1875baebb4daea921"],["/ja/2016/01/Android-Study-1-22/index.html","f6b86e441db0fcec6a06fd698627e22a"],["/ja/2016/03/2016-03-20/index.html","4b041167240315c3a16b3a0970530ce5"],["/ja/2016/03/GSC-535/index.html","d9f1534423572419fa78a018d11e4bb4"],["/ja/2016/03/gulpjs-1/index.html","e2340dfae249fdbf79dc462173d6c505"],["/ja/2016/03/hexo-theme-paper-white/index.html","46e3d6faca33fcc193da5f968e78fe0c"],["/ja/2016/04/2016-04-19/index.html","b89ec7a46a75ad2c9e749bcf7219f659"],["/ja/2016/06/2016-06-16/index.html","e3eb4a8167c6d73719b16d98b1c07450"],["/ja/2016/09/2016-09-18/index.html","0bac84b2914f0328fb48251d93a4125b"],["/ja/2016/10/2016-10-27/index.html","9aa3765e4a4c1c817b2369c611dd45fe"],["/ja/2016/12/config-switchresx-and-2khidpi/index.html","75e29868f2a1c28ea2a3a50ec61ec8b8"],["/ja/2016/12/improve-duoshuo/index.html","19d2d6237faebf2fccdaf9781c4b6839"],["/ja/2016/12/use-travis-ci-your-blog/index.html","9969939ad7844d984ac505794a5fce84"],["/ja/2017/01/2017-iyahoi/index.html","723f71da548499fbe9768adcfb0bd548"],["/ja/2017/01/webpack-amd/index.html","6075ead57f4d564f2a51e2391e8839dc"],["/ja/2017/04/kotobukiya-syaoran/index.html","2a679d354139061ffba4919397ec2bf1"],["/ja/2017/04/macbook-and-surface/index.html","79546be66d905af803887d344efca91e"],["/ja/2017/04/uc-hyakuya-yuichiro/index.html","a4ec7d5052a67d8ea010930d1d1c3d93"],["/ja/2017/06/noragami-seichijunrei/index.html","ad2e51df15e4fb413e692c95c545044d"],["/ja/2017/08/cross-compile-55-libev/index.html","622133fc7f6dbd793286dc14e5037df0"],["/ja/2017/08/explore-service-worker-working-lifetime/index.html","727cf5673fc390755ff97456aa604682"],["/ja/2017/08/hello-jp-world/index.html","8393c7e1ad1c2784ef1810138b414189"],["/ja/2017/08/kiminonawa-tokyo-seichijunrei/index.html","2badb1d3456220dc7a88e416f304c46d"],["/ja/2017/09/record-user-login-status-methods/index.html","1bf1b079a9ca989fcea7f990528f291d"],["/ja/2017/10/vue-typescript-early/index.html","1bb16a803755a5c21930b8aa253b1d1d"],["/ja/2018/04/2017-end/index.html","fcf97dd6792b32490d496898ac54c902"],["/ja/2018/04/twitter-account-activity-api/index.html","69e4d9d33a40030caf6628f2f085a04c"],["/ja/2018/05/buddy-complex-seichijunrei/index.html","ddc313a094142a2ea01c8927d340c4e2"],["/ja/2019/05/2019-05-16-record-jp-digital-TV-on-nas/index.html","7158f08491966b401adb8014cbad4da5"],["/ja/2019/05/2019-05-17-google-io-tech/index.html","d7d154467238a9e1634adf26555362f3"],["/ja/404.html","5e37bfb9e1e33ad043aac4d1964aea9d"],["/ja/about/index.html","00b5545c59ff88b010998493d3b2600d"],["/ja/archives/2017/08/index.html","d96c8fe7201022cb9088c99a4b939694"],["/ja/archives/2017/09/index.html","6f9b12a5aa3964ddf4e2bdc9fcae9050"],["/ja/archives/2017/10/index.html","a9dec184f30f35f7180e0ab202288053"],["/ja/archives/2017/index.html","0ed96e63de6af730d187061eb3c57286"],["/ja/archives/2018/04/index.html","953816c4f9ac5028b7c8617d92f73ff5"],["/ja/archives/2018/05/index.html","32119f52177f7e31ce2c35cdf38b76c3"],["/ja/archives/2018/index.html","bed6144ad8891142d4d626b71da98363"],["/ja/archives/2019/05/index.html","3a94c7d62a36ea113e6241c61815abc3"],["/ja/archives/2019/index.html","cb57edccd3d4bfeb4e13899f035f537c"],["/ja/archives/index.html","b75ae86a5b447e6f3d5cc652233e875a"],["/ja/categories/ACG/Travel/index.html","a2ef79a3a6cfe7a45098827aee448424"],["/ja/categories/ACG/index.html","80e9530b6728eb3cadd88fa52cac40dd"],["/ja/categories/dev/Front-End-Dev/index.html","271eb774c327ac297b8629a2f0e7f6be"],["/ja/categories/dev/index.html","73641578a8a3490d2a8bca412d047667"],["/ja/categories/uncategorized/index.html","7f24f0dcfbc0fe18a6f8bebf1e9fa88d"],["/ja/index.html","3e404f9dc087f93577a0c18033073bc6"],["/ja/nihongo-test-page/index.html","cd5f48ff1f8e8354bf334c72c6f9d1fa"],["/ja/resume/en/index.html","f5e7e141e246d9ba5299a11b191fdf8d"],["/ja/resume/index.html","aaa314d9de209781a25ae1dad26e58d2"],["/ja/resume/ja/index.html","c9a3b54200f4101f70d3097b9841391a"],["/js/instagram.js","7d7a9e2e7286ba2d5b6d12068214f0c3"],["/js/jquery.lazyload.js","28c23bc40080d31144776e9a8736837f"],["/js/main.js","2e92f29b0cd90bddc062915eb46a858c"],["/js/mobile.js","20029df2609ddd5d2b2d346edbb297c0"],["/js/nextpageajax.js","c3bde8d7bb1f967fb319f57a187ea51a"],["/js/pc.js","631b535186aab0e262485ee2bf9da628"],["/js/ripple-effects.js","b9c11903da0ef5c3d790b41369c3137e"],["/js/share.js","de52ac3d43e43c1951a08b0804458a8e"],["/js/totop.js","661822968b58fd439f46bd54031238d6"],["/keep_origin/affiliate_jump.html","71bf6d72c5d080ec2b3f8ecfae3d71ed"],["/nihongo-test-page/index.html","4636bbc45a66c84507f933ca63dcd0a5"],["/page/2/index.html","9c831fe9c17e9caa89d04a5850ba6f21"],["/page/3/index.html","63539bd78d6325feb86528f0c52fdbfe"],["/page/4/index.html","72126f2477d80b1484fc453e64942e60"],["/page/5/index.html","6114d8df2be640e0a199471c935a6fb5"],["/page/6/index.html","cedbd090280125125f9fd4791ad6b2e3"],["/photoswipe/default-skin/default-skin.css","426e8908d7426603ca203b6d16281b1e"],["/photoswipe/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photoswipe/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photoswipe/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photoswipe/photoswipe-ui-default.js","0c9196aa8943ce8a8045c9f4cc62915c"],["/photoswipe/photoswipe-ui-default.min.js","9517baca43cd4e9cb23ff337fbc1baa1"],["/photoswipe/photoswipe.css","7dc0df107159e1be66d4464171561e5b"],["/photoswipe/photoswipe.js","a8d26ff34943c859884acbd6b2531315"],["/photoswipe/photoswipe.min.js","f5cd6479c4e4682545a9603e6b50c741"],["/resume/en/index.html","510cbf71e3e90ef8f6493048c964d065"],["/resume/index.html","6530d8864b76d284e870303463df4e5c"],["/resume/ja/index.html","680f32b984a0c2c56090cc38317b5b83"],["/setup-log/blog-setup/github-pages-ssl.html","d5e315a4f7725d0c5a828ab2ac48dfe3"],["/sw-register.js","4f47b037e07de7beef16f6ad96808973"],["/zh-cn/archives/2015/03/index.html","cc3c1f7b401c73d333ac319ddd3d4d87"],["/zh-cn/archives/2015/04/index.html","0c79a739e05742ca7f9f70d696cd0f54"],["/zh-cn/archives/2015/05/index.html","dad80bc1719c8ee4f173d345665bdad6"],["/zh-cn/archives/2015/09/index.html","c0002c43dc2192f3c2f1ec1f46f88243"],["/zh-cn/archives/2015/12/index.html","07e1a37d53421a49d0a05010588da841"],["/zh-cn/archives/2015/index.html","aca7cf1c49b1ab501b433c8653bbdf23"],["/zh-cn/archives/2015/page/2/index.html","64fb40dabf9e190af26a764c5fcc2e58"],["/zh-cn/archives/2015/page/3/index.html","53abbf7ed813e6edb4aa1f30f0e538cc"],["/zh-cn/archives/2016/01/index.html","976a759957e68533b14f93c8b5243c5b"],["/zh-cn/archives/2016/03/index.html","82677dc898f3d34479826c994756fda0"],["/zh-cn/archives/2016/04/index.html","86d7c65689cddc6c3215eb7bb850799f"],["/zh-cn/archives/2016/06/index.html","1adb3e9da67cb9762d6f8ccb80340a68"],["/zh-cn/archives/2016/09/index.html","dc00ee3f4d9980b408631697751f1f86"],["/zh-cn/archives/2016/10/index.html","e433b4bf424068ab9cb8f76ee12f910d"],["/zh-cn/archives/2016/12/index.html","641c0c3581ed3bfa1d1aae39a0cd17e6"],["/zh-cn/archives/2016/index.html","a1edb2eabe6fa8213ec041f14cfd03f6"],["/zh-cn/archives/2016/page/2/index.html","31ac91d87e295684941f5760f0f32545"],["/zh-cn/archives/2017/01/index.html","fefbac9956a6d06fe0af54c84a20cd83"],["/zh-cn/archives/2017/04/index.html","d533d8d5858b8d2ec0f4df8c9cfd8b99"],["/zh-cn/archives/2017/06/index.html","7cc588ec9f204e7d57aec0cf612b4b05"],["/zh-cn/archives/2017/08/index.html","5e11fa2e53cdd2460ff03ec1d5711ddf"],["/zh-cn/archives/2017/09/index.html","8be93c228c5f3ed94f83a5a9d331cc78"],["/zh-cn/archives/2017/10/index.html","2227d9926f7d611613036635ca496862"],["/zh-cn/archives/2017/index.html","8c44eed18762c60bb8bf600796363a1d"],["/zh-cn/archives/2017/page/2/index.html","31fd087d8b5332364b6025207ce2f4a6"],["/zh-cn/archives/2018/04/index.html","01d77c76384114bc41155c69bae71fb2"],["/zh-cn/archives/2018/05/index.html","51aef8b6656f41fa29ffe8f1fa08ecc2"],["/zh-cn/archives/2018/index.html","2b1013ab5c98145b4f64101207f58ce1"],["/zh-cn/archives/2019/05/index.html","38a64b12461aa8e92c065b62baa47971"],["/zh-cn/archives/2019/index.html","df301e969e79ef435e88bc4933392fb9"],["/zh-cn/archives/index.html","fd319d660bdde190d12e004317bbd122"],["/zh-cn/archives/page/2/index.html","ae8f2f1ec51b68dea4326b2ca3158354"],["/zh-cn/archives/page/3/index.html","7a84c56f552395105a4d9dd28561a78a"],["/zh-cn/archives/page/4/index.html","3abe90f42942f1c399cfab532aa780aa"],["/zh-cn/archives/page/5/index.html","c2b42e99c96061fad3616251cc7c779a"],["/zh-cn/archives/page/6/index.html","9efa5f93f80b0ce0326b489cc333ea4a"],["/zh-cn/categories/ACG/Music/index.html","5d3e2847df2711ead168a7319ea538cb"],["/zh-cn/categories/ACG/Music/self-copy/index.html","75aa511ec7f91ccff0b08db438cb2e78"],["/zh-cn/categories/ACG/Travel/index.html","0b9a507df9693733113d90340a1d19c5"],["/zh-cn/categories/ACG/figures/index.html","f437612181f5370568c538388d2b04ee"],["/zh-cn/categories/ACG/index.html","fda6775412c275c9f74c0b92b2a4fff5"],["/zh-cn/categories/dev/Front-End-Dev/index.html","f441c87711ffd8a610191f0a13669020"],["/zh-cn/categories/dev/HTML-CSS/index.html","531abde66f271ab93abb25978be3a3ca"],["/zh-cn/categories/dev/android/index.html","94983d2d3e33ae124c970cf36b1b48fb"],["/zh-cn/categories/dev/cpp/index.html","c7891e23349f5d79e573da242ad40b05"],["/zh-cn/categories/dev/git/index.html","40388f8654760b7fa52957c2e38e5540"],["/zh-cn/categories/dev/index.html","b7d7df294ea309cd398e13e153193137"],["/zh-cn/categories/dev/java/index.html","abc87d20c8ac6c726c46aee5bf455612"],["/zh-cn/categories/dev/page/2/index.html","61b7836bf6db020a1409226def5c1f00"],["/zh-cn/categories/maintaince/blog-setup/index.html","ae70d26d39289ded0708ef4a34a93827"],["/zh-cn/categories/maintaince/index.html","f475c6742e4ae75e0bba56d8b5d59a9b"],["/zh-cn/categories/maintaince/macbook/index.html","2e6eb83aa123194ece15705c2ed8b7f6"],["/zh-cn/categories/maintaince/router-config/index.html","44ace45d6ad0780948095f24b49df6f2"],["/zh-cn/categories/notes/index.html","0b082f97aa2eb21d1f7ad5b837b59d27"],["/zh-cn/categories/tricks/android/index.html","273df90f93d16fdd2a65d300f8618b4b"],["/zh-cn/categories/tricks/index.html","36f6088c7a13e3aed2bb64e3b255a5aa"],["/zh-cn/categories/uncategorized/index.html","60b0cfc0ff879d5ef708126dd25ce1ac"],["/zh-cn/categories/works/Front-End-Dev/index.html","ed58c9c99504043888d085dd7562d530"],["/zh-cn/categories/works/csharp-wpf/index.html","96788f7c051e6acc776dd73018dc7340"],["/zh-cn/categories/works/index.html","21340dc9caf65d088925bb4f8e61928b"],["/zh-cn/index.html","28480756e25f978e1ed4348acf0a3f05"],["/zh-cn/page/2/index.html","3155787428162b9188863b0c0f516af7"],["/zh-cn/page/3/index.html","731113463e69a6bd80bfceb76421e00e"],["/zh-cn/page/4/index.html","0da5d7d8972fb4e632e44492f8022ce0"],["/zh-cn/page/5/index.html","127372e00474bb3cf77be14e5178b06b"],["/zh-cn/page/6/index.html","44cd7c280c666b12b63affe01ecb45c4"]];
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
