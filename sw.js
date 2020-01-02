/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/03/WNDR4300-setup-log/index.html","f85afe4b2878414c07782d8cd23196e3"],["/2015/03/android-hostname-change/index.html","da1da218ca5bf8c841359b3e22425cc9"],["/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","0832632cc948407f6bcc9cad97eb878d"],["/2015/04/android-chrome-issues-with-webpage/index.html","d1957255bc9f2724bf1ff0bad06bb55a"],["/2015/04/cpp-study-log/index.html","1768d3e730336e0151a7e96a0347da33"],["/2015/04/github-pages-ssl/index.html","372b4578a8adb3a01d701494683bfd9b"],["/2015/04/hello-world/index.html","be0786622f2c2c03dd1b278bcee0270a"],["/2015/04/hexo-setup-log/index.html","7e04b0adc8dc5cd75402243b79aa4573"],["/2015/04/self-copy-cd-inazuma-1-html/index.html","a3a0abe1aacc0e4ecc2034cf9be9c21f"],["/2015/05/cpp-inherit/index.html","81ab8aaa1a1e9f052cc0603535e0e99a"],["/2015/05/cpp-polymorphism/index.html","9395ce02d2825980f133e2ffab4da496"],["/2015/09/android-root-ota/index.html","14a80621789e0c873522772f3f8be44b"],["/2015/09/java-learningNotes-1/index.html","e110a2a8003f077652c3878cc512c827"],["/2015/09/newblog-newlife-2015/index.html","b7f371b6348573ae7f66ea27695dfb67"],["/2015/09/router-rebuild-2015/index.html","e6b8c69517c3d525ad5617e177b013d8"],["/2015/12/2015-12-21/index.html","10f595df30c72aefe3aeb40347c7ad5b"],["/2015/12/PixInTouch/index.html","1fa034cca60675268ebca7a852717977"],["/2015/12/git-study-1/index.html","de8eed215d5245e1d130007f031d1d96"],["/2015/12/hexo-backup-and-migrate/index.html","e1c0983bd3328e902f25ab5b9dc725dd"],["/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","951c08d533de4a6b564705e197f55e4d"],["/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","94b34c7a25e93369c67bb062c62e9d6e"],["/2015/12/router-reconfig-2015/index.html","ca2eb77d13b371dafbe10234d05e6713"],["/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","ba4925c8594cd976ebba21abb1552e39"],["/2016/01/2016-stepping-further/index.html","06930c6db68912b5e8884d9633180f58"],["/2016/01/Android-Study-1-22/index.html","774f463f0e00df211ad90cd396a5fdb0"],["/2016/03/2016-03-20/index.html","e785f8f74747043a29800d914f351864"],["/2016/03/GSC-535/index.html","d7ebea67e27fee26a1cc42eed26fbfe0"],["/2016/03/gulpjs-1/index.html","e15e6bba19b524dbb44d26000ffdc153"],["/2016/03/hexo-theme-paper-white/index.html","778120bfd2789a9f34dd3d12cc03c2d7"],["/2016/04/2016-04-19/index.html","880883e011af5009725369b92c575ad8"],["/2016/06/2016-06-16/index.html","33d294c57f3c6f63874389a86ac1325a"],["/2016/09/2016-09-18/index.html","4dc352ee07fc27c3e449047c4db4e7b7"],["/2016/10/2016-10-27/index.html","ec23362311ddc8c0b2c8bda8d06a7b50"],["/2016/12/config-switchresx-and-2khidpi/index.html","244e1764d86d5c89679f686ef5d3d2b2"],["/2016/12/improve-duoshuo/index.html","d5f7513db89b3b99761ace8befbf1e73"],["/2016/12/use-travis-ci-your-blog/index.html","98907cf9ac4c81aaab9efb386f894e13"],["/2017/01/2017-iyahoi/index.html","f684e98612c251f03648c2a5afacf485"],["/2017/01/webpack-amd/index.html","de43f276e9c23874fa7e1a0d743c5abc"],["/2017/04/kotobukiya-syaoran/index.html","a82917531f4a501a1c5638bfe953ebb5"],["/2017/04/macbook-and-surface/index.html","ec730709d44caa05d20152a18ac6d79f"],["/2017/04/uc-hyakuya-yuichiro/index.html","8bf939b7d7f346f837b1474585fe0214"],["/2017/06/noragami-seichijunrei/index.html","530326a37c7db493983a40eda16b1a09"],["/2017/08/cross-compile-55-libev/index.html","057d6393301649fd84f2b56c812f4032"],["/2017/08/explore-service-worker-working-lifetime/index.html","59067c58507aaa25a155716213b5fa1e"],["/2017/08/kiminonawa-tokyo-seichijunrei/index.html","485bb2b2c004ee5941a95fb3556157b5"],["/2017/09/record-user-login-status-methods/index.html","a057a7230046445e3bfe5b96ee3622f2"],["/2017/10/vue-typescript-early/index.html","8da4d40c4f997be123101a9bafbd878e"],["/2018/04/2017-end/index.html","427b213eed7feaa404d04cc37aaf8da4"],["/2018/04/twitter-account-activity-api/index.html","795b0464d748d753eb86211fb7186f76"],["/2018/05/buddy-complex-seichijunrei/index.html","9c9c47b161eb4a2b415db896ad9f8baa"],["/2019/05/2019-05-16-record-jp-digital-TV-on-nas/index.html","b4d4dd700981ec67c443fa90351aac27"],["/2019/05/2019-05-17-google-io-tech/index.html","8d275326743afc6eba6c277d88ba0937"],["/404.html","f58183777fff06d9d41fd3886fda05c9"],["/about/index.html","ecea72cc7da3d36a62ada72bdac9bba5"],["/archives/2015/03/index.html","b94832a42a5aaaf647d110f56504cf8e"],["/archives/2015/04/index.html","02be6e49506a59a50bd8f8b7d7b95c23"],["/archives/2015/05/index.html","58714d08e20e4a1948341118b256256c"],["/archives/2015/09/index.html","fc3e252a2ecb8e694803117d8cc3089e"],["/archives/2015/12/index.html","12faac59a01c03632f6ece7c00200c7d"],["/archives/2015/index.html","1e905eb0fa7c81ffe2ccbad362521e4b"],["/archives/2015/page/2/index.html","6b5104e271dab69d26335cc1cfeb1f2c"],["/archives/2015/page/3/index.html","fa3e1da676c42b2ffee26f7e5ae2dca2"],["/archives/2016/01/index.html","8d62a52f09a9a93fca42c26285105a84"],["/archives/2016/03/index.html","c083944efed3167ab82fa28f6cd2d8ca"],["/archives/2016/04/index.html","c2112fdb1f276e21c9b685ff05e6276c"],["/archives/2016/06/index.html","6a767a1993cff26a4360c600f6906765"],["/archives/2016/09/index.html","b01acc3779502803e0a52dfc8ef01384"],["/archives/2016/10/index.html","8eb15e8c662fed330be7066d4b92fb2f"],["/archives/2016/12/index.html","6a0fa0bac6534807b57c9d9100eae44a"],["/archives/2016/index.html","e1c088275d099d1e748d81de5c4b4ab9"],["/archives/2016/page/2/index.html","226ac92ec90c0d44deed2a0c3848f1c6"],["/archives/2017/01/index.html","0cfb6b4bc633e90d3544e491c1c0607f"],["/archives/2017/04/index.html","398dd9fda1143dd6010ee966b669d88f"],["/archives/2017/06/index.html","33bd4afa1072f5329ef6f51263d71c11"],["/archives/2017/08/index.html","787e4e0ec8b7f8df771669c819553b87"],["/archives/2017/09/index.html","56f9c084a01ac67ef72a9f2edd0afb3c"],["/archives/2017/10/index.html","5d2453d904ab67336d9b0b9249ca9196"],["/archives/2017/index.html","4a2e33d7c796f2216cfd79517c14f98f"],["/archives/2017/page/2/index.html","5120a284f1db58c38bc8246f6446a5ea"],["/archives/2018/04/index.html","774aec1d9ef71622fb237b26b209432c"],["/archives/2018/05/index.html","edf59b39572279fcc76a99ecf31b801b"],["/archives/2018/index.html","8107d5455a6a9f826805fa26963bb2ab"],["/archives/2019/05/index.html","fc50cf02e596b8a70b6f0c308a1cc899"],["/archives/2019/index.html","b7e2793ed67ee4a74ffb5e2e636357c5"],["/archives/index.html","81b698ef08f1390b8035081019191a74"],["/archives/page/2/index.html","47492521c7bd6360b67ec31cbd5c0178"],["/archives/page/3/index.html","9a41dc51010eb1cdcb38b4bf90b2f2b4"],["/archives/page/4/index.html","75e98982fc85276e89076f57e0c084f3"],["/archives/page/5/index.html","2d943e073a0e259e0d5b8287ac8c4b75"],["/archives/page/6/index.html","c72eb007c7e7566224fec5fadfa2516d"],["/assets/images/about-me.png","a066d06c3d9d1fe56c4d921cec7febf3"],["/baidu_verify_YbTSlpWIUJ.html","779049c3a50695ceb3a388ce1e8bc1b9"],["/categories/ACG/Music/index.html","b8a3d6d49736dd6feacc46fc7631f74c"],["/categories/ACG/Music/self-copy/index.html","90e344323abcf142353767dd9ad03b44"],["/categories/ACG/Travel/index.html","e491b10b540e4904a37f21be7b6c8ab8"],["/categories/ACG/figures/index.html","e808cfc96d73a39d5797f7762ae49f8a"],["/categories/ACG/index.html","8388ac64c0de0ef65b8613a215ce49e2"],["/categories/dev/Front-End-Dev/index.html","7162935776846da63af58b6ebd368840"],["/categories/dev/HTML-CSS/index.html","cbb1807b1f23e05850e8f1f15498a382"],["/categories/dev/android/index.html","8c0cff2a9c1f6fa96b630d5faab3d67f"],["/categories/dev/cpp/index.html","3b5df82a30c45f8159a0cf30206b55e1"],["/categories/dev/git/index.html","24354f3166454838ec5f2f456c077f2c"],["/categories/dev/index.html","341375da7b173dbac45bb54eb504aece"],["/categories/dev/java/index.html","a1500878467b835e675ade0502d56789"],["/categories/dev/page/2/index.html","2cff1c5086380f414b462c0ebfb9a697"],["/categories/maintaince/blog-setup/index.html","c2aca4eb5c43a37730bffc8e593d5a4f"],["/categories/maintaince/index.html","50f1a066714153a4cfb910dfc7b09c1d"],["/categories/maintaince/macbook/index.html","c0283e0121032d10eb466c044c26f848"],["/categories/maintaince/router-config/index.html","a72592139d59b9585280e66ebc8f66e5"],["/categories/notes/index.html","aa538c3e589b1a37c13103fccab76d92"],["/categories/tricks/android/index.html","6f866c7ffee758de474c5e2ebf670369"],["/categories/tricks/index.html","d5f447d8b1dfd1358ffaf1867d015c1d"],["/categories/uncategorized/index.html","630d47aee5beacdc972c1da5d8b101b0"],["/categories/works/Front-End-Dev/index.html","75252197245ee5c80898cfad15a4a99f"],["/categories/works/csharp-wpf/index.html","16c251b2fafcde13a53b32681388d168"],["/categories/works/index.html","94710df730c61dc6a6b9cdc45c52adb3"],["/css/seichi.css","c60ad00990790aacbe0a9ff08766c515"],["/css/style.css","6099feab8ef3bf865b627caf502ddbbc"],["/google311213f0c8d812a9.html","51f1ee3c2f13a21a1a40b3dae4954454"],["/img/coderwall.png","1976fe70f1ee8ed243e0975402e06a2d"],["/img/delicious.png","952d9b54d8bcfe7b998f67ff48c4dbce"],["/img/douban.png","d42a163f932100e621d22732db34ecdb"],["/img/facebook.png","4bd685f6c9fdaccabf07bdd52173facb"],["/img/github.png","3c4b6267a1a3fedebdc7d089610ecfe7"],["/img/google.png","c385f5304465716b2d6c9ada94c657ab"],["/img/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["/img/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["/img/linkedin.png","4c72c4896f3c23f736cb1ad08f0c866e"],["/img/mail.png","38a7b8302dac028bf03b22d228938abf"],["/img/pinboard.png","9b6186cb97adbe50311f94e50f2392cf"],["/img/pinterest.png","e1b8e655d1b99b40ebcbd96977ae234e"],["/img/rss.png","ec8cf9b5a98011aa75cc0a4f25024dc9"],["/img/scrollbar_arrow.png","be5381cedbd6b778b1d92e224fd71cf7"],["/img/stackoverflow.png","039128ececb47b33bccedd98dc9fc809"],["/img/twitter.png","d2289a4936fefa41d9f92cf89939be5b"],["/img/weibo.png","b382032b316ee38c6d537fe9d36ae54c"],["/img/zhihu.png","e6352c0e1957beef3009268ae747c3aa"],["/index.html","1727a30cd512e93574dc6a23c0b7f63b"],["/ja/2015/03/WNDR4300-setup-log/index.html","a178cf95265f8b2948aceabc851195d3"],["/ja/2015/03/android-hostname-change/index.html","c944cd8fb02a918670041506b48ae201"],["/ja/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","c8d4d6e7d8142a8157a1842bb9bd9114"],["/ja/2015/04/android-chrome-issues-with-webpage/index.html","52ca50a27f653397d1eb1521ec169e61"],["/ja/2015/04/cpp-study-log/index.html","9ef52a85db97f3793d877020270b029c"],["/ja/2015/04/github-pages-ssl/index.html","5c57a747b2f8b35c68e5da07a28d4919"],["/ja/2015/04/hello-world/index.html","6dbb0158dcd4c9f102ec11df2c9757b0"],["/ja/2015/04/hexo-setup-log/index.html","0ab2e0424cf4d1ee2d047edf1a1f2486"],["/ja/2015/04/self-copy-cd-inazuma-1-html/index.html","9e9063f3dab0b4295cf9e59f8c954056"],["/ja/2015/05/cpp-inherit/index.html","0291755458272b03881a329c096ff083"],["/ja/2015/05/cpp-polymorphism/index.html","b2818808d2db15936b651e8f2149cdf5"],["/ja/2015/09/android-root-ota/index.html","86d444665ee648e6baf9241e88c35c40"],["/ja/2015/09/java-learningNotes-1/index.html","97de4b2f4d8ad1e2c4925956780793b2"],["/ja/2015/09/newblog-newlife-2015/index.html","720856fa52a9f1260b0cfcf98ddf3bf6"],["/ja/2015/09/router-rebuild-2015/index.html","8cc5e61195cae5344dc6075aaf4c736c"],["/ja/2015/12/2015-12-21/index.html","ca2eba3de4bb8a94b698b007ef26d3e2"],["/ja/2015/12/PixInTouch/index.html","bc32ea1aeede1ec50a87bbac213912b2"],["/ja/2015/12/git-study-1/index.html","7e9b7fd24f68c353d1244d8e1b74233a"],["/ja/2015/12/hexo-backup-and-migrate/index.html","12dd7b0ca686cb4409a2566a0261d26d"],["/ja/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","45b0b7d05bfd35ada81712bfe0f83ba6"],["/ja/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","da456abcb1f2c490a42dd7a6e4eaf8ee"],["/ja/2015/12/router-reconfig-2015/index.html","948b580d336f2ee66e3ad1ca25e3bd72"],["/ja/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","9e47035708231e8c39d8202c49d98a86"],["/ja/2016/01/2016-stepping-further/index.html","42015911a4873516facb44212707d03a"],["/ja/2016/01/Android-Study-1-22/index.html","acc5e21b640d90d93603bb7a4bab81b2"],["/ja/2016/03/2016-03-20/index.html","b5d729013c69546ff178e1a4182fcd18"],["/ja/2016/03/GSC-535/index.html","1431b96c95bde8e7d970d8088fe32163"],["/ja/2016/03/gulpjs-1/index.html","ef558d4784495433985a6198bd0d0b5d"],["/ja/2016/03/hexo-theme-paper-white/index.html","451151960524c9e48a3a268f40a8badf"],["/ja/2016/04/2016-04-19/index.html","b919c3e21580dcb6af6525634769b808"],["/ja/2016/06/2016-06-16/index.html","5b5ccad7226da47ee65f3252f6b92fb8"],["/ja/2016/09/2016-09-18/index.html","b8695a564adb0dde12c9a31ee83e0f93"],["/ja/2016/10/2016-10-27/index.html","bfd4ed8ddcc47dad713c8e8df33c504e"],["/ja/2016/12/config-switchresx-and-2khidpi/index.html","2acde08a9a9ae8ad697438ba67ce12d4"],["/ja/2016/12/improve-duoshuo/index.html","23c8793dbb00d46b8d296c5b139057b2"],["/ja/2016/12/use-travis-ci-your-blog/index.html","3e14d91ed2d82840ba0be240e8b917ad"],["/ja/2017/01/2017-iyahoi/index.html","6dbc7a494bb42eec3c63f0009505e903"],["/ja/2017/01/webpack-amd/index.html","9c9e0a06346802679cf36c001b773e18"],["/ja/2017/04/kotobukiya-syaoran/index.html","3f05f470dda1f9f4ec61440a4b5455bb"],["/ja/2017/04/macbook-and-surface/index.html","247892c2c2186be8858fcf3a8595542b"],["/ja/2017/04/uc-hyakuya-yuichiro/index.html","e525afbdb8bf8cbb78136def88135f73"],["/ja/2017/06/noragami-seichijunrei/index.html","3dd1bd6c16d0861bd8aaf99426129b2f"],["/ja/2017/08/cross-compile-55-libev/index.html","96ef1fe06fc7838c331e41260fd8d746"],["/ja/2017/08/explore-service-worker-working-lifetime/index.html","285e1c7524137cb6997e95a3934faa23"],["/ja/2017/08/hello-jp-world/index.html","39f0f4f859cb35e72bc67ccc3bdffc17"],["/ja/2017/08/kiminonawa-tokyo-seichijunrei/index.html","c8fe427b6dfb49a0bd300bf244e583ec"],["/ja/2017/09/record-user-login-status-methods/index.html","0f94a67617d057d0079d6c0721254d35"],["/ja/2017/10/vue-typescript-early/index.html","1362f1c574063cd6d43b777946edd631"],["/ja/2018/04/2017-end/index.html","893adf3a2cf207dd2db297b220ebf1fc"],["/ja/2018/04/twitter-account-activity-api/index.html","f4e1f6b490817cb72875995a89e7f976"],["/ja/2018/05/buddy-complex-seichijunrei/index.html","cba0316efd84e5d4c53ae07c1c475a9d"],["/ja/2019/05/2019-05-16-record-jp-digital-TV-on-nas/index.html","a527a5636566ef7b4fb44d1e3d43b4d1"],["/ja/2019/05/2019-05-17-google-io-tech/index.html","39fd43e9e0279994e1d6fc2673456b8a"],["/ja/404.html","9ce761fc963e2533817b51072b68c976"],["/ja/about/index.html","29a14701bc7f3f84c63f229df0ab6640"],["/ja/archives/2017/08/index.html","554459404d2ab24b7a8dfbd6138bf9f8"],["/ja/archives/2017/09/index.html","0a507530fba17511db5a705f1965009c"],["/ja/archives/2017/10/index.html","abd03ed94f0a49ab3478924b0da3e524"],["/ja/archives/2017/index.html","29ba04d07f872410e65167b2266aadd2"],["/ja/archives/2018/04/index.html","b5bd2579341c3a32a09adef4df1120b5"],["/ja/archives/2018/05/index.html","0c4f7756a8f328bea33a26c7ef3313fd"],["/ja/archives/2018/index.html","a629f2ad1255f3aa4e95ed9d0ea34c40"],["/ja/archives/2019/05/index.html","8a59383ef0d97fba9fff07a8d16fe97c"],["/ja/archives/2019/index.html","3b47b57b2f35809c7f5dc43b00a1f75d"],["/ja/archives/index.html","0ee499d51b97e79fba0bdc9cb67ce3c6"],["/ja/categories/ACG/Travel/index.html","8b3891a9321b8b465e9995c7253267d0"],["/ja/categories/ACG/index.html","403333e899cee67c61a047088d260a38"],["/ja/categories/dev/Front-End-Dev/index.html","39a837bd0f905b9a400561f84267c188"],["/ja/categories/dev/index.html","2ae5ff9573ff7fe97c9de8c27eed5a3c"],["/ja/categories/uncategorized/index.html","42bdbcb83a0a1c6e496f1da3ae93bfc1"],["/ja/index.html","35700faced65d4c1e128d05c07498049"],["/ja/nihongo-test-page/index.html","56e28006f438ea44e09454fb2275ae9e"],["/ja/resume/en/index.html","0e13421e68a1d14b374d165e6453f7c1"],["/ja/resume/index.html","0482064d3bccbe3fd900eb561798ee23"],["/ja/resume/ja/index.html","ff0539022683dea76f166203b790a723"],["/js/instagram.js","7d7a9e2e7286ba2d5b6d12068214f0c3"],["/js/jquery.lazyload.js","28c23bc40080d31144776e9a8736837f"],["/js/main.js","2e92f29b0cd90bddc062915eb46a858c"],["/js/mobile.js","20029df2609ddd5d2b2d346edbb297c0"],["/js/nextpageajax.js","c3bde8d7bb1f967fb319f57a187ea51a"],["/js/pc.js","631b535186aab0e262485ee2bf9da628"],["/js/ripple-effects.js","b9c11903da0ef5c3d790b41369c3137e"],["/js/share.js","de52ac3d43e43c1951a08b0804458a8e"],["/js/totop.js","661822968b58fd439f46bd54031238d6"],["/keep_origin/affiliate_jump.html","71bf6d72c5d080ec2b3f8ecfae3d71ed"],["/nihongo-test-page/index.html","76463b027e03fb000e8dd324abbd890a"],["/page/2/index.html","5ead90a32295c423b6976d06891e4d13"],["/page/3/index.html","016cde6afd9c0eff6abea7076f62a9af"],["/page/4/index.html","8a8e4f8aa544dbcf5fe25d82de972b92"],["/page/5/index.html","90a19059e2c179fbb7fd1acc2ebb74c2"],["/page/6/index.html","6e399ad9cf16cae1a425a5b09bb979ef"],["/photoswipe/default-skin/default-skin.css","426e8908d7426603ca203b6d16281b1e"],["/photoswipe/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photoswipe/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photoswipe/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photoswipe/photoswipe-ui-default.js","0c9196aa8943ce8a8045c9f4cc62915c"],["/photoswipe/photoswipe-ui-default.min.js","9517baca43cd4e9cb23ff337fbc1baa1"],["/photoswipe/photoswipe.css","7dc0df107159e1be66d4464171561e5b"],["/photoswipe/photoswipe.js","a8d26ff34943c859884acbd6b2531315"],["/photoswipe/photoswipe.min.js","f5cd6479c4e4682545a9603e6b50c741"],["/resume/en/index.html","dd4b5fcba2ce95a8b32e7fc7917a4d8f"],["/resume/index.html","e45a8cfc69218e24d9fa8331fcadccdc"],["/resume/ja/index.html","3acd2f9bb24712e585ebf26d867e3ac8"],["/setup-log/blog-setup/github-pages-ssl.html","d5e315a4f7725d0c5a828ab2ac48dfe3"],["/sw-register.js","68a6c01a694fc6822b415edf89342055"],["/zh-cn/archives/2015/03/index.html","abda7e71e091d63d2ef4d67fc59ef19b"],["/zh-cn/archives/2015/04/index.html","d17c8aa4d3cb356d67696c7e82b4f990"],["/zh-cn/archives/2015/05/index.html","5247028caf5dba1ed0cbdc88404cdbb1"],["/zh-cn/archives/2015/09/index.html","2b5b116582d4b861530d27384dbea985"],["/zh-cn/archives/2015/12/index.html","98a977af03196c334110cc1724860fe4"],["/zh-cn/archives/2015/index.html","086359c2ae413cf91f8d7fd1f1384631"],["/zh-cn/archives/2015/page/2/index.html","9c0f1f6acda377fcbdac2676f4516c65"],["/zh-cn/archives/2015/page/3/index.html","974a1ddccff94214c41c494e3bb7f85d"],["/zh-cn/archives/2016/01/index.html","bfdb0715bb7b008c6abb05896b64f772"],["/zh-cn/archives/2016/03/index.html","ce69459ab63be827c0c4a75f45c9b03e"],["/zh-cn/archives/2016/04/index.html","e4a10bb34de2c287a3da840d31d40378"],["/zh-cn/archives/2016/06/index.html","dfd39ab0584376c38c8e9ad7933c99e5"],["/zh-cn/archives/2016/09/index.html","d0dd3bcd0192f95c65979d29b4711123"],["/zh-cn/archives/2016/10/index.html","a1ea96776b6edca5cba7a161480e2762"],["/zh-cn/archives/2016/12/index.html","77103ae79e61c45c19fdeccfec547ddb"],["/zh-cn/archives/2016/index.html","10aeb32542d3fc8621ab8ee8751b831d"],["/zh-cn/archives/2016/page/2/index.html","037fa15cc1b70cb4bab827d07ec01f52"],["/zh-cn/archives/2017/01/index.html","a5751af09089268da7866786189390c7"],["/zh-cn/archives/2017/04/index.html","7acab89f5ea9d607d88162045948bec2"],["/zh-cn/archives/2017/06/index.html","dc174dd9d23032259c4171cb3e36f167"],["/zh-cn/archives/2017/08/index.html","b64ba48106493b848c24dbcc4f97c3a6"],["/zh-cn/archives/2017/09/index.html","c5511a8e196fd1af250845ab22532c30"],["/zh-cn/archives/2017/10/index.html","8b40ec901df1d02667202c2f686e2603"],["/zh-cn/archives/2017/index.html","1a39b046fd803950ff0a39daa5202a42"],["/zh-cn/archives/2017/page/2/index.html","3bfb7c7ecac95f4fe489c5fd425af1b2"],["/zh-cn/archives/2018/04/index.html","35d03f23cd371354b8854632f7616e5a"],["/zh-cn/archives/2018/05/index.html","92310fa2b7978bd14e9bf1edee08ee85"],["/zh-cn/archives/2018/index.html","cebaef18c458b985ba2ba6f8a14dfc42"],["/zh-cn/archives/2019/05/index.html","81e2203c11b72a06e9259aceaf3c460f"],["/zh-cn/archives/2019/index.html","b8358ef2166036372c379e51c0b31c33"],["/zh-cn/archives/index.html","bba3c0f68dbb770a76a4abdef17396a1"],["/zh-cn/archives/page/2/index.html","a7960ed9331d7d9e8c54d2ede723445c"],["/zh-cn/archives/page/3/index.html","695e72c1056488ef4500a3ca47f6f070"],["/zh-cn/archives/page/4/index.html","06a065d2d67f7185bb5304db03a4de07"],["/zh-cn/archives/page/5/index.html","a6843f4aff9424a8ff9765cdde180d42"],["/zh-cn/archives/page/6/index.html","42c2167d205dcd49d64b00d271a831d1"],["/zh-cn/categories/ACG/Music/index.html","a96ae4e268ad7a051917c085300aa850"],["/zh-cn/categories/ACG/Music/self-copy/index.html","6f90387160d1d9b3ce91c811ffe1442f"],["/zh-cn/categories/ACG/Travel/index.html","f993a98abf40ce08fa77141c4d985a4c"],["/zh-cn/categories/ACG/figures/index.html","bfa9a68237864d3c76d0d16b629664f5"],["/zh-cn/categories/ACG/index.html","c1b397201cb9c34edc4d86516e3ca3e3"],["/zh-cn/categories/dev/Front-End-Dev/index.html","155b6dd6633be6691b0349467333f0e8"],["/zh-cn/categories/dev/HTML-CSS/index.html","b4f94f6ec506fc4b04aa1ae68028f4e0"],["/zh-cn/categories/dev/android/index.html","7b06cfb1947ed0e81edf74d19263dcee"],["/zh-cn/categories/dev/cpp/index.html","cd9209d3b60b8211c90dccfb5614458f"],["/zh-cn/categories/dev/git/index.html","f01ee94a3768c3bdaa99fc42fe1b07bc"],["/zh-cn/categories/dev/index.html","22f199dddb8a5dd20504e28e4b1cb14a"],["/zh-cn/categories/dev/java/index.html","8f77f2a775b37a1d8992f2f0bcf9ff0e"],["/zh-cn/categories/dev/page/2/index.html","e7933b8aea8f76c3402240c7bd69eb8e"],["/zh-cn/categories/maintaince/blog-setup/index.html","e69b99db29685ee1ffcc237e31d37eff"],["/zh-cn/categories/maintaince/index.html","477ea9fefca540a97f7ef63db7c11454"],["/zh-cn/categories/maintaince/macbook/index.html","f8f5d4a89da2e84141294708382cda15"],["/zh-cn/categories/maintaince/router-config/index.html","f0031c796ccff95bcc0385fc5fc0410a"],["/zh-cn/categories/notes/index.html","7df4b8018f16f1b36246fd2636fb28a2"],["/zh-cn/categories/tricks/android/index.html","381748719f95593c3d8585014216b6f8"],["/zh-cn/categories/tricks/index.html","f7b0f498e8c7f0ce9b25babaef951662"],["/zh-cn/categories/uncategorized/index.html","d40ea9fbb3699106bb4c05e4632f450e"],["/zh-cn/categories/works/Front-End-Dev/index.html","c866ac25143369ec12844d172e38365b"],["/zh-cn/categories/works/csharp-wpf/index.html","a64b38780c9e34df64e069352464b421"],["/zh-cn/categories/works/index.html","d286af3b7dab6b1ce44743e84fbe70ef"],["/zh-cn/index.html","61fdda103ee1ad49f863b4c8e7346b92"],["/zh-cn/page/2/index.html","153442d5c792f8bdb948a0a077000c44"],["/zh-cn/page/3/index.html","25084a5ed5463afda11c658facb54402"],["/zh-cn/page/4/index.html","208f49b0e7fcb3b9e61383ab8d8fbd7d"],["/zh-cn/page/5/index.html","e3893e23a7eff1ae2ea1c3833a05f6b1"],["/zh-cn/page/6/index.html","5fe2f7dc9d1d716d5e1eeb22ea8f2707"]];
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
