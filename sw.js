/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/03/WNDR4300-setup-log/index.html","ad101bebcd3355c0219706f679645ad1"],["/2015/03/android-hostname-change/index.html","f75b4b96bcdb16656a49ce5b12d84bb5"],["/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","5c0270b82a0ad21398401878f2be9393"],["/2015/04/android-chrome-issues-with-webpage/index.html","39743aa484283a8a6196dcb950fda060"],["/2015/04/cpp-study-log/index.html","cb7b6d4da0e652de08cb22a33a2359a0"],["/2015/04/github-pages-ssl/index.html","07c5199624cd0e33e5345865a04da6e7"],["/2015/04/hello-world/index.html","1b23af51c935e13f2a40ac400363f27e"],["/2015/04/hexo-setup-log/index.html","2f83b48edbebde2a22ba8c1b8141f34f"],["/2015/04/self-copy-cd-inazuma-1-html/index.html","c61f93377b5ebf097eeb21b9ab33ea75"],["/2015/05/cpp-inherit/index.html","d6aead0b4beea1922e8db1ba0eeed2ff"],["/2015/05/cpp-polymorphism/index.html","61ffb13ba478c56dd5a9f9caa7036176"],["/2015/09/android-root-ota/index.html","a5d91accced7d6d9a2eeea07070e3f30"],["/2015/09/java-learningNotes-1/index.html","b1a58e0fc42542149a2fc3c5e5abdd4d"],["/2015/09/newblog-newlife-2015/index.html","cfa35e81a1fe443d564c1960f6d7e900"],["/2015/09/router-rebuild-2015/index.html","ff2816eaad40cebb19be9770e48a2ca3"],["/2015/12/2015-12-21/index.html","6199867524cc2e9d2c12f38fb60f4059"],["/2015/12/PixInTouch/index.html","fec00bd97d0697cee15c2955169bfc52"],["/2015/12/git-study-1/index.html","1c9df4b7e90d6eb8863195b2d9ca3402"],["/2015/12/hexo-backup-and-migrate/index.html","da2f6a2a03b8038beffbc74003de16df"],["/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","acb99ebbeed30c3d667013ab40e45f5d"],["/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","5b056ef73de7d379b2cca9bbdd47d6a3"],["/2015/12/router-reconfig-2015/index.html","efac977578da6a3477cf871feeb49a57"],["/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","5741f7ce1b001810390bbd9e5c822142"],["/2016/01/2016-stepping-further/index.html","2bb57fc397e8aae57e9967784dae4149"],["/2016/01/Android-Study-1-22/index.html","e9663e885ce27bb3c5a959ed65642215"],["/2016/03/2016-03-20/index.html","ac1b64d2bb73c0f878ab3f29bd26c19f"],["/2016/03/GSC-535/index.html","72dfb7be53895e7798d50bce1c91bded"],["/2016/03/gulpjs-1/index.html","7f0b57839071fab83960c71d4896e324"],["/2016/03/hexo-theme-paper-white/index.html","f69d7bec0e1902999b0403140d0eed4a"],["/2016/04/2016-04-19/index.html","4da6aac93a0778db6a95d0074a8d1675"],["/2016/06/2016-06-16/index.html","6e33dfe74d8dbf1ed25b4ced5ee6ec21"],["/2016/09/2016-09-18/index.html","ef9dce76b0846891acfd91767aa8943a"],["/2016/10/2016-10-27/index.html","b39a93ca535d42535dc07a1cdfa77a0b"],["/2016/12/config-switchresx-and-2khidpi/index.html","df5369d760f9767d7c82d904663cbfeb"],["/2016/12/improve-duoshuo/index.html","114adb560cccac6b4ed2d2417d60139a"],["/2016/12/use-travis-ci-your-blog/index.html","c7fcf41b30ebf09d9720a58c0d29fe74"],["/2017/01/2017-iyahoi/index.html","86adeaf60c746a3d11dab08c08ce4d1c"],["/2017/01/webpack-amd/index.html","2cad845a47edf8b9beb7a2c76b0220dc"],["/2017/04/kotobukiya-syaoran/index.html","ce97451ae15099f77e88523d12ec6e57"],["/2017/04/macbook-and-surface/index.html","e554d66c85bc40bd27a3c550ad58d0c6"],["/2017/04/uc-hyakuya-yuichiro/index.html","305fd5c4bb20a26cb74e8c821fe4c6aa"],["/2017/06/noragami-seichijunrei/index.html","ef2b61ff2025712a433d7e8c3e7fa99a"],["/2017/08/cross-compile-55-libev/index.html","896b4bef3483e187cd8cecf630513bfa"],["/2017/08/explore-service-worker-working-lifetime/index.html","0203e946eeda0ea5cb501b79eb4107b7"],["/2017/08/kiminonawa-tokyo-seichijunrei/index.html","cc15fa4965b25e3e2c597244fab696eb"],["/2017/09/record-user-login-status-methods/index.html","cf82b1d6db33f8ef677f74df4a000a8f"],["/2017/10/vue-typescript-early/index.html","0ace80f640f28e8514930836be699092"],["/2018/04/2017-end/index.html","da3073dec96611f7bac837f5dfcd5707"],["/2018/04/twitter-account-activity-api/index.html","b7e948d38c60c79b0391f66e55ad3e1d"],["/2018/05/buddy-complex-seichijunrei/index.html","14aa6ead6925649f21dd4cc635cfadf1"],["/2019/05/2019-05-16-record-jp-digital-TV-on-nas/index.html","ee9732689ca1dd7d7d74dc67edb95a3b"],["/2019/05/2019-05-17-google-io-tech/index.html","13a7d082b20fa77a90b6866d10916ee5"],["/404.html","f33e31b7b8277ca919c009badc50fd1f"],["/about/index.html","1e15ab6b57274af405f03ac882fd7c4d"],["/archives/2015/03/index.html","4c5ab7d685b54a9c4eb67225130f5f69"],["/archives/2015/04/index.html","99251dfbda047d1b53980b948b8744b7"],["/archives/2015/05/index.html","3644503e2b4582228d59fbaeb5a0e9aa"],["/archives/2015/09/index.html","ae4af72f05f508b77a3586f84b33ea2a"],["/archives/2015/12/index.html","af6cea346f4be45ba19cd322f44b0dfc"],["/archives/2015/index.html","8a9ee33402d91ac2b062bf9edd4e2765"],["/archives/2015/page/2/index.html","6b4f91e23cef6666e3abfd764bd5191d"],["/archives/2015/page/3/index.html","50c4a0140e365dd2dedb3eb64881dc63"],["/archives/2016/01/index.html","12a3f4255bd46a2405374e10a10ee0d2"],["/archives/2016/03/index.html","c000b02583cb2399fb3266fcc27904ed"],["/archives/2016/04/index.html","1e004f9fceeb9b2c4ba46eba1d82c5d6"],["/archives/2016/06/index.html","ee6c76312b26ad29038f86f4d449bb5c"],["/archives/2016/09/index.html","9b92039b720264e0319212c66b49f04a"],["/archives/2016/10/index.html","e9db4f0169b8d1fc15a824cf4a60ce43"],["/archives/2016/12/index.html","24447e8420709e742ac16a71e3d34592"],["/archives/2016/index.html","f1342bc4f5f54037cef453bbda34f9ad"],["/archives/2016/page/2/index.html","5e75d385edebd3653c94a9937466bd9a"],["/archives/2017/01/index.html","eede31577575b7ae607d242c581472b4"],["/archives/2017/04/index.html","57d5e9927153ce5836bd1a8c26913936"],["/archives/2017/06/index.html","b0d93f74aa8a5acb4916c57baa84cbdd"],["/archives/2017/08/index.html","26f020c09e35d10cd2279d5c971ea696"],["/archives/2017/09/index.html","4774f7d84b958aec31ce81de90124e33"],["/archives/2017/10/index.html","c18ba991e1116f08e9ab64fd8023b2a6"],["/archives/2017/index.html","4c908816e8f087a3091dc13e6cf0c10e"],["/archives/2017/page/2/index.html","e68c2dbf8c6622e83739c60d8656e67b"],["/archives/2018/04/index.html","9871a6c4cfcac66ad182be04ad6de993"],["/archives/2018/05/index.html","890c3493ceabd9b103634589ac6a6d76"],["/archives/2018/index.html","3ff936d4d38cbaed4f9779d9694fbf00"],["/archives/2019/05/index.html","a0cfc631c3a46175e060776c1ff21f3a"],["/archives/2019/index.html","7e56a0ef9e6b3beaa82b8e6aadc77d79"],["/archives/index.html","81319b9ab5f84d409015bceb22bd1ce7"],["/archives/page/2/index.html","1ad5827e61ba260358d0066400c476b4"],["/archives/page/3/index.html","c88f83d791f53fc7f63fc07ce74c6211"],["/archives/page/4/index.html","3783e033f2657e589ada455f70eaf8bf"],["/archives/page/5/index.html","9f49802deecb72c5871eedda08fdbfb6"],["/archives/page/6/index.html","f8c885d3801abbad3171524585c43521"],["/assets/images/about-me.png","a066d06c3d9d1fe56c4d921cec7febf3"],["/baidu_verify_YbTSlpWIUJ.html","779049c3a50695ceb3a388ce1e8bc1b9"],["/categories/ACG/Music/index.html","2a6f0d38b2765d2386a9f1fd4c37fa31"],["/categories/ACG/Music/self-copy/index.html","2fd78d7bc1f608a8df756bf99b212a18"],["/categories/ACG/Travel/index.html","7b786e82a418cf022890c56f7f408e93"],["/categories/ACG/figures/index.html","a10d3e24d14914895e4b30678caeacf4"],["/categories/ACG/index.html","891ed1cb543e6d3e5df56d8638bae24d"],["/categories/dev/Front-End-Dev/index.html","b5ec4fb62ae26a7f94300a6ad6385bdd"],["/categories/dev/HTML-CSS/index.html","58ab4bb777f9ad77cde6b8eba7dcaa21"],["/categories/dev/android/index.html","c0609ec89c4cbffd1c498f51c8e95d39"],["/categories/dev/cpp/index.html","83adfd10d60dd0fa1657f89ae641b98a"],["/categories/dev/git/index.html","9fe917d020bfd4a5f9b8bfc1742f6e1b"],["/categories/dev/index.html","b3a026486a2543056be536989e9cd8a2"],["/categories/dev/java/index.html","98828fdd1e48cd7a542b775f13e836e3"],["/categories/dev/page/2/index.html","fa599526ecb36835d911562621e142a4"],["/categories/maintaince/blog-setup/index.html","0edb36c6616988b5b95047b8c05b89f0"],["/categories/maintaince/index.html","1691c05cf840f50aefa4893109769000"],["/categories/maintaince/macbook/index.html","e5d5510b1b9879e2bfa36fb7eeb383a5"],["/categories/maintaince/router-config/index.html","720bbaa1e6d25e0119ee346d29570c9d"],["/categories/notes/index.html","9bbc82cb15b45197f0fb4e0609a92f30"],["/categories/tricks/android/index.html","80064a76a23afc43344dd1aa77404f8b"],["/categories/tricks/index.html","027dc547d6b3a4241b319e4942d803a7"],["/categories/uncategorized/index.html","75a1ae6b6ca37415e6f98cc3e554049e"],["/categories/works/Front-End-Dev/index.html","6b7985d667eed5ba6e2c6e39b6ccdd10"],["/categories/works/csharp-wpf/index.html","5f753c9e4310e4fcf9c8c27df875af8b"],["/categories/works/index.html","d546cea5d0bfd1e110b0288d3a41813a"],["/css/seichi.css","42693f35c4c482207368dd363ea27373"],["/css/style.css","1220ea645f73adefdf529a2abd3ada59"],["/google311213f0c8d812a9.html","51f1ee3c2f13a21a1a40b3dae4954454"],["/img/coderwall.png","1976fe70f1ee8ed243e0975402e06a2d"],["/img/delicious.png","952d9b54d8bcfe7b998f67ff48c4dbce"],["/img/douban.png","d42a163f932100e621d22732db34ecdb"],["/img/facebook.png","4bd685f6c9fdaccabf07bdd52173facb"],["/img/github.png","3c4b6267a1a3fedebdc7d089610ecfe7"],["/img/google.png","c385f5304465716b2d6c9ada94c657ab"],["/img/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["/img/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["/img/linkedin.png","4c72c4896f3c23f736cb1ad08f0c866e"],["/img/mail.png","38a7b8302dac028bf03b22d228938abf"],["/img/pinboard.png","9b6186cb97adbe50311f94e50f2392cf"],["/img/pinterest.png","e1b8e655d1b99b40ebcbd96977ae234e"],["/img/rss.png","ec8cf9b5a98011aa75cc0a4f25024dc9"],["/img/scrollbar_arrow.png","be5381cedbd6b778b1d92e224fd71cf7"],["/img/stackoverflow.png","039128ececb47b33bccedd98dc9fc809"],["/img/twitter.png","d2289a4936fefa41d9f92cf89939be5b"],["/img/weibo.png","b382032b316ee38c6d537fe9d36ae54c"],["/img/zhihu.png","e6352c0e1957beef3009268ae747c3aa"],["/index.html","86f791085544edadee73aba4e56d31fb"],["/ja/2015/03/WNDR4300-setup-log/index.html","6da68984f6dfe699e1d12bd258f407e9"],["/ja/2015/03/android-hostname-change/index.html","6f61b958b8bd25c058018593bdf130c9"],["/ja/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","0e275e8d81efb1bf8ad4226b26b99c6c"],["/ja/2015/04/android-chrome-issues-with-webpage/index.html","a04bd61432686b82f769f20a210faa18"],["/ja/2015/04/cpp-study-log/index.html","50328f2bb0413b1e4e1181787c93d09f"],["/ja/2015/04/github-pages-ssl/index.html","d5d3c9fd4b2b6239c853d642a97e449f"],["/ja/2015/04/hello-world/index.html","2e9acf48e3ca7d58c16f4a5bbffab0f5"],["/ja/2015/04/hexo-setup-log/index.html","ae93b716c4d0f55fdf6be157fecc16ff"],["/ja/2015/04/self-copy-cd-inazuma-1-html/index.html","b3099d43d8d695a48ec744941ed9936a"],["/ja/2015/05/cpp-inherit/index.html","8b7f6e83a892dcaf4759d4f9f55d06b4"],["/ja/2015/05/cpp-polymorphism/index.html","73dbc19116ba8672b5c55629c504ca98"],["/ja/2015/09/android-root-ota/index.html","8ebfa845cd8f97f58794e8306cb5b3b6"],["/ja/2015/09/java-learningNotes-1/index.html","e3be409047860d3c99615b5440991334"],["/ja/2015/09/newblog-newlife-2015/index.html","33f83c5a47462dbddf683fe9d19ef3f2"],["/ja/2015/09/router-rebuild-2015/index.html","bb24ae34c543cdf0a3e8ff64fa4112b7"],["/ja/2015/12/2015-12-21/index.html","acec2e4938c76f69c2d12b5dcc8e3127"],["/ja/2015/12/PixInTouch/index.html","1a5400f3f888ce0ca5b48b3075546047"],["/ja/2015/12/git-study-1/index.html","3a6d494498fbb57bc95bc2fc2904d51f"],["/ja/2015/12/hexo-backup-and-migrate/index.html","8e604373cd7ffab0da4515dda54d67ef"],["/ja/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","9255474c563e5c658e72207e3cf7712c"],["/ja/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","3109acbe60fa3124c330f5b5376a9271"],["/ja/2015/12/router-reconfig-2015/index.html","56abdc57db464f5d6a78ed5efc32f4a6"],["/ja/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","8194737c8f4b0285cafbeadce96c905d"],["/ja/2016/01/2016-stepping-further/index.html","cc2c448caaa89a114b70b877a542e4c6"],["/ja/2016/01/Android-Study-1-22/index.html","5767d0d1c0fb936b7dff1cbf0cbabf8a"],["/ja/2016/03/2016-03-20/index.html","e9cd08424a773172bc21db6155fe8137"],["/ja/2016/03/GSC-535/index.html","b115ee03b4e3db5c33307b1afc545554"],["/ja/2016/03/gulpjs-1/index.html","25356fadfe2cc70b50cfb254715e5c4d"],["/ja/2016/03/hexo-theme-paper-white/index.html","0915ee6eab0af6849660295eabedbb6e"],["/ja/2016/04/2016-04-19/index.html","78c29e0774df015ff4bfa0f17e46a3ca"],["/ja/2016/06/2016-06-16/index.html","594e199c5866d88f2fcc7ccb64b80cc6"],["/ja/2016/09/2016-09-18/index.html","f76333b5fb5f9f2195d1bd6e0e9c7367"],["/ja/2016/10/2016-10-27/index.html","254afcdd45a75bff149c884c4af19db6"],["/ja/2016/12/config-switchresx-and-2khidpi/index.html","f20a8bd891203d06caff1e8fad7c244d"],["/ja/2016/12/improve-duoshuo/index.html","2fab8484c9ca048ee83db9dd35073651"],["/ja/2016/12/use-travis-ci-your-blog/index.html","6c67e93d90e9b7d67a2185074e84c05d"],["/ja/2017/01/2017-iyahoi/index.html","3f74a0e82beea5d81e0a35bf54f3fdf6"],["/ja/2017/01/webpack-amd/index.html","4d843a999ee08126637cb8a0217dc183"],["/ja/2017/04/kotobukiya-syaoran/index.html","9bbc45528bb9596cf4bdcef8443ebfc2"],["/ja/2017/04/macbook-and-surface/index.html","11f43fc2afdc53035ecb89aa4e44e3e6"],["/ja/2017/04/uc-hyakuya-yuichiro/index.html","a3c367b75fb007c9b4bbeec609a7e8ac"],["/ja/2017/06/noragami-seichijunrei/index.html","f350c9d6616823b109414c86d3a7dbe2"],["/ja/2017/08/cross-compile-55-libev/index.html","5fd1e5608f78ff15b97a3b7ff8a5e288"],["/ja/2017/08/explore-service-worker-working-lifetime/index.html","0cda386237aa729f8b0f0e34ab852a50"],["/ja/2017/08/hello-jp-world/index.html","46e0841f81d9fc83ebbae1d1b8568278"],["/ja/2017/08/kiminonawa-tokyo-seichijunrei/index.html","747498a7dd73ae9e8a60ed2216c37ed9"],["/ja/2017/09/record-user-login-status-methods/index.html","8937ae2f0fa30785faf231d82595a95a"],["/ja/2017/10/vue-typescript-early/index.html","44e89d23755dfdcc0d0ffda6870b1b77"],["/ja/2018/04/2017-end/index.html","260354993828a094479a76a3925d66dc"],["/ja/2018/04/twitter-account-activity-api/index.html","90e0612d87d885b69a1f2c1e8cd5e0eb"],["/ja/2018/05/buddy-complex-seichijunrei/index.html","82da34f1e08aff821b74f7effa00893b"],["/ja/2019/05/2019-05-16-record-jp-digital-TV-on-nas/index.html","798bb0b562debf9b7388fec44d829b7e"],["/ja/2019/05/2019-05-17-google-io-tech/index.html","f8e1b6775e144ad3e1e4110de13059ed"],["/ja/404.html","e8ed13ce241c45d4fc4a40056464f700"],["/ja/about/index.html","dad77cbd782b8c13a0c5c0b9f769e889"],["/ja/archives/2017/08/index.html","53ef6d64b13b6b6740c091d05d24087a"],["/ja/archives/2017/09/index.html","9549f577852f19e11821f636eb6921cd"],["/ja/archives/2017/10/index.html","573a0da8cadbf14700d7572c7c032c6d"],["/ja/archives/2017/index.html","16862276846b7481bf719c838127daa5"],["/ja/archives/2018/04/index.html","b37c21d9f18e3294e4a30f3a61d3827b"],["/ja/archives/2018/05/index.html","a11ce47e0e6098d055146b6c14c8841f"],["/ja/archives/2018/index.html","363781582f437400af4fa07b197d8ded"],["/ja/archives/2019/05/index.html","67c0f238de717d99b8e6f170ee693e4c"],["/ja/archives/2019/index.html","4f1c62370c00b7af636935181a8ad33d"],["/ja/archives/index.html","b00054cd805d802ee0bd07c1360cf8c4"],["/ja/categories/ACG/Travel/index.html","fd6ae28ab8fba2114798be0cfc610d33"],["/ja/categories/ACG/index.html","510a339d58e286ad02f978e15ee97de1"],["/ja/categories/dev/Front-End-Dev/index.html","5c2c3ee0613afb5e025de6ced29ea7b5"],["/ja/categories/dev/index.html","88c074f1ad78fbba4fc6e519f506b1e9"],["/ja/categories/uncategorized/index.html","2b3730e4c43426862dba6fdde7ee8af8"],["/ja/index.html","4b782ce7d2f5bffcfa82857bc03ba3a5"],["/ja/nihongo-test-page/index.html","00916dfb90ad7373db63a0e1cbfcd282"],["/js/instagram.js","7d7a9e2e7286ba2d5b6d12068214f0c3"],["/js/jquery.lazyload.js","28c23bc40080d31144776e9a8736837f"],["/js/main.js","2e92f29b0cd90bddc062915eb46a858c"],["/js/mobile.js","dc84e1287e89e3c1bba67fd47b8656b1"],["/js/nextpageajax.js","c3bde8d7bb1f967fb319f57a187ea51a"],["/js/pc.js","631b535186aab0e262485ee2bf9da628"],["/js/ripple-effects.js","b9c11903da0ef5c3d790b41369c3137e"],["/js/share.js","de52ac3d43e43c1951a08b0804458a8e"],["/js/totop.js","661822968b58fd439f46bd54031238d6"],["/keep_origin/affiliate_jump.html","71bf6d72c5d080ec2b3f8ecfae3d71ed"],["/nihongo-test-page/index.html","0309b5dbaddc5c77875250068e50dc57"],["/page/2/index.html","624c9c6c1d772fad4b1d692288a8fee9"],["/page/3/index.html","42e42667dc3ef9864bd7680823f4ce1e"],["/page/4/index.html","e4dc912c6e7fd557edcfe3618cedb961"],["/page/5/index.html","206f2ad22088a72340232575f9fb489a"],["/page/6/index.html","261bb487dd57539376d652f9f4f872f6"],["/photoswipe/default-skin/default-skin.css","426e8908d7426603ca203b6d16281b1e"],["/photoswipe/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photoswipe/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photoswipe/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photoswipe/photoswipe-ui-default.js","0c9196aa8943ce8a8045c9f4cc62915c"],["/photoswipe/photoswipe-ui-default.min.js","9517baca43cd4e9cb23ff337fbc1baa1"],["/photoswipe/photoswipe.css","7dc0df107159e1be66d4464171561e5b"],["/photoswipe/photoswipe.js","a8d26ff34943c859884acbd6b2531315"],["/photoswipe/photoswipe.min.js","f5cd6479c4e4682545a9603e6b50c741"],["/setup-log/blog-setup/github-pages-ssl.html","d5e315a4f7725d0c5a828ab2ac48dfe3"],["/sw-register.js","b77222cd608ac781e221a8f7d053cc78"],["/zh-cn/archives/2015/03/index.html","cff000d35e82ce174eead06f2dffd427"],["/zh-cn/archives/2015/04/index.html","5a19817b51af3b2d6a57dd1db365c50e"],["/zh-cn/archives/2015/05/index.html","30f7af1ee5db2a63ea443e7b1f15cf75"],["/zh-cn/archives/2015/09/index.html","a0dcc65e2301759ced17fe299c9deb80"],["/zh-cn/archives/2015/12/index.html","d6929402b5200bb0f13232f304dad721"],["/zh-cn/archives/2015/index.html","e35e6ceaa96c1e8fd04aae30de6be0c9"],["/zh-cn/archives/2015/page/2/index.html","0fe8fb22eb5997040851efe1e3982457"],["/zh-cn/archives/2015/page/3/index.html","8bc4ccdbb97f68f081b3176b39578c9c"],["/zh-cn/archives/2016/01/index.html","ad758d3cb9a40eaa922dec31266fbb4b"],["/zh-cn/archives/2016/03/index.html","a6439f67932a957dd28e6647a3995789"],["/zh-cn/archives/2016/04/index.html","fb5e31d1ae9beb3e37272a8521fd2dfb"],["/zh-cn/archives/2016/06/index.html","9a6e02fdb824430f6679485a37828bd3"],["/zh-cn/archives/2016/09/index.html","5bca6aa602bb714d0ab0ae5002df9c02"],["/zh-cn/archives/2016/10/index.html","8bb0a5117aa09a40f9683cd6cb2fb398"],["/zh-cn/archives/2016/12/index.html","27b33446d7eb7b088dcaa772c4389e84"],["/zh-cn/archives/2016/index.html","371d4940c5fd86a25f2376c12948aa16"],["/zh-cn/archives/2016/page/2/index.html","753b6467d87f31cccd7c6dfee93adddc"],["/zh-cn/archives/2017/01/index.html","fec4b9a3f497920e4223feaa339111a0"],["/zh-cn/archives/2017/04/index.html","cffc9580ed40903227456c1591aa54bb"],["/zh-cn/archives/2017/06/index.html","1ccdad2fd3c1718c37e42fad41fc613d"],["/zh-cn/archives/2017/08/index.html","3e8410a4c81c03346919359cb113098a"],["/zh-cn/archives/2017/09/index.html","77935b5dbf8a222189fa5dfdffaa5838"],["/zh-cn/archives/2017/10/index.html","7df0f33f7c788846f45f6716720d8a1b"],["/zh-cn/archives/2017/index.html","e3ca28fae57f2c52eeb1de2be0e67751"],["/zh-cn/archives/2017/page/2/index.html","2def5260a5a41875a4f3fbcd92205d20"],["/zh-cn/archives/2018/04/index.html","e680f0ddf20d44de1510b22e16de0793"],["/zh-cn/archives/2018/05/index.html","b9f92fbb901d63356b2914007ea74dec"],["/zh-cn/archives/2018/index.html","6e5d94dfdffc681c13678cd64f115689"],["/zh-cn/archives/2019/05/index.html","e02072f6314af45290e087e025d8a2e5"],["/zh-cn/archives/2019/index.html","dc8e20084d2dbcbd9f793d1e4a1a14d8"],["/zh-cn/archives/index.html","0d443775c1053eb4a245c97401836811"],["/zh-cn/archives/page/2/index.html","3698adf46491facaea7e6a3b4e3eb02c"],["/zh-cn/archives/page/3/index.html","2d8afd2cbe5c31a178b969285b5f193f"],["/zh-cn/archives/page/4/index.html","ff41a7437fda5a1bcbb443454111bcfc"],["/zh-cn/archives/page/5/index.html","b17d5bb878c954d56e8aa9324170229e"],["/zh-cn/archives/page/6/index.html","68d3a0a203c2b9b6757935c59046adc8"],["/zh-cn/categories/ACG/Music/index.html","25e0c0e4870e6989deb13d8231e8008a"],["/zh-cn/categories/ACG/Music/self-copy/index.html","7ec3d09dbc9509e9f6a460ddfc64fac3"],["/zh-cn/categories/ACG/Travel/index.html","e48b2184b012c54685074baf5a899421"],["/zh-cn/categories/ACG/figures/index.html","bf3bbe1399e4d0a9e9d25aca99179c67"],["/zh-cn/categories/ACG/index.html","c93d97e32d376821cd6dfd12a2d7b7df"],["/zh-cn/categories/dev/Front-End-Dev/index.html","72dee69e6c2ed300b15ab13279ff9318"],["/zh-cn/categories/dev/HTML-CSS/index.html","7285d26d1f9637ba355ca2b0a6f006f0"],["/zh-cn/categories/dev/android/index.html","f97d6c515510fd2ab3fbef8a07cf44be"],["/zh-cn/categories/dev/cpp/index.html","288f21aac1a73ff7352ea61716dca2ce"],["/zh-cn/categories/dev/git/index.html","fa301359b4f45290b3dd880a28c61dff"],["/zh-cn/categories/dev/index.html","aade335acca6477a1a0cc00c80007a9f"],["/zh-cn/categories/dev/java/index.html","3ec1854475fb68b511c460c507f1041d"],["/zh-cn/categories/dev/page/2/index.html","a666a944106181fd2b6da713f92540a9"],["/zh-cn/categories/maintaince/blog-setup/index.html","52b3018e2cf74e56859270401d3e0485"],["/zh-cn/categories/maintaince/index.html","386cb185c5eb11a702ad0cdb06624c82"],["/zh-cn/categories/maintaince/macbook/index.html","c5aa753d8a95c44a52d4a5fc7f992cb0"],["/zh-cn/categories/maintaince/router-config/index.html","3caf52add34afdaa37020cc21232f240"],["/zh-cn/categories/notes/index.html","d37e93209ecb238a8cbad83862b6348a"],["/zh-cn/categories/tricks/android/index.html","9140809bdf937ac6b9e480bbe53f9f5f"],["/zh-cn/categories/tricks/index.html","2aca416e209fecfd15f0df84f5b56974"],["/zh-cn/categories/uncategorized/index.html","f351af14c3e4beae873ea00e24624cef"],["/zh-cn/categories/works/Front-End-Dev/index.html","901579d8736ae3d35a39cafc98f8379d"],["/zh-cn/categories/works/csharp-wpf/index.html","a016b3bbf78ea4f25a231bf5df814942"],["/zh-cn/categories/works/index.html","1f5885061d40f761d06684ca5fa9f6e6"],["/zh-cn/index.html","2e63be07b132359ebdfc13d923e35153"],["/zh-cn/page/2/index.html","6fee3c025f60baeccfb51cf4cb4386fc"],["/zh-cn/page/3/index.html","47a4e5b7c1318d9db0e2108886af4dcf"],["/zh-cn/page/4/index.html","790f0c4cb8493dcc2c3c9763460bffcb"],["/zh-cn/page/5/index.html","aba2e9e47c26d7a73c62464e92acd3b3"],["/zh-cn/page/6/index.html","dd5fab48708c9fe75887cffbc982a338"]];
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
