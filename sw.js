/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/03/WNDR4300-setup-log/index.html","d93d3e2914305c4c979dc348f1b011df"],["/2015/03/android-hostname-change/index.html","f33d28bfc8d90ab994b1cc83a9dc4b81"],["/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","fa31037fbfb7e59be0c895e2d87cdff3"],["/2015/04/android-chrome-issues-with-webpage/index.html","b18fad4b9136c9bae89ad5f3f7d5d1d7"],["/2015/04/cpp-study-log/index.html","3edb021fc9d54e1d25022c655566615a"],["/2015/04/github-pages-ssl/index.html","e7d4964076eb8ff215c74c909077dcba"],["/2015/04/hello-world/index.html","9500741f907a72dee861d6e241211755"],["/2015/04/hexo-setup-log/index.html","6a2a15e8873aba004cce2969fcbe775a"],["/2015/04/self-copy-cd-inazuma-1-html/index.html","9099c393f0274bd37308a4102b42639c"],["/2015/05/cpp-inherit/index.html","590ed76dbba5ef24eae4e67a8e898950"],["/2015/05/cpp-polymorphism/index.html","4f0212718e535592789d97cd6ce6a999"],["/2015/09/android-root-ota/index.html","05983951d2aa823aeb58998211d60558"],["/2015/09/java-learningNotes-1/index.html","0af1f23d203f25b066f86584ebfd3f9a"],["/2015/09/newblog-newlife-2015/index.html","a087ceba6c7c57c84446a4c81dac3657"],["/2015/09/router-rebuild-2015/index.html","399f21e1ade986acbe8ab3f421d679da"],["/2015/12/2015-12-21/index.html","c5be7626222caf890d437a7a2e0b739f"],["/2015/12/PixInTouch/index.html","4ca9802283dabb63d273c8a79d6036cd"],["/2015/12/git-study-1/index.html","d197d516b26b8779eb5284ceed7bb363"],["/2015/12/hexo-backup-and-migrate/index.html","749746f8128efc145f7cb6ca3d4c301f"],["/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","19e75fdf48aea5f21f79b84303d43254"],["/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","fc35d9f4dd8f4c111be320a667c7d4ce"],["/2015/12/router-reconfig-2015/index.html","08bfee92d75f8b22cdeb57754b9609d1"],["/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","242963fa2e4a7521be070b2042baedd6"],["/2016/01/2016-stepping-further/index.html","406fa9c18f422aa9084e1d9bbb041f4e"],["/2016/01/Android-Study-1-22/index.html","04502d9a9befc6623394dd1dc5d914f7"],["/2016/03/2016-03-20/index.html","9d1a8044ac6bbed00acd543aa98a26b0"],["/2016/03/GSC-535/index.html","b733020923818d0308248686f27e599c"],["/2016/03/gulpjs-1/index.html","edd8f0cf536a83b9ce9eba16ba9cc65c"],["/2016/03/hexo-theme-paper-white/index.html","e8bbac5cbbab59f2b8e7b314f869326f"],["/2016/04/2016-04-19/index.html","23c9ab2d1bd6a2e6a5588516f74c5d60"],["/2016/06/2016-06-16/index.html","d84d25eac74dd086feff11170fa04cf1"],["/2016/09/2016-09-18/index.html","82e6e46b40d8b1cdabd22aaacd529d02"],["/2016/10/2016-10-27/index.html","1e309482fd447a3c3bbf2280e07c51a3"],["/2016/12/config-switchresx-and-2khidpi/index.html","513437a63011f03de4279a28b0b4dbef"],["/2016/12/improve-duoshuo/index.html","c61e2aace5e78a6670fb7a6014baa1cc"],["/2016/12/use-travis-ci-your-blog/index.html","25dd7a688eed8305adbb4b5f1b09d4b8"],["/2017/01/2017-iyahoi/index.html","94a202bb8199d54cef4ed6b2c637f250"],["/2017/01/webpack-amd/index.html","3b162754c29994518209abc58bb47146"],["/2017/04/kotobukiya-syaoran/index.html","03c71a1dbbdc3086e23384edf15795b2"],["/2017/04/macbook-and-surface/index.html","045035899ce62573abdebce1b4bf3339"],["/2017/04/uc-hyakuya-yuichiro/index.html","df76985dfd6cdabc54c789d84fc03a4c"],["/2017/06/noragami-seichijunrei/index.html","d83623f87253be0359b20ac80e90796f"],["/2017/08/cross-compile-55-libev/index.html","15521dae0072db9f08194bc11874ec9c"],["/2017/08/explore-service-worker-working-lifetime/index.html","20a74d93b0a54995c61d623b853690a7"],["/2017/08/kiminonawa-tokyo-seichijunrei/index.html","5dc423143b99432576d4721a50008b60"],["/2017/09/record-user-login-status-methods/index.html","8b94e9db4ec54e05f30f73aa40cdf7c2"],["/2017/10/vue-typescript-early/index.html","ec12d5aa3933397294455c9d1bf0ac3b"],["/2018/04/2017-end/index.html","ff4b61cfd88d7bd364d71e7bf8ccfaf6"],["/2018/04/twitter-account-activity-api/index.html","8926fb5595cf24656c4753c7813f0796"],["/404.html","7d82fdb6cf9ccf4c61000cc6a96cd05a"],["/about/index.html","7e8134d89d7c25299b1ad839dceb23c1"],["/archives/2015/03/index.html","92e17b2751fa23c4a923e26047890db9"],["/archives/2015/04/index.html","9b8cf433e85e4b0ff778b1d81139b5dd"],["/archives/2015/05/index.html","ef3061e3dadfd5d9523858e70b502f74"],["/archives/2015/09/index.html","a74866def29144bb0b46ac76975778a7"],["/archives/2015/12/index.html","8ec1f135b4035224922e335d00091cf9"],["/archives/2015/index.html","91778ad3bd307584e84ef48cde340765"],["/archives/2015/page/2/index.html","e45e9c1b78644cf87a5fbe15a7ccf01c"],["/archives/2015/page/3/index.html","34cdde50211b38a666b80cc9db3955c1"],["/archives/2016/01/index.html","851116d554c7c640189fa2267e56d638"],["/archives/2016/03/index.html","c87cd31c7b92dbff73ff4c309447cf3d"],["/archives/2016/04/index.html","2520c26e9e84372501df8bbc2a55eea4"],["/archives/2016/06/index.html","166585b9c196a2fce215e503114619f5"],["/archives/2016/09/index.html","f3d53f08de0d1b4c3adb46d0611abd3d"],["/archives/2016/10/index.html","b821164eacc4be9e59031b179bd268f8"],["/archives/2016/12/index.html","3c6acdd2b716a8e101018eb9b72bbda0"],["/archives/2016/index.html","2fba809e3230f8f45a2cbd9c969c5508"],["/archives/2016/page/2/index.html","2b91a650045a986c4abc47c0518ae948"],["/archives/2017/01/index.html","4b01c106bfe259c8628e5c4afba332f3"],["/archives/2017/04/index.html","a07bc296c3e93a47af593db2c216d0e9"],["/archives/2017/06/index.html","5bed621dfdba0ae237f00daafabc2230"],["/archives/2017/08/index.html","4473d7c61b4d65ccdd80069725f37240"],["/archives/2017/09/index.html","0b979bb0c6933f4f4dd623780aecfb1d"],["/archives/2017/10/index.html","21989dd3c9bc34a00ea43a5bc93d9381"],["/archives/2017/index.html","481cb75a3fb29800c29ac95775f6b2e9"],["/archives/2017/page/2/index.html","d209ef7688780f794cc8f2b3c0fd59bc"],["/archives/2018/04/index.html","80c583f77794e66f8848121128b24cbd"],["/archives/2018/index.html","9c88e41d0ef23411fb271c7c252e67cc"],["/archives/index.html","845fa7f0cb78b6d4a10a09def543aa73"],["/archives/page/2/index.html","d73026ed0dfc169e4de255607b37e540"],["/archives/page/3/index.html","eb343248586048c211da53d2ecb33a2d"],["/archives/page/4/index.html","1098dcc12f39993a4384a8e1edb964e9"],["/archives/page/5/index.html","650bba0b7ce39841e23de3d4081b91ee"],["/assets/images/about-me.png","a066d06c3d9d1fe56c4d921cec7febf3"],["/baidu_verify_YbTSlpWIUJ.html","779049c3a50695ceb3a388ce1e8bc1b9"],["/categories/ACG/Music/index.html","e8fbf876f7727f2b20c15a0e4bbd744a"],["/categories/ACG/Music/self-copy/index.html","8989b59389b32b8ffceed8ed811eefb9"],["/categories/ACG/Travel/index.html","adaf82c0be913cd81e5183a231acdc52"],["/categories/ACG/figures/index.html","836a488e44c3ea3c5856c82a0c5b83ee"],["/categories/ACG/index.html","d4eac7393bfd7c9d4062f9e257c0a4bf"],["/categories/dev/Front-End-Dev/index.html","a1cb2fb8ae41a3d4fb6cd16b9ff70b85"],["/categories/dev/HTML-CSS/index.html","a6033c8489230656cc530aea837f3502"],["/categories/dev/android/index.html","70348c331298896b3b2d0ac881b16f3c"],["/categories/dev/cpp/index.html","aeddd454764722dc7a75a689c219bddc"],["/categories/dev/git/index.html","1e4b07da977e01351f0595599963cb52"],["/categories/dev/index.html","f19d0d14a22e316917dcded046458d68"],["/categories/dev/java/index.html","803d7cb5e6e937ac561ee96896431b2f"],["/categories/dev/page/2/index.html","94c7e54e5c344c303d58702420bc42c1"],["/categories/maintaince/blog-setup/index.html","0300d55d2cbb3578ed9efb91be262c12"],["/categories/maintaince/index.html","6ef0d6bc37de83e55306d07fd765aa63"],["/categories/maintaince/macbook/index.html","beedf75fdcbfdad866573da3e262c577"],["/categories/maintaince/router-config/index.html","bb8bdc4b97eabb9f1ba7d75f01659a18"],["/categories/notes/index.html","5e84d882bd3a3c299f220c671cc20e3f"],["/categories/tricks/android/index.html","4352e224b1e8b099973fc7ae2d095d4f"],["/categories/tricks/index.html","37f622e57409fef6f6a6f3703b142db1"],["/categories/uncategorized/index.html","a98600a000f77e3df2b83706768b644e"],["/categories/works/Front-End-Dev/index.html","8e97d382863e00dd35ecaef57403f7ce"],["/categories/works/csharp-wpf/index.html","f7667ea5a668f04a8abf23128c05d6e5"],["/categories/works/index.html","e1be93080b23884704d61fd824fad521"],["/css/seichi.css","42693f35c4c482207368dd363ea27373"],["/css/style.css","a81f79e7bf311785886f2c1c31c8e4d4"],["/google311213f0c8d812a9.html","51f1ee3c2f13a21a1a40b3dae4954454"],["/img/coderwall.png","1976fe70f1ee8ed243e0975402e06a2d"],["/img/delicious.png","952d9b54d8bcfe7b998f67ff48c4dbce"],["/img/douban.png","d42a163f932100e621d22732db34ecdb"],["/img/facebook.png","4bd685f6c9fdaccabf07bdd52173facb"],["/img/github.png","3c4b6267a1a3fedebdc7d089610ecfe7"],["/img/google.png","c385f5304465716b2d6c9ada94c657ab"],["/img/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["/img/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["/img/linkedin.png","4c72c4896f3c23f736cb1ad08f0c866e"],["/img/mail.png","38a7b8302dac028bf03b22d228938abf"],["/img/pinboard.png","9b6186cb97adbe50311f94e50f2392cf"],["/img/pinterest.png","e1b8e655d1b99b40ebcbd96977ae234e"],["/img/rss.png","ec8cf9b5a98011aa75cc0a4f25024dc9"],["/img/scrollbar_arrow.png","be5381cedbd6b778b1d92e224fd71cf7"],["/img/stackoverflow.png","039128ececb47b33bccedd98dc9fc809"],["/img/twitter.png","d2289a4936fefa41d9f92cf89939be5b"],["/img/weibo.png","b382032b316ee38c6d537fe9d36ae54c"],["/img/zhihu.png","e6352c0e1957beef3009268ae747c3aa"],["/index.html","e978ccb7e9a43ab6a430dcab85fec957"],["/ja/2015/03/WNDR4300-setup-log/index.html","b2c545efe69816c1536659ee0915efc7"],["/ja/2015/03/android-hostname-change/index.html","81b3cdfb622e76f2f068bebeb216600e"],["/ja/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","01d0e6ba9bfff5f2ee04360b2b0da3c7"],["/ja/2015/04/android-chrome-issues-with-webpage/index.html","cb8b7f22ea4c00e10b45ff2bff4dad6a"],["/ja/2015/04/cpp-study-log/index.html","a006d5ade1ab546c8dd56e1add5ee82a"],["/ja/2015/04/github-pages-ssl/index.html","d0abde5a4668ae1a10c28a800a077c38"],["/ja/2015/04/hello-world/index.html","9433666a6295b18199ea87cbd3531085"],["/ja/2015/04/hexo-setup-log/index.html","ebe2c7c47771f0ef484aa7e31f2b3a2e"],["/ja/2015/04/self-copy-cd-inazuma-1-html/index.html","f090afe54fc5b904e2c7f7ce4d1d80c5"],["/ja/2015/05/cpp-inherit/index.html","b5e564bcaeb55478daae14a03c2910a4"],["/ja/2015/05/cpp-polymorphism/index.html","524166641f1a5931b08cff9aac2d4784"],["/ja/2015/09/android-root-ota/index.html","7cb2a10e9c6cd8e027821a8c94845c9e"],["/ja/2015/09/java-learningNotes-1/index.html","11d4aedaabce2b02585ed75711505645"],["/ja/2015/09/newblog-newlife-2015/index.html","637b735a31dbeff95a355db1c5b5d59f"],["/ja/2015/09/router-rebuild-2015/index.html","2d5ac3a234f962883dde7bd568adfada"],["/ja/2015/12/2015-12-21/index.html","2aa18f6b05a003f4cb4b5133c7c08cfd"],["/ja/2015/12/PixInTouch/index.html","fa5e80107c072f9b2742a53ffa1247bc"],["/ja/2015/12/git-study-1/index.html","2ade40d257c22e374074a4834cf6814a"],["/ja/2015/12/hexo-backup-and-migrate/index.html","2c1c3af606a6cf735f1b1a0479f5bc28"],["/ja/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","85112823bbbb18ccf3a6c60b238fb5da"],["/ja/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","be1cb51d3e038a37fb2e54c4bbc9acde"],["/ja/2015/12/router-reconfig-2015/index.html","d23584e328d262cc4e68732a3c096fa3"],["/ja/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","25735ca4942087129035d3f05e14e23d"],["/ja/2016/01/2016-stepping-further/index.html","12d03a9b80e76280a4ea1233d76b892f"],["/ja/2016/01/Android-Study-1-22/index.html","f4539fbaa6799a509dd0df48b8c28ee3"],["/ja/2016/03/2016-03-20/index.html","4554148edbab5f2d0abd93b88b84418d"],["/ja/2016/03/GSC-535/index.html","6de6d6a56d0396c74af059d8970972ed"],["/ja/2016/03/gulpjs-1/index.html","417883921afae33ee0e3bab859537006"],["/ja/2016/03/hexo-theme-paper-white/index.html","ce1c145cc2a82b10fade7f43043edfba"],["/ja/2016/04/2016-04-19/index.html","78ed3729724b0d4dd8df9e4db22e5012"],["/ja/2016/06/2016-06-16/index.html","d8ace70a0ed10f9009ed21d3fb1bb185"],["/ja/2016/09/2016-09-18/index.html","c9152d4fcb168dfab64061fc3919e8e1"],["/ja/2016/10/2016-10-27/index.html","5391940e8e8e27c95c44d374d17e6faf"],["/ja/2016/12/config-switchresx-and-2khidpi/index.html","4f1751ac9a7e7a7daf25cf221a9de08a"],["/ja/2016/12/improve-duoshuo/index.html","91f7b8992596bb2b62da0996611a6b35"],["/ja/2016/12/use-travis-ci-your-blog/index.html","d9c5e5a6e47963a5cbefd116dd1a6a39"],["/ja/2017/01/2017-iyahoi/index.html","99fbdfca9ddebb042a4a3d19083a140f"],["/ja/2017/01/webpack-amd/index.html","3315e52b7358e688fe82bc2d4c605082"],["/ja/2017/04/kotobukiya-syaoran/index.html","a5323e44d1614ba762dc29952da2a8be"],["/ja/2017/04/macbook-and-surface/index.html","2d76305bd3ce2c81ba4c9a944195b7d3"],["/ja/2017/04/uc-hyakuya-yuichiro/index.html","2423fa49923ac3d74b75815254ceb86c"],["/ja/2017/06/noragami-seichijunrei/index.html","cd8d6f62a31ab516ffc063fc629ab578"],["/ja/2017/08/cross-compile-55-libev/index.html","7b0fd32638522e82127c42d607648c0f"],["/ja/2017/08/explore-service-worker-working-lifetime/index.html","f86da27967586156914b0605d51b155e"],["/ja/2017/08/hello-jp-world/index.html","f75f0957ec9745f0775b6ee84634252e"],["/ja/2017/08/kiminonawa-tokyo-seichijunrei/index.html","948ff1659382ab6da051f22cf8c13d5d"],["/ja/2017/09/record-user-login-status-methods/index.html","0b1fc33f12dbdabf1cf2e4164a57810c"],["/ja/2017/10/vue-typescript-early/index.html","323cc2f04a835c4932c0e25d4dae1c49"],["/ja/2018/04/2017-end/index.html","36d7e0eb7ce977cf8a55f2a6769ab2cc"],["/ja/2018/04/twitter-account-activity-api/index.html","1cc6137eba5093fedb173daa0a5f846f"],["/ja/404.html","b7eb6b2f1f7efa8c60db02786042883e"],["/ja/about/index.html","baf24fd6c0071de4241b4ff17d5d61e5"],["/ja/archives/2017/08/index.html","ee42f1988e686128ff14c5673fbc228d"],["/ja/archives/2017/09/index.html","64f03295cde43ba242ec8a1afc6a7239"],["/ja/archives/2017/10/index.html","b9bcb99dadfa03abc7a78e35a0306ec1"],["/ja/archives/2017/index.html","ab90d103602b4dcb025d2adc4a02b1a6"],["/ja/archives/2018/04/index.html","1cc5db5e2bc8707df59087763e12e559"],["/ja/archives/2018/index.html","fc91f6488c8643587df107375818f279"],["/ja/archives/index.html","765b4a9acd0649046d225c4f7d66f48d"],["/ja/categories/dev/Front-End-Dev/index.html","58583db50446a667ccfd4f5bc954cf8f"],["/ja/categories/dev/index.html","cae804ee43e040981f13a255efb1cfe4"],["/ja/categories/uncategorized/index.html","d40dfc0ada9e01727979452c1fd42911"],["/ja/index.html","465637cc0dd4cc2b04af54b7e4906ac8"],["/ja/nihongo-test-page/index.html","32018cf6a19edf8e7d47a1237a4b8861"],["/js/instagram.js","7d7a9e2e7286ba2d5b6d12068214f0c3"],["/js/jquery.lazyload.js","28c23bc40080d31144776e9a8736837f"],["/js/main.js","2e92f29b0cd90bddc062915eb46a858c"],["/js/mobile.js","dc84e1287e89e3c1bba67fd47b8656b1"],["/js/nextpageajax.js","c3bde8d7bb1f967fb319f57a187ea51a"],["/js/pc.js","631b535186aab0e262485ee2bf9da628"],["/js/ripple-effects.js","b9c11903da0ef5c3d790b41369c3137e"],["/js/share.js","de52ac3d43e43c1951a08b0804458a8e"],["/js/totop.js","661822968b58fd439f46bd54031238d6"],["/nihongo-test-page/index.html","e17b15b58d49b87dd04c1f96db1f179a"],["/page/2/index.html","8203ef85099768f552bdb62ff7b0877d"],["/page/3/index.html","c13d8e1956943b1ea172ecd966364cc8"],["/page/4/index.html","dce03b59724ab3e6b32a15a5218135b8"],["/page/5/index.html","00a8344e7c3b0e92e627c2292217f6aa"],["/page/6/index.html","338702a5b6b0313282a7bb7b48bca44f"],["/photoswipe/default-skin/default-skin.css","426e8908d7426603ca203b6d16281b1e"],["/photoswipe/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photoswipe/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photoswipe/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photoswipe/photoswipe-ui-default.js","0c9196aa8943ce8a8045c9f4cc62915c"],["/photoswipe/photoswipe-ui-default.min.js","9517baca43cd4e9cb23ff337fbc1baa1"],["/photoswipe/photoswipe.css","7dc0df107159e1be66d4464171561e5b"],["/photoswipe/photoswipe.js","a8d26ff34943c859884acbd6b2531315"],["/photoswipe/photoswipe.min.js","f5cd6479c4e4682545a9603e6b50c741"],["/setup-log/blog-setup/github-pages-ssl.html","d5e315a4f7725d0c5a828ab2ac48dfe3"],["/sw-register.js","c435668d907f47a16dfa74eac62b9906"],["/zh-cn/archives/2015/03/index.html","4da5c8c7955476556cdd71b072fe3929"],["/zh-cn/archives/2015/04/index.html","4fbfb5898388e6931d3a17209da989c6"],["/zh-cn/archives/2015/05/index.html","783ef49f85af437aec8e8a3a50362adf"],["/zh-cn/archives/2015/09/index.html","e5be039dbdb344086e5c6990007c06b7"],["/zh-cn/archives/2015/12/index.html","2378056ae12038bee60c54f12f033ee3"],["/zh-cn/archives/2015/index.html","bfd66983ecd2df5410c428d058094d2c"],["/zh-cn/archives/2015/page/2/index.html","34d1dca678ee15881754e328b12d9c8d"],["/zh-cn/archives/2015/page/3/index.html","8566caa1c2303adb981704cb126b8988"],["/zh-cn/archives/2016/01/index.html","8738b820a76754e9d6dc853875dfd790"],["/zh-cn/archives/2016/03/index.html","f0dd673957917fe125cec7f29e727c49"],["/zh-cn/archives/2016/04/index.html","7465ff2a7079f5c72b802050ede39936"],["/zh-cn/archives/2016/06/index.html","e0de6ddc5e2dfe715b704c0417196f75"],["/zh-cn/archives/2016/09/index.html","f6af9df0b06bb00b3dfcab8aa19b6bcd"],["/zh-cn/archives/2016/10/index.html","fdd9deb831c8616cfec2e8fa67075b0f"],["/zh-cn/archives/2016/12/index.html","c982d8c116a1092db715c36e1a5a3702"],["/zh-cn/archives/2016/index.html","7862e34c596814c8acdb2df038e4f5b5"],["/zh-cn/archives/2016/page/2/index.html","86545177e64239d2a5f79bbb23b0bdf7"],["/zh-cn/archives/2017/01/index.html","424765acbd0ec87bf9b10aada1631949"],["/zh-cn/archives/2017/04/index.html","5a8f13345a65e5ec66c3fb0b5d251343"],["/zh-cn/archives/2017/06/index.html","a0073a0c4d8345e54827f258e24f8326"],["/zh-cn/archives/2017/08/index.html","72d4ae7b159893a8fc058d4c43b7e54b"],["/zh-cn/archives/2017/09/index.html","71b596322dc01785da9b2172b1385bd4"],["/zh-cn/archives/2017/10/index.html","c92163fd797250faf0e08fdf8dec8382"],["/zh-cn/archives/2017/index.html","985fc265b1eb38b6ca51d77d8f5121e7"],["/zh-cn/archives/2017/page/2/index.html","b069fcd6e135ae2bcc3859daf432aa1e"],["/zh-cn/archives/2018/04/index.html","982566f29ec017b7753c6d50b57ef6f0"],["/zh-cn/archives/2018/index.html","fcb32afb99d2c290d94991132db1b52e"],["/zh-cn/archives/index.html","cfa0e2941a8a1e5fa5154052cecfd3bf"],["/zh-cn/archives/page/2/index.html","01ffa235a9e6772b2962a0ea54fabf56"],["/zh-cn/archives/page/3/index.html","58f9da47c8056adfec6a7df4751c9705"],["/zh-cn/archives/page/4/index.html","7c4088a50259159dd94216d29c2bc388"],["/zh-cn/archives/page/5/index.html","c3481d238d32ba2a85f249c4d7969eb4"],["/zh-cn/categories/ACG/Music/index.html","41222e98dc088a529bfec965af10f846"],["/zh-cn/categories/ACG/Music/self-copy/index.html","c554afd9a36b9fdefc2d874f59c92ec6"],["/zh-cn/categories/ACG/Travel/index.html","a8a583a4b262c5322d7ead65bd50af2f"],["/zh-cn/categories/ACG/figures/index.html","a9939fe39faa4c59404fa2fce2b60ed5"],["/zh-cn/categories/ACG/index.html","73d60a83b2c03f3fe9c2b83f5c91800a"],["/zh-cn/categories/dev/Front-End-Dev/index.html","9f72b926c10832b04e9cd2cab056b635"],["/zh-cn/categories/dev/HTML-CSS/index.html","d6d28556a8e3b0b15024e1e837ceb7e2"],["/zh-cn/categories/dev/android/index.html","141277d6472d0da987ae376f4ccb7db6"],["/zh-cn/categories/dev/cpp/index.html","64a9ce976df1d65ee4f0db4bdee0eefd"],["/zh-cn/categories/dev/git/index.html","c83e597bb1430b506d5a814cbecebae9"],["/zh-cn/categories/dev/index.html","0de0e9d0365b2ff822e39d47090e3bc2"],["/zh-cn/categories/dev/java/index.html","6e493c55d50e470e4c4735e9dffd5430"],["/zh-cn/categories/dev/page/2/index.html","c9a55f34e07ac8b805fd1198dd7f2311"],["/zh-cn/categories/maintaince/blog-setup/index.html","36830b8dd7c03f0e2106f1b9848ad7b6"],["/zh-cn/categories/maintaince/index.html","19b1bd4d330c5b9c6fc668b84025f5b8"],["/zh-cn/categories/maintaince/macbook/index.html","7bee0deadde60598aa299ed5e47f1bb3"],["/zh-cn/categories/maintaince/router-config/index.html","bbaa691c55a9ce348ab1dd90bb6666ae"],["/zh-cn/categories/notes/index.html","80385a48519bddce8dcfcb9ca11ec411"],["/zh-cn/categories/tricks/android/index.html","562fcd12b962ce59f60ec0da714ca08f"],["/zh-cn/categories/tricks/index.html","f1d4c232feec4d13795eee968b80e847"],["/zh-cn/categories/uncategorized/index.html","ebd33fc502d7f27f62cf809ba6763611"],["/zh-cn/categories/works/Front-End-Dev/index.html","ce88fa57203c0cb393cc0c954cc2029f"],["/zh-cn/categories/works/csharp-wpf/index.html","a1eeb247aaf35ef594ef7f30fa5d24ad"],["/zh-cn/categories/works/index.html","1edaa8802ac61f1abce48f13b125aa40"],["/zh-cn/index.html","fcf3e83ffb2b828b6ac56ed4d415fbe2"],["/zh-cn/page/2/index.html","27a169167136861843a4b1280f6c876a"],["/zh-cn/page/3/index.html","a462a684bc8c5b20a09c499e6a35ccc5"],["/zh-cn/page/4/index.html","7fe33f164eeb7204a4d49173fa2c2dfa"],["/zh-cn/page/5/index.html","9a015819c723bd1d34e2f52fda1a55b8"]];
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
