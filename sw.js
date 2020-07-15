/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/03/WNDR4300-setup-log/index.html","bb10fa5e3865b14b13f24b24bf5ad933"],["/2015/03/android-hostname-change/index.html","4108c2ce389117542d6a3e0987382c3a"],["/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","437440ec493305b7a4d09a2847a34602"],["/2015/04/android-chrome-issues-with-webpage/index.html","a37306a390a563bbd4d4a85d760c7d95"],["/2015/04/cpp-study-log/index.html","751932aff4fbb527b2aad226e97b3774"],["/2015/04/github-pages-ssl/index.html","b66757446a3d33ace2c38aa163312f91"],["/2015/04/hello-world/index.html","7407e57d3b7624a73c569462b0d2a6df"],["/2015/04/hexo-setup-log/index.html","a0584be3888326de3adb18fb1e2abb84"],["/2015/04/self-copy-cd-inazuma-1-html/index.html","bf30f12f0be443596f4e967cf35cf3d5"],["/2015/05/cpp-inherit/index.html","ed403cb38f446ca25528996bd06163eb"],["/2015/05/cpp-polymorphism/index.html","ff6f826284637e60c4c8c800796c9bc3"],["/2015/09/android-root-ota/index.html","1d1a57a7230d9320a3d5b07934cda81e"],["/2015/09/java-learningNotes-1/index.html","34ff665864b57c3c28a9363140bc226b"],["/2015/09/newblog-newlife-2015/index.html","8795aa38681363bd5438a394ed232f35"],["/2015/09/router-rebuild-2015/index.html","270dd5c56ce0acc5027a84ca86a9eba8"],["/2015/12/2015-12-21/index.html","0e254035acc44a1cff952e029656d9c9"],["/2015/12/PixInTouch/index.html","75a4a744c7ba9568904b16ca506758ac"],["/2015/12/git-study-1/index.html","2aec56293b74343fe8f234be35003785"],["/2015/12/hexo-backup-and-migrate/index.html","ebde6aa64756904998ac466dce635257"],["/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","5dbf5483a730732cca8b80b2c640f778"],["/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","7434d058e969fc827581fda381f23657"],["/2015/12/router-reconfig-2015/index.html","a3047508bf8cf5a2e62761f4224f315a"],["/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","c810d2d2998cac7badddf41c7beb049a"],["/2016/01/2016-stepping-further/index.html","9ac54c007bff5edc3a0800a00c733f0a"],["/2016/01/Android-Study-1-22/index.html","bc162ca70eb4dc9dada5650d911e9e54"],["/2016/03/2016-03-20/index.html","8c69af3d33aac4f4ecb2f195518a55d3"],["/2016/03/GSC-535/index.html","d1ff3eb089f6816526433c275b7868ba"],["/2016/03/gulpjs-1/index.html","15fbd238349479dbbfc7e9b28d4f849e"],["/2016/03/hexo-theme-paper-white/index.html","899caff2a993546583aa109ce3e7fafe"],["/2016/04/2016-04-19/index.html","44ac85c0297207d2a8f24f2db3e6366a"],["/2016/06/2016-06-16/index.html","4ea5e78d6a8af7af8c85deec9865c649"],["/2016/09/2016-09-18/index.html","93c6b37ecefaf0ae48ccd09ab866476b"],["/2016/10/2016-10-27/index.html","39a450fe2e48e530d6f6410ace569138"],["/2016/12/config-switchresx-and-2khidpi/index.html","fcac237be5bc34609b0d1f62dbdc091e"],["/2016/12/improve-duoshuo/index.html","f627e0156b81c907b08f233a19600c78"],["/2016/12/use-travis-ci-your-blog/index.html","e0998f0e5c5284cae3b17fb78e747673"],["/2017/01/2017-iyahoi/index.html","ee79ae1df6914f07e03a03082c280279"],["/2017/01/webpack-amd/index.html","fdb7be03e82b1a28888a792fbefb925a"],["/2017/04/kotobukiya-syaoran/index.html","0d7301ea80d856581f140d2957788a5d"],["/2017/04/macbook-and-surface/index.html","4155a42705a5a674d546344105d34d70"],["/2017/04/uc-hyakuya-yuichiro/index.html","c401174816113798f6294cc84e06495b"],["/2017/06/noragami-seichijunrei/index.html","bf58888237f706f36428dddbb0ceef1f"],["/2017/08/cross-compile-55-libev/index.html","64e5750d62739d5c6b133816062ef527"],["/2017/08/explore-service-worker-working-lifetime/index.html","09725eaac46ef75d39acc6402a9e49b4"],["/2017/08/kiminonawa-tokyo-seichijunrei/index.html","6f2aefd9a6a883b7e0c00a74faba8dcd"],["/2017/09/record-user-login-status-methods/index.html","a6c1a990d5e0462c14ac7083f84e030a"],["/2017/10/vue-typescript-early/index.html","551db3c2907a27028cb1b3cd87bbd24f"],["/2018/04/2017-end/index.html","b2a4993e47a1ae42a71ea58116f0adb9"],["/2018/04/twitter-account-activity-api/index.html","e4b595598bec076acb88d3aed267e0cb"],["/2018/05/buddy-complex-seichijunrei/index.html","c4d448d0b99c6b71bce0db2ec1d71aa6"],["/2019/05/2019-05-16-record-jp-digital-TV-on-nas/index.html","3252178ea3640aeb7704bdd884dd12a1"],["/2019/05/2019-05-17-google-io-tech/index.html","8ced1aff0cfdbb3ff18c7bb71bac54af"],["/2020/06/cls/index.html","2eb530e7d4c497fab744a2e6fd847306"],["/2020/06/try-serverless/index.html","f36f83236c2e49eacdf27d3b3a495828"],["/2020/07/macos-node-require-path-case-insensitive/index.html","4ce81dead94a430aded158348e675179"],["/404.html","1b54f2fbed4e3a12283add35649ed63c"],["/about/index.html","564479530a2d2561aaf3121a60a3a2bf"],["/archives/2015/03/index.html","2ac3c4b171ffea2c3acd84f2256e9c78"],["/archives/2015/04/index.html","d08535bb4e5cb425f9da63e3179fdf07"],["/archives/2015/05/index.html","c54781cb66082bc8c78eec17ef8f9522"],["/archives/2015/09/index.html","3ac6358da6a8c61a4b87a4bbc62f63d6"],["/archives/2015/12/index.html","7f540269f97b5adc814fb50decd0df3d"],["/archives/2015/index.html","4d0d95966ae27f619e440cbca9b85f20"],["/archives/2015/page/2/index.html","cfcce08aac4a7f786758fc79eeeb50bc"],["/archives/2015/page/3/index.html","e8c1333429a9d411f8dddfe051657068"],["/archives/2016/01/index.html","f5231ff5970249edd664c8735b4efcea"],["/archives/2016/03/index.html","fe983d20473dae31e312d372de433b80"],["/archives/2016/04/index.html","79a8b6241a07287f7280923c12dc03b9"],["/archives/2016/06/index.html","b145e1fc01a9d9e0af3331a1ffdd6e2e"],["/archives/2016/09/index.html","b48d2e4bcff7450553141df00edebeee"],["/archives/2016/10/index.html","5e988ae59a760ce31060da93dca7f258"],["/archives/2016/12/index.html","a8a3cdd98f3eaeebc71ac9914c115223"],["/archives/2016/index.html","5ada33d3db13a187927f5173abc77ea5"],["/archives/2016/page/2/index.html","1defb3ef7162b9d92b513bf3c0ac3057"],["/archives/2017/01/index.html","64114deb27ba0e8b805f8457fd943208"],["/archives/2017/04/index.html","09d2e34fa0e5cb8ea3f503ccfd194112"],["/archives/2017/06/index.html","d190668433e4ae4f93ffd4b971019c6b"],["/archives/2017/08/index.html","42c1154a03d23d8dd1f391c537af2143"],["/archives/2017/09/index.html","e4d21db2ef0d885f61badb2f5073cdbd"],["/archives/2017/10/index.html","e3493fded35c8f44e9703e34a30cd26d"],["/archives/2017/index.html","642ce1ef92673d95ec6f8725070d00d0"],["/archives/2017/page/2/index.html","eb4f49b9e92557270155ea8c8e354fd4"],["/archives/2018/04/index.html","b074107c3f74891bc0ee97cab0ae9c14"],["/archives/2018/05/index.html","6dbe6fc7e2e587abb829bb9e0d3c3560"],["/archives/2018/index.html","a35329071ba95364747ce57abae5c84c"],["/archives/2019/05/index.html","4ddde4de099a3724c47a3796cf175965"],["/archives/2019/index.html","ec4488bae1dd78b2654bc6e4803a8257"],["/archives/2020/06/index.html","74ad40b9d1928a7076b11e0e35e33892"],["/archives/2020/07/index.html","85a3a8c8c7980c1316bd1e8148a114a8"],["/archives/2020/index.html","88698e72554359c781fa4633d2c4510b"],["/archives/index.html","38ee21da39f1bb7d7bee8a124f8fd41e"],["/archives/page/2/index.html","319237d063174a331a3a180e234c09a6"],["/archives/page/3/index.html","4a8e9bbc3e56e6b73d2ce67ef20ee14b"],["/archives/page/4/index.html","71b3d20aa168ac645266ed340732c8f8"],["/archives/page/5/index.html","a2045414b67d85074de43df5e0a17707"],["/archives/page/6/index.html","cc16a7740f017bb41b2fd8a1cf529faa"],["/assets/images/about-me.png","a066d06c3d9d1fe56c4d921cec7febf3"],["/baidu_verify_YbTSlpWIUJ.html","779049c3a50695ceb3a388ce1e8bc1b9"],["/categories/ACG/Music/index.html","86d8ac01bdca3d5837340bdb91895176"],["/categories/ACG/Music/self-copy/index.html","d5a0f0a7e9b2c0ab2975b23f832dc5c7"],["/categories/ACG/Travel/index.html","9e308b4ac8e799f50b759ac855334f6f"],["/categories/ACG/figures/index.html","11e6da8202df905a4dbab7f6c4c1e36b"],["/categories/ACG/index.html","5f9549a2241d82b69dd14524403d4c34"],["/categories/dev/Front-End-Dev/index.html","0a5fb717a10cfce14a72da7f9507edf1"],["/categories/dev/Front-End-Dev/page/2/index.html","19f321365e471cfa0acf6f71efa8abc1"],["/categories/dev/HTML-CSS/index.html","b9579184f287ef5d7e6a71464792a0ca"],["/categories/dev/android/index.html","09778da0af938ab34e0cb2615baeb5e1"],["/categories/dev/cpp/index.html","dee032f173dbd8364a81aaa91473e987"],["/categories/dev/git/index.html","fcbeb8fbfdda24452bd329c2bbefa5ed"],["/categories/dev/index.html","c3fcf1eb17d533c14a740417ef099e90"],["/categories/dev/java/index.html","ea1efbb63747f4844deb11364fc49f25"],["/categories/dev/page/2/index.html","f872c0a57f34b2fc7753e3778c577aa0"],["/categories/dev/page/3/index.html","b90ad6b2c6a1fb2b8bc2e53690711d21"],["/categories/maintaince/blog-setup/index.html","0bd15b08f424f3f441066c963443c003"],["/categories/maintaince/index.html","2c71c87c8996e03f5699730583a0811d"],["/categories/maintaince/macbook/index.html","5c5f5dc787d3700d05d52ebfd15a393c"],["/categories/maintaince/router-config/index.html","662aeca93d182177e56196ed22f7ca48"],["/categories/notes/index.html","40ff7c03ab0cd0faf47aa1a40410268b"],["/categories/tricks/android/index.html","a5b88cf47100a033ad2f2962894830d6"],["/categories/tricks/index.html","442e1860dde147a0b79f0e92edb63d42"],["/categories/uncategorized/index.html","5f003f3ea43e96eb92991663e1200b80"],["/categories/works/Front-End-Dev/index.html","89b0b88b101b60f750570f24e6f599a8"],["/categories/works/csharp-wpf/index.html","b01046bf90c194a9e647f57f52bff0d2"],["/categories/works/index.html","82ceef166bbd5cc3eed2ae2bbd1aaaba"],["/css/seichi.css","c60ad00990790aacbe0a9ff08766c515"],["/css/style.css","e3abc56736917946e8536ef38cc2c5cd"],["/google311213f0c8d812a9.html","51f1ee3c2f13a21a1a40b3dae4954454"],["/img/coderwall.png","1976fe70f1ee8ed243e0975402e06a2d"],["/img/delicious.png","952d9b54d8bcfe7b998f67ff48c4dbce"],["/img/douban.png","d42a163f932100e621d22732db34ecdb"],["/img/facebook.png","4bd685f6c9fdaccabf07bdd52173facb"],["/img/github.png","3c4b6267a1a3fedebdc7d089610ecfe7"],["/img/google.png","c385f5304465716b2d6c9ada94c657ab"],["/img/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["/img/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["/img/linkedin.png","4c72c4896f3c23f736cb1ad08f0c866e"],["/img/mail.png","38a7b8302dac028bf03b22d228938abf"],["/img/pinboard.png","9b6186cb97adbe50311f94e50f2392cf"],["/img/pinterest.png","e1b8e655d1b99b40ebcbd96977ae234e"],["/img/rss.png","ec8cf9b5a98011aa75cc0a4f25024dc9"],["/img/scrollbar_arrow.png","be5381cedbd6b778b1d92e224fd71cf7"],["/img/stackoverflow.png","039128ececb47b33bccedd98dc9fc809"],["/img/twitter.png","d2289a4936fefa41d9f92cf89939be5b"],["/img/weibo.png","b382032b316ee38c6d537fe9d36ae54c"],["/img/zhihu.png","e6352c0e1957beef3009268ae747c3aa"],["/index.html","eb8de7298dd905ff09fe8dff0c488c7a"],["/ja/2015/03/WNDR4300-setup-log/index.html","1ca6bc23713951c6c5d7c52e01ab2574"],["/ja/2015/03/android-hostname-change/index.html","fc0d596086287e6338785987e9c8efa3"],["/ja/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","d9c8e77a3a626e42b1b2985f50ef223f"],["/ja/2015/04/android-chrome-issues-with-webpage/index.html","0205869a50a9a3432cc9c4cd3c8737ed"],["/ja/2015/04/cpp-study-log/index.html","7c096ca84dd83667a5001f3129fa7b8b"],["/ja/2015/04/github-pages-ssl/index.html","8d0dee56d69b37ca25024e7b6f6d92f8"],["/ja/2015/04/hello-world/index.html","6a03a73880982856aa92bdbd136a9543"],["/ja/2015/04/hexo-setup-log/index.html","919fdd938b2157cb726916e1623d84f5"],["/ja/2015/04/self-copy-cd-inazuma-1-html/index.html","ffc34fb2851a16b0af968ec759c33927"],["/ja/2015/05/cpp-inherit/index.html","03db8193fc01a0dc8b692bb4a0d68125"],["/ja/2015/05/cpp-polymorphism/index.html","f522e0e92ed93e3e407d900b53ef9d6b"],["/ja/2015/09/android-root-ota/index.html","527f9f323ddee4f1c8d8e3dc300eae5f"],["/ja/2015/09/java-learningNotes-1/index.html","292fbcdb76d4f3b479d235663f7c5247"],["/ja/2015/09/newblog-newlife-2015/index.html","2671c300093f7f114ea332ef5e4ca286"],["/ja/2015/09/router-rebuild-2015/index.html","e389c074a29fd26696082594c2b79efe"],["/ja/2015/12/2015-12-21/index.html","203578381556e31dee53889eee52c085"],["/ja/2015/12/PixInTouch/index.html","dfa746d1a21ad20817b61a109e0e3519"],["/ja/2015/12/git-study-1/index.html","a055b0804d4e9cd74e14d79fd3533304"],["/ja/2015/12/hexo-backup-and-migrate/index.html","29c4987abe8e9899e38f4697ba0fd47e"],["/ja/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","884328075c3823c565e3fc3450de4509"],["/ja/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","b7f3da42db54784864c12a12c7befc66"],["/ja/2015/12/router-reconfig-2015/index.html","bf04de7587a7324d7fbf309241671fab"],["/ja/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","7310032ef574f288bf3455918063dab5"],["/ja/2016/01/2016-stepping-further/index.html","a0bff95a51f4bc4c5ea9f5c1e4662f98"],["/ja/2016/01/Android-Study-1-22/index.html","3c89dd5af13fa220c8daa47ad2809cd6"],["/ja/2016/03/2016-03-20/index.html","14767ca0f1a308805c4ee4f51c252d41"],["/ja/2016/03/GSC-535/index.html","3db3a82111494b9b0bd3123c54173159"],["/ja/2016/03/gulpjs-1/index.html","2964cffb3c570dc26e6bc75b6f34b8ab"],["/ja/2016/03/hexo-theme-paper-white/index.html","60be17f14224a9028d3431f21a52b9dd"],["/ja/2016/04/2016-04-19/index.html","e152bc765e6640c490beb560d242b446"],["/ja/2016/06/2016-06-16/index.html","47fec09574fa31903f7e50b76df1b2a6"],["/ja/2016/09/2016-09-18/index.html","45510de29fa025a1f7a7ad4c8626d63b"],["/ja/2016/10/2016-10-27/index.html","5e3b888f9a16d3dcef032dd281ff0f20"],["/ja/2016/12/config-switchresx-and-2khidpi/index.html","7a86261c998f22ad9f9e5c3b68b6840a"],["/ja/2016/12/improve-duoshuo/index.html","6f82fc6d3c294ed7461bf07caf9ea53c"],["/ja/2016/12/use-travis-ci-your-blog/index.html","58845e8bd3aea218aff471c49077c5b1"],["/ja/2017/01/2017-iyahoi/index.html","6b0eb9e46037c8cc4045a68bcb8fa3d5"],["/ja/2017/01/webpack-amd/index.html","4e8e535c8f5433376394458dcad01404"],["/ja/2017/04/kotobukiya-syaoran/index.html","4e7bab5d4b22054f86c2d0e4fbfc34ac"],["/ja/2017/04/macbook-and-surface/index.html","163100890930b392295f5562f5a5fad5"],["/ja/2017/04/uc-hyakuya-yuichiro/index.html","70bd7e86e0aa2ec627aa51224707f5a5"],["/ja/2017/06/noragami-seichijunrei/index.html","57288f4accb205dde4a9bfe217923887"],["/ja/2017/08/cross-compile-55-libev/index.html","f1316298108d543b69b4689e6d866e6d"],["/ja/2017/08/explore-service-worker-working-lifetime/index.html","8cd8889f6df23b97c97c3112f5357624"],["/ja/2017/08/hello-jp-world/index.html","e722661bea688b90e928583a4103b37c"],["/ja/2017/08/kiminonawa-tokyo-seichijunrei/index.html","7b0fc9cddefd696113d336bfbcd28109"],["/ja/2017/09/record-user-login-status-methods/index.html","b789159aefc7f4e915ad0b520cf2e876"],["/ja/2017/10/vue-typescript-early/index.html","640e9766dacf97078b7048ec953c6cf3"],["/ja/2018/04/2017-end/index.html","f35bf265ec9a8dac46428a1c6276f3da"],["/ja/2018/04/twitter-account-activity-api/index.html","48aa8c14a1ce1074a24a0996e5df03d9"],["/ja/2018/05/buddy-complex-seichijunrei/index.html","d4962f3ddb003b977f48ceb0ae7934fd"],["/ja/2019/05/2019-05-16-record-jp-digital-TV-on-nas/index.html","06fc0f848ada9c06df3610db329fe039"],["/ja/2019/05/2019-05-17-google-io-tech/index.html","0a74404a86a3f4ed6e475db3101dbd61"],["/ja/2020/06/cls/index.html","2f06dfcea74f141f23793089d49758c5"],["/ja/2020/06/try-serverless/index.html","21c49aa3d828e8370bc4ea2053ccdcb8"],["/ja/2020/07/macos-node-require-path-case-insensitive/index.html","b680cecf369e7057d0a8f5174bec3c4f"],["/ja/404.html","8a812078d3f972ee907a5d0fe27edbaa"],["/ja/about/index.html","32f1911040e1bf4811680d987ffe2295"],["/ja/archives/2017/08/index.html","f528653739bba94128d1f555fa538f4c"],["/ja/archives/2017/09/index.html","a124088400cf2b85350c8076ba5be436"],["/ja/archives/2017/10/index.html","51f1d32102b0e320bf3c5f9d8487b28a"],["/ja/archives/2017/index.html","aa25389908c092dd7b2f8c4735c03632"],["/ja/archives/2018/04/index.html","7f2da25243a96bd4ff75339744954097"],["/ja/archives/2018/05/index.html","7aa69f49b6fa8191628ced2478f04694"],["/ja/archives/2018/index.html","3c1a1c661459df4aff1708f594635007"],["/ja/archives/2019/05/index.html","616b959d96cf2f38f9d9ef10b3ebcb9c"],["/ja/archives/2019/index.html","83cd1df144af0304019c77765c5f7a3f"],["/ja/archives/2020/06/index.html","f3ac47a138d19106c15bb97228a09675"],["/ja/archives/2020/07/index.html","9579ed12fe76757003c5702b5064a819"],["/ja/archives/2020/index.html","af36bf40d11d4256e0fe5ed991452f7b"],["/ja/archives/index.html","e9cc671ed9edb1d8b2ef0311cda7b64a"],["/ja/categories/ACG/Travel/index.html","9fde43a857e9df5f46024b86e27dca11"],["/ja/categories/ACG/index.html","d019ec6dd9213dbceb0b0907daa20a45"],["/ja/categories/dev/Front-End-Dev/index.html","99b90e7ffe16917fada44c07cb7b5676"],["/ja/categories/dev/index.html","331855d449df24f75feced01368f5bf0"],["/ja/categories/uncategorized/index.html","1159cffdae74608cd1097c5f30a1f98e"],["/ja/index.html","3736865c66186fc4dda90ff974c89c3c"],["/ja/nihongo-test-page/index.html","baa3636fbe4797ef7e9e70f74d48fb5f"],["/ja/resume/en/index.html","79bf4fca4dd02c79633dcd93c1541eef"],["/ja/resume/index.html","4a8e12ea001d257daa030dcdc28fcf20"],["/ja/resume/ja/index.html","591b43e263dbd37565bee5da8588715d"],["/js/instagram.js","7d7a9e2e7286ba2d5b6d12068214f0c3"],["/js/jquery.lazyload.js","28c23bc40080d31144776e9a8736837f"],["/js/main.js","2e92f29b0cd90bddc062915eb46a858c"],["/js/mobile.js","20029df2609ddd5d2b2d346edbb297c0"],["/js/nextpageajax.js","c3bde8d7bb1f967fb319f57a187ea51a"],["/js/pc.js","631b535186aab0e262485ee2bf9da628"],["/js/ripple-effects.js","b9c11903da0ef5c3d790b41369c3137e"],["/js/share.js","de52ac3d43e43c1951a08b0804458a8e"],["/js/totop.js","661822968b58fd439f46bd54031238d6"],["/keep_origin/affiliate_jump.html","71bf6d72c5d080ec2b3f8ecfae3d71ed"],["/nihongo-test-page/index.html","b017240483a860d5d1a6dfc283dc7845"],["/page/2/index.html","424b8dc1e6a2d3014209910cd9239c92"],["/page/3/index.html","c3df2a6b7092caca167575bd7e2dcc19"],["/page/4/index.html","e27156bd15dd6d93cc4fe0c089d48a16"],["/page/5/index.html","65fadde1187dccd165b1c06b7462f1d1"],["/page/6/index.html","835e1ff0a038c24ffc8c3bef8ac9b043"],["/page/7/index.html","46977ecbda24fb808421a7c5aae24eee"],["/photoswipe/default-skin/default-skin.css","426e8908d7426603ca203b6d16281b1e"],["/photoswipe/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photoswipe/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photoswipe/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photoswipe/photoswipe-ui-default.js","0c9196aa8943ce8a8045c9f4cc62915c"],["/photoswipe/photoswipe-ui-default.min.js","9517baca43cd4e9cb23ff337fbc1baa1"],["/photoswipe/photoswipe.css","7dc0df107159e1be66d4464171561e5b"],["/photoswipe/photoswipe.js","a8d26ff34943c859884acbd6b2531315"],["/photoswipe/photoswipe.min.js","f5cd6479c4e4682545a9603e6b50c741"],["/resume/en/index.html","3ddd73dc6678cbb58937bebbe10c07c8"],["/resume/index.html","852901e31d81955638b107e28c57265e"],["/resume/ja/index.html","c798f34b7c9868a8c3db3546145eb989"],["/setup-log/blog-setup/github-pages-ssl.html","d5e315a4f7725d0c5a828ab2ac48dfe3"],["/sw-register.js","901adabc9494d86d7589540e0015bdb2"],["/zh-cn/archives/2015/03/index.html","7438d324b371b2af5ad2afd09dcf4c1e"],["/zh-cn/archives/2015/04/index.html","3aa1132a5b5871a6b5dc3ff590909620"],["/zh-cn/archives/2015/05/index.html","eea075d70d13a69a049ecebceb420ab7"],["/zh-cn/archives/2015/09/index.html","3bd520c60f2397d54c6a6cd8a1984dd5"],["/zh-cn/archives/2015/12/index.html","8e1df9a6e6cd4edb49b3a44ba59749bd"],["/zh-cn/archives/2015/index.html","3918d43efbf4430df0bb9c00e37f414b"],["/zh-cn/archives/2015/page/2/index.html","4144a3313a0e6abafb8566910fee49ae"],["/zh-cn/archives/2015/page/3/index.html","d972eae5beaa6a90ec77b47a731f175a"],["/zh-cn/archives/2016/01/index.html","a683d958afba65b688dcb15e6dacde88"],["/zh-cn/archives/2016/03/index.html","4721f9642a1fdebc06d573e502643dc2"],["/zh-cn/archives/2016/04/index.html","670f079db443e3a01fe6bf5c456c8f30"],["/zh-cn/archives/2016/06/index.html","87919bf7c93c134c47a2509a65e35b01"],["/zh-cn/archives/2016/09/index.html","5e81e5592167c63fa01a557b4b165657"],["/zh-cn/archives/2016/10/index.html","dcd4bc135912e739d2c887ae1f786279"],["/zh-cn/archives/2016/12/index.html","cfb007267d2c603c87f652cdb400c3d7"],["/zh-cn/archives/2016/index.html","6daaa55c5e8485d8dde6c724d70dfb41"],["/zh-cn/archives/2016/page/2/index.html","75c0ae800cc566a4a80ce93102a45854"],["/zh-cn/archives/2017/01/index.html","777216dcaaf1b47f90a886755990e834"],["/zh-cn/archives/2017/04/index.html","6394700b42426fba047f072d9b4ef0a3"],["/zh-cn/archives/2017/06/index.html","b3483cf826a7bddbabee9b383270fabd"],["/zh-cn/archives/2017/08/index.html","fdab6cb30bd35f3b89793576d76923cd"],["/zh-cn/archives/2017/09/index.html","dfd64f975fb736a8499f211fe944e957"],["/zh-cn/archives/2017/10/index.html","c23f94bd1c3f9ee021f20943832353e6"],["/zh-cn/archives/2017/index.html","ecee6df0d668a412d61b0098f04f16f7"],["/zh-cn/archives/2017/page/2/index.html","d9ddbf85fd21e980e3fcfbf25eba694a"],["/zh-cn/archives/2018/04/index.html","d1286dd0e22ef06c125150dabe69f50c"],["/zh-cn/archives/2018/05/index.html","f031090eb30c9d39e362291f81954af0"],["/zh-cn/archives/2018/index.html","76fae54de3edc85e409c1f41a9745f80"],["/zh-cn/archives/2019/05/index.html","a74b6bd06dd7b4e7b8466b15206c14e6"],["/zh-cn/archives/2019/index.html","b6cee1681deeac51d8a16a559aacf178"],["/zh-cn/archives/2020/06/index.html","4853589dec34a321bdeccc688bbacaeb"],["/zh-cn/archives/2020/07/index.html","e792fa1aff2ac90b503100a75248a3ea"],["/zh-cn/archives/2020/index.html","25346020663dba4e29cbefad002599dd"],["/zh-cn/archives/index.html","52afecdd2656a6d7fadf26660b7057e0"],["/zh-cn/archives/page/2/index.html","b3e0d07ae36f052ae8b2c1dfacf24d1d"],["/zh-cn/archives/page/3/index.html","794a5516bd24fe180cc5aa19e4e2e994"],["/zh-cn/archives/page/4/index.html","05d1379282613d1471b7d90960d96992"],["/zh-cn/archives/page/5/index.html","9324d967fbaa9f7e5e2053c25dda05d2"],["/zh-cn/archives/page/6/index.html","eb7996b623080d61e8b58f26190c86b4"],["/zh-cn/categories/ACG/Music/index.html","61cbb1edb1143c053c053b0466053299"],["/zh-cn/categories/ACG/Music/self-copy/index.html","66ab7484473abd0a9fa7ed9fe37fbf11"],["/zh-cn/categories/ACG/Travel/index.html","640a0c9451f0639f209ca22db5310b88"],["/zh-cn/categories/ACG/figures/index.html","2b099308097ced886dab77d040297950"],["/zh-cn/categories/ACG/index.html","d4014b1296dda4ab5500d156ead694ac"],["/zh-cn/categories/dev/Front-End-Dev/index.html","c1fae4e57f08d0aecaa6d958523cf9de"],["/zh-cn/categories/dev/Front-End-Dev/page/2/index.html","e94dc849030a9210683af3b8dedad9bb"],["/zh-cn/categories/dev/HTML-CSS/index.html","9b98976b3d087dcd97552974dc0c70de"],["/zh-cn/categories/dev/android/index.html","cbe73878f973dba35e631ba1c67e08a9"],["/zh-cn/categories/dev/cpp/index.html","8a44689d3b588e634cf3ae3f88b92c81"],["/zh-cn/categories/dev/git/index.html","c957c1685a9c06edede479c26ce7c1d9"],["/zh-cn/categories/dev/index.html","bdc308aa9dc0496868767e228eedf5e0"],["/zh-cn/categories/dev/java/index.html","1c890cb7646cbe712811e91090b5755e"],["/zh-cn/categories/dev/page/2/index.html","0aed9ff409d77f751bf5706c97d0b723"],["/zh-cn/categories/dev/page/3/index.html","6c731f6b0d01669b7cd73d398daa8c9a"],["/zh-cn/categories/maintaince/blog-setup/index.html","ee79e661223d2c097d02197f5f6aff14"],["/zh-cn/categories/maintaince/index.html","b190c78310fe696e5153d4d9b86a6665"],["/zh-cn/categories/maintaince/macbook/index.html","e3ef8fe87a92cb96fc3267073c365c4d"],["/zh-cn/categories/maintaince/router-config/index.html","7fd3c402e74ab674d1112a1f8d33c335"],["/zh-cn/categories/notes/index.html","27fd0d615b03cf7d1c69c013e2067367"],["/zh-cn/categories/tricks/android/index.html","b59a27310046e70edc06bf5d67d0a13a"],["/zh-cn/categories/tricks/index.html","49b52cd454d91b33872efcdabc415a92"],["/zh-cn/categories/uncategorized/index.html","5a1bd3dac849aa2e626e08decf21a246"],["/zh-cn/categories/works/Front-End-Dev/index.html","9faafefeb4f18d8ac35c40434e12105a"],["/zh-cn/categories/works/csharp-wpf/index.html","705e9abba500ed226ca99223be004ebf"],["/zh-cn/categories/works/index.html","58799078f096127935d37189b94971d1"],["/zh-cn/index.html","3805ff75360e8c39d263b1f32d184f4d"],["/zh-cn/page/2/index.html","c7b1aed5e13abe1ec3da1a059466c614"],["/zh-cn/page/3/index.html","1f43718b306509e13141f3c516bbdcff"],["/zh-cn/page/4/index.html","dfade6bc9a16b63271ba4d78c7032f0c"],["/zh-cn/page/5/index.html","6ebf8e9d04a416e97a2d7542d216f8c9"],["/zh-cn/page/6/index.html","d231277ee4ab2e0121483b3451b674ff"]];
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
