/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/03/WNDR4300-setup-log/index.html","243f6a2d93c216682de1922cb250f063"],["/2015/03/android-hostname-change/index.html","8ee430395c5c3ae8caf447b097f69652"],["/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","b19e9a4c8e8de207a6a2844df71a85ac"],["/2015/04/android-chrome-issues-with-webpage/index.html","8a4a0dce69773d112c5e9126cc61995e"],["/2015/04/cpp-study-log/index.html","8526c1d0ee4ac25c29455fc6cf17cbb5"],["/2015/04/github-pages-ssl/index.html","66f4c6b96407783330a603ed5f0cbbe8"],["/2015/04/hello-world/index.html","3fbdf2257c371bfc67ac09a3ab004f6e"],["/2015/04/hexo-setup-log/index.html","577de7199ec2691f3a20ccb142d9bed9"],["/2015/04/self-copy-cd-inazuma-1-html/index.html","f5ffd72e263f6ccf9d1e677c9d67374d"],["/2015/05/cpp-inherit/index.html","4c89864915f3d186660d037c80c23ce9"],["/2015/05/cpp-polymorphism/index.html","f65bf8822ee6dc5fe1a84f0a8c7ec66d"],["/2015/09/android-root-ota/index.html","4ec08488909ce1652821c34bbf221b0d"],["/2015/09/java-learningNotes-1/index.html","a5a05ba89252b927d2cb034c256a7e79"],["/2015/09/newblog-newlife-2015/index.html","0425e0a74a2af775d6ef3adf5865751a"],["/2015/09/router-rebuild-2015/index.html","afc315a3009fabf19cb0cf2d0c58a369"],["/2015/12/2015-12-21/index.html","925dc1ab98e117aa714ea6c064516f4b"],["/2015/12/PixInTouch/index.html","c07732f4a7cd60d2c4724b199069f6a0"],["/2015/12/git-study-1/index.html","dc64aa31876cee2800a25c124a18a42f"],["/2015/12/hexo-backup-and-migrate/index.html","d0594c567085591bb480bad4686f968e"],["/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","b03140278899b5fa833992eae78657be"],["/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","00e9d8bfc98c5f54b046e5ae58e3370c"],["/2015/12/router-reconfig-2015/index.html","6c61107b0e6255e253ea0386833f9690"],["/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","943a33943c8df70332701a44e7dfb96f"],["/2016/01/2016-stepping-further/index.html","af5e92332c6e8a778fce77ae17a8d6a6"],["/2016/01/Android-Study-1-22/index.html","e4906faa56edfc442dba5060360d03ac"],["/2016/03/2016-03-20/index.html","2e2387d05dc6f5343a19f67e2b154826"],["/2016/03/GSC-535/index.html","f44c22720d73b50d3ad473c481949549"],["/2016/03/gulpjs-1/index.html","1d9fef2b6bec614b9a4f2d89a076721e"],["/2016/03/hexo-theme-paper-white/index.html","266d0b08634139a56c2a0d835e606aa5"],["/2016/04/2016-04-19/index.html","f519b6374899e2fa7b412668e6da95c6"],["/2016/06/2016-06-16/index.html","10ac8d74e6afd11ba6f0394b518a398c"],["/2016/09/2016-09-18/index.html","b2c05e0a041a6d0090c4028ae0a4fff8"],["/2016/10/2016-10-27/index.html","a8e5754d54109f12786d1f9965fb2ea4"],["/2016/12/config-switchresx-and-2khidpi/index.html","f4b3759d53be816e05da3074f7ae95bd"],["/2016/12/improve-duoshuo/index.html","a5c93104c79c9de1b8002df96144f736"],["/2016/12/use-travis-ci-your-blog/index.html","793963a086562f60f3f0fee36e0e9f33"],["/2017/01/2017-iyahoi/index.html","4cd916b01fe9d7e12001d9ce4aeb127e"],["/2017/01/webpack-amd/index.html","e70a19bff6040847b0e7e914c710b13d"],["/2017/04/kotobukiya-syaoran/index.html","13516d9e114c83d9c1c182df70431e5e"],["/2017/04/macbook-and-surface/index.html","13107826720ba81d73f5ac7d74b73ec0"],["/2017/04/uc-hyakuya-yuichiro/index.html","c4285da9485fae62ac9d410009e85cba"],["/2017/06/noragami-seichijunrei/index.html","a52ef5ecd1833791e23844eed76dab22"],["/2017/08/cross-compile-55-libev/index.html","ecbbd6742bc1733c215cb279c4527325"],["/2017/08/explore-service-worker-working-lifetime/index.html","9fefd398c6faf25d4e411b8bfc8950cb"],["/2017/08/kiminonawa-tokyo-seichijunrei/index.html","733a20c107497eb084ebb5ff800d4058"],["/2017/09/record-user-login-status-methods/index.html","c6e2b6a768ab7e44eadb73dfcca36705"],["/2017/10/vue-typescript-early/index.html","0acaa5cda533fff8a630493483ce2cac"],["/2018/04/2017-end/index.html","3e8ff1e1692b4916ad04e0e7ebbd8af3"],["/2018/04/twitter-account-activity-api/index.html","8650caacb985d5d93e44ab18c64734af"],["/2018/05/buddy-complex-seichijunrei/index.html","4f405c2a2039e03065fc5dd3d201a2f5"],["/2019/05/2019-05-16-record-jp-digital-TV-on-nas/index.html","a45fb45c88f4485ee31894ce16ceaaa9"],["/2019/05/2019-05-17-google-io-tech/index.html","8c20252ba1d87f6394489b1479049a1f"],["/404.html","f17e72ba368865d04b10ad87fa4f31f2"],["/about/index.html","5ac5f1fdcf0ed6595a6e880ddfdf76bf"],["/archives/2015/03/index.html","ee775f5c8a22a2ceafd70478e9805849"],["/archives/2015/04/index.html","98375774236f21f1839efd88df75ecbf"],["/archives/2015/05/index.html","fcfdbde2ec8c6a4c8ad2f31ddc0e9757"],["/archives/2015/09/index.html","f4b5fb67b35900d5ff6ccbccbaadca25"],["/archives/2015/12/index.html","b78955a9b26f72870c20464d6913ece2"],["/archives/2015/index.html","fbc87e89f57910fcc8b2074bd0eaac31"],["/archives/2015/page/2/index.html","cc70b1134b1092635d45f33485f1a9a6"],["/archives/2015/page/3/index.html","d2698716edc2217988e32f0857a2fbe5"],["/archives/2016/01/index.html","25a4537a510fdd95c8a94aa83559a918"],["/archives/2016/03/index.html","5c75793615e9763378c06f848868bd44"],["/archives/2016/04/index.html","d92a2cc66b1e21c86add7e1fb997c7ca"],["/archives/2016/06/index.html","c4891625ce10f66264921cb987abd7f2"],["/archives/2016/09/index.html","13cf7384d81285c54ac73dbc5c649f5e"],["/archives/2016/10/index.html","eff5c7e6db6170763111aac01048c8f0"],["/archives/2016/12/index.html","3d92a065e765f4aab264463d308bcf45"],["/archives/2016/index.html","f0a8074f7d8ecdb1745f4df153132a3f"],["/archives/2016/page/2/index.html","d60d745838ef9d5d74991d85a6f943bb"],["/archives/2017/01/index.html","a6a5efc0a3de288624c21da08e545874"],["/archives/2017/04/index.html","509196715509dfd430f6f8fb2845df47"],["/archives/2017/06/index.html","ddeafc6c1f24d8e88707aa25f32984ec"],["/archives/2017/08/index.html","9948bd02f92111b186672fc069a94e6e"],["/archives/2017/09/index.html","bb037fb8a40a548062b46e895f9b868a"],["/archives/2017/10/index.html","72036dedb046f68aee1d31ef501b6583"],["/archives/2017/index.html","e3b83bd6132907de1724772f56c23922"],["/archives/2017/page/2/index.html","8ec98fcde5f2f22207316d1fab8e47b7"],["/archives/2018/04/index.html","d7c79e3130481b515a7bcfa1671ec777"],["/archives/2018/05/index.html","d6ba3358a3ed7e701496e61bcbf3f776"],["/archives/2018/index.html","2894ff24e8030d4471a8779fdaa8cd12"],["/archives/2019/05/index.html","dd48a0e1bcc7fe9b1355531890b1132e"],["/archives/2019/index.html","3958352b92a349be5cf0cd1f7b742681"],["/archives/index.html","e540cad8a1deefdcf52dd70e843e4188"],["/archives/page/2/index.html","f4dcc03a4556234acf1e620544652135"],["/archives/page/3/index.html","ebc997692b784c7f7c64a05889fdd593"],["/archives/page/4/index.html","82447b1463e7bb5500e41fb1bbeaa12e"],["/archives/page/5/index.html","64beca1d1e3ed26a309fb3c0e47e7297"],["/archives/page/6/index.html","22c6255a0a762f93e7374d640ee8f2c0"],["/assets/images/about-me.png","a066d06c3d9d1fe56c4d921cec7febf3"],["/baidu_verify_YbTSlpWIUJ.html","779049c3a50695ceb3a388ce1e8bc1b9"],["/categories/ACG/Music/index.html","b68066a914771b5bf82509fd962fa113"],["/categories/ACG/Music/self-copy/index.html","c19d2784332c4ba2e0618391a6c6e473"],["/categories/ACG/Travel/index.html","d1f03e1cbc16e78fe213c127653670ac"],["/categories/ACG/figures/index.html","865047c14edac0200f19d5694b912348"],["/categories/ACG/index.html","c570be97d39a31ded1ff5af5d6f2727e"],["/categories/dev/Front-End-Dev/index.html","062dc0e853f4a59d64f43b43c6bac3b4"],["/categories/dev/HTML-CSS/index.html","d86007058d4350aa821e7519b6d2a28d"],["/categories/dev/android/index.html","81001e5c8342c64677c96a2edcd016af"],["/categories/dev/cpp/index.html","0135ec49a691cde5815cf9f2ed598649"],["/categories/dev/git/index.html","9a7f5d7fb6492030c5ea602629d31b10"],["/categories/dev/index.html","cfec344ea5142e31dfde51483bb01d74"],["/categories/dev/java/index.html","65116e37d5a4cde8b9bfbd2a5ecc1867"],["/categories/dev/page/2/index.html","d56e9f59bf0519dc00f83abc57965cda"],["/categories/maintaince/blog-setup/index.html","45c971079baf41bd7d8d408a3df7e2a2"],["/categories/maintaince/index.html","b190edfcdd8e87295a7ac2ff25ac75c4"],["/categories/maintaince/macbook/index.html","07b19b76595279bd7741301472b36eaf"],["/categories/maintaince/router-config/index.html","6d744ed47eb340446f9f866422d0f26d"],["/categories/notes/index.html","e7a8f6b79f9be7ac70b17c0ea73926e8"],["/categories/tricks/android/index.html","38843dbc9f7333f94336d797964f69ad"],["/categories/tricks/index.html","752ec0f062fa589b3870c8f40d585372"],["/categories/uncategorized/index.html","5319a436ef7b9405b1c56741abfb3d92"],["/categories/works/Front-End-Dev/index.html","22ba294baf10f73a4973c810da9e3548"],["/categories/works/csharp-wpf/index.html","7eb59535427850c1b3a947b5d4b1b9af"],["/categories/works/index.html","56c8c4bbceef7fc50462c0e01be15263"],["/css/seichi.css","42693f35c4c482207368dd363ea27373"],["/css/style.css","1220ea645f73adefdf529a2abd3ada59"],["/google311213f0c8d812a9.html","51f1ee3c2f13a21a1a40b3dae4954454"],["/img/coderwall.png","1976fe70f1ee8ed243e0975402e06a2d"],["/img/delicious.png","952d9b54d8bcfe7b998f67ff48c4dbce"],["/img/douban.png","d42a163f932100e621d22732db34ecdb"],["/img/facebook.png","4bd685f6c9fdaccabf07bdd52173facb"],["/img/github.png","3c4b6267a1a3fedebdc7d089610ecfe7"],["/img/google.png","c385f5304465716b2d6c9ada94c657ab"],["/img/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["/img/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["/img/linkedin.png","4c72c4896f3c23f736cb1ad08f0c866e"],["/img/mail.png","38a7b8302dac028bf03b22d228938abf"],["/img/pinboard.png","9b6186cb97adbe50311f94e50f2392cf"],["/img/pinterest.png","e1b8e655d1b99b40ebcbd96977ae234e"],["/img/rss.png","ec8cf9b5a98011aa75cc0a4f25024dc9"],["/img/scrollbar_arrow.png","be5381cedbd6b778b1d92e224fd71cf7"],["/img/stackoverflow.png","039128ececb47b33bccedd98dc9fc809"],["/img/twitter.png","d2289a4936fefa41d9f92cf89939be5b"],["/img/weibo.png","b382032b316ee38c6d537fe9d36ae54c"],["/img/zhihu.png","e6352c0e1957beef3009268ae747c3aa"],["/index.html","1864a37db03a4eb4566f09783928a73b"],["/ja/2015/03/WNDR4300-setup-log/index.html","543571fcd291d72117dd17ba957ca99c"],["/ja/2015/03/android-hostname-change/index.html","dd5319c4c4a532f25f65397c74214035"],["/ja/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","a9857b54bf0df21577dbf306c4de4b5b"],["/ja/2015/04/android-chrome-issues-with-webpage/index.html","d34318ce2b2fd5622346efbb72a67874"],["/ja/2015/04/cpp-study-log/index.html","94fbe2508527f132bec3a63fdfe73b73"],["/ja/2015/04/github-pages-ssl/index.html","2fed15e4b20aec3ddd90ec52cee9a55c"],["/ja/2015/04/hello-world/index.html","139092af9066e44be021807b743916f0"],["/ja/2015/04/hexo-setup-log/index.html","3faa65f127062813ff99274e24ef2e7b"],["/ja/2015/04/self-copy-cd-inazuma-1-html/index.html","8c5e2e81a645c25f8e0e98fba7400f35"],["/ja/2015/05/cpp-inherit/index.html","346ca1736a8569ae03c32eae99b6e859"],["/ja/2015/05/cpp-polymorphism/index.html","a808e1547a661c07490b73bbe35a4f27"],["/ja/2015/09/android-root-ota/index.html","49d65e05589ab43ffd8a1d4ec5bd763e"],["/ja/2015/09/java-learningNotes-1/index.html","14d1cc62be3472091adb2a78de6eafa1"],["/ja/2015/09/newblog-newlife-2015/index.html","63d175ab9979dad65df17658aeb3a696"],["/ja/2015/09/router-rebuild-2015/index.html","ec1f1aa70f301a42aaa29dabe3bbe8d4"],["/ja/2015/12/2015-12-21/index.html","66b6197dc77a2859a5a5b0c77e963af4"],["/ja/2015/12/PixInTouch/index.html","816e9a99a7d75dfa49226ba03f29bf9b"],["/ja/2015/12/git-study-1/index.html","61ff8ccae9831ef721a033825876ee9a"],["/ja/2015/12/hexo-backup-and-migrate/index.html","ea5b4c93ee17f12e2b55a41bc050c004"],["/ja/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","db53c4f01f321cefad85baa040b77202"],["/ja/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","e12c2284721f142aa3bcc9c12fcf1198"],["/ja/2015/12/router-reconfig-2015/index.html","b30b837dce854fc7671a55d0bbf2502e"],["/ja/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","1d6f003ac0f665550f4c5937a1ff9ade"],["/ja/2016/01/2016-stepping-further/index.html","c83a2f5b5f1d30708014228b1fa94a4a"],["/ja/2016/01/Android-Study-1-22/index.html","7bfa8596342797fba18e7e19c63bd179"],["/ja/2016/03/2016-03-20/index.html","2316fbf543bd6fb121c3351581db6715"],["/ja/2016/03/GSC-535/index.html","d308fe87c2f5a6b9c46c1983830f82b6"],["/ja/2016/03/gulpjs-1/index.html","92c4a2450def55ddadd20d5bd889efbe"],["/ja/2016/03/hexo-theme-paper-white/index.html","716d623f3c541f18be2e7602f15ca7c8"],["/ja/2016/04/2016-04-19/index.html","022f5718e99ac9c80c109f3abd674934"],["/ja/2016/06/2016-06-16/index.html","e1ca632c9e9919cdbc59a58114bbf7a2"],["/ja/2016/09/2016-09-18/index.html","f5ed02fb77c8214377f95498f88f29f1"],["/ja/2016/10/2016-10-27/index.html","de37e7dfafd64da6c5a1d1b13af0d168"],["/ja/2016/12/config-switchresx-and-2khidpi/index.html","6550e47a1b5c4c172f2f1dd9201eb8db"],["/ja/2016/12/improve-duoshuo/index.html","aaf335a42eccfe7454631ccdeac93fa9"],["/ja/2016/12/use-travis-ci-your-blog/index.html","603394699ee2cf7484bc6451bb13eac6"],["/ja/2017/01/2017-iyahoi/index.html","ea058d04680899ae6be99fea0b5de383"],["/ja/2017/01/webpack-amd/index.html","f27a299eeab180fe9c0d1e1f9ab79e97"],["/ja/2017/04/kotobukiya-syaoran/index.html","c480a45abfd07aefc2a1b6163629296b"],["/ja/2017/04/macbook-and-surface/index.html","a6a5e2022134b78d4d0ddfb9607104c6"],["/ja/2017/04/uc-hyakuya-yuichiro/index.html","374158c0343de53d8ed3b2c082e20397"],["/ja/2017/06/noragami-seichijunrei/index.html","73d015d3a00fb87a8fa6a20b6966ca67"],["/ja/2017/08/cross-compile-55-libev/index.html","e23005a4b0767c6ea22654ac0b001d86"],["/ja/2017/08/explore-service-worker-working-lifetime/index.html","796fbf392501fc98ca20848603837990"],["/ja/2017/08/hello-jp-world/index.html","6bb90003256b7d987baacc9babdbbd93"],["/ja/2017/08/kiminonawa-tokyo-seichijunrei/index.html","9017bbe78d15b7c31a419c8a0660ab03"],["/ja/2017/09/record-user-login-status-methods/index.html","39c56ec6c6c06b19cb59b90d41774bdb"],["/ja/2017/10/vue-typescript-early/index.html","8c397564a507d625c38d953b422536cf"],["/ja/2018/04/2017-end/index.html","deb84bbbef9dce9c31d4b16c3803940f"],["/ja/2018/04/twitter-account-activity-api/index.html","59d0c12f8ae8193f860410ccc7f9c7d1"],["/ja/2018/05/buddy-complex-seichijunrei/index.html","bbc2afb88b142fc8060bc26e209a5453"],["/ja/2019/05/2019-05-16-record-jp-digital-TV-on-nas/index.html","a217abab1c9bfec6c78f405dd305dcd5"],["/ja/2019/05/2019-05-17-google-io-tech/index.html","4da3459704d95823e31c721059b39891"],["/ja/404.html","723e4f4fbe13873da2db5520ce193611"],["/ja/about/index.html","648195d3f896ed1f8ce3c0ca37d4acbc"],["/ja/archives/2017/08/index.html","247b42e66b33782a7c0168415c6bb087"],["/ja/archives/2017/09/index.html","0342317a713344f6891b17b5922db5fd"],["/ja/archives/2017/10/index.html","ac34be81c1ed712c8e558d07113143a2"],["/ja/archives/2017/index.html","927758ae77a80cdf8f12438556412572"],["/ja/archives/2018/04/index.html","3bf6ac8dc51f723d79998e82c8745011"],["/ja/archives/2018/05/index.html","3e4dcbfe84e7859146952f60b539bca0"],["/ja/archives/2018/index.html","b173f5b3af9d74e26774f6751b7b9407"],["/ja/archives/2019/05/index.html","a45b5ec640de1ab587d27d92fb000763"],["/ja/archives/2019/index.html","cb2c25aa9c136905b1e37b48b61ba8f7"],["/ja/archives/index.html","a70a0ae089ff336a37f3d976c8d96235"],["/ja/categories/ACG/Travel/index.html","cbc2e953502504613130b22c9bffc745"],["/ja/categories/ACG/index.html","c544d5fe1d2b6342c0b18779a3f4e9b8"],["/ja/categories/dev/Front-End-Dev/index.html","7def5930bd8bf4a72c70398e919b517c"],["/ja/categories/dev/index.html","33a1bc0ae1a6442e659fd22244c9c12d"],["/ja/categories/uncategorized/index.html","3ca3b2921d6926e263eb0ba6aeeadef4"],["/ja/index.html","7f81075a9dbdc89e6ec4ba472af9e086"],["/ja/nihongo-test-page/index.html","7bacc4f5b9262dad91dffff3974c8ff8"],["/js/instagram.js","7d7a9e2e7286ba2d5b6d12068214f0c3"],["/js/jquery.lazyload.js","28c23bc40080d31144776e9a8736837f"],["/js/main.js","2e92f29b0cd90bddc062915eb46a858c"],["/js/mobile.js","dc84e1287e89e3c1bba67fd47b8656b1"],["/js/nextpageajax.js","c3bde8d7bb1f967fb319f57a187ea51a"],["/js/pc.js","631b535186aab0e262485ee2bf9da628"],["/js/ripple-effects.js","b9c11903da0ef5c3d790b41369c3137e"],["/js/share.js","de52ac3d43e43c1951a08b0804458a8e"],["/js/totop.js","661822968b58fd439f46bd54031238d6"],["/keep_origin/affiliate_jump.html","71bf6d72c5d080ec2b3f8ecfae3d71ed"],["/nihongo-test-page/index.html","9b7d56b9c02e099b80c0e873ed24b09f"],["/page/2/index.html","ad7c185484dd288b2a093c23f1f19d74"],["/page/3/index.html","04bf6dec3ca9f575766a5a28563ff15c"],["/page/4/index.html","66bfbfc2cbcaab7355ab39f9d7edbf4b"],["/page/5/index.html","4a6f043b780362e399ec4b9873a5d51a"],["/page/6/index.html","e04ea11abbe3a8b1764c8dddf10a3e27"],["/photoswipe/default-skin/default-skin.css","426e8908d7426603ca203b6d16281b1e"],["/photoswipe/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photoswipe/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photoswipe/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photoswipe/photoswipe-ui-default.js","0c9196aa8943ce8a8045c9f4cc62915c"],["/photoswipe/photoswipe-ui-default.min.js","9517baca43cd4e9cb23ff337fbc1baa1"],["/photoswipe/photoswipe.css","7dc0df107159e1be66d4464171561e5b"],["/photoswipe/photoswipe.js","a8d26ff34943c859884acbd6b2531315"],["/photoswipe/photoswipe.min.js","f5cd6479c4e4682545a9603e6b50c741"],["/setup-log/blog-setup/github-pages-ssl.html","d5e315a4f7725d0c5a828ab2ac48dfe3"],["/sw-register.js","12abeb3bc2152b3b534605c162826402"],["/zh-cn/archives/2015/03/index.html","98e93fe9e39b8c421cf810acd132732d"],["/zh-cn/archives/2015/04/index.html","6770cd3d2c4aba2f8866db1309cc3f3f"],["/zh-cn/archives/2015/05/index.html","33591acb6c33270febb060f7a471659f"],["/zh-cn/archives/2015/09/index.html","2a5dd083ab60277f33967e49ec99a117"],["/zh-cn/archives/2015/12/index.html","cf887e9351d66975f9224a17dcbae45a"],["/zh-cn/archives/2015/index.html","01a71d14ffd60c4292697f9f3c67556b"],["/zh-cn/archives/2015/page/2/index.html","04ec2b9e536992d6977fcfd48a6135a5"],["/zh-cn/archives/2015/page/3/index.html","6058db1d5520815796d0d0da2d104135"],["/zh-cn/archives/2016/01/index.html","be0681adf1259f1d70449ccb63328344"],["/zh-cn/archives/2016/03/index.html","98f7adebd503ea32829df59a20c9f732"],["/zh-cn/archives/2016/04/index.html","cac39a322b16bdcfd631773de40f4cf3"],["/zh-cn/archives/2016/06/index.html","3da5941a27fed6e0ddbeca4adfb7d413"],["/zh-cn/archives/2016/09/index.html","2085fcefb4675074fb81cb3d89ef55b3"],["/zh-cn/archives/2016/10/index.html","b5e4f28d2f74ac90e103146fd954d5cb"],["/zh-cn/archives/2016/12/index.html","d10e216f57325de73b04ff21622636d5"],["/zh-cn/archives/2016/index.html","5885ad89ba5030f3bfbc67effdefde91"],["/zh-cn/archives/2016/page/2/index.html","204c4580d3a10e30087c20f1f62c3275"],["/zh-cn/archives/2017/01/index.html","94b08968f89455d6a92cd4ff4a0cf7c4"],["/zh-cn/archives/2017/04/index.html","6440af34d7b6f712cdc01fe6d1810759"],["/zh-cn/archives/2017/06/index.html","4d509f02dbbfab8bf56b0baaf916e378"],["/zh-cn/archives/2017/08/index.html","3cbd3e44b681b6964c50a00c869dd023"],["/zh-cn/archives/2017/09/index.html","041283efe4530f6fd55d507f5a4357a2"],["/zh-cn/archives/2017/10/index.html","63a1457a60ed82679de1c9d2eba9edc9"],["/zh-cn/archives/2017/index.html","98cf4c9a8d7b53f1808d978fecac7f89"],["/zh-cn/archives/2017/page/2/index.html","b19fbe4a5186547ff04b98b272124eaf"],["/zh-cn/archives/2018/04/index.html","1e4e46119c7c9ee94a415b107cb20ce9"],["/zh-cn/archives/2018/05/index.html","9314648bd12cbe9c8093196972ccd049"],["/zh-cn/archives/2018/index.html","b088ee6617038f57793d33e35e55c242"],["/zh-cn/archives/2019/05/index.html","f3ef51702b678137075166a0c2bbf591"],["/zh-cn/archives/2019/index.html","86c8ac7ee12a52e3b752c2a836dabcd5"],["/zh-cn/archives/index.html","d1c69d5323fbd8efd2af64b46aa200a5"],["/zh-cn/archives/page/2/index.html","a9d2c727f479a9cc6d8a2903974cc962"],["/zh-cn/archives/page/3/index.html","ffafc197e3e64a7ad0559e6f41498261"],["/zh-cn/archives/page/4/index.html","92e5c6f38448c8ddab6f3cf0fc2f4f13"],["/zh-cn/archives/page/5/index.html","50a9608ffe1dfbe3e13618b9d1a4f112"],["/zh-cn/archives/page/6/index.html","d3ab413725a29ca2cad29bed7cdd7a76"],["/zh-cn/categories/ACG/Music/index.html","c3f3daeafb53807647407c90e2796c7b"],["/zh-cn/categories/ACG/Music/self-copy/index.html","ce664c743c3a3d465424bc6968642f6d"],["/zh-cn/categories/ACG/Travel/index.html","8b86a84705f32aa857139923aff604eb"],["/zh-cn/categories/ACG/figures/index.html","d7d6625db3c86d7dda768ee02ce57370"],["/zh-cn/categories/ACG/index.html","070e8bad2dab06d250287ae02d8c5386"],["/zh-cn/categories/dev/Front-End-Dev/index.html","af99a9ac0bc226863dfd5e48754f58d3"],["/zh-cn/categories/dev/HTML-CSS/index.html","739ff353669a80104ae585cdcd91d549"],["/zh-cn/categories/dev/android/index.html","418f8547a0cbc457c72c8bcaa68f9722"],["/zh-cn/categories/dev/cpp/index.html","4555172845304c4dc7f4aa528674a45d"],["/zh-cn/categories/dev/git/index.html","40ea1eea5a58803ecaf0df9d45e1db0c"],["/zh-cn/categories/dev/index.html","c817e0a8b5fd0bc3141cedee663b2191"],["/zh-cn/categories/dev/java/index.html","f18dd14d9090f47abde217484f4ca64f"],["/zh-cn/categories/dev/page/2/index.html","a4b1f8cb999243ae023f89b7e48b7cde"],["/zh-cn/categories/maintaince/blog-setup/index.html","d03d330b75408f0fce5a41a86f0c7b0c"],["/zh-cn/categories/maintaince/index.html","d1c34ac79abd66261a2224084e463a6d"],["/zh-cn/categories/maintaince/macbook/index.html","c7544d9c375daedcb1a94d01c71e62e7"],["/zh-cn/categories/maintaince/router-config/index.html","44dd7b1f8acf6aa571b44561a71c1429"],["/zh-cn/categories/notes/index.html","af7bcc656f9353f0c5813cc54ce65865"],["/zh-cn/categories/tricks/android/index.html","b0e338594a8d56b1cc628edd8b49ff03"],["/zh-cn/categories/tricks/index.html","747fd7c6355e69f55d97076f6afa3526"],["/zh-cn/categories/uncategorized/index.html","f0613db0850d8747a32e6891b8821539"],["/zh-cn/categories/works/Front-End-Dev/index.html","e361a5571a55719c596ffb88001c95b5"],["/zh-cn/categories/works/csharp-wpf/index.html","a4695d26e5e93ee12638d025474180bb"],["/zh-cn/categories/works/index.html","d5f5043fb6bb6da25990ccf843f32b06"],["/zh-cn/index.html","e2f3cc64a3b0aa61da795dece84455cc"],["/zh-cn/page/2/index.html","8354e8199466aa7cda7363abcd396d65"],["/zh-cn/page/3/index.html","ed4c5863da33ba9398969e52cf2e6e57"],["/zh-cn/page/4/index.html","aab6c4af00d5edf86e9c367d486055a7"],["/zh-cn/page/5/index.html","a28682c42c9664826e1a14bea351e74e"],["/zh-cn/page/6/index.html","26432917c1fee901f6aafd1107afa5c1"]];
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
