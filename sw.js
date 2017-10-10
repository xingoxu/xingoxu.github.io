/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/03/WNDR4300-setup-log/index.html","b0a259209911561a466a4c2d44ee6b53"],["/2015/03/android-hostname-change/index.html","f75a326caffdf27968286332776c9c1d"],["/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","28e36a25bad71c1b9a709f1c020a47dc"],["/2015/04/android-chrome-issues-with-webpage/index.html","e56491f614b5e39e0ea3cb4b799ac559"],["/2015/04/cpp-study-log/index.html","83cdffeae98b2c596fbed6a4755765b6"],["/2015/04/github-pages-ssl/index.html","fc6e74abf48c85a695974f85d57db131"],["/2015/04/hello-world/index.html","129636c591d6deebf0c63fb0aebd065c"],["/2015/04/hexo-setup-log/index.html","68a784a3796116d563190d1454c0b8bc"],["/2015/04/self-copy-cd-inazuma-1-html/index.html","14152c2771e0ab10f1eea69980a1b9b0"],["/2015/05/cpp-inherit/index.html","e55d8cfbfa68a0fddaa817794473f634"],["/2015/05/cpp-polymorphism/index.html","d8af9d50cb370e7e731f31644c8cb558"],["/2015/09/android-root-ota/index.html","7d46c266e4a99acde9f07c6bda83be42"],["/2015/09/java-learningNotes-1/index.html","af552e98ebf6b379a790b87d7c273bee"],["/2015/09/newblog-newlife-2015/index.html","dcf7974e3af9c62e16d9a8724cea2418"],["/2015/09/router-rebuild-2015/index.html","63e5f6e1a0cca4cc6c34fd5d6f5a48d1"],["/2015/12/2015-12-21/index.html","ab5ca1bd1aa225fff43aecc1dfcae1cb"],["/2015/12/PixInTouch/index.html","6622d1773f40dbd43cc62beebf5779d5"],["/2015/12/git-study-1/index.html","bf7ca43c9b6df202428c47df0d14ea66"],["/2015/12/hexo-backup-and-migrate/index.html","ad69be3cf02234d0f72d75817c5db1ac"],["/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","145d383003096ffd7fb19648c25cfdce"],["/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","26756656d6b24fb41daff3189dff0d9d"],["/2015/12/router-reconfig-2015/index.html","08643bbccecda5465552b1f04462633b"],["/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","14233797adc27707a7b5a67e57811585"],["/2016/01/2016-stepping-further/index.html","eff836166ea74d47ba8d227583df37a5"],["/2016/01/Android-Study-1-22/index.html","8fe987535eda65aae29324cdf25ca93c"],["/2016/03/2016-03-20/index.html","3019a6ca75e886520431f237dadc5427"],["/2016/03/GSC-535/index.html","889e6b383b63fa64957b1844b39e802c"],["/2016/03/gulpjs-1/index.html","4116e464eeea55c1b271f609137d2855"],["/2016/03/hexo-theme-paper-white/index.html","b2435976d1aaa35c3046b2ad43d78df4"],["/2016/04/2016-04-19/index.html","5130584cb85894f32ed97c57948c3344"],["/2016/06/2016-06-16/index.html","a8282674d8d7fb017dd57ded7a073500"],["/2016/09/2016-09-18/index.html","2a7c1dac41ddd2db7e466c77fb5f20b3"],["/2016/10/2016-10-27/index.html","eb74d5259236a6e41fa431a407084f86"],["/2016/12/config-switchresx-and-2khidpi/index.html","4f598ced35e563603031d1555007de33"],["/2016/12/improve-duoshuo/index.html","978af4da81c8e0c7e7310da7a209d292"],["/2016/12/use-travis-ci-your-blog/index.html","0a47922b2a09f0282681c92abcfd5859"],["/2017/01/2017-iyahoi/index.html","2ff041b2ac52f3cf40727b969b7a068f"],["/2017/01/webpack-amd/index.html","eeb5ec5cf8ca6b5d73329b70b5ace135"],["/2017/04/kotobukiya-syaoran/index.html","f5e5460b0f1c7b6af9461b5b7d253071"],["/2017/04/macbook-and-surface/index.html","a12c5bda2bd86fbab31c2f29e4aeda8c"],["/2017/04/uc-hyakuya-yuichiro/index.html","6d05ad1029fa02509dce33fd034abc5b"],["/2017/06/noragami-seichijunrei/index.html","aeef432466d6ad21c1a9209e5d1463fa"],["/2017/08/cross-compile-55-libev/index.html","5a0df0fca12016f3c87c747e3c4a5d53"],["/2017/08/explore-service-worker-working-lifetime/index.html","063324da9075f8d787701abcf6051f02"],["/2017/08/kiminonawa-tokyo-seichijunrei/index.html","9d53905476631c89b876e1220d53f8b4"],["/2017/09/record-user-login-status-methods/index.html","8cf2b4640adb9908a0c947d881f640c6"],["/404.html","ce190fadbd95c7e710cfe39b105a2555"],["/about/index.html","84700c40819cd8900fddb431cb24fcde"],["/archives/2015/03/index.html","e843e58911a785b6524228affcce7eee"],["/archives/2015/04/index.html","9a93e1e4eaa0632ba72b4418fbd227d9"],["/archives/2015/05/index.html","8a7184b0b063d051811f2a0a16acb460"],["/archives/2015/09/index.html","1671680d0f25613dfd7975784f13ead8"],["/archives/2015/12/index.html","b7f1d6cf7cc6fdb373260d6a166dc3ae"],["/archives/2015/index.html","9bada5b6bcc292c18e4ee56d5dad3667"],["/archives/2015/page/2/index.html","5069aaa26cb8b49c7d0b449d8a701417"],["/archives/2015/page/3/index.html","40a8c1a6ba37d74b85971da3784bd423"],["/archives/2016/01/index.html","50449da47b7a5095f16032d469aa531e"],["/archives/2016/03/index.html","0f29dea81f0a1164ad3f42638016421d"],["/archives/2016/04/index.html","741b787e36a12be8bb21b425a1d00880"],["/archives/2016/06/index.html","aa935c670d8ecdc2e174a2888905255b"],["/archives/2016/09/index.html","6c0835bd28ac1aae2ff9f59b6eb92a1d"],["/archives/2016/10/index.html","f10de22e5d8f7c548247f9eceffdf46e"],["/archives/2016/12/index.html","676ab9a7a93abcc91314dc900cbfe60d"],["/archives/2016/index.html","5a49a258ade24576631b6fd6ee5b94b2"],["/archives/2016/page/2/index.html","35405cecb8f27f230ef91c7991789b54"],["/archives/2017/01/index.html","86565ae8c3e578d43e1c19031e8ee740"],["/archives/2017/04/index.html","7b6f11ff36d5c30533b97aaf90637811"],["/archives/2017/06/index.html","68f0c0f63df2ee9441cef67fe8dcb420"],["/archives/2017/08/index.html","77ab5ed0e0b74576e7a239ae53e3b032"],["/archives/2017/09/index.html","4b5d58b2ae492c92c7f1b305d428a1f9"],["/archives/2017/index.html","78e23f08993ab5fbfa11f9541e75ddfe"],["/archives/index.html","3e16ac86a4977f39823c1a79f3433e3f"],["/archives/page/2/index.html","6deab54eb4b382cf8077497e499aa1e0"],["/archives/page/3/index.html","8e80df33c65ac9a5160e2e916c6c02de"],["/archives/page/4/index.html","d0afee7d29c238d6690198fb29565044"],["/archives/page/5/index.html","d55de70dff062674807eac68a23470e8"],["/assets/images/about-me.png","a066d06c3d9d1fe56c4d921cec7febf3"],["/baidu_verify_YbTSlpWIUJ.html","779049c3a50695ceb3a388ce1e8bc1b9"],["/categories/ACG/Music/index.html","f55186f4cd0d3cc3c9bd2f176f18822f"],["/categories/ACG/Music/self-copy/index.html","ad0a790bf538dd8e61ed44a14a5050a5"],["/categories/ACG/Travel/index.html","dc4932fc9ff8d8be32165f799faf7f51"],["/categories/ACG/figures/index.html","6db4dadad0f3a811bdf8d192f7ef6947"],["/categories/ACG/index.html","e7e446ae634a998660ee8b418f89fbb7"],["/categories/dev/Front-End-Dev/index.html","d63b10912072ffb1b0a5eb36591ceef6"],["/categories/dev/HTML-CSS/index.html","43e9afbceae5f737955919483ec37a58"],["/categories/dev/android/index.html","b5b7b53460aa16d117bc23eacb2d38fa"],["/categories/dev/cpp/index.html","6c2587a1fd4b1b9902f5c8dfd3006462"],["/categories/dev/git/index.html","c9813b8cde49d4a6618330dbdd950065"],["/categories/dev/index.html","ea37c19d0b7beaa2915c957683c5c411"],["/categories/dev/java/index.html","113d4f228df0188cdea6bd615f33e7a0"],["/categories/dev/page/2/index.html","52b8ff82b2243c4fed4d21e91169e659"],["/categories/maintaince/blog-setup/index.html","989135aeb46e16f70ade2289410b7e19"],["/categories/maintaince/index.html","1d3e2e2d78906b5491046077dcf7316a"],["/categories/maintaince/macbook/index.html","9e504b03692bcf9662c8a42a74e258ad"],["/categories/maintaince/router-config/index.html","b4f48a4d51b24ad5caceb456609044d8"],["/categories/notes/index.html","cf0b94b8c2f916710d2b2c98c74c1229"],["/categories/tricks/android/index.html","2501cbfea9e75f519282233897be2629"],["/categories/tricks/index.html","fcd19af0ed439f1c3d7c7f69c4d5e397"],["/categories/uncategorized/index.html","597111b06134b234167aad228a6b1f0e"],["/categories/works/Front-End-Dev/index.html","65ace7734d3096090daf40fb90068fcd"],["/categories/works/csharp-wpf/index.html","fa8f3b4fa55ce43b6aa85518c2c13f32"],["/categories/works/index.html","17ce5f06967faa28244803779399c037"],["/css/seichi.css","42693f35c4c482207368dd363ea27373"],["/css/style.css","a81f79e7bf311785886f2c1c31c8e4d4"],["/google311213f0c8d812a9.html","51f1ee3c2f13a21a1a40b3dae4954454"],["/img/coderwall.png","1976fe70f1ee8ed243e0975402e06a2d"],["/img/delicious.png","952d9b54d8bcfe7b998f67ff48c4dbce"],["/img/douban.png","d42a163f932100e621d22732db34ecdb"],["/img/facebook.png","4bd685f6c9fdaccabf07bdd52173facb"],["/img/github.png","3c4b6267a1a3fedebdc7d089610ecfe7"],["/img/google.png","c385f5304465716b2d6c9ada94c657ab"],["/img/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["/img/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["/img/linkedin.png","4c72c4896f3c23f736cb1ad08f0c866e"],["/img/mail.png","38a7b8302dac028bf03b22d228938abf"],["/img/pinboard.png","9b6186cb97adbe50311f94e50f2392cf"],["/img/pinterest.png","e1b8e655d1b99b40ebcbd96977ae234e"],["/img/rss.png","ec8cf9b5a98011aa75cc0a4f25024dc9"],["/img/scrollbar_arrow.png","be5381cedbd6b778b1d92e224fd71cf7"],["/img/stackoverflow.png","039128ececb47b33bccedd98dc9fc809"],["/img/twitter.png","d2289a4936fefa41d9f92cf89939be5b"],["/img/weibo.png","b382032b316ee38c6d537fe9d36ae54c"],["/img/zhihu.png","e6352c0e1957beef3009268ae747c3aa"],["/index.html","521139e2e3a3c76d68fa0ccc6e7d28d4"],["/ja/2015/03/WNDR4300-setup-log/index.html","cd8f85d756980326628d0d0c78c978bc"],["/ja/2015/03/android-hostname-change/index.html","ad5d264d87376939d1e6cb93bcdcd283"],["/ja/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","ab032876508513fd6a7ca793fdee875e"],["/ja/2015/04/android-chrome-issues-with-webpage/index.html","f7b576bb0f8d0aae865ff35a0d5faa14"],["/ja/2015/04/cpp-study-log/index.html","5cf120fbfa3cdc9f39657de5d20dea11"],["/ja/2015/04/github-pages-ssl/index.html","805efa44c0438652470106cb7fdc8d8f"],["/ja/2015/04/hello-world/index.html","18e0a754119ec43ab206b3670303a0d4"],["/ja/2015/04/hexo-setup-log/index.html","f8afa47550a51e8e43696530f5b2b5ad"],["/ja/2015/04/self-copy-cd-inazuma-1-html/index.html","6d63521b7f5381fd49f37225e07262f6"],["/ja/2015/05/cpp-inherit/index.html","599c03dff3d190bee2153ef28dcf3aec"],["/ja/2015/05/cpp-polymorphism/index.html","f8bf99b6f71915690719b40ddc2cbf86"],["/ja/2015/09/android-root-ota/index.html","54e179218c9928aa0adebc81f92fd8eb"],["/ja/2015/09/java-learningNotes-1/index.html","67b8c4b2ee74688ad564bf6686b5cdb8"],["/ja/2015/09/newblog-newlife-2015/index.html","a4a7b984373601eb159cd72cce3ebc26"],["/ja/2015/09/router-rebuild-2015/index.html","426ef92cf0ab10b5aac36c9c0a3dde19"],["/ja/2015/12/2015-12-21/index.html","36ed9c81c00e1808b51446d314481d61"],["/ja/2015/12/PixInTouch/index.html","f6012579f86050f5534b06921862803b"],["/ja/2015/12/git-study-1/index.html","b7ab99dff445dc9f8b3958c7ce3aece9"],["/ja/2015/12/hexo-backup-and-migrate/index.html","fc746b7c526e6cf2b0593c3d139e57de"],["/ja/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","fea17053c3df15783cfeda4b0d0b8e91"],["/ja/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","ac764ef5df566c530c41c902182c4ca5"],["/ja/2015/12/router-reconfig-2015/index.html","e4dd1c2521500ff9d1a502671aafb2e2"],["/ja/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","81d0e4815a47b709eac1d674d2cf59c5"],["/ja/2016/01/2016-stepping-further/index.html","c7549d0a5c9776f137d28217bc19085e"],["/ja/2016/01/Android-Study-1-22/index.html","3fbc8e72ff789e60c92161d596064a1c"],["/ja/2016/03/2016-03-20/index.html","d6b092c3fc47d6a844843f5ceea20643"],["/ja/2016/03/GSC-535/index.html","50261ff49935623d4f179aa05f64fd69"],["/ja/2016/03/gulpjs-1/index.html","98780fca64ae8aceb1416a6cf325da73"],["/ja/2016/03/hexo-theme-paper-white/index.html","143ccebfe4a6ba49d3281a4d5561263c"],["/ja/2016/04/2016-04-19/index.html","4fd0329a4b77198772e65985d6cd21fa"],["/ja/2016/06/2016-06-16/index.html","ba33cd9b1a17a8186faf6933fad27470"],["/ja/2016/09/2016-09-18/index.html","0fcf1097f42af78598abb2fb2c4fdb2f"],["/ja/2016/10/2016-10-27/index.html","9d70c5c312859ba0a0ca5d7f5fee9939"],["/ja/2016/12/config-switchresx-and-2khidpi/index.html","2655dd778717b8e288d341f7f9b5a5cf"],["/ja/2016/12/improve-duoshuo/index.html","ff6ad01fd061b01c355ef5f085c2d23c"],["/ja/2016/12/use-travis-ci-your-blog/index.html","644c2ee55552b8e6246aa48b737ced7f"],["/ja/2017/01/2017-iyahoi/index.html","d27bad9cebea7b2a476140bd12fcbe55"],["/ja/2017/01/webpack-amd/index.html","1de315820884f1f6be38ea094244ca24"],["/ja/2017/04/kotobukiya-syaoran/index.html","c1af9cf03b8eb453e97d3f301f5edf33"],["/ja/2017/04/macbook-and-surface/index.html","0e2c913e0c2143e5ea017f50da0ac4a3"],["/ja/2017/04/uc-hyakuya-yuichiro/index.html","721972a561c2b223c6478c4da0293278"],["/ja/2017/06/noragami-seichijunrei/index.html","385175a52c7afcaaefd876323a78c022"],["/ja/2017/08/cross-compile-55-libev/index.html","88ecf5db2b4ac7b7eaa048a84607c0ed"],["/ja/2017/08/explore-service-worker-working-lifetime/index.html","a2da03aed9d65d65d40f86c912d20d92"],["/ja/2017/08/hello-jp-world/index.html","6bbc2dbb135a103e122006974a28a857"],["/ja/2017/08/kiminonawa-tokyo-seichijunrei/index.html","5973ba0922be24b2d366e81b1eb9a9a8"],["/ja/2017/09/record-user-login-status-methods/index.html","55a14186afb991d9b083119c6f7801b9"],["/ja/2017/10/vue-typescript-early/index.html","3f4eef18337398c0cd6874ec13cfbc03"],["/ja/404.html","9d3d39ed0c4174205c6311daef68f53d"],["/ja/about/index.html","fc88e4e40fc7c655d22c5d85ab8f6d82"],["/ja/archives/2017/08/index.html","5c6454a6174095f34d8f55c207ef3319"],["/ja/archives/2017/09/index.html","fa7607a289310a1444b6d35152cae923"],["/ja/archives/2017/10/index.html","ae9f09c742959eb7b403472cdaf12cc2"],["/ja/archives/2017/index.html","f1b4bb2c4a99a1f6cb3e2578045a9fcd"],["/ja/archives/index.html","c458f7bae53dbf7cb0551346a926b4de"],["/ja/categories/dev/Front-End-Dev/index.html","cf62bcddfbc46197a3cae8058e872240"],["/ja/categories/dev/index.html","df46ffa5b8f930e17ef61299b51c591d"],["/ja/categories/uncategorized/index.html","9b50e61e600ef554585a77f21d656571"],["/ja/index.html","97888c668a8ae4fba92a959479b17027"],["/ja/nihongo-test-page/index.html","c1eb3910ea6e543c77ce4c9d4b1ce0d9"],["/ja/resume/index.html","4578a97ba23aa9bb748bd2b1541d56fe"],["/js/instagram.js","7d7a9e2e7286ba2d5b6d12068214f0c3"],["/js/jquery.lazyload.js","28c23bc40080d31144776e9a8736837f"],["/js/main.js","2e92f29b0cd90bddc062915eb46a858c"],["/js/mobile.js","dc84e1287e89e3c1bba67fd47b8656b1"],["/js/nextpageajax.js","c3bde8d7bb1f967fb319f57a187ea51a"],["/js/pc.js","631b535186aab0e262485ee2bf9da628"],["/js/ripple-effects.js","b9c11903da0ef5c3d790b41369c3137e"],["/js/share.js","de52ac3d43e43c1951a08b0804458a8e"],["/js/totop.js","661822968b58fd439f46bd54031238d6"],["/nihongo-test-page/index.html","83cf661d4b97113c683bfe428314aaea"],["/page/2/index.html","ea2ab5f4cffe61d87f0b97dbad907383"],["/page/3/index.html","f2045d95daefca16865e4b23c4ae905e"],["/page/4/index.html","6f76c53fa69da26b820c073f827ede78"],["/page/5/index.html","e14333f91020850bd25e2276410d40c9"],["/photoswipe/default-skin/default-skin.css","426e8908d7426603ca203b6d16281b1e"],["/photoswipe/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photoswipe/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photoswipe/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photoswipe/photoswipe-ui-default.js","0c9196aa8943ce8a8045c9f4cc62915c"],["/photoswipe/photoswipe-ui-default.min.js","9517baca43cd4e9cb23ff337fbc1baa1"],["/photoswipe/photoswipe.css","7dc0df107159e1be66d4464171561e5b"],["/photoswipe/photoswipe.js","a8d26ff34943c859884acbd6b2531315"],["/photoswipe/photoswipe.min.js","f5cd6479c4e4682545a9603e6b50c741"],["/setup-log/blog-setup/github-pages-ssl.html","d5e315a4f7725d0c5a828ab2ac48dfe3"],["/sw-register.js","84971243948aa022e9f0b8922cc92ea1"],["/zh-cn/archives/2015/03/index.html","4b2b4943b9d9944c4102018783f171f9"],["/zh-cn/archives/2015/04/index.html","41b456285d46ce30e9d3bfeaee3d83ab"],["/zh-cn/archives/2015/05/index.html","b10a9b545ee39ac6da815289a9426646"],["/zh-cn/archives/2015/09/index.html","8795bb2c0c0931ce87d9811cb073aacd"],["/zh-cn/archives/2015/12/index.html","2654b545f01fe67cb29394f36fe44bcc"],["/zh-cn/archives/2015/index.html","701664048460982e621c822b07a733cd"],["/zh-cn/archives/2015/page/2/index.html","58ad44c6bd2b94180eed8b21a3c1d57b"],["/zh-cn/archives/2015/page/3/index.html","6d33452532b4fc362d89104eae898d76"],["/zh-cn/archives/2016/01/index.html","b437eea95a327c77a1772a73c6f60856"],["/zh-cn/archives/2016/03/index.html","0472c93216d18570ec6cede83e19ce37"],["/zh-cn/archives/2016/04/index.html","bad1c575088cee125614348707642fbf"],["/zh-cn/archives/2016/06/index.html","6eba6687e5c35e4c4ce219023805ddc3"],["/zh-cn/archives/2016/09/index.html","66f2146402ba04df20a6cb873c2aa934"],["/zh-cn/archives/2016/10/index.html","96f7db3e370c81dd61fa7aa58b63e5df"],["/zh-cn/archives/2016/12/index.html","6b2f2455012c39a470d9638ec12b8831"],["/zh-cn/archives/2016/index.html","9058a12897630b0517f6cd838976732e"],["/zh-cn/archives/2016/page/2/index.html","9424e2d585e34fe37c421bcc0a391ca8"],["/zh-cn/archives/2017/01/index.html","bb57efc7ef3fba9fe8389d618303087b"],["/zh-cn/archives/2017/04/index.html","4b6df26c0b40f10f866d2246e0c95c68"],["/zh-cn/archives/2017/06/index.html","b35659764a8aa071aab737c927ac41af"],["/zh-cn/archives/2017/08/index.html","ab2ae1c30b5315209d9748e5f37fb05b"],["/zh-cn/archives/2017/09/index.html","e5a6f068657590c772a444adf7729ee2"],["/zh-cn/archives/2017/index.html","a3ff0304bcb2542b7205f4ef8215f9fe"],["/zh-cn/archives/index.html","dec5fd245dce0fa76ffc31fe1bbeafa8"],["/zh-cn/archives/page/2/index.html","92818f1c9a01636a13bfc5f00d1a782d"],["/zh-cn/archives/page/3/index.html","8e7b22304268b2a28fb8d8afd7edf6a5"],["/zh-cn/archives/page/4/index.html","13b8e2fec32853b65eb1c821420a6123"],["/zh-cn/archives/page/5/index.html","46e51e8aa4770d544433595a9b376024"],["/zh-cn/categories/ACG/Music/index.html","ea19c42c04fa1912fcaeb249ba137a8c"],["/zh-cn/categories/ACG/Music/self-copy/index.html","bec9e7bc4ad80f1fa95f77e2da54a074"],["/zh-cn/categories/ACG/Travel/index.html","c30442a60e950d8e09b22f36ed1e6e3e"],["/zh-cn/categories/ACG/figures/index.html","c4eff194274c0791bee44c1252b1a72c"],["/zh-cn/categories/ACG/index.html","bfabb72f4e6bf75ac069aaa5da58c6d7"],["/zh-cn/categories/dev/Front-End-Dev/index.html","282e2eace63ec9a3eb1a9b1ee1c6b0a8"],["/zh-cn/categories/dev/HTML-CSS/index.html","0ce573419e93413754bd40892b933418"],["/zh-cn/categories/dev/android/index.html","bbc6c2f7c1c484e4bd2ba02caf820081"],["/zh-cn/categories/dev/cpp/index.html","4b0a2fafe0855e26a189c1074d691dba"],["/zh-cn/categories/dev/git/index.html","8aa3fd7b083463053608232ea2db00a5"],["/zh-cn/categories/dev/index.html","433747c79ca8afa3394d8477da157042"],["/zh-cn/categories/dev/java/index.html","b3e5e5c85df3189d5b58d28c7da13295"],["/zh-cn/categories/dev/page/2/index.html","0dd11c02865aefcf721fcb20e6c4f7b7"],["/zh-cn/categories/maintaince/blog-setup/index.html","4d417fdae99a61fb94e1802e756f56f8"],["/zh-cn/categories/maintaince/index.html","7746c11a6a74f25e17c1784254585e52"],["/zh-cn/categories/maintaince/macbook/index.html","bdddfeaf952f0a2b19a9aa68452c39f9"],["/zh-cn/categories/maintaince/router-config/index.html","670014e532004a252726bea64a4dae02"],["/zh-cn/categories/notes/index.html","2191d0b3982c10594a01e3e74c106076"],["/zh-cn/categories/tricks/android/index.html","98f993ffed9e28a75f1ea69930e400ff"],["/zh-cn/categories/tricks/index.html","a92f6abdc4adf478f47e2a8c1ff1bf58"],["/zh-cn/categories/uncategorized/index.html","dfc0b944a90b0076629b56171e83d7a2"],["/zh-cn/categories/works/Front-End-Dev/index.html","db327d22e9284e900e7b1e91063140a9"],["/zh-cn/categories/works/csharp-wpf/index.html","a3f4d063ac660d0585685eaaf023aea6"],["/zh-cn/categories/works/index.html","3539dfa8c5c69a5c6947b318bfcc1d91"],["/zh-cn/index.html","0b9884bdd16c1e26eaaed5aefa23f340"],["/zh-cn/page/2/index.html","10217e77057034a964f9e009c87df639"],["/zh-cn/page/3/index.html","4f455f6558c03737ccbc32cc4b312782"],["/zh-cn/page/4/index.html","7f69cd740ec19c504606971085291bf8"],["/zh-cn/page/5/index.html","22d2f2e3d5773c482844581cdc3dd4a2"]];
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
