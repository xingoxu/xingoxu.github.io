/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/03/WNDR4300-setup-log/index.html","6b8ea4d496aa90005b8e1cf79e71d0ac"],["/2015/03/android-hostname-change/index.html","a5cedd9ed7fb2a1415e74f36ff62797f"],["/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","e33d6674acdb5defaae8db53d81d182c"],["/2015/04/android-chrome-issues-with-webpage/index.html","a549f790eb2d8f8cc6162da8829884da"],["/2015/04/cpp-study-log/index.html","eefea9bc395fc3325330fe435158ee3b"],["/2015/04/github-pages-ssl/index.html","a2a53b342402e1992c122f3076d9a21f"],["/2015/04/hello-world/index.html","e9907cc53a72f57cdb906a76282c94c3"],["/2015/04/hexo-setup-log/index.html","8c05910441843a6481406969a6b5f22a"],["/2015/04/self-copy-cd-inazuma-1-html/index.html","d7f286cc5e3b06329785672914012081"],["/2015/05/cpp-inherit/index.html","6a7ea9386c9cefc825078c1234a8b143"],["/2015/05/cpp-polymorphism/index.html","39ee21556ba9cccd6b02dfae10e41ed5"],["/2015/09/android-root-ota/index.html","ef243963e428b732bbef96ff6904059c"],["/2015/09/java-learningNotes-1/index.html","316a8adeb6a867f35e26dcf3f3b2a829"],["/2015/09/newblog-newlife-2015/index.html","528e4e2e00a403d308baa6d9c300374d"],["/2015/09/router-rebuild-2015/index.html","586a02bf0bf53399d3ce337b5d206136"],["/2015/12/2015-12-21/index.html","0ed11b4babd88dbf0f91d4c19f9debce"],["/2015/12/PixInTouch/index.html","d0f9cb14053bf2552841e84511a43d0b"],["/2015/12/git-study-1/index.html","56987c566cf72b6edfe20e427ed3b5fd"],["/2015/12/hexo-backup-and-migrate/index.html","f59d4f18c0361d309c5640782b0a2a47"],["/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","fb351999f37d9ce8e793a7525fd34bca"],["/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","856640fd0ddd512606d354d21c8a9175"],["/2015/12/router-reconfig-2015/index.html","09fe1716a39ba341c7222da9755447f4"],["/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","d604fc1409ec0520789b158d17fd15c9"],["/2016/01/2016-stepping-further/index.html","beba0d9643ad86b3e0599a27ab668b9b"],["/2016/01/Android-Study-1-22/index.html","9e2d537c7667844a6a77247a196c2372"],["/2016/03/2016-03-20/index.html","d7870e28bdc866bbbc7094bef756ab9b"],["/2016/03/GSC-535/index.html","2c31085fdef1e166f122050a11fc6b4b"],["/2016/03/gulpjs-1/index.html","aeb21af65152e2a0bbb6e457f16088ae"],["/2016/03/hexo-theme-paper-white/index.html","ce05ca68ad468529559e240dc56b97a0"],["/2016/04/2016-04-19/index.html","9b0d0af500b3f67dbde9abe5fce5c148"],["/2016/06/2016-06-16/index.html","578cd7ebdb048c91eea3845c1d10f23c"],["/2016/09/2016-09-18/index.html","51d5b98c1f459c5a56cfb635d1f9faf8"],["/2016/10/2016-10-27/index.html","5df7411b5e172dff4ba9a2fd83e22777"],["/2016/12/config-switchresx-and-2khidpi/index.html","70f6ce75257789544f827c2b86875e4c"],["/2016/12/improve-duoshuo/index.html","f90f2226466ed45e6166cff90a85c8e6"],["/2016/12/use-travis-ci-your-blog/index.html","462c4672a7035a8a42081a93099e376f"],["/2017/01/2017-iyahoi/index.html","3e30cca7b6dadb49da613543b0cad784"],["/2017/01/webpack-amd/index.html","4c7f14759e0ce2a88cd150b23e19ea8a"],["/2017/04/kotobukiya-syaoran/index.html","c87bcbe226c1714d2544a0bbdea8e681"],["/2017/04/macbook-and-surface/index.html","28a650d3e46a50134fa704d455d3212a"],["/2017/04/uc-hyakuya-yuichiro/index.html","bae363d63a8c73f6360cac749539ddc5"],["/2017/06/noragami-seichijunrei/index.html","1731c0924e5810da5466cb72a1d7fcf7"],["/2017/08/cross-compile-55-libev/index.html","f8299282f9ddeaa8d0c0571ff93330f3"],["/2017/08/explore-service-worker-working-lifetime/index.html","9798658d0218a5feaa4800c73e330574"],["/2017/08/kiminonawa-tokyo-seichijunrei/index.html","7301f669a5cc01a85317ea2e63e22efb"],["/2017/09/record-user-login-status-methods/index.html","49d0f059145edaa7e1a84e18657178a7"],["/2017/10/vue-typescript-early/index.html","42008ceb5f5dfbff5ab8ece477f7ff13"],["/2018/04/2017-end/index.html","530166c97970d87baa7aeadef8a3e4a4"],["/2018/04/twitter-account-activity-api/index.html","58f95626f48d3c5b783eed65c0a8fc44"],["/2018/05/buddy-complex-seichijunrei/index.html","b977caa6857c7859ca92944f9f3b6ca6"],["/2019/05/2019-05-16-record-jp-digital-TV-on-nas/index.html","9838a90f8f44b5d5c217bbe405704238"],["/2019/05/2019-05-17-google-io-tech/index.html","13151e8872b066483a41006cff3211b7"],["/2020/06/cls/index.html","8cfe83cc014c3b7302304986a058b269"],["/2020/06/try-serverless/index.html","66e9d1594442851596ea4bd58388112f"],["/2020/07/macos-node-require-path-case-insensitive/index.html","3140e10876c96467d02c5f33169f0157"],["/404.html","29d39861e71b672863e3643d24b716a2"],["/about/index.html","4df3f5326009a63f07227e5687897492"],["/archives/2015/03/index.html","d2680579fe465a7f8e9e9b4474687253"],["/archives/2015/04/index.html","c609189c4736197cea16644570085258"],["/archives/2015/05/index.html","216fc833cb0bd3e67a2cb53687d69f31"],["/archives/2015/09/index.html","74e2ef86e2cc044a57d82ec1f858201d"],["/archives/2015/12/index.html","a731eab8e7d2f7eae87e5f9603fccca8"],["/archives/2015/index.html","f230e40d3d19c5e57cd551abcc4015e0"],["/archives/2015/page/2/index.html","8339c0c193312b7768ce0944967775b1"],["/archives/2015/page/3/index.html","fadd5851399dc8a228b87de986815d3d"],["/archives/2016/01/index.html","03c16c3503fddf6816b7a101eb33c528"],["/archives/2016/03/index.html","67d3631533b9a5d742766d739382ebd6"],["/archives/2016/04/index.html","fb53caa0d20cfc33534cab15ea493827"],["/archives/2016/06/index.html","eb506ea9baafcfcd91c34fea52dd922a"],["/archives/2016/09/index.html","672e23dcec4389a1f5ff74342a3246b3"],["/archives/2016/10/index.html","6195a47377aad1554efade8fd1a07f2e"],["/archives/2016/12/index.html","fc1b3514d4a207bacf76750666f1dffc"],["/archives/2016/index.html","e8307d3aad8176891d79a669a9c8c4e2"],["/archives/2016/page/2/index.html","343e0ff0b47da7536b35c7a2ae49eaff"],["/archives/2017/01/index.html","c09e08e744ad249d2e9f0e30e51c8d9e"],["/archives/2017/04/index.html","54aee22a331b97358f43385c4aa7d1e4"],["/archives/2017/06/index.html","4e0be2195c467f0061d19a1f6eff89d8"],["/archives/2017/08/index.html","fddcf68b6eb8432473a8eeb17abe38be"],["/archives/2017/09/index.html","f5867a15e0da7fde6ce0abbc7d4ad61a"],["/archives/2017/10/index.html","40fd114d112b81d0983d8778cb0a15a2"],["/archives/2017/index.html","5074490c307943a6679c199d54d74106"],["/archives/2017/page/2/index.html","e1ed7ecf529903d775343cceecf1bd23"],["/archives/2018/04/index.html","1a5d05dda8cd7bc7ab5861f6ac8301b9"],["/archives/2018/05/index.html","6d9b24a3c23091a4cebaf47e76a89904"],["/archives/2018/index.html","65caa88ec8f60a34951912a4f570e420"],["/archives/2019/05/index.html","d19630c09cb07f8f278c594ce6151743"],["/archives/2019/index.html","fa18105498c131ba095e36b941c65e21"],["/archives/2020/06/index.html","47dac41747f2d1aa823f14e9c0eb66bf"],["/archives/2020/07/index.html","3bfeb162564575a83eb5ce49834b7cb6"],["/archives/2020/index.html","6b84952f1ec17b1636ac615769c4181b"],["/archives/index.html","ca8edc8f84ffef6a4229158105cdf040"],["/archives/page/2/index.html","1d57108809e2111ecb5351fbd49dbed4"],["/archives/page/3/index.html","1eaf1cd92621e163110363b3a5aadc6f"],["/archives/page/4/index.html","2ad87e761bda721070c03d3bb62b2c1a"],["/archives/page/5/index.html","e63496c88bbb3f31ca3d353d44563603"],["/archives/page/6/index.html","6b969f44742381b5ab007dc66f26aec4"],["/assets/images/about-me.png","a066d06c3d9d1fe56c4d921cec7febf3"],["/baidu_verify_YbTSlpWIUJ.html","779049c3a50695ceb3a388ce1e8bc1b9"],["/categories/ACG/Music/index.html","1b188665ae24b77ad520259ced327de2"],["/categories/ACG/Music/self-copy/index.html","2d652560eb333aa1e2eeb8c3eb8029ef"],["/categories/ACG/Travel/index.html","c1787316c94f58a8a8c47166cc077cf9"],["/categories/ACG/figures/index.html","c221e0f97b85b173b8c3b66dbb45c111"],["/categories/ACG/index.html","c4fad0083c08cec465143599f4d7ff0a"],["/categories/dev/Front-End-Dev/index.html","b0b094d3695cb31ecbcaf5b600cc8f4b"],["/categories/dev/Front-End-Dev/page/2/index.html","606c3ddadf226b25c3f1bd3350a88230"],["/categories/dev/HTML-CSS/index.html","58078b5474fa92a8217e3a1da7b80189"],["/categories/dev/android/index.html","ceb7834b31ad24c2fc92bc9d5fcc4477"],["/categories/dev/cpp/index.html","8145ae4cb7de3a6a8e07fc705a5983d9"],["/categories/dev/git/index.html","595f50a5c46101c12b6f5f29f6867288"],["/categories/dev/index.html","5590869a0e04febf8958494c0d778416"],["/categories/dev/java/index.html","495e25d16dcc05d078e9b2c218bf4cab"],["/categories/dev/page/2/index.html","d07c6cf25ea8fcc3c1be5e637bebdbf3"],["/categories/dev/page/3/index.html","70e6e994fdeb5b1636fda5580d7bce11"],["/categories/maintaince/blog-setup/index.html","5a05f2c9fdd86b8cb96f0643b87d9841"],["/categories/maintaince/index.html","eb0379cff91ad0a258360f63c757d3ea"],["/categories/maintaince/macbook/index.html","902140325467f6197388e8921cb9f06c"],["/categories/maintaince/router-config/index.html","b523937c192d5c08f11e53f552a73e56"],["/categories/notes/index.html","92abda3f109c49ff23d2bc859d7ea784"],["/categories/tricks/android/index.html","be1008298bd68fe28aa62f92be318274"],["/categories/tricks/index.html","2e57d62c73a73b3e28b28ebdae857275"],["/categories/uncategorized/index.html","e8cd554a8183ea929b6ef09826b153a1"],["/categories/works/Front-End-Dev/index.html","557f4a4875e16628dbacc5bf375dba19"],["/categories/works/csharp-wpf/index.html","29640c527fcb84779fd685f89920c11c"],["/categories/works/index.html","60fc6f7ada5239bf366b61f9c74b806a"],["/css/seichi.css","c60ad00990790aacbe0a9ff08766c515"],["/css/style.css","e3abc56736917946e8536ef38cc2c5cd"],["/google311213f0c8d812a9.html","51f1ee3c2f13a21a1a40b3dae4954454"],["/img/coderwall.png","1976fe70f1ee8ed243e0975402e06a2d"],["/img/delicious.png","952d9b54d8bcfe7b998f67ff48c4dbce"],["/img/douban.png","d42a163f932100e621d22732db34ecdb"],["/img/facebook.png","4bd685f6c9fdaccabf07bdd52173facb"],["/img/github.png","3c4b6267a1a3fedebdc7d089610ecfe7"],["/img/google.png","c385f5304465716b2d6c9ada94c657ab"],["/img/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["/img/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["/img/linkedin.png","4c72c4896f3c23f736cb1ad08f0c866e"],["/img/mail.png","38a7b8302dac028bf03b22d228938abf"],["/img/pinboard.png","9b6186cb97adbe50311f94e50f2392cf"],["/img/pinterest.png","e1b8e655d1b99b40ebcbd96977ae234e"],["/img/rss.png","ec8cf9b5a98011aa75cc0a4f25024dc9"],["/img/scrollbar_arrow.png","be5381cedbd6b778b1d92e224fd71cf7"],["/img/stackoverflow.png","039128ececb47b33bccedd98dc9fc809"],["/img/twitter.png","d2289a4936fefa41d9f92cf89939be5b"],["/img/weibo.png","b382032b316ee38c6d537fe9d36ae54c"],["/img/zhihu.png","e6352c0e1957beef3009268ae747c3aa"],["/index.html","204652b3fbe197ab09661c098a680d10"],["/ja/2015/03/WNDR4300-setup-log/index.html","b6c3fb5d3ef191fd8065c073bc10cdaf"],["/ja/2015/03/android-hostname-change/index.html","e78d8d26036880fbadfd427406472dcc"],["/ja/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","5c592f823d3e18b395191de2e712ad58"],["/ja/2015/04/android-chrome-issues-with-webpage/index.html","e71b833d03fdfeb51e2aa0fb9f27250d"],["/ja/2015/04/cpp-study-log/index.html","605f984ea2ed7b9be9491926804f0a6e"],["/ja/2015/04/github-pages-ssl/index.html","9134c285c0c7692746fefd786f417cd3"],["/ja/2015/04/hello-world/index.html","bdcdcd6881cdf5fbdedff08a53e187c0"],["/ja/2015/04/hexo-setup-log/index.html","d6886e3d6f301c691b46af977b927ab6"],["/ja/2015/04/self-copy-cd-inazuma-1-html/index.html","d5c09e868e7c6c7e03f9fa3e0d677cb0"],["/ja/2015/05/cpp-inherit/index.html","68021b4997781062ed09354ed4064b2b"],["/ja/2015/05/cpp-polymorphism/index.html","eb0d68a07013fe925857996dbb073be5"],["/ja/2015/09/android-root-ota/index.html","06287aa1cd75eab17dcc9b064d2e5582"],["/ja/2015/09/java-learningNotes-1/index.html","fea9ab33d1481254db6f0fc9f3226c02"],["/ja/2015/09/newblog-newlife-2015/index.html","e76609f903b3cf3a737f7d1f590c6a76"],["/ja/2015/09/router-rebuild-2015/index.html","07b0a526cd2a5b52cadafaa67c9d215f"],["/ja/2015/12/2015-12-21/index.html","2d00c439001d5a47b22bf4a608305d79"],["/ja/2015/12/PixInTouch/index.html","f8ce21e6e6a25053244393eb6f004bf9"],["/ja/2015/12/git-study-1/index.html","d0be8b2b9ed45883afe44a1b81727d8a"],["/ja/2015/12/hexo-backup-and-migrate/index.html","1d7f31469c26de3f3567b85835e2f550"],["/ja/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","a996183488f6dc1995cb32363aefb277"],["/ja/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","a429d9f5a4a89d11ca9ff8ef8041da9b"],["/ja/2015/12/router-reconfig-2015/index.html","d28b795960ce1f1c71b021f405a414c3"],["/ja/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","8feff723d4f1579b0e0a43ac4a719ab5"],["/ja/2016/01/2016-stepping-further/index.html","c86390cbd64179e7776c05f46fef8355"],["/ja/2016/01/Android-Study-1-22/index.html","1f42a6033abea7d8b43528d2a404cc69"],["/ja/2016/03/2016-03-20/index.html","a105bc2ea49ce295631c942f091be045"],["/ja/2016/03/GSC-535/index.html","92903d1454a1743ddcc6452ca594a558"],["/ja/2016/03/gulpjs-1/index.html","d69cb58f7a0ecfbb321346836ab9347f"],["/ja/2016/03/hexo-theme-paper-white/index.html","01a321b1b6d24e64417266dedd914329"],["/ja/2016/04/2016-04-19/index.html","f75ea856c1b8d81fec19416c55aac60a"],["/ja/2016/06/2016-06-16/index.html","68a9c60838edde5e95116b4c935a501c"],["/ja/2016/09/2016-09-18/index.html","b5362ae671fe9a04e0374968697ae733"],["/ja/2016/10/2016-10-27/index.html","dc331e722a6257fba848e6a89b0c4743"],["/ja/2016/12/config-switchresx-and-2khidpi/index.html","53d6e3077354998123b1f9306d54b04e"],["/ja/2016/12/improve-duoshuo/index.html","cb2365e8a02bd76de76e01fc493b5f2c"],["/ja/2016/12/use-travis-ci-your-blog/index.html","27abd8ddad780c514c48196b18e6b754"],["/ja/2017/01/2017-iyahoi/index.html","335b3b32d7cb3d3c22bdb7473733b339"],["/ja/2017/01/webpack-amd/index.html","4bbb5f89a622916bdab1dae45a56c3d9"],["/ja/2017/04/kotobukiya-syaoran/index.html","84ee2d9985bab94486236bd1b19618bf"],["/ja/2017/04/macbook-and-surface/index.html","d8cc2d6a5f37d1c1347bbc1b84f980f8"],["/ja/2017/04/uc-hyakuya-yuichiro/index.html","e0a0d770bf99b3b666a5d5ac04a4fc46"],["/ja/2017/06/noragami-seichijunrei/index.html","7b4bb48cc50c3d1a4bddda720a72596f"],["/ja/2017/08/cross-compile-55-libev/index.html","750eca2441e62589a374fda82c8c780f"],["/ja/2017/08/explore-service-worker-working-lifetime/index.html","3d84ba1690b4e0e39a3671d6d919a1ed"],["/ja/2017/08/hello-jp-world/index.html","e72766b1de7a869b1ea290e7597a74ba"],["/ja/2017/08/kiminonawa-tokyo-seichijunrei/index.html","fcf5545ae56c62e5045d84e9da7bee1e"],["/ja/2017/09/record-user-login-status-methods/index.html","aac9a99f198fbed57e443fb1eb839861"],["/ja/2017/10/vue-typescript-early/index.html","4ce189c31d049eaf641a8c62aa4b1a09"],["/ja/2018/04/2017-end/index.html","38c3c1ceb0abff9ec019608d9fcb6975"],["/ja/2018/04/twitter-account-activity-api/index.html","da2086e8aa65142ccf01ba33ac426ae2"],["/ja/2018/05/buddy-complex-seichijunrei/index.html","84c3f7c9989ea7b4ccec936ceb2ecde4"],["/ja/2019/05/2019-05-16-record-jp-digital-TV-on-nas/index.html","a84ad1ad0782d2c1397582cd6f710ad6"],["/ja/2019/05/2019-05-17-google-io-tech/index.html","3dd6cbb3de3ff23a702e12ece43fbd82"],["/ja/2020/06/cls/index.html","0c7755be232a505a2578a99bfef7932e"],["/ja/2020/06/try-serverless/index.html","398bb7f7388b2be7a0f4b0c66407a9f1"],["/ja/2020/07/macos-node-require-path-case-insensitive/index.html","2240e6950dea1bd890bdf4d3dd5f3a9d"],["/ja/404.html","7c636578fd32eeb29d8b4d8b8d98bc4a"],["/ja/about/index.html","69262af983a0aeb0b2d6a104aae14510"],["/ja/archives/2017/08/index.html","46febb0c07b67605f362072e2104bd61"],["/ja/archives/2017/09/index.html","7b22712bbf8af9530603d69f990abf89"],["/ja/archives/2017/10/index.html","2e52e68419637a7c6d33fb87ef7fc30e"],["/ja/archives/2017/index.html","bc881e26a5de882be4bfd6d31e6a0b12"],["/ja/archives/2018/04/index.html","99018dc5b0ef9540add76ee30b72515d"],["/ja/archives/2018/05/index.html","3c352146ecc6c3961e55203bf138f324"],["/ja/archives/2018/index.html","43e590ae17bb49e91b168de5602703f7"],["/ja/archives/2019/05/index.html","2cd36164ac9a21f98cc7e3bc82801545"],["/ja/archives/2019/index.html","20115e879d968107162ad4c0763a9bf4"],["/ja/archives/2020/06/index.html","55c85b5b5057fd8f139ca77b6a18d4bc"],["/ja/archives/2020/07/index.html","15b9c93c1cd39105ac3770c6acfa9ad0"],["/ja/archives/2020/index.html","869c68fc3e4ce2afcd4bb097acf3fb0b"],["/ja/archives/index.html","7402565f09d59e997bd7ae56fbb3c4d9"],["/ja/categories/ACG/Travel/index.html","4585a380b10e67403828ee749e901234"],["/ja/categories/ACG/index.html","ead625a7a9d5f7e3433d9620ad2ee7a5"],["/ja/categories/dev/Front-End-Dev/index.html","00d9ee0f7e38ed76640dc32fca14aeea"],["/ja/categories/dev/index.html","814de24a70ac3180e7d3fcaa39f922bb"],["/ja/categories/uncategorized/index.html","e669842191b057679c79e2407a36d3e9"],["/ja/index.html","3bff2653e46bcd220084d07130eae9f8"],["/ja/nihongo-test-page/index.html","fe254e387c2c1053c97e8fc180ddc1ec"],["/ja/resume/en/index.html","d83719654eb3f6c4b2a56a8eb403396b"],["/ja/resume/index.html","d91253cb19c24c17054072c5c739e4dc"],["/ja/resume/ja/index.html","cb59bc1e38c470aa7bf1362002b0be9f"],["/js/instagram.js","7d7a9e2e7286ba2d5b6d12068214f0c3"],["/js/jquery.lazyload.js","28c23bc40080d31144776e9a8736837f"],["/js/main.js","2e92f29b0cd90bddc062915eb46a858c"],["/js/mobile.js","20029df2609ddd5d2b2d346edbb297c0"],["/js/nextpageajax.js","c3bde8d7bb1f967fb319f57a187ea51a"],["/js/pc.js","631b535186aab0e262485ee2bf9da628"],["/js/ripple-effects.js","b9c11903da0ef5c3d790b41369c3137e"],["/js/share.js","de52ac3d43e43c1951a08b0804458a8e"],["/js/totop.js","661822968b58fd439f46bd54031238d6"],["/keep_origin/affiliate_jump.html","71bf6d72c5d080ec2b3f8ecfae3d71ed"],["/nihongo-test-page/index.html","82ddb741232f2c8a122f621159668d7f"],["/page/2/index.html","811cdd4205a5ddafdf74cd10403f8421"],["/page/3/index.html","7a7148bf6bbdd72fab68295e732a8583"],["/page/4/index.html","ce1d040e89a21d272e252935de79fe6d"],["/page/5/index.html","2bc69e696755b29061fabaf06f579aca"],["/page/6/index.html","da4d4b84cdbe41189ffe217735878e1d"],["/page/7/index.html","ba9524d950d33426b0fe7e69c263456b"],["/photoswipe/default-skin/default-skin.css","426e8908d7426603ca203b6d16281b1e"],["/photoswipe/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photoswipe/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photoswipe/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photoswipe/photoswipe-ui-default.js","0c9196aa8943ce8a8045c9f4cc62915c"],["/photoswipe/photoswipe-ui-default.min.js","9517baca43cd4e9cb23ff337fbc1baa1"],["/photoswipe/photoswipe.css","7dc0df107159e1be66d4464171561e5b"],["/photoswipe/photoswipe.js","a8d26ff34943c859884acbd6b2531315"],["/photoswipe/photoswipe.min.js","f5cd6479c4e4682545a9603e6b50c741"],["/resume/en/index.html","5665967a40cb7b54a98ca10aef929911"],["/resume/index.html","e3ef9bd33e24414b7fe2dbd625eb6eef"],["/resume/ja/index.html","1885706d4699859a46beafb6be855890"],["/setup-log/blog-setup/github-pages-ssl.html","d5e315a4f7725d0c5a828ab2ac48dfe3"],["/sw-register.js","7550b3398579961fb5475e8dcdf1ce0f"],["/zh-cn/archives/2015/03/index.html","c12bd44b3d78ea8ee8c23963f2884c2e"],["/zh-cn/archives/2015/04/index.html","9679f4e14f862665210681e54effda1c"],["/zh-cn/archives/2015/05/index.html","af91685b4c17ede9f1d5a139ec8a8092"],["/zh-cn/archives/2015/09/index.html","c02ec0d5c95a347d8244b7776e25f9b8"],["/zh-cn/archives/2015/12/index.html","756b49e799b0579e3ca9098d8290734f"],["/zh-cn/archives/2015/index.html","1ed9779fc77439c62233f526232f853c"],["/zh-cn/archives/2015/page/2/index.html","368210f1157d4d55e33cc8ecf6abf1cd"],["/zh-cn/archives/2015/page/3/index.html","7a85dc611a9f50bd1ddea05bd3c97529"],["/zh-cn/archives/2016/01/index.html","07117eb05df30f76d84b4f9ea86efe98"],["/zh-cn/archives/2016/03/index.html","368c5276a31b06d1fcc4d22ec88c4822"],["/zh-cn/archives/2016/04/index.html","7b3f3ec990a0e7566f0b817094acd963"],["/zh-cn/archives/2016/06/index.html","4fe30d9ef99906fedc7d9f887737feb0"],["/zh-cn/archives/2016/09/index.html","421f4e46a186e625d2c0795150ced4f6"],["/zh-cn/archives/2016/10/index.html","68266f927b0edfa012da196454d984bb"],["/zh-cn/archives/2016/12/index.html","c154088e7beaf31530a63733a1f70560"],["/zh-cn/archives/2016/index.html","06357712263789c9a26d5ba00ee88810"],["/zh-cn/archives/2016/page/2/index.html","7e426e8abb7ccc6e2e340a7189c25393"],["/zh-cn/archives/2017/01/index.html","e2d13e7b86a0e6a3eddb77e457aa4ac1"],["/zh-cn/archives/2017/04/index.html","08222fbe6bcc184acd79c9ac533ac154"],["/zh-cn/archives/2017/06/index.html","0d7f56dca85e90b6d3e3d3e1c3221cdf"],["/zh-cn/archives/2017/08/index.html","498fd4adad278fa8064c216677543cd1"],["/zh-cn/archives/2017/09/index.html","b6a8f6ee0e5f8ac250769c78c231cb51"],["/zh-cn/archives/2017/10/index.html","a275585e2f811dbca0827cba0c59e663"],["/zh-cn/archives/2017/index.html","0f715d3230c8ea22cd782eda764c67e0"],["/zh-cn/archives/2017/page/2/index.html","39a52be4767fc478628c9b9c7ad57958"],["/zh-cn/archives/2018/04/index.html","d484530b4422fdb676c2fb4877dce88c"],["/zh-cn/archives/2018/05/index.html","ae9f2e3c5cc99ae8bf0f62d1c884789b"],["/zh-cn/archives/2018/index.html","765b7699c80dd36537ef81b3ce402d15"],["/zh-cn/archives/2019/05/index.html","876ba1cb5ceffcf97b3953e9b61782eb"],["/zh-cn/archives/2019/index.html","ac0efafb53cc794c497b17e2b16eb537"],["/zh-cn/archives/2020/06/index.html","1dc004e88b3995836e29befed04af505"],["/zh-cn/archives/2020/07/index.html","df1fc1385bd61223cba5352f0633d0d6"],["/zh-cn/archives/2020/index.html","163507e250c1825ab0bd2073e51e5482"],["/zh-cn/archives/index.html","f6f99e65a0cc2b9166c362e4b6bcfff8"],["/zh-cn/archives/page/2/index.html","fa955631dc99ce1f6feed49628010a69"],["/zh-cn/archives/page/3/index.html","b58dc420e80558cdaa08a2d55c03d29b"],["/zh-cn/archives/page/4/index.html","21a168c3bb60dbbcd4fc8c73d8a3b371"],["/zh-cn/archives/page/5/index.html","76d6aa0da7df07e1fc849a743a237c87"],["/zh-cn/archives/page/6/index.html","8a5ddd03433e8f509a1f7775fa5a26de"],["/zh-cn/categories/ACG/Music/index.html","a137ecab8fc4771bd162ef070ac411ad"],["/zh-cn/categories/ACG/Music/self-copy/index.html","88744c0f4563d7483c17062d92ee9252"],["/zh-cn/categories/ACG/Travel/index.html","27befccfe7227fef1b4440f3c2c982b3"],["/zh-cn/categories/ACG/figures/index.html","d0ea980d15fc3bf958069e7be5faeac8"],["/zh-cn/categories/ACG/index.html","431e989f1ca8d8397873501d8366f306"],["/zh-cn/categories/dev/Front-End-Dev/index.html","21529b94b8c2bd7de37faf16ffab6f8a"],["/zh-cn/categories/dev/Front-End-Dev/page/2/index.html","8f3e06a34c13eaab39d04cec1c291fa4"],["/zh-cn/categories/dev/HTML-CSS/index.html","4e549d37fc93175da98f74e88c298efc"],["/zh-cn/categories/dev/android/index.html","2dda6c11e8b9c5c40aeea0c389a4ecce"],["/zh-cn/categories/dev/cpp/index.html","f1f7e4279102be260d05d724a10c5464"],["/zh-cn/categories/dev/git/index.html","41e93a77b93022ef5bb0696251776c44"],["/zh-cn/categories/dev/index.html","f3d628380907ae343d26c5a0193479fa"],["/zh-cn/categories/dev/java/index.html","2cafa1c8d3377743d433f588db2676fe"],["/zh-cn/categories/dev/page/2/index.html","60f2b025f9b6c37d33a16da9f305ad1f"],["/zh-cn/categories/dev/page/3/index.html","a558813b8329012ae7e887f5144fffab"],["/zh-cn/categories/maintaince/blog-setup/index.html","04f13dc09a6a74aec76c48b2f214c9ce"],["/zh-cn/categories/maintaince/index.html","36e3680fe73501a3b95a018bec9dfc06"],["/zh-cn/categories/maintaince/macbook/index.html","7470b73d0c154661e681009364890ad4"],["/zh-cn/categories/maintaince/router-config/index.html","b518abb59b83bc454b1fad04eaad1a04"],["/zh-cn/categories/notes/index.html","3f789e509586f498a5c283d2714de62a"],["/zh-cn/categories/tricks/android/index.html","7b6b6d050171464fc95f00bfa13ae985"],["/zh-cn/categories/tricks/index.html","425428dfdfff2d05280118b25bf00696"],["/zh-cn/categories/uncategorized/index.html","ee09d37030c10fdcc301c455f64319b8"],["/zh-cn/categories/works/Front-End-Dev/index.html","b76e117420c10d73c503ee59b2e032fb"],["/zh-cn/categories/works/csharp-wpf/index.html","0d1bd1d2bf8b345faa09b562266c1db9"],["/zh-cn/categories/works/index.html","21a78fe23a94245a6cc0a6e191a2cf1c"],["/zh-cn/index.html","aeb16dc92ad749b7890016b1555fd8d7"],["/zh-cn/page/2/index.html","683a6167ec0cb504adce1b2e385cce20"],["/zh-cn/page/3/index.html","1f8d4d1b7ce203e15daa2d9022fc8b89"],["/zh-cn/page/4/index.html","1cb2fffeab98555f159e986fc5436b3d"],["/zh-cn/page/5/index.html","e0ae98078f5ade7086b497cbedf6e402"],["/zh-cn/page/6/index.html","bd1cad4ae198252c124d3dc52fe87820"]];
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
