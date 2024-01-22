/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/03/WNDR4300-setup-log/index.html","69752eab39c41a69a418769dd32f574a"],["/2015/03/android-hostname-change/index.html","f0ff7ca41e9be5e8519a5fd35e2ea3ba"],["/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","e46965636514a2adfa47552bad5a6e8e"],["/2015/04/android-chrome-issues-with-webpage/index.html","a791459abea4a0ba51a359195de2ee05"],["/2015/04/cpp-study-log/index.html","7805927a12a5da6d845e60216d1f24de"],["/2015/04/github-pages-ssl/index.html","72aa2a2167930d717c5530a0ff18874b"],["/2015/04/hello-world/index.html","b1f09b67e846b8a92575a695f7a58061"],["/2015/04/hexo-setup-log/index.html","fb1dc264705784d7bb10dec9b8302f6b"],["/2015/04/self-copy-cd-inazuma-1-html/index.html","63ee8e7e544a16c72fd39ec3ed64e1da"],["/2015/05/cpp-inherit/index.html","ea51463331dce6655f1d02058e4d8f79"],["/2015/05/cpp-polymorphism/index.html","877f1c7472673d305cfe398a0a9fcf9e"],["/2015/09/android-root-ota/index.html","83010981b18a2a67ac6d7e204d9c5d2d"],["/2015/09/java-learningNotes-1/index.html","98205189f2a252947a150d926680a64e"],["/2015/09/newblog-newlife-2015/index.html","098c8908a3af48e30d2ab545ed438857"],["/2015/09/router-rebuild-2015/index.html","583205fa49589b4288c9061781a305ef"],["/2015/12/2015-12-21/index.html","7ea9007bfd1865a23e9753fda917eae9"],["/2015/12/PixInTouch/index.html","d2fc905cdb04f0e23c56ac0e2b05aaa3"],["/2015/12/git-study-1/index.html","2e3bf47a698c8bf0ab9643d3a759409f"],["/2015/12/hexo-backup-and-migrate/index.html","e71c4b539156326cf9ded031e12551ac"],["/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","f2d56f9adf6bd44a0ba40a944af6cf29"],["/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","27d35d618cd3715767930378396e3436"],["/2015/12/router-reconfig-2015/index.html","37cfe645a3804802fec400bfb7f582e7"],["/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","a246a5e7042c9f2d9fcd0f6483911437"],["/2016/01/2016-stepping-further/index.html","b1adfa3342aee7e87f202a0f80545aa8"],["/2016/01/Android-Study-1-22/index.html","00da9ce37b6539c59f90a81781f2ec95"],["/2016/03/2016-03-20/index.html","05ad9be43b5adf77c2ce8dac66bdcd60"],["/2016/03/GSC-535/index.html","1e1da550e106022edd4dfed167703a5f"],["/2016/03/gulpjs-1/index.html","db2015109c8bbc7035e20d4c97fc2898"],["/2016/03/hexo-theme-paper-white/index.html","24c68c254716aed4d3fe336b61922232"],["/2016/04/2016-04-19/index.html","5767c656d86561ea88e228b1346856b9"],["/2016/06/2016-06-16/index.html","1d1ab8c6f21c66eb502a432e5fd4626f"],["/2016/09/2016-09-18/index.html","24a7317be47288b9cfb88d2410f681af"],["/2016/10/2016-10-27/index.html","9ffa21b34c99f71b182cbade7ffd49bb"],["/2016/12/config-switchresx-and-2khidpi/index.html","3067bf70a03b8f40b9fb135a823346f9"],["/2016/12/improve-duoshuo/index.html","c86e7ec853c12b348af47287eb0447f0"],["/2016/12/use-travis-ci-your-blog/index.html","1c495ea42f3a2d277248f255559d8dbb"],["/2017/01/2017-iyahoi/index.html","2744b342de605efe42efda46ecd5f0db"],["/2017/01/webpack-amd/index.html","23feaf44ed10547cfd0310eb651409f1"],["/2017/04/kotobukiya-syaoran/index.html","d27a3e8a89a3afa3748b3ced5586d81d"],["/2017/04/macbook-and-surface/index.html","54a42692f0b887a31804a8a93e627457"],["/2017/04/uc-hyakuya-yuichiro/index.html","1f39d6301e9c31af1763c49fe18dbf63"],["/2017/06/noragami-seichijunrei/index.html","4cdf5f232c6c5cea8c6d213e9d70d27a"],["/2017/08/cross-compile-55-libev/index.html","42c6baaaec71e381f1c8283f806fcba9"],["/2017/08/explore-service-worker-working-lifetime/index.html","d2eaa891f9ad1965298fb2e85d0e85e4"],["/2017/08/kiminonawa-tokyo-seichijunrei/index.html","3dfdaf4b6c42e7a3443a94e40e10d279"],["/2017/09/record-user-login-status-methods/index.html","562056d1f95bdb6c146771eff1595d90"],["/2017/10/vue-typescript-early/index.html","bfa637e5bb16feea252f132badc7ba6b"],["/2018/04/2017-end/index.html","529e5b7d8b80237461f8c166d87ccb6b"],["/2018/04/twitter-account-activity-api/index.html","e18c42abf4e0b628d5e51f1a437caf27"],["/2018/05/buddy-complex-seichijunrei/index.html","b259e09c61dfaafe79694a1af3d1842e"],["/2019/05/2019-05-16-record-jp-digital-TV-on-nas/index.html","0cdbb416774d3c7f23c2f4da68a242a0"],["/2019/05/2019-05-17-google-io-tech/index.html","b9a9b71da2aee4e61fc10efb084ba82d"],["/2020/06/cls/index.html","572b1fbc5add3384ff8a1822903beaf4"],["/2020/06/try-serverless/index.html","9fa006c448192647592bfc3b97af0a91"],["/2020/07/macos-node-require-path-case-insensitive/index.html","f56fb3e8ce8e346094a052856b94c861"],["/2024/01/transmission-under-vpn/index.html","659f6e3cadedf40a62ff50128b796767"],["/404.html","c1939dbc224986bc48f1829b56f129bb"],["/about/index.html","7f2ddeb84b9538c99e07834cebfb8f50"],["/archives/2015/03/index.html","33e5401752b9884aca61dabe936f9929"],["/archives/2015/04/index.html","abb1fa043ee7cd0b44e09fb4a28b3644"],["/archives/2015/05/index.html","12b854c9782513486611edbab2b004bf"],["/archives/2015/09/index.html","4e79e89b0472def7bcd539ffa9cd81ab"],["/archives/2015/12/index.html","1b6dd3ab2dafe8b721d6198c5a6077bb"],["/archives/2015/index.html","3f9e2797c10c91f65a0d52b11fa3c70e"],["/archives/2015/page/2/index.html","a07c1284167699dabb1bf6302ceb0f8a"],["/archives/2015/page/3/index.html","bf73422bd0079f20b4e5cbf3d0db7423"],["/archives/2016/01/index.html","7ae9941bb15b7b681843e0e1e006de69"],["/archives/2016/03/index.html","aad16c4820c8f27644385260039d7f9d"],["/archives/2016/04/index.html","678fb99f9a928ee319b1c925caa4f469"],["/archives/2016/06/index.html","78ccc210576ecb203d5201b971564af4"],["/archives/2016/09/index.html","ca1b92e71344e079ed23de5c2d3e27ba"],["/archives/2016/10/index.html","667c1b2727d097dbd1a2e223e2522c92"],["/archives/2016/12/index.html","9af3332959e13bef6b9ca6e6821314d6"],["/archives/2016/index.html","eca576dd3d5bb4b840ec4640f6cb66e6"],["/archives/2016/page/2/index.html","c74c2253edeebb2255a777d7cbf63a53"],["/archives/2017/01/index.html","5cb66afbb387667a5097e6f4c43204bc"],["/archives/2017/04/index.html","bf71df276e2f1c1e2967787e4481c30c"],["/archives/2017/06/index.html","df24b059c117bc215fdd6017fac16d8b"],["/archives/2017/08/index.html","95f14e37276abaff9d90c33660e012e2"],["/archives/2017/09/index.html","0606c60114a4953f239e623b9e5d2e38"],["/archives/2017/10/index.html","59b0a4686730cb24ed94f49a1253a975"],["/archives/2017/index.html","cebae7e1a40e54fa3a236944bc8904f8"],["/archives/2017/page/2/index.html","3282724f95dbd38478416dd26c5f927f"],["/archives/2018/04/index.html","a2c43c004e0b1dccc88655b0377f2cae"],["/archives/2018/05/index.html","6fc4092f54bfda68f8926c095df7d500"],["/archives/2018/index.html","fbf8be5276741d6f727b070119311225"],["/archives/2019/05/index.html","2f9ebcf567814309770aeebe4695dc59"],["/archives/2019/index.html","8cf5a4060d41f0d5671159b02a384c3c"],["/archives/2020/06/index.html","82d3c048607bbdb1e87cdf06807948e5"],["/archives/2020/07/index.html","d230a57d93697fdab906bc43ac71010f"],["/archives/2020/index.html","7ccc32dc7f629a239ab90168561779e9"],["/archives/2024/01/index.html","60647041fc9568d3360272d25d7c12bf"],["/archives/2024/index.html","e39a9d32d1a9eef1f9ded729d2af3666"],["/archives/index.html","a1ce7bafb38e554ceff9d47d16925d61"],["/archives/page/2/index.html","0632358c8eb5086374e6672b72fd51bd"],["/archives/page/3/index.html","8c4293c13f7b7f1b5927891db2ab8fcf"],["/archives/page/4/index.html","4bb9aaf1f1f64131270afa1aac2a5df0"],["/archives/page/5/index.html","f111b1cdb1d660811601b91853913573"],["/archives/page/6/index.html","ec4d4e875f1ea016de0b5852a8646735"],["/assets/images/about-me.png","a066d06c3d9d1fe56c4d921cec7febf3"],["/baidu_verify_YbTSlpWIUJ.html","779049c3a50695ceb3a388ce1e8bc1b9"],["/categories/ACG/Music/index.html","4e8bbce3bbfc0df2ff17dec2ab55b5a0"],["/categories/ACG/Music/self-copy/index.html","bc5095f6857698f4498a85632d9e8d4f"],["/categories/ACG/Travel/index.html","e3c7ba719237e8a2ac7536d1106c5f66"],["/categories/ACG/figures/index.html","cdc8b132d7a203362e8b7825aa39d788"],["/categories/ACG/index.html","72cdfc1a728ea2c10874758ee51e6711"],["/categories/dev/Front-End-Dev/index.html","61803f15b1f8ccdeef43d11fd93c9bf3"],["/categories/dev/Front-End-Dev/page/2/index.html","e8b0bdb12de303aa7d303512cf7ef69a"],["/categories/dev/HTML-CSS/index.html","6240e9a2db6de0b72efc619994f3af17"],["/categories/dev/android/index.html","dea9fa195e540629422a15e5cea1ad1d"],["/categories/dev/cpp/index.html","f1f2205d28c100880b9415fba5f01c4a"],["/categories/dev/git/index.html","fb235520b4417c1923f97ab0029e1322"],["/categories/dev/index.html","79efc9ac0c7c07006c02582076c8d976"],["/categories/dev/java/index.html","c2947a5b234484a457baa3616e20b391"],["/categories/dev/page/2/index.html","c620d22f9ae5f0662a007628bdca8b4e"],["/categories/dev/page/3/index.html","af95334ab4a5f8ac18af59322f7a504e"],["/categories/maintaince/blog-setup/index.html","45f34cc06070b21a1d62e62a2e2f4eeb"],["/categories/maintaince/index.html","df3f93cc5f164775fe3a2d2c21e379d0"],["/categories/maintaince/macbook/index.html","a9abae790b8d2060d93f52a700df80a5"],["/categories/maintaince/router-config/index.html","912b3de5d8898a869dd8b0c572fdf46c"],["/categories/notes/index.html","3a2d29aab9128ad2bd9a96a34df15e43"],["/categories/tricks/android/index.html","c5e72e50941437f773edec135ce1ba56"],["/categories/tricks/index.html","e1f85e8ccf2a9ebb17708c8a804370d2"],["/categories/uncategorized/index.html","77b6d53185bdaa6be4ba6fa0aa860704"],["/categories/works/Front-End-Dev/index.html","a16891f6e6a96d41e4e225968ae2984e"],["/categories/works/csharp-wpf/index.html","f64ff389de7469aa553d5be15e484329"],["/categories/works/index.html","92aba1a7b628fd7b85da27bb20c049ef"],["/css/seichi.css","c60ad00990790aacbe0a9ff08766c515"],["/css/style.css","e3abc56736917946e8536ef38cc2c5cd"],["/google311213f0c8d812a9.html","51f1ee3c2f13a21a1a40b3dae4954454"],["/img/coderwall.png","1976fe70f1ee8ed243e0975402e06a2d"],["/img/delicious.png","952d9b54d8bcfe7b998f67ff48c4dbce"],["/img/douban.png","d42a163f932100e621d22732db34ecdb"],["/img/facebook.png","4bd685f6c9fdaccabf07bdd52173facb"],["/img/github.png","3c4b6267a1a3fedebdc7d089610ecfe7"],["/img/google.png","c385f5304465716b2d6c9ada94c657ab"],["/img/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["/img/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["/img/linkedin.png","4c72c4896f3c23f736cb1ad08f0c866e"],["/img/mail.png","38a7b8302dac028bf03b22d228938abf"],["/img/pinboard.png","9b6186cb97adbe50311f94e50f2392cf"],["/img/pinterest.png","e1b8e655d1b99b40ebcbd96977ae234e"],["/img/rss.png","ec8cf9b5a98011aa75cc0a4f25024dc9"],["/img/scrollbar_arrow.png","be5381cedbd6b778b1d92e224fd71cf7"],["/img/stackoverflow.png","039128ececb47b33bccedd98dc9fc809"],["/img/twitter.png","d2289a4936fefa41d9f92cf89939be5b"],["/img/weibo.png","b382032b316ee38c6d537fe9d36ae54c"],["/img/zhihu.png","e6352c0e1957beef3009268ae747c3aa"],["/index.html","67c3716ef46fb4200f91b0c00625ccec"],["/ja/2015/03/WNDR4300-setup-log/index.html","316da0f3b52445dda71b191b23f4533c"],["/ja/2015/03/android-hostname-change/index.html","fc55d6ad2b508f5f1456ffd4f837aa9b"],["/ja/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","025d4759dcebe7c5155b6e6b3a5e7988"],["/ja/2015/04/android-chrome-issues-with-webpage/index.html","e594a865fa7a9f2203664abc4a1d6ccf"],["/ja/2015/04/cpp-study-log/index.html","f4afdd26577722cb85705f09209fbe57"],["/ja/2015/04/github-pages-ssl/index.html","a33afdec49ad6f3b1606d0d0dcae9c39"],["/ja/2015/04/hello-world/index.html","41e277f15e8632ee1f2184736e429e9a"],["/ja/2015/04/hexo-setup-log/index.html","012eb90e0d11feb7bd5f366d92ff6cdc"],["/ja/2015/04/self-copy-cd-inazuma-1-html/index.html","087c90a4308867ca2990aad3368c137d"],["/ja/2015/05/cpp-inherit/index.html","06a72590d4c2b6f51073f7831380e8e4"],["/ja/2015/05/cpp-polymorphism/index.html","9538d01ea34fb105c5c898727b3e7192"],["/ja/2015/09/android-root-ota/index.html","26adae0e5497edc4ff060ffa4bb4663c"],["/ja/2015/09/java-learningNotes-1/index.html","a558e8d5a38a8984600ce576c495e401"],["/ja/2015/09/newblog-newlife-2015/index.html","d41f41928b2feec49821a37a3ee9715b"],["/ja/2015/09/router-rebuild-2015/index.html","b6c95249e6901acd7c95dbeadbf3cad9"],["/ja/2015/12/2015-12-21/index.html","36e7869c25ee259705c586fc93ed534f"],["/ja/2015/12/PixInTouch/index.html","a6d3b214e98bc100fac857adc0894d51"],["/ja/2015/12/git-study-1/index.html","e19e6f4e33861060ebb33a2ec1ff40cb"],["/ja/2015/12/hexo-backup-and-migrate/index.html","5420b9d7a7fce31622d3f06b6331f955"],["/ja/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","29a3576992ef86eab338e6fe343a670e"],["/ja/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","69052a3b7dcbdd5ac6370f434218010e"],["/ja/2015/12/router-reconfig-2015/index.html","35e46ddb820f31084c1c06d8f66c91de"],["/ja/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","79e6058926ba51c70d37a76908d7b9ae"],["/ja/2016/01/2016-stepping-further/index.html","ad26b69e0ca90b4d27f125bfc5bf0d6c"],["/ja/2016/01/Android-Study-1-22/index.html","ce2ce561ab995e7bd4b2d9af4bba4e50"],["/ja/2016/03/2016-03-20/index.html","bef8d09e0c81ef4c0de5aab682430590"],["/ja/2016/03/GSC-535/index.html","17b6c02b7a89e5a32f68fa54f14bb9b4"],["/ja/2016/03/gulpjs-1/index.html","599e67e73a23c1309526f725cfadebfd"],["/ja/2016/03/hexo-theme-paper-white/index.html","1a8476722e96fbaa7d4c993a6336edb4"],["/ja/2016/04/2016-04-19/index.html","db42428db71a4b2d17992e433180f5f9"],["/ja/2016/06/2016-06-16/index.html","8168eba1b4112c1de2989b38031a0d6f"],["/ja/2016/09/2016-09-18/index.html","a86aa561425f7fc0205a86f85874f5fc"],["/ja/2016/10/2016-10-27/index.html","7628ca5cff38c8cba5eaaab806957808"],["/ja/2016/12/config-switchresx-and-2khidpi/index.html","99aa241a43a83ce069f77f546ab8b6de"],["/ja/2016/12/improve-duoshuo/index.html","bcf4450cde78ad7bc0abb741dbdab130"],["/ja/2016/12/use-travis-ci-your-blog/index.html","982269cdd35f1574559b9d1db8195880"],["/ja/2017/01/2017-iyahoi/index.html","7abca854da9c9993cdc15c9f05393efa"],["/ja/2017/01/webpack-amd/index.html","18afebe799c5e4796740e9952e92f305"],["/ja/2017/04/kotobukiya-syaoran/index.html","f48002aaea0015cf659558fcf51b9caf"],["/ja/2017/04/macbook-and-surface/index.html","63891022d8a4a435a4c2a9e881bfe080"],["/ja/2017/04/uc-hyakuya-yuichiro/index.html","e12bd5f70b1956c98d61f8a70da8a832"],["/ja/2017/06/noragami-seichijunrei/index.html","98de4393a6ac727b14529d593f58d9b3"],["/ja/2017/08/cross-compile-55-libev/index.html","b608d60822637749594077cebc1a6601"],["/ja/2017/08/explore-service-worker-working-lifetime/index.html","fbcd1a3b0240ac6e2653e1914062088e"],["/ja/2017/08/hello-jp-world/index.html","95a2333e4a732bdc8410df4474785ffa"],["/ja/2017/08/kiminonawa-tokyo-seichijunrei/index.html","771a8292f0e00400442f6d9b2f469f9b"],["/ja/2017/09/record-user-login-status-methods/index.html","6e57eac017222630dc3f14a71d252efa"],["/ja/2017/10/vue-typescript-early/index.html","d51305ebbd7f926df33f3342b0ad5f7b"],["/ja/2018/04/2017-end/index.html","6a644a8d0e98a47f9d102afa90cf6a36"],["/ja/2018/04/twitter-account-activity-api/index.html","b03cc57e37ac542111171c4350777429"],["/ja/2018/05/buddy-complex-seichijunrei/index.html","b6eff57c5796fc41eefcf24ba592ae78"],["/ja/2019/05/2019-05-16-record-jp-digital-TV-on-nas/index.html","4e36cd08659c8aa8f06710bf76b847a5"],["/ja/2019/05/2019-05-17-google-io-tech/index.html","7d2669f1c54757fbce572bffc351c4fc"],["/ja/2020/06/cls/index.html","c6d3d3665f367d63e080794f7c9a3a1f"],["/ja/2020/06/try-serverless/index.html","280b8d0cced389bafa524e70927affc5"],["/ja/2020/07/macos-node-require-path-case-insensitive/index.html","908761f9d3f9b362e146ff971a0ff1be"],["/ja/2024/01/transmission-under-vpn/index.html","02baba8da27bba464bca4f0e28fa6b4c"],["/ja/404.html","2fc1cf8f5f6987aee367d77c9209447a"],["/ja/about/index.html","0c4c61baafefa84c5220c50957474809"],["/ja/archives/2017/08/index.html","0ad6798ff7072c5303cdfcdeb87cf103"],["/ja/archives/2017/09/index.html","53eed77f0e95f8cdfa1fb664a82b57f2"],["/ja/archives/2017/10/index.html","1932bc0311f0f12e5b59c7e7b54490ee"],["/ja/archives/2017/index.html","1df555817e044215fb4f13661f390741"],["/ja/archives/2018/04/index.html","700f7a26652762af6b31e268c1e19bb2"],["/ja/archives/2018/05/index.html","086c570874f978fcfe2091a74d853c9c"],["/ja/archives/2018/index.html","425437236d43a19df8522fd71fbcc592"],["/ja/archives/2019/05/index.html","e4bcacdf5cfdaf006c4f4664b7212d33"],["/ja/archives/2019/index.html","2537d35a176b00a3310523c160025259"],["/ja/archives/2020/06/index.html","eab866d1204e4845bb63c7dd898686db"],["/ja/archives/2020/07/index.html","261525a5dcc61561d57e22caeb02577a"],["/ja/archives/2020/index.html","f71c23ff7e59b3d5629bb94953ba662f"],["/ja/archives/index.html","79d91f51846f8f5b8bce5265cbad71ff"],["/ja/categories/ACG/Travel/index.html","c7c0ed0d3f7ce7cfcb44d3ecb3273885"],["/ja/categories/ACG/index.html","1a5ed71302615d0730301c41aef06859"],["/ja/categories/dev/Front-End-Dev/index.html","130cee8d5c10c8621a6a836d974bd9c7"],["/ja/categories/dev/index.html","218e27ad8a41c8d33e8cf4344afe4ca5"],["/ja/categories/uncategorized/index.html","a8b5e126f01db97872320bb5fd5105e2"],["/ja/index.html","ae02b65ed53fb81f3bbeb836729a9ec3"],["/ja/nihongo-test-page/index.html","73cdc2106e10ff8559613bea65c167fe"],["/ja/resume/en/index.html","1cc20765d0d231da2e1cc202f335cd80"],["/ja/resume/index.html","23efd6da41ab3dcdd94d44820ddc265f"],["/ja/resume/ja/index.html","888b57d4da0a37997ae570dbdae7866c"],["/js/instagram.js","7d7a9e2e7286ba2d5b6d12068214f0c3"],["/js/jquery.lazyload.js","28c23bc40080d31144776e9a8736837f"],["/js/main.js","2e92f29b0cd90bddc062915eb46a858c"],["/js/mobile.js","20029df2609ddd5d2b2d346edbb297c0"],["/js/nextpageajax.js","c3bde8d7bb1f967fb319f57a187ea51a"],["/js/pc.js","631b535186aab0e262485ee2bf9da628"],["/js/ripple-effects.js","b9c11903da0ef5c3d790b41369c3137e"],["/js/share.js","de52ac3d43e43c1951a08b0804458a8e"],["/js/totop.js","661822968b58fd439f46bd54031238d6"],["/keep_origin/affiliate_jump.html","71bf6d72c5d080ec2b3f8ecfae3d71ed"],["/nihongo-test-page/index.html","0d6ab38182b5c48a9578694f185e84be"],["/page/2/index.html","d977d33889b687943b2a5f6ffb139a6a"],["/page/3/index.html","30b5bc194272db2f9a2ca506c334f468"],["/page/4/index.html","97f5d1b039e793f77568a2d9c2596104"],["/page/5/index.html","3d0565658315526e4f3c1a2e49cdf0e0"],["/page/6/index.html","972eb130bf387f63fb698c4597db7f88"],["/page/7/index.html","23536d7f2077eb6b50879d67cc394acd"],["/photoswipe/default-skin/default-skin.css","426e8908d7426603ca203b6d16281b1e"],["/photoswipe/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photoswipe/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photoswipe/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photoswipe/photoswipe-ui-default.js","0c9196aa8943ce8a8045c9f4cc62915c"],["/photoswipe/photoswipe-ui-default.min.js","9517baca43cd4e9cb23ff337fbc1baa1"],["/photoswipe/photoswipe.css","7dc0df107159e1be66d4464171561e5b"],["/photoswipe/photoswipe.js","a8d26ff34943c859884acbd6b2531315"],["/photoswipe/photoswipe.min.js","f5cd6479c4e4682545a9603e6b50c741"],["/resume/en/index.html","07c6bf94ad3f499c4b62c4a77ae6b2a3"],["/resume/index.html","9075b831fb7c8555be877de72814b3af"],["/resume/ja/index.html","e144c3e5f73ea93b3b24fd5fa1f84db4"],["/setup-log/blog-setup/github-pages-ssl.html","d5e315a4f7725d0c5a828ab2ac48dfe3"],["/sw-register.js","8c5888854bee5affc9e0a75a0c183ae7"],["/zh-cn/archives/2015/03/index.html","e33987dfb3037efc8c1ef025de7d7066"],["/zh-cn/archives/2015/04/index.html","a4b2321acc6493f4087563debab4d380"],["/zh-cn/archives/2015/05/index.html","19d6acc504c84f1f073210f6cd93701e"],["/zh-cn/archives/2015/09/index.html","053afec8c9a11ae3c690950059ae1793"],["/zh-cn/archives/2015/12/index.html","5cab27ac09fbe45b710dc22c1836023a"],["/zh-cn/archives/2015/index.html","de1bc1a5e22ec4a0078c0087ec6021e9"],["/zh-cn/archives/2015/page/2/index.html","be9bbc0f6b36bc5728a201511e12952e"],["/zh-cn/archives/2015/page/3/index.html","3562232b90353774b37811de264cbad8"],["/zh-cn/archives/2016/01/index.html","872d202eb0e07aeb0c728889ebdeff5a"],["/zh-cn/archives/2016/03/index.html","5faba020a50b6cb4d1e484fff50d47d8"],["/zh-cn/archives/2016/04/index.html","335d185fe7bcfc057e7f1fbc0537d122"],["/zh-cn/archives/2016/06/index.html","434aa3175ca6faa3d5c0f155bf9a7e77"],["/zh-cn/archives/2016/09/index.html","73122d836962e2a8158785ae8ecae813"],["/zh-cn/archives/2016/10/index.html","ff16a5e80b6b3adf01049e93cc460ac2"],["/zh-cn/archives/2016/12/index.html","ba3e4d8c374f5983d8889517b76237dc"],["/zh-cn/archives/2016/index.html","c573c0d5f8e48220ef804c36e9f2535c"],["/zh-cn/archives/2016/page/2/index.html","e359c1788be2f9ee95ccc19d2e759350"],["/zh-cn/archives/2017/01/index.html","2ff71dd6a8b05f8a81a4f3bd1cd9f74a"],["/zh-cn/archives/2017/04/index.html","1acac57e8da915a9d7ac6c2bac8359ea"],["/zh-cn/archives/2017/06/index.html","a2731152fe6ec775026d033d37c69a48"],["/zh-cn/archives/2017/08/index.html","d1fa7c48bd838d392e8398481b27ad76"],["/zh-cn/archives/2017/09/index.html","bdd7eab20b698ea6ca12d0302c152906"],["/zh-cn/archives/2017/10/index.html","3d6803b4e53d44802d17ef510f34e86d"],["/zh-cn/archives/2017/index.html","ed304b6f5399e211f2bf4c1cadf25e98"],["/zh-cn/archives/2017/page/2/index.html","dbbc5cba55ab0040637bcf9520376c6f"],["/zh-cn/archives/2018/04/index.html","aa917ed0e53fdec1089270ff94a44c4f"],["/zh-cn/archives/2018/05/index.html","f73f7aab38df292f592949e5d4e5c9cd"],["/zh-cn/archives/2018/index.html","f86fb2e0ae02e128fc53cd7d625a15ea"],["/zh-cn/archives/2019/05/index.html","27dd6b32154d3e38e12a6995ba727efa"],["/zh-cn/archives/2019/index.html","b52402565f3d87d6f6a6219fb894923d"],["/zh-cn/archives/2020/06/index.html","39b24be073c37194c85208f121374b6a"],["/zh-cn/archives/2020/07/index.html","34c900169022b3769949bbff2f531ef4"],["/zh-cn/archives/2020/index.html","b224ac35088eb5e79fb276c4c38b50a3"],["/zh-cn/archives/2024/01/index.html","5efea22493e598438825d4fd9b4d9efa"],["/zh-cn/archives/2024/index.html","e55df666667ca7e4105744261ff736cd"],["/zh-cn/archives/index.html","0ce9ecfe5f1e8d18635647d6cad5fabc"],["/zh-cn/archives/page/2/index.html","f4b77246619be28c767cf3972abcc485"],["/zh-cn/archives/page/3/index.html","02231d7b531b15587d0a60c40de252ba"],["/zh-cn/archives/page/4/index.html","44b996a37e6b388921484681bda917d2"],["/zh-cn/archives/page/5/index.html","f28a15da25bf30108c3b0d4b806a3095"],["/zh-cn/archives/page/6/index.html","ff1a3b7e57576cbce8168107a104dada"],["/zh-cn/categories/ACG/Music/index.html","ff6aab4a03d69bb358d5a7fc7b72bff2"],["/zh-cn/categories/ACG/Music/self-copy/index.html","61d77ac9311b19c068f224b8ad67ea0a"],["/zh-cn/categories/ACG/Travel/index.html","31d1dab9194f0fcffd15254c712531ad"],["/zh-cn/categories/ACG/figures/index.html","cd32718e46fbd7bf013d92fddb4dfe76"],["/zh-cn/categories/ACG/index.html","99957f873c4c0332d51650cb5ba782b9"],["/zh-cn/categories/dev/Front-End-Dev/index.html","f1b6191d8c11f1cd5ca5ae2e44d5172d"],["/zh-cn/categories/dev/Front-End-Dev/page/2/index.html","7cd57174d9a2843cfb2e5d7028024ee4"],["/zh-cn/categories/dev/HTML-CSS/index.html","19a5efc35151c595cc24eb4445194446"],["/zh-cn/categories/dev/android/index.html","bb95341a0c95e8e9174ec90c96d79ab3"],["/zh-cn/categories/dev/cpp/index.html","5e13439b7bbdf078ed972cd4073a1973"],["/zh-cn/categories/dev/git/index.html","e1ddb4cd6ebde75f5fb473b9c168f9a4"],["/zh-cn/categories/dev/index.html","412b4a223621c1ec06beef1373d05b2f"],["/zh-cn/categories/dev/java/index.html","532df64156f4906ef2544abc87d5b779"],["/zh-cn/categories/dev/page/2/index.html","2cac7e4a4967727b593b50857679272a"],["/zh-cn/categories/dev/page/3/index.html","8cbbea2242ce6e1c71808f5d5345c170"],["/zh-cn/categories/maintaince/blog-setup/index.html","50c28cbc122951928d5a55f0ee622b02"],["/zh-cn/categories/maintaince/index.html","c4a29096070316c79a30298f36adee18"],["/zh-cn/categories/maintaince/macbook/index.html","0ccaa9402ebe8f3880d74078bc338662"],["/zh-cn/categories/maintaince/router-config/index.html","aeee6d20a24bcc7aafc7eddb60b46347"],["/zh-cn/categories/notes/index.html","8dd93a8b44705c918c0b01ad80c753ea"],["/zh-cn/categories/tricks/android/index.html","4db7c66e68efe7fdeb6bcc6761460208"],["/zh-cn/categories/tricks/index.html","620853ecd440f6bf3f4683abbc276ad2"],["/zh-cn/categories/uncategorized/index.html","9877ab8b66e674368fbfb6b9b010d615"],["/zh-cn/categories/works/Front-End-Dev/index.html","a6b7f085cae248f7fd80a73e19bac860"],["/zh-cn/categories/works/csharp-wpf/index.html","13f93b07b72f18d842ca77bf21722a8c"],["/zh-cn/categories/works/index.html","ed1dd3e0da3e3a4ef0d71cf8ffb0340d"],["/zh-cn/index.html","2cfa1a400b8bf0a1885aca99e2312452"],["/zh-cn/page/2/index.html","c04354bd0424cb3e1b47653be3601b9c"],["/zh-cn/page/3/index.html","8ff71099b1dcd2b8d1058129bff2bb2f"],["/zh-cn/page/4/index.html","8a2c80ef38585541acdb6c5e6464858d"],["/zh-cn/page/5/index.html","2ffc50df1d91c63262ba571d612731e1"],["/zh-cn/page/6/index.html","731f26a6e7edf245a080767e492c2ac4"]];
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
