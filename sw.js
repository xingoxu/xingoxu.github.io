/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/03/WNDR4300-setup-log/index.html","f329e8117a151c72faa8dc5e632c6b29"],["/2015/03/android-hostname-change/index.html","40474e8fb36bcf935e54f11f3253868e"],["/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","915f99577068241eec6c8bae1a627abb"],["/2015/04/android-chrome-issues-with-webpage/index.html","30a5f745334d548e965f80d931417764"],["/2015/04/cpp-study-log/index.html","3baebae31751136d67e09ffd883c2381"],["/2015/04/github-pages-ssl/index.html","e1beb016878ac3da2bc1c450c7f2e2bc"],["/2015/04/hello-world/index.html","a926a06675ae527018fcf6fcc116a0b4"],["/2015/04/hexo-setup-log/index.html","757ae31921f87a5d078fa30a3b3045f9"],["/2015/04/self-copy-cd-inazuma-1-html/index.html","d77de1b589d3c5addca0ba4b16b25a5c"],["/2015/05/cpp-inherit/index.html","6290dfa6082a4b7bf816570eb84450cb"],["/2015/05/cpp-polymorphism/index.html","56a67f1136fa7841320a877c982c4bb6"],["/2015/09/android-root-ota/index.html","5c8584fee3c055a505622fe3e3409374"],["/2015/09/java-learningNotes-1/index.html","b86215e345bfe2ebcec9fd249078d44a"],["/2015/09/newblog-newlife-2015/index.html","18f85337da2f85ce55c02e54543ce5bb"],["/2015/09/router-rebuild-2015/index.html","2e9bd5ab11b7c5e955d0e82a40aaf01f"],["/2015/12/2015-12-21/index.html","b63b27d7fb81b792601f19cda99f1bdf"],["/2015/12/PixInTouch/index.html","917dfb8b4f7319dbdd402a946ddfcbf4"],["/2015/12/git-study-1/index.html","19680d6dc0806e643b070140189b0236"],["/2015/12/hexo-backup-and-migrate/index.html","54b16e3be0d36fd7145704fff2fc5ae8"],["/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","6cf8e8036eb07477d94fea93278bb5b4"],["/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","aee34e090d8939c4ccde18d82897ac85"],["/2015/12/router-reconfig-2015/index.html","2aad777f0df88ed9dc985cf6abf7a606"],["/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","d04daddc586038a8f7328f9834131230"],["/2016/01/2016-stepping-further/index.html","1444abf5c4709b11bf8c01b21eabfd33"],["/2016/01/Android-Study-1-22/index.html","4afaa1b7be034aec286402dd8ec182e2"],["/2016/03/2016-03-20/index.html","d38991b494ffa95fe9a38121efc27dd8"],["/2016/03/GSC-535/index.html","aa373cbd13e10d3d584edfce3df7d9e9"],["/2016/03/gulpjs-1/index.html","a058cd263c4abfa12acd57d8113266e5"],["/2016/03/hexo-theme-paper-white/index.html","eff13d73b7611f3ea7ebaf2515fe8f26"],["/2016/04/2016-04-19/index.html","5c2bf244711d8fb588285c0a460a8167"],["/2016/06/2016-06-16/index.html","2a6bf9da13d975ffd5e8eb45db492e0b"],["/2016/09/2016-09-18/index.html","0d6335c36d4033fce7c391d0b042c99d"],["/2016/10/2016-10-27/index.html","dda5318ac597f490e66173db9178bb69"],["/2016/12/config-switchresx-and-2khidpi/index.html","43571ade0c48b6a0e87efad882c75338"],["/2016/12/improve-duoshuo/index.html","219e7b9099a4273cc314b0f30fa15aab"],["/2016/12/use-travis-ci-your-blog/index.html","cdc9dcf44ccd20bcd23aaef2468d0b4b"],["/2017/01/2017-iyahoi/index.html","b6406a6fb01a828ed75e97e2d53215be"],["/2017/01/webpack-amd/index.html","eab0239695a91967efde44e63067297c"],["/2017/04/kotobukiya-syaoran/index.html","87e7b19ca2705c652be699b24ecb0688"],["/2017/04/macbook-and-surface/index.html","11074229a905b10db00e4314f6a336e9"],["/2017/04/uc-hyakuya-yuichiro/index.html","f21a74c0ceeb32bfde9449d309b2b3d5"],["/2017/06/noragami-seichijunrei/index.html","5254573ded463ccf37fb4cc44661724e"],["/2017/08/cross-compile-55-libev/index.html","017d1c0a51fa4eb45a9f452373f96e72"],["/2017/08/explore-service-worker-working-lifetime/index.html","9c7699ba66264b89ac85e5d293929f50"],["/2017/08/kiminonawa-tokyo-seichijunrei/index.html","377ecdabccff0f6ed89b087686d88769"],["/404.html","85794463e8a9cfc44be268a911870add"],["/about/index.html","409c933786d74b239e77e126acc153d1"],["/archives/2015/03/index.html","6f65a727cf1bb3a9804f61429cb15e3c"],["/archives/2015/04/index.html","5d0fe023267c3a1794f7324c8dc5e71f"],["/archives/2015/05/index.html","da10b24540bafc5dc7187e1e8b12219a"],["/archives/2015/09/index.html","faf285db19443960cdd2c4477343d3b6"],["/archives/2015/12/index.html","ba7872f884e4f607def685f2914512de"],["/archives/2015/index.html","75ac25ec5e7db614e3c5a3f381fa9337"],["/archives/2015/page/2/index.html","02d34ded82b927d960b4f25dc9522e32"],["/archives/2015/page/3/index.html","fcdc3f2147aee6090e62e3e116112382"],["/archives/2016/01/index.html","0f3ee652a5cf1e156be642f691a779a4"],["/archives/2016/03/index.html","ac92eff94feaddc9ba7f3851590d1d92"],["/archives/2016/04/index.html","f0dfe892c484c3668d5bf348bb2002cd"],["/archives/2016/06/index.html","e543ce3eaab40a506e068ebbd4e47166"],["/archives/2016/09/index.html","d2db642e61b0de50f14c9040392c7f62"],["/archives/2016/10/index.html","17e0a7e55fa2aa41e14a6ced008a8ba9"],["/archives/2016/12/index.html","87952349b384e079d855e4d07e5e9e45"],["/archives/2016/index.html","d81137a09b7c589c0364e3b1b16e33b3"],["/archives/2016/page/2/index.html","f85a7f3de7fcb8e7d8d53effe1fa8d1b"],["/archives/2017/01/index.html","78fb4667348cfbdf266b7b7d46702c23"],["/archives/2017/04/index.html","6e07c70c32ec4f28d22527744e3ce8f9"],["/archives/2017/06/index.html","d083844a670fe965c3a9a592be29b309"],["/archives/2017/08/index.html","3c9678bb9909ff5b833d7ca6f848a3e1"],["/archives/2017/index.html","24f73b05dc4b048b0f7b9b538b05c50f"],["/archives/index.html","eea4e1bba74c393973e4c07efc1540f1"],["/archives/page/2/index.html","26c7f78cb7e0ee0df327595d483197c2"],["/archives/page/3/index.html","ff768a9aaa4d4b919121c4aed8a8ab94"],["/archives/page/4/index.html","149363f998833b6787f0181ff0e30db2"],["/archives/page/5/index.html","cd9d028f0e3b178073fc2707952365f4"],["/assets/images/about-me.png","a066d06c3d9d1fe56c4d921cec7febf3"],["/baidu_verify_YbTSlpWIUJ.html","779049c3a50695ceb3a388ce1e8bc1b9"],["/categories/ACG/Music/index.html","640cf8a9de152913083bbacb9bf02024"],["/categories/ACG/Music/self-copy/index.html","660ff9e3534eaa4d54d221ad8e80d295"],["/categories/ACG/Travel/index.html","de9da4f80cb0539a026d2d01cf9341a0"],["/categories/ACG/figures/index.html","cdf0e641dcdb75749bcb71f825a45cb9"],["/categories/ACG/index.html","f355dce9a43b94687eec7c914dc9f6f2"],["/categories/dev/Front-End-Dev/index.html","487d0f1da7ba5b1667fef85558dada4a"],["/categories/dev/HTML-CSS/index.html","888cfd4b2df63c454c03083fa677ecfc"],["/categories/dev/android/index.html","8af5b951d67216a4a183f829f79529e0"],["/categories/dev/cpp/index.html","9dc495d5ad66ec350e9eb31d4536c5fe"],["/categories/dev/git/index.html","82e4637949a87685b002251a849f15b6"],["/categories/dev/index.html","a47b2511b19386bee7005b42c8c639e3"],["/categories/dev/java/index.html","0cbbf60088bbefd900992f1ddcc3ffb9"],["/categories/dev/page/2/index.html","b6f4aad19a2f78c784af2978e8aae9ba"],["/categories/maintaince/blog-setup/index.html","d11978ec879a074cbe031e5a4ca6d966"],["/categories/maintaince/index.html","535aacda798f1455c46720f9c48d187c"],["/categories/maintaince/macbook/index.html","b4b1ffc3be76eab1c18eee31fa33c695"],["/categories/maintaince/router-config/index.html","1a2c714a3a303c594642fac786ce79a3"],["/categories/notes/index.html","8feae212e32b259d05eff4e669d17037"],["/categories/tricks/android/index.html","4ff0a44e72c48c4597623f9c09a0bf7c"],["/categories/tricks/index.html","ba5b136b6b92161de390c66e50768f09"],["/categories/uncategorized/index.html","6c58db58c8eff7de81763745abae2628"],["/categories/works/Front-End-Dev/index.html","af6921d94c4880bc8c3cf002671acf2c"],["/categories/works/csharp-wpf/index.html","40d05a6aafbb94ab0e602fc305355e7a"],["/categories/works/index.html","5f9ba7a76dba0e158a6e9fabb840ffbe"],["/css/seichi.css","42693f35c4c482207368dd363ea27373"],["/css/style.css","a81f79e7bf311785886f2c1c31c8e4d4"],["/google311213f0c8d812a9.html","51f1ee3c2f13a21a1a40b3dae4954454"],["/img/coderwall.png","1976fe70f1ee8ed243e0975402e06a2d"],["/img/delicious.png","952d9b54d8bcfe7b998f67ff48c4dbce"],["/img/douban.png","d42a163f932100e621d22732db34ecdb"],["/img/facebook.png","4bd685f6c9fdaccabf07bdd52173facb"],["/img/github.png","3c4b6267a1a3fedebdc7d089610ecfe7"],["/img/google.png","c385f5304465716b2d6c9ada94c657ab"],["/img/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["/img/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["/img/linkedin.png","4c72c4896f3c23f736cb1ad08f0c866e"],["/img/mail.png","38a7b8302dac028bf03b22d228938abf"],["/img/pinboard.png","9b6186cb97adbe50311f94e50f2392cf"],["/img/pinterest.png","e1b8e655d1b99b40ebcbd96977ae234e"],["/img/rss.png","ec8cf9b5a98011aa75cc0a4f25024dc9"],["/img/scrollbar_arrow.png","be5381cedbd6b778b1d92e224fd71cf7"],["/img/stackoverflow.png","039128ececb47b33bccedd98dc9fc809"],["/img/twitter.png","d2289a4936fefa41d9f92cf89939be5b"],["/img/weibo.png","b382032b316ee38c6d537fe9d36ae54c"],["/img/zhihu.png","e6352c0e1957beef3009268ae747c3aa"],["/index.html","bc13b5b08b9d4a1b1e70d0db5619cf86"],["/ja/2015/03/WNDR4300-setup-log/index.html","6b31b65ba650c219deddad1773bb6531"],["/ja/2015/03/android-hostname-change/index.html","f60a1ba1d325ccbd9d84144be0520235"],["/ja/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","2a7ea2ddb3774efeb94b5d08c54f31fe"],["/ja/2015/04/android-chrome-issues-with-webpage/index.html","a7ca09525d69f3bc936ebc0389ae4dc3"],["/ja/2015/04/cpp-study-log/index.html","949df90972878292d97297af351b17fc"],["/ja/2015/04/github-pages-ssl/index.html","d05a4b6ee101e0eaa67541c83d06fd5a"],["/ja/2015/04/hello-world/index.html","c84b39ee2673f8db1c3f56372d4b1c06"],["/ja/2015/04/hexo-setup-log/index.html","5d96d0136e70f94f34fe226a0991a32d"],["/ja/2015/04/self-copy-cd-inazuma-1-html/index.html","58efca5a3149475546388042fb5b2e21"],["/ja/2015/05/cpp-inherit/index.html","eeab2a3e21da2d571bfa197d2093ee2d"],["/ja/2015/05/cpp-polymorphism/index.html","b517dabdc287c030b924702af7c65133"],["/ja/2015/09/android-root-ota/index.html","41f4fc5cb26406bdbb0346f6a02b8b33"],["/ja/2015/09/java-learningNotes-1/index.html","f2e30046adced2c7295508d40b16dee4"],["/ja/2015/09/newblog-newlife-2015/index.html","99a3743c07f2024b0b950ef3617941a2"],["/ja/2015/09/router-rebuild-2015/index.html","8aa79be925b48ef3cbb4ec71db080bdc"],["/ja/2015/12/2015-12-21/index.html","b6e984c8bdf3a8709bc3c2d6ffac20a9"],["/ja/2015/12/PixInTouch/index.html","66aea2d38b35b4f60196f17cd5afea25"],["/ja/2015/12/git-study-1/index.html","874ef2426d270a49a1c418bda054e968"],["/ja/2015/12/hexo-backup-and-migrate/index.html","3206e5db32e134b414707a4957f9246f"],["/ja/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","e60a87e804abf8d94012b05a9e1c9b86"],["/ja/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","fd6afeacc3ffc880ef36c856a8fa7e70"],["/ja/2015/12/router-reconfig-2015/index.html","bb95e6d6c6c9f638e7e25304f23a3f1f"],["/ja/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","382823015166f07c60f27e3bd2d98faf"],["/ja/2016/01/2016-stepping-further/index.html","f171c88866217388a9f3d9956758ee78"],["/ja/2016/01/Android-Study-1-22/index.html","47f4b4b4a53fc01c97ce33e477b30977"],["/ja/2016/03/2016-03-20/index.html","879a6ff55540950155d63e3130f91871"],["/ja/2016/03/GSC-535/index.html","602ff7be21f44282809d2f2eb932af1b"],["/ja/2016/03/gulpjs-1/index.html","044011c796de5c37586fc867ed1e49eb"],["/ja/2016/03/hexo-theme-paper-white/index.html","8be72db3b2ca83df4d4c55409ba670e1"],["/ja/2016/04/2016-04-19/index.html","2438fc9bd4fe43470a85cc34de67f9a9"],["/ja/2016/06/2016-06-16/index.html","8052e5f48e1a3e49b36b087a9fdb970b"],["/ja/2016/09/2016-09-18/index.html","671822c4fc1837561f973fbf8b768139"],["/ja/2016/10/2016-10-27/index.html","51f2068e7356d5c5643260427a122b83"],["/ja/2016/12/config-switchresx-and-2khidpi/index.html","d6665d642d82e01e750e482cbc234f43"],["/ja/2016/12/improve-duoshuo/index.html","7fe74980a9cb03bf3c26953cccd10692"],["/ja/2016/12/use-travis-ci-your-blog/index.html","ca2f3bd2d6bd4e1a83d0093adb7418f7"],["/ja/2017/01/2017-iyahoi/index.html","7ad120f7b8699effffa4ce70b2d6af15"],["/ja/2017/01/webpack-amd/index.html","19504d0ad94dc8fd7936db04d4ef2a04"],["/ja/2017/04/kotobukiya-syaoran/index.html","b11a8a508892d7925549b032f4d80a32"],["/ja/2017/04/macbook-and-surface/index.html","90afae66e143eae742425302065239a4"],["/ja/2017/04/uc-hyakuya-yuichiro/index.html","7c53bc859162bc375093047b1e7d1b87"],["/ja/2017/06/noragami-seichijunrei/index.html","f0252e762a4d3b27699eb9967d4d51bb"],["/ja/2017/08/cross-compile-55-libev/index.html","05054e06fd208d980cf6d1f07bce4f48"],["/ja/2017/08/explore-service-worker-working-lifetime/index.html","4dd7802d0ad09926684d8212daf8d8b5"],["/ja/2017/08/hello-jp-world/index.html","c0e994fa5c2f5f375f33c3f68665ac6d"],["/ja/2017/08/kiminonawa-tokyo-seichijunrei/index.html","f314219b52bcb02a1f70067bb077b466"],["/ja/404.html","9e66c043ccd3e9a1f9b0d7ba832ade72"],["/ja/about/index.html","974455ac542b2de308d851574f0787be"],["/ja/archives/2017/08/index.html","77fb3c65445366ae1c91595fbfb9e80a"],["/ja/archives/2017/index.html","7abfd8a0773671d04cf437195a3ae495"],["/ja/archives/index.html","3b5466f658c2f3ffc55c1f8336b1994b"],["/ja/categories/uncategorized/index.html","961a70da3224c2a9637a698fdf8fcc2a"],["/ja/index.html","6a34f968383585ce4961423121a754d3"],["/ja/nihongo-test-page/index.html","14a6683fb9c6f6b367440d5228753ed8"],["/ja/resume/index.html","459676755eae430937ca617f91c97463"],["/js/instagram.js","7d7a9e2e7286ba2d5b6d12068214f0c3"],["/js/jquery.lazyload.js","28c23bc40080d31144776e9a8736837f"],["/js/main.js","2e92f29b0cd90bddc062915eb46a858c"],["/js/mobile.js","dc84e1287e89e3c1bba67fd47b8656b1"],["/js/nextpageajax.js","c3bde8d7bb1f967fb319f57a187ea51a"],["/js/pc.js","631b535186aab0e262485ee2bf9da628"],["/js/ripple-effects.js","b9c11903da0ef5c3d790b41369c3137e"],["/js/share.js","de52ac3d43e43c1951a08b0804458a8e"],["/js/totop.js","661822968b58fd439f46bd54031238d6"],["/nihongo-test-page/index.html","5efb62af05c7b09c8b41679cb6e82a74"],["/page/2/index.html","0e1281141ee75f7e7a67b53ff4bc9b4e"],["/page/3/index.html","05e652c7ca2a95d15d5dccbad3e7b8db"],["/page/4/index.html","1865179cc3a172fe6b49d7df270c304f"],["/page/5/index.html","56460944c1f77e57d65471e5ac4556b9"],["/photoswipe/default-skin/default-skin.css","426e8908d7426603ca203b6d16281b1e"],["/photoswipe/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photoswipe/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photoswipe/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photoswipe/photoswipe-ui-default.js","0c9196aa8943ce8a8045c9f4cc62915c"],["/photoswipe/photoswipe-ui-default.min.js","9517baca43cd4e9cb23ff337fbc1baa1"],["/photoswipe/photoswipe.css","7dc0df107159e1be66d4464171561e5b"],["/photoswipe/photoswipe.js","a8d26ff34943c859884acbd6b2531315"],["/photoswipe/photoswipe.min.js","f5cd6479c4e4682545a9603e6b50c741"],["/setup-log/blog-setup/github-pages-ssl.html","d5e315a4f7725d0c5a828ab2ac48dfe3"],["/sw-register.js","3e7d6701f2c12122c696701f9b183c33"],["/zh-cn/archives/2015/03/index.html","77f9e803e2a999f21b05cbd679836c24"],["/zh-cn/archives/2015/04/index.html","511f398fee80fc65567933ec134db27a"],["/zh-cn/archives/2015/05/index.html","88abd8897adf8e224d46a192f52fc807"],["/zh-cn/archives/2015/09/index.html","8446859d55b014fef7b04f957841507d"],["/zh-cn/archives/2015/12/index.html","610d386dd6a8493335562d3ead0fb884"],["/zh-cn/archives/2015/index.html","da762863f18f3d2bfa2b761b7cf9e46e"],["/zh-cn/archives/2015/page/2/index.html","b741c0a5491be919eb33734b1091d9fe"],["/zh-cn/archives/2015/page/3/index.html","a67b51a60ac2d2fcef6cedc3007dea54"],["/zh-cn/archives/2016/01/index.html","2b16e4b709c4270a770a045330c11753"],["/zh-cn/archives/2016/03/index.html","e5a5aca2fc21163f3d55664b88a0083a"],["/zh-cn/archives/2016/04/index.html","75af1b8c95b811147467d48175fa68a5"],["/zh-cn/archives/2016/06/index.html","d6fb3b222f9c4e7decee7e426a492f03"],["/zh-cn/archives/2016/09/index.html","c30d451f6428df5d99b2e2ede4218899"],["/zh-cn/archives/2016/10/index.html","d39b0e04a6eae78165ab66abaf1fda58"],["/zh-cn/archives/2016/12/index.html","b3644f1057567e20623b3253fe346caf"],["/zh-cn/archives/2016/index.html","f3e4f5dca55a0cf3603f9f39b0f35bcf"],["/zh-cn/archives/2016/page/2/index.html","af473d591124fd273bca842c19311145"],["/zh-cn/archives/2017/01/index.html","adbf4daae4116dad0fdfa6e0015443e4"],["/zh-cn/archives/2017/04/index.html","424373c07333c946f8b6d920c3e8ff36"],["/zh-cn/archives/2017/06/index.html","9660da6a246610269e34526af6ce45e1"],["/zh-cn/archives/2017/08/index.html","a76f0312bdaa458e70a7b40eb6733f1b"],["/zh-cn/archives/2017/index.html","ed4302a72a93f06a9fb890d8563dbca5"],["/zh-cn/archives/index.html","96bfc8cb28ef77976852e93ba82a45e9"],["/zh-cn/archives/page/2/index.html","b5a6477cd62a50ba2449c9b03085be04"],["/zh-cn/archives/page/3/index.html","cef9ae82376707194b510b462508fce7"],["/zh-cn/archives/page/4/index.html","eea3fa1540fa84c364186b41c4dff19b"],["/zh-cn/archives/page/5/index.html","5e0207714a9bb75057afb86bb946b86f"],["/zh-cn/categories/ACG/Music/index.html","1fa42acb348d252f98a17b2a2220eb05"],["/zh-cn/categories/ACG/Music/self-copy/index.html","d84c544d92491242f0cb57fdbb14ae91"],["/zh-cn/categories/ACG/Travel/index.html","d43383052ac3dd90d7d8d09e1ef36736"],["/zh-cn/categories/ACG/figures/index.html","9200d0d7431f450a86bdaf0c34fe8e85"],["/zh-cn/categories/ACG/index.html","a7e32ad053e07d390febe65ca79b078b"],["/zh-cn/categories/dev/Front-End-Dev/index.html","17be5798d0315fdd0b6350ed3938fb9b"],["/zh-cn/categories/dev/HTML-CSS/index.html","82981bbdbc5fe2708b318e912a847fed"],["/zh-cn/categories/dev/android/index.html","7d374b69fc6dcc187d71d3e3045cd35b"],["/zh-cn/categories/dev/cpp/index.html","57cf47a412317c585004447f2ae91705"],["/zh-cn/categories/dev/git/index.html","6b38f9c5ddc6a201ac5726d38ca9435b"],["/zh-cn/categories/dev/index.html","4dc307db12e19dce8b51c7892a204754"],["/zh-cn/categories/dev/java/index.html","53dd28078bf3b903520b26a81a691990"],["/zh-cn/categories/dev/page/2/index.html","0175e8b65c86a6fb9b87eb60b49b1078"],["/zh-cn/categories/maintaince/blog-setup/index.html","d6a24a02338913d32c0957f6e4714f9b"],["/zh-cn/categories/maintaince/index.html","ae6d580db4091fb323ac958d7a3ed4c9"],["/zh-cn/categories/maintaince/macbook/index.html","3da193a7aade0038f7702745980f61ec"],["/zh-cn/categories/maintaince/router-config/index.html","c7483c2d5c0bcf26648cd2fb8bf8b9e9"],["/zh-cn/categories/notes/index.html","13fc54800b605a8336e81e5638708a8a"],["/zh-cn/categories/tricks/android/index.html","e04c94c7672ad3718a7793b80efc4349"],["/zh-cn/categories/tricks/index.html","b3b3528ff772c601907c162740365fe8"],["/zh-cn/categories/uncategorized/index.html","97e09eeac245e12d3cd0445b20877ce5"],["/zh-cn/categories/works/Front-End-Dev/index.html","4524bd9ee6b15c07a1ccc9b658f38f64"],["/zh-cn/categories/works/csharp-wpf/index.html","125c8454f6bb1d0468761d0ee909fed0"],["/zh-cn/categories/works/index.html","3f8b99e1286ddc92bf9f297c5289d44c"],["/zh-cn/index.html","d9febcc214fe126d6277cd5369edc35f"],["/zh-cn/page/2/index.html","03e0713cac7e1c03ac7c33973bfee874"],["/zh-cn/page/3/index.html","86610d97392167705deaa03494a84a73"],["/zh-cn/page/4/index.html","ff6ebbff6fa2a4285dbced1e1c2350d7"],["/zh-cn/page/5/index.html","a402a07fb1df57d9a4d4fc68e3d9fdf1"]];
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
