/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/03/WNDR4300-setup-log/index.html","ed6a6fb91aaa8c1e50a2a1a82e14e440"],["/2015/03/android-hostname-change/index.html","09a1e1b6f07d2a95766a568d5681a825"],["/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","b60c42600a3580cf5612afdc018430e6"],["/2015/04/android-chrome-issues-with-webpage/index.html","bb82518bd2db0b4075a8be045b71bf43"],["/2015/04/cpp-study-log/index.html","295782a00e0f8893d9de1304bf2d26d1"],["/2015/04/github-pages-ssl/index.html","0b868f96bb3a1d2fc0955cfccdeb7025"],["/2015/04/hello-world/index.html","c199d83a8b5199f3faa44f72a85532f7"],["/2015/04/hexo-setup-log/index.html","2d3efb966184e69ebea3706575267314"],["/2015/04/self-copy-cd-inazuma-1-html/index.html","e3cd7f3c31a24d0918ced49e820d1276"],["/2015/05/cpp-inherit/index.html","3f57398c9ba1ba8390a42c55e6c6bf0f"],["/2015/05/cpp-polymorphism/index.html","250d06195f1a47fe6545e455e9cd5e16"],["/2015/09/android-root-ota/index.html","5fd43410eb65c40ac2f2c8037e65cf57"],["/2015/09/java-learningNotes-1/index.html","f9489a696e679abf11fa519392dbbb8a"],["/2015/09/newblog-newlife-2015/index.html","08b697512bf3c350f318a4c28089804a"],["/2015/09/router-rebuild-2015/index.html","edb0e84415a51b1e0cf919e1ff88bbf1"],["/2015/12/2015-12-21/index.html","d4765f303c69731721a851e031a2ea46"],["/2015/12/PixInTouch/index.html","23a6380c2602ee23296283d4cad660df"],["/2015/12/git-study-1/index.html","e534d3fadcd73e1be2810bc171e689fc"],["/2015/12/hexo-backup-and-migrate/index.html","7992ab73ece59c69d512afab8efc4c12"],["/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","1c9749621f1214930d4fb25738f31490"],["/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","ebd8f1896639b10933e2d9155ad8f80a"],["/2015/12/router-reconfig-2015/index.html","1cafe37992239e3a148b801a2a620c05"],["/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","f66e415feeb3251415b53bd9ed97f7c4"],["/2016/01/2016-stepping-further/index.html","bb1b0b17b51d05ef8daa9fa35347ae21"],["/2016/01/Android-Study-1-22/index.html","4dd676d916967e99c16a0ef3a020a5a0"],["/2016/03/2016-03-20/index.html","fc7b92fffd5351db6ddc05b56375bc9e"],["/2016/03/GSC-535/index.html","ded5f20168fb77c85a60538ca6bf36de"],["/2016/03/gulpjs-1/index.html","efc939734d05b67aa347e93fa5e4beb5"],["/2016/03/hexo-theme-paper-white/index.html","2013d11631ffda695fc578a8d43957c1"],["/2016/04/2016-04-19/index.html","d3cb99d3946fd01cd34c63031a4bdd83"],["/2016/06/2016-06-16/index.html","18c230a9c59f30b06fca53c981aa50df"],["/2016/09/2016-09-18/index.html","55be51b562684de0178c8c01ab23b974"],["/2016/10/2016-10-27/index.html","04043c9f69f9249b702568064c718b67"],["/2016/12/config-switchresx-and-2khidpi/index.html","7e8c4f6a5d51ba15054afcc761e6e4f5"],["/2016/12/improve-duoshuo/index.html","1beab3faafad2853b3d0859ed03a0bef"],["/2016/12/use-travis-ci-your-blog/index.html","656862e9082e34fa841bd20c174d142f"],["/2017/01/2017-iyahoi/index.html","2c3241c717321d88c123ab0da5d23fcd"],["/2017/01/webpack-amd/index.html","78d869f89b431523ae22ce1dddcd5e1d"],["/2017/04/kotobukiya-syaoran/index.html","cb33125314bfb658f296311ae91229b1"],["/2017/04/macbook-and-surface/index.html","19b0d1693bffd430daba6c870b81acc1"],["/2017/04/uc-hyakuya-yuichiro/index.html","e3f68530a65610fa308f51ca40791cb1"],["/2017/06/noragami-seichijunrei/index.html","3153c72cd42c5e2c86d70dcc8a24ab92"],["/2017/08/cross-compile-55-libev/index.html","42b7a93b0872ef3bc885907fdd218fe2"],["/2017/08/explore-service-worker-working-lifetime/index.html","1c48bcb2c83f1fe1a068aad99a0c658a"],["/2017/08/kiminonawa-tokyo-seichijunrei/index.html","06ae74950744e1ea2a3c5c8ca654ff30"],["/2017/09/record-user-login-status-methods/index.html","38213a3b96298c85356c1d3d2057c120"],["/2017/10/vue-typescript-early/index.html","3313d7844f47902b1648ec4c531d6bde"],["/2018/04/2017-end/index.html","9dd9fc72348ee54f3ff74619712108d8"],["/2018/04/twitter-account-activity-api/index.html","804d662114035067c04486a9d158191d"],["/2018/05/buddy-complex-seichijunrei/index.html","cfe39ab8fa6583b43ba6b68d4d0443a1"],["/2019/05/2019-05-16-record-jp-digital-TV-on-nas/index.html","5ad36091fe10ad3acbb67fb31ca03f46"],["/2019/05/2019-05-17-google-io-tech/index.html","57db33140b1354089d64f85727cce5bf"],["/404.html","65e5a582a9db2edc6bcd4714fa6434b9"],["/about/index.html","08ba1060c7b92f1cd244f0bc8e8565c5"],["/archives/2015/03/index.html","d84efd450a8b7973735b07f5a3bb0d00"],["/archives/2015/04/index.html","1fe03398bfc72fa41d1e2acc99c2e47a"],["/archives/2015/05/index.html","542276cb0474a7a2adeac3d4a18a87f4"],["/archives/2015/09/index.html","f51ff4af5218ec32e95d6d9e63ab57b5"],["/archives/2015/12/index.html","3ca297625e02374b7696d363d53a5d66"],["/archives/2015/index.html","4e8daeebbaef7ade3804d2623591b167"],["/archives/2015/page/2/index.html","ac39c6a8a3972cd22c2f8f1b82876aaf"],["/archives/2015/page/3/index.html","ff0d2815f385b7471f58906cc8b19669"],["/archives/2016/01/index.html","e641a1ca874eeb4b772ce341dd8a5970"],["/archives/2016/03/index.html","4ace5c2f2981fd4019e426d7bf39fff9"],["/archives/2016/04/index.html","d85e6d1dfaba1ecce7de484d64bd475a"],["/archives/2016/06/index.html","8f34f3ef21d0f7e65be469cddc1a9a3e"],["/archives/2016/09/index.html","6781c0b921b4cf65988a17bc6f7f80a3"],["/archives/2016/10/index.html","16ca6c9274f4850ca366a4c13f13bc79"],["/archives/2016/12/index.html","0ee242837f3aa7d53a26698d718d4b3c"],["/archives/2016/index.html","3dc97c01d3ed2190a18c146069a13396"],["/archives/2016/page/2/index.html","7fcd280fca71f32d05d97be089c14f67"],["/archives/2017/01/index.html","32131fcb840893523099de0e5f91ded8"],["/archives/2017/04/index.html","b22dd16346b6d2f8cffc789b718a464e"],["/archives/2017/06/index.html","e6621277f3bcd02dd76240405c5edde4"],["/archives/2017/08/index.html","9717501023c6c5b69e5d9820128f21b9"],["/archives/2017/09/index.html","6dea54ba8f45aa6b10b975a11d9aab8e"],["/archives/2017/10/index.html","cb6558a477c782cbe79ba2a50eeb3c84"],["/archives/2017/index.html","03b3382bf9e7d9a7565de0bcd68418d8"],["/archives/2017/page/2/index.html","009400001007716a50e15845786aae11"],["/archives/2018/04/index.html","596f60dbf9efba9836028c935b3e527b"],["/archives/2018/05/index.html","5b005da95df30a4aeef700432fa2a89c"],["/archives/2018/index.html","ab3bf942489747c742091c06b2d0b07c"],["/archives/2019/05/index.html","e27f0bcd0ee8c11f63a9a466e8953388"],["/archives/2019/index.html","83a43534a8daf2c0f692c385f520c461"],["/archives/index.html","c8b3770ab65c1503f1f97b1ce87bf5a9"],["/archives/page/2/index.html","519960fcc376bfccdad65db52a8253e2"],["/archives/page/3/index.html","ef123f59bef89e762faf35303101dd31"],["/archives/page/4/index.html","16d0e6a7588f54de80fa2be43f021798"],["/archives/page/5/index.html","904075947106ed1aa04e0c4581e43458"],["/archives/page/6/index.html","0db5c026d92918795ffff80603bc9ecb"],["/assets/images/about-me.png","a066d06c3d9d1fe56c4d921cec7febf3"],["/baidu_verify_YbTSlpWIUJ.html","779049c3a50695ceb3a388ce1e8bc1b9"],["/categories/ACG/Music/index.html","8f9b1ad36311f93fee2df3ac460b0a7d"],["/categories/ACG/Music/self-copy/index.html","d953674f9dba6a1fa8c374a948de67a4"],["/categories/ACG/Travel/index.html","51eabae439c4dea148f637a6de99355b"],["/categories/ACG/figures/index.html","6e15e83312c53ac97282c53641ae1c80"],["/categories/ACG/index.html","ba342327d62e381a432d21a2bc81e0d4"],["/categories/dev/Front-End-Dev/index.html","d8f2b144eb54c31a01b302cd1416c8be"],["/categories/dev/HTML-CSS/index.html","496a3000fd736ec980a2a644f5768487"],["/categories/dev/android/index.html","3ccde59860f9700541348778c685e029"],["/categories/dev/cpp/index.html","33a23d5bedc8c54bdffd770db29cb400"],["/categories/dev/git/index.html","73962e3196d68419b20701d410e9a062"],["/categories/dev/index.html","c15f6a1c329d1aa4268bb16f2be6084e"],["/categories/dev/java/index.html","c9a7119ac805894b68d6cd67165194bd"],["/categories/dev/page/2/index.html","004d2477862e339563dee96d9fdf280e"],["/categories/maintaince/blog-setup/index.html","dd50de209dfc0182cb777524627f4837"],["/categories/maintaince/index.html","26edfd87ee295cee0566c9e8d0c8660c"],["/categories/maintaince/macbook/index.html","5a3da7a74b1231389bba254b56aef3cc"],["/categories/maintaince/router-config/index.html","59e8c5c8e70ca6ab96450b21f886b616"],["/categories/notes/index.html","61833d8c4094e945fc87ef253d12afe1"],["/categories/tricks/android/index.html","66cb4ce235c0132a9f25c17ede08dff6"],["/categories/tricks/index.html","5b1af58ddae13eb37b092276eeb893c7"],["/categories/uncategorized/index.html","b8c380e2d1c0f1f01f89261d332d948c"],["/categories/works/Front-End-Dev/index.html","2b990a4779e2131ed5e98621862529df"],["/categories/works/csharp-wpf/index.html","ce8163c551b60373b7e6d6b0c8d1f727"],["/categories/works/index.html","aac2558e3153e297f31ba125338d22bf"],["/css/seichi.css","c60ad00990790aacbe0a9ff08766c515"],["/css/style.css","e3abc56736917946e8536ef38cc2c5cd"],["/google311213f0c8d812a9.html","51f1ee3c2f13a21a1a40b3dae4954454"],["/img/coderwall.png","1976fe70f1ee8ed243e0975402e06a2d"],["/img/delicious.png","952d9b54d8bcfe7b998f67ff48c4dbce"],["/img/douban.png","d42a163f932100e621d22732db34ecdb"],["/img/facebook.png","4bd685f6c9fdaccabf07bdd52173facb"],["/img/github.png","3c4b6267a1a3fedebdc7d089610ecfe7"],["/img/google.png","c385f5304465716b2d6c9ada94c657ab"],["/img/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["/img/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["/img/linkedin.png","4c72c4896f3c23f736cb1ad08f0c866e"],["/img/mail.png","38a7b8302dac028bf03b22d228938abf"],["/img/pinboard.png","9b6186cb97adbe50311f94e50f2392cf"],["/img/pinterest.png","e1b8e655d1b99b40ebcbd96977ae234e"],["/img/rss.png","ec8cf9b5a98011aa75cc0a4f25024dc9"],["/img/scrollbar_arrow.png","be5381cedbd6b778b1d92e224fd71cf7"],["/img/stackoverflow.png","039128ececb47b33bccedd98dc9fc809"],["/img/twitter.png","d2289a4936fefa41d9f92cf89939be5b"],["/img/weibo.png","b382032b316ee38c6d537fe9d36ae54c"],["/img/zhihu.png","e6352c0e1957beef3009268ae747c3aa"],["/index.html","026d113d4c5bc5353000aa84a4775744"],["/ja/2015/03/WNDR4300-setup-log/index.html","c3f5cc4a37cd4208b4ddbd56a3fbda83"],["/ja/2015/03/android-hostname-change/index.html","32b8635faa62791f8b4db03d8fcf951a"],["/ja/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","fa8a298faef7a79bcd90eef412c7426d"],["/ja/2015/04/android-chrome-issues-with-webpage/index.html","d469b7a75a1008dd9a97f33acd36f258"],["/ja/2015/04/cpp-study-log/index.html","15bc21297cf1e9f55411a1f3e0176280"],["/ja/2015/04/github-pages-ssl/index.html","533d3691191cf124b48bd9439e8bcfbc"],["/ja/2015/04/hello-world/index.html","4b3bbbf345b63ea8d216751021ba32f8"],["/ja/2015/04/hexo-setup-log/index.html","2453bd42839e657708b46aed18ae9dc5"],["/ja/2015/04/self-copy-cd-inazuma-1-html/index.html","678923dfacb135e6c32c4fa123a8466b"],["/ja/2015/05/cpp-inherit/index.html","6bfc8039913e9eaac59d3842e237268d"],["/ja/2015/05/cpp-polymorphism/index.html","771d86e971948562e5095455aee487cc"],["/ja/2015/09/android-root-ota/index.html","09b5187e0c1c16291cafc1e9a9f454fc"],["/ja/2015/09/java-learningNotes-1/index.html","7df08192bf9aa98a6b77be410260a4b2"],["/ja/2015/09/newblog-newlife-2015/index.html","a637748e38eda03194b49ac3df902501"],["/ja/2015/09/router-rebuild-2015/index.html","853cffe7d5d31ef693be19e3bbd029f6"],["/ja/2015/12/2015-12-21/index.html","538534a931307b2675c81af4b3a0d9e4"],["/ja/2015/12/PixInTouch/index.html","09f00bad688dc54f66bebb368f9ce723"],["/ja/2015/12/git-study-1/index.html","39904c126e55e733803fac646bec9d37"],["/ja/2015/12/hexo-backup-and-migrate/index.html","0275f7db0334a1e3a9b90242886d46ac"],["/ja/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","633815a8e813ed4f17cab29c9061ae56"],["/ja/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","4bfb097ca5c2ac97b223133cfa90dd3c"],["/ja/2015/12/router-reconfig-2015/index.html","c5cb8a3ea74c9954142cd29786c2de28"],["/ja/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","7ed9f5171fdc84ebf32c6fe4e53aa2ff"],["/ja/2016/01/2016-stepping-further/index.html","2be086ec82b9526e804b6023222afa34"],["/ja/2016/01/Android-Study-1-22/index.html","6b713b31c45bfd8f6974c1a2eb22fdb6"],["/ja/2016/03/2016-03-20/index.html","b158db8b1793473a6a91aaadb51a57ca"],["/ja/2016/03/GSC-535/index.html","b347f65897dd0bc098ae881fe8ac7266"],["/ja/2016/03/gulpjs-1/index.html","45894ba38e3168203eeaf00e342afc10"],["/ja/2016/03/hexo-theme-paper-white/index.html","39f2c422509524e4a299601d2ba1d3ce"],["/ja/2016/04/2016-04-19/index.html","96d510acf3720136bdb22fb33cc5546b"],["/ja/2016/06/2016-06-16/index.html","75a2f20587de525c93f759f2fa5b2040"],["/ja/2016/09/2016-09-18/index.html","9524f9279207a6afa2c88377606bdc09"],["/ja/2016/10/2016-10-27/index.html","eb79dd9cefc77907807ca595bf33cfbc"],["/ja/2016/12/config-switchresx-and-2khidpi/index.html","5bbb6b4e55c8068dad5735f17f7077a9"],["/ja/2016/12/improve-duoshuo/index.html","81a0a5b7c701058ba1014e185c8ca590"],["/ja/2016/12/use-travis-ci-your-blog/index.html","0248bb5105bba9e44b39eed7820a98ab"],["/ja/2017/01/2017-iyahoi/index.html","95b4dce1359b2ade502929deaced2997"],["/ja/2017/01/webpack-amd/index.html","be865b69ca5be87f6d29101ac49f214e"],["/ja/2017/04/kotobukiya-syaoran/index.html","511ee6a81d1b0f98645cd59993f47fff"],["/ja/2017/04/macbook-and-surface/index.html","97af9a73aa51a583f86bed09bb1e993a"],["/ja/2017/04/uc-hyakuya-yuichiro/index.html","5eba22f00936401c24be8f1639c7d141"],["/ja/2017/06/noragami-seichijunrei/index.html","a3ab3bf8e247f7ffcd2f9bbe804de1db"],["/ja/2017/08/cross-compile-55-libev/index.html","b9f3e9066ccc46ba488e8031e6f3b319"],["/ja/2017/08/explore-service-worker-working-lifetime/index.html","a6fec20b499c0607279b8c61db66d0c0"],["/ja/2017/08/hello-jp-world/index.html","0bb6b0ad2c2b062e94e620a318375588"],["/ja/2017/08/kiminonawa-tokyo-seichijunrei/index.html","8d6cd44af9c0ef2c3228b7c627b95225"],["/ja/2017/09/record-user-login-status-methods/index.html","4f0ea123187bb469b1c4ca505fd87a28"],["/ja/2017/10/vue-typescript-early/index.html","39cc4cdf9073852e67f8fb0d300f4924"],["/ja/2018/04/2017-end/index.html","66936162b18db5af644bba50724da749"],["/ja/2018/04/twitter-account-activity-api/index.html","2c6dce57ac075064ed4b4f4b4435a44c"],["/ja/2018/05/buddy-complex-seichijunrei/index.html","0fc252c1611242c5df13e4ad90c81a89"],["/ja/2019/05/2019-05-16-record-jp-digital-TV-on-nas/index.html","cb7d3887e83087292684ff620a21cfa4"],["/ja/2019/05/2019-05-17-google-io-tech/index.html","b12338e9c71850c43d52c6dbbf9f87b4"],["/ja/404.html","6b27898c95383fca0a8b2144c67600c2"],["/ja/about/index.html","25d27749034ca41b32773ba1869fedf3"],["/ja/archives/2017/08/index.html","b1a17cc06f353b9d3c1605eedf0f18e6"],["/ja/archives/2017/09/index.html","ec82230280cb5d085d09a98073d48cff"],["/ja/archives/2017/10/index.html","7dab1c072d1731077dc56610fbd939eb"],["/ja/archives/2017/index.html","ae407491d3d3fc99272b1bd7870b780c"],["/ja/archives/2018/04/index.html","618a57460f4f38b7328e2866b188edff"],["/ja/archives/2018/05/index.html","046ca1c769186a38a4fdc215747b1b10"],["/ja/archives/2018/index.html","a2a7354c261c0b3984b5fc6ec5ab0996"],["/ja/archives/2019/05/index.html","279974c3a3b14cc26456b6bed2251856"],["/ja/archives/2019/index.html","e407cd6a0db684433b4fb8f7ff31027b"],["/ja/archives/index.html","6f43919e11c0ebcc74dd1d8fff86467a"],["/ja/categories/ACG/Travel/index.html","8ada006418dd28e3d3dc738b8e82c7ff"],["/ja/categories/ACG/index.html","3dd6144c8aed187e4a7fc02cde5cbbeb"],["/ja/categories/dev/Front-End-Dev/index.html","b059f3fc6539492d218b50dd903947bb"],["/ja/categories/dev/index.html","a36fe756ce0a86c19754923baf98de55"],["/ja/categories/uncategorized/index.html","b9235bd5583ddb7c71182a65b15985f8"],["/ja/index.html","9ce2c634d617b015780158e4db3682f0"],["/ja/nihongo-test-page/index.html","3f0eb8931ebfec5a5c7d7256d729aa1f"],["/ja/resume/en/index.html","67adc8000c141bf556dbcb7ad2ea0a7e"],["/ja/resume/index.html","78f6dfebc940f147852022b3e2cfa15d"],["/ja/resume/ja/index.html","02049ef6df330151e4f852c5f5142b21"],["/js/instagram.js","7d7a9e2e7286ba2d5b6d12068214f0c3"],["/js/jquery.lazyload.js","28c23bc40080d31144776e9a8736837f"],["/js/main.js","2e92f29b0cd90bddc062915eb46a858c"],["/js/mobile.js","20029df2609ddd5d2b2d346edbb297c0"],["/js/nextpageajax.js","c3bde8d7bb1f967fb319f57a187ea51a"],["/js/pc.js","631b535186aab0e262485ee2bf9da628"],["/js/ripple-effects.js","b9c11903da0ef5c3d790b41369c3137e"],["/js/share.js","de52ac3d43e43c1951a08b0804458a8e"],["/js/totop.js","661822968b58fd439f46bd54031238d6"],["/keep_origin/affiliate_jump.html","71bf6d72c5d080ec2b3f8ecfae3d71ed"],["/nihongo-test-page/index.html","9984b023c9c753625ddd714387a08da8"],["/page/2/index.html","57f949f2650c05100657d4102a2c5a5b"],["/page/3/index.html","3dd18db872c1413584ec779c98c0e799"],["/page/4/index.html","858a351f114c4630756b749f24ce7327"],["/page/5/index.html","8332a0262d60e31a430309e348703e61"],["/page/6/index.html","f2153895d66784c2f8c9bd867f5cdaeb"],["/photoswipe/default-skin/default-skin.css","426e8908d7426603ca203b6d16281b1e"],["/photoswipe/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photoswipe/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photoswipe/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photoswipe/photoswipe-ui-default.js","0c9196aa8943ce8a8045c9f4cc62915c"],["/photoswipe/photoswipe-ui-default.min.js","9517baca43cd4e9cb23ff337fbc1baa1"],["/photoswipe/photoswipe.css","7dc0df107159e1be66d4464171561e5b"],["/photoswipe/photoswipe.js","a8d26ff34943c859884acbd6b2531315"],["/photoswipe/photoswipe.min.js","f5cd6479c4e4682545a9603e6b50c741"],["/resume/en/index.html","7240004cdf4e17369dbd3d2bf5c5881b"],["/resume/index.html","778267a793c3c4415a33b91b46096821"],["/resume/ja/index.html","9df8a0c93d6a6f5dbec37527f5a6c6ba"],["/setup-log/blog-setup/github-pages-ssl.html","d5e315a4f7725d0c5a828ab2ac48dfe3"],["/sw-register.js","409347fe44d40ceaea5d1297ffe17212"],["/zh-cn/archives/2015/03/index.html","6ed4c111ea43ede97e68dbefca2410c6"],["/zh-cn/archives/2015/04/index.html","c8d5570f5e5dc53235c7f63f0d34344c"],["/zh-cn/archives/2015/05/index.html","22b7b5411b287c582e8c2375ad5c3137"],["/zh-cn/archives/2015/09/index.html","788be3e45e4cfbc3c8723f1f7a777317"],["/zh-cn/archives/2015/12/index.html","0ceb1848ccb8aedb0109047628bb680d"],["/zh-cn/archives/2015/index.html","d318307f6c263e22e5c38dbda350d9d4"],["/zh-cn/archives/2015/page/2/index.html","31b5e0a94dc9c85e6eb3caadfe15b51e"],["/zh-cn/archives/2015/page/3/index.html","f35d92cd89fd336d35ec9cdc606d2d5f"],["/zh-cn/archives/2016/01/index.html","7f1333c6d15078ecb6d44a0ade789b3f"],["/zh-cn/archives/2016/03/index.html","93ac0a0339cb928c1b2e0b8117c2291f"],["/zh-cn/archives/2016/04/index.html","b40f73bab0232ba2752573b7b8aa78e9"],["/zh-cn/archives/2016/06/index.html","1f6c6104a7c71191b53ee8a35e2ce4e2"],["/zh-cn/archives/2016/09/index.html","86bc4a0ad2c3ee41eb5610a68d2c1c0a"],["/zh-cn/archives/2016/10/index.html","f23e30ad2c6d16cfb9362ec774434c0b"],["/zh-cn/archives/2016/12/index.html","39a2ebde188d4b21c2a31817fd6ffd84"],["/zh-cn/archives/2016/index.html","eb4efd9e87c15d20b2d0340721a0dd83"],["/zh-cn/archives/2016/page/2/index.html","e34766038edbae5f951675e7632f913e"],["/zh-cn/archives/2017/01/index.html","b796e67c0d24a7599c0e6b4e7af86eac"],["/zh-cn/archives/2017/04/index.html","3140207df23eac581e433f9a813a3792"],["/zh-cn/archives/2017/06/index.html","1434820dec8edeeb6a83b7c7358f55f7"],["/zh-cn/archives/2017/08/index.html","de62c2d0079bdeb77ebc2582c53f4382"],["/zh-cn/archives/2017/09/index.html","fb12d1887c72749242a0d469491c4883"],["/zh-cn/archives/2017/10/index.html","3d8607eacfe7bd0636688bb51e5a3d6a"],["/zh-cn/archives/2017/index.html","025ad041b13a6fbb9efae368e682caeb"],["/zh-cn/archives/2017/page/2/index.html","50f4296e343411937337d36798b738ee"],["/zh-cn/archives/2018/04/index.html","c8398dc9d88755875a6474d0a548d1ee"],["/zh-cn/archives/2018/05/index.html","ff97547fe9640dce702cd8f74e4ec648"],["/zh-cn/archives/2018/index.html","0313cee8122aa297d58fb957e35a4fd1"],["/zh-cn/archives/2019/05/index.html","0ea88d1685af48ebe453376491e1b372"],["/zh-cn/archives/2019/index.html","8fa6085f79dfa57c5ca9fc627086bf4d"],["/zh-cn/archives/index.html","ec1d7633b2046acd38c5639059208be0"],["/zh-cn/archives/page/2/index.html","4e53c7a68c982b6cd414989cadd5f3c4"],["/zh-cn/archives/page/3/index.html","73153be1e853a80f4f571fdb8f73dac0"],["/zh-cn/archives/page/4/index.html","c6aae5a05e1b33fdcbc04ad7f107b979"],["/zh-cn/archives/page/5/index.html","72f72287b6cc20635a608b127acd0bb7"],["/zh-cn/archives/page/6/index.html","d74e4f69262e699541fadb5875ff94db"],["/zh-cn/categories/ACG/Music/index.html","e2e0817b6b3a1c7744f1f2186c29c16f"],["/zh-cn/categories/ACG/Music/self-copy/index.html","0d40894702fbd26f2b6bb6f56985ecf5"],["/zh-cn/categories/ACG/Travel/index.html","13c23824c6cf55809430b2ec77d01075"],["/zh-cn/categories/ACG/figures/index.html","252b78bc4ba4c08ac00006dc1e58289f"],["/zh-cn/categories/ACG/index.html","0d4b5096947c53e0c4136c732a8e6dfe"],["/zh-cn/categories/dev/Front-End-Dev/index.html","bc0e36ea97b12ba38407de2ffa839f0c"],["/zh-cn/categories/dev/HTML-CSS/index.html","481410f51e1908c7a04f45a6e2c98d36"],["/zh-cn/categories/dev/android/index.html","5d4bb32473d2f7612857992e0e9eca9d"],["/zh-cn/categories/dev/cpp/index.html","8c89107a4794c13f1318ec17a98f6e0b"],["/zh-cn/categories/dev/git/index.html","2153b0ac4442119aebcdd82b32f54a48"],["/zh-cn/categories/dev/index.html","2b9514d33f5ffb9d941c0f7f7dc76bc3"],["/zh-cn/categories/dev/java/index.html","08dea5dfb368a7a0f18c6db9ca3c28c5"],["/zh-cn/categories/dev/page/2/index.html","ef42f561676a5337786e3ba74360bae5"],["/zh-cn/categories/maintaince/blog-setup/index.html","af90722cfdec2b4ff7bafe253d62426a"],["/zh-cn/categories/maintaince/index.html","4269644187e571a76a7c45f3921a68ce"],["/zh-cn/categories/maintaince/macbook/index.html","bb00ebb25bed0059cf9bb14d7b2c1f17"],["/zh-cn/categories/maintaince/router-config/index.html","495f58bba6eb5c9cfa51a528396c6141"],["/zh-cn/categories/notes/index.html","7d4e2d8a0190ef6d9c8ce44a559e269e"],["/zh-cn/categories/tricks/android/index.html","8b83811dea8b030ea55d60493ca506ce"],["/zh-cn/categories/tricks/index.html","96febe9262cadeb0e4d5275f99ef24d8"],["/zh-cn/categories/uncategorized/index.html","3f629908d5070edd97be5474f71f32d4"],["/zh-cn/categories/works/Front-End-Dev/index.html","10421ba7e08c8f7c7f43f782502e59ee"],["/zh-cn/categories/works/csharp-wpf/index.html","a2b5dc99beb228f99eb5d1d619ad1c97"],["/zh-cn/categories/works/index.html","07fc3c04877e4f09cc1130f3a49073a2"],["/zh-cn/index.html","4c38f6b9aad47d8e6888854539179bae"],["/zh-cn/page/2/index.html","3f9f17636dbafb9d8e34250b47745daf"],["/zh-cn/page/3/index.html","f112c959d555020ba18160b8337628df"],["/zh-cn/page/4/index.html","5f4e45e5beee99e09e121cdc83e79dc5"],["/zh-cn/page/5/index.html","648e16673363b4103f8320e8034a9a4c"],["/zh-cn/page/6/index.html","5920953acd65863ac75230fd12e4cdcb"]];
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
