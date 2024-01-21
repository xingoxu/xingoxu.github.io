/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/03/WNDR4300-setup-log/index.html","09e3d1c5491ca7a5eb9a348230d7e333"],["/2015/03/android-hostname-change/index.html","8a71de6dc443e2926dde22c2c512c093"],["/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","6154f2047611b63b4a0be698251ab245"],["/2015/04/android-chrome-issues-with-webpage/index.html","76a0775fbfb1bdb4254bc32eed73e830"],["/2015/04/cpp-study-log/index.html","3d12a3a19a01b1d16a0d535c0310e167"],["/2015/04/github-pages-ssl/index.html","a54fe428293928dce406d81618608200"],["/2015/04/hello-world/index.html","ea736034f40c81ecad98574b08d77d99"],["/2015/04/hexo-setup-log/index.html","e6789f9c4af1bda0031bd05c3eef9218"],["/2015/04/self-copy-cd-inazuma-1-html/index.html","4f74eb22e55d8d04054e94ae83d97907"],["/2015/05/cpp-inherit/index.html","18fee3eb3f32e3b1d160870417a82aa6"],["/2015/05/cpp-polymorphism/index.html","207e1133f7c0fb2c669179071ae09067"],["/2015/09/android-root-ota/index.html","cb54cab1443a991ba7f6782c9342ad39"],["/2015/09/java-learningNotes-1/index.html","e58cbc37604d4fdbb8d590f3436f2c2e"],["/2015/09/newblog-newlife-2015/index.html","a58cd5036567543701064bbe23acfad3"],["/2015/09/router-rebuild-2015/index.html","3ae563dc6de8cb49443074faa919445a"],["/2015/12/2015-12-21/index.html","7ce4f46890099df18aab405318bed4bf"],["/2015/12/PixInTouch/index.html","d85d23f19bafcd1d344b67d6ec1f813e"],["/2015/12/git-study-1/index.html","3f07b28a1a51bd0b7da09f18d05b8c8e"],["/2015/12/hexo-backup-and-migrate/index.html","9d0be217031c9ba982cd768ca482147a"],["/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","6f08571fa9c7b2abc25db9fc1f8c2220"],["/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","8903b66515ff10f43e7b9d4d699eb98d"],["/2015/12/router-reconfig-2015/index.html","29f498ecba2d6d79da34c8e9f5d8c53f"],["/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","cbd1ad22ae01ffeca9104ff4d61794a3"],["/2016/01/2016-stepping-further/index.html","51d4d1aeffb03f92c67a20ce9d2aab98"],["/2016/01/Android-Study-1-22/index.html","722ac0adc2c0b3ab10f8678df5c1938f"],["/2016/03/2016-03-20/index.html","6434d0fb40e2acba1e059c27089660e6"],["/2016/03/GSC-535/index.html","b78bb947562c2a7f8ea5afa880e828e6"],["/2016/03/gulpjs-1/index.html","ce8a8c6394be2e89b404b38743d6acaa"],["/2016/03/hexo-theme-paper-white/index.html","e190baa0d315b047001c764390e2c299"],["/2016/04/2016-04-19/index.html","14702f7d38f055b3e03db281982f0566"],["/2016/06/2016-06-16/index.html","e2c5304e7f19ca0476b3ac15e29f269d"],["/2016/09/2016-09-18/index.html","40db4dd6c0619bed5a49e55090d54c27"],["/2016/10/2016-10-27/index.html","b70a02be30965278f4e9f8d5ffe76b6a"],["/2016/12/config-switchresx-and-2khidpi/index.html","0f512660f94920ae0d24a57dea4a1902"],["/2016/12/improve-duoshuo/index.html","9a6e43fa4ad57da1847cf31fee6fc4de"],["/2016/12/use-travis-ci-your-blog/index.html","b8be802e591b721f8618a8431265c599"],["/2017/01/2017-iyahoi/index.html","138be2f1fc3a86a27dac316a7f12721a"],["/2017/01/webpack-amd/index.html","807e534df846cfae67655df1edd3de4c"],["/2017/04/kotobukiya-syaoran/index.html","7aca641aee63d261c1a8c2338835fc86"],["/2017/04/macbook-and-surface/index.html","ae99ec8c96ab1b8b10ee5e69a7336461"],["/2017/04/uc-hyakuya-yuichiro/index.html","bfe903d223ce065462f14dfce8bd7c04"],["/2017/06/noragami-seichijunrei/index.html","5e284e2ebf6a6d68764776920ef8f5d0"],["/2017/08/cross-compile-55-libev/index.html","da5b33caa6b94c7eaadc2b6911dc9e20"],["/2017/08/explore-service-worker-working-lifetime/index.html","644cd93740458999f52479e837bc0635"],["/2017/08/kiminonawa-tokyo-seichijunrei/index.html","8be283a31ad941819a98474513d631d2"],["/2017/09/record-user-login-status-methods/index.html","5bc5a220a3ab7a522b46d00fb7af3d61"],["/2017/10/vue-typescript-early/index.html","6b87c2d28feb2d29bd7bfdbf9f1361f3"],["/2018/04/2017-end/index.html","12179d9d82aee2dfb2c253b4d409b53a"],["/2018/04/twitter-account-activity-api/index.html","fcf43026e5a2af99d379ba700908fcf3"],["/2018/05/buddy-complex-seichijunrei/index.html","09dd65d09306b3be41c0dd6ed3700777"],["/2019/05/2019-05-16-record-jp-digital-TV-on-nas/index.html","3d1c5dd7ef940b3b71b151546343054b"],["/2019/05/2019-05-17-google-io-tech/index.html","cb5c38e365fb53bde782fd927d20d0a9"],["/2020/06/cls/index.html","7f611d1fc6bc87fdf41fa608be784957"],["/2020/06/try-serverless/index.html","ac12cea127f40ed63ef56bf1fbdb2805"],["/2020/07/macos-node-require-path-case-insensitive/index.html","c1d3df346749863e4f8bef57bd39029f"],["/2024/01/transmission-under-vpn/index.html","51c6361bea7972d79196ed4bed9e8873"],["/404.html","1439b2fdcdb34c54de214c656246dfe0"],["/about/index.html","8b1bfec9e715fd3a31389ef1848873de"],["/archives/2015/03/index.html","7c80c503fe9d2756e53a1ef71616df55"],["/archives/2015/04/index.html","bb9278c5b0bbd79716f9aa1c16a81666"],["/archives/2015/05/index.html","33b8498a1b8c823810d6f81631b0da40"],["/archives/2015/09/index.html","b8254a3963d18a372ec89063f7567922"],["/archives/2015/12/index.html","89b7a10a54288cbdd6124a0a2bff1dda"],["/archives/2015/index.html","c072c068aa7fe2b9ab8a673f41970af5"],["/archives/2015/page/2/index.html","b15e7bd04a3b74b6a83d0db4d651291a"],["/archives/2015/page/3/index.html","199bae5e0405523d63a3290149988c5e"],["/archives/2016/01/index.html","94739029f4e9f1b564c0a0b8e5a4418e"],["/archives/2016/03/index.html","cf6aaf0ce7845ce6e112fc4d83f0b3a2"],["/archives/2016/04/index.html","24d563c829925929afce1193d29119d3"],["/archives/2016/06/index.html","1862e051c690e99fa100256c1345e4c0"],["/archives/2016/09/index.html","0e23edf8d1ed0dadb3d9732a6d80f9d1"],["/archives/2016/10/index.html","73614bf9fed65f3425045d83e16ff927"],["/archives/2016/12/index.html","79d988c26d9f3d6633439ca427ceaf88"],["/archives/2016/index.html","9a262e7167997bff85085530927eaa7a"],["/archives/2016/page/2/index.html","0751d0dba5af76e1ffa2bb457bd19c1f"],["/archives/2017/01/index.html","96684ea3c1f471e5dd6b66a028419551"],["/archives/2017/04/index.html","7d3da91b2f6a27125ae4e611d4171949"],["/archives/2017/06/index.html","a764e3a198519eff15b5f3fed19ba4c2"],["/archives/2017/08/index.html","72b2d63e9e9d554e21bb8d92a179a0e6"],["/archives/2017/09/index.html","0dfdd3083cb76926d900c5b976444d12"],["/archives/2017/10/index.html","f1ca5f7ee9eaf3ca46d887cc6ace4460"],["/archives/2017/index.html","3d0f54797487c6d11e18fe437956e25e"],["/archives/2017/page/2/index.html","4de81832a8703df2077adbe3f5577079"],["/archives/2018/04/index.html","aafb33c97fe14db78e493c9567f5bba9"],["/archives/2018/05/index.html","956448a7207c2df3bbe7c19b631af239"],["/archives/2018/index.html","991dd318e5778998363cd5c07d0f1d5e"],["/archives/2019/05/index.html","ce8826a40213863a27081e0263b935cb"],["/archives/2019/index.html","c565543f68b208c186a27737eded1e03"],["/archives/2020/06/index.html","532f22bb92a4491cc5466ccffca3c02d"],["/archives/2020/07/index.html","d8a9df7b4dde46639d6ad2e1c9ca67f9"],["/archives/2020/index.html","dbeb583d034ca8c66a74c51c503baa1c"],["/archives/2024/01/index.html","4e219eeac62281f68e0be3a44aecf7de"],["/archives/2024/index.html","edba9acbdb4d0dd52e6f5fd6a3e9a88a"],["/archives/index.html","5b37502115e592ec5cfe9b5ef20104f4"],["/archives/page/2/index.html","64f9bb6480f7a84d7a63b66ef06298d2"],["/archives/page/3/index.html","80c1cab6fc4c7cfa321997d11aac58dc"],["/archives/page/4/index.html","687f7dbbec938fcc11cb5be0deb63456"],["/archives/page/5/index.html","a98c9d3644732a2cf9cebd968d665feb"],["/archives/page/6/index.html","9745e30789824aa8fc2c4cc2b40cfc04"],["/assets/images/about-me.png","a066d06c3d9d1fe56c4d921cec7febf3"],["/baidu_verify_YbTSlpWIUJ.html","779049c3a50695ceb3a388ce1e8bc1b9"],["/categories/ACG/Music/index.html","4444d51affda2ad7b71dc3a85e4eb95c"],["/categories/ACG/Music/self-copy/index.html","caed34d832e1c48444028b62bac67e44"],["/categories/ACG/Travel/index.html","ef3da4aaadb65eb0f93f378750acfb54"],["/categories/ACG/figures/index.html","90dbfcadea206287d1dab3ceac654bfd"],["/categories/ACG/index.html","f364b2dac7661cee27a22e6f2b393c60"],["/categories/dev/Front-End-Dev/index.html","ff7238c19cb984aa100cf26cd7584388"],["/categories/dev/Front-End-Dev/page/2/index.html","f8214f55b1b216d71d9d037f4f511eec"],["/categories/dev/HTML-CSS/index.html","af2c0886d03f05299049a56c707bb4b9"],["/categories/dev/android/index.html","937a3c85f499f81c438a49a97e5a70d9"],["/categories/dev/cpp/index.html","4cf83b74f532c46b52daa95b53012fab"],["/categories/dev/git/index.html","d16ba878787e0dfee06fc9039ef4412d"],["/categories/dev/index.html","870c16b6d0777f979706a8c5b4d5179a"],["/categories/dev/java/index.html","b73e6ff8e32c40cbb408e8b4ac323ccb"],["/categories/dev/page/2/index.html","010c34d2e32e9019ccdced091cb85e2d"],["/categories/dev/page/3/index.html","6a2cfb25de7e035866c740a58cc33c54"],["/categories/maintaince/blog-setup/index.html","09402ba5acf7fec71b22f3f9f542de08"],["/categories/maintaince/index.html","f3adca594eb3ab5e9ff9e73e45036743"],["/categories/maintaince/macbook/index.html","1068410f6bee0cdbffb7f057388f75ec"],["/categories/maintaince/router-config/index.html","a2ab2b5ddf63e5ee5598663f0cfa2027"],["/categories/notes/index.html","5b2c040e8524dc2312a78cca79e77bf8"],["/categories/tricks/android/index.html","fe2f109d58e6fd8727826ab38ca5441d"],["/categories/tricks/index.html","674be70bf4d144449c397a8fcc91715b"],["/categories/uncategorized/index.html","0944901bdb97cc5697a7ee4d8fa48c33"],["/categories/works/Front-End-Dev/index.html","a909eec33584c011aaf69e76eb5d2fb2"],["/categories/works/csharp-wpf/index.html","30ba38875c423b023b58ecab3a60cd26"],["/categories/works/index.html","3ebb1ea8282b74b59fe952f4dfe158f8"],["/css/seichi.css","c60ad00990790aacbe0a9ff08766c515"],["/css/style.css","e3abc56736917946e8536ef38cc2c5cd"],["/google311213f0c8d812a9.html","51f1ee3c2f13a21a1a40b3dae4954454"],["/img/coderwall.png","1976fe70f1ee8ed243e0975402e06a2d"],["/img/delicious.png","952d9b54d8bcfe7b998f67ff48c4dbce"],["/img/douban.png","d42a163f932100e621d22732db34ecdb"],["/img/facebook.png","4bd685f6c9fdaccabf07bdd52173facb"],["/img/github.png","3c4b6267a1a3fedebdc7d089610ecfe7"],["/img/google.png","c385f5304465716b2d6c9ada94c657ab"],["/img/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["/img/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["/img/linkedin.png","4c72c4896f3c23f736cb1ad08f0c866e"],["/img/mail.png","38a7b8302dac028bf03b22d228938abf"],["/img/pinboard.png","9b6186cb97adbe50311f94e50f2392cf"],["/img/pinterest.png","e1b8e655d1b99b40ebcbd96977ae234e"],["/img/rss.png","ec8cf9b5a98011aa75cc0a4f25024dc9"],["/img/scrollbar_arrow.png","be5381cedbd6b778b1d92e224fd71cf7"],["/img/stackoverflow.png","039128ececb47b33bccedd98dc9fc809"],["/img/twitter.png","d2289a4936fefa41d9f92cf89939be5b"],["/img/weibo.png","b382032b316ee38c6d537fe9d36ae54c"],["/img/zhihu.png","e6352c0e1957beef3009268ae747c3aa"],["/index.html","013435e71f904643e97d435fb57e379b"],["/ja/2015/03/WNDR4300-setup-log/index.html","6a4fec7985f2a09233cc367baadd71c8"],["/ja/2015/03/android-hostname-change/index.html","aa8d8867c5eb20c57ac8731bb3984034"],["/ja/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","42288b5ae71c61158abb88cabe373cfd"],["/ja/2015/04/android-chrome-issues-with-webpage/index.html","058c5352b5946c4f3c5b27300fd50ffe"],["/ja/2015/04/cpp-study-log/index.html","a2b2da46671a99492cda3b5af745180f"],["/ja/2015/04/github-pages-ssl/index.html","9de35fee4a15e232bc6732d6d3b75fda"],["/ja/2015/04/hello-world/index.html","69bee54f2137adfe3b0f79c2c86a32b3"],["/ja/2015/04/hexo-setup-log/index.html","b479829fdaf4018fa0da83b61dcfbbe2"],["/ja/2015/04/self-copy-cd-inazuma-1-html/index.html","715ac3485ddb576ac1a7852054915b57"],["/ja/2015/05/cpp-inherit/index.html","6947ad3455958a509919a70320545187"],["/ja/2015/05/cpp-polymorphism/index.html","f28ffb2dfe3f59dbd76824312d879cf2"],["/ja/2015/09/android-root-ota/index.html","b8b183107051f27898d2380a53d70a67"],["/ja/2015/09/java-learningNotes-1/index.html","92ae21df6e5b730e1252195460d7d991"],["/ja/2015/09/newblog-newlife-2015/index.html","a0aac413c8121802326244aec7c6dbf8"],["/ja/2015/09/router-rebuild-2015/index.html","f99c7e0652b5f3010ed634b041ada77f"],["/ja/2015/12/2015-12-21/index.html","678a51fe959dd4ba146ca2d1f1d5146c"],["/ja/2015/12/PixInTouch/index.html","5ad972a181107a655236ad0a5967f658"],["/ja/2015/12/git-study-1/index.html","92afe8fc75f9909ef6004f49174a02a6"],["/ja/2015/12/hexo-backup-and-migrate/index.html","ae3aace0af2ab4339ef640e86257b6a2"],["/ja/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","de4aba9ba3c6ebf9e1a88a299cacc257"],["/ja/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","e7f371a5df073141076637d3c9fa02ee"],["/ja/2015/12/router-reconfig-2015/index.html","2f5c31b2d4934258035d22229cb433fa"],["/ja/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","b17f171a01263620e75453155774912c"],["/ja/2016/01/2016-stepping-further/index.html","e2f7c0654985716a28661c89ba82dd7c"],["/ja/2016/01/Android-Study-1-22/index.html","773e2288e66c207a24c60000402eb3a7"],["/ja/2016/03/2016-03-20/index.html","2d4f2a98a20c50fadfeb88a2ceb4355e"],["/ja/2016/03/GSC-535/index.html","9ebf068ef7b92b0b6f738f9c5bd7092d"],["/ja/2016/03/gulpjs-1/index.html","fb6b0c4cb25a462c611d0866f2a66311"],["/ja/2016/03/hexo-theme-paper-white/index.html","6ef9a4d9a9dc8b017130a91cee0d0a85"],["/ja/2016/04/2016-04-19/index.html","ef8d652ea4ee8c44627f48fa88264f38"],["/ja/2016/06/2016-06-16/index.html","5cc5cc005fc61775b409b7b3443a72f8"],["/ja/2016/09/2016-09-18/index.html","aa587f49bde697f671872fb047f0cf46"],["/ja/2016/10/2016-10-27/index.html","23f7e89613f06b41d6d5fcaa8117b787"],["/ja/2016/12/config-switchresx-and-2khidpi/index.html","97c6f6618a9fbac16d875276334c00bc"],["/ja/2016/12/improve-duoshuo/index.html","99b3a6a34514b9f242022d07ff700230"],["/ja/2016/12/use-travis-ci-your-blog/index.html","a68a51b6fbf3d4e653f71f7321e2e0dd"],["/ja/2017/01/2017-iyahoi/index.html","19b6cf578420e5f9d8d5496d55e54481"],["/ja/2017/01/webpack-amd/index.html","c4de8fc20bab2955e8d92675f2948df5"],["/ja/2017/04/kotobukiya-syaoran/index.html","a2c883d1ec41547e866ff7de977b98d0"],["/ja/2017/04/macbook-and-surface/index.html","93f8b92949f99cfd873156f7c05ca27c"],["/ja/2017/04/uc-hyakuya-yuichiro/index.html","d47e55b57ab4c97e467a23d35d532f00"],["/ja/2017/06/noragami-seichijunrei/index.html","632fa6658358d9f26400df794e8d50f1"],["/ja/2017/08/cross-compile-55-libev/index.html","690d903e5bafc80a0a2fd657671cd8d7"],["/ja/2017/08/explore-service-worker-working-lifetime/index.html","74a669fa94b6b5b8eee0af9b0075aa70"],["/ja/2017/08/hello-jp-world/index.html","1616b837705094032514262be39655eb"],["/ja/2017/08/kiminonawa-tokyo-seichijunrei/index.html","04ca70af212732e00b4d421c0a02210b"],["/ja/2017/09/record-user-login-status-methods/index.html","f6ad5a258ae02f66c17586a75b3da816"],["/ja/2017/10/vue-typescript-early/index.html","d21185cfb3e8dfee7ba68db42a1dff74"],["/ja/2018/04/2017-end/index.html","ab169f4f5a9ed1f0137d85b5bfa5a65b"],["/ja/2018/04/twitter-account-activity-api/index.html","10ac20743ab5c465542305a1e27efe89"],["/ja/2018/05/buddy-complex-seichijunrei/index.html","14baef845160c9b1493efd6a18ac04f8"],["/ja/2019/05/2019-05-16-record-jp-digital-TV-on-nas/index.html","9d97f023334b2a80b416ff53f3522ff4"],["/ja/2019/05/2019-05-17-google-io-tech/index.html","e66fea40b3f675dfd11f9e2653342ec3"],["/ja/2020/06/cls/index.html","12743ded814ba270c9ebd0099dc02e35"],["/ja/2020/06/try-serverless/index.html","67df4eeee4b5d35376035fb124ee4890"],["/ja/2020/07/macos-node-require-path-case-insensitive/index.html","f467ebfcb60e9b3f13cc1fd9deae82a8"],["/ja/2024/01/transmission-under-vpn/index.html","bf3fa691110dc90c216339ab421fb2aa"],["/ja/404.html","09d170e85a4f8fad8958697724f310ca"],["/ja/about/index.html","26cb43478a5399940b939e94d4ab492a"],["/ja/archives/2017/08/index.html","9fc6748286479b81c33fc993ccbea703"],["/ja/archives/2017/09/index.html","056fb26b9cbbdd41c224cc6f440509f3"],["/ja/archives/2017/10/index.html","bc5f32e2f47e4f5bfa09f082cd3e6143"],["/ja/archives/2017/index.html","c66951ca0859bec3728c844b1571cc4d"],["/ja/archives/2018/04/index.html","037af899d63686f1d5e76e76b2b67c53"],["/ja/archives/2018/05/index.html","79c97f2babf1ff128bb873a7dcdc191f"],["/ja/archives/2018/index.html","63986be923fedcdbffb4f7b2ea87d182"],["/ja/archives/2019/05/index.html","2277e3230298dbb790bef35c0a004d02"],["/ja/archives/2019/index.html","e69a417db5e826ad5abddbf6e930bc8e"],["/ja/archives/2020/06/index.html","3c10811cab82d44fbc308bfa45c6358e"],["/ja/archives/2020/07/index.html","7fb5db19c0cc6f94a3232c971f516063"],["/ja/archives/2020/index.html","ee11de6b6d680c9879733737f266d7e2"],["/ja/archives/index.html","dca54e18d7c20e9f614079d65d3b7bd0"],["/ja/categories/ACG/Travel/index.html","3a44b0425d7e0ad0c754e08f72b39c19"],["/ja/categories/ACG/index.html","e8a4ebddca4750344a35e884eceae4fe"],["/ja/categories/dev/Front-End-Dev/index.html","66161a8e16e1a24645594a90dac72584"],["/ja/categories/dev/index.html","f2ec8ace6e276954192d0dba8f3c2666"],["/ja/categories/uncategorized/index.html","60564d96a7cb5b2752677967da74f60e"],["/ja/index.html","d5ee3c11aee14e1477da6d9bdc3d7cd8"],["/ja/nihongo-test-page/index.html","244e10b06da70d8cf144fdc52716a261"],["/ja/resume/en/index.html","2a9fc726d9affa14aee6b09978208b39"],["/ja/resume/index.html","8269f77d501ce54a4be38fc8093d228c"],["/ja/resume/ja/index.html","9fdda4e6b5f78bdb00d627cd310321bf"],["/js/instagram.js","7d7a9e2e7286ba2d5b6d12068214f0c3"],["/js/jquery.lazyload.js","28c23bc40080d31144776e9a8736837f"],["/js/main.js","2e92f29b0cd90bddc062915eb46a858c"],["/js/mobile.js","20029df2609ddd5d2b2d346edbb297c0"],["/js/nextpageajax.js","c3bde8d7bb1f967fb319f57a187ea51a"],["/js/pc.js","631b535186aab0e262485ee2bf9da628"],["/js/ripple-effects.js","b9c11903da0ef5c3d790b41369c3137e"],["/js/share.js","de52ac3d43e43c1951a08b0804458a8e"],["/js/totop.js","661822968b58fd439f46bd54031238d6"],["/keep_origin/affiliate_jump.html","71bf6d72c5d080ec2b3f8ecfae3d71ed"],["/nihongo-test-page/index.html","f2df51396b28bdbf731a78f250772034"],["/page/2/index.html","508e1c6856e35c30c4ace5983c974bd9"],["/page/3/index.html","bffd8813f19c465a31b710f519e23752"],["/page/4/index.html","b8fe17f023e33b0a47740368b10a32a3"],["/page/5/index.html","2843d048b6a588db3936411898a0c7d9"],["/page/6/index.html","334f640d0c23714d5fc560915de8d8ed"],["/page/7/index.html","e1ff8cbe852b25958ee9c1dfe4f1672b"],["/photoswipe/default-skin/default-skin.css","426e8908d7426603ca203b6d16281b1e"],["/photoswipe/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photoswipe/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photoswipe/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photoswipe/photoswipe-ui-default.js","0c9196aa8943ce8a8045c9f4cc62915c"],["/photoswipe/photoswipe-ui-default.min.js","9517baca43cd4e9cb23ff337fbc1baa1"],["/photoswipe/photoswipe.css","7dc0df107159e1be66d4464171561e5b"],["/photoswipe/photoswipe.js","a8d26ff34943c859884acbd6b2531315"],["/photoswipe/photoswipe.min.js","f5cd6479c4e4682545a9603e6b50c741"],["/resume/en/index.html","09f982bca7794d5c77fa556ef6e22383"],["/resume/index.html","0c75359eb67f04f33db231e801d71954"],["/resume/ja/index.html","7540d754194fb24c152f3e6ab97e0988"],["/setup-log/blog-setup/github-pages-ssl.html","d5e315a4f7725d0c5a828ab2ac48dfe3"],["/sw-register.js","7d2fa1fd38fee8c36825ac43b3a526aa"],["/zh-cn/archives/2015/03/index.html","fa1a980bb5058216884b757725c729d5"],["/zh-cn/archives/2015/04/index.html","cd067af644e9ed4b10abbd2ea11cba14"],["/zh-cn/archives/2015/05/index.html","54b4e376a127933886d2c69c0ef049ea"],["/zh-cn/archives/2015/09/index.html","5dc14b5c8dfd163a5ede2363cb85543f"],["/zh-cn/archives/2015/12/index.html","9e46a353be7fe88746826198049755a5"],["/zh-cn/archives/2015/index.html","6e47c146f09c89dad118c800eed404ed"],["/zh-cn/archives/2015/page/2/index.html","2e629cfb9d4490d5f63ab2a54b253054"],["/zh-cn/archives/2015/page/3/index.html","f05a438894a6dffb88ead59668db4bfb"],["/zh-cn/archives/2016/01/index.html","89c0d3a8c95efa14cc34bcd770f022e3"],["/zh-cn/archives/2016/03/index.html","1f580dd5d95c2d0bb816154666c91a81"],["/zh-cn/archives/2016/04/index.html","acba8be16f39ea0f0ef053eaadc82c76"],["/zh-cn/archives/2016/06/index.html","79ea86c5a7faf5b08e1de6032f57ddb2"],["/zh-cn/archives/2016/09/index.html","4131d9e0fa60f19394cde0fe1b0ed476"],["/zh-cn/archives/2016/10/index.html","509875cb93671a3c61565a137f275ff6"],["/zh-cn/archives/2016/12/index.html","c0b5533eec614019d35322f729d0d581"],["/zh-cn/archives/2016/index.html","51d1c571eb591b151beef3a5998134e2"],["/zh-cn/archives/2016/page/2/index.html","65ef1a11b3b3f7216421e15f78c0893e"],["/zh-cn/archives/2017/01/index.html","f8998c4fac9ca0a9835e8679e90cff26"],["/zh-cn/archives/2017/04/index.html","2943fb1f64f5947a73d429731ab9c910"],["/zh-cn/archives/2017/06/index.html","c1b5ace51f2fa2732dd891750449deb5"],["/zh-cn/archives/2017/08/index.html","12cbf86c3154aabec22694ff36d7c7f0"],["/zh-cn/archives/2017/09/index.html","0ca38a110abda27b301b6f1bc6054706"],["/zh-cn/archives/2017/10/index.html","b4272c0a3e750e8c0e938a59819a84ea"],["/zh-cn/archives/2017/index.html","82a28f9f93520cee24413c1c765b8108"],["/zh-cn/archives/2017/page/2/index.html","8860ed926c96813a83c55d1a403c3bf8"],["/zh-cn/archives/2018/04/index.html","2cdb88c1aa59b4003008a5d9c9fe8ecc"],["/zh-cn/archives/2018/05/index.html","3c37ae9e68b6f3b243c7231650d78cdf"],["/zh-cn/archives/2018/index.html","7afe95f9f871cdcdadc7e5422650bed0"],["/zh-cn/archives/2019/05/index.html","1e31a265e199b484e860868437557203"],["/zh-cn/archives/2019/index.html","10b6de70bb8ebf4c2d9b31d4bba921ca"],["/zh-cn/archives/2020/06/index.html","281dbcdad0a4c39ccd68a70b80f46d86"],["/zh-cn/archives/2020/07/index.html","dbdba2c3fb8411eae0a286cdded03068"],["/zh-cn/archives/2020/index.html","350264f4d786dac4a50fa6ca5a92b723"],["/zh-cn/archives/2024/01/index.html","efbfa5b0ffbf3ed1656ec5075d37cb1c"],["/zh-cn/archives/2024/index.html","8e5c44c2645437c169e75b292978a246"],["/zh-cn/archives/index.html","92fc80fd252b82560d9950e28491ac5b"],["/zh-cn/archives/page/2/index.html","89af7030f71c02def3bea889516497d0"],["/zh-cn/archives/page/3/index.html","3923ee23acca83c8e58ec8d602bd864a"],["/zh-cn/archives/page/4/index.html","f5537364bac68357193f3f98164553bb"],["/zh-cn/archives/page/5/index.html","295fdda8c6672a34dbd30a9bae7bbe99"],["/zh-cn/archives/page/6/index.html","12bddc58de620fb064df7bbc8119e162"],["/zh-cn/categories/ACG/Music/index.html","5d5d9eaea1d18d3782a4ceeb7f1a9f2a"],["/zh-cn/categories/ACG/Music/self-copy/index.html","788e69fe9cd8b100e3b26a7f1e105c51"],["/zh-cn/categories/ACG/Travel/index.html","6d609dce6970281b2c3dbacd6c2acc21"],["/zh-cn/categories/ACG/figures/index.html","04d1f8414a43a1faab894ea0f00e81ea"],["/zh-cn/categories/ACG/index.html","7761d968abf3c2de8f353f2573892e46"],["/zh-cn/categories/dev/Front-End-Dev/index.html","0ab039a7b2ccc6cd4fc816a01f698eb3"],["/zh-cn/categories/dev/Front-End-Dev/page/2/index.html","73410b79b669c82ed573dad0d3a6c3b6"],["/zh-cn/categories/dev/HTML-CSS/index.html","92094034bda776b51732a1a19d4bbf27"],["/zh-cn/categories/dev/android/index.html","4c8b47ef9fbabd7cdf5ffb5adb20484a"],["/zh-cn/categories/dev/cpp/index.html","c9582b4423039ffd7e77522a92a93b5d"],["/zh-cn/categories/dev/git/index.html","066a0e660782878626677b80050a4437"],["/zh-cn/categories/dev/index.html","98ad46b4bf4b0f7937c559c7b477f2f9"],["/zh-cn/categories/dev/java/index.html","7bf210d222970ca6541de43c9886bf6f"],["/zh-cn/categories/dev/page/2/index.html","76fd6ecb1e6acc8d4d17e14270fd57f0"],["/zh-cn/categories/dev/page/3/index.html","94e3198ae7aab5316219625c5ed303b8"],["/zh-cn/categories/maintaince/blog-setup/index.html","436f23f1dbc503edd2c02e4ee92bbce3"],["/zh-cn/categories/maintaince/index.html","d7c789773a772899838c0850b29aa519"],["/zh-cn/categories/maintaince/macbook/index.html","eeaccc359801ba4c0a811d54198d8996"],["/zh-cn/categories/maintaince/router-config/index.html","7a09e1d24a622c805ac7c0f8a748d538"],["/zh-cn/categories/notes/index.html","bed74612db28bc6f355a1f79f9c44853"],["/zh-cn/categories/tricks/android/index.html","48ed7ba34e5f4fee77a77195ecafe4c7"],["/zh-cn/categories/tricks/index.html","3318b5f8aef681ec988c57afb1ced90a"],["/zh-cn/categories/uncategorized/index.html","2f60ab506e4067c26feec70410b78f9f"],["/zh-cn/categories/works/Front-End-Dev/index.html","ddcbc912c1309b54d2de8af23aa92caf"],["/zh-cn/categories/works/csharp-wpf/index.html","61b32441b38e408a690986ce4e7e4360"],["/zh-cn/categories/works/index.html","459ca87a985573877d5fb52a4295204b"],["/zh-cn/index.html","0007e7c1c8dc94c5318ed3b94a663937"],["/zh-cn/page/2/index.html","cdb805990e1800be0928fdd840bd0528"],["/zh-cn/page/3/index.html","dc6164720d41a1a360d8a36588f1afe1"],["/zh-cn/page/4/index.html","53c4ffd659245bc7dac739e354125555"],["/zh-cn/page/5/index.html","8c8db6ee42eff22c121eade3164dd4f1"],["/zh-cn/page/6/index.html","85992901d258d8a6fe4f2e1a6ee4215d"]];
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
