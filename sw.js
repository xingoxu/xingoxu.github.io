/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/03/WNDR4300-setup-log/index.html","94c4a15686037010a6eaf2bec5789f14"],["/2015/03/android-hostname-change/index.html","8c072a7ba3f05980e8fcac67eefd7af6"],["/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","c4b0e02474d36792a6681ffad07473d7"],["/2015/04/android-chrome-issues-with-webpage/index.html","896839866a6d0de6c93b1187eff6d4aa"],["/2015/04/cpp-study-log/index.html","7c1018a740637be7cd0f5542628b7572"],["/2015/04/github-pages-ssl/index.html","29065cc947f4c72473993f308dde3146"],["/2015/04/hello-world/index.html","b79b993d6a0f4262d0ce8926310c4b64"],["/2015/04/hexo-setup-log/index.html","1597ccc9dcc093bdde0471328ce5ec1c"],["/2015/04/self-copy-cd-inazuma-1-html/index.html","37eb1bd56e07675f1bfaabd44d44b3b5"],["/2015/05/cpp-inherit/index.html","f9e93e6e45d4ab7d839cf766baf174b2"],["/2015/05/cpp-polymorphism/index.html","8d760ed3dcfb2cd104582f29cab21b1a"],["/2015/09/android-root-ota/index.html","f2414d4c8093bdfc88756bb64c0fe25f"],["/2015/09/java-learningNotes-1/index.html","a92d10f649d97baa28e27ccfcbaa0d16"],["/2015/09/newblog-newlife-2015/index.html","21ea5be8e505dad32c964c239837ae05"],["/2015/09/router-rebuild-2015/index.html","4eb649236aa74f3b43745a04fc7d170b"],["/2015/12/2015-12-21/index.html","20ea9e08972647ba7e16c83319c605b2"],["/2015/12/PixInTouch/index.html","a41f790d02ec312dc35c5a8d9771f565"],["/2015/12/git-study-1/index.html","9d139bfed5680d0c1f338ce7d6745d7c"],["/2015/12/hexo-backup-and-migrate/index.html","5250fdc69c94f5cfed95450fb0b671d9"],["/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","6b135c3e5552a24c2a04681e82343830"],["/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","4107d431dd9f8f306a71809d32aab289"],["/2015/12/router-reconfig-2015/index.html","b2c7e074d10028c4e25786e8a78153f7"],["/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","4bccf22ab9ae2bc3808452e45a11b1b7"],["/2016/01/2016-stepping-further/index.html","6673caaf7375b8cd9d6a1ec8d41fa97f"],["/2016/01/Android-Study-1-22/index.html","c5870f41d06611da2fc094fd47e9c784"],["/2016/03/2016-03-20/index.html","8bcbd8554f7c57c06b84ef9de7af5919"],["/2016/03/GSC-535/index.html","4fb7f69bd99ef9db49ce8f31d88485b2"],["/2016/03/gulpjs-1/index.html","a033f09a143b16f907f5dd478ce29676"],["/2016/03/hexo-theme-paper-white/index.html","d64ddc57048922c5548c296232535e31"],["/2016/04/2016-04-19/index.html","85ff20852fe8254633e26cf05df6ecb9"],["/2016/06/2016-06-16/index.html","34645aba97dd0316d634fa9c5d5185ff"],["/2016/09/2016-09-18/index.html","8a3e89c3846ef58f2eaa264a20f9d1ab"],["/2016/10/2016-10-27/index.html","107ce2d83e9231dabdb1b4e88910a5b6"],["/2016/12/config-switchresx-and-2khidpi/index.html","a4e6732c5a7ac43b6004183c1eb98ce3"],["/2016/12/improve-duoshuo/index.html","af521dfa20925c30735a68cd9827e6fe"],["/2016/12/use-travis-ci-your-blog/index.html","2b6396d94f91895360c940ea05debe05"],["/2017/01/2017-iyahoi/index.html","98df6803c515c4f05d1e411e79efffe7"],["/2017/01/webpack-amd/index.html","e1d55d089ef3cc1cfc899c9062e5b973"],["/2017/04/kotobukiya-syaoran/index.html","adc9dc75b9eb4550867cbd6b220e8301"],["/2017/04/macbook-and-surface/index.html","272ecbcd9c94d032b2ced9be2844c8b3"],["/2017/04/uc-hyakuya-yuichiro/index.html","fbccf2caa94c77c76ffcb4f19f71523c"],["/2017/06/noragami-seichijunrei/index.html","9336f6330c72249b8d18a5d3e3ea2421"],["/2017/08/cross-compile-55-libev/index.html","7ea121c0796708fa0bbdecd9460cc37c"],["/2017/08/explore-service-worker-working-lifetime/index.html","ced069eb5f3a7e9366b7d521c80621c0"],["/2017/08/kiminonawa-tokyo-seichijunrei/index.html","5f5241a101e6db610b323cadfaed5be9"],["/2017/09/record-user-login-status-methods/index.html","5de849746fa4c89b48c8b8e5d15996df"],["/2017/10/vue-typescript-early/index.html","70264e496c59fcb3db1782fa007863e3"],["/2018/04/2017-end/index.html","f742af6f1a6ea2993aa0a550adebe772"],["/2018/04/twitter-account-activity-api/index.html","cd20a814ebc8c78dfa86551ec68f8986"],["/2018/05/buddy-complex-seichijunrei/index.html","86dd4735a7ad4ebecb5fe4f04c55d758"],["/404.html","fc0ecdc3f22b18c5d9a7190375dff17d"],["/about/index.html","7cb8c4ff4cae88501ddccf584fb717b1"],["/archives/2015/03/index.html","a9da0974aea63901ba1911cb5f912ad9"],["/archives/2015/04/index.html","71af1dc7a178b08a8906445f101c4592"],["/archives/2015/05/index.html","c085642d59e0a411e6b96fbde3944767"],["/archives/2015/09/index.html","84b6d5ecb5a971d5f5cad38698cd3351"],["/archives/2015/12/index.html","cd89beb34f4e55349bba5aab28ccd571"],["/archives/2015/index.html","d716903864ef02a197e62b4ddb63f286"],["/archives/2015/page/2/index.html","a6ff00327c767946355517e2ff55bfb4"],["/archives/2015/page/3/index.html","e4a0ff27cf3d59f9c8b9abb92f0fe298"],["/archives/2016/01/index.html","91aa500869ff519842ee9ddb03e701d4"],["/archives/2016/03/index.html","dd8c4090222992f9df080b96cd5353a6"],["/archives/2016/04/index.html","0491f6862289315d0009f35f342fcaae"],["/archives/2016/06/index.html","1eb6e25e23ce45872047de0276585abe"],["/archives/2016/09/index.html","983ad76074059dbf71c2eda22dbf5051"],["/archives/2016/10/index.html","80d86c636234c71386d84dd2c82d9b66"],["/archives/2016/12/index.html","f021d2b25e20bc73573348939d386ba5"],["/archives/2016/index.html","17d275a7cc038200ea1092b27edc0495"],["/archives/2016/page/2/index.html","6fde6c848ac7cb65efed96684cf31539"],["/archives/2017/01/index.html","c257599f056a3d5e1ce9c789a73b7a9a"],["/archives/2017/04/index.html","9db62ff74d6fe3acf0d7377810beee62"],["/archives/2017/06/index.html","0c457dd9e3cdcf1614a1af0ab19600f5"],["/archives/2017/08/index.html","59cff9815ff00043047680ad5f68e15e"],["/archives/2017/09/index.html","5de234da1120cf52917ad0ec0d62dc5a"],["/archives/2017/10/index.html","908bb121968f51e9ebc8a6c46ea74ad6"],["/archives/2017/index.html","f9ff13da796cdf061c3106a16af9b3f8"],["/archives/2017/page/2/index.html","d70f2f91ed5593db5e8f4331733dc255"],["/archives/2018/04/index.html","625bd6113efbcbeab32fc693974eb2ce"],["/archives/2018/05/index.html","34b47260b6d266dd1c08e27a3d0dcf5e"],["/archives/2018/index.html","46681e4e6a66c349b38e2033d6f526a6"],["/archives/index.html","025e86a01d1488c4d7ae1f9fb473db08"],["/archives/page/2/index.html","456e41bbc46fb53b51770ea6f0c84bb3"],["/archives/page/3/index.html","3fce51bd574a988cdfd66a58aa8dfe1c"],["/archives/page/4/index.html","eb9b88ad2b6bfac8e8bd10e5f8e8a07f"],["/archives/page/5/index.html","249f2a5321872481deed8a6588db36da"],["/assets/images/about-me.png","a066d06c3d9d1fe56c4d921cec7febf3"],["/baidu_verify_YbTSlpWIUJ.html","779049c3a50695ceb3a388ce1e8bc1b9"],["/categories/ACG/Music/index.html","8a3fbbe02ea00b4b37237f703d8da0bd"],["/categories/ACG/Music/self-copy/index.html","32b90db32b73548ff0c0e572346a303c"],["/categories/ACG/Travel/index.html","7ef7bd2e3caa4306bba2ef6ab287fdb7"],["/categories/ACG/figures/index.html","ecfafe4b7ba856d54505b805beabe4a2"],["/categories/ACG/index.html","4162ebf7535f14d0debee927a9ba5ff9"],["/categories/dev/Front-End-Dev/index.html","049d1a0d03cd0d7212a0ea8f43c82a96"],["/categories/dev/HTML-CSS/index.html","e073c8918ab1a7a97070d6e74f65cd65"],["/categories/dev/android/index.html","96765326e843bdf1efa61d0746fb0db8"],["/categories/dev/cpp/index.html","8f043e771cea444d16b0cc8270d520ab"],["/categories/dev/git/index.html","88b754ff0f6571818a1e1e270089f8cf"],["/categories/dev/index.html","45cb4a0013fcf4fe9f90b2d0063d8ff0"],["/categories/dev/java/index.html","d3aefc31ef031018e4dbc09b79e44e7a"],["/categories/dev/page/2/index.html","248a4ba2033a5d57bb2dfc5c2394ba99"],["/categories/maintaince/blog-setup/index.html","986c79b4ec6bfd1ee14ee26120c0bb31"],["/categories/maintaince/index.html","a6a91ce30e044251215e72f203f2576a"],["/categories/maintaince/macbook/index.html","35987ca81c146d8afe6ee7e7db7d127a"],["/categories/maintaince/router-config/index.html","dbfa81971a74b7fcf6f840deef89d87d"],["/categories/notes/index.html","28d7cb866c69f5e758bf9045382d2544"],["/categories/tricks/android/index.html","49b224c5c0d0b76a1414eb4451b54c95"],["/categories/tricks/index.html","8509f0470e7d0f564778e5f86c230ca7"],["/categories/uncategorized/index.html","1a9df327fde388f55d0d4fe3d5759e75"],["/categories/works/Front-End-Dev/index.html","303bbf058b08283e45ee35939bda3633"],["/categories/works/csharp-wpf/index.html","423e6153ef82cc07e187252fa74ce2d1"],["/categories/works/index.html","44ce4f270025ed0749a5619b4381c01c"],["/css/seichi.css","42693f35c4c482207368dd363ea27373"],["/css/style.css","3a889bdecdea7d51589943325864751a"],["/google311213f0c8d812a9.html","51f1ee3c2f13a21a1a40b3dae4954454"],["/img/coderwall.png","1976fe70f1ee8ed243e0975402e06a2d"],["/img/delicious.png","952d9b54d8bcfe7b998f67ff48c4dbce"],["/img/douban.png","d42a163f932100e621d22732db34ecdb"],["/img/facebook.png","4bd685f6c9fdaccabf07bdd52173facb"],["/img/github.png","3c4b6267a1a3fedebdc7d089610ecfe7"],["/img/google.png","c385f5304465716b2d6c9ada94c657ab"],["/img/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["/img/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["/img/linkedin.png","4c72c4896f3c23f736cb1ad08f0c866e"],["/img/mail.png","38a7b8302dac028bf03b22d228938abf"],["/img/pinboard.png","9b6186cb97adbe50311f94e50f2392cf"],["/img/pinterest.png","e1b8e655d1b99b40ebcbd96977ae234e"],["/img/rss.png","ec8cf9b5a98011aa75cc0a4f25024dc9"],["/img/scrollbar_arrow.png","be5381cedbd6b778b1d92e224fd71cf7"],["/img/stackoverflow.png","039128ececb47b33bccedd98dc9fc809"],["/img/twitter.png","d2289a4936fefa41d9f92cf89939be5b"],["/img/weibo.png","b382032b316ee38c6d537fe9d36ae54c"],["/img/zhihu.png","e6352c0e1957beef3009268ae747c3aa"],["/index.html","74cd0fed1c16d9d4018ed7a84ea1d05b"],["/ja/2015/03/WNDR4300-setup-log/index.html","fc99fbfa9bb283a2a197df83f1784670"],["/ja/2015/03/android-hostname-change/index.html","3fbfa87541f731aff8cfac5781ee3535"],["/ja/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","97acd0b9b4f6fa39185044c47261dcd4"],["/ja/2015/04/android-chrome-issues-with-webpage/index.html","aaa15c10b60ceb006a7cbdfe05bf55f0"],["/ja/2015/04/cpp-study-log/index.html","26fce4853effa36573809f0ce09e62f4"],["/ja/2015/04/github-pages-ssl/index.html","a57ee59f12dc7d26abb8ea68cc2b9051"],["/ja/2015/04/hello-world/index.html","51b0609bc049286f05e279a4add1b0f1"],["/ja/2015/04/hexo-setup-log/index.html","86d21315f9823f8dd0ec008292082555"],["/ja/2015/04/self-copy-cd-inazuma-1-html/index.html","97c070d4f614abbd407b6aa23390513b"],["/ja/2015/05/cpp-inherit/index.html","efd0b139030436f07ff4e6cc588bfe93"],["/ja/2015/05/cpp-polymorphism/index.html","39d718f8eeb32aab0503713447ddae93"],["/ja/2015/09/android-root-ota/index.html","7fcfab6df6272ca6630eb4b1151bead7"],["/ja/2015/09/java-learningNotes-1/index.html","09a974f83cb92e4feae69885fb5ec0ed"],["/ja/2015/09/newblog-newlife-2015/index.html","3607c074464fd07a21965f1b4f599458"],["/ja/2015/09/router-rebuild-2015/index.html","c168c69c65c1dfa238e659c1c0d8bd6b"],["/ja/2015/12/2015-12-21/index.html","f206115f44a587baa1381dd65afc0445"],["/ja/2015/12/PixInTouch/index.html","c563613e227775f2e5a03f4b14e6551e"],["/ja/2015/12/git-study-1/index.html","b3499f01dd6770ffc119c7468e4a308d"],["/ja/2015/12/hexo-backup-and-migrate/index.html","8c2433eb4db484cbfbb496bc34f86cda"],["/ja/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","ce001f9f7b6d6096cedf284f62c3a5bf"],["/ja/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","ce27036502a86bc880fa004fd53251ec"],["/ja/2015/12/router-reconfig-2015/index.html","38666172335bc3691fca21f429a1d2fb"],["/ja/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","d7118d177c8f75002397f233537a7c7a"],["/ja/2016/01/2016-stepping-further/index.html","caf789abf83eb1e9784452c517f43177"],["/ja/2016/01/Android-Study-1-22/index.html","d67deb51cdf1590675f9c85843b8cc76"],["/ja/2016/03/2016-03-20/index.html","b657e15fcdb860284b867764f8f82164"],["/ja/2016/03/GSC-535/index.html","44656e6fe43586fe333dfdc1323a8c1a"],["/ja/2016/03/gulpjs-1/index.html","d48359d90931f198c6a4d17ed0895993"],["/ja/2016/03/hexo-theme-paper-white/index.html","42f88ff8eb4fdf0071c06b48816ea49e"],["/ja/2016/04/2016-04-19/index.html","8c8a9a04be7045a82dd688a5e7dac873"],["/ja/2016/06/2016-06-16/index.html","7c68d0ee751dbed9e54d6a89b217fe87"],["/ja/2016/09/2016-09-18/index.html","034fdf01e9b7bbe982a7dc659042cbec"],["/ja/2016/10/2016-10-27/index.html","070b7e58351e9b2839b7a4adadc22b68"],["/ja/2016/12/config-switchresx-and-2khidpi/index.html","f0705c430b4f22be46ab6600ec8e7d63"],["/ja/2016/12/improve-duoshuo/index.html","9d284f92b15472a68475be2f8ce810b3"],["/ja/2016/12/use-travis-ci-your-blog/index.html","d864f6aff3cb1190a5c906d1b1b628f9"],["/ja/2017/01/2017-iyahoi/index.html","19a67d01a41a0aefdec217732932dd2b"],["/ja/2017/01/webpack-amd/index.html","70bad3ea87214c2e16612a6a4317bcf5"],["/ja/2017/04/kotobukiya-syaoran/index.html","2b575d3d46ebff30d0537c040c2a2cd5"],["/ja/2017/04/macbook-and-surface/index.html","ae993f70f78f9e62f87ba8a4e42d72d2"],["/ja/2017/04/uc-hyakuya-yuichiro/index.html","09c626785fd1b83d02a6bd2ad7fac45e"],["/ja/2017/06/noragami-seichijunrei/index.html","a7f5d5d668f84af876306c7bd94ac1d9"],["/ja/2017/08/cross-compile-55-libev/index.html","82b6e646cc32947f95a94cba10281a70"],["/ja/2017/08/explore-service-worker-working-lifetime/index.html","004dcfb6f7c79268274903d68569a5ff"],["/ja/2017/08/hello-jp-world/index.html","06471cdc4381c4f79d388fe7d944f8d6"],["/ja/2017/08/kiminonawa-tokyo-seichijunrei/index.html","8d99d75784ffcc393d5389024a0e403d"],["/ja/2017/09/record-user-login-status-methods/index.html","d19101eb2628562f48b571dddf94be9c"],["/ja/2017/10/vue-typescript-early/index.html","c00fcf03f5f53f68b9a8222625ac8f39"],["/ja/2018/04/2017-end/index.html","d4b549784a2bbc03210782d6cf670e5d"],["/ja/2018/04/twitter-account-activity-api/index.html","e965e52a794ec0c2af125c6f47678dc2"],["/ja/2018/05/buddy-complex-seichijunrei/index.html","810d7bcff5877973e702f1518bb07b91"],["/ja/404.html","b56a94426f7c55766ceb3a8ba2f5fdc3"],["/ja/about/index.html","d0b57933f96bf8a7b2136e9a3670adfa"],["/ja/archives/2017/08/index.html","2821c14ac57e9042aea39213e16c4865"],["/ja/archives/2017/09/index.html","aea50e765eb7cffee2a30e352d11b0cf"],["/ja/archives/2017/10/index.html","09cd82092b179e39f673f0e5d45b6d4d"],["/ja/archives/2017/index.html","e2f4c2ff421410d4cdc6989b3cf2b0c7"],["/ja/archives/2018/04/index.html","59225df2527a3c878942580e3899546f"],["/ja/archives/2018/05/index.html","d42890fb8124e3c05e32f53a15feddc7"],["/ja/archives/2018/index.html","7ef063a69340ac4cc2a005c813d7547e"],["/ja/archives/index.html","f7568cba02242d4aef39e8d5c601f240"],["/ja/categories/ACG/Travel/index.html","d6e3219ceb7833b6af68cb126d2c252d"],["/ja/categories/ACG/index.html","1f52bfde41a6fcfbfe56b1fcf03f7e68"],["/ja/categories/dev/Front-End-Dev/index.html","5cec3e59ac9886fd911fafef5568e93d"],["/ja/categories/dev/index.html","a65b1ab667f6a37b088ca15437d98182"],["/ja/categories/uncategorized/index.html","a34b6194db33f653f1127f2f2fdce7da"],["/ja/index.html","40a0eff401a9feb8b82c72e7afb163fb"],["/ja/nihongo-test-page/index.html","60a1569b3a2d51c2a1f27031b939ed2a"],["/js/instagram.js","7d7a9e2e7286ba2d5b6d12068214f0c3"],["/js/jquery.lazyload.js","28c23bc40080d31144776e9a8736837f"],["/js/main.js","2e92f29b0cd90bddc062915eb46a858c"],["/js/mobile.js","dc84e1287e89e3c1bba67fd47b8656b1"],["/js/nextpageajax.js","c3bde8d7bb1f967fb319f57a187ea51a"],["/js/pc.js","631b535186aab0e262485ee2bf9da628"],["/js/ripple-effects.js","b9c11903da0ef5c3d790b41369c3137e"],["/js/share.js","de52ac3d43e43c1951a08b0804458a8e"],["/js/totop.js","661822968b58fd439f46bd54031238d6"],["/nihongo-test-page/index.html","51585094e4c1d3bef1998a154b4b3066"],["/page/2/index.html","bba796a9a7431dd7ae27d9a825b91405"],["/page/3/index.html","dc5f33dc1d6172b632ec78b808598a84"],["/page/4/index.html","7accb26d8980b13548646b0ef8302f66"],["/page/5/index.html","f6401ba603d575ab5245697ab01c2e17"],["/page/6/index.html","1e01eded6591639372e5c3dea190784f"],["/photoswipe/default-skin/default-skin.css","426e8908d7426603ca203b6d16281b1e"],["/photoswipe/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photoswipe/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photoswipe/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photoswipe/photoswipe-ui-default.js","0c9196aa8943ce8a8045c9f4cc62915c"],["/photoswipe/photoswipe-ui-default.min.js","9517baca43cd4e9cb23ff337fbc1baa1"],["/photoswipe/photoswipe.css","7dc0df107159e1be66d4464171561e5b"],["/photoswipe/photoswipe.js","a8d26ff34943c859884acbd6b2531315"],["/photoswipe/photoswipe.min.js","f5cd6479c4e4682545a9603e6b50c741"],["/setup-log/blog-setup/github-pages-ssl.html","d5e315a4f7725d0c5a828ab2ac48dfe3"],["/sw-register.js","8c31c309d24a826703257757ce42c8a6"],["/zh-cn/archives/2015/03/index.html","0dad938c8f22dd0e16656c2a5e33cde3"],["/zh-cn/archives/2015/04/index.html","0406aa1dedfdee786e2b45b60fe60120"],["/zh-cn/archives/2015/05/index.html","cb73886f14666ae0dda13b5f7b8453f5"],["/zh-cn/archives/2015/09/index.html","84a391cd990a66e679b3615fe2c4872d"],["/zh-cn/archives/2015/12/index.html","371f9153064891034ce6e2c69709f753"],["/zh-cn/archives/2015/index.html","6c7c2586cf3c6d07bdce7499a1155490"],["/zh-cn/archives/2015/page/2/index.html","f4b1bc3b37a2bffb39d069834eace140"],["/zh-cn/archives/2015/page/3/index.html","a07a03c457871cf96a55d6118de8f0ab"],["/zh-cn/archives/2016/01/index.html","bd672312da07dc87ae748f24ea967f07"],["/zh-cn/archives/2016/03/index.html","3bcaa92436c885ef26f323f208889824"],["/zh-cn/archives/2016/04/index.html","1a64a995e3eb7f559a9752bcde0fc340"],["/zh-cn/archives/2016/06/index.html","2076df6b06fd778aca8cef84f0b389bf"],["/zh-cn/archives/2016/09/index.html","e34538cf3eb4bf8993bcf4056d554aad"],["/zh-cn/archives/2016/10/index.html","b73e115ec8dc5e841e44bdd9e18aa44e"],["/zh-cn/archives/2016/12/index.html","02db692294e960317206b0c65aefd485"],["/zh-cn/archives/2016/index.html","a203c40dc91c024fe8d150914cbef93f"],["/zh-cn/archives/2016/page/2/index.html","d05f37caa21b10dccc90089443c927b9"],["/zh-cn/archives/2017/01/index.html","7774eecfe96be09a080d3bd5b9d97d32"],["/zh-cn/archives/2017/04/index.html","9010979e253cff763fb99216d720f36a"],["/zh-cn/archives/2017/06/index.html","14a5f77637fb736a7e9f687b0a0dc769"],["/zh-cn/archives/2017/08/index.html","c29e5553a86c084cec2edd68b4f32367"],["/zh-cn/archives/2017/09/index.html","6d333ce78ccc06fe254832177776dfa3"],["/zh-cn/archives/2017/10/index.html","cad26cdfca1bb396a212f49966ac6144"],["/zh-cn/archives/2017/index.html","492685136e23b4f2461fbc8404d41f64"],["/zh-cn/archives/2017/page/2/index.html","9b997de415da8457281e30e6c657ccfa"],["/zh-cn/archives/2018/04/index.html","ad5704e86d94f728e3a1e328c5004312"],["/zh-cn/archives/2018/05/index.html","731dcb5af7ab47e106967d97034ab530"],["/zh-cn/archives/2018/index.html","9d4eba1556b31d97dd2aee1411de6734"],["/zh-cn/archives/index.html","4899e1cc3d7283f7666d29e2bceb8d77"],["/zh-cn/archives/page/2/index.html","fd46734e2a40510da4881c3d6a462f8b"],["/zh-cn/archives/page/3/index.html","ffe98e30be80b78dabb3f1f075cec6e7"],["/zh-cn/archives/page/4/index.html","8fb987ee928e9ed17f1a48d65ce727e3"],["/zh-cn/archives/page/5/index.html","eb18e0f66e67361dab3992623c7d6e36"],["/zh-cn/categories/ACG/Music/index.html","ebb9ab6f3173ba261339449f4055f003"],["/zh-cn/categories/ACG/Music/self-copy/index.html","af6e44090cad381cd093171c439b2bdc"],["/zh-cn/categories/ACG/Travel/index.html","ca349d27cf9105541f940156082331a9"],["/zh-cn/categories/ACG/figures/index.html","ec4219248f2144e9873fa5de14add007"],["/zh-cn/categories/ACG/index.html","c2fad2add3bc396ab65ee8956a5c1bb7"],["/zh-cn/categories/dev/Front-End-Dev/index.html","b0b34d12452b604b43d00ac3c7b3a5bb"],["/zh-cn/categories/dev/HTML-CSS/index.html","1a5fec9067d4dbcae9dae268e6417d30"],["/zh-cn/categories/dev/android/index.html","b71db4af16f7d8986a9c5294f015f666"],["/zh-cn/categories/dev/cpp/index.html","601d93a6fc3faa9b782a2c4e789a6fa6"],["/zh-cn/categories/dev/git/index.html","bff9738f9aa6c66c88887f8865031c41"],["/zh-cn/categories/dev/index.html","4b0c42a27828ad01c48a2ab45a3fd3c0"],["/zh-cn/categories/dev/java/index.html","9f0eadae2bd614a17c224a3c3b1643e8"],["/zh-cn/categories/dev/page/2/index.html","a0f459e7b46a752b76ea901122c0e193"],["/zh-cn/categories/maintaince/blog-setup/index.html","007cbe6937b7f7e836052c396422b907"],["/zh-cn/categories/maintaince/index.html","0fe818e8f5f312b2001ac4c742380ee8"],["/zh-cn/categories/maintaince/macbook/index.html","37286c9e4232b7f77b8f845036c39762"],["/zh-cn/categories/maintaince/router-config/index.html","a13c660cba52dd9cd2655f15d604cc04"],["/zh-cn/categories/notes/index.html","64dc1d8f6464b9d4ac978da91d037664"],["/zh-cn/categories/tricks/android/index.html","37c439e09e76ee7795d0949ee6dff07a"],["/zh-cn/categories/tricks/index.html","d99bd53cb58bf91f7d2327b581252382"],["/zh-cn/categories/uncategorized/index.html","50308eec815f518ab5fce6183d77495c"],["/zh-cn/categories/works/Front-End-Dev/index.html","bde9847649d96648311fac520fe0b2fd"],["/zh-cn/categories/works/csharp-wpf/index.html","28e56a2416d1d54c48fc361606468c2f"],["/zh-cn/categories/works/index.html","d977351e72cb1659e017c2c0f98ab29c"],["/zh-cn/index.html","9d972f592053f67596d6ebedcb7bc47e"],["/zh-cn/page/2/index.html","b2651120f22895def04c123f157acc96"],["/zh-cn/page/3/index.html","8dd3648aad55d78a05cbd6d15602c629"],["/zh-cn/page/4/index.html","5123afca384b48582e19ff1c1afd83d1"],["/zh-cn/page/5/index.html","7cb14022106deb4e7a8c7632719eaddf"]];
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
