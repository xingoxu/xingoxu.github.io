/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/03/WNDR4300-setup-log/index.html","6c19788e2d06a03d6e40eee1c4fcbdbb"],["/2015/03/android-hostname-change/index.html","351b6781be9dcb58f5963c0c8f3b3f8e"],["/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","1588007511dc122a1884d7cf01af0b27"],["/2015/04/android-chrome-issues-with-webpage/index.html","b7ab656e37b247f280bdfc9133d11552"],["/2015/04/cpp-study-log/index.html","90ff4972bd8f97ea71540758ae472262"],["/2015/04/github-pages-ssl/index.html","7097a5ca74488bce207f503435d26bb8"],["/2015/04/hello-world/index.html","791e1234a8ae747d7b43c62b0156b39d"],["/2015/04/hexo-setup-log/index.html","5990410cdb9703a2d277681e7522a979"],["/2015/04/self-copy-cd-inazuma-1-html/index.html","aadab530d399774867e2448d3147af8a"],["/2015/05/cpp-inherit/index.html","cffa9a589ad0ad059bb2f5fe1ddfed88"],["/2015/05/cpp-polymorphism/index.html","472fab3a5f92d211a4fdf6bf510eae5d"],["/2015/09/android-root-ota/index.html","7f348ceac759b6191c10736d35f3fd22"],["/2015/09/java-learningNotes-1/index.html","bd49164734937f469b3713637e66b00d"],["/2015/09/newblog-newlife-2015/index.html","6b440c4cda2457ad978f894c469bfaa9"],["/2015/09/router-rebuild-2015/index.html","8533af20a2494867545f4c434998e550"],["/2015/12/2015-12-21/index.html","fd21483a1df81c029f5064aad782cc66"],["/2015/12/PixInTouch/index.html","44801484eb3187f1f6a21c645b027d5b"],["/2015/12/git-study-1/index.html","6149bc133ebd09ceb3623fd4bdd16779"],["/2015/12/hexo-backup-and-migrate/index.html","595b31739b2a084f6a0f87e8ae81da2a"],["/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","e3267a143d2bce5a6d7fafb3fb5a0f02"],["/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","1df2421cae0271749acd46a4e09daa08"],["/2015/12/router-reconfig-2015/index.html","0916674d9a236d0fdeb6acf5f7a892b0"],["/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","509257cc8e006283a7456ceaf730aa65"],["/2016/01/2016-stepping-further/index.html","b151286735c8d2653a2bd7776e8bc426"],["/2016/01/Android-Study-1-22/index.html","5f82fd2637f30d34ae01bb4a8732ca88"],["/2016/03/2016-03-20/index.html","227ba5b2c81874f863eb4cddfa42172f"],["/2016/03/GSC-535/index.html","7510a0a3f89de01ce72805987af32789"],["/2016/03/gulpjs-1/index.html","cc0f8589e98d1250fabff274eb5ca48b"],["/2016/03/hexo-theme-paper-white/index.html","64c53b6ffb6fbbb6824e9ef11b44fbb1"],["/2016/04/2016-04-19/index.html","7adc95eb0e8b01b3bd55097fe18d0e67"],["/2016/06/2016-06-16/index.html","e300b5b7992e2cc36d42b62fb8cb97d3"],["/2016/09/2016-09-18/index.html","9c4839f1d1c0ff44d41f9b83db8164ec"],["/2016/10/2016-10-27/index.html","cabd327bfd9d180abdc3501361f14778"],["/2016/12/config-switchresx-and-2khidpi/index.html","3fe60c22b369c02d1ba042c162a6c66a"],["/2016/12/improve-duoshuo/index.html","dfeeae4959e973bda64f9c4867da3a0c"],["/2016/12/use-travis-ci-your-blog/index.html","3f83675ad35ec6481648b31c36c8dd60"],["/2017/01/2017-iyahoi/index.html","83000157760d040f67af30b35d57e882"],["/2017/01/webpack-amd/index.html","db50c1a3b478f8ffa382dbb8ec8f223f"],["/2017/04/kotobukiya-syaoran/index.html","17b7ba65b169700d94466552bd399640"],["/2017/04/macbook-and-surface/index.html","2a35ea08549686cedb45f4da731b9ac3"],["/2017/04/uc-hyakuya-yuichiro/index.html","b06ff940b115fdf444ba06b1cfdd3e96"],["/2017/06/noragami-seichijunrei/index.html","de15466202e9046b24ac4c18625ea13b"],["/2017/08/cross-compile-55-libev/index.html","efb1e038035272a5dd78f65600361b15"],["/2017/08/explore-service-worker-working-lifetime/index.html","9dbe901ebf73bdf0a807a2d4670ea687"],["/2017/08/kiminonawa-tokyo-seichijunrei/index.html","d30d32af4eef4994e875953585c303d5"],["/2017/09/record-user-login-status-methods/index.html","0900ce567b19580b8e69b34fdd2d0351"],["/2017/10/vue-typescript-early/index.html","ac090431abcc1f508759788cb4a3cd7d"],["/2018/04/2017-end/index.html","57824d8c891b1a2a314db058cd70278c"],["/2018/04/twitter-account-activity-api/index.html","76274a5e124ffcfa7693ff5a5edecc11"],["/2018/05/buddy-complex-seichijunrei/index.html","b8f46c959c0f5e975641e479c5545026"],["/2019/05/2019-05-16-record-jp-digital-TV-on-nas/index.html","441880c01976ce3171050acf582dfa39"],["/2019/05/2019-05-17-google-io-tech/index.html","9455a86180c83d605c5720303a72ff43"],["/404.html","cf327d853b6eaf20395d3f2f447a6d8f"],["/about/index.html","5956bb33d4fde9d824fcc99c931ce388"],["/archives/2015/03/index.html","2b85ff3abb55a478c9e41893121333e2"],["/archives/2015/04/index.html","617b3ebc823adb0a05a72a485df35144"],["/archives/2015/05/index.html","be282109a0e85b94097713fad64b55f4"],["/archives/2015/09/index.html","270faf8bbc21813c0809656a1e070100"],["/archives/2015/12/index.html","b5619af2b7167c8ea8460b87ebf41f2c"],["/archives/2015/index.html","7d113b9fa7b2d732d3bbcd74e9f073e8"],["/archives/2015/page/2/index.html","59b546795fc24f74bcbf4d47fdb24960"],["/archives/2015/page/3/index.html","0056b5795d85c24bacd58c71f5a3bb9f"],["/archives/2016/01/index.html","0f12248a7f6fa9cdd12cb1f7cafc5e68"],["/archives/2016/03/index.html","38c1d9076242b10148c22b8a5ecd3b3e"],["/archives/2016/04/index.html","46c4bffda6a6e273868687363510bb65"],["/archives/2016/06/index.html","7b83496888a9296b584f566228b1e373"],["/archives/2016/09/index.html","7e3aac3d5462dc8a641a4e887adda4d7"],["/archives/2016/10/index.html","3d6ab6333842dcb7cb901d4caf5ab997"],["/archives/2016/12/index.html","a827e719131fb681dd19fc1148c3cf6a"],["/archives/2016/index.html","fed683df10bcf2bc4887091e89ba7e9d"],["/archives/2016/page/2/index.html","6f5d770089e53f4c03decdee0a6a316c"],["/archives/2017/01/index.html","88ea531a258f04705b9acf3881616ebf"],["/archives/2017/04/index.html","6ad9e5ffbf0175db698a18caa2fb85c5"],["/archives/2017/06/index.html","5cc6cab6a892ca148f60eff29bbea459"],["/archives/2017/08/index.html","9bc73058c866e51b5dc2e5a3038e18fd"],["/archives/2017/09/index.html","870c57d5df316366aff24571740478d2"],["/archives/2017/10/index.html","ae3dda4c716e7e4e6b267e0d776c00a6"],["/archives/2017/index.html","b60ead44405acfc54ec6c0a56b8e0f8d"],["/archives/2017/page/2/index.html","c13f2e579bf92fd51985c7f0ee51c9cc"],["/archives/2018/04/index.html","14784576ac2ca7647c5cae9e44b31acc"],["/archives/2018/05/index.html","d4817a2d6e0112771ab43e1f3b7e1291"],["/archives/2018/index.html","140949bb7b35e82d158400c3fee8732c"],["/archives/2019/05/index.html","62b23650ab559abde2a619b5d8d4c49c"],["/archives/2019/index.html","4d7709b2bd890267ce240bce7b1a9744"],["/archives/index.html","979dc6e8af3807fe9545a86b4e7eff4f"],["/archives/page/2/index.html","852e71c7785ddfc3e28b43f206b4753c"],["/archives/page/3/index.html","26f1148d4fd021a11ce06f373ff07d04"],["/archives/page/4/index.html","950e6a91bd0c80c5e4a11fe4d05fcd99"],["/archives/page/5/index.html","32dda8dd3f95eea7f0e91326df7c8aad"],["/archives/page/6/index.html","6bcd91c6eea801c9ebd0b64c11444720"],["/assets/images/about-me.png","a066d06c3d9d1fe56c4d921cec7febf3"],["/baidu_verify_YbTSlpWIUJ.html","779049c3a50695ceb3a388ce1e8bc1b9"],["/categories/ACG/Music/index.html","7e329b41cb3ca9192d387c5517035120"],["/categories/ACG/Music/self-copy/index.html","2fa6d0919acc0c168d5406e9a7857bad"],["/categories/ACG/Travel/index.html","f50c76bff4f5e8961057874d5fd59094"],["/categories/ACG/figures/index.html","8027181cfc6c247682755bf532bb0743"],["/categories/ACG/index.html","8f77890e788b4cec5433980cdc6595f8"],["/categories/dev/Front-End-Dev/index.html","b78ac9dc16b17fc21845bce8da0ff110"],["/categories/dev/HTML-CSS/index.html","1b8c52a20e44d41fbe0d2c7636d1e454"],["/categories/dev/android/index.html","0b277f0e06a5bdaac68a2cc4993815f8"],["/categories/dev/cpp/index.html","981e0c002e98a9aa408b1514c0a9a99e"],["/categories/dev/git/index.html","5ccb9fc8e02323b76ca2a7b0ccc8d1d7"],["/categories/dev/index.html","592318de59662a5157d3931b71eab571"],["/categories/dev/java/index.html","4233e8a30209b1f0768cca78f338c723"],["/categories/dev/page/2/index.html","8e004597c22bab499fd9585bee5262a4"],["/categories/maintaince/blog-setup/index.html","e2d7c67a11bed392769aa664959a4c89"],["/categories/maintaince/index.html","953152f16ba5ed8bb343236c22b95796"],["/categories/maintaince/macbook/index.html","a88501493a700e3a11332a32b365f586"],["/categories/maintaince/router-config/index.html","f12ecba02f39f3dc0e9ff6b6d9ca6c84"],["/categories/notes/index.html","e5fa116fafd48db52d3a20c2cd099e20"],["/categories/tricks/android/index.html","ed8e70e0bb543879c8d763f3b3c6bdbd"],["/categories/tricks/index.html","3b288828f7a4d7b6c817c358ac86ae9a"],["/categories/uncategorized/index.html","4a042f2cb66f46f486a0be91917f16cd"],["/categories/works/Front-End-Dev/index.html","b1e8b360d40f9fe22b7f5914f2746b2e"],["/categories/works/csharp-wpf/index.html","ecb57f92e3da83350a7cc63a2ec6339c"],["/categories/works/index.html","37dd756c99967fcc6c7e6ca6a86dc53a"],["/css/seichi.css","c60ad00990790aacbe0a9ff08766c515"],["/css/style.css","e3abc56736917946e8536ef38cc2c5cd"],["/google311213f0c8d812a9.html","51f1ee3c2f13a21a1a40b3dae4954454"],["/img/coderwall.png","1976fe70f1ee8ed243e0975402e06a2d"],["/img/delicious.png","952d9b54d8bcfe7b998f67ff48c4dbce"],["/img/douban.png","d42a163f932100e621d22732db34ecdb"],["/img/facebook.png","4bd685f6c9fdaccabf07bdd52173facb"],["/img/github.png","3c4b6267a1a3fedebdc7d089610ecfe7"],["/img/google.png","c385f5304465716b2d6c9ada94c657ab"],["/img/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["/img/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["/img/linkedin.png","4c72c4896f3c23f736cb1ad08f0c866e"],["/img/mail.png","38a7b8302dac028bf03b22d228938abf"],["/img/pinboard.png","9b6186cb97adbe50311f94e50f2392cf"],["/img/pinterest.png","e1b8e655d1b99b40ebcbd96977ae234e"],["/img/rss.png","ec8cf9b5a98011aa75cc0a4f25024dc9"],["/img/scrollbar_arrow.png","be5381cedbd6b778b1d92e224fd71cf7"],["/img/stackoverflow.png","039128ececb47b33bccedd98dc9fc809"],["/img/twitter.png","d2289a4936fefa41d9f92cf89939be5b"],["/img/weibo.png","b382032b316ee38c6d537fe9d36ae54c"],["/img/zhihu.png","e6352c0e1957beef3009268ae747c3aa"],["/index.html","e10710c6700a9a7417fbeb4a72d21d6d"],["/ja/2015/03/WNDR4300-setup-log/index.html","c2fef53e09476cf3326b285d83eb9c2d"],["/ja/2015/03/android-hostname-change/index.html","11221bfd18c0d6dac29fb2e39735eabd"],["/ja/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","3d4e8337455f248360a6ebe693cbd60c"],["/ja/2015/04/android-chrome-issues-with-webpage/index.html","232481712bd8880691c6e6f46fffa317"],["/ja/2015/04/cpp-study-log/index.html","fa122e08bb6342fe2fb889709ef1cdf6"],["/ja/2015/04/github-pages-ssl/index.html","344b83f8237d2c1d626b0be110ec5bee"],["/ja/2015/04/hello-world/index.html","801ff993182bfdda37206f4433c71fad"],["/ja/2015/04/hexo-setup-log/index.html","3356693622708e4dbef8a32864890fc9"],["/ja/2015/04/self-copy-cd-inazuma-1-html/index.html","7b66118b7e4e1ac81711046a42264ab5"],["/ja/2015/05/cpp-inherit/index.html","5d30830520c466ece633ff2caa845449"],["/ja/2015/05/cpp-polymorphism/index.html","6e591c71d1c73c89c3e48f6e04e1b356"],["/ja/2015/09/android-root-ota/index.html","69400660d3e568764fc8b893e571c3b8"],["/ja/2015/09/java-learningNotes-1/index.html","d853277738d8965ae94e659f9d5a20cc"],["/ja/2015/09/newblog-newlife-2015/index.html","3484d128c4ad2cb77fcb19accb1d41dc"],["/ja/2015/09/router-rebuild-2015/index.html","a6741a119fa56f8e10aff8a702aecaeb"],["/ja/2015/12/2015-12-21/index.html","0fc6f0cfd6ff2685c9b9d85bd0a9993b"],["/ja/2015/12/PixInTouch/index.html","4cb259be0dbbbdba30d1ed0b661c298b"],["/ja/2015/12/git-study-1/index.html","55ec3e04596754cfaa5b76eed902c6f0"],["/ja/2015/12/hexo-backup-and-migrate/index.html","7764b3196ae87cc75d42b810726508be"],["/ja/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","ffc315851f1af71d71abd57e80fe4f08"],["/ja/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","17ad4ada82cba40b905d48901bcfb78c"],["/ja/2015/12/router-reconfig-2015/index.html","d69d883fdcf60f49ae95727d53a08689"],["/ja/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","95713b1161ee30a71161941376d8c9a1"],["/ja/2016/01/2016-stepping-further/index.html","adbca7e72d519eab4841cbe1977afceb"],["/ja/2016/01/Android-Study-1-22/index.html","df7903a1033b81304ae7d414bc762487"],["/ja/2016/03/2016-03-20/index.html","4b0d794965ae3d5f407d6ec26981c456"],["/ja/2016/03/GSC-535/index.html","61011cd3c8b8472af37082f3a1e3745f"],["/ja/2016/03/gulpjs-1/index.html","bc1e1afff58607911c6b2edb16f4ffca"],["/ja/2016/03/hexo-theme-paper-white/index.html","e4aa626c21410a3c715102d36685094d"],["/ja/2016/04/2016-04-19/index.html","f33af2d819c64c114a1578069615af19"],["/ja/2016/06/2016-06-16/index.html","7c4e443f04285739563f57158b50cd53"],["/ja/2016/09/2016-09-18/index.html","bd2022ebe5fc0e29e23dc76cef9a0fef"],["/ja/2016/10/2016-10-27/index.html","264fa2491d94c369bc4094b07ce79f05"],["/ja/2016/12/config-switchresx-and-2khidpi/index.html","72b9fb217bb7d16d7be9b906ce77a81f"],["/ja/2016/12/improve-duoshuo/index.html","8c1c0e41a0ea5609b670c8243765afd6"],["/ja/2016/12/use-travis-ci-your-blog/index.html","d582b56652db0a6f04c7fc28f5f519a9"],["/ja/2017/01/2017-iyahoi/index.html","7f0b32b842cb394567e31818ce1aabfe"],["/ja/2017/01/webpack-amd/index.html","5a3c97b5a1a95a6890d626d48cb0e88d"],["/ja/2017/04/kotobukiya-syaoran/index.html","6e77fd27e88173b966ec8b3574afa951"],["/ja/2017/04/macbook-and-surface/index.html","82d1c3a93b5818f3051b0a9935d80de9"],["/ja/2017/04/uc-hyakuya-yuichiro/index.html","56bf7c650edaef2ddd19c0301642a115"],["/ja/2017/06/noragami-seichijunrei/index.html","2b52d8d1dc38f0a66613c44a1c341ab4"],["/ja/2017/08/cross-compile-55-libev/index.html","9e705325f639d90db2bd504059ca9f24"],["/ja/2017/08/explore-service-worker-working-lifetime/index.html","2e1b2544f6bc503497da2f5d6880ef02"],["/ja/2017/08/hello-jp-world/index.html","25b0ec8176c3d47b81716f7458f52ed6"],["/ja/2017/08/kiminonawa-tokyo-seichijunrei/index.html","a294eecf49b29530867821e59649a7db"],["/ja/2017/09/record-user-login-status-methods/index.html","4d03657cbdbea44b6266d4f72da484c8"],["/ja/2017/10/vue-typescript-early/index.html","e5aaf554b39cdf17447ea95c6d0dcb06"],["/ja/2018/04/2017-end/index.html","9c2dfc3e791676d8d8dc54e0e767fa24"],["/ja/2018/04/twitter-account-activity-api/index.html","fa82946ce1c635b26859f71b8efe9fb9"],["/ja/2018/05/buddy-complex-seichijunrei/index.html","5cb663a8b02970d1879487491aab06ff"],["/ja/2019/05/2019-05-16-record-jp-digital-TV-on-nas/index.html","d52dcce0e6ebf18bb63b248da2d691c5"],["/ja/2019/05/2019-05-17-google-io-tech/index.html","f28dab2e3c856d7c763643c0e2a1c448"],["/ja/404.html","ecfecac58fd494f29cc607de3d7383f5"],["/ja/about/index.html","445f6540e087685a47c3fddddeadfe11"],["/ja/archives/2017/08/index.html","27b7cd890fecfbb329fa977e4d548ae1"],["/ja/archives/2017/09/index.html","542359b3ba44ab3f67fb015b48107b33"],["/ja/archives/2017/10/index.html","7f4dd9ee3c081878160e7174e4688654"],["/ja/archives/2017/index.html","c2cfa9e9580f0b6bab375f90ade7643d"],["/ja/archives/2018/04/index.html","18041c6e77d1bdb5af761550d7e019ae"],["/ja/archives/2018/05/index.html","fbf4a57b37741aa596ba369d07de124f"],["/ja/archives/2018/index.html","e2df68a9832de6f8bc2fc5d13023bcae"],["/ja/archives/2019/05/index.html","884590efe8eaee65a97c2f64266a9b08"],["/ja/archives/2019/index.html","2e04deaa5126e980936eb28ad68a8b86"],["/ja/archives/index.html","1736013c53ff88952d526f8fa32a8c5f"],["/ja/categories/ACG/Travel/index.html","ceb7a30c29f90c3d3bcad09024b53d84"],["/ja/categories/ACG/index.html","77d3d79d5232c6f4f0986a402c9a4632"],["/ja/categories/dev/Front-End-Dev/index.html","70b4dbc646b97b7c125d63e39a704dcb"],["/ja/categories/dev/index.html","af92952ddfcf036f1709a0c8a9162b4e"],["/ja/categories/uncategorized/index.html","a1a118d6cc400f8d2cdf2409ea0af6b5"],["/ja/index.html","fe73e78eb6fc0b31ccb5804eeb19dadb"],["/ja/nihongo-test-page/index.html","380e03e2adb5faaf56be77b4066765c9"],["/ja/resume/en/index.html","65047dcd53241dfff1662b37dea2bda1"],["/ja/resume/index.html","cf39bf5d7d0adafb574007f35ec68217"],["/ja/resume/ja/index.html","f3cc4001d8ac1288f28280918e54cc24"],["/js/instagram.js","7d7a9e2e7286ba2d5b6d12068214f0c3"],["/js/jquery.lazyload.js","28c23bc40080d31144776e9a8736837f"],["/js/main.js","2e92f29b0cd90bddc062915eb46a858c"],["/js/mobile.js","20029df2609ddd5d2b2d346edbb297c0"],["/js/nextpageajax.js","c3bde8d7bb1f967fb319f57a187ea51a"],["/js/pc.js","631b535186aab0e262485ee2bf9da628"],["/js/ripple-effects.js","b9c11903da0ef5c3d790b41369c3137e"],["/js/share.js","de52ac3d43e43c1951a08b0804458a8e"],["/js/totop.js","661822968b58fd439f46bd54031238d6"],["/keep_origin/affiliate_jump.html","71bf6d72c5d080ec2b3f8ecfae3d71ed"],["/nihongo-test-page/index.html","cf217a7b07a970c43fe753c64fb12567"],["/page/2/index.html","7602a3d714ab7f41ba47fac0056bc038"],["/page/3/index.html","dee1f2180367670840a0a383642796da"],["/page/4/index.html","92df6cd7455e6a2f9a91b697a356946b"],["/page/5/index.html","4214233784ac46d7aafe7cf0beadd832"],["/page/6/index.html","47d459029f074500c8055380185d530d"],["/photoswipe/default-skin/default-skin.css","426e8908d7426603ca203b6d16281b1e"],["/photoswipe/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photoswipe/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photoswipe/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photoswipe/photoswipe-ui-default.js","0c9196aa8943ce8a8045c9f4cc62915c"],["/photoswipe/photoswipe-ui-default.min.js","9517baca43cd4e9cb23ff337fbc1baa1"],["/photoswipe/photoswipe.css","7dc0df107159e1be66d4464171561e5b"],["/photoswipe/photoswipe.js","a8d26ff34943c859884acbd6b2531315"],["/photoswipe/photoswipe.min.js","f5cd6479c4e4682545a9603e6b50c741"],["/resume/en/index.html","2fb299d477b884a08e290f23880ce107"],["/resume/index.html","52c33c81950316404601f3a976d34394"],["/resume/ja/index.html","d4b1cdfd647f9bd3dd9715b8a2712646"],["/setup-log/blog-setup/github-pages-ssl.html","d5e315a4f7725d0c5a828ab2ac48dfe3"],["/sw-register.js","aef83ae9e5f6a789cf08704708397e91"],["/zh-cn/archives/2015/03/index.html","3274053d4dcd43e2d6e090dd89748f36"],["/zh-cn/archives/2015/04/index.html","dab31505a31146dbeb0b3bf420a3c5f9"],["/zh-cn/archives/2015/05/index.html","18043925791a8a8865b7ecd5b64e4e1b"],["/zh-cn/archives/2015/09/index.html","3c8259b09041ba17db5b41a2cb3addf9"],["/zh-cn/archives/2015/12/index.html","71f06cfacf954fcb15d98ba32e736499"],["/zh-cn/archives/2015/index.html","26c88c40922e5359ab39f163953a8261"],["/zh-cn/archives/2015/page/2/index.html","52ea5b0de0e699951dda551212c7fb58"],["/zh-cn/archives/2015/page/3/index.html","d3d17a67487debc5296510a46aacb685"],["/zh-cn/archives/2016/01/index.html","9315a91fa8cfc1fa5cdf96973c8d45f3"],["/zh-cn/archives/2016/03/index.html","3f5b23d8e348fd9f581a3846d10dc0b2"],["/zh-cn/archives/2016/04/index.html","06cc1d319f1b3964b012339d9a4be947"],["/zh-cn/archives/2016/06/index.html","91f6bc4ed97d6151db06ac09e64ca6fd"],["/zh-cn/archives/2016/09/index.html","4d31f2574bda1aac9340e8a0ede9effa"],["/zh-cn/archives/2016/10/index.html","b01a370adbe07ff345cf0c0d88b75654"],["/zh-cn/archives/2016/12/index.html","47c6960fd12f4db225ff1cfb98511717"],["/zh-cn/archives/2016/index.html","c3297a17b7b3800dd830cff3717f03e4"],["/zh-cn/archives/2016/page/2/index.html","ce5aca9a91bba06fe6ca3036a043250e"],["/zh-cn/archives/2017/01/index.html","824e8a1987e8670f6c092deb3a42f455"],["/zh-cn/archives/2017/04/index.html","89d7adf7b196956dcfcfdb557950c3e0"],["/zh-cn/archives/2017/06/index.html","ed0612b99787a4e846ddae607994ee83"],["/zh-cn/archives/2017/08/index.html","edaee812eb28fe5235e35885b7de0c80"],["/zh-cn/archives/2017/09/index.html","bd0b8b71966c6adba207b493cabd574f"],["/zh-cn/archives/2017/10/index.html","1ec7315f1759c875f6a9c83438f4e61d"],["/zh-cn/archives/2017/index.html","482bd31235f84b92445081c57b3b1ac0"],["/zh-cn/archives/2017/page/2/index.html","a535f16d145a898544e7e3bd3c653ba1"],["/zh-cn/archives/2018/04/index.html","d2462aaf75208afcc53a00bc32e70966"],["/zh-cn/archives/2018/05/index.html","4a0a047b744664a5c21796bc6e0f8500"],["/zh-cn/archives/2018/index.html","184ba1260718d149bd382e9717788132"],["/zh-cn/archives/2019/05/index.html","4566987165df90ded5953fe20712d878"],["/zh-cn/archives/2019/index.html","854d5909abb06e2646987a0ab04ead7d"],["/zh-cn/archives/index.html","138994f75cac7218e9735b1fcefa85b4"],["/zh-cn/archives/page/2/index.html","bde8d3cef5cdeaded19014afa340b2d0"],["/zh-cn/archives/page/3/index.html","1e26f443279d64f1b3a9eb5c0e91f855"],["/zh-cn/archives/page/4/index.html","f8c22e98a8888151508e73bcac0b2aa8"],["/zh-cn/archives/page/5/index.html","a19dc0438fd3ff21e6c75622836addd1"],["/zh-cn/archives/page/6/index.html","1621393d28d419f863400cc3ca716c51"],["/zh-cn/categories/ACG/Music/index.html","b38bbb398ecc121267012ac23cb24323"],["/zh-cn/categories/ACG/Music/self-copy/index.html","2dd620c26c144bd3c2564e5bd7695d6d"],["/zh-cn/categories/ACG/Travel/index.html","93895dcb585ddfc7423deff5ff3b0ab8"],["/zh-cn/categories/ACG/figures/index.html","069a988eac5ca7ba7abdd67581ed105a"],["/zh-cn/categories/ACG/index.html","f10131b8b45a76ea32a55971e93566a3"],["/zh-cn/categories/dev/Front-End-Dev/index.html","ecfb38f7a99c5fa2fa4f006dc71f48b1"],["/zh-cn/categories/dev/HTML-CSS/index.html","c091377cd52f23e4756caa28e3277d38"],["/zh-cn/categories/dev/android/index.html","1bebbc16b3bb62e40acc8a95448a62a9"],["/zh-cn/categories/dev/cpp/index.html","be4cd4c9ee48c2fefebb144a2ee34fee"],["/zh-cn/categories/dev/git/index.html","be3b68dd7ad542cfb5dabddf43911ede"],["/zh-cn/categories/dev/index.html","05d5e10ec60a6734ff616a6df309db5e"],["/zh-cn/categories/dev/java/index.html","07a589c10f3a0ba38e2940efb59c12db"],["/zh-cn/categories/dev/page/2/index.html","defc3c1189462c6bb05491e63fc5b786"],["/zh-cn/categories/maintaince/blog-setup/index.html","28fc9708b20b74d5a546769ed88db2e0"],["/zh-cn/categories/maintaince/index.html","38eba34fa81998a3e67ffba44858965b"],["/zh-cn/categories/maintaince/macbook/index.html","3d0fd3d47cf5b7fe11cddf933e5c706a"],["/zh-cn/categories/maintaince/router-config/index.html","729b2ec27d6670ebf606af2e9d5bda42"],["/zh-cn/categories/notes/index.html","a889f3ed5277bc631a04c7a567a65aef"],["/zh-cn/categories/tricks/android/index.html","d97b18ad24d1705ddde88fb2c5ef299d"],["/zh-cn/categories/tricks/index.html","7db15c700c279b7eec57dcc3688adaac"],["/zh-cn/categories/uncategorized/index.html","117f7e2597982bcd456aa7e7a28259ab"],["/zh-cn/categories/works/Front-End-Dev/index.html","e7131e2e10928e371416683cb2269308"],["/zh-cn/categories/works/csharp-wpf/index.html","bc0f912a6296b7e566ed2a522edd90a5"],["/zh-cn/categories/works/index.html","9c96972d78d2797303102c7db55edd47"],["/zh-cn/index.html","c3213a5dec4ed63b8dcf45374e206931"],["/zh-cn/page/2/index.html","fb4caf92099025070044869fcb758c1a"],["/zh-cn/page/3/index.html","1ec8615fb9faf39d59d4a7f487f36fec"],["/zh-cn/page/4/index.html","7b9a5814bdc58dbe25934d45621bd9a9"],["/zh-cn/page/5/index.html","d9c52dc0e4cc798e9de5190eb9c3356c"],["/zh-cn/page/6/index.html","3e86cd494f7a3f904d0ab83ac19a158d"]];
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
