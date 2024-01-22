/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/03/WNDR4300-setup-log/index.html","d32b0e217162691f9b64356337256a47"],["/2015/03/android-hostname-change/index.html","a3d73a3d0f4e6088cc6739738581a085"],["/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","a14a69befeef84ad72da1ef1c5e07ca8"],["/2015/04/android-chrome-issues-with-webpage/index.html","3cec736fc8dd704ba80b0fff5a17bb2d"],["/2015/04/cpp-study-log/index.html","37b30e99a96d9d89aeb0c80f2a4358f1"],["/2015/04/github-pages-ssl/index.html","c9b8d792fbff55e215f8c81ed5f0b4ad"],["/2015/04/hello-world/index.html","79f945bc636de3d1eedec18bfea1c774"],["/2015/04/hexo-setup-log/index.html","f2f44d00b9ed9f02553932a29106770b"],["/2015/04/self-copy-cd-inazuma-1-html/index.html","95e499183ecd949cc9f0014d054f746c"],["/2015/05/cpp-inherit/index.html","b070769bac981101a477db130f2a5705"],["/2015/05/cpp-polymorphism/index.html","93d8dd656edee8f8e8e5771e29f4ee7b"],["/2015/09/android-root-ota/index.html","aa0d46cee74e7de433422e6b2d0d507a"],["/2015/09/java-learningNotes-1/index.html","f0f40ae25ebebd990a61491c8309b657"],["/2015/09/newblog-newlife-2015/index.html","e9a8e2007e72c4c5db562a7db23f9d02"],["/2015/09/router-rebuild-2015/index.html","953d21ff09dbbf63488e6d05c79b78c9"],["/2015/12/2015-12-21/index.html","bb85de8260f18b3380e00243bddebfd4"],["/2015/12/PixInTouch/index.html","be1364cd66c4dfdb05c6f10cb6853b0c"],["/2015/12/git-study-1/index.html","754ab04e8121565129164e8608db97d1"],["/2015/12/hexo-backup-and-migrate/index.html","dee36e9a70e99b304134b8e0d818dc8e"],["/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","b865e683f09af94a2c6f672dbd55659a"],["/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","d1182da6a903b501748e6c5c9bb2721b"],["/2015/12/router-reconfig-2015/index.html","c1b000fe417a992ba0fe66b247df9b05"],["/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","9b268452db5a29ec06398fadcb261896"],["/2016/01/2016-stepping-further/index.html","81e70cbc79e089804e7670b353479ba0"],["/2016/01/Android-Study-1-22/index.html","33a2e7869ebfccfb591b78fbcdff1dba"],["/2016/03/2016-03-20/index.html","7f5526a84f5adcc572c1c6ca5b1eb4d9"],["/2016/03/GSC-535/index.html","ed5354af9ea95b915ff210759ca06280"],["/2016/03/gulpjs-1/index.html","c29ff69eb253ed7385f28eed87836ed8"],["/2016/03/hexo-theme-paper-white/index.html","c78798b755c2ab39468b99914bd1f910"],["/2016/04/2016-04-19/index.html","fd885b683e9faf596092238f1339a7f7"],["/2016/06/2016-06-16/index.html","03468a8004960fd162d5293164ea143a"],["/2016/09/2016-09-18/index.html","502b3ecdfdd83c3845d0e9f462d2fcde"],["/2016/10/2016-10-27/index.html","b54cae89fc5e22066f4ce43ac6b2b7bd"],["/2016/12/config-switchresx-and-2khidpi/index.html","1211fd42534e918beca0d5d53c837772"],["/2016/12/improve-duoshuo/index.html","9060030626e9c4233f36bcc3d9aa1c23"],["/2016/12/use-travis-ci-your-blog/index.html","980f76aa5a011a64303a84ab574f5502"],["/2017/01/2017-iyahoi/index.html","e8fb386bf182afb848cc67ea08bf5a5c"],["/2017/01/webpack-amd/index.html","2255da91cf0e4a418b10b8887282ccf5"],["/2017/04/kotobukiya-syaoran/index.html","8a63f036c01cbe768c798d9cbb781152"],["/2017/04/macbook-and-surface/index.html","93ace93398b36844084be22357feb44f"],["/2017/04/uc-hyakuya-yuichiro/index.html","637dd2656b95b38abe6460cd88abc4ec"],["/2017/06/noragami-seichijunrei/index.html","1ce03db06b7106573334de9d9cd140aa"],["/2017/08/cross-compile-55-libev/index.html","da251ff88bff13ff8684eb70cefbc02c"],["/2017/08/explore-service-worker-working-lifetime/index.html","d14c6a3bf962c6f4e459bef8f6220f2d"],["/2017/08/kiminonawa-tokyo-seichijunrei/index.html","460751af3f76cfd92a463cfecdb11c40"],["/2017/09/record-user-login-status-methods/index.html","7f10f1d9b01b3ef1363da95e4391c9e0"],["/2017/10/vue-typescript-early/index.html","54054d4c2304084c7ce0f51abcf398d4"],["/2018/04/2017-end/index.html","4ebf2e10ba9d702b9cb0ab44b83cd353"],["/2018/04/twitter-account-activity-api/index.html","eaec421e9997f025f19dda380ef71792"],["/2018/05/buddy-complex-seichijunrei/index.html","eecc79a8732179f94a100979e9fed30a"],["/2019/05/2019-05-16-record-jp-digital-TV-on-nas/index.html","ec3dbb7bceb4d48a5547b5bb916c5c65"],["/2019/05/2019-05-17-google-io-tech/index.html","12305cecf19cdb3909c217d7f8fcee68"],["/2020/06/cls/index.html","d849f5a4bdfd771358ff2e2c62089c7b"],["/2020/06/try-serverless/index.html","e19c7916972cfb58c2980903f237ad8f"],["/2020/07/macos-node-require-path-case-insensitive/index.html","7834435dc7607cfe7f74b737a4c07406"],["/2024/01/transmission-under-vpn/index.html","5709a45e7b76ce7959223d532d859629"],["/404.html","e392ababdb006c711cda4ed8bb5ce591"],["/about/index.html","4afc6872a2356ebe78025e6e37211efa"],["/archives/2015/03/index.html","661e7a572f50435ae52fea00ebdfc27c"],["/archives/2015/04/index.html","078a5c4cfafe3b85c9b16bdd00afddc7"],["/archives/2015/05/index.html","f9a3e3518cad79c23930df2473e9b0e6"],["/archives/2015/09/index.html","5795fc4983060f0b5c4c7a1adaf921df"],["/archives/2015/12/index.html","098843f107f5e6c26cd97eb316c6b029"],["/archives/2015/index.html","faf94afb560d653174f5d509c63611e0"],["/archives/2015/page/2/index.html","6d43ffa95402d449343716068bc55fb5"],["/archives/2015/page/3/index.html","00b978b1cb896f9eaca31f7e87679d97"],["/archives/2016/01/index.html","5c80e21dda3c2bb274e69d879298fb8a"],["/archives/2016/03/index.html","0155acb4eb0e4f1caa7e2a10a9e688b4"],["/archives/2016/04/index.html","f3ef70080b120e292718cad256001bb1"],["/archives/2016/06/index.html","0833f8b69726b7dd17b8de06805f222e"],["/archives/2016/09/index.html","77381217d5dc65f8b3833cd7ee289bb3"],["/archives/2016/10/index.html","1d1b68f0a769a853273b9d3c66210932"],["/archives/2016/12/index.html","26f8174a9bc97cbf074cd7fa96403d3b"],["/archives/2016/index.html","a2527b016f98076f6a96157c5a1dc55f"],["/archives/2016/page/2/index.html","02710ef13ded657d87ea7f6607f50d0b"],["/archives/2017/01/index.html","f4b68ffc17bcf2b7a7dd32dea45a329a"],["/archives/2017/04/index.html","da4948d805c60a7ec96599bc98cc9e85"],["/archives/2017/06/index.html","a02a86c230052c20bdacdd5935962c6f"],["/archives/2017/08/index.html","f67d8289acdd020458f95115585a0da9"],["/archives/2017/09/index.html","7149df11616dfd6c5a2ead9c07654b8b"],["/archives/2017/10/index.html","85ff8524c2951462530bacc3c1be630d"],["/archives/2017/index.html","3a81dc3d831292520e12351ecc5a49d3"],["/archives/2017/page/2/index.html","4bd1d407026d09154e1c5aa186f0b8d8"],["/archives/2018/04/index.html","17d1c8e6ef3bf4621abe77bea177ff11"],["/archives/2018/05/index.html","3e4d8d834b65e118b54f6f12f05a5a37"],["/archives/2018/index.html","fede220d51d3124a49c8fa1063ca6be5"],["/archives/2019/05/index.html","3500533e37f2d726b4e7dca75bc505ba"],["/archives/2019/index.html","10c736b767ed2cf5023d2197d131b227"],["/archives/2020/06/index.html","a9799fb1c4209095f908b652f78d561a"],["/archives/2020/07/index.html","c643b1c5f4e0ed637fadf3930f8bff4a"],["/archives/2020/index.html","784a5f50e7d5f14a5b19c2cd93b52cd7"],["/archives/2024/01/index.html","50f696d05ad65ca29d485b256c12b875"],["/archives/2024/index.html","1123f4d9305ee0b8b1af32d1c3be678d"],["/archives/index.html","fcbdf3e07292c65bac07b90f17de2eeb"],["/archives/page/2/index.html","865536a74354187d7de5f3a530621517"],["/archives/page/3/index.html","fedcc47772a855ea2c5055f6d66b16ba"],["/archives/page/4/index.html","9040eab3b2428cc2bcde6ad005e67c95"],["/archives/page/5/index.html","ff57bf437691f6673645b867fc7b93d5"],["/archives/page/6/index.html","21eba5a9bf8ed28a25e880609b075bcc"],["/assets/images/about-me.png","a066d06c3d9d1fe56c4d921cec7febf3"],["/baidu_verify_YbTSlpWIUJ.html","779049c3a50695ceb3a388ce1e8bc1b9"],["/categories/ACG/Music/index.html","9262630b5e669d5e30e3063ed63629c1"],["/categories/ACG/Music/self-copy/index.html","ff8f33af9f3cf015bd06f9775cc148fd"],["/categories/ACG/Travel/index.html","5f333a937a05c236963fc028adace9dc"],["/categories/ACG/figures/index.html","9fcf9c96980cc4ea05bcb9e036d57e4c"],["/categories/ACG/index.html","d5c8530cc23938fbb12e277a9f2ce1bd"],["/categories/dev/Front-End-Dev/index.html","0412c946a44810f3fd17f325176ff220"],["/categories/dev/Front-End-Dev/page/2/index.html","39c7d9c1a07e8356b3045a71e1c26b63"],["/categories/dev/HTML-CSS/index.html","3d9ebcf8d2ef0e177a7b7632a05d259a"],["/categories/dev/android/index.html","7ed6822806a56e1dbd4382892b23fe47"],["/categories/dev/cpp/index.html","035ce84baae3c065b50228eb6f58ed69"],["/categories/dev/git/index.html","365721cf722e188ef5755bf843669e6c"],["/categories/dev/index.html","da83b735f236891bd18cc069e59dd748"],["/categories/dev/java/index.html","920892d86915025d59e71459c4536c8b"],["/categories/dev/page/2/index.html","3e8a9ac3d66ce02fb56e941a6544d62a"],["/categories/dev/page/3/index.html","54154194746e05f62b6f0420df7f5c8f"],["/categories/maintaince/blog-setup/index.html","c3b123e16d49b689b2c5719dd16e8d6b"],["/categories/maintaince/index.html","31104c6f44fd61779fb61e8ec77c3cf5"],["/categories/maintaince/macbook/index.html","3c02ed49184c7512837ad7db91429bf5"],["/categories/maintaince/router-config/index.html","d221e6e846edcb2ca706efdd9c40a080"],["/categories/notes/index.html","f06740ec1a49e815c9df8e04f3be3cbb"],["/categories/tricks/android/index.html","a4d252eccf2d74ab16746754aa1a5a43"],["/categories/tricks/index.html","ea5d729bc85c35bdbfa2c4353e68feb9"],["/categories/uncategorized/index.html","38d049769b58087d6d9416f19629f169"],["/categories/works/Front-End-Dev/index.html","b2de6e437a85db0864adafa2a7078a7f"],["/categories/works/csharp-wpf/index.html","b1c55e2be87bd2375277927677e895f3"],["/categories/works/index.html","6ae7f0bddd8943981ac283bcacbd8506"],["/css/seichi.css","c60ad00990790aacbe0a9ff08766c515"],["/css/style.css","e3abc56736917946e8536ef38cc2c5cd"],["/google311213f0c8d812a9.html","51f1ee3c2f13a21a1a40b3dae4954454"],["/img/coderwall.png","1976fe70f1ee8ed243e0975402e06a2d"],["/img/delicious.png","952d9b54d8bcfe7b998f67ff48c4dbce"],["/img/douban.png","d42a163f932100e621d22732db34ecdb"],["/img/facebook.png","4bd685f6c9fdaccabf07bdd52173facb"],["/img/github.png","3c4b6267a1a3fedebdc7d089610ecfe7"],["/img/google.png","c385f5304465716b2d6c9ada94c657ab"],["/img/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["/img/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["/img/linkedin.png","4c72c4896f3c23f736cb1ad08f0c866e"],["/img/mail.png","38a7b8302dac028bf03b22d228938abf"],["/img/pinboard.png","9b6186cb97adbe50311f94e50f2392cf"],["/img/pinterest.png","e1b8e655d1b99b40ebcbd96977ae234e"],["/img/rss.png","ec8cf9b5a98011aa75cc0a4f25024dc9"],["/img/scrollbar_arrow.png","be5381cedbd6b778b1d92e224fd71cf7"],["/img/stackoverflow.png","039128ececb47b33bccedd98dc9fc809"],["/img/twitter.png","d2289a4936fefa41d9f92cf89939be5b"],["/img/weibo.png","b382032b316ee38c6d537fe9d36ae54c"],["/img/zhihu.png","e6352c0e1957beef3009268ae747c3aa"],["/index.html","7dfdc1208538829e16e5103ab5557e5e"],["/ja/2015/03/WNDR4300-setup-log/index.html","02759c3f4d21b6f85e73ed1bda760ca6"],["/ja/2015/03/android-hostname-change/index.html","4d088b75da2dc55d024e312667312ede"],["/ja/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","a99a1b83751193548f62e184f053a092"],["/ja/2015/04/android-chrome-issues-with-webpage/index.html","2ea76b7ea0ad487ccb2a8dc1917fd4cd"],["/ja/2015/04/cpp-study-log/index.html","4ad4c7af097d515d0e7bcf1870677acf"],["/ja/2015/04/github-pages-ssl/index.html","61865465f4a8ac946c999836013fc1cb"],["/ja/2015/04/hello-world/index.html","e5023e10f623229f2667885d0aecd563"],["/ja/2015/04/hexo-setup-log/index.html","fc22527d56a5de0140cc7e98509f66d0"],["/ja/2015/04/self-copy-cd-inazuma-1-html/index.html","bd2eb3f58a747be7759c787c14c3a8a5"],["/ja/2015/05/cpp-inherit/index.html","56991f6f4ca6ac85e4b1276f42fa20b5"],["/ja/2015/05/cpp-polymorphism/index.html","6bf00e3db9227300eda4d66d5f6c23f3"],["/ja/2015/09/android-root-ota/index.html","3d80cd8e31c9d824e9ba4eab7819b4de"],["/ja/2015/09/java-learningNotes-1/index.html","51857a3ca1154fed617b1cb5a626cdee"],["/ja/2015/09/newblog-newlife-2015/index.html","e7d8093a39a5878b32c00d858336f3d6"],["/ja/2015/09/router-rebuild-2015/index.html","82a6af5875c2a4f642bfa3557e823165"],["/ja/2015/12/2015-12-21/index.html","1cea4a2db38f144acc76fa96ca0f884b"],["/ja/2015/12/PixInTouch/index.html","ac1fb650ae60fd55a4a2b71ef1d059f2"],["/ja/2015/12/git-study-1/index.html","b81012df333c24febceb497415f78804"],["/ja/2015/12/hexo-backup-and-migrate/index.html","b13e23de874133008e31af367dc45924"],["/ja/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","55872c3ad4ac5cad0a47121f71d4e3f8"],["/ja/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","c7a8111a6ac74e31bf47eed621213d12"],["/ja/2015/12/router-reconfig-2015/index.html","c0cef72ff9a0cd9100ba1cfe24ea3379"],["/ja/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","2ac9edce8028bec37e2b837c85794f20"],["/ja/2016/01/2016-stepping-further/index.html","863d9a04271111649a99a1a151594e6a"],["/ja/2016/01/Android-Study-1-22/index.html","c2a8cc1b896f4f07bab794109ad4a5bf"],["/ja/2016/03/2016-03-20/index.html","3aa78510628499c35a6d944241705104"],["/ja/2016/03/GSC-535/index.html","762f644f4a551ef9822d7ed5b3eece65"],["/ja/2016/03/gulpjs-1/index.html","a8e96000e341fe5decdc6eeb2731948b"],["/ja/2016/03/hexo-theme-paper-white/index.html","a65bf408452bcb66763e942ce7261ea4"],["/ja/2016/04/2016-04-19/index.html","fdad04f7d615dd257828a31d3186feb8"],["/ja/2016/06/2016-06-16/index.html","ea6763b33246a384005c40a8e9784721"],["/ja/2016/09/2016-09-18/index.html","2d8b0070498d7bb506d242a4d0264571"],["/ja/2016/10/2016-10-27/index.html","6277936edf3d8ef35ec5ab2d1f957a8b"],["/ja/2016/12/config-switchresx-and-2khidpi/index.html","d3e0e498611aee22dd4a66fd15a54c63"],["/ja/2016/12/improve-duoshuo/index.html","c391b9fba4cac60e9abd8da299d9de28"],["/ja/2016/12/use-travis-ci-your-blog/index.html","bbf103a11f16570eb68736b702f69467"],["/ja/2017/01/2017-iyahoi/index.html","a5e86eaffd0019acdee7f52bf72d5b9f"],["/ja/2017/01/webpack-amd/index.html","b6ea4fef7797dcfb601dec467a4d9232"],["/ja/2017/04/kotobukiya-syaoran/index.html","451eb8593c02b2c2f35fac38a15131c5"],["/ja/2017/04/macbook-and-surface/index.html","63d1f94c0b95a1a1d4bc0601932d7a38"],["/ja/2017/04/uc-hyakuya-yuichiro/index.html","3c0d58b024e055d081b91eecb9d4c383"],["/ja/2017/06/noragami-seichijunrei/index.html","0c1bcac00303977fb8d35afb490c61c2"],["/ja/2017/08/cross-compile-55-libev/index.html","29cf65a046e460a5724048d0007045a1"],["/ja/2017/08/explore-service-worker-working-lifetime/index.html","b448117fad1801760e49dd360c5ac26e"],["/ja/2017/08/hello-jp-world/index.html","2aa71c57a8cf30cc904b0cc4bd77f508"],["/ja/2017/08/kiminonawa-tokyo-seichijunrei/index.html","721ddc74a3319825fd854398728bd6ae"],["/ja/2017/09/record-user-login-status-methods/index.html","0e9c1b151cb13af00a6898fa66f63250"],["/ja/2017/10/vue-typescript-early/index.html","794ed12b6f1fac88293609d3c212d21e"],["/ja/2018/04/2017-end/index.html","29b0013a9e88f89b086a6f499816fab5"],["/ja/2018/04/twitter-account-activity-api/index.html","27e55cd4581a9e481a4bd2ec9721234f"],["/ja/2018/05/buddy-complex-seichijunrei/index.html","32f800ef73d28cc8abf5afbb20ed520b"],["/ja/2019/05/2019-05-16-record-jp-digital-TV-on-nas/index.html","8e9277e763276d82379d6be2657ff7d7"],["/ja/2019/05/2019-05-17-google-io-tech/index.html","920003c776e0b15131780fb805fdf82e"],["/ja/2020/06/cls/index.html","891cd5d5aef85d5eaaccc348217f48ef"],["/ja/2020/06/try-serverless/index.html","cca2794e1e8c5d5c704de494573d8a66"],["/ja/2020/07/macos-node-require-path-case-insensitive/index.html","37ff957d036db70b5b60b6e6612a8b57"],["/ja/2024/01/transmission-under-vpn/index.html","ce987c604f8921f1a4214093c688c965"],["/ja/404.html","8f3d5f18fd704173b9f10628054eda43"],["/ja/about/index.html","658a42ed0a47338a17a4f9ffa2c764f6"],["/ja/archives/2017/08/index.html","fc94c1db6f93d6aabf4e3785d0a6bfd1"],["/ja/archives/2017/09/index.html","5e4099a75d9f0873e6b3bd1d79956f7b"],["/ja/archives/2017/10/index.html","e819103327cc3ec2351f307283b2937b"],["/ja/archives/2017/index.html","98cc15c9bcfec87e387660504c52f7c1"],["/ja/archives/2018/04/index.html","3e94d57af8269e058fd4c5f0d841fe9b"],["/ja/archives/2018/05/index.html","6d2d87d8b687979598904b56b71bc1b3"],["/ja/archives/2018/index.html","2076f2606dc4b36ffa5f17b60078abe8"],["/ja/archives/2019/05/index.html","32c6e2109a44a451938996c456c970dc"],["/ja/archives/2019/index.html","d189b78bc347db7e4806b2a4ff31054c"],["/ja/archives/2020/06/index.html","5a4a18b5a23dd48cdeac079eac1ea3c9"],["/ja/archives/2020/07/index.html","bb59e5fc8b88c01240f7addc92af8a9c"],["/ja/archives/2020/index.html","30380f95d24eccb40daf6db4165095c7"],["/ja/archives/index.html","57391b1034aad733c3602f2b7740f34d"],["/ja/categories/ACG/Travel/index.html","f0e7e6651e83e7e24dfa48d58d858ec1"],["/ja/categories/ACG/index.html","338caee6888dc0b188bb2d8f7d4f0210"],["/ja/categories/dev/Front-End-Dev/index.html","9fed95ac30161ae1c4a5142d4435d205"],["/ja/categories/dev/index.html","7267c20b0efe97023f842efd36ca4ff7"],["/ja/categories/uncategorized/index.html","c7d9dcf80e3cc9ff3a12fa7e6c8d1182"],["/ja/index.html","ad006648f67c976730ec841d552e1243"],["/ja/nihongo-test-page/index.html","a01b42d7e73ec093841c37ccf5c01738"],["/ja/resume/en/index.html","095ffe102fa4bd53ac2c4ccac850e84a"],["/ja/resume/index.html","2b9ecf9ca45c7455d4ec0f18664004da"],["/ja/resume/ja/index.html","2ea66c79532c8f8ec5e0d426d54924b8"],["/js/instagram.js","7d7a9e2e7286ba2d5b6d12068214f0c3"],["/js/jquery.lazyload.js","28c23bc40080d31144776e9a8736837f"],["/js/main.js","2e92f29b0cd90bddc062915eb46a858c"],["/js/mobile.js","20029df2609ddd5d2b2d346edbb297c0"],["/js/nextpageajax.js","c3bde8d7bb1f967fb319f57a187ea51a"],["/js/pc.js","631b535186aab0e262485ee2bf9da628"],["/js/ripple-effects.js","b9c11903da0ef5c3d790b41369c3137e"],["/js/share.js","de52ac3d43e43c1951a08b0804458a8e"],["/js/totop.js","661822968b58fd439f46bd54031238d6"],["/keep_origin/affiliate_jump.html","71bf6d72c5d080ec2b3f8ecfae3d71ed"],["/nihongo-test-page/index.html","68fbcfe85d500e06a801b8986b6f946d"],["/page/2/index.html","72d565a67be6df9696ae38e00123aace"],["/page/3/index.html","f818a62d87a493dac223be5fbb6b6c6c"],["/page/4/index.html","7110bb7e8e5aeaf54f223fa2570ee2a5"],["/page/5/index.html","c5f5490dd352c9f1f6ad5906d1d01a94"],["/page/6/index.html","94ece34cdba7e51026635fd53e884702"],["/page/7/index.html","e9b3f7ab013abae858c473a05c9e0e41"],["/photoswipe/default-skin/default-skin.css","426e8908d7426603ca203b6d16281b1e"],["/photoswipe/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photoswipe/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photoswipe/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photoswipe/photoswipe-ui-default.js","0c9196aa8943ce8a8045c9f4cc62915c"],["/photoswipe/photoswipe-ui-default.min.js","9517baca43cd4e9cb23ff337fbc1baa1"],["/photoswipe/photoswipe.css","7dc0df107159e1be66d4464171561e5b"],["/photoswipe/photoswipe.js","a8d26ff34943c859884acbd6b2531315"],["/photoswipe/photoswipe.min.js","f5cd6479c4e4682545a9603e6b50c741"],["/resume/en/index.html","6fd7892def7fc1a0e4a8f42a47452921"],["/resume/index.html","d7965af3f9e64120edd8fd3f789c6b73"],["/resume/ja/index.html","9730120d9fd6890cbaf67ee8aa3eb1e7"],["/setup-log/blog-setup/github-pages-ssl.html","d5e315a4f7725d0c5a828ab2ac48dfe3"],["/sw-register.js","b44c90aca4dee602b8636823fe309cc6"],["/zh-cn/archives/2015/03/index.html","96602e09c6eb794b062a2e1b1e7741f2"],["/zh-cn/archives/2015/04/index.html","658860ee6ce52971f3e9d8e042cabbe9"],["/zh-cn/archives/2015/05/index.html","55701e8db6e61b9d11187782a1d0f8cf"],["/zh-cn/archives/2015/09/index.html","5fc6d17b270fa7febbe29dda96cf5a19"],["/zh-cn/archives/2015/12/index.html","b8cb4c696cbade94e37e632f26c9a137"],["/zh-cn/archives/2015/index.html","d0574516d4973bbc4d91b8aa33fedf38"],["/zh-cn/archives/2015/page/2/index.html","c30c419dcbc5f7cedd999d418d409f2e"],["/zh-cn/archives/2015/page/3/index.html","931c28c1561254d5f5437a99edd6043b"],["/zh-cn/archives/2016/01/index.html","67fc571d04309485573e5250071c46ef"],["/zh-cn/archives/2016/03/index.html","bea2f921cc0b6c98e0f522333ee1967d"],["/zh-cn/archives/2016/04/index.html","c00bb260a3db05d5f635762e2432bd65"],["/zh-cn/archives/2016/06/index.html","a5bfcb25e445c45bba44c687326eb27b"],["/zh-cn/archives/2016/09/index.html","7907977a2f59baf9355f4c8a793fd64a"],["/zh-cn/archives/2016/10/index.html","80ddad40ac4cdd01f3aac4f410e032a1"],["/zh-cn/archives/2016/12/index.html","55bb318ef201820d26164fbd93ce465d"],["/zh-cn/archives/2016/index.html","50b730015a7156f4b394d34e1f1b5b90"],["/zh-cn/archives/2016/page/2/index.html","38d38e84cbe1d3c06551756adbeafcce"],["/zh-cn/archives/2017/01/index.html","30406d29ccec4486229721d187b19d76"],["/zh-cn/archives/2017/04/index.html","bc47d8e433fb66e72ea305368f466e2e"],["/zh-cn/archives/2017/06/index.html","3addfc5b5458d8b3aca411b6809d7749"],["/zh-cn/archives/2017/08/index.html","1f00cc079731181ec9f12e15fb29290b"],["/zh-cn/archives/2017/09/index.html","cd0d5246c02d56022c3fea507bd5545d"],["/zh-cn/archives/2017/10/index.html","157a18b35f98310aa4fc0836093a35ef"],["/zh-cn/archives/2017/index.html","ed8bc968512042936a42e2337b649031"],["/zh-cn/archives/2017/page/2/index.html","389b65dba9d97f64afc628eed8fd210b"],["/zh-cn/archives/2018/04/index.html","43523e68fd9ebf9f15dc88e7826cf1b2"],["/zh-cn/archives/2018/05/index.html","96f8fd6fc4fb57fd976b1150a1c9a3e8"],["/zh-cn/archives/2018/index.html","3bff3767b031000302afe6d40579aff8"],["/zh-cn/archives/2019/05/index.html","56e3f672def7e7ec3dbeb3151ac9fa77"],["/zh-cn/archives/2019/index.html","6d0ffd97b2dfc044f03412a4960bb75f"],["/zh-cn/archives/2020/06/index.html","735c8f1ed6ebaef0c10814f5c92fb646"],["/zh-cn/archives/2020/07/index.html","7271d9a1ee63b423d0b1bcaaf09b6395"],["/zh-cn/archives/2020/index.html","76876d4113fcbb4bbe59bc4f81f42d1f"],["/zh-cn/archives/2024/01/index.html","5716b262305e86e38edfcca5fe36bf58"],["/zh-cn/archives/2024/index.html","9555a10490ee0d0a9f635c2aaf3b7b1c"],["/zh-cn/archives/index.html","1c996f57c173ea9e40e453be99b9d3cc"],["/zh-cn/archives/page/2/index.html","4571952cce64ad6a4e420acf6e43af84"],["/zh-cn/archives/page/3/index.html","899023855bf84b0937578097c423403d"],["/zh-cn/archives/page/4/index.html","ef2b95686ee8b97adef072ae5c218cfb"],["/zh-cn/archives/page/5/index.html","a13b1fe709b12dffabcd5c99ab6a3e3a"],["/zh-cn/archives/page/6/index.html","dd6fb49d04cd63ee256f7cfdf47bf666"],["/zh-cn/categories/ACG/Music/index.html","59cc5ce0b7fb2c65717c33c6aee3959b"],["/zh-cn/categories/ACG/Music/self-copy/index.html","e03c7dc23e4f0081ed0a86144b388a99"],["/zh-cn/categories/ACG/Travel/index.html","58f994d9b7a80e7fec10f6be387c6ed6"],["/zh-cn/categories/ACG/figures/index.html","be795149fae22a0115ad02b154b1155a"],["/zh-cn/categories/ACG/index.html","bb8cf57135ccbcf98cfed2839c9d7fd7"],["/zh-cn/categories/dev/Front-End-Dev/index.html","4716e1d92991e85d47cbf3cb6a551127"],["/zh-cn/categories/dev/Front-End-Dev/page/2/index.html","7054d2fd4487bb59095e39b074a64c0e"],["/zh-cn/categories/dev/HTML-CSS/index.html","15d82389bd8871f53fcf5ac0fddbca09"],["/zh-cn/categories/dev/android/index.html","381e7d33cd41b2a97e91b009948c3af3"],["/zh-cn/categories/dev/cpp/index.html","1c90f308574cb384eba64436d62e2cf7"],["/zh-cn/categories/dev/git/index.html","0923350b8a2750ea7024b7d4880c0d84"],["/zh-cn/categories/dev/index.html","86df8181427663664c88a8e4a75a5850"],["/zh-cn/categories/dev/java/index.html","20b0e1b5a30f77601144c578a0945404"],["/zh-cn/categories/dev/page/2/index.html","5b82158f2a0e2f9e64a66355bbaba1b6"],["/zh-cn/categories/dev/page/3/index.html","4132b2fc411e5520bffced3b2ee001f4"],["/zh-cn/categories/maintaince/blog-setup/index.html","053fb2d5f1c96f36b92bcdfe5d03ce1b"],["/zh-cn/categories/maintaince/index.html","5146f0aeabcabc82d067c05f236ae5a6"],["/zh-cn/categories/maintaince/macbook/index.html","8c1e1826fc24763d646e7df3823a5c47"],["/zh-cn/categories/maintaince/router-config/index.html","f0733cd966f203920aec651092a62365"],["/zh-cn/categories/notes/index.html","b7c28daa6646b6f5933306e741aa408f"],["/zh-cn/categories/tricks/android/index.html","5cd2cf80ba7bb3e39c8a026a816a70ae"],["/zh-cn/categories/tricks/index.html","a310deebbee6889d96dc28aa1e704578"],["/zh-cn/categories/uncategorized/index.html","94c5f5b8a823390f262471833063031a"],["/zh-cn/categories/works/Front-End-Dev/index.html","906f6ccaa9bf9d405409f3a370a6e5d1"],["/zh-cn/categories/works/csharp-wpf/index.html","9ded9ef7f8d42242e1d03ed0db430150"],["/zh-cn/categories/works/index.html","2cd223fe1a95ef263019eeeb46e00bc3"],["/zh-cn/index.html","74e2a50397e4cc930ee1e9ded2d47676"],["/zh-cn/page/2/index.html","f02202eea2661aedc29ae447cca24d29"],["/zh-cn/page/3/index.html","e4548833a25a741bea10b81b8b447714"],["/zh-cn/page/4/index.html","700dcba39157baff79630c1d635384ed"],["/zh-cn/page/5/index.html","c4c3f5fab39903ed300b2c5be3a54537"],["/zh-cn/page/6/index.html","b3fd2ea2e5c1f7a306eb84cd52bb5e80"]];
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
