/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/03/WNDR4300-setup-log/index.html","9f008afafc6882915968b18a76958b3a"],["/2015/03/android-hostname-change/index.html","ea8621b9ba742f7058ce2d0e3b7f2ed0"],["/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","3fe818ce54ea7aa59368738a2a7fe65e"],["/2015/04/android-chrome-issues-with-webpage/index.html","ad0a4b2509ee55dfdff562c5794f605f"],["/2015/04/cpp-study-log/index.html","e8d1cb0ad0cfb3a978c169296be64d12"],["/2015/04/github-pages-ssl/index.html","71e093b1fd87066c6ef543162c1632c6"],["/2015/04/hello-world/index.html","ded7d48df750f74dc874b0f4e904562d"],["/2015/04/hexo-setup-log/index.html","f917869a127d642d391a4d4e04eefee2"],["/2015/04/self-copy-cd-inazuma-1-html/index.html","57e29e7b7eab03dec68f076856d59359"],["/2015/05/cpp-inherit/index.html","8e46080b680742678b397fb4c124ea4c"],["/2015/05/cpp-polymorphism/index.html","2fb014e1ab6216c5a7b9deae835cd2d8"],["/2015/09/android-root-ota/index.html","b6b07c9776ab01ddf243e136b9e0b8d8"],["/2015/09/java-learningNotes-1/index.html","1fc6606ba78b49bac29d00ab9d5b156c"],["/2015/09/newblog-newlife-2015/index.html","93c8f21e4b64796e65b50de533ea127f"],["/2015/09/router-rebuild-2015/index.html","39213fe4e3984c3402301579e1875886"],["/2015/12/2015-12-21/index.html","425205de07e85d44f9b3ccccd63ccc42"],["/2015/12/PixInTouch/index.html","6f2aa7c188aae40412662d6bcee76ae9"],["/2015/12/git-study-1/index.html","328e7869bf7c7e504600031c93723f69"],["/2015/12/hexo-backup-and-migrate/index.html","c0d714fc37740e645953e8d0fa299ecf"],["/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","4a1215d6ef32282d6d6f90daf016f648"],["/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","a4667855354e7cb285fd7870833cc120"],["/2015/12/router-reconfig-2015/index.html","fa3861695dd791274f5e2687b92bc57e"],["/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","a4f9300db25b8e0cbc8e915bccd492ab"],["/2016/01/2016-stepping-further/index.html","8b7c764dedf684db1f1abca9e36c69d9"],["/2016/01/Android-Study-1-22/index.html","ddae5bc8de66f3a82cc8d0c5ce44faeb"],["/2016/03/2016-03-20/index.html","1c91ee131b70848a5edf0db9df7bcdc5"],["/2016/03/GSC-535/index.html","f21026e2842ff9352536b42577b5d72b"],["/2016/03/gulpjs-1/index.html","c630fdfa8d6db2556e1cb8f4570bb948"],["/2016/03/hexo-theme-paper-white/index.html","588bb6acb5c9b05855b0b593062cdee8"],["/2016/04/2016-04-19/index.html","b846989caaa881b3d14c7a7735272ab2"],["/2016/06/2016-06-16/index.html","a24b7e8e58ce53fae89420b3e93f8f17"],["/2016/09/2016-09-18/index.html","a6734853542a3b0b8121670f623c2420"],["/2016/10/2016-10-27/index.html","801497d2efdc8cbb872dac958365f177"],["/2016/12/config-switchresx-and-2khidpi/index.html","3c770a0a3a2095ec70bd86fdf4b5599c"],["/2016/12/improve-duoshuo/index.html","d857ea6b4fed0623bbbcec7ed26baa7a"],["/2016/12/use-travis-ci-your-blog/index.html","c86b7171246bff2d307b04eb53677601"],["/2017/01/2017-iyahoi/index.html","0f87c3c55b3a128f4a55eff50901c24e"],["/2017/01/webpack-amd/index.html","a6ed1d666df86866b86f4b10dc9b053e"],["/2017/04/kotobukiya-syaoran/index.html","00da407f3d4f18c0f349698096e3a58b"],["/2017/04/macbook-and-surface/index.html","876080146aa8687469150159627fefc9"],["/2017/04/uc-hyakuya-yuichiro/index.html","1b8e02f158d0bb9de47ab4335a7f83e3"],["/2017/06/noragami-seichijunrei/index.html","2a3a9391279eb4808eeaf42308e87383"],["/2017/08/cross-compile-55-libev/index.html","b22cd400137c6ea762ddcb996b2702a0"],["/2017/08/explore-service-worker-working-lifetime/index.html","a30692deca7f75b1d3883a3cf0a78a4e"],["/2017/08/kiminonawa-tokyo-seichijunrei/index.html","d80e8a19f5afbfb59f3ed1d039b9c55b"],["/2017/09/record-user-login-status-methods/index.html","677230e04d815a09749d5fb1b63c0b8b"],["/2017/10/vue-typescript-early/index.html","aead57e1ff8e0ae8be4a320cd5f50989"],["/2018/04/2017-end/index.html","6958a9aa37c6c151d50de4f2eaa51851"],["/2018/04/twitter-account-activity-api/index.html","06027477fb3506e2332123e5da40c426"],["/2018/05/buddy-complex-seichijunrei/index.html","31123b632bd6e02c5ff0ee3a7f53981f"],["/404.html","8ac86d1c3c99f3cb9d1e4a6488c09749"],["/about/index.html","33bbe1cfc7ec74474667214298293a6b"],["/archives/2015/03/index.html","eca2f6c98dd2474c98ec4782cdb68ec3"],["/archives/2015/04/index.html","26b9818c4ae16b4eff4c06d96d19f22a"],["/archives/2015/05/index.html","745ce1f728a92949cab197193a309ad7"],["/archives/2015/09/index.html","15fd4827847ab372e7e9455983ea80f1"],["/archives/2015/12/index.html","213484232688da2a5a61dcd95c0cd656"],["/archives/2015/index.html","9fbd294d5cd3a2fc660da6e968c01594"],["/archives/2015/page/2/index.html","0c5591d214f765d523dee0cac8a55ef7"],["/archives/2015/page/3/index.html","1eec7b4d8fefea7d4f374e1068799e90"],["/archives/2016/01/index.html","86a29dad7f08cd1ca7fa3e73b68b52e4"],["/archives/2016/03/index.html","5a0e2e687a22d90d661d5a2927b8b46d"],["/archives/2016/04/index.html","e1e8b75b933b8df367233e89beedc6f0"],["/archives/2016/06/index.html","329ec3bc3fa9209f9a9370d64bd8cb79"],["/archives/2016/09/index.html","156a193e56743d218ad256039a1ee7ac"],["/archives/2016/10/index.html","864c3eb44d485310c5f721cb84cb3100"],["/archives/2016/12/index.html","97c60041dd07b315bf3a98ce14ae2f36"],["/archives/2016/index.html","978db2240a932870fb1f57e5a1159527"],["/archives/2016/page/2/index.html","9cba1693dc11bb47ba1c28cf54405b72"],["/archives/2017/01/index.html","d1043caea93d150b1aaafd1da532e775"],["/archives/2017/04/index.html","4602f817a41b3c1ff915a49602540fe2"],["/archives/2017/06/index.html","377271de7e88413eb378ffaca5f86c1e"],["/archives/2017/08/index.html","ce38bfdef022fdff9d2a557d90968cea"],["/archives/2017/09/index.html","0fdb62fa2092da783e8c296381baec3b"],["/archives/2017/10/index.html","51012c37aada378f2b994b6040fc8af1"],["/archives/2017/index.html","bd3745ccfc16ede28a1d816d9bf17826"],["/archives/2017/page/2/index.html","64e6a2fb427be2f44e409cefcc9fe796"],["/archives/2018/04/index.html","c3fb8be430fb6041e3a6dea6791adc8e"],["/archives/2018/05/index.html","b1f17c631342dbccdec2f5189eb023b3"],["/archives/2018/index.html","d22f8154c7b9e3af1c6fdf52810fdf57"],["/archives/index.html","79f2f7579ecd0e5c1b93d049c2d0e4c3"],["/archives/page/2/index.html","fce8bcd804ede1fa9e9804ba372bbf81"],["/archives/page/3/index.html","0ef36538a11eed8d71daaf3e08d88a93"],["/archives/page/4/index.html","8510da7ab441600aeccf5f39abd05e49"],["/archives/page/5/index.html","66374514357416c06d5cd35d2c7b90ff"],["/assets/images/about-me.png","a066d06c3d9d1fe56c4d921cec7febf3"],["/baidu_verify_YbTSlpWIUJ.html","779049c3a50695ceb3a388ce1e8bc1b9"],["/categories/ACG/Music/index.html","040174ef3976fe083bc7337afdaa8689"],["/categories/ACG/Music/self-copy/index.html","ef19c929de49b73bc4591040beccbee6"],["/categories/ACG/Travel/index.html","fc0dc5d7d090328067ae0762add55e46"],["/categories/ACG/figures/index.html","5af649eaf65acb5b2da92ed7f9f91e26"],["/categories/ACG/index.html","9b79d66e692daea9c940c7d822a1f1c3"],["/categories/dev/Front-End-Dev/index.html","0113a70a7657767110a34356da0ab079"],["/categories/dev/HTML-CSS/index.html","49bc0e78319210811ba67df305e88921"],["/categories/dev/android/index.html","322950728a9e336bc3d395fd4238eb15"],["/categories/dev/cpp/index.html","cd12c851139fb563c0049de4a88f0ee9"],["/categories/dev/git/index.html","736b2b8b127eb8e5f917b739669bac97"],["/categories/dev/index.html","6a8f45d2ad49655bbbf5b3ceeb389051"],["/categories/dev/java/index.html","173feb217223bb671b225e38a339efba"],["/categories/dev/page/2/index.html","099b475acbe00ff54e2d96d558aa259a"],["/categories/maintaince/blog-setup/index.html","12ef111b29828c85f0b5e3ea8d3ec9ac"],["/categories/maintaince/index.html","c6f7804f9c4f80f4f7daeb5d4d910d1c"],["/categories/maintaince/macbook/index.html","7560d8fa7d013c58a51890f12eb55164"],["/categories/maintaince/router-config/index.html","84d11d7cc5c0e771e35dbbb96a9072c8"],["/categories/notes/index.html","e4c601eabbde19f886030eb3cc3bfb9b"],["/categories/tricks/android/index.html","65f3166a0e960ec5462bba68b9c97889"],["/categories/tricks/index.html","1235fdfe483164fb8cb7d69cb13d18d0"],["/categories/uncategorized/index.html","556c9a6183492ec164b3bf4a028be43f"],["/categories/works/Front-End-Dev/index.html","f0b8f79a706d941384dc3918390515c0"],["/categories/works/csharp-wpf/index.html","3cd2618518f247c2c9fe62f90f56c098"],["/categories/works/index.html","176de4050e8831ff12c1401261462fa9"],["/css/seichi.css","42693f35c4c482207368dd363ea27373"],["/css/style.css","e21657d8ff2f701595db4e2404d14563"],["/google311213f0c8d812a9.html","51f1ee3c2f13a21a1a40b3dae4954454"],["/img/coderwall.png","1976fe70f1ee8ed243e0975402e06a2d"],["/img/delicious.png","952d9b54d8bcfe7b998f67ff48c4dbce"],["/img/douban.png","d42a163f932100e621d22732db34ecdb"],["/img/facebook.png","4bd685f6c9fdaccabf07bdd52173facb"],["/img/github.png","3c4b6267a1a3fedebdc7d089610ecfe7"],["/img/google.png","c385f5304465716b2d6c9ada94c657ab"],["/img/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["/img/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["/img/linkedin.png","4c72c4896f3c23f736cb1ad08f0c866e"],["/img/mail.png","38a7b8302dac028bf03b22d228938abf"],["/img/pinboard.png","9b6186cb97adbe50311f94e50f2392cf"],["/img/pinterest.png","e1b8e655d1b99b40ebcbd96977ae234e"],["/img/rss.png","ec8cf9b5a98011aa75cc0a4f25024dc9"],["/img/scrollbar_arrow.png","be5381cedbd6b778b1d92e224fd71cf7"],["/img/stackoverflow.png","039128ececb47b33bccedd98dc9fc809"],["/img/twitter.png","d2289a4936fefa41d9f92cf89939be5b"],["/img/weibo.png","b382032b316ee38c6d537fe9d36ae54c"],["/img/zhihu.png","e6352c0e1957beef3009268ae747c3aa"],["/index.html","eb35a049340bf51739b5501eb5204cab"],["/ja/2015/03/WNDR4300-setup-log/index.html","39f76af8ccd9859329f7cac7da5ac526"],["/ja/2015/03/android-hostname-change/index.html","a4fb531f3c224c4777655bdfcd71e390"],["/ja/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","20ad75d22e49a191668e88891f7280d3"],["/ja/2015/04/android-chrome-issues-with-webpage/index.html","8d7c1d8d7214c43745a7c264af83ae31"],["/ja/2015/04/cpp-study-log/index.html","a4034e0db1c5de79d28f9666f6334f1f"],["/ja/2015/04/github-pages-ssl/index.html","4d0fcd8299fd8e839de457654de085d1"],["/ja/2015/04/hello-world/index.html","e95d9a619c14657f3b6557dd5e142f7c"],["/ja/2015/04/hexo-setup-log/index.html","3388ec625258d26167c47cfe6e998b57"],["/ja/2015/04/self-copy-cd-inazuma-1-html/index.html","f39dcc3e3f086d72ad35e9c58fa22bea"],["/ja/2015/05/cpp-inherit/index.html","13c1a3bc90a2299137bb26216eb71e00"],["/ja/2015/05/cpp-polymorphism/index.html","922f855774bbb21cefa1113182d04141"],["/ja/2015/09/android-root-ota/index.html","e16ec46b1ae6c02fa644ee815027dacd"],["/ja/2015/09/java-learningNotes-1/index.html","e6b2a85b6b3b18c5eef18b0416010b6b"],["/ja/2015/09/newblog-newlife-2015/index.html","c417ae8ac5dd7cf8f1ed178cf221e95b"],["/ja/2015/09/router-rebuild-2015/index.html","c50dab782439f90121c80a0a1685b4d4"],["/ja/2015/12/2015-12-21/index.html","6e699166c5f0ca97ce90031003fdcae5"],["/ja/2015/12/PixInTouch/index.html","952a1f4e895781b070d583ab8f37f712"],["/ja/2015/12/git-study-1/index.html","f12245c9565df41410e5b1deb007e71e"],["/ja/2015/12/hexo-backup-and-migrate/index.html","2bd42944a405fac46f9eaa47c6ad83c9"],["/ja/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","6da6a8e30af7f7f9c07ed692c61423ec"],["/ja/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","7ba83fc655b6dea4bb5064d174f6302e"],["/ja/2015/12/router-reconfig-2015/index.html","92b82d096f3d4f853532d2b3505db23b"],["/ja/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","81d9158b592f03cd88e5a99d467c56cb"],["/ja/2016/01/2016-stepping-further/index.html","c592abe9ced34ed52b3dd3d668183bc0"],["/ja/2016/01/Android-Study-1-22/index.html","d2a0387225b52952c38a208ba2c32898"],["/ja/2016/03/2016-03-20/index.html","b0de41fde00e8f9a6c2753501879cf13"],["/ja/2016/03/GSC-535/index.html","33668b0d9e1acb7b150d409c3804210b"],["/ja/2016/03/gulpjs-1/index.html","cad6829df72714970714e5736928b30b"],["/ja/2016/03/hexo-theme-paper-white/index.html","14cd0783818e06b97bbe52c17398f064"],["/ja/2016/04/2016-04-19/index.html","c289fe3978b62c826745041f5a092422"],["/ja/2016/06/2016-06-16/index.html","76f21356a60404b8d8fbb0ce5b24f67b"],["/ja/2016/09/2016-09-18/index.html","fd6e7f99ce77f4bec6ea33aee0ace564"],["/ja/2016/10/2016-10-27/index.html","fbbe75f325df37032c82787628530d92"],["/ja/2016/12/config-switchresx-and-2khidpi/index.html","13c5a88a53462d16caec63ae2f24553c"],["/ja/2016/12/improve-duoshuo/index.html","9db71861c9e88e3c16e32dea01e03423"],["/ja/2016/12/use-travis-ci-your-blog/index.html","55cd897d25e12c7138f5934884f4aa78"],["/ja/2017/01/2017-iyahoi/index.html","b57e948c653f487501570c876055c604"],["/ja/2017/01/webpack-amd/index.html","9eda0e48a93f4e54cefd78b7f9025f58"],["/ja/2017/04/kotobukiya-syaoran/index.html","ee825a7874c80a53587a8aae73d704aa"],["/ja/2017/04/macbook-and-surface/index.html","5438fe7ab59866e41d76555e45706a9d"],["/ja/2017/04/uc-hyakuya-yuichiro/index.html","540ddb76b38a55a2a8766f989958325c"],["/ja/2017/06/noragami-seichijunrei/index.html","9f9c62b92bfaf479412ea53d3d6db862"],["/ja/2017/08/cross-compile-55-libev/index.html","091fc93523cb27e335d54fd5ba599199"],["/ja/2017/08/explore-service-worker-working-lifetime/index.html","9afe1fc90213ce09e49be1d10528e789"],["/ja/2017/08/hello-jp-world/index.html","0e9d4a63ac6614e56c1c05115ccc92fb"],["/ja/2017/08/kiminonawa-tokyo-seichijunrei/index.html","c1fb771dda4458219ae5b1515b5f3eda"],["/ja/2017/09/record-user-login-status-methods/index.html","2ab9640d4cfd78c163057d8f21dd8003"],["/ja/2017/10/vue-typescript-early/index.html","6da25326bc0da56a45656c2bb7f2ffe4"],["/ja/2018/04/2017-end/index.html","ef690ed86f50273f7995a7347c5b13ac"],["/ja/2018/04/twitter-account-activity-api/index.html","c83a10c4af9576494372adbb5ac84aa5"],["/ja/2018/05/buddy-complex-seichijunrei/index.html","97baf84723f4d47362ef0bf7ea663f93"],["/ja/404.html","f19254a0d9fe9c50dc90eef408c63161"],["/ja/about/index.html","9c968ed1dabf45a730d67563cc475cb4"],["/ja/archives/2017/08/index.html","64809aac87fd43d81137d0112891c16b"],["/ja/archives/2017/09/index.html","8e742cef72d07aa463bfb568ee7c224c"],["/ja/archives/2017/10/index.html","e9b6ba9a92f5d2ec319a7c125bd9fe19"],["/ja/archives/2017/index.html","d4da9f9c5651f764c5c63dc688a905ec"],["/ja/archives/2018/04/index.html","4f21a38102338347419d5faa5993c62c"],["/ja/archives/2018/05/index.html","b755050e4b8021f6e78a9a8cecbbc0cb"],["/ja/archives/2018/index.html","9b8fd89dde140f1ade4390b7dbe55a31"],["/ja/archives/index.html","e8c8b76041a3f9c442f0d0675c0c5fbf"],["/ja/categories/ACG/Travel/index.html","232f000d4ad2a28e06b7bb38b6504a20"],["/ja/categories/ACG/index.html","17e3e590a8373c5f3033bebb1415f433"],["/ja/categories/dev/Front-End-Dev/index.html","0d30ea8c71bbb4acdb77c3bc4bf4c1d4"],["/ja/categories/dev/index.html","6b50a7fefc4a1b88464675b1830d3605"],["/ja/categories/uncategorized/index.html","cff46cf6dd5e5c9c99495db153943521"],["/ja/index.html","96aff85205ff8d148d1043b13ecbbc10"],["/ja/nihongo-test-page/index.html","974726ed56577541db8ccc8ca3eaa9ac"],["/js/instagram.js","7d7a9e2e7286ba2d5b6d12068214f0c3"],["/js/jquery.lazyload.js","28c23bc40080d31144776e9a8736837f"],["/js/main.js","2e92f29b0cd90bddc062915eb46a858c"],["/js/mobile.js","dc84e1287e89e3c1bba67fd47b8656b1"],["/js/nextpageajax.js","c3bde8d7bb1f967fb319f57a187ea51a"],["/js/pc.js","631b535186aab0e262485ee2bf9da628"],["/js/ripple-effects.js","b9c11903da0ef5c3d790b41369c3137e"],["/js/share.js","de52ac3d43e43c1951a08b0804458a8e"],["/js/totop.js","661822968b58fd439f46bd54031238d6"],["/nihongo-test-page/index.html","09c18aa152add4664d5540eabbe3dd00"],["/page/2/index.html","ed60d1825d197d135879fb3a2ae1accb"],["/page/3/index.html","85d5d668e4d85f294e3810523a266210"],["/page/4/index.html","c2a989707759e33a7777dcab8c888a8b"],["/page/5/index.html","c2b4ce3365ba6cf79f2b360854aa823b"],["/page/6/index.html","4961d320ac14313aacc96cb68dedae5c"],["/photoswipe/default-skin/default-skin.css","426e8908d7426603ca203b6d16281b1e"],["/photoswipe/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photoswipe/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photoswipe/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photoswipe/photoswipe-ui-default.js","0c9196aa8943ce8a8045c9f4cc62915c"],["/photoswipe/photoswipe-ui-default.min.js","9517baca43cd4e9cb23ff337fbc1baa1"],["/photoswipe/photoswipe.css","7dc0df107159e1be66d4464171561e5b"],["/photoswipe/photoswipe.js","a8d26ff34943c859884acbd6b2531315"],["/photoswipe/photoswipe.min.js","f5cd6479c4e4682545a9603e6b50c741"],["/setup-log/blog-setup/github-pages-ssl.html","d5e315a4f7725d0c5a828ab2ac48dfe3"],["/sw-register.js","16b10f1697785cc5da2f9207a04f6a69"],["/zh-cn/archives/2015/03/index.html","68d797ed547d677407cfc96931bf13ad"],["/zh-cn/archives/2015/04/index.html","1cd377206e6bb5acdd4bc141203e04fe"],["/zh-cn/archives/2015/05/index.html","d4f0321ef7751a7db73cdf6d660fb2d8"],["/zh-cn/archives/2015/09/index.html","3759125f4ae380a7fd6ed550f01043cb"],["/zh-cn/archives/2015/12/index.html","00d2b862c664b0b4e5a5e7054d7e9ef3"],["/zh-cn/archives/2015/index.html","6bfab71d330de033a30bf8b3a0199347"],["/zh-cn/archives/2015/page/2/index.html","673a6141ae9b36b3b3461b8213dda945"],["/zh-cn/archives/2015/page/3/index.html","6c90936c2b1d5ad37ca02a5df3d3bdd9"],["/zh-cn/archives/2016/01/index.html","90397b8d0a588d4f75a9d0610f52932d"],["/zh-cn/archives/2016/03/index.html","ac2eb264a29096426b4868905c167ff0"],["/zh-cn/archives/2016/04/index.html","2bccfbcb54a857f3826211fcccc7ce57"],["/zh-cn/archives/2016/06/index.html","0649bb5c9b7120eda07d1811db658580"],["/zh-cn/archives/2016/09/index.html","2aec212ce1d5a9821d79f4bb4378c6d9"],["/zh-cn/archives/2016/10/index.html","5261ba009ec183f05fd48120374ca285"],["/zh-cn/archives/2016/12/index.html","edb49185ad966a410215f29f8ff872a6"],["/zh-cn/archives/2016/index.html","bd9de015b3186ae49308bf8787ed04fe"],["/zh-cn/archives/2016/page/2/index.html","b13f8c1acf25310addc54c52a892fc48"],["/zh-cn/archives/2017/01/index.html","437ac4937be32c00b827bfe6783a7dd1"],["/zh-cn/archives/2017/04/index.html","de56d7ab0fa2ce0cbc601713a588eea6"],["/zh-cn/archives/2017/06/index.html","c0e576f8cc39f6fb9e6ca109d7e782d0"],["/zh-cn/archives/2017/08/index.html","91a6a0ccdd5855fbf4e5e538344ecd2a"],["/zh-cn/archives/2017/09/index.html","7e69dd0d6dcff661eb104975605cab8c"],["/zh-cn/archives/2017/10/index.html","286f564a739497f03822545ba31ce6eb"],["/zh-cn/archives/2017/index.html","cf520b5cb511fa365670ec930fb9bc42"],["/zh-cn/archives/2017/page/2/index.html","e72548ae5c175ccd04ec4bbc960033d2"],["/zh-cn/archives/2018/04/index.html","de0fd62a99f87a62d6c3bc64eadf5012"],["/zh-cn/archives/2018/05/index.html","8e990309727b68e457b967cc7d99ce6c"],["/zh-cn/archives/2018/index.html","1f38027b1215c4088f6dbe0eb4c4e1ad"],["/zh-cn/archives/index.html","2df0d2701442d5e9eead6c229516022d"],["/zh-cn/archives/page/2/index.html","eb6b12ce8f3646359cd3434aff90ca3a"],["/zh-cn/archives/page/3/index.html","a187a2bcd7844acc8345e8fa3b3248a9"],["/zh-cn/archives/page/4/index.html","a7559b91afb62bd224f3b8204c31ba8e"],["/zh-cn/archives/page/5/index.html","fc7e2241d3d6378389bac5870a0548a1"],["/zh-cn/categories/ACG/Music/index.html","dcf43ddf06dc77870aace7417835540a"],["/zh-cn/categories/ACG/Music/self-copy/index.html","2340ce1a55eecf47d67e20d6c708ba21"],["/zh-cn/categories/ACG/Travel/index.html","0f8fd35fbf544475946569ea4cca7d39"],["/zh-cn/categories/ACG/figures/index.html","0de05691a43ff9c71f82cf0ac76479f4"],["/zh-cn/categories/ACG/index.html","8642b04a7f6895d29cd577676c593e98"],["/zh-cn/categories/dev/Front-End-Dev/index.html","2627bd36ee583a92aad82e79d5d5ee9a"],["/zh-cn/categories/dev/HTML-CSS/index.html","cce42b2ffb98c84c697b9bbd12fce463"],["/zh-cn/categories/dev/android/index.html","3c9e18105a9ee5a855d37842a6d5fe36"],["/zh-cn/categories/dev/cpp/index.html","370338c71523baa22b0e82775715a027"],["/zh-cn/categories/dev/git/index.html","6f3cd544e24e9ea0189cdb026e304e80"],["/zh-cn/categories/dev/index.html","298bd3322dcb8ea51e552f1027054bff"],["/zh-cn/categories/dev/java/index.html","ecc2c2696b760706dd044e044b453e33"],["/zh-cn/categories/dev/page/2/index.html","0421eb06e8032619b8e578b359827dc7"],["/zh-cn/categories/maintaince/blog-setup/index.html","e9296f84e28c737d57964724c07c252c"],["/zh-cn/categories/maintaince/index.html","62becd33e9ab17156c69d420548a16a0"],["/zh-cn/categories/maintaince/macbook/index.html","f4999f63fb2020f7816e464929877700"],["/zh-cn/categories/maintaince/router-config/index.html","008b252338636d6fde2201321bb7f9e4"],["/zh-cn/categories/notes/index.html","b1fef1a0a60630e1b4d00b1d47447214"],["/zh-cn/categories/tricks/android/index.html","5795786e8d466838f2dbc121b5cd9745"],["/zh-cn/categories/tricks/index.html","4eebacac6635a8dcf704af43b6177274"],["/zh-cn/categories/uncategorized/index.html","ff2653adb21ae576c94bd582f7a707be"],["/zh-cn/categories/works/Front-End-Dev/index.html","b019b99a1d3a2a5c713902142a6b39f0"],["/zh-cn/categories/works/csharp-wpf/index.html","9d6e2e628a86a0c2c2cd4c5b0b711edd"],["/zh-cn/categories/works/index.html","c94eaf0ca923c6696e227da22f5fc1a8"],["/zh-cn/index.html","2ac607c14ee66ab50067ba388cc9d699"],["/zh-cn/page/2/index.html","c6754cded4a7078ed56dfb073369432f"],["/zh-cn/page/3/index.html","fe253a23a1c382fac20aef538e7bbc4a"],["/zh-cn/page/4/index.html","b67956e5d1e7025cad5d42e508bd03c9"],["/zh-cn/page/5/index.html","50c1165b273cca83bbc7ef931ecbab8a"]];
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
