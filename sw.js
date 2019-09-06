/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/03/WNDR4300-setup-log/index.html","6c81e4ff5e1b0b9aaf5ad23ff25e4855"],["/2015/03/android-hostname-change/index.html","69e5ca3a7341e0ad2e26c3f97958e39a"],["/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","56ed74736b062881668b5f4fbafa5ff3"],["/2015/04/android-chrome-issues-with-webpage/index.html","3002e59d2ac91b60bb65fbe67f7b3b98"],["/2015/04/cpp-study-log/index.html","41b79532ec9b2e65d8dd32834326b414"],["/2015/04/github-pages-ssl/index.html","bf5a66dfe0a968ff8063ee351898cd4f"],["/2015/04/hello-world/index.html","788a13fe18ea0cc126a77967b5ccd3a8"],["/2015/04/hexo-setup-log/index.html","73d58a887a64ac5cdeb0c0dc41c03c37"],["/2015/04/self-copy-cd-inazuma-1-html/index.html","9c32f39cf7c31475c665e83ce664706a"],["/2015/05/cpp-inherit/index.html","90a0b17806c398b3e4858dff0490fc51"],["/2015/05/cpp-polymorphism/index.html","8e3f756a924aef9e8846f466343dd2f4"],["/2015/09/android-root-ota/index.html","3508af9832de605847fd2a68279bde8b"],["/2015/09/java-learningNotes-1/index.html","58f2c015a9e83138f73e56b02004232e"],["/2015/09/newblog-newlife-2015/index.html","7f5f2f96d720e92b2ba2b4e16eefdae0"],["/2015/09/router-rebuild-2015/index.html","c1955275ff4b4f60a2765349b1760765"],["/2015/12/2015-12-21/index.html","1d3a79ac4e7d0e355cfecfe8c33b52b1"],["/2015/12/PixInTouch/index.html","54fe15aaa17ef7789ee75bdf115399de"],["/2015/12/git-study-1/index.html","41732ece912980e0b6233def23936dce"],["/2015/12/hexo-backup-and-migrate/index.html","93d07edef46ce7dbc94a8bc78a76fa2f"],["/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","063983de032b63357259e9ef2ffb2312"],["/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","755ec83c90fa76e212773c098e93272f"],["/2015/12/router-reconfig-2015/index.html","11413d81270a5358772430d675c31976"],["/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","05662477f98adad016a157fcf1823d67"],["/2016/01/2016-stepping-further/index.html","f6da67580d5078c13e65802804cbc1ca"],["/2016/01/Android-Study-1-22/index.html","d927758beadfb9e9c0982166aa33dbc8"],["/2016/03/2016-03-20/index.html","65c03d3d09ca784a6d806513a6224be6"],["/2016/03/GSC-535/index.html","a2140977bd1749a67a10720d52624d1f"],["/2016/03/gulpjs-1/index.html","b1bcd6cb2543241c9da3a8a3393c680f"],["/2016/03/hexo-theme-paper-white/index.html","c8df7c35b06687ef2a3512e9ccbf0b28"],["/2016/04/2016-04-19/index.html","4c2a286b47f71ff85905905d7232536b"],["/2016/06/2016-06-16/index.html","939c10ba3012587d9be3fedcc8a0f889"],["/2016/09/2016-09-18/index.html","9731838e56a52cc375df0ddcd7dd33db"],["/2016/10/2016-10-27/index.html","10e73e51e8656b4412cafa0e5ffcf618"],["/2016/12/config-switchresx-and-2khidpi/index.html","f7120fe3ab1c3cea0532546f3e03e58a"],["/2016/12/improve-duoshuo/index.html","d9e3c91633fcea9fd66704e646234e5b"],["/2016/12/use-travis-ci-your-blog/index.html","c4194647c6057ecba1a2301ca073a68b"],["/2017/01/2017-iyahoi/index.html","364c57dd522ee9ab27014dc3b270b1ca"],["/2017/01/webpack-amd/index.html","d54adff670284a51dc618cb1770b5e7d"],["/2017/04/kotobukiya-syaoran/index.html","b0efee371cc09f700376f925eb368d37"],["/2017/04/macbook-and-surface/index.html","cc0bd2fa17e0eaffdaaad013b7115405"],["/2017/04/uc-hyakuya-yuichiro/index.html","d6c92883a3ad660c0da66273f4c6b25d"],["/2017/06/noragami-seichijunrei/index.html","c9cc8454aacfa9724ebdb4a0430b6369"],["/2017/08/cross-compile-55-libev/index.html","dc6b3b46de30f6cb632ce933d4b77cdf"],["/2017/08/explore-service-worker-working-lifetime/index.html","acd92380bf93a2cc6e35011b5f00addd"],["/2017/08/kiminonawa-tokyo-seichijunrei/index.html","7d540fa008244eed4fe74209ea4cd0e0"],["/2017/09/record-user-login-status-methods/index.html","4c9073f12f9a8db2c55beff3b8c8f066"],["/2017/10/vue-typescript-early/index.html","bbe52a39c9e4dc8bbde974c4eeacc8a0"],["/2018/04/2017-end/index.html","502b2c929b8107b5c6731b158d4f197d"],["/2018/04/twitter-account-activity-api/index.html","f0e3ec9da7abfb3c68447aba66fb91fd"],["/2018/05/buddy-complex-seichijunrei/index.html","0851ead640003fb8f7147ec88374621b"],["/2019/05/2019-05-16-record-jp-digital-TV-on-nas/index.html","4c9d22900fd94c361b1658855540bdae"],["/2019/05/2019-05-17-google-io-tech/index.html","75cf2651e1b6cbf8f18fb8b9b602b755"],["/404.html","10adf0b42ce03230c02a23d0c1b890aa"],["/about/index.html","c4b1be0a514285f718f3ab8ffc4bdb2f"],["/archives/2015/03/index.html","1c440569cadc43c37fe39c1d29c362c9"],["/archives/2015/04/index.html","09348e56e5975e9565017e237b5519d6"],["/archives/2015/05/index.html","db50ac4b42ee5fd0b28cfeb9d0ec663f"],["/archives/2015/09/index.html","929327f613ae7bce9302b8b6de843fc9"],["/archives/2015/12/index.html","35676e5845b7cfc2695ff43558aabb6e"],["/archives/2015/index.html","69928f76b43cc92d1cce80ba31c77de4"],["/archives/2015/page/2/index.html","e4de68673352d1e18786c48b8fbdcaf5"],["/archives/2015/page/3/index.html","a59279801109bb1957c01275c9df6fb7"],["/archives/2016/01/index.html","873f30ca81413d2131db4d95f518cd5d"],["/archives/2016/03/index.html","09083dac69fe948d63896aef20a1ba80"],["/archives/2016/04/index.html","3f29587096fa3dee40ca52d28010cadb"],["/archives/2016/06/index.html","19662534d25a318954369b5ee2d9819c"],["/archives/2016/09/index.html","3ecb6ee05c229e94acf4d752551b4cca"],["/archives/2016/10/index.html","4aa0a5c0adb8b576adf56d6f19c1f149"],["/archives/2016/12/index.html","0355bf2b3dda5d953e30b9b2d1acbf9d"],["/archives/2016/index.html","bcce27ddeb685664bd010cf97e2baa8c"],["/archives/2016/page/2/index.html","d2e82ef9a3619feca3350d12bf02eee8"],["/archives/2017/01/index.html","6187c7964daecb7b69000f47fa1f42fe"],["/archives/2017/04/index.html","a157dc6521866f9b789c4c953c16d2e3"],["/archives/2017/06/index.html","95ae65a0a50a00db07d70bda7b81bed3"],["/archives/2017/08/index.html","12a33528c57afc054f17100e626b3349"],["/archives/2017/09/index.html","cf612f0f82a3ad33b84d02c4e0d85f8e"],["/archives/2017/10/index.html","db86b3f9053cd11b8607fb302f1f7774"],["/archives/2017/index.html","6fa5210f54ad0d5dc61810f01aa36e71"],["/archives/2017/page/2/index.html","60e2c1177dcf1a911b3e3aa727b4f454"],["/archives/2018/04/index.html","d1c73c3e06046aa9966bdf2dc5836fe2"],["/archives/2018/05/index.html","bbbfbcfbced83bf8fa8da6fabcbaee83"],["/archives/2018/index.html","c2339915809784b2dc175c25b0e4dfa6"],["/archives/2019/05/index.html","26445ec0953237896952eebb8fdc348f"],["/archives/2019/index.html","ee229805c1d567f080526f50861639ab"],["/archives/index.html","f9fdb35cb71aa72e408f1b327f41f710"],["/archives/page/2/index.html","81c5b45fe878f529e612b995d3899931"],["/archives/page/3/index.html","34210eeec0c49e068a05197af0230305"],["/archives/page/4/index.html","38c6b0e98b037b79e6bd13ee7149b8f2"],["/archives/page/5/index.html","e16387bf487733f47a0b6fed7db3f166"],["/archives/page/6/index.html","ef4abec2363aeab67d32cad5a63e3917"],["/assets/images/about-me.png","a066d06c3d9d1fe56c4d921cec7febf3"],["/baidu_verify_YbTSlpWIUJ.html","779049c3a50695ceb3a388ce1e8bc1b9"],["/categories/ACG/Music/index.html","3122955b7764df22a04e1ac8643f750e"],["/categories/ACG/Music/self-copy/index.html","35a68821db87deb433dd914fe6beb60f"],["/categories/ACG/Travel/index.html","f3e29bc153fb3e52efdc7234564821ef"],["/categories/ACG/figures/index.html","cdc95995d46c5b3a9ca178b7b170d647"],["/categories/ACG/index.html","664d4803707addb47655d05cfadfec96"],["/categories/dev/Front-End-Dev/index.html","35553dbd5b3ca7fd2ecd0f5ef4df6ab7"],["/categories/dev/HTML-CSS/index.html","48e71082c409710d6ab9d14ac65f2335"],["/categories/dev/android/index.html","15c320971d73c7bd7d7ffaebd97c6e09"],["/categories/dev/cpp/index.html","0ed8c49741181a9c2798bef5eb168eca"],["/categories/dev/git/index.html","8d928e74ca71b6c6eac2f18100e5f692"],["/categories/dev/index.html","9c4831c237f4588e58d53df255adefc7"],["/categories/dev/java/index.html","cb38fa37783160ba97ae80b95e41e3ae"],["/categories/dev/page/2/index.html","04d903d73978caee31ecb8369c1c0291"],["/categories/maintaince/blog-setup/index.html","e853ea99b54ae0fef115edc940b9ae2b"],["/categories/maintaince/index.html","c71c4846333128bc1db7f547af96cd2e"],["/categories/maintaince/macbook/index.html","7b176eeaad430ab74ae29196cb15606a"],["/categories/maintaince/router-config/index.html","557378c64f9da5f7478c967e3081284e"],["/categories/notes/index.html","84442dd7c3fe2a9b2efe1a98fa5d3b8c"],["/categories/tricks/android/index.html","834f857a19e49192ea6c8abe1f2c30fe"],["/categories/tricks/index.html","4a507c136a62044a90831c79d913ccf3"],["/categories/uncategorized/index.html","248909c5600cfa226a431e63880a5f79"],["/categories/works/Front-End-Dev/index.html","63cb299ff05d03e6d097b8034dd92eb2"],["/categories/works/csharp-wpf/index.html","10d9d98a36034f2f1b974c017d1f880f"],["/categories/works/index.html","456349aa99fadfd5ac9810f383be0dc9"],["/css/seichi.css","42693f35c4c482207368dd363ea27373"],["/css/style.css","1220ea645f73adefdf529a2abd3ada59"],["/google311213f0c8d812a9.html","51f1ee3c2f13a21a1a40b3dae4954454"],["/img/coderwall.png","1976fe70f1ee8ed243e0975402e06a2d"],["/img/delicious.png","952d9b54d8bcfe7b998f67ff48c4dbce"],["/img/douban.png","d42a163f932100e621d22732db34ecdb"],["/img/facebook.png","4bd685f6c9fdaccabf07bdd52173facb"],["/img/github.png","3c4b6267a1a3fedebdc7d089610ecfe7"],["/img/google.png","c385f5304465716b2d6c9ada94c657ab"],["/img/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["/img/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["/img/linkedin.png","4c72c4896f3c23f736cb1ad08f0c866e"],["/img/mail.png","38a7b8302dac028bf03b22d228938abf"],["/img/pinboard.png","9b6186cb97adbe50311f94e50f2392cf"],["/img/pinterest.png","e1b8e655d1b99b40ebcbd96977ae234e"],["/img/rss.png","ec8cf9b5a98011aa75cc0a4f25024dc9"],["/img/scrollbar_arrow.png","be5381cedbd6b778b1d92e224fd71cf7"],["/img/stackoverflow.png","039128ececb47b33bccedd98dc9fc809"],["/img/twitter.png","d2289a4936fefa41d9f92cf89939be5b"],["/img/weibo.png","b382032b316ee38c6d537fe9d36ae54c"],["/img/zhihu.png","e6352c0e1957beef3009268ae747c3aa"],["/index.html","a054bdc9967150bb8b6049f1d16ad532"],["/ja/2015/03/WNDR4300-setup-log/index.html","77abd324e48b8289a1d2cb8527d30279"],["/ja/2015/03/android-hostname-change/index.html","ec1e9ad8e5a70e3a10b706e1ee6e4e2a"],["/ja/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","b6b01550fcc435a8670e18fe545e30b7"],["/ja/2015/04/android-chrome-issues-with-webpage/index.html","906545804a6ab544fd1fc822241668b9"],["/ja/2015/04/cpp-study-log/index.html","99a96fa7cafbf8a428026326a4df88ec"],["/ja/2015/04/github-pages-ssl/index.html","7880f7ec9805bb2cc38bbe84f27419f7"],["/ja/2015/04/hello-world/index.html","72c7c950324fe06d1a8693d118702084"],["/ja/2015/04/hexo-setup-log/index.html","97546ed1323efa800e8d13ef3863cda0"],["/ja/2015/04/self-copy-cd-inazuma-1-html/index.html","628b373851623a48671ed6ed9de7325e"],["/ja/2015/05/cpp-inherit/index.html","6d539bde1bdc5c4ba4563d7dbbaea378"],["/ja/2015/05/cpp-polymorphism/index.html","2e6eecca5f8554441a1871cdb2388099"],["/ja/2015/09/android-root-ota/index.html","e65d648ab86449fbfd0ece0c6a52fe38"],["/ja/2015/09/java-learningNotes-1/index.html","31e75fc77b151a707bb160cfbf55c39f"],["/ja/2015/09/newblog-newlife-2015/index.html","02003eaeb9fcb4a121d1e5026d06dd4a"],["/ja/2015/09/router-rebuild-2015/index.html","c99d7151abf41f94a3742ef901539b49"],["/ja/2015/12/2015-12-21/index.html","bfada26dfd9093ba27fa6f474bb5fc3a"],["/ja/2015/12/PixInTouch/index.html","0d7234f0f15f3168ade8c06bcbacc174"],["/ja/2015/12/git-study-1/index.html","61565a8754a39c6d847fb7e9b1af87d4"],["/ja/2015/12/hexo-backup-and-migrate/index.html","335c6fc095f8b7bd4f7950e90594b9bb"],["/ja/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","273a0a5c4dfb7c6edd70990363715030"],["/ja/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","d4f12e5c469311cd434c07a978bddc43"],["/ja/2015/12/router-reconfig-2015/index.html","a46bf13fa15e0608560d20b28b887732"],["/ja/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","c02101ed97aabbf7838c3ccec3d99afc"],["/ja/2016/01/2016-stepping-further/index.html","bb6027e27ebea9fd79760da5dbbe85b2"],["/ja/2016/01/Android-Study-1-22/index.html","afbca3fcc2966d61981a8617e0864b0d"],["/ja/2016/03/2016-03-20/index.html","4a0dfc722666a857c6556119fbde2d59"],["/ja/2016/03/GSC-535/index.html","6ee38d8d414c8d10755a7aff39db82b0"],["/ja/2016/03/gulpjs-1/index.html","f640b715e9738a07929c8b16f15642e1"],["/ja/2016/03/hexo-theme-paper-white/index.html","d74a81dbc745117b1dcd5d9f45823712"],["/ja/2016/04/2016-04-19/index.html","7b0a9281a98854dfd92435860fa48bb0"],["/ja/2016/06/2016-06-16/index.html","f33c92b6ded9d55e3d6caab99eeab932"],["/ja/2016/09/2016-09-18/index.html","6a400f9dd22dab34da372da8d647a21b"],["/ja/2016/10/2016-10-27/index.html","f64332cd989ac5d28d202d9f6bcc4584"],["/ja/2016/12/config-switchresx-and-2khidpi/index.html","0d5765eb045ffc56f696a193d8514922"],["/ja/2016/12/improve-duoshuo/index.html","0578ee7e930e9ad177b298506828d46b"],["/ja/2016/12/use-travis-ci-your-blog/index.html","658841087e494f9180aa6ee630c6e700"],["/ja/2017/01/2017-iyahoi/index.html","67bdeb330c88eb49ce53a52e6e1133ba"],["/ja/2017/01/webpack-amd/index.html","86ae857322e5af50aff60aaf4b6f201d"],["/ja/2017/04/kotobukiya-syaoran/index.html","086b18528f948c8ef6385cbc6c177430"],["/ja/2017/04/macbook-and-surface/index.html","86797924ccb9dfe0a95ebb80c15d11c5"],["/ja/2017/04/uc-hyakuya-yuichiro/index.html","3536e0df4aa5d4439bef62ae246d0144"],["/ja/2017/06/noragami-seichijunrei/index.html","c1744f7df6325c174cfc428fc4a64d54"],["/ja/2017/08/cross-compile-55-libev/index.html","03201484a457af7eac1600ba3b06f235"],["/ja/2017/08/explore-service-worker-working-lifetime/index.html","cf121f234a21dd8f08de8692329a6d5d"],["/ja/2017/08/hello-jp-world/index.html","065bbb820786d072431dd21da013d592"],["/ja/2017/08/kiminonawa-tokyo-seichijunrei/index.html","b9f794aeb5e97898231095c692296443"],["/ja/2017/09/record-user-login-status-methods/index.html","d2dfe2327fb3143ba614e3d346cd7058"],["/ja/2017/10/vue-typescript-early/index.html","691004743f6ad4e0beccc08f803c0998"],["/ja/2018/04/2017-end/index.html","166f2ee108f7618d2ba0dd60b7082432"],["/ja/2018/04/twitter-account-activity-api/index.html","93136f6f23e9ea9e7517c084e9ad8d3d"],["/ja/2018/05/buddy-complex-seichijunrei/index.html","c5189c7da062de88a0013fe0c59110a3"],["/ja/2019/05/2019-05-16-record-jp-digital-TV-on-nas/index.html","44dfd31ee14aa449bacf05e8686e783e"],["/ja/2019/05/2019-05-17-google-io-tech/index.html","b09bc28d76160259b1d1510f3c7d1866"],["/ja/404.html","d0d31b24c07fd0d0c905bd30090654a4"],["/ja/about/index.html","899c8419213d10c49ed75f8f5de3bb42"],["/ja/archives/2017/08/index.html","35dc3ef4a4042565385959a23f5c1f87"],["/ja/archives/2017/09/index.html","98522c59f57051cfdf0770be56d775b5"],["/ja/archives/2017/10/index.html","960ec9f0a178bd13beb22b3e87a94b62"],["/ja/archives/2017/index.html","a9c1a69cc2079f27e70cb0a1ce476fb3"],["/ja/archives/2018/04/index.html","392301aa91b8e981424eb2a68c94c0e8"],["/ja/archives/2018/05/index.html","4b384d615a3fb0bdcf0a0ba7a810e1e1"],["/ja/archives/2018/index.html","6c4b3297a46a7ea06a6385da92eb5d56"],["/ja/archives/2019/05/index.html","22e5d5c33e9dedb6e19c8852bfddf5d1"],["/ja/archives/2019/index.html","04476212b4f18e71dbaebfce9dd4a50c"],["/ja/archives/index.html","835ce8fb96f6552c37cb9b1bcf55ee68"],["/ja/categories/ACG/Travel/index.html","40d6f1e94e9a4f9c323f96e0d6339d1f"],["/ja/categories/ACG/index.html","1b582dffae1bd7624ea5d3bb3be280df"],["/ja/categories/dev/Front-End-Dev/index.html","6b038d16aef2398876d18c01227990a4"],["/ja/categories/dev/index.html","3bae5145b569cd57270a8a0d1eeac983"],["/ja/categories/uncategorized/index.html","a449fa8d975e4defbb58b9bae422e2d4"],["/ja/index.html","2babdd35ff7b5bbee0db1874c2a81d22"],["/ja/nihongo-test-page/index.html","0376d64f3b884b4e1fba769daec6b586"],["/js/instagram.js","7d7a9e2e7286ba2d5b6d12068214f0c3"],["/js/jquery.lazyload.js","28c23bc40080d31144776e9a8736837f"],["/js/main.js","2e92f29b0cd90bddc062915eb46a858c"],["/js/mobile.js","dc84e1287e89e3c1bba67fd47b8656b1"],["/js/nextpageajax.js","c3bde8d7bb1f967fb319f57a187ea51a"],["/js/pc.js","631b535186aab0e262485ee2bf9da628"],["/js/ripple-effects.js","b9c11903da0ef5c3d790b41369c3137e"],["/js/share.js","de52ac3d43e43c1951a08b0804458a8e"],["/js/totop.js","661822968b58fd439f46bd54031238d6"],["/keep_origin/affiliate_jump.html","71bf6d72c5d080ec2b3f8ecfae3d71ed"],["/nihongo-test-page/index.html","9f6910cac99f09b2a1e9348fc59c2833"],["/page/2/index.html","16ba7f18e7beccec684e603ae6bfc7f5"],["/page/3/index.html","128d1f5c6f204db81eb6a300e5155f7e"],["/page/4/index.html","ff09cd0b88d560a236cf9b15ec2e7128"],["/page/5/index.html","0e7a8a75f128599e0b69417f945ac116"],["/page/6/index.html","406b682615dbfb794bc6c4057ef91bbd"],["/photoswipe/default-skin/default-skin.css","426e8908d7426603ca203b6d16281b1e"],["/photoswipe/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photoswipe/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photoswipe/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photoswipe/photoswipe-ui-default.js","0c9196aa8943ce8a8045c9f4cc62915c"],["/photoswipe/photoswipe-ui-default.min.js","9517baca43cd4e9cb23ff337fbc1baa1"],["/photoswipe/photoswipe.css","7dc0df107159e1be66d4464171561e5b"],["/photoswipe/photoswipe.js","a8d26ff34943c859884acbd6b2531315"],["/photoswipe/photoswipe.min.js","f5cd6479c4e4682545a9603e6b50c741"],["/setup-log/blog-setup/github-pages-ssl.html","d5e315a4f7725d0c5a828ab2ac48dfe3"],["/sw-register.js","d9c5e6fd181bd87b125506c834b9e552"],["/zh-cn/archives/2015/03/index.html","7d17369fb31b821b8df6c2a121f8991d"],["/zh-cn/archives/2015/04/index.html","5bbab552709852caecdd3faf5cc882f6"],["/zh-cn/archives/2015/05/index.html","c80b6b02381b7c37930cbeb1eef7ddb4"],["/zh-cn/archives/2015/09/index.html","d2f66682cd9c6de51177fcc97b3d38ad"],["/zh-cn/archives/2015/12/index.html","22c90774d714307a1061ab50e2475019"],["/zh-cn/archives/2015/index.html","67492ad5a9085efee5d84346a37a0e53"],["/zh-cn/archives/2015/page/2/index.html","13b18e3c3d496a2637b08d45e56818a7"],["/zh-cn/archives/2015/page/3/index.html","bd1089a9bb5a7f185865e82f06477e32"],["/zh-cn/archives/2016/01/index.html","856d54f944f8e4d890e53e0bf2591e1f"],["/zh-cn/archives/2016/03/index.html","eea07745429b959ed88fad1ad43eb778"],["/zh-cn/archives/2016/04/index.html","9b45c7176e09c0a952687c400b39d0c3"],["/zh-cn/archives/2016/06/index.html","1fa0cd3639b2ca35fa6da2e89a782847"],["/zh-cn/archives/2016/09/index.html","e4e2fcdfe6c3eab94dfe440629e1de3e"],["/zh-cn/archives/2016/10/index.html","e58fff8794d7d00344be675f8d57feb4"],["/zh-cn/archives/2016/12/index.html","deb1a1597affcc9ec900e474d5b9e61f"],["/zh-cn/archives/2016/index.html","c22e97b5af3981a3cdabd2857659ae62"],["/zh-cn/archives/2016/page/2/index.html","e0eeee586a6bcd31a376102920d6b839"],["/zh-cn/archives/2017/01/index.html","ecefd28e069e77ce5123951a9d0148ee"],["/zh-cn/archives/2017/04/index.html","c890414a3c35b102f55e1e1a438c2d97"],["/zh-cn/archives/2017/06/index.html","8e4c1eab7d8fec597916c407574d6220"],["/zh-cn/archives/2017/08/index.html","5f87044e0c379bbc9a06dd953dbf33c5"],["/zh-cn/archives/2017/09/index.html","01244d99189cc4371d514e1288c5b8a2"],["/zh-cn/archives/2017/10/index.html","dd2e5d4888b0c5b90faf805f8c85d105"],["/zh-cn/archives/2017/index.html","a04c6760b4ea0da8b019f8b6bf26c57a"],["/zh-cn/archives/2017/page/2/index.html","fc6c2fe316a223c36b0542238df0f18a"],["/zh-cn/archives/2018/04/index.html","5c8747de92d4a3bd3a1a1aa8fd7c1440"],["/zh-cn/archives/2018/05/index.html","77807102d8b8a164d268e68b22886a4a"],["/zh-cn/archives/2018/index.html","0ba962313258598137aad39355a34a65"],["/zh-cn/archives/2019/05/index.html","9e683b56fbc531879cc35afd168d9e0a"],["/zh-cn/archives/2019/index.html","be98a115dfd211f52d057060af98a262"],["/zh-cn/archives/index.html","977b43ee365aae76872b7d0cbcf3b1af"],["/zh-cn/archives/page/2/index.html","fbced2ba3e3bd5b1285b02542848be63"],["/zh-cn/archives/page/3/index.html","f73d7fea3dcec9760ee30ab4861aa0b1"],["/zh-cn/archives/page/4/index.html","21d4cbe3ddbe9d887413f8f84aa0171c"],["/zh-cn/archives/page/5/index.html","90e46d673756f7db9933ce78a3b8b7c1"],["/zh-cn/archives/page/6/index.html","869888bedb1433868b890d70fa02a9f1"],["/zh-cn/categories/ACG/Music/index.html","90c059e8f194d749c04ec14aa416f991"],["/zh-cn/categories/ACG/Music/self-copy/index.html","8e9a3dcc170b16398664a4ee2a1593c9"],["/zh-cn/categories/ACG/Travel/index.html","856810f2551731165f049afb4d9bd4c1"],["/zh-cn/categories/ACG/figures/index.html","73b55073f56277457735900c3c23f0a6"],["/zh-cn/categories/ACG/index.html","ecdf1acd13691078deec183c20b7a0b1"],["/zh-cn/categories/dev/Front-End-Dev/index.html","3a3bb1b1b3c31422ee4f16ead1630f1c"],["/zh-cn/categories/dev/HTML-CSS/index.html","2bbd61c1417221449d401bcf2e589187"],["/zh-cn/categories/dev/android/index.html","e19686a04cf20257c42f3bfc4acae359"],["/zh-cn/categories/dev/cpp/index.html","89600cf6d5b951f8b7236a84003901ec"],["/zh-cn/categories/dev/git/index.html","b11d8c2b39669e6d882311f73f508606"],["/zh-cn/categories/dev/index.html","30ec9a252f33d884150d5bac47caadac"],["/zh-cn/categories/dev/java/index.html","563c7b6e5876bc320cab298418218fc6"],["/zh-cn/categories/dev/page/2/index.html","0b497533d23e18247346e70e30018282"],["/zh-cn/categories/maintaince/blog-setup/index.html","d86731da4ba9389d69915055ffa45690"],["/zh-cn/categories/maintaince/index.html","ba0c27c8c918a075d821e1ab1f17d98f"],["/zh-cn/categories/maintaince/macbook/index.html","cfdb7bacfaa72e550fe8b2cabc3aa7c0"],["/zh-cn/categories/maintaince/router-config/index.html","b3b26a0b8f99dd1778e5bb494cf44372"],["/zh-cn/categories/notes/index.html","7ac4293a1f94bca12ee6cfd45fa0b941"],["/zh-cn/categories/tricks/android/index.html","2e0ed6c208da0e0980f12b75ee8e9d8f"],["/zh-cn/categories/tricks/index.html","20522cb8a665bdcdac1e0fbe7e632f1e"],["/zh-cn/categories/uncategorized/index.html","ee32f59567c8a41cdcabce389d96ee4d"],["/zh-cn/categories/works/Front-End-Dev/index.html","b9799994643c6fe53945436371d57f7a"],["/zh-cn/categories/works/csharp-wpf/index.html","8418cbdc437e9613889820045ebcf568"],["/zh-cn/categories/works/index.html","8c86a8eaad2636fd80e368c73d65e102"],["/zh-cn/index.html","923d5d4b6f4d2b0b74367566c575dc09"],["/zh-cn/page/2/index.html","e0a846c722c273142df71915d797ef1e"],["/zh-cn/page/3/index.html","8b16000c799be5ebda45957b5889c5c6"],["/zh-cn/page/4/index.html","85738ad4680ad1125c3fd2cdeeffd314"],["/zh-cn/page/5/index.html","5714d9bdf0d4a166cdcbcb82029d2ad2"],["/zh-cn/page/6/index.html","7bd5b063931084e509aa83b7e84f8dc7"]];
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
