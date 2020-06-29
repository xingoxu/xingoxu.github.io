/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/03/WNDR4300-setup-log/index.html","0d7673e0d53636a98bda221490675619"],["/2015/03/android-hostname-change/index.html","dfc5338b5dae9a4de92a3319f6df66a5"],["/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","89098be3950830117353c50f8c1e8db1"],["/2015/04/android-chrome-issues-with-webpage/index.html","9caf6a419cfdfe42c5824796d0558050"],["/2015/04/cpp-study-log/index.html","66e9df8e17fb55175fb5b923868867f6"],["/2015/04/github-pages-ssl/index.html","78421459ba09f3016817bab09096ab28"],["/2015/04/hello-world/index.html","24c3d072067f242e2356eee5d8e128ae"],["/2015/04/hexo-setup-log/index.html","9701c17ae4e3169886fc1fa92f89a53b"],["/2015/04/self-copy-cd-inazuma-1-html/index.html","966eafa62bc5862d4df13753a4570f3a"],["/2015/05/cpp-inherit/index.html","53a27ea33c200d257ad29847f6204692"],["/2015/05/cpp-polymorphism/index.html","e5212fdf81789330aee5d33fed195c2f"],["/2015/09/android-root-ota/index.html","75287cfb1cb6d0afd39780d8211bbab9"],["/2015/09/java-learningNotes-1/index.html","74e39a02c2785ed20175de027a5391e0"],["/2015/09/newblog-newlife-2015/index.html","e3a83014fa17944cf0bc882d3b456c20"],["/2015/09/router-rebuild-2015/index.html","4c614f5b3a63064f76c090ba0ba33d82"],["/2015/12/2015-12-21/index.html","8d5d68ce109aae1a783f225293be040f"],["/2015/12/PixInTouch/index.html","346048f53d7f8794253a80f1f6324c45"],["/2015/12/git-study-1/index.html","7b51a9ccf08e883f7a357a4aedf6e14f"],["/2015/12/hexo-backup-and-migrate/index.html","44a58e04be2857191b34da2b7f64adde"],["/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","5fc6bf636e360a94c662265ef3e0fe3a"],["/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","ebaeed1afe366d28efcad64b64c0514d"],["/2015/12/router-reconfig-2015/index.html","fe595f74ccaa6216e7089e846d5b36cf"],["/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","885518d8d3ff21b9371a5afd18a674fc"],["/2016/01/2016-stepping-further/index.html","6f399960b496e9d73e2346222795b81f"],["/2016/01/Android-Study-1-22/index.html","5aa62d21828cb2d535c1773ea91c24b7"],["/2016/03/2016-03-20/index.html","a58dd0644b3ea94eba94903b83324c2e"],["/2016/03/GSC-535/index.html","6156846ecceb195f57eceeccba4bd7ff"],["/2016/03/gulpjs-1/index.html","eef800f1191c68b9571608287c254167"],["/2016/03/hexo-theme-paper-white/index.html","7c3672dc064a7bd3cc8174d7053b50ca"],["/2016/04/2016-04-19/index.html","d43c5618aecc4554239213e7e4a392c0"],["/2016/06/2016-06-16/index.html","40db7531fdead6583fe4c4de27ec6075"],["/2016/09/2016-09-18/index.html","e6413b07c3a20d9d07b0187deb2a4dfc"],["/2016/10/2016-10-27/index.html","ae195973531b7f41004b4453d06890ef"],["/2016/12/config-switchresx-and-2khidpi/index.html","e26cbb2ada2c4f54d3bb17fbc94b6988"],["/2016/12/improve-duoshuo/index.html","6e5104e9d3795a4b7433b36117daba8c"],["/2016/12/use-travis-ci-your-blog/index.html","8929c03994fbb2a4f3ea943f02bf6103"],["/2017/01/2017-iyahoi/index.html","28924affd434a4d8d838d564943d1d83"],["/2017/01/webpack-amd/index.html","b2b7538c5e1df4ec1710e97743897b54"],["/2017/04/kotobukiya-syaoran/index.html","ad9d60365855f75e6b6cb40fa2884da2"],["/2017/04/macbook-and-surface/index.html","1ed92129ba9453e6ed45bc91743ad3d7"],["/2017/04/uc-hyakuya-yuichiro/index.html","2f207cc57009e86ca4797d9969fed4fd"],["/2017/06/noragami-seichijunrei/index.html","f5e38094c2b9b2250622b20259f860e1"],["/2017/08/cross-compile-55-libev/index.html","8a1da9caeb211ea0967c66ffaa0f7cd9"],["/2017/08/explore-service-worker-working-lifetime/index.html","4422b66b9e9d09a5b4eef5a1a2f1de6c"],["/2017/08/kiminonawa-tokyo-seichijunrei/index.html","9cc8d7d4c4961e0ce739c61f3cd3a44e"],["/2017/09/record-user-login-status-methods/index.html","dded752fb3e8d4d88066dcb4f4e5591e"],["/2017/10/vue-typescript-early/index.html","0c20947adbadd3183ce179b818f9f889"],["/2018/04/2017-end/index.html","1ee81393008323f89aff64eb5e7a0121"],["/2018/04/twitter-account-activity-api/index.html","98bc8aa103893c751a7d1dd617c9d58c"],["/2018/05/buddy-complex-seichijunrei/index.html","caa24c59eb204de1075ce89746309931"],["/2019/05/2019-05-16-record-jp-digital-TV-on-nas/index.html","8ae0ed60275bb3f1c4575761fa7899a5"],["/2019/05/2019-05-17-google-io-tech/index.html","c556df081a68bcbf76ba765f7b009cb3"],["/2020/06/cls/index.html","c2db74b2f47c14f8d6dd1ab6eafa3cfe"],["/2020/06/try-serverless/index.html","d6cac12218843dc76bb8b73b22310fcc"],["/404.html","cd8dc3146132577cb4b5efb9ec7f3c3d"],["/about/index.html","6ef7bba26c169314185cc9dccdece26f"],["/archives/2015/03/index.html","069909a06b267b89bef359f502bbd9ac"],["/archives/2015/04/index.html","bc2160e930e2126dadd519b773f2e7a5"],["/archives/2015/05/index.html","9a6813f21df44f1933a2fea59462ee03"],["/archives/2015/09/index.html","d83c0ecfb2cc12021c1ccf00da42ba77"],["/archives/2015/12/index.html","7040e1c0c1b4411a725ef5d799d610b7"],["/archives/2015/index.html","a875caf702cfc7a530dd0456cf8d3052"],["/archives/2015/page/2/index.html","e4ecbe16d6164d52849dd231d70bbebd"],["/archives/2015/page/3/index.html","3d6a04b0a06806949ce9e93295a84df5"],["/archives/2016/01/index.html","74b14c8e8d8b2412ef40cbb4cb4f52f9"],["/archives/2016/03/index.html","c09c8ae8883e117c32b36cf22ca4a8b8"],["/archives/2016/04/index.html","7b0d01eb06ac58c8710ee070c52d4751"],["/archives/2016/06/index.html","a93283e93428865120af3e360d24613b"],["/archives/2016/09/index.html","0b0f0cb3599a7c6f7a5de9e050f2ab83"],["/archives/2016/10/index.html","813e337dc37b50b9da81faf76bf43c6b"],["/archives/2016/12/index.html","55f8232bcd718f052d24516d760c42f2"],["/archives/2016/index.html","ca4fa2b1161102e6fab3eaeb097642ea"],["/archives/2016/page/2/index.html","3e27329238523305e281fd37be751565"],["/archives/2017/01/index.html","9ad6cb3e85e5ca19c7234dda0b814353"],["/archives/2017/04/index.html","5788332dc96a0ba8a03d5741d74462b5"],["/archives/2017/06/index.html","32edb3a670f1e37abf4ba1b2af570fba"],["/archives/2017/08/index.html","1535c0e7c8cbdd2fa95dd31caa0f1259"],["/archives/2017/09/index.html","4060b6d2c35b28f44984ce0b5d9499ea"],["/archives/2017/10/index.html","6251fbeed0c3a02e430df65b2439fbb9"],["/archives/2017/index.html","02b92a59513e2610682e169e08e68e4c"],["/archives/2017/page/2/index.html","bdb53d4b76a27aa755b8b152b9d94efc"],["/archives/2018/04/index.html","f236b55358852f7f38de0c5a778f407e"],["/archives/2018/05/index.html","5584fb09b1d42cf8308ccf1269e627e3"],["/archives/2018/index.html","7d560adf8d8a746801be45287aa04aba"],["/archives/2019/05/index.html","f422eeb6e4d14f1617a636d38f95ba94"],["/archives/2019/index.html","fd5dd18ef6af0e4ec3103e7fa3e3dc5e"],["/archives/2020/06/index.html","4aad075f53a7812d8e4c5be8003b0c65"],["/archives/2020/index.html","e8cb9b3df87cc2215939f978ad8c5b4f"],["/archives/index.html","3ff5687c31e1baa3a03a0eca89285037"],["/archives/page/2/index.html","82f56959b65d2e71d81fa17bfaa6e5d4"],["/archives/page/3/index.html","961ca420cb9d8e9b3ef92856c5660085"],["/archives/page/4/index.html","a8b0eb883570691c88f0747856e5b211"],["/archives/page/5/index.html","947688323f8040c825f684901f50948e"],["/archives/page/6/index.html","0cc36a7598896c5e96e5c8da662791c1"],["/assets/images/about-me.png","a066d06c3d9d1fe56c4d921cec7febf3"],["/baidu_verify_YbTSlpWIUJ.html","779049c3a50695ceb3a388ce1e8bc1b9"],["/categories/ACG/Music/index.html","55f8304e77182ebefbe1bca90eb6b1ac"],["/categories/ACG/Music/self-copy/index.html","dcde1f00c678297ff0f7fecbce6578bd"],["/categories/ACG/Travel/index.html","2d19c42f4f99fe9098556e69be9349a1"],["/categories/ACG/figures/index.html","abcfc903c155a39045f7a2c92ef1d53e"],["/categories/ACG/index.html","aa0a507769bb9e49417d54dad7156e41"],["/categories/dev/Front-End-Dev/index.html","64f3a602483540be9bba4efd41958f53"],["/categories/dev/Front-End-Dev/page/2/index.html","d72bda1d2dca5a78d8e738ea158615a7"],["/categories/dev/HTML-CSS/index.html","2e444ef1ef51cad63b272935a7b66d6d"],["/categories/dev/android/index.html","8f67db3a0bd627f504e04468c5353ff4"],["/categories/dev/cpp/index.html","fe8e7717ccd1e55e941a1a3d7e6b06fb"],["/categories/dev/git/index.html","963b61549f8c210751994f5267210511"],["/categories/dev/index.html","1cb453efabe56c7a1536a7541d14fd0f"],["/categories/dev/java/index.html","129d56fe53256913d1df53738686f6be"],["/categories/dev/page/2/index.html","836efb3a5467b8df1c20bebd70def54f"],["/categories/dev/page/3/index.html","8e2aa32995f6cac7e74bde2eab87cfbf"],["/categories/maintaince/blog-setup/index.html","f1dae808fed75aed51286be8703ce85b"],["/categories/maintaince/index.html","5ad3701b07654a232f21b4d07758ce50"],["/categories/maintaince/macbook/index.html","a127173a7ede37236d750c3a409b80d7"],["/categories/maintaince/router-config/index.html","3f2be1c4c48b292e8b0bcc0c783b5171"],["/categories/notes/index.html","9b36cd9cf71cd39307e29dc83e1bf58d"],["/categories/tricks/android/index.html","57bf430fb188fdf2e919d7f42f94d552"],["/categories/tricks/index.html","8ad98f63383ba429377089c2e5f60549"],["/categories/uncategorized/index.html","211a3acd35701eeaa81d87962b5fcaf8"],["/categories/works/Front-End-Dev/index.html","a9176284df30aacf06a2c1d8f06a005d"],["/categories/works/csharp-wpf/index.html","1cc56120d9c9f4c7b654e4c8f7b7356d"],["/categories/works/index.html","47dfaeecc3604cd46c248fa9c3a7343c"],["/css/seichi.css","c60ad00990790aacbe0a9ff08766c515"],["/css/style.css","e3abc56736917946e8536ef38cc2c5cd"],["/google311213f0c8d812a9.html","51f1ee3c2f13a21a1a40b3dae4954454"],["/img/coderwall.png","1976fe70f1ee8ed243e0975402e06a2d"],["/img/delicious.png","952d9b54d8bcfe7b998f67ff48c4dbce"],["/img/douban.png","d42a163f932100e621d22732db34ecdb"],["/img/facebook.png","4bd685f6c9fdaccabf07bdd52173facb"],["/img/github.png","3c4b6267a1a3fedebdc7d089610ecfe7"],["/img/google.png","c385f5304465716b2d6c9ada94c657ab"],["/img/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["/img/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["/img/linkedin.png","4c72c4896f3c23f736cb1ad08f0c866e"],["/img/mail.png","38a7b8302dac028bf03b22d228938abf"],["/img/pinboard.png","9b6186cb97adbe50311f94e50f2392cf"],["/img/pinterest.png","e1b8e655d1b99b40ebcbd96977ae234e"],["/img/rss.png","ec8cf9b5a98011aa75cc0a4f25024dc9"],["/img/scrollbar_arrow.png","be5381cedbd6b778b1d92e224fd71cf7"],["/img/stackoverflow.png","039128ececb47b33bccedd98dc9fc809"],["/img/twitter.png","d2289a4936fefa41d9f92cf89939be5b"],["/img/weibo.png","b382032b316ee38c6d537fe9d36ae54c"],["/img/zhihu.png","e6352c0e1957beef3009268ae747c3aa"],["/index.html","e1bf6b1150882e3abe0e8b915505df75"],["/ja/2015/03/WNDR4300-setup-log/index.html","002aaccc35bd8d53aa14e19dd6ebf778"],["/ja/2015/03/android-hostname-change/index.html","2298655726f83a28f46e3af980134202"],["/ja/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","f825861f1114b64358064cc3fe3ce54b"],["/ja/2015/04/android-chrome-issues-with-webpage/index.html","840fc2e830789a8b03454b016d32b290"],["/ja/2015/04/cpp-study-log/index.html","3015d0b54fec377bcef725247361c24c"],["/ja/2015/04/github-pages-ssl/index.html","477a7dca3ed3a01d9529079f6342182c"],["/ja/2015/04/hello-world/index.html","f29143a7125ca863b58d3f8648e3061e"],["/ja/2015/04/hexo-setup-log/index.html","970662e5c82cd8cbc690db2768a14b1e"],["/ja/2015/04/self-copy-cd-inazuma-1-html/index.html","2f1f53d40c67464d0c93d328fb87659b"],["/ja/2015/05/cpp-inherit/index.html","6dcf57be1b8e3535d8f94dec27e3f769"],["/ja/2015/05/cpp-polymorphism/index.html","d5c5eaab41079a3e95e2573cf913efdd"],["/ja/2015/09/android-root-ota/index.html","03cc3f7815ebe820285569306ae6dfe9"],["/ja/2015/09/java-learningNotes-1/index.html","6d68560f0d9bc28516145f739d528926"],["/ja/2015/09/newblog-newlife-2015/index.html","88cb665c8f69efa512d0fc60c6e8a213"],["/ja/2015/09/router-rebuild-2015/index.html","4f1d55721fef1301bf052b541a0819d1"],["/ja/2015/12/2015-12-21/index.html","203dd480c4eeea1279aec238a6c0f5e8"],["/ja/2015/12/PixInTouch/index.html","ba5dfd6d4313c98cb439809df66ecd84"],["/ja/2015/12/git-study-1/index.html","eb796fb8bd96fc06d3f498ff62af6394"],["/ja/2015/12/hexo-backup-and-migrate/index.html","424c98888d91002d338002ff2ba5c1ac"],["/ja/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","33e76a1c3ac6e573d8ad921142419b4f"],["/ja/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","3aa7de9e09ee0d304eca16574fe4f610"],["/ja/2015/12/router-reconfig-2015/index.html","248d727413fee47484c4e470a62b4818"],["/ja/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","244686642f22f6fd0aab6015402a02fc"],["/ja/2016/01/2016-stepping-further/index.html","10e85893ce52482f7441bdb3287a7d76"],["/ja/2016/01/Android-Study-1-22/index.html","05a1041a4a8d4225d2b4569323e67e0e"],["/ja/2016/03/2016-03-20/index.html","51dc11e50385a639dec0ca76e5678cf8"],["/ja/2016/03/GSC-535/index.html","a4dc5dcc7cdc488a01fcafe1e065f436"],["/ja/2016/03/gulpjs-1/index.html","6b263d0fe1c068bd79025536c55c9b5e"],["/ja/2016/03/hexo-theme-paper-white/index.html","a39058bfa97b396d0b1ae0b4a3cd712b"],["/ja/2016/04/2016-04-19/index.html","4dc3182728e100fb45b5dcccd10d5bb0"],["/ja/2016/06/2016-06-16/index.html","c3c6404b38e416cb76b1006caea23fc7"],["/ja/2016/09/2016-09-18/index.html","dae0dfbdb99ee262db685514076dc582"],["/ja/2016/10/2016-10-27/index.html","746593ffb4cc6374ab416cdf8f25cdbc"],["/ja/2016/12/config-switchresx-and-2khidpi/index.html","cafcc9bef90554a029ccd0f9b0918d49"],["/ja/2016/12/improve-duoshuo/index.html","93f4146e87371c7b91a70a1683fbfbaf"],["/ja/2016/12/use-travis-ci-your-blog/index.html","5558c941ef5a1aa71e289229a25e0daf"],["/ja/2017/01/2017-iyahoi/index.html","080dce9e358798f4de3cf5996ad2c94d"],["/ja/2017/01/webpack-amd/index.html","adcfad638543ee10a523109bf9d09c75"],["/ja/2017/04/kotobukiya-syaoran/index.html","7c3c8bd9dd45754c60b13a81d03b5881"],["/ja/2017/04/macbook-and-surface/index.html","a280b68b3d7fffb768fc1ae0dd0ebf98"],["/ja/2017/04/uc-hyakuya-yuichiro/index.html","7fe19c53e15d326e5edd93321876f5e3"],["/ja/2017/06/noragami-seichijunrei/index.html","12300b9da06d440c8d9c105814337e5b"],["/ja/2017/08/cross-compile-55-libev/index.html","173c1577ec05b4ac34fc782cd76d0e4b"],["/ja/2017/08/explore-service-worker-working-lifetime/index.html","b1c6b055ac0a20fa8ff4d157241010fc"],["/ja/2017/08/hello-jp-world/index.html","5a16af985b97dd64825ea0f1fa559e55"],["/ja/2017/08/kiminonawa-tokyo-seichijunrei/index.html","2cdb61b6617f44859ac8e48000cb3b02"],["/ja/2017/09/record-user-login-status-methods/index.html","cb2aa5ccd0d7239374a03f4ffc447c2c"],["/ja/2017/10/vue-typescript-early/index.html","5e2c823270277d02647f7bdcce3eaf0f"],["/ja/2018/04/2017-end/index.html","446f9387be9dc3d5897fc71a0e9c60e5"],["/ja/2018/04/twitter-account-activity-api/index.html","767f8abf6fe952d48544e251279321fd"],["/ja/2018/05/buddy-complex-seichijunrei/index.html","0d3311e472a9ef03e745cc2566ab4b60"],["/ja/2019/05/2019-05-16-record-jp-digital-TV-on-nas/index.html","91a7edb7c5a50a1d45e37916f494e67e"],["/ja/2019/05/2019-05-17-google-io-tech/index.html","4eda184c8981f23fdfb5f47fbe536d36"],["/ja/2020/06/cls/index.html","872d3698348185e80b118d3aabc11e68"],["/ja/2020/06/try-serverless/index.html","2e5fa93b852f7c367babb4a58825cc45"],["/ja/404.html","db3e644af1888aea6d5e5efd109ea4f8"],["/ja/about/index.html","9c849f5a50a8698b97ff7592dd4ede64"],["/ja/archives/2017/08/index.html","ee30bc9fb394581ae8e3745820a39e36"],["/ja/archives/2017/09/index.html","e216a4fc1871038b3b59233ed0448a9a"],["/ja/archives/2017/10/index.html","1da6225f7f993c8de8e2af687bc7783c"],["/ja/archives/2017/index.html","af746740e044f5b73c5a7e396ecf0cb5"],["/ja/archives/2018/04/index.html","2489a7cafb5dcf4695cd17ce7a376e2f"],["/ja/archives/2018/05/index.html","1fa075e1c53d124c849f15716b778ee4"],["/ja/archives/2018/index.html","f6edf452a0cf6025625a0aaf9de1a75d"],["/ja/archives/2019/05/index.html","92030ca6525b1ec64d45db5fa25fc461"],["/ja/archives/2019/index.html","fc0f3f620dd34e58d1d38a2cd2c8542b"],["/ja/archives/2020/06/index.html","82a50020ec0692d51da2c7fd8bd51908"],["/ja/archives/2020/index.html","b53db511632aba45df59ac82bcb96f8d"],["/ja/archives/index.html","ca84caa9f7fc1228f6afdd7b61e05c65"],["/ja/categories/ACG/Travel/index.html","cf0210d0d85aa1d590950eeeda3394af"],["/ja/categories/ACG/index.html","f963f7731436039125a4e935814f5aa6"],["/ja/categories/dev/Front-End-Dev/index.html","1d09270d7dcaf443a4832361877ad5f5"],["/ja/categories/dev/index.html","93058832aaa50278dc0583012db9ee7c"],["/ja/categories/uncategorized/index.html","898450d8b524bfe9475f0f5999a04c46"],["/ja/index.html","4dfc5caed1b9bf526e11cf906e9a4ddf"],["/ja/nihongo-test-page/index.html","42ff6d40836f0e786887f728b46fd314"],["/ja/resume/en/index.html","83cb26db92ebebc5d98d4fa0d0c0832a"],["/ja/resume/index.html","a0e52f1ae8b5e354f4e3189a7f317f90"],["/ja/resume/ja/index.html","f5ec89bec6bb1b82c9bb6ec1d22d594b"],["/js/instagram.js","7d7a9e2e7286ba2d5b6d12068214f0c3"],["/js/jquery.lazyload.js","28c23bc40080d31144776e9a8736837f"],["/js/main.js","2e92f29b0cd90bddc062915eb46a858c"],["/js/mobile.js","20029df2609ddd5d2b2d346edbb297c0"],["/js/nextpageajax.js","c3bde8d7bb1f967fb319f57a187ea51a"],["/js/pc.js","631b535186aab0e262485ee2bf9da628"],["/js/ripple-effects.js","b9c11903da0ef5c3d790b41369c3137e"],["/js/share.js","de52ac3d43e43c1951a08b0804458a8e"],["/js/totop.js","661822968b58fd439f46bd54031238d6"],["/keep_origin/affiliate_jump.html","71bf6d72c5d080ec2b3f8ecfae3d71ed"],["/nihongo-test-page/index.html","ac1e4506ebb5a7efbea04b4deffd0586"],["/page/2/index.html","f5892676ba068987f68712d4297c2b4f"],["/page/3/index.html","bf86caa5865c715591b1e6e13973ba93"],["/page/4/index.html","40ba579d1c8d232aca48df7c39b84e1d"],["/page/5/index.html","6e7a838c227c22e9c3eaf132e49b75bb"],["/page/6/index.html","67fbd42053168ad4eb87bf8a693afab3"],["/page/7/index.html","36bb57c60144802d5de136296f9cbd56"],["/photoswipe/default-skin/default-skin.css","426e8908d7426603ca203b6d16281b1e"],["/photoswipe/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photoswipe/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photoswipe/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photoswipe/photoswipe-ui-default.js","0c9196aa8943ce8a8045c9f4cc62915c"],["/photoswipe/photoswipe-ui-default.min.js","9517baca43cd4e9cb23ff337fbc1baa1"],["/photoswipe/photoswipe.css","7dc0df107159e1be66d4464171561e5b"],["/photoswipe/photoswipe.js","a8d26ff34943c859884acbd6b2531315"],["/photoswipe/photoswipe.min.js","f5cd6479c4e4682545a9603e6b50c741"],["/resume/en/index.html","13d8eb96367b7a2b7d1fa9f590785a71"],["/resume/index.html","70458f0e9490dd4897c414efb8f2523f"],["/resume/ja/index.html","7efe5746353dcb291b6860ef5e48f3c2"],["/setup-log/blog-setup/github-pages-ssl.html","d5e315a4f7725d0c5a828ab2ac48dfe3"],["/sw-register.js","ecf1f25b98a3972b93805d5e42c9da62"],["/zh-cn/archives/2015/03/index.html","713a18f68880aac8ab301f895a524b02"],["/zh-cn/archives/2015/04/index.html","768f775c6d6cac5a334c46eb2ae52bc9"],["/zh-cn/archives/2015/05/index.html","f7806ea448d19e01c7ea7734f8771312"],["/zh-cn/archives/2015/09/index.html","16998e19c68f974a627c4d2ffd5207d2"],["/zh-cn/archives/2015/12/index.html","a333b2c1e462fcd96923d940ffd2a193"],["/zh-cn/archives/2015/index.html","98a3c0cf3a53a7a5cff51ef78d6f1de3"],["/zh-cn/archives/2015/page/2/index.html","a4798723cffc822c4dda014461e4eddc"],["/zh-cn/archives/2015/page/3/index.html","6db37c4c14bed97848d90bd6172f6185"],["/zh-cn/archives/2016/01/index.html","ba4f985e603af69743f4a77f4bf4abff"],["/zh-cn/archives/2016/03/index.html","50f63478931fb1bf7e3b75abb7f0c0ad"],["/zh-cn/archives/2016/04/index.html","e2ad94f52af3e7a33d0136fc3652ab5f"],["/zh-cn/archives/2016/06/index.html","c39fbf402d30bbdc9db4ccf84fc3ed5d"],["/zh-cn/archives/2016/09/index.html","ee7ea3aea1220e9a8c7288b177a95d56"],["/zh-cn/archives/2016/10/index.html","e88785445d198ca16ff37c0b69eab615"],["/zh-cn/archives/2016/12/index.html","9bcfc2fc9db1afad48c5083842742e34"],["/zh-cn/archives/2016/index.html","b7b205b4c2e83e5f798ee57f42283a6e"],["/zh-cn/archives/2016/page/2/index.html","cf5651b463ff0e297c405756f7bb472d"],["/zh-cn/archives/2017/01/index.html","e598708ae90941a080538bdab6310cef"],["/zh-cn/archives/2017/04/index.html","428f875e354700b17a9c63b9c121384b"],["/zh-cn/archives/2017/06/index.html","4a7d35657d90524114df36dbe2030a91"],["/zh-cn/archives/2017/08/index.html","c06b6e885b1bc2739788a07513701921"],["/zh-cn/archives/2017/09/index.html","a2ef4afecf4ab519f6d0f5cc093dd912"],["/zh-cn/archives/2017/10/index.html","ef7debee13304ba222707df44c2bc9f2"],["/zh-cn/archives/2017/index.html","be17803ccaa2731b0f233d6e4e576893"],["/zh-cn/archives/2017/page/2/index.html","b59fcd9f7719b48d9720d589299f291c"],["/zh-cn/archives/2018/04/index.html","b46d64b65607b805c50fef239837a268"],["/zh-cn/archives/2018/05/index.html","97e202ef0b094943b66af5c2dcd38382"],["/zh-cn/archives/2018/index.html","c94d8aab6a5615f013ec548e9d4c5759"],["/zh-cn/archives/2019/05/index.html","ec08db12113cee3fd6b0cfba30ec6f06"],["/zh-cn/archives/2019/index.html","5c4155ea307f71905cee6b30054104c9"],["/zh-cn/archives/2020/06/index.html","1450b7e6233104ac323a704a856342d5"],["/zh-cn/archives/2020/index.html","4a719c385a776f622d77af92d5ddfc69"],["/zh-cn/archives/index.html","4e2f8725cd63befabaad245d6f9003e1"],["/zh-cn/archives/page/2/index.html","9f1abb97993d1a68b3ba6958e50eaab1"],["/zh-cn/archives/page/3/index.html","2eee621d6b52ede880fb999d6e9351bc"],["/zh-cn/archives/page/4/index.html","61a2fb149d2fd66d8c3a262064199384"],["/zh-cn/archives/page/5/index.html","df3224d4c3a0081141421791a73044d9"],["/zh-cn/archives/page/6/index.html","a698ea657a9bc68993b9ab4e27f9fe05"],["/zh-cn/categories/ACG/Music/index.html","018acbc7005e0276381ef558ddd3e5b1"],["/zh-cn/categories/ACG/Music/self-copy/index.html","422d64cf497322ff96ecd880807052f6"],["/zh-cn/categories/ACG/Travel/index.html","d77eb7bd14480c0dd030fd37fc28473b"],["/zh-cn/categories/ACG/figures/index.html","7f7b2f1722dca791af2600eb86c6fde5"],["/zh-cn/categories/ACG/index.html","7d9326e0cb0a5a3588d38163d9e46c4a"],["/zh-cn/categories/dev/Front-End-Dev/index.html","544983c4ebd09cbcb3814721ee69edc7"],["/zh-cn/categories/dev/Front-End-Dev/page/2/index.html","5d3906fcefe186a6a9e8d075439e82e4"],["/zh-cn/categories/dev/HTML-CSS/index.html","35ae5fe9adefbb050d55ba789c399222"],["/zh-cn/categories/dev/android/index.html","df10b9d85d392b08473e6291fc61a817"],["/zh-cn/categories/dev/cpp/index.html","c6a37d250718ac0cae4896c0a40b2002"],["/zh-cn/categories/dev/git/index.html","311cd29a93c646fcb39c19d70371d94e"],["/zh-cn/categories/dev/index.html","f24c0b2c76e6a42f6c0acf5c1d0e1948"],["/zh-cn/categories/dev/java/index.html","ce25b4d7c444e0f0bb4148c08f285d2f"],["/zh-cn/categories/dev/page/2/index.html","06c2f3ed8d5d0fc6a785a86a6056b007"],["/zh-cn/categories/dev/page/3/index.html","8378eb9f920761c79063deed4b0fc3f3"],["/zh-cn/categories/maintaince/blog-setup/index.html","c0e37324b4d81aa90a08c6cd3096f7fe"],["/zh-cn/categories/maintaince/index.html","c1d6b830a21777d6264f71cc57a2ee3f"],["/zh-cn/categories/maintaince/macbook/index.html","ccae4ad8157da994018ea780892377b3"],["/zh-cn/categories/maintaince/router-config/index.html","7c1c14660a84c64bd04ac0d34ee19c37"],["/zh-cn/categories/notes/index.html","fd73c846e133ecfa8addd4aa734c05a8"],["/zh-cn/categories/tricks/android/index.html","cfd64f66e346cdef0c401737ca9da97a"],["/zh-cn/categories/tricks/index.html","278f9d32407db54793f58504911951fe"],["/zh-cn/categories/uncategorized/index.html","916f2d4b55c36f179a6ad20f6102d641"],["/zh-cn/categories/works/Front-End-Dev/index.html","461ef8c12b57b55972eb6a39935e2e47"],["/zh-cn/categories/works/csharp-wpf/index.html","37d48407fd89ffdb3207d68c01b3f9ae"],["/zh-cn/categories/works/index.html","d7e460661a6bee23929d57171ae3a7ef"],["/zh-cn/index.html","4c806238e3489840d42b4b1b3123f0b9"],["/zh-cn/page/2/index.html","1d2f3fd5567524d412ae83d22074de18"],["/zh-cn/page/3/index.html","cb3e7744ffba3e89737b4af00bafc4f7"],["/zh-cn/page/4/index.html","cb0db3fbd7ff07e1d58379d1f3528d02"],["/zh-cn/page/5/index.html","1a5ab25ee06fa99581affa44f42c4bf8"],["/zh-cn/page/6/index.html","5ac498506e9f7f5d7bc396f5208eb444"]];
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
