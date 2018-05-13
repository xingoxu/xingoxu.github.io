/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/03/WNDR4300-setup-log/index.html","e99bbd3a6c16799512c960aaf3b2981e"],["/2015/03/android-hostname-change/index.html","256e4ef47dae7dac17ba1cdeae40fa17"],["/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","9e31c578fef37631aa916272782fc662"],["/2015/04/android-chrome-issues-with-webpage/index.html","14d1fd56cf513589db11e3501c3b94a0"],["/2015/04/cpp-study-log/index.html","d94ae37041310cc69a943774f73bd3fb"],["/2015/04/github-pages-ssl/index.html","054da01a8cedcecfb0faf5b10ff314d8"],["/2015/04/hello-world/index.html","77e0342ca3348b75488fc44804b84991"],["/2015/04/hexo-setup-log/index.html","1f0f10735b88ec7cc3994397322baf1e"],["/2015/04/self-copy-cd-inazuma-1-html/index.html","5d5234da9ae154c4217c470eaaf4edce"],["/2015/05/cpp-inherit/index.html","1b169a2c50262ab37ce3aeb70a83ba0c"],["/2015/05/cpp-polymorphism/index.html","bc9479257c4e9b09e9ce394de5cd7533"],["/2015/09/android-root-ota/index.html","2e183ca189a4ee2c4c9ccfe2ed09101a"],["/2015/09/java-learningNotes-1/index.html","b225db57c60c81fc2bacada4d65ff90d"],["/2015/09/newblog-newlife-2015/index.html","ef58879010ee45ad7b2294c3dd1c28b7"],["/2015/09/router-rebuild-2015/index.html","ca8d63191c8872682f483dc2566fdafb"],["/2015/12/2015-12-21/index.html","aa7c38f8b59f4c2b0349ee38611fa644"],["/2015/12/PixInTouch/index.html","a22534ecc2e05d9d2b4357652db2606f"],["/2015/12/git-study-1/index.html","fd2eb38524cced33dfb40e4350e7c13c"],["/2015/12/hexo-backup-and-migrate/index.html","5af5ca7032a9a9579c0b4bb1a9192f99"],["/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","ce68e7fd285d2ddd82bad5d3686104a9"],["/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","ff7fa5ae58e7449c0422853b1a1df6df"],["/2015/12/router-reconfig-2015/index.html","63410cd3a8b002f377cf62dc257aa927"],["/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","56200cfd5dc32afd11f7647b7099b4f7"],["/2016/01/2016-stepping-further/index.html","51c537873e048e4058cf65c0c6d12a5b"],["/2016/01/Android-Study-1-22/index.html","346a1751d51312bb08f6211649c9840b"],["/2016/03/2016-03-20/index.html","a20c9151dd766f97d6c4badc01de48e8"],["/2016/03/GSC-535/index.html","2f53ed8f5ea2b77ace8e68138374413f"],["/2016/03/gulpjs-1/index.html","f3d43111170d4bd1ce4044d261796d99"],["/2016/03/hexo-theme-paper-white/index.html","ccced537a3ed76c9108ab351ae40cd37"],["/2016/04/2016-04-19/index.html","81438b380b1f5600b005473cf43cf973"],["/2016/06/2016-06-16/index.html","aaa82810d5acf0f7ff0b96a42add8790"],["/2016/09/2016-09-18/index.html","7ce99c8bead41428bbdf99a7d3b30e2e"],["/2016/10/2016-10-27/index.html","22cb601256878603440a34e98d3bc90e"],["/2016/12/config-switchresx-and-2khidpi/index.html","f063a716fccdd2a45c82fc495b066be8"],["/2016/12/improve-duoshuo/index.html","d059149fcbbd45bfa99ffcde31aaa26c"],["/2016/12/use-travis-ci-your-blog/index.html","940a09027702b7d65f7b95a0af5e000d"],["/2017/01/2017-iyahoi/index.html","ac7de7edb9094acf298d4a52399b82e8"],["/2017/01/webpack-amd/index.html","8ebee131733657aba95e9cedb6bdf96f"],["/2017/04/kotobukiya-syaoran/index.html","1c6e36169558e06bd0d35379e94d05d7"],["/2017/04/macbook-and-surface/index.html","9362417b9ac9ea81d26df594cfb79691"],["/2017/04/uc-hyakuya-yuichiro/index.html","63880a13bb0cf0b48e6ffe0410003c18"],["/2017/06/noragami-seichijunrei/index.html","0e00363908dfa691bfc0bd79cb0d4316"],["/2017/08/cross-compile-55-libev/index.html","1ebb427a5057fc14d4c5353fb146b822"],["/2017/08/explore-service-worker-working-lifetime/index.html","84b44522c95f15ec1af43d1722e783fa"],["/2017/08/kiminonawa-tokyo-seichijunrei/index.html","6bdb136d54b22db1d567e3ac68587a5a"],["/2017/09/record-user-login-status-methods/index.html","615e4031241297d08ff36832b1333ce0"],["/2017/10/vue-typescript-early/index.html","e555994ee9cd5e60b04688727e6a69dc"],["/2018/04/2017-end/index.html","4bd01ce7f56e361c7f379cb0dff8af77"],["/2018/04/twitter-account-activity-api/index.html","56bbc8391081341a6e77298ad6ffad86"],["/2018/05/buddy-complex-seichijunrei/index.html","560055913a5e0922457db570bd421d5a"],["/404.html","7129cc12a1a10cd1198b4f814f0e7c22"],["/about/index.html","767b7b2eb0c59a8524acf04558a222d0"],["/archives/2015/03/index.html","c7384a6b99c5cc7cfb1d20f0786ee263"],["/archives/2015/04/index.html","cd7111c5e4a8e5c310f863ef2d270044"],["/archives/2015/05/index.html","7b73f52ffcd594493afa2ea5ef946cad"],["/archives/2015/09/index.html","9684283f65756ecb5af8a39d8587a189"],["/archives/2015/12/index.html","dd3168815788db286423e32735f5eb1b"],["/archives/2015/index.html","2ba29565e75feb145c82828ce7ff3f95"],["/archives/2015/page/2/index.html","c883850142a209b9380553190fc71cac"],["/archives/2015/page/3/index.html","5d30f3da54558a312c00a33e0b80863e"],["/archives/2016/01/index.html","abe07cd35194e3798bb0a182f24512db"],["/archives/2016/03/index.html","bf2eed16cf6e5be7aece91ac457bc6e2"],["/archives/2016/04/index.html","f3a437b39d632ed3c79d60275bb1669e"],["/archives/2016/06/index.html","7deb5101f2dd6f7e1e5de3f0cda6258a"],["/archives/2016/09/index.html","fffd1bd475339742853ea73e136e4b58"],["/archives/2016/10/index.html","c8fbef1e6d6e0685e516616dbaf2f0f7"],["/archives/2016/12/index.html","38b56ddf176d8f54e03262b6b2b3a402"],["/archives/2016/index.html","de15b61c7584aaa6b4037e9126093ae5"],["/archives/2016/page/2/index.html","27e53675ce845331202eaa4825431ac8"],["/archives/2017/01/index.html","73188cc2b640fd6f75f109dfbb3b231b"],["/archives/2017/04/index.html","02b4ab888d1a1d1e7e3e81c8c8023d5b"],["/archives/2017/06/index.html","5cb5d0ecff818ea1a5c728d4e4a19c05"],["/archives/2017/08/index.html","a98628168a4603cda7015e96cd4440b1"],["/archives/2017/09/index.html","39ece4f86caed600addf399c90a8d688"],["/archives/2017/10/index.html","006458c918ce0d6ec9af7b088f1439df"],["/archives/2017/index.html","8898cd20f07ce4ff1450c5b98266140f"],["/archives/2017/page/2/index.html","ec86321feb418f8a745fdaae0228efe5"],["/archives/2018/04/index.html","90dcbc88c559e3d7fed54e5829dbca86"],["/archives/2018/05/index.html","800606e9afc6d30c9831256ca5abeff9"],["/archives/2018/index.html","1947721557b1fe77f1d0b1e4b6ff9e83"],["/archives/index.html","eead1b0bea4601c3213a829b7fa3f50f"],["/archives/page/2/index.html","2b2175c418ff9ba885efad6c2b71155f"],["/archives/page/3/index.html","1a5ee4464a16b809baa529b655f25059"],["/archives/page/4/index.html","263912eb9e64b48901ef5ce469d765fb"],["/archives/page/5/index.html","5fe625a900708af3c76ea17556a8da3c"],["/assets/images/about-me.png","a066d06c3d9d1fe56c4d921cec7febf3"],["/baidu_verify_YbTSlpWIUJ.html","779049c3a50695ceb3a388ce1e8bc1b9"],["/categories/ACG/Music/index.html","8ce5f893ce9a80d26cb325088180dca3"],["/categories/ACG/Music/self-copy/index.html","a9599235b988e3cf8447a3b92e7e12f7"],["/categories/ACG/Travel/index.html","94214bd0ef8ac7e9706a194a453f84fa"],["/categories/ACG/figures/index.html","9a4c87ae68d5eda5bf67a54d28a11a61"],["/categories/ACG/index.html","36917781e330b8b3f405b2e1b272074f"],["/categories/dev/Front-End-Dev/index.html","fa7fc06f47605fb97592abbd3f56d43a"],["/categories/dev/HTML-CSS/index.html","2ee96c387104943a3bc3410d6a6cee67"],["/categories/dev/android/index.html","16ed53fb456712f9ef74c75f329a849d"],["/categories/dev/cpp/index.html","72b5071797a902c47a3dd866d3495ebc"],["/categories/dev/git/index.html","d28c4055e77525982258e205d683935d"],["/categories/dev/index.html","8789a95bfe8616edf98fc6a74dcafc1d"],["/categories/dev/java/index.html","6a65ffb2629837f5675afcb9851da662"],["/categories/dev/page/2/index.html","321e2f120a34b1172af5b052e3aa7d06"],["/categories/maintaince/blog-setup/index.html","eae3d3d76f2c00e94cd977a8cd517f3b"],["/categories/maintaince/index.html","3aa3ab9890adc1f6326a05c123a3ec51"],["/categories/maintaince/macbook/index.html","a1b7cf2f6347f1c773da50c3edf32fd0"],["/categories/maintaince/router-config/index.html","6486f5b08cb9d39529feff87fa9a152a"],["/categories/notes/index.html","539e6dc63633ef6deb1ca91562f1ce74"],["/categories/tricks/android/index.html","3ac1458ed55c9a93b9ae9c2734da03fa"],["/categories/tricks/index.html","0b69728c03b3d40ebeafbbc1bcb7c40f"],["/categories/uncategorized/index.html","1d24ea91b1e313ad24c2bf63ddcae0e8"],["/categories/works/Front-End-Dev/index.html","39c557b7d20ea02c41a36cbf729cd82e"],["/categories/works/csharp-wpf/index.html","f6059690026d301bfd3f3abb311e1d41"],["/categories/works/index.html","79d430b32b28e4c5ec233030de5a0a04"],["/css/seichi.css","42693f35c4c482207368dd363ea27373"],["/css/style.css","a81f79e7bf311785886f2c1c31c8e4d4"],["/google311213f0c8d812a9.html","51f1ee3c2f13a21a1a40b3dae4954454"],["/img/coderwall.png","1976fe70f1ee8ed243e0975402e06a2d"],["/img/delicious.png","952d9b54d8bcfe7b998f67ff48c4dbce"],["/img/douban.png","d42a163f932100e621d22732db34ecdb"],["/img/facebook.png","4bd685f6c9fdaccabf07bdd52173facb"],["/img/github.png","3c4b6267a1a3fedebdc7d089610ecfe7"],["/img/google.png","c385f5304465716b2d6c9ada94c657ab"],["/img/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["/img/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["/img/linkedin.png","4c72c4896f3c23f736cb1ad08f0c866e"],["/img/mail.png","38a7b8302dac028bf03b22d228938abf"],["/img/pinboard.png","9b6186cb97adbe50311f94e50f2392cf"],["/img/pinterest.png","e1b8e655d1b99b40ebcbd96977ae234e"],["/img/rss.png","ec8cf9b5a98011aa75cc0a4f25024dc9"],["/img/scrollbar_arrow.png","be5381cedbd6b778b1d92e224fd71cf7"],["/img/stackoverflow.png","039128ececb47b33bccedd98dc9fc809"],["/img/twitter.png","d2289a4936fefa41d9f92cf89939be5b"],["/img/weibo.png","b382032b316ee38c6d537fe9d36ae54c"],["/img/zhihu.png","e6352c0e1957beef3009268ae747c3aa"],["/index.html","f7a852da112741d16a3f85c76a3d595a"],["/ja/2015/03/WNDR4300-setup-log/index.html","ad0476d7daaedb48393b9f1b65c76c07"],["/ja/2015/03/android-hostname-change/index.html","ce009d852677c647cdc2990afe6f46dd"],["/ja/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","947bdf83f7cce38038cc941f825f9763"],["/ja/2015/04/android-chrome-issues-with-webpage/index.html","fce688bc0266a0495540ee8bcf49c999"],["/ja/2015/04/cpp-study-log/index.html","dc510b69bd02fc63a53faf4825101d50"],["/ja/2015/04/github-pages-ssl/index.html","29e532125de1fb893a4fbc420974ea7f"],["/ja/2015/04/hello-world/index.html","9efe21e2d44b9ab1683a5876786d5083"],["/ja/2015/04/hexo-setup-log/index.html","4de0c051c869c9aee04d55d0056aaa7b"],["/ja/2015/04/self-copy-cd-inazuma-1-html/index.html","de541e1b452f7a1b48684bede53ad97c"],["/ja/2015/05/cpp-inherit/index.html","1740c7d706f482ad8c2fa2017be0a3d2"],["/ja/2015/05/cpp-polymorphism/index.html","307aed5a8528f2f01d1ba55eafacbf87"],["/ja/2015/09/android-root-ota/index.html","5ffd26579204b3962371cf487660a797"],["/ja/2015/09/java-learningNotes-1/index.html","70a267ac51535ce169659d4fa4dd01e0"],["/ja/2015/09/newblog-newlife-2015/index.html","f1c010433c426f5ebedfef80c2eb52b4"],["/ja/2015/09/router-rebuild-2015/index.html","6e0a444d8318c541c4aa8b470b37aa5e"],["/ja/2015/12/2015-12-21/index.html","fdb8af4246207490e965e0fb6b2fa9e5"],["/ja/2015/12/PixInTouch/index.html","68adbaa2e82fbafd9235f70c3dd8bd94"],["/ja/2015/12/git-study-1/index.html","f3d757a4cfc2d3aea9b91af7323381ff"],["/ja/2015/12/hexo-backup-and-migrate/index.html","43f14d338689b6357e115d8be51802eb"],["/ja/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","db632dead27322461bcc930cc9030b43"],["/ja/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","11af9d173740959e8ba7128c8a72779c"],["/ja/2015/12/router-reconfig-2015/index.html","01a0b61f656e82067ee3adb9ac621c53"],["/ja/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","229e2e145ca476cb10a01fb215fc72a0"],["/ja/2016/01/2016-stepping-further/index.html","e58740364a4fa3a4c09491ff3d1b8bba"],["/ja/2016/01/Android-Study-1-22/index.html","c46631fa36b1c10d1fcbd5615d91b34f"],["/ja/2016/03/2016-03-20/index.html","05a0886e222aadf47c6a17e23596c823"],["/ja/2016/03/GSC-535/index.html","669d2601598d06d4fd4d05d8e1daeae0"],["/ja/2016/03/gulpjs-1/index.html","8d2076a1e2b47f890b879d116150f44b"],["/ja/2016/03/hexo-theme-paper-white/index.html","1d39a4c7b1527643b4f0a06569590b56"],["/ja/2016/04/2016-04-19/index.html","01c56fe86e14bf0be6fbf1d4de090444"],["/ja/2016/06/2016-06-16/index.html","39adc1c4bfc071cc422cfa40d929f4d9"],["/ja/2016/09/2016-09-18/index.html","a743b17147ac8414b063577afe4bbfd7"],["/ja/2016/10/2016-10-27/index.html","9c6ec418362b3c24cd517cc8ac90ef2d"],["/ja/2016/12/config-switchresx-and-2khidpi/index.html","e105150d19a8a5498abde6b52204fd20"],["/ja/2016/12/improve-duoshuo/index.html","c4b91ec6ce093a515b916bef5857570a"],["/ja/2016/12/use-travis-ci-your-blog/index.html","50ea447675d3f62ad2e7d7cb60788e61"],["/ja/2017/01/2017-iyahoi/index.html","e93be22f403026f33f624facfc32fc95"],["/ja/2017/01/webpack-amd/index.html","e9e5fa66ef7833d1b24605216e35ad5c"],["/ja/2017/04/kotobukiya-syaoran/index.html","d921a382c2c13eb9992f473945f2aad3"],["/ja/2017/04/macbook-and-surface/index.html","ebbdc1154745dc96f3e9683726fcf814"],["/ja/2017/04/uc-hyakuya-yuichiro/index.html","9d3cb6e43529ad69ef4a896e647ad123"],["/ja/2017/06/noragami-seichijunrei/index.html","3ce7994b2aa496783660bf07a1ab61d0"],["/ja/2017/08/cross-compile-55-libev/index.html","498aaf93eefc63ab432485c0c33f9831"],["/ja/2017/08/explore-service-worker-working-lifetime/index.html","ec549e69a8fe482e58fe710d2d7f3211"],["/ja/2017/08/hello-jp-world/index.html","35047d7de641b6a212a4234e9c27c4df"],["/ja/2017/08/kiminonawa-tokyo-seichijunrei/index.html","0473792c4a3588bcd3ea434458cf4b04"],["/ja/2017/09/record-user-login-status-methods/index.html","d500d65093d0ad8d1b6c6d3d15b46094"],["/ja/2017/10/vue-typescript-early/index.html","0f2db700a7ab2424775c4c18c45d4f85"],["/ja/2018/04/2017-end/index.html","0f1f2a4d44366ffb6734a8e67d5eb2c5"],["/ja/2018/04/twitter-account-activity-api/index.html","ae416bb0dd910fb1a39160ada42b48c6"],["/ja/2018/05/buddy-complex-seichijunrei/index.html","df5588561eaed867d99f9789e404d5a8"],["/ja/404.html","180a20c7976c67962cf55011f5d01477"],["/ja/about/index.html","cc87bfbde0de5f95033db0bd1f5bc5a4"],["/ja/archives/2017/08/index.html","f720e0d2d6f657fadea276b5b73136de"],["/ja/archives/2017/09/index.html","8d728dab8c44585c3bf1c5f84a1cbbb7"],["/ja/archives/2017/10/index.html","46469ea9c94be486de8c9a4aae315204"],["/ja/archives/2017/index.html","c546219bf2533355846255b525455074"],["/ja/archives/2018/04/index.html","aa6f5d5c9b822cff4d341d8969a34073"],["/ja/archives/2018/05/index.html","63bc25fe899f08d242dbd81394bc07e9"],["/ja/archives/2018/index.html","4343eaa09a094f34fde168a499e8a9b9"],["/ja/archives/index.html","8012e3a5e16cbb6dd6f11d9fc66a2c85"],["/ja/categories/ACG/Travel/index.html","afb3d3f4f6b39b3e510ccb2bbf1c8f13"],["/ja/categories/ACG/index.html","0872246393ab9f11069c2e620e36ec3d"],["/ja/categories/dev/Front-End-Dev/index.html","b74da6fb9e94014a4a38831ad9d84a8b"],["/ja/categories/dev/index.html","64ac4a2003538273754f56d6a50a64d7"],["/ja/categories/uncategorized/index.html","cd28adcf6cd474d4473cf797c7a950b3"],["/ja/index.html","49933f9107ea2bfab6fb8b168ce39bbc"],["/ja/nihongo-test-page/index.html","fc6ac07d0fde2caabb24515111a14212"],["/js/instagram.js","7d7a9e2e7286ba2d5b6d12068214f0c3"],["/js/jquery.lazyload.js","28c23bc40080d31144776e9a8736837f"],["/js/main.js","2e92f29b0cd90bddc062915eb46a858c"],["/js/mobile.js","dc84e1287e89e3c1bba67fd47b8656b1"],["/js/nextpageajax.js","c3bde8d7bb1f967fb319f57a187ea51a"],["/js/pc.js","631b535186aab0e262485ee2bf9da628"],["/js/ripple-effects.js","b9c11903da0ef5c3d790b41369c3137e"],["/js/share.js","de52ac3d43e43c1951a08b0804458a8e"],["/js/totop.js","661822968b58fd439f46bd54031238d6"],["/nihongo-test-page/index.html","b31d90aa288f0a0910b22fbcb680eec6"],["/page/2/index.html","43bdef5311259f7b315359e520bec94d"],["/page/3/index.html","84d75a2051f976783cbee96e37da0e10"],["/page/4/index.html","c89b92eb93a4ccabe6cadc071eb06ad8"],["/page/5/index.html","eec008fd597d0e5e597b0e6b712f4429"],["/page/6/index.html","9003d384e5737432d0d2c42000a8c051"],["/photoswipe/default-skin/default-skin.css","426e8908d7426603ca203b6d16281b1e"],["/photoswipe/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photoswipe/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photoswipe/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photoswipe/photoswipe-ui-default.js","0c9196aa8943ce8a8045c9f4cc62915c"],["/photoswipe/photoswipe-ui-default.min.js","9517baca43cd4e9cb23ff337fbc1baa1"],["/photoswipe/photoswipe.css","7dc0df107159e1be66d4464171561e5b"],["/photoswipe/photoswipe.js","a8d26ff34943c859884acbd6b2531315"],["/photoswipe/photoswipe.min.js","f5cd6479c4e4682545a9603e6b50c741"],["/setup-log/blog-setup/github-pages-ssl.html","d5e315a4f7725d0c5a828ab2ac48dfe3"],["/sw-register.js","4e1494120fcb1a9b72e2523552aeac73"],["/zh-cn/archives/2015/03/index.html","8d42a7838e8ee364149f12a298c53fbc"],["/zh-cn/archives/2015/04/index.html","c82a71c0afb46b3f0030f9fdd84a02ae"],["/zh-cn/archives/2015/05/index.html","6adc2d7bbf66ee2b14f6441913a7da05"],["/zh-cn/archives/2015/09/index.html","517aa5c401e34679324d3db39f4c2b8a"],["/zh-cn/archives/2015/12/index.html","cc22862c033850c58402a733bcaba80b"],["/zh-cn/archives/2015/index.html","2cebd6cc579c7d3c3dcbecab88fabb5c"],["/zh-cn/archives/2015/page/2/index.html","b6ca03c9ece49455a3c2c7b926a9e1d3"],["/zh-cn/archives/2015/page/3/index.html","39cd64d2d39ef5352260a5e8f0def4d6"],["/zh-cn/archives/2016/01/index.html","e81fc93556c9cb5dfec3c38a462995de"],["/zh-cn/archives/2016/03/index.html","fcf9c738d54355561066157ba5c28e83"],["/zh-cn/archives/2016/04/index.html","39783e27d245d34f974f190d07f1688f"],["/zh-cn/archives/2016/06/index.html","a1a866e3db58cc4352e7286e142cb564"],["/zh-cn/archives/2016/09/index.html","bc6e85dabac70e7a8891081b73536860"],["/zh-cn/archives/2016/10/index.html","d1394f2873efb85f586fde939ad7f690"],["/zh-cn/archives/2016/12/index.html","2742c88c95abf90ea02c2ddf94e66b56"],["/zh-cn/archives/2016/index.html","e222336c94e3150a4402b25272f4314c"],["/zh-cn/archives/2016/page/2/index.html","ee0d57f49ae076ee5f811a5e3cd28b16"],["/zh-cn/archives/2017/01/index.html","a70b63592a3dff2f63f1a9ffee84315e"],["/zh-cn/archives/2017/04/index.html","e6c11fe9f434a191a9d04abbfebc7b7b"],["/zh-cn/archives/2017/06/index.html","9307a9a2850f717f70f63a01c43780d2"],["/zh-cn/archives/2017/08/index.html","46f446f23a902cd17df3d6df71c024a3"],["/zh-cn/archives/2017/09/index.html","0124e50eae06c1c2bf38ef9948826530"],["/zh-cn/archives/2017/10/index.html","496a3a4cadc44765e9bc43c231daec54"],["/zh-cn/archives/2017/index.html","6657bf2566d6f43f8a9328776ac327ea"],["/zh-cn/archives/2017/page/2/index.html","9f878156525c1af2280345f56167833b"],["/zh-cn/archives/2018/04/index.html","c81285793ab1d506b7f62aa9baf8e1fa"],["/zh-cn/archives/2018/05/index.html","73aa9971be7d54af0c520eff2d10e8b8"],["/zh-cn/archives/2018/index.html","835f7cd6a5bed6de6507c56f80ff64d4"],["/zh-cn/archives/index.html","bc793a61d98f6eeb9f9831e472289a94"],["/zh-cn/archives/page/2/index.html","fa17b0a58934398396a8f10e555587b1"],["/zh-cn/archives/page/3/index.html","187f0ddb98fa310689296d849659b210"],["/zh-cn/archives/page/4/index.html","37c5679999d4161fae1e93e4ddecd5e9"],["/zh-cn/archives/page/5/index.html","938902bb2285646b08297a6526076a3e"],["/zh-cn/categories/ACG/Music/index.html","ebaf222b8b378f0acf96b97bd20d42a2"],["/zh-cn/categories/ACG/Music/self-copy/index.html","2ce2c46b6726bbad70962a85dbb9851f"],["/zh-cn/categories/ACG/Travel/index.html","b125ea2981cc1637f0dc9df1955bd7af"],["/zh-cn/categories/ACG/figures/index.html","0a1751b6f9b78e6dc780681f687c8b7f"],["/zh-cn/categories/ACG/index.html","33d5b02a0540a319dc1a00fc4a21a3e4"],["/zh-cn/categories/dev/Front-End-Dev/index.html","9812b44f574e3088b25720a821eb429c"],["/zh-cn/categories/dev/HTML-CSS/index.html","8e2db22a39e1a67e31e86cdb3545e971"],["/zh-cn/categories/dev/android/index.html","fdf91276577b28d4f1f9dbfceaedcc27"],["/zh-cn/categories/dev/cpp/index.html","fe34fe9167e2cd5d438e263021d4b06d"],["/zh-cn/categories/dev/git/index.html","16ee5d055299b631960c21b8ad46949f"],["/zh-cn/categories/dev/index.html","9adf48f343dc378b28fc42d68f199a11"],["/zh-cn/categories/dev/java/index.html","3118cd5af77ed7fb5ebf1c0e8341e73c"],["/zh-cn/categories/dev/page/2/index.html","ff64a28d8d956114697e0e29352ea4cd"],["/zh-cn/categories/maintaince/blog-setup/index.html","3d183d7614fa6c362ae92708b753092e"],["/zh-cn/categories/maintaince/index.html","77a9cccfa9a2f608ecf05d2d5503189f"],["/zh-cn/categories/maintaince/macbook/index.html","f5e4f4da086d947a472901bca7861f4d"],["/zh-cn/categories/maintaince/router-config/index.html","79079aca06fa64c7d6f684253d326d9d"],["/zh-cn/categories/notes/index.html","c5fbc0791e06192cd6a3dc2130b399e6"],["/zh-cn/categories/tricks/android/index.html","dd2c69b8d8a3332551acf41f256b6e7c"],["/zh-cn/categories/tricks/index.html","e25b11bc9a4d6036116e2a4cdcbfc3a8"],["/zh-cn/categories/uncategorized/index.html","b2fc59c649360618611953de93df7cbe"],["/zh-cn/categories/works/Front-End-Dev/index.html","4243f7ddb327616479036d2e72a5fbdc"],["/zh-cn/categories/works/csharp-wpf/index.html","3d788720c288da2b43de32acc28afc87"],["/zh-cn/categories/works/index.html","a196f98e396b02f483bf20cd600a091e"],["/zh-cn/index.html","6808db1fe1ae1a7f789e82faef81e377"],["/zh-cn/page/2/index.html","839d0eb60d95c908bad82eae28122d1a"],["/zh-cn/page/3/index.html","22411e9c3692685dc51272fd343d8477"],["/zh-cn/page/4/index.html","4eb5a8b969d0ea92fc26570636e29970"],["/zh-cn/page/5/index.html","9a48106ba4089e286ed1e357543a5758"]];
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
