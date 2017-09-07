/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/03/WNDR4300-setup-log/index.html","830bd1867f2eaa3805fda634283145fc"],["/2015/03/android-hostname-change/index.html","7d9bbedbd730bc1744158527ec63ee37"],["/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","bd168447a23cfc2c3ceaa11a603fa265"],["/2015/04/android-chrome-issues-with-webpage/index.html","aa8a853fdffdaf01d871ad095a673d59"],["/2015/04/cpp-study-log/index.html","a42f1c4890b0ff9f534f23de6062a2ab"],["/2015/04/github-pages-ssl/index.html","df449e352c3744c4d88b4fd292284057"],["/2015/04/hello-world/index.html","50fd82dd68114230518f8d54c8d7de45"],["/2015/04/hexo-setup-log/index.html","fdaec95fb1ed1ccc0522e147f852b09e"],["/2015/04/self-copy-cd-inazuma-1-html/index.html","9a5513c4670ac3b0b2e976490c5c326f"],["/2015/05/cpp-inherit/index.html","8793bd3aa67fc11147bf55bcb73030e9"],["/2015/05/cpp-polymorphism/index.html","c5b7c0457c789e75163a6352f9b2d35a"],["/2015/09/android-root-ota/index.html","02e2a79580aeae57e1249a90697df59b"],["/2015/09/java-learningNotes-1/index.html","d6baafc1ca818c18551c78708c23acf1"],["/2015/09/newblog-newlife-2015/index.html","20bed7c303443363868b81cfa639eaf1"],["/2015/09/router-rebuild-2015/index.html","eaf8261e644bbfba5a573637581fbccf"],["/2015/12/2015-12-21/index.html","92fcceb5743122a07cc34ce6e42119d3"],["/2015/12/PixInTouch/index.html","f8c937633a41a295860cf6b92a76dedd"],["/2015/12/git-study-1/index.html","71654324aacbc99c8703740bae0b36e2"],["/2015/12/hexo-backup-and-migrate/index.html","c5ba717933f819ea5c8352f9c99eeb02"],["/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","da22d0ce77226a925a040b2185d13de6"],["/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","072deae46bd72cde109658e490d11a09"],["/2015/12/router-reconfig-2015/index.html","8be1dd4407ef77e8028b3848376d8e30"],["/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","246f05853f871788c05b390688c90dbd"],["/2016/01/2016-stepping-further/index.html","eb4eece47b13dee33e4928fc602bba0e"],["/2016/01/Android-Study-1-22/index.html","cb4a587b1e0facc3f2983e1f488f39b0"],["/2016/03/2016-03-20/index.html","645edecbc7c182a268b047721e2de7de"],["/2016/03/GSC-535/index.html","f87e4fa418781eb41a616361d9f90eeb"],["/2016/03/gulpjs-1/index.html","e1a349d4b856e3152f456bcb61cebcb7"],["/2016/03/hexo-theme-paper-white/index.html","1bc8ac763dda9149ec1bcf15ffffe1af"],["/2016/04/2016-04-19/index.html","e5e6f7e1f9f458f27af65fc72a90b2d5"],["/2016/06/2016-06-16/index.html","b2483791f0e7bceb95b9398f518abe26"],["/2016/09/2016-09-18/index.html","e5247065147c3d2c405854121ea10457"],["/2016/10/2016-10-27/index.html","ae212546588e5b1d58bbbca960857f5d"],["/2016/12/config-switchresx-and-2khidpi/index.html","172eb4951b7cd2703cfb03486995e976"],["/2016/12/improve-duoshuo/index.html","b53b9d1473a38fd00f65693c2e6a9884"],["/2016/12/use-travis-ci-your-blog/index.html","d7b2754080882b9fd0f6d659889f5ad3"],["/2017/01/2017-iyahoi/index.html","c1c0b312c8ef45c728eddf95fe28b6c8"],["/2017/01/webpack-amd/index.html","383ffce420c1db9aa0b5ff4a8fa54e36"],["/2017/04/kotobukiya-syaoran/index.html","1192e0c56a514a59fbad11e4ad9bb7da"],["/2017/04/macbook-and-surface/index.html","3b71260165301bb100947451a82e923b"],["/2017/04/uc-hyakuya-yuichiro/index.html","47eeebc297b7cbf386d68115b02e986c"],["/2017/06/noragami-seichijunrei/index.html","5247d06ac290c89f7a67ac226aa0630d"],["/2017/08/cross-compile-55-libev/index.html","51bbcb57e2d0239a30e52b2a10c58882"],["/2017/08/explore-service-worker-working-lifetime/index.html","9f7e35b473e89b5ee8cc8f72c35d4781"],["/2017/08/kiminonawa-tokyo-seichijunrei/index.html","21bb0e7c755ff0fa3bb187beb85d87fc"],["/404.html","34ecbf2598a22c7c0d8e7271062053c7"],["/about/index.html","c7ede4fce5b4d79f458ec8ab7741aa08"],["/archives/2015/03/index.html","2ead0ca83b55f87efbd84f9333fb2955"],["/archives/2015/04/index.html","03ac8b5979f996ea90dfe69637d7fe5f"],["/archives/2015/05/index.html","6baceb0b0f220cebea5e4c10698d751d"],["/archives/2015/09/index.html","ea2018bd82a0db2c7e4bd54ca10ddd7b"],["/archives/2015/12/index.html","71f07c1e77bc37f5c88159e1c8deca5d"],["/archives/2015/index.html","3cf55ca5e1d59dc632791ef674fc7ffa"],["/archives/2015/page/2/index.html","166927ec39700922df48b4340abab74c"],["/archives/2015/page/3/index.html","e7e7b2b74a7a2eef3e5bd9cb29cd6d2c"],["/archives/2016/01/index.html","416dca6623dcb8fd686c4d0755bd845a"],["/archives/2016/03/index.html","0639e4c2d5587c62d432449a3a966648"],["/archives/2016/04/index.html","a734717fdeafbbd2f862178f3ff179e0"],["/archives/2016/06/index.html","500b6ff86140507a278f9f8092b34737"],["/archives/2016/09/index.html","c1ecc0c237f4635255ac243d61011ddf"],["/archives/2016/10/index.html","ac9b2b0cd7095b1653e297ab249dda62"],["/archives/2016/12/index.html","b27e6995a21e83ebe13b9e4cce5e6c3c"],["/archives/2016/index.html","320010ae8e28aecd2e883553fe68659e"],["/archives/2016/page/2/index.html","446cb597d606cc7e75f40d314ebb6bc8"],["/archives/2017/01/index.html","0f4f8a17730169b50e39b45e866b0d1d"],["/archives/2017/04/index.html","95aeb0896b4a42e32e1722b78277bd60"],["/archives/2017/06/index.html","ff6f84127787d8c0e2e92e5dd139804a"],["/archives/2017/08/index.html","6f2367d074e6f2df2e0f566b5c6c0ec6"],["/archives/2017/index.html","17ee9e12ebd7e5e173bedf0739035778"],["/archives/index.html","924a7e897d909c49dfe979e398a7b572"],["/archives/page/2/index.html","0e831d475d718acf47a461d1a5f41722"],["/archives/page/3/index.html","bd802cf0899c186ce6d9477d48da41b6"],["/archives/page/4/index.html","e7d5c002651a9e9a0c430ec7b1fda99f"],["/archives/page/5/index.html","a4959673605070611cbe28646f2c1c86"],["/assets/images/about-me.png","a066d06c3d9d1fe56c4d921cec7febf3"],["/baidu_verify_YbTSlpWIUJ.html","779049c3a50695ceb3a388ce1e8bc1b9"],["/categories/ACG/Music/index.html","5a5b075b5a698039e714fdbfbafa0c46"],["/categories/ACG/Music/self-copy/index.html","11c6f2820a6931a47ea678e52cc7c719"],["/categories/ACG/Travel/index.html","b1fe3fd1bdce1a691df9b13c510a795a"],["/categories/ACG/figures/index.html","508e52eef61598440789d081dff0e9b9"],["/categories/ACG/index.html","78a9fc3b040d16f4f1518c88674728bc"],["/categories/dev/Front-End-Dev/index.html","c9ae89b78f717e5356f75760f10db9ef"],["/categories/dev/HTML-CSS/index.html","8ac3aedb50b6bb571b29f6a1ee5e9d47"],["/categories/dev/android/index.html","bb32f4d6faa03c71b6c104a4bff4f2fc"],["/categories/dev/cpp/index.html","d32cd6e14af1741cea2c1c7d8eb55c7f"],["/categories/dev/git/index.html","164a6c778a0020a36003d83b676522f5"],["/categories/dev/index.html","74afeceea6ac4b5d205e77bdf5bd63f4"],["/categories/dev/java/index.html","e9f058f6f06998bbc4b8d310215fc960"],["/categories/dev/page/2/index.html","2d54fbace6dcd865da6d82c367738aeb"],["/categories/maintaince/blog-setup/index.html","e89dd1c963e8685588ea183815076d7a"],["/categories/maintaince/index.html","3f1f3d0c2a03da5ed0c367a1d58bbb59"],["/categories/maintaince/macbook/index.html","2a3660aeca39ca384fdcb1e6628c576a"],["/categories/maintaince/router-config/index.html","6a02d294322c28ee4f55c4bd31cd309b"],["/categories/notes/index.html","5f0dae33d16bc893e7ce62ee29a9b800"],["/categories/tricks/android/index.html","4ce2496a64bf1000f8acfa6831c4dcfc"],["/categories/tricks/index.html","40a3e246fa5793da0730485a54857bff"],["/categories/uncategorized/index.html","c0f5b5dd67331edc58eafd5acd36f20f"],["/categories/works/Front-End-Dev/index.html","7dff3840abbaca9263fe417c17d91872"],["/categories/works/csharp-wpf/index.html","5cad3694bdfe7c4831a98cd7a51604f9"],["/categories/works/index.html","a34ca57356a4100dd20d7259d1559d17"],["/css/seichi.css","42693f35c4c482207368dd363ea27373"],["/css/style.css","a81f79e7bf311785886f2c1c31c8e4d4"],["/google311213f0c8d812a9.html","51f1ee3c2f13a21a1a40b3dae4954454"],["/img/coderwall.png","1976fe70f1ee8ed243e0975402e06a2d"],["/img/delicious.png","952d9b54d8bcfe7b998f67ff48c4dbce"],["/img/douban.png","d42a163f932100e621d22732db34ecdb"],["/img/facebook.png","4bd685f6c9fdaccabf07bdd52173facb"],["/img/github.png","3c4b6267a1a3fedebdc7d089610ecfe7"],["/img/google.png","c385f5304465716b2d6c9ada94c657ab"],["/img/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["/img/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["/img/linkedin.png","4c72c4896f3c23f736cb1ad08f0c866e"],["/img/mail.png","38a7b8302dac028bf03b22d228938abf"],["/img/pinboard.png","9b6186cb97adbe50311f94e50f2392cf"],["/img/pinterest.png","e1b8e655d1b99b40ebcbd96977ae234e"],["/img/rss.png","ec8cf9b5a98011aa75cc0a4f25024dc9"],["/img/scrollbar_arrow.png","be5381cedbd6b778b1d92e224fd71cf7"],["/img/stackoverflow.png","039128ececb47b33bccedd98dc9fc809"],["/img/twitter.png","d2289a4936fefa41d9f92cf89939be5b"],["/img/weibo.png","b382032b316ee38c6d537fe9d36ae54c"],["/img/zhihu.png","e6352c0e1957beef3009268ae747c3aa"],["/index.html","6e7c5b6d940c7e17aa85e3aa62cea922"],["/ja/2015/03/WNDR4300-setup-log/index.html","61f94864d6dc297a67dbefcd464207d8"],["/ja/2015/03/android-hostname-change/index.html","a840420fc0ead027f582774668c196c5"],["/ja/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","5d63ed4a3ee8ef82700f1cbd636f027b"],["/ja/2015/04/android-chrome-issues-with-webpage/index.html","4f93f271cb86a78f2ebc24114545ecb3"],["/ja/2015/04/cpp-study-log/index.html","04858fe17b5ce2af4543ecccbbd67529"],["/ja/2015/04/github-pages-ssl/index.html","bebd841e0cc258ab3815fd84fd8fc1f6"],["/ja/2015/04/hello-world/index.html","e77183a6b7102b2e0f0455b7784f67bd"],["/ja/2015/04/hexo-setup-log/index.html","ba43e1e994be58471b1e358eaa7778b9"],["/ja/2015/04/self-copy-cd-inazuma-1-html/index.html","2b7fc2a8958f0ff4e6e0865cd49c53c2"],["/ja/2015/05/cpp-inherit/index.html","3d40b4ae362fe6445ce6ea77b4560e4f"],["/ja/2015/05/cpp-polymorphism/index.html","404015f7ac223b4cd4d64c69a8f2ef94"],["/ja/2015/09/android-root-ota/index.html","9ae934c79ead003041075b96db96a92c"],["/ja/2015/09/java-learningNotes-1/index.html","440f6356015a4c2b9475bb6fe9a55fcf"],["/ja/2015/09/newblog-newlife-2015/index.html","35c77fe1638db577599bdbfe23f11c58"],["/ja/2015/09/router-rebuild-2015/index.html","33d1d01aa992bd766b7a659d8edaa4c4"],["/ja/2015/12/2015-12-21/index.html","07ced0cdc3268835e9265e223370b01d"],["/ja/2015/12/PixInTouch/index.html","25a37d5955c191cfa621b7d10401b44d"],["/ja/2015/12/git-study-1/index.html","e01125466f911545940293fd1b853939"],["/ja/2015/12/hexo-backup-and-migrate/index.html","2c39a44ef5d5d127e8ad68fb5e7398e0"],["/ja/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","c94751244e39b5df6251ba41041af60d"],["/ja/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","39c93a057be2642c83a1cccc5dc0bae4"],["/ja/2015/12/router-reconfig-2015/index.html","d9bc4ac7a282a280d4d816b831baa10b"],["/ja/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","49dbc43b1970f2892f74338e556e0941"],["/ja/2016/01/2016-stepping-further/index.html","427b88636d1f4319f4f9a35b89e0dec4"],["/ja/2016/01/Android-Study-1-22/index.html","3da74e6a324dba722eb1e1f74aebfa1e"],["/ja/2016/03/2016-03-20/index.html","983d148a963c3148f58039a4f83bf49e"],["/ja/2016/03/GSC-535/index.html","fbc354f1c748ae96169aece0069d35a5"],["/ja/2016/03/gulpjs-1/index.html","7439310189cd5bac010d9effbd720968"],["/ja/2016/03/hexo-theme-paper-white/index.html","a03f58f6e7ab0121b4794f4b3c4c8f73"],["/ja/2016/04/2016-04-19/index.html","cd263fa974d22dea3bc38c5be22845fa"],["/ja/2016/06/2016-06-16/index.html","786528cd8d0150625d926581234ff097"],["/ja/2016/09/2016-09-18/index.html","f11e0665a80518cf96b8fe7c8dbfbeaa"],["/ja/2016/10/2016-10-27/index.html","622d00fe3aa1531e1b080cc4c49a6c95"],["/ja/2016/12/config-switchresx-and-2khidpi/index.html","1d550ed60b9883a84040252c651b71bc"],["/ja/2016/12/improve-duoshuo/index.html","02df6cd20a1471ac843c8b78eea5d837"],["/ja/2016/12/use-travis-ci-your-blog/index.html","288c6b3e50cddc80f15ee7805fe3e01a"],["/ja/2017/01/2017-iyahoi/index.html","4109fbacf9414369dde583fb1a4ee6a1"],["/ja/2017/01/webpack-amd/index.html","efe655acc13a9fdb3ecbfe78349d5522"],["/ja/2017/04/kotobukiya-syaoran/index.html","720aff0d1641dc7d195e5a036489ea2a"],["/ja/2017/04/macbook-and-surface/index.html","996269eaaf55e2bee37e6888361d3171"],["/ja/2017/04/uc-hyakuya-yuichiro/index.html","f63066f547c0ae27827fbf972672e74e"],["/ja/2017/06/noragami-seichijunrei/index.html","9d863f110a17fb7aac013118eae0d024"],["/ja/2017/08/cross-compile-55-libev/index.html","8280b7a198d621c31d0d7ca854889287"],["/ja/2017/08/explore-service-worker-working-lifetime/index.html","9e7d189ae63ef57498b22a5f022920df"],["/ja/2017/08/hello-jp-world/index.html","eee1190bb37d1dc54e9e6ee2466fdf47"],["/ja/2017/08/kiminonawa-tokyo-seichijunrei/index.html","232301fc391af3472b0031fd80d94989"],["/ja/404.html","1d70d8bbf3be0a69c7af76d1dcbfa728"],["/ja/about/index.html","2fe6acf2169bbaa1fe1f1bd62b73cffc"],["/ja/archives/2017/08/index.html","e6b333acd81077031231fd0c580fe36a"],["/ja/archives/2017/index.html","77e255267fa2e99d030364bc22735bf3"],["/ja/archives/index.html","7dec3d994d9f68ffa10003d2583961b8"],["/ja/categories/uncategorized/index.html","ab843eb9f6b83a0914614470629ef00c"],["/ja/index.html","40aa1e4f43f73b2dcba57da218272878"],["/ja/nihongo-test-page/index.html","5d296ba306f1070d5ed7eabc650c07dd"],["/ja/resume/index.html","69410c2b74d1eaf45f05eeb0b8b73019"],["/js/instagram.js","7d7a9e2e7286ba2d5b6d12068214f0c3"],["/js/jquery.lazyload.js","28c23bc40080d31144776e9a8736837f"],["/js/main.js","2e92f29b0cd90bddc062915eb46a858c"],["/js/mobile.js","dc84e1287e89e3c1bba67fd47b8656b1"],["/js/nextpageajax.js","c3bde8d7bb1f967fb319f57a187ea51a"],["/js/pc.js","631b535186aab0e262485ee2bf9da628"],["/js/ripple-effects.js","b9c11903da0ef5c3d790b41369c3137e"],["/js/share.js","de52ac3d43e43c1951a08b0804458a8e"],["/js/totop.js","661822968b58fd439f46bd54031238d6"],["/nihongo-test-page/index.html","9f3065a37ac1ba734d3bc303c3f1c56b"],["/page/2/index.html","68ab946c4c1292dbf647a8e9ef37dd45"],["/page/3/index.html","0e5ec36dcca9c886eaba4d3d8c284448"],["/page/4/index.html","58a7e05d69f36b7b1ac05ba8fe1165cd"],["/page/5/index.html","fe1a8dc1956b450e9e78afbfd489ce6a"],["/photoswipe/default-skin/default-skin.css","426e8908d7426603ca203b6d16281b1e"],["/photoswipe/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photoswipe/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photoswipe/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photoswipe/photoswipe-ui-default.js","0c9196aa8943ce8a8045c9f4cc62915c"],["/photoswipe/photoswipe-ui-default.min.js","9517baca43cd4e9cb23ff337fbc1baa1"],["/photoswipe/photoswipe.css","7dc0df107159e1be66d4464171561e5b"],["/photoswipe/photoswipe.js","a8d26ff34943c859884acbd6b2531315"],["/photoswipe/photoswipe.min.js","f5cd6479c4e4682545a9603e6b50c741"],["/setup-log/blog-setup/github-pages-ssl.html","d5e315a4f7725d0c5a828ab2ac48dfe3"],["/sw-register.js","002612f21e31002937a2d25abc0fc52e"],["/zh-cn/archives/2015/03/index.html","68882603d53215693c7b59a05860dad6"],["/zh-cn/archives/2015/04/index.html","62015510d4ed39622f02d4eba44ecc93"],["/zh-cn/archives/2015/05/index.html","c26e3262dd3da49ada24308bdc45dc4d"],["/zh-cn/archives/2015/09/index.html","28dee802d4b2d74d68336e121ca99ae2"],["/zh-cn/archives/2015/12/index.html","069f943436919998759ae0c2af65018a"],["/zh-cn/archives/2015/index.html","dfa151d1539abb7f284024b535d437b8"],["/zh-cn/archives/2015/page/2/index.html","1fe59ea4ccb48499b2d554681ffda08c"],["/zh-cn/archives/2015/page/3/index.html","b1632d5c02b2b2d53d61e2dd5cd65c19"],["/zh-cn/archives/2016/01/index.html","a82bb14f9f98ffbc739c469bd3e67115"],["/zh-cn/archives/2016/03/index.html","5f167f22b86f2293790b2948c4b98f80"],["/zh-cn/archives/2016/04/index.html","16c712bfb42e9855184bb3809f6a7349"],["/zh-cn/archives/2016/06/index.html","cb263640e18a5cfc5b10f0c316bf275e"],["/zh-cn/archives/2016/09/index.html","41dd121a6c6126bf10f9bb6adf571793"],["/zh-cn/archives/2016/10/index.html","36eb2f9f8bf36a0d77e2aadca786dc51"],["/zh-cn/archives/2016/12/index.html","8d7a364a7a7af60a68c7db2e3f37ae31"],["/zh-cn/archives/2016/index.html","abab617ccf19ec214aa3b7b401df8e39"],["/zh-cn/archives/2016/page/2/index.html","3a908624d545b6c3305638c62bae8389"],["/zh-cn/archives/2017/01/index.html","baf5f36aca4f0265f4d9e55fcd666705"],["/zh-cn/archives/2017/04/index.html","5a46c9a02760f3cfca3f98b4b3fa4ada"],["/zh-cn/archives/2017/06/index.html","5a3818e757717fdff272926053851fe3"],["/zh-cn/archives/2017/08/index.html","b170b51e85548dfc2d31921af3882217"],["/zh-cn/archives/2017/index.html","598e6cdd1cab975768d42f6b4c6fee2c"],["/zh-cn/archives/index.html","2f035d0adbfc55d8e906159ae824d31f"],["/zh-cn/archives/page/2/index.html","aaa638eab08b08f839b59c2ee1513946"],["/zh-cn/archives/page/3/index.html","f3126c1cf4d9552133ba91db681497b9"],["/zh-cn/archives/page/4/index.html","de88b866a5e58bac2ca0e2f831f852c4"],["/zh-cn/archives/page/5/index.html","bb1e48b2d3dcd1c2ab3ae656f0544235"],["/zh-cn/categories/ACG/Music/index.html","2d89defca3ecf81427385e21ec0eb7be"],["/zh-cn/categories/ACG/Music/self-copy/index.html","365e8a9e536231ffe80df1f0b3ebc375"],["/zh-cn/categories/ACG/Travel/index.html","5eec42d2bd165e4a2f624f27473d3610"],["/zh-cn/categories/ACG/figures/index.html","07173fdb811d0afeeac2e6149a17b448"],["/zh-cn/categories/ACG/index.html","605e1defad4a70c548e646e58aedb765"],["/zh-cn/categories/dev/Front-End-Dev/index.html","c2dcdfac5b7f761e7d751d4275e3b1a0"],["/zh-cn/categories/dev/HTML-CSS/index.html","392ac8288736726f45fd881eb9072ccc"],["/zh-cn/categories/dev/android/index.html","7f3fb909b0e61345383af7e481dccfe1"],["/zh-cn/categories/dev/cpp/index.html","1f211d9b52e0f2f31732b6cad92e7864"],["/zh-cn/categories/dev/git/index.html","dee4d8bdc1374244bcf1dfff1c594dd3"],["/zh-cn/categories/dev/index.html","d7966c19ce1dbca9c8524d3d27516f28"],["/zh-cn/categories/dev/java/index.html","b2169bf138aba348ae3b1ce65e1c7a29"],["/zh-cn/categories/dev/page/2/index.html","d43db5393091100a9624000747cae1cb"],["/zh-cn/categories/maintaince/blog-setup/index.html","217eaa6fbad30d81122bd3c306c9db47"],["/zh-cn/categories/maintaince/index.html","ed772de875e0e5eb2665ddaf2efa5941"],["/zh-cn/categories/maintaince/macbook/index.html","fbba990c7c19fdcaa1d76b4a51e1e22f"],["/zh-cn/categories/maintaince/router-config/index.html","db83cdea3c52ce4127852e162cd50d98"],["/zh-cn/categories/notes/index.html","39e038e6b68a77b7eeda93fedecaac56"],["/zh-cn/categories/tricks/android/index.html","6e5677b2af34caa0cba28f862e2b726a"],["/zh-cn/categories/tricks/index.html","8861802ce7a4fce61068e542dba7fac4"],["/zh-cn/categories/uncategorized/index.html","b218be5ca5c87108d1ca136d16d454e7"],["/zh-cn/categories/works/Front-End-Dev/index.html","0e08ad2bb643a3615bd37b75d65658af"],["/zh-cn/categories/works/csharp-wpf/index.html","23907902480bb92a4c63ebe397478f7f"],["/zh-cn/categories/works/index.html","7a96fe1c1905a75f4fa6b210ff757ad2"],["/zh-cn/index.html","af5852388d96a1fc3c8311c4c921359f"],["/zh-cn/page/2/index.html","1c79903cf4761c5902b0b1b94f858b56"],["/zh-cn/page/3/index.html","ed9ea2efe27d8c1a144b106852b6a095"],["/zh-cn/page/4/index.html","5f4c8f74acb47cd91869eae52dcd1a95"],["/zh-cn/page/5/index.html","250658ac50c0141e2073c6e96f64f80e"]];
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
