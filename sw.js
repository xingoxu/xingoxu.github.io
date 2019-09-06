/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/03/WNDR4300-setup-log/index.html","9ff5b52425bde022d2ba359531de0b5c"],["/2015/03/android-hostname-change/index.html","8a77126eb057a5efce5e1b564b74c773"],["/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","97e02c27d011152489980a14f8344240"],["/2015/04/android-chrome-issues-with-webpage/index.html","77a00bf492a337a23e0fe1dba44d7aa4"],["/2015/04/cpp-study-log/index.html","4b2870dfdf5dc619a5fe89bfacc7374c"],["/2015/04/github-pages-ssl/index.html","b1dafd996e6b07d381ea698328b5c7bd"],["/2015/04/hello-world/index.html","c804272ef550bdd7099f47fa7b4a4f56"],["/2015/04/hexo-setup-log/index.html","5e6d493b76b9612b1e6eaaedc516540f"],["/2015/04/self-copy-cd-inazuma-1-html/index.html","dc6dff1fecf311f7ff1b2122a2d83e59"],["/2015/05/cpp-inherit/index.html","653b07565709180d6cb02a94ab0f0523"],["/2015/05/cpp-polymorphism/index.html","a0b56ba7f2656a128f10e372547dbe0f"],["/2015/09/android-root-ota/index.html","4c965695d0172d4480b5de496669df61"],["/2015/09/java-learningNotes-1/index.html","74dba35f4ab0b9e31176ccee78175a0b"],["/2015/09/newblog-newlife-2015/index.html","327fad90b1410125b14e2723c671be78"],["/2015/09/router-rebuild-2015/index.html","6180063a371d099c42fe3e7dd7e4ff05"],["/2015/12/2015-12-21/index.html","a172db0a5535d56aebc42f3bf0a79629"],["/2015/12/PixInTouch/index.html","8c1c100a35279b77e1b23bbae17d2791"],["/2015/12/git-study-1/index.html","73ded380babf1842a6560be8d8ec8915"],["/2015/12/hexo-backup-and-migrate/index.html","77b962c1f3162335b78b0f3058d3c637"],["/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","2930b64e9be4e7b6335a61d4a9be52f4"],["/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","3d8f1083f5e3c453276a47a72ada2021"],["/2015/12/router-reconfig-2015/index.html","d972c397517d6ef25fb000996339b5ec"],["/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","d288111e4b654cd5959ae9daa237c656"],["/2016/01/2016-stepping-further/index.html","a8eaefd373b289cb17ba7ee716e94f64"],["/2016/01/Android-Study-1-22/index.html","8c64aa348628edf866f37d4800ebf69a"],["/2016/03/2016-03-20/index.html","0ccbae785e57080e3b176a6a4598b450"],["/2016/03/GSC-535/index.html","52ef263cc6bab7c18180c477179cba6b"],["/2016/03/gulpjs-1/index.html","823976461958dd6b2b7242698b34c220"],["/2016/03/hexo-theme-paper-white/index.html","0df27eadd65c7815a6d5c4cf6e610736"],["/2016/04/2016-04-19/index.html","28810607d45f7e74677d7212e8e1957f"],["/2016/06/2016-06-16/index.html","1b572968f54ceeb8b0b3be87c8f9addf"],["/2016/09/2016-09-18/index.html","b9854e4afdc780a66f64ede89552e1e7"],["/2016/10/2016-10-27/index.html","d94a8a7e1152fa6be7b78f631d9503c2"],["/2016/12/config-switchresx-and-2khidpi/index.html","04973d135f550c71d8081a30ecb81a22"],["/2016/12/improve-duoshuo/index.html","251443b200eca350033c3a3ee63379f3"],["/2016/12/use-travis-ci-your-blog/index.html","ca88ea4526e4beb44b017d2b596ecb26"],["/2017/01/2017-iyahoi/index.html","ad4e520c41d17e9b5b2fc77dcce6066f"],["/2017/01/webpack-amd/index.html","7707a23c47df895755640024e18a49aa"],["/2017/04/kotobukiya-syaoran/index.html","f544745328d4bc282d52125bfa0058d2"],["/2017/04/macbook-and-surface/index.html","1f03abf961c135956cfec96337ae7e35"],["/2017/04/uc-hyakuya-yuichiro/index.html","f25472052c3d6a0f0341e65f33bd69ee"],["/2017/06/noragami-seichijunrei/index.html","f18dbca8e10b806c4ed19ede2ebebace"],["/2017/08/cross-compile-55-libev/index.html","299abe75aecd0aa8ccb45e3a14d55908"],["/2017/08/explore-service-worker-working-lifetime/index.html","d4760c8b8de295cfd2b605ffe80fbd73"],["/2017/08/kiminonawa-tokyo-seichijunrei/index.html","62f381a1d67337daeba7c210eeac07a4"],["/2017/09/record-user-login-status-methods/index.html","a9c3f597b56ee109cd7d8f01a750d4ae"],["/2017/10/vue-typescript-early/index.html","74114ec7cff7879b20ea51a43f053a26"],["/2018/04/2017-end/index.html","fa392461fcb06e5b9615345e0f7992fb"],["/2018/04/twitter-account-activity-api/index.html","ce21dd5ef2db071bed2cd507149fc851"],["/2018/05/buddy-complex-seichijunrei/index.html","2e5cbe17d99dc057b33e7619b1d6c264"],["/2019/05/2019-05-16-record-jp-digital-TV-on-nas/index.html","107931004de6d200421277004d9de1b5"],["/2019/05/2019-05-17-google-io-tech/index.html","00b2977eccae54295cf8ed3f04cd78b3"],["/404.html","633cf44ad8eaab203f1d06072b771147"],["/about/index.html","075bfe8c8351c09638bfea6f18680d5c"],["/archives/2015/03/index.html","a5664221bb68a6c7e14432ce8d103275"],["/archives/2015/04/index.html","411bf251708a1ddecae1a56ace902368"],["/archives/2015/05/index.html","8aa776bd3ccc2df64c087db9e46b53d8"],["/archives/2015/09/index.html","94aa71611a6cf5a91c06da72e22be2b1"],["/archives/2015/12/index.html","12593a36ee73034bf616225b3efe070c"],["/archives/2015/index.html","afdb3ef7241e9a8311011ee147f7c171"],["/archives/2015/page/2/index.html","9d4f6c893664605f3ca7c4b2f743b7df"],["/archives/2015/page/3/index.html","29b1daf48bfd6327b477672a2194998c"],["/archives/2016/01/index.html","bde47cabdd0f7c6f9ea22b39d87c5747"],["/archives/2016/03/index.html","6a084b8b0d91b6098f88712d2af7c54d"],["/archives/2016/04/index.html","9f4e05606c672a6a20f9c192c87c6d89"],["/archives/2016/06/index.html","c311f8f2eaad2ed9c39cc5e94dc5439a"],["/archives/2016/09/index.html","cf3d53b4454befff8b60be2d00ed39e9"],["/archives/2016/10/index.html","7e9893c7fe4a80bc885ea3f1992473e7"],["/archives/2016/12/index.html","3bd3253f4955ba6cfd4526472995dd4f"],["/archives/2016/index.html","3a27680c16e669a208e8661839cf15c2"],["/archives/2016/page/2/index.html","b9fe36f4126e6cb26c64b222a679efcd"],["/archives/2017/01/index.html","a74ba70c055e370bbb063669088f25f2"],["/archives/2017/04/index.html","983c60b5912643e9c7e4738ad0d6e7c3"],["/archives/2017/06/index.html","de365d9737aa132c34e7bc1931832303"],["/archives/2017/08/index.html","60c0f378b0390aabbf6be82411a7c575"],["/archives/2017/09/index.html","eb1926ad70f8383eafe1dcdb8c977f8e"],["/archives/2017/10/index.html","ff1937897fc5f420482c489b24bd2f12"],["/archives/2017/index.html","5c026e4419d0bad2708c17150c4d10d6"],["/archives/2017/page/2/index.html","39befd66938ec8e189bc75fcc6665f4b"],["/archives/2018/04/index.html","93a80fb201081948b57c78fc3679b37b"],["/archives/2018/05/index.html","2598a623340a1f7fa0242ac8ce98ccbe"],["/archives/2018/index.html","45873035d4c742fed9f692faa93d92f3"],["/archives/2019/05/index.html","0224ede0b6c0dbac63817febbaace252"],["/archives/2019/index.html","93ac865dd028de320a6c5e4c621bbcbe"],["/archives/index.html","b2032e34cabf38088251896c86d688e6"],["/archives/page/2/index.html","0657ae38453e48a704766556004363d8"],["/archives/page/3/index.html","6c6dfe8b7bc4b9ea38561fa4673652b9"],["/archives/page/4/index.html","c8b48ce2e06eb42b868fd5e807d10344"],["/archives/page/5/index.html","b663f36e436e066d97fbec2a162d8883"],["/archives/page/6/index.html","3791a538f88b2745ff1eeaef716de36b"],["/assets/images/about-me.png","a066d06c3d9d1fe56c4d921cec7febf3"],["/baidu_verify_YbTSlpWIUJ.html","779049c3a50695ceb3a388ce1e8bc1b9"],["/categories/ACG/Music/index.html","f22c08e131e7c200e3864c2844e810c1"],["/categories/ACG/Music/self-copy/index.html","d52b6ad6f178c864a0a48c847e1d0a2d"],["/categories/ACG/Travel/index.html","a1a9cd177d9dbebe173e246e7fa53415"],["/categories/ACG/figures/index.html","8b38af9f931084240afd7fcb1ad85465"],["/categories/ACG/index.html","1c510b1c656b94dc8682bb72c3d0cb8c"],["/categories/dev/Front-End-Dev/index.html","3347bc6ab72a0435f2109c7997bca24a"],["/categories/dev/HTML-CSS/index.html","342541700930f8e0c51bbc00e491c6ec"],["/categories/dev/android/index.html","c9552cc394a9fd1c67ed210a472fd717"],["/categories/dev/cpp/index.html","249c5a4f3ba9769ce4a99cf5a704edd6"],["/categories/dev/git/index.html","21119ec4fcb9b13968b1682af3896382"],["/categories/dev/index.html","138c283d622c02165b300635913460ce"],["/categories/dev/java/index.html","1df49421f800f447413d2e0c09d05da3"],["/categories/dev/page/2/index.html","1c0e31b28fb6b42c20963be3ce57a3c7"],["/categories/maintaince/blog-setup/index.html","28a8b05513a19dbfb0d83699099cccdd"],["/categories/maintaince/index.html","0fd8c146e8768fa5ce47b519e6529d4a"],["/categories/maintaince/macbook/index.html","e7a8453dbc894eac5aee677be75ff25f"],["/categories/maintaince/router-config/index.html","52c1a8ef651ba35aa233e0aa5d63cfd0"],["/categories/notes/index.html","5200344e20e1408a658b6ccbe0aab3bf"],["/categories/tricks/android/index.html","c3f1ac8e589e7fdcfb3d84020ca66364"],["/categories/tricks/index.html","f7a7acd346fda5e10dcb80b48704b37b"],["/categories/uncategorized/index.html","2abe7f595a6df6945f31996f89f22ccb"],["/categories/works/Front-End-Dev/index.html","4b02f71d77b0624633fae800efb6d2fc"],["/categories/works/csharp-wpf/index.html","69e3ff7e7447e8b2226cee508e204e8c"],["/categories/works/index.html","d4152ec9128fa16f0cba976944a26577"],["/css/seichi.css","42693f35c4c482207368dd363ea27373"],["/css/style.css","1220ea645f73adefdf529a2abd3ada59"],["/google311213f0c8d812a9.html","51f1ee3c2f13a21a1a40b3dae4954454"],["/img/coderwall.png","1976fe70f1ee8ed243e0975402e06a2d"],["/img/delicious.png","952d9b54d8bcfe7b998f67ff48c4dbce"],["/img/douban.png","d42a163f932100e621d22732db34ecdb"],["/img/facebook.png","4bd685f6c9fdaccabf07bdd52173facb"],["/img/github.png","3c4b6267a1a3fedebdc7d089610ecfe7"],["/img/google.png","c385f5304465716b2d6c9ada94c657ab"],["/img/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["/img/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["/img/linkedin.png","4c72c4896f3c23f736cb1ad08f0c866e"],["/img/mail.png","38a7b8302dac028bf03b22d228938abf"],["/img/pinboard.png","9b6186cb97adbe50311f94e50f2392cf"],["/img/pinterest.png","e1b8e655d1b99b40ebcbd96977ae234e"],["/img/rss.png","ec8cf9b5a98011aa75cc0a4f25024dc9"],["/img/scrollbar_arrow.png","be5381cedbd6b778b1d92e224fd71cf7"],["/img/stackoverflow.png","039128ececb47b33bccedd98dc9fc809"],["/img/twitter.png","d2289a4936fefa41d9f92cf89939be5b"],["/img/weibo.png","b382032b316ee38c6d537fe9d36ae54c"],["/img/zhihu.png","e6352c0e1957beef3009268ae747c3aa"],["/index.html","611e93ba7d7de22a26b9ec5163c09c84"],["/ja/2015/03/WNDR4300-setup-log/index.html","e5d05f50627ea65727b9a42fe944ed09"],["/ja/2015/03/android-hostname-change/index.html","7f4aa006226454b0f7b2ef8d6e782727"],["/ja/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","17ea416e7075915d138c256d4168350e"],["/ja/2015/04/android-chrome-issues-with-webpage/index.html","aed89464354d66bce1cee4e977b1f044"],["/ja/2015/04/cpp-study-log/index.html","3f216bca43c01263666ecae9256cf7f0"],["/ja/2015/04/github-pages-ssl/index.html","ff770fee756aeab8d3f0e77b4c94e060"],["/ja/2015/04/hello-world/index.html","b2e5e07c60ed25a7b5b71bac239ccd6e"],["/ja/2015/04/hexo-setup-log/index.html","dbe27318ab615c15b94b1645670f9386"],["/ja/2015/04/self-copy-cd-inazuma-1-html/index.html","0f859da33d0b6f4d8fc9c5bad51a8346"],["/ja/2015/05/cpp-inherit/index.html","601a1af3628b6726de70fa194e3cc229"],["/ja/2015/05/cpp-polymorphism/index.html","abda5a6b591a44e880534b559a39c4b7"],["/ja/2015/09/android-root-ota/index.html","f6f2951c817cff5e492d163d7f2cc5f6"],["/ja/2015/09/java-learningNotes-1/index.html","385653c69c5ce12cc30bcfb2db221617"],["/ja/2015/09/newblog-newlife-2015/index.html","e6caae4e473d2a137545314372968b0c"],["/ja/2015/09/router-rebuild-2015/index.html","92e00ad91d4a328c8823d45eb8ad49e0"],["/ja/2015/12/2015-12-21/index.html","8422eb4350b03a1ef287f5784ef1ccd6"],["/ja/2015/12/PixInTouch/index.html","162da659420439dc6c70503a26b13650"],["/ja/2015/12/git-study-1/index.html","453d32fce0a3809b1e5057ce24ce21f9"],["/ja/2015/12/hexo-backup-and-migrate/index.html","fb213beb405210726edbafacffed99f4"],["/ja/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","9a0beddd4cf3b7963fe3d6f51807bb58"],["/ja/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","eb2dfdc2a1532ba890912e5ab36e441f"],["/ja/2015/12/router-reconfig-2015/index.html","b7dbecca755b261ab0e70319813c4fde"],["/ja/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","8f829fcfec3f5d0d9276805ebedbdd18"],["/ja/2016/01/2016-stepping-further/index.html","8e95507ea3efe45f0674882b40935654"],["/ja/2016/01/Android-Study-1-22/index.html","5d0eba4677e6de4981669116d5bfcec1"],["/ja/2016/03/2016-03-20/index.html","0bd4ed0e58590c6e4ca75d6d8465709d"],["/ja/2016/03/GSC-535/index.html","e20c2c30a28527b4b8bb2ff600e58956"],["/ja/2016/03/gulpjs-1/index.html","53d96ad9aa667d4a5fbdffa38d084c79"],["/ja/2016/03/hexo-theme-paper-white/index.html","48ad9ab5c1654a51d1028c889c0e984b"],["/ja/2016/04/2016-04-19/index.html","62ee5d23944fa47efe7fc4f93a598f19"],["/ja/2016/06/2016-06-16/index.html","e24ea1d67140942c01255cf92a8f0817"],["/ja/2016/09/2016-09-18/index.html","045214a130c9945f223ae4c6e7c8d960"],["/ja/2016/10/2016-10-27/index.html","c657fea75438e59082cae4a392f41dbb"],["/ja/2016/12/config-switchresx-and-2khidpi/index.html","cb153ac45f0736ba2a0ecfe8b797299e"],["/ja/2016/12/improve-duoshuo/index.html","bf70ee935844a4fbc78264775e7c06cf"],["/ja/2016/12/use-travis-ci-your-blog/index.html","0cc0dde5c265b910c42c7295cdc0ec00"],["/ja/2017/01/2017-iyahoi/index.html","b8da6e72febd32df7f69e56a0401a9eb"],["/ja/2017/01/webpack-amd/index.html","ad8f178978b99fd133100784dc12592d"],["/ja/2017/04/kotobukiya-syaoran/index.html","a660a5274071d9947305f5432af47dd8"],["/ja/2017/04/macbook-and-surface/index.html","6a227649b2b051cd028c2e0ccd93d2ff"],["/ja/2017/04/uc-hyakuya-yuichiro/index.html","fa2aa21e7ef4d394b4766287a3329693"],["/ja/2017/06/noragami-seichijunrei/index.html","ae7e292487dd39070b187309181edd8e"],["/ja/2017/08/cross-compile-55-libev/index.html","b6fc185fc9f4960da37629d9ad12783e"],["/ja/2017/08/explore-service-worker-working-lifetime/index.html","11bef377aa05adb6824590f3ce66acaa"],["/ja/2017/08/hello-jp-world/index.html","ed506492a5e2bd10c27908f0afcf8427"],["/ja/2017/08/kiminonawa-tokyo-seichijunrei/index.html","dd380ad63b4f71fedcaa542cc4d1ebbb"],["/ja/2017/09/record-user-login-status-methods/index.html","af61d70e7737be877a4fd39988450c69"],["/ja/2017/10/vue-typescript-early/index.html","766ea4204a13fe3e3b03e90ac0c0a058"],["/ja/2018/04/2017-end/index.html","375e2de7249be06aa7c95dfe1e7ce8d3"],["/ja/2018/04/twitter-account-activity-api/index.html","4fec8040da6a1b95e21b62635b11b0bb"],["/ja/2018/05/buddy-complex-seichijunrei/index.html","00b25a039d224d4f29f3d765619f441b"],["/ja/2019/05/2019-05-16-record-jp-digital-TV-on-nas/index.html","65603605fa607c1fb0f644c9b03ff45a"],["/ja/2019/05/2019-05-17-google-io-tech/index.html","c8c26a7cc577918b6fb0f5b19114fc7a"],["/ja/404.html","8522b14cf6abf5a63f1154e9c9b22c37"],["/ja/about/index.html","d4ffd392c9b7bd4eb9b28a8c0e7e764e"],["/ja/archives/2017/08/index.html","bf76e16d342a2efc3c284f3907cd49c8"],["/ja/archives/2017/09/index.html","1dc9d664a4f76c5971ade996b14cab03"],["/ja/archives/2017/10/index.html","d0d0151d2053379cfc1d68b53f24f80c"],["/ja/archives/2017/index.html","00d3ee99103ee692f5dbe698e7c14ac5"],["/ja/archives/2018/04/index.html","335d935a985a6fc804f13ca6064a5461"],["/ja/archives/2018/05/index.html","fa34c08498ea77df2b4d19e5394a80bd"],["/ja/archives/2018/index.html","d77672f45a201978fe44d5c259e4df3d"],["/ja/archives/2019/05/index.html","9bdc646128f2b682e70c60f2086ce12c"],["/ja/archives/2019/index.html","092658d90518b49e4a526b492e6dc910"],["/ja/archives/index.html","fbad90b59c82eab239d86d8da5183508"],["/ja/categories/ACG/Travel/index.html","eb428853282847397d2fc5a8d2396100"],["/ja/categories/ACG/index.html","ecb5d898c2434d86a1036093a72d581e"],["/ja/categories/dev/Front-End-Dev/index.html","6e9a68df7366a86b78649a69136344a5"],["/ja/categories/dev/index.html","7c7145605086f937093f3af8753da321"],["/ja/categories/uncategorized/index.html","b209c37eca0b842e24fa20d50cd295dd"],["/ja/index.html","bda0758bd2adb8df9c3b8dfc87482da1"],["/ja/nihongo-test-page/index.html","67a3a185f41fae8e935e6a872ae19be2"],["/js/instagram.js","7d7a9e2e7286ba2d5b6d12068214f0c3"],["/js/jquery.lazyload.js","28c23bc40080d31144776e9a8736837f"],["/js/main.js","2e92f29b0cd90bddc062915eb46a858c"],["/js/mobile.js","dc84e1287e89e3c1bba67fd47b8656b1"],["/js/nextpageajax.js","c3bde8d7bb1f967fb319f57a187ea51a"],["/js/pc.js","631b535186aab0e262485ee2bf9da628"],["/js/ripple-effects.js","b9c11903da0ef5c3d790b41369c3137e"],["/js/share.js","de52ac3d43e43c1951a08b0804458a8e"],["/js/totop.js","661822968b58fd439f46bd54031238d6"],["/keep_origin/affiliate_jump.html","71bf6d72c5d080ec2b3f8ecfae3d71ed"],["/nihongo-test-page/index.html","3e75cd57d546955798e8deb1503962ea"],["/page/2/index.html","47a595ad3e2966ed8f10f1f40ffcbb45"],["/page/3/index.html","0bf3a7b564245642d5269b0390dce323"],["/page/4/index.html","bd7e119c9b8c8c2fd4dba0a795b5cedd"],["/page/5/index.html","00d2d6ac7465439d2cfb12bd1f298985"],["/page/6/index.html","812c9a9ccfd846c3413e0351f503835c"],["/photoswipe/default-skin/default-skin.css","426e8908d7426603ca203b6d16281b1e"],["/photoswipe/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photoswipe/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photoswipe/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photoswipe/photoswipe-ui-default.js","0c9196aa8943ce8a8045c9f4cc62915c"],["/photoswipe/photoswipe-ui-default.min.js","9517baca43cd4e9cb23ff337fbc1baa1"],["/photoswipe/photoswipe.css","7dc0df107159e1be66d4464171561e5b"],["/photoswipe/photoswipe.js","a8d26ff34943c859884acbd6b2531315"],["/photoswipe/photoswipe.min.js","f5cd6479c4e4682545a9603e6b50c741"],["/setup-log/blog-setup/github-pages-ssl.html","d5e315a4f7725d0c5a828ab2ac48dfe3"],["/sw-register.js","29a3797c7398274dad3dcb667877b646"],["/zh-cn/archives/2015/03/index.html","2ce4fa6ef21c8b04338e0719ee543c1a"],["/zh-cn/archives/2015/04/index.html","e6d70a29b6e071825ff96de32dbf0990"],["/zh-cn/archives/2015/05/index.html","2fb1ce03480d142e5e7053c8df19dd91"],["/zh-cn/archives/2015/09/index.html","bbb19934a28c2a6090ecccfffd0ce82e"],["/zh-cn/archives/2015/12/index.html","cc40de9929cc5aa070e5217dfdff3db9"],["/zh-cn/archives/2015/index.html","6ccaff3f3dd8f866cfc0ee029b8df9b5"],["/zh-cn/archives/2015/page/2/index.html","fb20396b374e61b27d647d7c36e9f41a"],["/zh-cn/archives/2015/page/3/index.html","bb51ce94b6660a6d6752893ba67ff800"],["/zh-cn/archives/2016/01/index.html","9e711bb90d1861a52dcd782fb52f1c04"],["/zh-cn/archives/2016/03/index.html","f13c3cd39ff92ca601dcbb7a779db105"],["/zh-cn/archives/2016/04/index.html","04e75dce761438204d50d7dfea4450b7"],["/zh-cn/archives/2016/06/index.html","775892c29afccab9ad87f89b0ed8272a"],["/zh-cn/archives/2016/09/index.html","4dc0326a65c87818d925d52cf74d4e52"],["/zh-cn/archives/2016/10/index.html","99dd3f52cb0e1972433e6ed99d9fd193"],["/zh-cn/archives/2016/12/index.html","bc0097eb956aaee3d529dc050e819a7e"],["/zh-cn/archives/2016/index.html","62107408ffa8ed18ca35f7718041dd4f"],["/zh-cn/archives/2016/page/2/index.html","663e3a9131b3f6ab36e753bd62911d5b"],["/zh-cn/archives/2017/01/index.html","507cc98891d8d3cdb667e2ed0f80d0d3"],["/zh-cn/archives/2017/04/index.html","c61508c54b97f0432b1b5ebfdd9cd55f"],["/zh-cn/archives/2017/06/index.html","0b23943f34e55be22b50a8ef7db48c8d"],["/zh-cn/archives/2017/08/index.html","e1ee134431d2c21c87ffa13a2c105666"],["/zh-cn/archives/2017/09/index.html","9d0d09f06be0e654376d2d3927241a01"],["/zh-cn/archives/2017/10/index.html","c0756f3d7a3a388c97a9f9a57759eb59"],["/zh-cn/archives/2017/index.html","67dcbc11942a06328e6ee65d5d7fca4e"],["/zh-cn/archives/2017/page/2/index.html","84f66e6a9714531888f8dfba23362a9e"],["/zh-cn/archives/2018/04/index.html","4dd66aab2ea6b68463f2ba763c6745da"],["/zh-cn/archives/2018/05/index.html","980cdfc4a3dcde49eae5e58eaf1f18c1"],["/zh-cn/archives/2018/index.html","81bd3d42d6e28b31161a781b9acb35d9"],["/zh-cn/archives/2019/05/index.html","5d783360ecb50ec045ff35c9a452e34f"],["/zh-cn/archives/2019/index.html","8b0b26498ac63febb289e802a40a58a2"],["/zh-cn/archives/index.html","30dfac13b1e0b0bb28856fa1aee32ae2"],["/zh-cn/archives/page/2/index.html","749cff22d9cd1956f602c625c0210c3a"],["/zh-cn/archives/page/3/index.html","731fb1595786cdaf135070fad60fbeb1"],["/zh-cn/archives/page/4/index.html","e63a57019678e92c9ea00093cd2b1408"],["/zh-cn/archives/page/5/index.html","f6671f62f7566de54537edd3fdbb7ae8"],["/zh-cn/archives/page/6/index.html","257bdd417cfe7e36377932fc93ce5174"],["/zh-cn/categories/ACG/Music/index.html","0fd5f2c8d158f85c0dc1b7840bcd1979"],["/zh-cn/categories/ACG/Music/self-copy/index.html","9711abdc95e68e81a947da53806ab154"],["/zh-cn/categories/ACG/Travel/index.html","813eed963c5a723539a8ac32f47c5d02"],["/zh-cn/categories/ACG/figures/index.html","04e072cb6790aee7a8e37921e012dd1b"],["/zh-cn/categories/ACG/index.html","3265201805e13bc6d5f4634f92869183"],["/zh-cn/categories/dev/Front-End-Dev/index.html","a8256a4702f5d9cd89cb976f877c5a04"],["/zh-cn/categories/dev/HTML-CSS/index.html","c85b180f5a571046453f7a13317906a8"],["/zh-cn/categories/dev/android/index.html","bbdbee44014880a0ec51ddfb0e75be9f"],["/zh-cn/categories/dev/cpp/index.html","df2630491138922df7333c84bb0318db"],["/zh-cn/categories/dev/git/index.html","d5e20d0427399ab9f68782d1fab8d728"],["/zh-cn/categories/dev/index.html","ee976093a1ed3e3d986b0b1eb1e91554"],["/zh-cn/categories/dev/java/index.html","d6c5770ee0ec18d9546e57b03f3f3bde"],["/zh-cn/categories/dev/page/2/index.html","509ce839028f664265eb901242fb97db"],["/zh-cn/categories/maintaince/blog-setup/index.html","aeeb0772870a95a4e7801bf5d6f7fd87"],["/zh-cn/categories/maintaince/index.html","17448305ec6d949fc4fabd6b439bda5f"],["/zh-cn/categories/maintaince/macbook/index.html","3b7f1b071523a1700150fb8e04d9dfd9"],["/zh-cn/categories/maintaince/router-config/index.html","15f755ac7ef8815d9cfa7a45380aa126"],["/zh-cn/categories/notes/index.html","eb6f0f6f1acdda028c494831c15961d9"],["/zh-cn/categories/tricks/android/index.html","6a8d36f643efa35ed7cb3f3814618915"],["/zh-cn/categories/tricks/index.html","445dc813bc0ced0714b78b9fecd66700"],["/zh-cn/categories/uncategorized/index.html","a75744735fb91c9867dc6a4994e4d6f2"],["/zh-cn/categories/works/Front-End-Dev/index.html","95a8255947ca86c823e84e605b07b572"],["/zh-cn/categories/works/csharp-wpf/index.html","d95fcb9b84ffb08a8ac8e734920c8fb5"],["/zh-cn/categories/works/index.html","6120c6ba19f095551602c6448f222347"],["/zh-cn/index.html","154ccab94f8d9ecbdceb969a633597c5"],["/zh-cn/page/2/index.html","bd43154cd2203237cfc468adc1488b1a"],["/zh-cn/page/3/index.html","2ed66ebd047e4d92b14ff5dd294881e3"],["/zh-cn/page/4/index.html","ba915c510deb6e221b5f97955921426c"],["/zh-cn/page/5/index.html","4d66cdf8850f42212826a5c79ffccfa4"],["/zh-cn/page/6/index.html","ee7bf4e08943b568e9ad5c749bdf1742"]];
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
