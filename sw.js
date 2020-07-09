/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/03/WNDR4300-setup-log/index.html","695c107f5dbd0e0361f670af23dce328"],["/2015/03/android-hostname-change/index.html","1f3da692b28278d11347b552ce2369e0"],["/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","56c36e21c306395d200a3794481747ca"],["/2015/04/android-chrome-issues-with-webpage/index.html","b5aa34b0239b4a10288614a15a78aa9a"],["/2015/04/cpp-study-log/index.html","4009f113b90d7b3888b9e69458b4f7ec"],["/2015/04/github-pages-ssl/index.html","ea0d7db87378fbd171cd04f2f9126d41"],["/2015/04/hello-world/index.html","d454a59bd0b55323f5b5fc5400d20cb4"],["/2015/04/hexo-setup-log/index.html","67c73f583dcae0e1eba0d965baeee9d4"],["/2015/04/self-copy-cd-inazuma-1-html/index.html","cdbd720555fc2d6841170d906dab8564"],["/2015/05/cpp-inherit/index.html","ac7e41a16005b35a12f264bf881218ac"],["/2015/05/cpp-polymorphism/index.html","223d07f089d7ffa292df217517d8a466"],["/2015/09/android-root-ota/index.html","bbe1b573b3558ac6c8fa1d3d127ab115"],["/2015/09/java-learningNotes-1/index.html","07e005e6a63f6fadf26383f8d527324b"],["/2015/09/newblog-newlife-2015/index.html","94e1f2e6928b854b3383bd66a9699c2c"],["/2015/09/router-rebuild-2015/index.html","3e4c210a128c952da6f0ebcee9927ef7"],["/2015/12/2015-12-21/index.html","03c2830656ad32f13e201deea9780462"],["/2015/12/PixInTouch/index.html","7092e17b3ef144cc5adf317d99a0e52f"],["/2015/12/git-study-1/index.html","f76bc50ac00fa065d2a981a059caa8ba"],["/2015/12/hexo-backup-and-migrate/index.html","81a5c312ea799f7e997c553a5a4a140a"],["/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","167034620d67f63996a8808456f257e7"],["/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","b8ed25285407060119a85574493db024"],["/2015/12/router-reconfig-2015/index.html","c2f9e4f0b3931f8715f1d186955836ab"],["/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","c6fb23432356efdc0ac728e1dee25fe2"],["/2016/01/2016-stepping-further/index.html","b00b86fb3d8faf1392c85094d30fa6f0"],["/2016/01/Android-Study-1-22/index.html","c5fde6550c9b4a9394bd7380ee90aba9"],["/2016/03/2016-03-20/index.html","77f5ebaca4e77b649c4832f3988d42df"],["/2016/03/GSC-535/index.html","ee5d37bbd23249bc7294d053f006f88c"],["/2016/03/gulpjs-1/index.html","74f105a38b825cf21e9b0ef1946078ac"],["/2016/03/hexo-theme-paper-white/index.html","98483e226a25c4dcfae037209155881f"],["/2016/04/2016-04-19/index.html","225c431e2cb13d3194fdd5cc95795d97"],["/2016/06/2016-06-16/index.html","05dca5c58fa28a030380e197be6f3a3c"],["/2016/09/2016-09-18/index.html","1beb0d6da10a2591b1a06c6c22651a51"],["/2016/10/2016-10-27/index.html","9dfc82e8030a1690fc7e8ccd29c97e59"],["/2016/12/config-switchresx-and-2khidpi/index.html","8a6f6b6253be534891b16083251f2c37"],["/2016/12/improve-duoshuo/index.html","646967cb059767694bb6ed2d72ac9d6a"],["/2016/12/use-travis-ci-your-blog/index.html","ae189a16dcef146d4ac79d6056f93893"],["/2017/01/2017-iyahoi/index.html","285a8648019bfde4312e5ba4b625d6c1"],["/2017/01/webpack-amd/index.html","a18cae4d6db703212fd25177725e7fc6"],["/2017/04/kotobukiya-syaoran/index.html","3d5fcef82c6efde97d9df88b1039a2e8"],["/2017/04/macbook-and-surface/index.html","735734d2d5e64503b20beee63da6082c"],["/2017/04/uc-hyakuya-yuichiro/index.html","375c92b1dee8809024c573b0d33d1d30"],["/2017/06/noragami-seichijunrei/index.html","82c26df87fc068f641095a58e7fde85f"],["/2017/08/cross-compile-55-libev/index.html","386213c36f9b0bf58ca373619479b395"],["/2017/08/explore-service-worker-working-lifetime/index.html","769991f08a47b3ed30dea2ca6ca43231"],["/2017/08/kiminonawa-tokyo-seichijunrei/index.html","44f5cacc17586d0e1b8007bc4e413ac9"],["/2017/09/record-user-login-status-methods/index.html","893667fa106be37075f48d111c17e2ce"],["/2017/10/vue-typescript-early/index.html","96c00610f70f4cf0c876fb2047361487"],["/2018/04/2017-end/index.html","3149f2aaae122644b7d53b036d576106"],["/2018/04/twitter-account-activity-api/index.html","496a73d42af47db315422537106a83ac"],["/2018/05/buddy-complex-seichijunrei/index.html","c62bea69b2955593ad6500d1e7abc5f2"],["/2019/05/2019-05-16-record-jp-digital-TV-on-nas/index.html","7555da4a7febbfd78adc1a50281870ab"],["/2019/05/2019-05-17-google-io-tech/index.html","5f6656644d9d5c34d6b7e79517286a98"],["/2020/06/cls/index.html","a33c8a4fd6ee25de1a31609db3495791"],["/2020/06/try-serverless/index.html","a31f0954fbf1e3a5583c82ede14aa3a9"],["/2020/07/macos-node-require-path-case-insensitive/index.html","320561af4d6ac15f74e6d22c27704c19"],["/404.html","2a77f1bb7f5fe8292af5176e87582321"],["/about/index.html","e485081e70bd6fc2a86d759c5db980c2"],["/archives/2015/03/index.html","6166f01920b5c0f0f734c8a8842b4dce"],["/archives/2015/04/index.html","030d0a315d8a97141dc98aa7532328d8"],["/archives/2015/05/index.html","40905d0240b725a53a2b28e75e0062ba"],["/archives/2015/09/index.html","502b4b3bb36076cb4a8492bee3fccd99"],["/archives/2015/12/index.html","5e28c8718142a4ac894bc88e2fa596d6"],["/archives/2015/index.html","c04b8bdb6e2a9cb0e1802adbfc02fce3"],["/archives/2015/page/2/index.html","2c2e07f35d454ae6d9b9ad631eb7d5f4"],["/archives/2015/page/3/index.html","1900f723ef36279c29cdcc29c7c32fe8"],["/archives/2016/01/index.html","4e86960fbf61658e441833f4f1841498"],["/archives/2016/03/index.html","97ad3e3c864e8f851b9902807fee3e97"],["/archives/2016/04/index.html","58a07393e5f19e4220871576650545cb"],["/archives/2016/06/index.html","7164fbf3964fb15c20422e0f8d4e5d3a"],["/archives/2016/09/index.html","75d7705d345ea21a4b3212e6018cf2bd"],["/archives/2016/10/index.html","91382cd8b789f374ed62aca8f589f5b2"],["/archives/2016/12/index.html","23e9ac98203ddc7aaf2185d86e5aea90"],["/archives/2016/index.html","cfcf4019568734a5afbc62f8e6b86f33"],["/archives/2016/page/2/index.html","dafdcadf824ca022214ee58dbbd97165"],["/archives/2017/01/index.html","bd5d6855a00b002cfab22dbc8d4cee5e"],["/archives/2017/04/index.html","faa707d2626ac41dd4020ed4c199b57c"],["/archives/2017/06/index.html","ffe230efa688469bdb1efdbe7b91d9dd"],["/archives/2017/08/index.html","bc84b27a7773a2caaf8a1b37a7ef8ea9"],["/archives/2017/09/index.html","b493eb12fbe669f7d3ec3fbba8937ee5"],["/archives/2017/10/index.html","f3be290b0307f3457fece0bb2f315802"],["/archives/2017/index.html","7dbbbdb2a3c37bc7ba9ec6546b980b79"],["/archives/2017/page/2/index.html","07dfd2c887fcaafb4ce179079b4d5c33"],["/archives/2018/04/index.html","2c0f8d6f12d6d0d3f28e2f25f76976d8"],["/archives/2018/05/index.html","b6cc5402d8ebbb5cdea46b6f910175eb"],["/archives/2018/index.html","c8c9213a95bcb14dc7234ea959ce8fd8"],["/archives/2019/05/index.html","a879e0243cccbf6f9ab39ffce4322989"],["/archives/2019/index.html","9d465d0dee7cf4d84761153dba67f978"],["/archives/2020/06/index.html","055ad33ef29b573d00f4cc7195b4c7fd"],["/archives/2020/07/index.html","857e5d8c8befaa81fdbf569c3515e50b"],["/archives/2020/index.html","289ba8562d2a5be28668dae0c39c9763"],["/archives/index.html","75c4684b9bab258be886947b557a2af4"],["/archives/page/2/index.html","d16547014029f0fd631983cd07a5311a"],["/archives/page/3/index.html","91a3f042085487b9d58c74003af378c3"],["/archives/page/4/index.html","3309176fdb6c7ad1dd342da5f0acce2d"],["/archives/page/5/index.html","dc69b07deaf27853246aa32157ccf6c3"],["/archives/page/6/index.html","8f878c12494b4c6f807a093dc87f345e"],["/assets/images/about-me.png","a066d06c3d9d1fe56c4d921cec7febf3"],["/baidu_verify_YbTSlpWIUJ.html","779049c3a50695ceb3a388ce1e8bc1b9"],["/categories/ACG/Music/index.html","d9c01c1ccadf7db1f00576b3522e33ce"],["/categories/ACG/Music/self-copy/index.html","eee45f01841bd938c736841606079b5c"],["/categories/ACG/Travel/index.html","97c723c0420d358f5759c58182da012c"],["/categories/ACG/figures/index.html","32b6af1517d95c61d2a236fb04483106"],["/categories/ACG/index.html","3a0386bba2697de602c32ff63cc00520"],["/categories/dev/Front-End-Dev/index.html","50750a88414f75f1726a4c390f38f8e8"],["/categories/dev/Front-End-Dev/page/2/index.html","9c9fc2d7c9bfafc6f6cffbf977df571f"],["/categories/dev/HTML-CSS/index.html","123f82d2b1452885a2e7bd6d0d9e5f0e"],["/categories/dev/android/index.html","91a292d16504898ce48d06bf76974ae2"],["/categories/dev/cpp/index.html","4a9e65ecaff98156bcc829fc9c12bf7c"],["/categories/dev/git/index.html","bec31fec2df2d47d6899fa613a090b69"],["/categories/dev/index.html","680d2d59376a4654ba1a4529af50d573"],["/categories/dev/java/index.html","3a126cd2f9884da13fbd2d0164562279"],["/categories/dev/page/2/index.html","218e57390b3aca0b35d484e8d5aa93dd"],["/categories/dev/page/3/index.html","aab3e6493a5816ba976d9d45e458a871"],["/categories/maintaince/blog-setup/index.html","109d31cdd63e17d9554e0868b1e6deb7"],["/categories/maintaince/index.html","1dde5cd86769e5a8ab631615eb21aeee"],["/categories/maintaince/macbook/index.html","99833f3f5d93e54e67f35a5010dba5f4"],["/categories/maintaince/router-config/index.html","259698d440d0d6b3c95a6486a42938a6"],["/categories/notes/index.html","027473e859abb8b53a0e7e0e7475efe8"],["/categories/tricks/android/index.html","b4cf5677832cb532f0eee4712e2fd822"],["/categories/tricks/index.html","76365699208084417af2d84c8a249394"],["/categories/uncategorized/index.html","348e0b1635aadd9473025fcd70878ca7"],["/categories/works/Front-End-Dev/index.html","a3e7d2fe7cc8906bdaf1421cf3eea7c1"],["/categories/works/csharp-wpf/index.html","39cc34f8fa69ba27aa7e298edc0ef100"],["/categories/works/index.html","0d9d8593ed12525fcc4020d6d4a31c4f"],["/css/seichi.css","c60ad00990790aacbe0a9ff08766c515"],["/css/style.css","e3abc56736917946e8536ef38cc2c5cd"],["/google311213f0c8d812a9.html","51f1ee3c2f13a21a1a40b3dae4954454"],["/img/coderwall.png","1976fe70f1ee8ed243e0975402e06a2d"],["/img/delicious.png","952d9b54d8bcfe7b998f67ff48c4dbce"],["/img/douban.png","d42a163f932100e621d22732db34ecdb"],["/img/facebook.png","4bd685f6c9fdaccabf07bdd52173facb"],["/img/github.png","3c4b6267a1a3fedebdc7d089610ecfe7"],["/img/google.png","c385f5304465716b2d6c9ada94c657ab"],["/img/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["/img/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["/img/linkedin.png","4c72c4896f3c23f736cb1ad08f0c866e"],["/img/mail.png","38a7b8302dac028bf03b22d228938abf"],["/img/pinboard.png","9b6186cb97adbe50311f94e50f2392cf"],["/img/pinterest.png","e1b8e655d1b99b40ebcbd96977ae234e"],["/img/rss.png","ec8cf9b5a98011aa75cc0a4f25024dc9"],["/img/scrollbar_arrow.png","be5381cedbd6b778b1d92e224fd71cf7"],["/img/stackoverflow.png","039128ececb47b33bccedd98dc9fc809"],["/img/twitter.png","d2289a4936fefa41d9f92cf89939be5b"],["/img/weibo.png","b382032b316ee38c6d537fe9d36ae54c"],["/img/zhihu.png","e6352c0e1957beef3009268ae747c3aa"],["/index.html","de3f6963c722479c36107e03509c1ff8"],["/ja/2015/03/WNDR4300-setup-log/index.html","5f97c3f939d70ecc64aee0d2bb351e51"],["/ja/2015/03/android-hostname-change/index.html","e920d890313f3bddf3cfc4a12d26c319"],["/ja/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","513723446f417e4f7212531c5c13fdbb"],["/ja/2015/04/android-chrome-issues-with-webpage/index.html","656fd344c4ddfc1ddb2614189c65350e"],["/ja/2015/04/cpp-study-log/index.html","94422620092f5e0a143d767b580d5ea4"],["/ja/2015/04/github-pages-ssl/index.html","25690a63726c26b14c69239c47bcc01b"],["/ja/2015/04/hello-world/index.html","5bf339f4c71c6f02a7dab4eac6d67efd"],["/ja/2015/04/hexo-setup-log/index.html","a428cb927996c060c8df07965e4dab26"],["/ja/2015/04/self-copy-cd-inazuma-1-html/index.html","0164eb1a5d3e3e91c7bda233ad5aeb62"],["/ja/2015/05/cpp-inherit/index.html","052955d1d868020751fd2e6ac61e6baa"],["/ja/2015/05/cpp-polymorphism/index.html","0d1c7724014d5a300b363b03173d9621"],["/ja/2015/09/android-root-ota/index.html","9ece8447210b0d36341d57443599f298"],["/ja/2015/09/java-learningNotes-1/index.html","dc7c628d0d6d481b8dee2e95062f6bfe"],["/ja/2015/09/newblog-newlife-2015/index.html","11e17770a7866eccc9729013adcd3d02"],["/ja/2015/09/router-rebuild-2015/index.html","96e824a1bfcc7363c0a40486b3be8c36"],["/ja/2015/12/2015-12-21/index.html","c87f7dc2bf3aad7b5e6ffc199d36b308"],["/ja/2015/12/PixInTouch/index.html","8493b4e6de4bcfea6bf5a263f45086de"],["/ja/2015/12/git-study-1/index.html","e5187c5663fffdc22d2974efe8792e89"],["/ja/2015/12/hexo-backup-and-migrate/index.html","6b5f43feb882b31e8baf552d34dd6730"],["/ja/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","273f2cce98e5db9dfc90ca1116936101"],["/ja/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","19eda55efee16528827637aae7eb022d"],["/ja/2015/12/router-reconfig-2015/index.html","cc1147457e83bc01d3f9d9d4d68b15f8"],["/ja/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","31729a698683380347ba1ae1312c3568"],["/ja/2016/01/2016-stepping-further/index.html","1e8528a8d44cfaeef0138abd7268e04e"],["/ja/2016/01/Android-Study-1-22/index.html","3865581d29c5e47aeea120909d65b81f"],["/ja/2016/03/2016-03-20/index.html","9e83f89b90939c0198353479bbb1a01d"],["/ja/2016/03/GSC-535/index.html","289b93dcde6dedc863bfe7673dc0004f"],["/ja/2016/03/gulpjs-1/index.html","d38d8467fdfc8e88e40d1622238891e2"],["/ja/2016/03/hexo-theme-paper-white/index.html","a1b5649bb3a056508e58e299e7de0a7f"],["/ja/2016/04/2016-04-19/index.html","e1da28b536026ad2e70555b55015fcfb"],["/ja/2016/06/2016-06-16/index.html","7108533e17e055ef64a1fb512910cef8"],["/ja/2016/09/2016-09-18/index.html","078ce329114e29673efa75a954e66cfe"],["/ja/2016/10/2016-10-27/index.html","ebe97f2c2360de61c5f9224707ce38de"],["/ja/2016/12/config-switchresx-and-2khidpi/index.html","8b031fc2c875ee83de9a14e461dd0cba"],["/ja/2016/12/improve-duoshuo/index.html","2e5823ceafbc51c50008d04f95f94f9b"],["/ja/2016/12/use-travis-ci-your-blog/index.html","cfb77f6df54451a0276d00811a27833d"],["/ja/2017/01/2017-iyahoi/index.html","4796d22d3e836d5a448ee66343eab9b1"],["/ja/2017/01/webpack-amd/index.html","cf8b47f1496756cd2ec09b93a9eb8308"],["/ja/2017/04/kotobukiya-syaoran/index.html","040f1d99f7daae69a224d8f643d30846"],["/ja/2017/04/macbook-and-surface/index.html","4e732dcf310e426fac676514eb33dc6d"],["/ja/2017/04/uc-hyakuya-yuichiro/index.html","33712ad450f9ef4c43656ac04c9debe1"],["/ja/2017/06/noragami-seichijunrei/index.html","812a5f71b0af0d8a7001159a13cf2d26"],["/ja/2017/08/cross-compile-55-libev/index.html","1bc1c684c1d6d176a707327f1126e5ee"],["/ja/2017/08/explore-service-worker-working-lifetime/index.html","4aa5bd8c358df6159dad882f6a5717e6"],["/ja/2017/08/hello-jp-world/index.html","4d9dc7dd22c96c323e5f4a2340e6962c"],["/ja/2017/08/kiminonawa-tokyo-seichijunrei/index.html","eb2a199d9a32f457a1405b0c5da70fd7"],["/ja/2017/09/record-user-login-status-methods/index.html","c6cab5bba89c2c2b55573a0131c3b8fa"],["/ja/2017/10/vue-typescript-early/index.html","d479e27ae9f3587baea40d36de19131c"],["/ja/2018/04/2017-end/index.html","1b3de3c358f0a176172b6abe8992b897"],["/ja/2018/04/twitter-account-activity-api/index.html","7bb3b4a9d1465edfd9281261fd6946a6"],["/ja/2018/05/buddy-complex-seichijunrei/index.html","927d99c47ccb024f66f333c76b865530"],["/ja/2019/05/2019-05-16-record-jp-digital-TV-on-nas/index.html","234cc24148e846187bdf4d09fe1fe32f"],["/ja/2019/05/2019-05-17-google-io-tech/index.html","10bece848cb4b05d080fabf2979cb79f"],["/ja/2020/06/cls/index.html","94388d00adbcbd3d6477ebc1383b5046"],["/ja/2020/06/try-serverless/index.html","f6718d202eeafdcd0197c0bf00f88e69"],["/ja/2020/07/macos-node-require-path-case-insensitive/index.html","4085a68f16e7df0b8531264a1d011d65"],["/ja/404.html","fe22db8e5912aeb7d5b5d55019fcb0ce"],["/ja/about/index.html","0d683e6313dd814caca6169f7d1e918d"],["/ja/archives/2017/08/index.html","07469f2fa3a720d168832db9a53dcbd6"],["/ja/archives/2017/09/index.html","5a93ed6d456a61882d454a7b3ca4a265"],["/ja/archives/2017/10/index.html","521383c8aae38a32dc97021abc03fe8f"],["/ja/archives/2017/index.html","87ef40ee0ecf1ad3d966d8ccbe38dc14"],["/ja/archives/2018/04/index.html","a7405419b9790b6f72c2a1641518302e"],["/ja/archives/2018/05/index.html","87b13e156ef684b28e9b2e422ae97871"],["/ja/archives/2018/index.html","9b4983fb0de3005ac905e7f529add5bf"],["/ja/archives/2019/05/index.html","222f2d04a42c8a3bddeb01ff76fb05d8"],["/ja/archives/2019/index.html","b472ff8b44b94091d3f5fac0a2e3f6c9"],["/ja/archives/2020/06/index.html","d6b2603525d315141af582f457863fb2"],["/ja/archives/2020/07/index.html","bec0d9b7ed7f539c5b43911728ec6d9c"],["/ja/archives/2020/index.html","c7f39f2a3ce3bad7c828466a1b695ee5"],["/ja/archives/index.html","d1720c6839c30d5daaf9e3609472c71c"],["/ja/categories/ACG/Travel/index.html","2d3bf4fdb6289e3b61860484a0dc75f2"],["/ja/categories/ACG/index.html","ba4f84d89db1c04e13f1e8369542743a"],["/ja/categories/dev/Front-End-Dev/index.html","53e39a452ad64c9efe65119e0603c5ef"],["/ja/categories/dev/index.html","b258b9f04f9328b67973b996cd5f7572"],["/ja/categories/uncategorized/index.html","a7707fc80e2049e3e8302fa6e5183c0b"],["/ja/index.html","5df575fe1cecf82bc884e6b013b3388e"],["/ja/nihongo-test-page/index.html","541495ff751d403711c68c6f3c068a2f"],["/ja/resume/en/index.html","1c7f3f8dfe7b9fb876de9195e99b4af1"],["/ja/resume/index.html","0f2aeeef624c3c24cf96c845d22870e5"],["/ja/resume/ja/index.html","d37b37055f9cd485a93f31039350e7ac"],["/js/instagram.js","7d7a9e2e7286ba2d5b6d12068214f0c3"],["/js/jquery.lazyload.js","28c23bc40080d31144776e9a8736837f"],["/js/main.js","2e92f29b0cd90bddc062915eb46a858c"],["/js/mobile.js","20029df2609ddd5d2b2d346edbb297c0"],["/js/nextpageajax.js","c3bde8d7bb1f967fb319f57a187ea51a"],["/js/pc.js","631b535186aab0e262485ee2bf9da628"],["/js/ripple-effects.js","b9c11903da0ef5c3d790b41369c3137e"],["/js/share.js","de52ac3d43e43c1951a08b0804458a8e"],["/js/totop.js","661822968b58fd439f46bd54031238d6"],["/keep_origin/affiliate_jump.html","71bf6d72c5d080ec2b3f8ecfae3d71ed"],["/nihongo-test-page/index.html","f64853256d46328cfd378baf6ba414dc"],["/page/2/index.html","4fffe6fca6418162fdf8dfe1804852f0"],["/page/3/index.html","42c374fe333b4ad65fe50385e66ad77f"],["/page/4/index.html","74fd81c583e03cb43a5419b0c9428cdb"],["/page/5/index.html","58815c8c9b04421718fbe6d81b12dc82"],["/page/6/index.html","e5c654298557309c51d7ef7426eafb41"],["/page/7/index.html","ee8dd3f82dacfd1e07ddefa6842a826e"],["/photoswipe/default-skin/default-skin.css","426e8908d7426603ca203b6d16281b1e"],["/photoswipe/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photoswipe/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photoswipe/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photoswipe/photoswipe-ui-default.js","0c9196aa8943ce8a8045c9f4cc62915c"],["/photoswipe/photoswipe-ui-default.min.js","9517baca43cd4e9cb23ff337fbc1baa1"],["/photoswipe/photoswipe.css","7dc0df107159e1be66d4464171561e5b"],["/photoswipe/photoswipe.js","a8d26ff34943c859884acbd6b2531315"],["/photoswipe/photoswipe.min.js","f5cd6479c4e4682545a9603e6b50c741"],["/resume/en/index.html","3c96ae7f26bd728204939f44f77fe801"],["/resume/index.html","364b3bb5e513be74b1cac8ae2490ea2b"],["/resume/ja/index.html","fd30d23c191ba0c1a1f2f234c70c42b3"],["/setup-log/blog-setup/github-pages-ssl.html","d5e315a4f7725d0c5a828ab2ac48dfe3"],["/sw-register.js","2ab6a96de2ab22905b186d6599f07e44"],["/zh-cn/archives/2015/03/index.html","b1fc746d547bd74246a273115eb3531e"],["/zh-cn/archives/2015/04/index.html","893e402a0e8dfd848e33b97ee0c85831"],["/zh-cn/archives/2015/05/index.html","0ba7e3486a10ad913a8698be3a27506e"],["/zh-cn/archives/2015/09/index.html","a98495f273b84fd21bcf78b7a26b3ad0"],["/zh-cn/archives/2015/12/index.html","2db9ec995159a5607209b93ce3a3f956"],["/zh-cn/archives/2015/index.html","d5fe62ad2e0b40b8f357b257ad1fcb04"],["/zh-cn/archives/2015/page/2/index.html","3a9afbad70f1b487f4c65d31a681326f"],["/zh-cn/archives/2015/page/3/index.html","ca66190e15af9f9ea1747161288b8519"],["/zh-cn/archives/2016/01/index.html","45d1ce2cb9596322626663d6fe16dcca"],["/zh-cn/archives/2016/03/index.html","61bfc2518953c5f868dc368dbb932b9d"],["/zh-cn/archives/2016/04/index.html","151886b10355df9ca842278ff1d93556"],["/zh-cn/archives/2016/06/index.html","9cdba658dcc50019f3120b280f68716e"],["/zh-cn/archives/2016/09/index.html","a00faa10572b7c7d3aa8eddfdcf5a39b"],["/zh-cn/archives/2016/10/index.html","c792a9f3e0e9654bf918904607d376e6"],["/zh-cn/archives/2016/12/index.html","622a37ccb1b85c10f38ac8b85ccfada7"],["/zh-cn/archives/2016/index.html","c077aa98403ec96114eeaa6d16c83729"],["/zh-cn/archives/2016/page/2/index.html","7f42546b444a56fb31f1845da9f89128"],["/zh-cn/archives/2017/01/index.html","97b81a45abeac6627e631e4c49c95f22"],["/zh-cn/archives/2017/04/index.html","acd68d66fa82f571e11a2e080d2180bc"],["/zh-cn/archives/2017/06/index.html","564f9e69d7c9bacbdb30c2cacbda6706"],["/zh-cn/archives/2017/08/index.html","34979daf16c9baf59bc7470fa7ff5048"],["/zh-cn/archives/2017/09/index.html","61ca35a7be8a956be98adc8f7357838a"],["/zh-cn/archives/2017/10/index.html","942d42bdfcf6cc5377a9358e5cbb21d6"],["/zh-cn/archives/2017/index.html","b4b481881aad9a8b34e4f3d314779142"],["/zh-cn/archives/2017/page/2/index.html","a73e73312d1e30a911c7a0cd9d4c98ca"],["/zh-cn/archives/2018/04/index.html","33a17506a24cc2c85f197ea5899c30e8"],["/zh-cn/archives/2018/05/index.html","1a898086251240c272c627f451f7864d"],["/zh-cn/archives/2018/index.html","cdbf911bb7e8192b6637c028d184e5d0"],["/zh-cn/archives/2019/05/index.html","f4f1a1bafc70052f400ffa9c1c70834f"],["/zh-cn/archives/2019/index.html","f76eb68996c1a3e6d50612aa965100e3"],["/zh-cn/archives/2020/06/index.html","ad4a8ddf775df7644a3c3bef8c77404c"],["/zh-cn/archives/2020/07/index.html","9c2e74299017e3c4ed7914901eeed783"],["/zh-cn/archives/2020/index.html","06e0af0eb2d21579fadaefdd431e239b"],["/zh-cn/archives/index.html","75ccc6e221b02a0626a655f0b73899f2"],["/zh-cn/archives/page/2/index.html","13ec2641eb3dca6d0abf709bf9ca6bd9"],["/zh-cn/archives/page/3/index.html","ef295a5e4f467d2b39cc5c3d711192f3"],["/zh-cn/archives/page/4/index.html","bd2839aa856efa7ca6dc20b390f3fccb"],["/zh-cn/archives/page/5/index.html","71dd9a2b2a468c7cddb99b2751ba6daf"],["/zh-cn/archives/page/6/index.html","01dc19b22aa22896011d403fcf67ef8b"],["/zh-cn/categories/ACG/Music/index.html","7da9f94668400a2deaa056001eceb3c0"],["/zh-cn/categories/ACG/Music/self-copy/index.html","03785366f019bdd651a6390afed11925"],["/zh-cn/categories/ACG/Travel/index.html","290f5c9161cc7b7aeff3f2f3b5426d0d"],["/zh-cn/categories/ACG/figures/index.html","b7ad847ed824b607a6eaa8cbb1ed7731"],["/zh-cn/categories/ACG/index.html","3f397e72e6e934412b0fb36894d035d3"],["/zh-cn/categories/dev/Front-End-Dev/index.html","95eb690601fc1edb7f0937c97d186204"],["/zh-cn/categories/dev/Front-End-Dev/page/2/index.html","2ca7ded963e8f5de3e116dfebd2a917e"],["/zh-cn/categories/dev/HTML-CSS/index.html","4991cb6c02d7012b5d8cfd04e31ba839"],["/zh-cn/categories/dev/android/index.html","2cbb501e8e3593b5737453136008c730"],["/zh-cn/categories/dev/cpp/index.html","0ac871353500d832fae2bb3483617672"],["/zh-cn/categories/dev/git/index.html","555b57fe61bc64d8e0edca2884a035fc"],["/zh-cn/categories/dev/index.html","60471609e5ba04eaaf4de3ea36cb1f98"],["/zh-cn/categories/dev/java/index.html","61677d722ac249b89aee484821667073"],["/zh-cn/categories/dev/page/2/index.html","24ba0f2ffc717eb34caa92f534167de1"],["/zh-cn/categories/dev/page/3/index.html","4791f8c4b61a4422d6af92c24142cfff"],["/zh-cn/categories/maintaince/blog-setup/index.html","e34886fb4b6d2a59679aaa1f65785d35"],["/zh-cn/categories/maintaince/index.html","c726b10b7c3dd5678e56118c77650aca"],["/zh-cn/categories/maintaince/macbook/index.html","a664ea7252d2e4b11ccd060b5affd4b3"],["/zh-cn/categories/maintaince/router-config/index.html","37ee6480a7e0848da75b7b079a43dab2"],["/zh-cn/categories/notes/index.html","40fac3c91d328ef9005b44171a962c79"],["/zh-cn/categories/tricks/android/index.html","a73cd05e44d5c6ea95797c8d9f27f586"],["/zh-cn/categories/tricks/index.html","ec6bb7033907270553c53367a6a123cb"],["/zh-cn/categories/uncategorized/index.html","0e8ad1553dcce9ef030ad39f3631e233"],["/zh-cn/categories/works/Front-End-Dev/index.html","fb800529a9a403a0eae3181c59695b20"],["/zh-cn/categories/works/csharp-wpf/index.html","fa9fc4d7b7bee56fa8346f9e6a2a6ae9"],["/zh-cn/categories/works/index.html","ee2e028d7f6c880fe0852459995d520e"],["/zh-cn/index.html","b366b963eda39178627f525ac358ea01"],["/zh-cn/page/2/index.html","18b0260c56ee7fe6c2a7987d0f49100c"],["/zh-cn/page/3/index.html","03d92c020f66cca7610d52ade47386c8"],["/zh-cn/page/4/index.html","d96184f431734676c5ba620d7061f06b"],["/zh-cn/page/5/index.html","804f284deebaac728c56a960e7f4adf7"],["/zh-cn/page/6/index.html","9d944840a292d8e78491018c16a2888e"]];
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
