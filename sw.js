/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/03/WNDR4300-setup-log/index.html","d44ffdff9f7b46ef8f03a32db49e6f03"],["/2015/03/android-hostname-change/index.html","94f054a41e8476837721472dd0227844"],["/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","c976e6cbc0fa1a37666e5b82414f3ac6"],["/2015/04/android-chrome-issues-with-webpage/index.html","f699842190e6dd558f173efbf75deac8"],["/2015/04/cpp-study-log/index.html","97a490fed510b2f2a6b3a4cca698ca3f"],["/2015/04/github-pages-ssl/index.html","1e5aa8e3cfd2b5a84f951e1b40fcedf5"],["/2015/04/hello-world/index.html","a31df94f9d434d4332ccc5f406c55a4f"],["/2015/04/hexo-setup-log/index.html","dbe08671a444dfea9eeb15dedb9b03c8"],["/2015/04/self-copy-cd-inazuma-1-html/index.html","e2e0409aa638435643ebc17021d9f1d8"],["/2015/05/cpp-inherit/index.html","1e57978ae2009a6ce21d0294884a4be4"],["/2015/05/cpp-polymorphism/index.html","85b3621d0e2402e194f9060013b6442d"],["/2015/09/android-root-ota/index.html","1d20e6115d671c9e3b17ab35f8179bb9"],["/2015/09/java-learningNotes-1/index.html","e0193bf3a134b63bc4e7f7b09ab873c8"],["/2015/09/newblog-newlife-2015/index.html","918f3c0d3fcef992cd4bae9445175261"],["/2015/09/router-rebuild-2015/index.html","33002dd90bb66c5016a2833b9d708dd0"],["/2015/12/2015-12-21/index.html","91c75882a26787badde5b732dbe5cd87"],["/2015/12/PixInTouch/index.html","915a719fb8acdf93d56959c3a047f861"],["/2015/12/git-study-1/index.html","c0ece5ed459459fa425d1a08995a2354"],["/2015/12/hexo-backup-and-migrate/index.html","f22e0bfdac997fbef9c9e469291731b7"],["/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","490566a0a03ab8403e832f3ccfe57a4e"],["/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","a7099723983be2b1a7e48066749a44e2"],["/2015/12/router-reconfig-2015/index.html","de807d0086e1362ff60a431160219670"],["/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","f9d619c891a5266c4806e1f9777fc2eb"],["/2016/01/2016-stepping-further/index.html","ef6193aa25eb6a546cb60e237218810e"],["/2016/01/Android-Study-1-22/index.html","3b3622caac80574020603f2af2fc9e73"],["/2016/03/2016-03-20/index.html","a21f0755c227e994ac6973afc1ab21d8"],["/2016/03/GSC-535/index.html","f2c89690ac4bd9999fcaab7d587f0043"],["/2016/03/gulpjs-1/index.html","60853dc6b5035778a066321f1c41f4c3"],["/2016/03/hexo-theme-paper-white/index.html","8c5ab0eab79fc05e9e2b32c8399da8d5"],["/2016/04/2016-04-19/index.html","deafc26c09a856be8280482ff06c9c2d"],["/2016/06/2016-06-16/index.html","b5d2413385de4c5b04a97bc760a8d4c1"],["/2016/09/2016-09-18/index.html","9634e6b817d45f395d505ad35308d320"],["/2016/10/2016-10-27/index.html","c80d8c96a2b41d972859a1c72e4ce00c"],["/2016/12/config-switchresx-and-2khidpi/index.html","b28c84133eeca60ce4e1425315a7d132"],["/2016/12/improve-duoshuo/index.html","025e83e3298883d7ccb5f4dd62a42e08"],["/2016/12/use-travis-ci-your-blog/index.html","a278e5833b6aa0975e17ef9f96c8cc2a"],["/2017/01/2017-iyahoi/index.html","db204ec417cb9e814a624d5bb482b737"],["/2017/01/webpack-amd/index.html","81c792e4c0cfb61e3528d841c82401b1"],["/2017/04/kotobukiya-syaoran/index.html","32db56bc1bf2f498430167f65f2fe598"],["/2017/04/macbook-and-surface/index.html","14954dd08fd7c9a3837deb75c3850218"],["/2017/04/uc-hyakuya-yuichiro/index.html","7d0bc21d9df91a9fd8417837cd0d05f6"],["/2017/06/noragami-seichijunrei/index.html","62dee22db15a1950b58494b10500520c"],["/2017/08/cross-compile-55-libev/index.html","4842015416e6f23c720833509458078f"],["/2017/08/explore-service-worker-working-lifetime/index.html","1039dfd7178bcaa85b02695af6b16844"],["/2017/08/kiminonawa-tokyo-seichijunrei/index.html","bba6e74e8c09627003d05d07f136e183"],["/2017/09/record-user-login-status-methods/index.html","157517ddae286c413623a2134173f57a"],["/2017/10/vue-typescript-early/index.html","edfa2b1eb9b8ecdbae90e98afbb62310"],["/2018/04/2017-end/index.html","209255d053d18cb6371deb61e35ed059"],["/2018/04/twitter-account-activity-api/index.html","01789dbc96386a4247c07f39cee24e75"],["/2018/05/buddy-complex-seichijunrei/index.html","cfdf2c836ee482fcd385206c0897ae74"],["/2019/05/2019-05-16-record-jp-digital-TV-on-nas/index.html","f3f2ed6a68f471709f471fd3a17fb2c8"],["/2019/05/2019-05-17-google-io-tech/index.html","24cb891c49a4e86b1907506e55b05e43"],["/2020/06/cls/index.html","ba335caecb058f146b470cba7ab5a598"],["/2020/06/try-serverless/index.html","513659e6e9ee3e2aeda6ae171c33f3ab"],["/2020/07/macos-node-require-path-case-insensitive/index.html","f83c95c88eee53bc409f0f774d4ecda5"],["/404.html","d8983f1f040ba8c635789031ae4d63ff"],["/about/index.html","c36d02dd905f622a936e08259378ade7"],["/archives/2015/03/index.html","fb3c276545ac8970d543238c2936c163"],["/archives/2015/04/index.html","ffbae81c429d6bfe7dd2b1a664f79340"],["/archives/2015/05/index.html","f090de1ad1ed6bc2fc50bd10acdbbac5"],["/archives/2015/09/index.html","62b948af25422e7fc2045986bb9d1ed4"],["/archives/2015/12/index.html","f533d87d13abb8fcee49ae1bdc9f7769"],["/archives/2015/index.html","831dd6b30e87806093f1a1a3899ae706"],["/archives/2015/page/2/index.html","22bb29d59997f19cd0eb3e159adfcae1"],["/archives/2015/page/3/index.html","636361172801884108f2af0ed1f97ac9"],["/archives/2016/01/index.html","755fbf4aca7885d74578ffc77a31ac82"],["/archives/2016/03/index.html","136e6acc7a81a168b14a02cf2436e710"],["/archives/2016/04/index.html","b5821307370762a69252a626c6000862"],["/archives/2016/06/index.html","5c880528afae5f7e2697ae8d91cc4768"],["/archives/2016/09/index.html","ba8c74e6d8a5597a0eaa9b87c35be00f"],["/archives/2016/10/index.html","a1a86d23b46c0a677a20a46aa4e5d136"],["/archives/2016/12/index.html","01851c3a986c3a09c49434aeec647a62"],["/archives/2016/index.html","cacc8eb9fe591ec0217fe9bc974eb028"],["/archives/2016/page/2/index.html","e70885c14739851a2b1f2e3547c83336"],["/archives/2017/01/index.html","3bb2d2c724647ba69a7e1c20f0e83238"],["/archives/2017/04/index.html","2530817ecdfa6f4d7834696288ac3c7e"],["/archives/2017/06/index.html","aa688b34d4d52647522126c820134c4c"],["/archives/2017/08/index.html","b7fddede9b25200b2ae0d9f7ed7040c9"],["/archives/2017/09/index.html","ebdabed5861a7bce6ded250a2042d4a6"],["/archives/2017/10/index.html","dfb23637dfc9c07f7deadc9f62aba451"],["/archives/2017/index.html","c19a93b5a6646a3d2c7a7e6757d06be8"],["/archives/2017/page/2/index.html","7790ee651c36bffa146f9b1d65dd1a9b"],["/archives/2018/04/index.html","e5ef9ebb2a41cab0ae774458fa8f0367"],["/archives/2018/05/index.html","f7c0a5bc9fe033cb26f298f93189d3db"],["/archives/2018/index.html","a39b8da15db832c8964e9a47d2b4d610"],["/archives/2019/05/index.html","4cdae413f5dcffa4b1c4958196a89bf3"],["/archives/2019/index.html","3ebb62eca37ae2dd2ae5ba705609f9b5"],["/archives/2020/06/index.html","0e0c020b2053bf437a1a06cece9e75df"],["/archives/2020/07/index.html","a6eb7994b2e1674a7ac71b5e659748e1"],["/archives/2020/index.html","51dd861a09fbe99575e62fd3ca312799"],["/archives/index.html","523237020a2ddc281a17eb5a800c296c"],["/archives/page/2/index.html","bd2f1ee57bb6a2a51e34890b1eafc3b9"],["/archives/page/3/index.html","eede094e93b7bee2277f8cceb8cc886b"],["/archives/page/4/index.html","913771fc72d8e3f511621adb23c26342"],["/archives/page/5/index.html","232561cf0b098af3a521384d92c96d4a"],["/archives/page/6/index.html","252cdf928848b97d5cbea3fd7f50e3f6"],["/assets/images/about-me.png","a066d06c3d9d1fe56c4d921cec7febf3"],["/baidu_verify_YbTSlpWIUJ.html","779049c3a50695ceb3a388ce1e8bc1b9"],["/categories/ACG/Music/index.html","c2a2327081362577f1733cf16641e5fb"],["/categories/ACG/Music/self-copy/index.html","96685a58c0df7ef22098e028400b8df7"],["/categories/ACG/Travel/index.html","c7327862de8a37d15dac348094d8bd7f"],["/categories/ACG/figures/index.html","024dd3e535ed5e3cb7300ac74247c617"],["/categories/ACG/index.html","a1afa5d039061c276d0e8c6fd0e9a4d0"],["/categories/dev/Front-End-Dev/index.html","f6a49e777d0a060b7082aaa52ebe5324"],["/categories/dev/Front-End-Dev/page/2/index.html","dea53c82aca7503be731f24ca4f56b37"],["/categories/dev/HTML-CSS/index.html","f6443514728f363e7f9e4b1c2c6faf9f"],["/categories/dev/android/index.html","3fb77e1a38baf7ed4bfd35ca40c52acb"],["/categories/dev/cpp/index.html","20926b7dfc7b92802703efb943ab6fb3"],["/categories/dev/git/index.html","b9635caf1f88f71609ae266557592551"],["/categories/dev/index.html","db17f26f8d87ae334d559959b14966ea"],["/categories/dev/java/index.html","37f3d819a1a2e18244ee28b264cbbdbc"],["/categories/dev/page/2/index.html","ffd02dacb9d85ceaaa88580710910bc4"],["/categories/dev/page/3/index.html","0c2df05900bb6b68848b5b72e9f16a4c"],["/categories/maintaince/blog-setup/index.html","e1d8c02d3b562be38bf865aed51d066b"],["/categories/maintaince/index.html","458f0c4390b0297363978a5c19cf0aab"],["/categories/maintaince/macbook/index.html","1189c7faac2768f7ba1d6183b00a6fc0"],["/categories/maintaince/router-config/index.html","5a103d8576515d7b82b8c1098f917de6"],["/categories/notes/index.html","3d97d91c1f5b1c336d57dabab5d77769"],["/categories/tricks/android/index.html","1772832bf082d0b406d058871fb243a8"],["/categories/tricks/index.html","51fdd823c22a6c450b68370f807b753c"],["/categories/uncategorized/index.html","0f25a8321735cb1cac63b9e69979e4a8"],["/categories/works/Front-End-Dev/index.html","31bc48d92c022c0daadda65233120428"],["/categories/works/csharp-wpf/index.html","a390cae07e8ea2411dc659bdc88a7021"],["/categories/works/index.html","1469af2193557db59e34838c52fcf8de"],["/css/seichi.css","c60ad00990790aacbe0a9ff08766c515"],["/css/style.css","e3abc56736917946e8536ef38cc2c5cd"],["/google311213f0c8d812a9.html","51f1ee3c2f13a21a1a40b3dae4954454"],["/img/coderwall.png","1976fe70f1ee8ed243e0975402e06a2d"],["/img/delicious.png","952d9b54d8bcfe7b998f67ff48c4dbce"],["/img/douban.png","d42a163f932100e621d22732db34ecdb"],["/img/facebook.png","4bd685f6c9fdaccabf07bdd52173facb"],["/img/github.png","3c4b6267a1a3fedebdc7d089610ecfe7"],["/img/google.png","c385f5304465716b2d6c9ada94c657ab"],["/img/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["/img/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["/img/linkedin.png","4c72c4896f3c23f736cb1ad08f0c866e"],["/img/mail.png","38a7b8302dac028bf03b22d228938abf"],["/img/pinboard.png","9b6186cb97adbe50311f94e50f2392cf"],["/img/pinterest.png","e1b8e655d1b99b40ebcbd96977ae234e"],["/img/rss.png","ec8cf9b5a98011aa75cc0a4f25024dc9"],["/img/scrollbar_arrow.png","be5381cedbd6b778b1d92e224fd71cf7"],["/img/stackoverflow.png","039128ececb47b33bccedd98dc9fc809"],["/img/twitter.png","d2289a4936fefa41d9f92cf89939be5b"],["/img/weibo.png","b382032b316ee38c6d537fe9d36ae54c"],["/img/zhihu.png","e6352c0e1957beef3009268ae747c3aa"],["/index.html","60633eb76d911e10cc32347bd0c32106"],["/ja/2015/03/WNDR4300-setup-log/index.html","d4aa65b2d6f400927fc27ec6eec98f5c"],["/ja/2015/03/android-hostname-change/index.html","1672b48781e816d179e3ee151db54ab7"],["/ja/2015/03/openwrt-mount-harddisk-and-thunder-download/index.html","e9e123ef7fd6b818ba26e7e4982b754b"],["/ja/2015/04/android-chrome-issues-with-webpage/index.html","ffe8a5ec32608721e0c074e43ca08511"],["/ja/2015/04/cpp-study-log/index.html","dec50611a56446d57862d279a0e871fe"],["/ja/2015/04/github-pages-ssl/index.html","2021aa98883dd88d89a8ac2c7fa430d7"],["/ja/2015/04/hello-world/index.html","5cde7c08365baabaa9db6b028983a55d"],["/ja/2015/04/hexo-setup-log/index.html","3b00fc5b8c9a3e2eae28f36650ec02f5"],["/ja/2015/04/self-copy-cd-inazuma-1-html/index.html","52611765ace4617fabc37eea63f8e978"],["/ja/2015/05/cpp-inherit/index.html","4254d6b00b980984d725793f5dbdd799"],["/ja/2015/05/cpp-polymorphism/index.html","bd973fd5a9fc0b8d61cf4b36b32dea75"],["/ja/2015/09/android-root-ota/index.html","83d2ecac62e5b952dea903633ba92708"],["/ja/2015/09/java-learningNotes-1/index.html","bebdfb553f60e5db8ecd7821049e0979"],["/ja/2015/09/newblog-newlife-2015/index.html","8b2a55aded34bc9009b7aa6b8966e9bf"],["/ja/2015/09/router-rebuild-2015/index.html","c4cba86a9f84a6f61bf8af1300a9c3ec"],["/ja/2015/12/2015-12-21/index.html","277d7c6f133f44714ee37afa780853e7"],["/ja/2015/12/PixInTouch/index.html","7d99f4ac6c4d3b67d01d34f2e98a7969"],["/ja/2015/12/git-study-1/index.html","4db6cbca8a5a6a096b84d319297f442d"],["/ja/2015/12/hexo-backup-and-migrate/index.html","64a3516f0b8c9144efbb4cac6a819519"],["/ja/2015/12/inazuma-eleven-anime-op-ed-collection/index.html","cd12b31a9dc2e60fdee3dfb3d9200b41"],["/ja/2015/12/inazuma-eleven-go-anime-op-ed-collection/index.html","f07ece226f0d17a724459b65d4225e7d"],["/ja/2015/12/router-reconfig-2015/index.html","e1224a4b3bc3283e700e765387bf2565"],["/ja/2015/12/solve-a-problem-with-xposed-after-otaTo6-0-1/index.html","36d76b56d2b01bd40a1774251f587cb7"],["/ja/2016/01/2016-stepping-further/index.html","b3ba94404c7f0230d09b0d4427662085"],["/ja/2016/01/Android-Study-1-22/index.html","50b86bb40c70969d196af02316519923"],["/ja/2016/03/2016-03-20/index.html","45d63aeaff57e23081a8e94498d43510"],["/ja/2016/03/GSC-535/index.html","cd4b1f855a5e8ba9982701fc67770a5d"],["/ja/2016/03/gulpjs-1/index.html","5e87cf326960c20d7ace7a9ae475d17f"],["/ja/2016/03/hexo-theme-paper-white/index.html","6944d8911775f19b7063cbe1842faf2b"],["/ja/2016/04/2016-04-19/index.html","e2a26c1ca8a0304f804651adfe17220c"],["/ja/2016/06/2016-06-16/index.html","6a150bc4aff85608b51aee511369956c"],["/ja/2016/09/2016-09-18/index.html","9ef3a40ad6d11af140d8f319e6c3fd88"],["/ja/2016/10/2016-10-27/index.html","bf33e66090ba39f13e8b139e82ff85d4"],["/ja/2016/12/config-switchresx-and-2khidpi/index.html","f48f5ba681387cc56275842995eadfdf"],["/ja/2016/12/improve-duoshuo/index.html","c5ca50188d8ebba85b654e559ddfe7da"],["/ja/2016/12/use-travis-ci-your-blog/index.html","4909940e7aafb830061ec76b456d2840"],["/ja/2017/01/2017-iyahoi/index.html","a505ce7bbec87046cbfb34e35392c8ce"],["/ja/2017/01/webpack-amd/index.html","407123ef59339091631ab689f8c154a5"],["/ja/2017/04/kotobukiya-syaoran/index.html","4eecea9d306aa0e5e8469626d84ab36b"],["/ja/2017/04/macbook-and-surface/index.html","b77184d7c5e8b488b622b29ab77271f6"],["/ja/2017/04/uc-hyakuya-yuichiro/index.html","63df7b155e4aceb3da260ea160d7240d"],["/ja/2017/06/noragami-seichijunrei/index.html","659c75e7cb5fd3f2f6b3fca124aa431f"],["/ja/2017/08/cross-compile-55-libev/index.html","57e26a74f9feb8e317d475105abc0560"],["/ja/2017/08/explore-service-worker-working-lifetime/index.html","8a9d5c9636be01f49b222f62c29c0201"],["/ja/2017/08/hello-jp-world/index.html","ea513302d177430d50026a6d63046728"],["/ja/2017/08/kiminonawa-tokyo-seichijunrei/index.html","c3a8548c5a74df4101265e4736260456"],["/ja/2017/09/record-user-login-status-methods/index.html","efb14a589cddff2e7e8afa339fdbf43b"],["/ja/2017/10/vue-typescript-early/index.html","aedb42271c54822118041acca821f1ea"],["/ja/2018/04/2017-end/index.html","bc95cd948ebf34a3e4962a81fa75ac9c"],["/ja/2018/04/twitter-account-activity-api/index.html","5a063f3bbc502e1f04c14ab46d7292c6"],["/ja/2018/05/buddy-complex-seichijunrei/index.html","a1737b5a11d747f25e6c4cb1c3d2e7d3"],["/ja/2019/05/2019-05-16-record-jp-digital-TV-on-nas/index.html","91b9c428713a1dd18f6cec88c989962f"],["/ja/2019/05/2019-05-17-google-io-tech/index.html","357c63c94bbb604d395b4476d7ac2904"],["/ja/2020/06/cls/index.html","bb1040e38547088e41d07f7c77856ffb"],["/ja/2020/06/try-serverless/index.html","0f808676ea8b18ba050b99e4af0f88af"],["/ja/2020/07/macos-node-require-path-case-insensitive/index.html","ade3e28ad81ac2552814c66e022f27d5"],["/ja/404.html","fc32dfbd838d879b0fa8721220911061"],["/ja/about/index.html","1c2fe6ff927b9c29b10e65e8868f0a98"],["/ja/archives/2017/08/index.html","e8423b62ac1e96f6381b6860fd1ef0fc"],["/ja/archives/2017/09/index.html","9956a3d917fda35e0141bea0ff5edeeb"],["/ja/archives/2017/10/index.html","50b651e026228ff9c0b09948c85c856a"],["/ja/archives/2017/index.html","e44a0bc6e27baabfe057c6e6c311f52b"],["/ja/archives/2018/04/index.html","5c721832f87ff273cfe6634d78cb31b7"],["/ja/archives/2018/05/index.html","19293767ed14fea48ce2abb8f10b1b1f"],["/ja/archives/2018/index.html","3af9d94e486d7e592ea0fc2c8ba9ebc6"],["/ja/archives/2019/05/index.html","62587d5cfe346d4259c95ced944ee59d"],["/ja/archives/2019/index.html","d18c4b51a924a59519b3d10e8fdc9cf5"],["/ja/archives/2020/06/index.html","d8bee988ad492d1f1b96497ed45d5d15"],["/ja/archives/2020/index.html","1fd142ef472e5063974d7f1bf800c940"],["/ja/archives/index.html","1c7d3456b98d5f570dfa98ed764c6973"],["/ja/categories/ACG/Travel/index.html","c304336e936f4bfc8434a1a87df5c9aa"],["/ja/categories/ACG/index.html","05e66b8f880ed230817a70166bfe9d7a"],["/ja/categories/dev/Front-End-Dev/index.html","03bc03a4749bb53a2c862dbfa9e8602d"],["/ja/categories/dev/index.html","8958e1de91fe69a8cdea05b430947619"],["/ja/categories/uncategorized/index.html","9169ed2f62660ee0df9ebec79dceedd6"],["/ja/index.html","0d51e05d3519b91b1b20a318186a3349"],["/ja/nihongo-test-page/index.html","342d4a7cc6b863c88f4a7c0bf1f5b455"],["/ja/resume/en/index.html","4a63412b7f382ea26c293a231e891461"],["/ja/resume/index.html","ca9e6394e1f680f59f9fd243318fbc9d"],["/ja/resume/ja/index.html","ebffb9be9aa49e16d79419c6ef07454f"],["/js/instagram.js","7d7a9e2e7286ba2d5b6d12068214f0c3"],["/js/jquery.lazyload.js","28c23bc40080d31144776e9a8736837f"],["/js/main.js","2e92f29b0cd90bddc062915eb46a858c"],["/js/mobile.js","20029df2609ddd5d2b2d346edbb297c0"],["/js/nextpageajax.js","c3bde8d7bb1f967fb319f57a187ea51a"],["/js/pc.js","631b535186aab0e262485ee2bf9da628"],["/js/ripple-effects.js","b9c11903da0ef5c3d790b41369c3137e"],["/js/share.js","de52ac3d43e43c1951a08b0804458a8e"],["/js/totop.js","661822968b58fd439f46bd54031238d6"],["/keep_origin/affiliate_jump.html","71bf6d72c5d080ec2b3f8ecfae3d71ed"],["/nihongo-test-page/index.html","6a6783c24fba13b0541b7cd353067e07"],["/page/2/index.html","2955fe408b4722856ab743e1ad431183"],["/page/3/index.html","7c5a2b45e0030bf5c19ceb573533b992"],["/page/4/index.html","f7d5ca9ab593297c777125055d28da3d"],["/page/5/index.html","edd6e45a8f0cb698663d880877e8a3a5"],["/page/6/index.html","9593fb2f6faebf8229fd65c18d7fab28"],["/page/7/index.html","d59a3413b4289adb7558b27ed10cda7e"],["/photoswipe/default-skin/default-skin.css","426e8908d7426603ca203b6d16281b1e"],["/photoswipe/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photoswipe/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photoswipe/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photoswipe/photoswipe-ui-default.js","0c9196aa8943ce8a8045c9f4cc62915c"],["/photoswipe/photoswipe-ui-default.min.js","9517baca43cd4e9cb23ff337fbc1baa1"],["/photoswipe/photoswipe.css","7dc0df107159e1be66d4464171561e5b"],["/photoswipe/photoswipe.js","a8d26ff34943c859884acbd6b2531315"],["/photoswipe/photoswipe.min.js","f5cd6479c4e4682545a9603e6b50c741"],["/resume/en/index.html","eace1eceaf5142b4185a5d2dee49bf2a"],["/resume/index.html","e3d6f95841541fd84ed577540126045c"],["/resume/ja/index.html","0a29c0cefaeacb9c73e6aebab706aba1"],["/setup-log/blog-setup/github-pages-ssl.html","d5e315a4f7725d0c5a828ab2ac48dfe3"],["/sw-register.js","3e96f9209cef2ccabf4a6f7f2dea5342"],["/zh-cn/archives/2015/03/index.html","de28fe225c1f24bf935a2dc6210e3747"],["/zh-cn/archives/2015/04/index.html","a54a39917eca577b6a09e5d592be40b2"],["/zh-cn/archives/2015/05/index.html","ad672f960825b3ad39d628a79604009e"],["/zh-cn/archives/2015/09/index.html","e03dfed52bc0472f5bd4a363e7e4fe41"],["/zh-cn/archives/2015/12/index.html","8e89fcbe6dd00918513b88dd5753e28d"],["/zh-cn/archives/2015/index.html","ded3f7cb46935b462896c77266fb9311"],["/zh-cn/archives/2015/page/2/index.html","d03be6c1f7348498abe47238a1db5b88"],["/zh-cn/archives/2015/page/3/index.html","cbc70b488afa8aad8446888539d42e15"],["/zh-cn/archives/2016/01/index.html","7ecb1d5ac170425f5d68bbf37188917d"],["/zh-cn/archives/2016/03/index.html","4d6c5e5b00f2362d3e3869a77e5892b2"],["/zh-cn/archives/2016/04/index.html","54587242aa1debce284f8a5411e3a982"],["/zh-cn/archives/2016/06/index.html","fa6443a0012c8964e47afbe842240907"],["/zh-cn/archives/2016/09/index.html","6f88cd00329e027da16bafb5651bf37b"],["/zh-cn/archives/2016/10/index.html","ff2b4d5d0586d1e81e8abbb8c680652c"],["/zh-cn/archives/2016/12/index.html","19b225fec0aa3b8f218f96350d90dc74"],["/zh-cn/archives/2016/index.html","7d8070c2730f9168101b5d26b22c1c01"],["/zh-cn/archives/2016/page/2/index.html","fb33ee4914aa1748e2e5e78fc9e56644"],["/zh-cn/archives/2017/01/index.html","f53654c03e086d899af76d7545c85032"],["/zh-cn/archives/2017/04/index.html","a49fb4f985e7ec87024336f1333ce143"],["/zh-cn/archives/2017/06/index.html","bb5927cae468ada09566cd3cd3451203"],["/zh-cn/archives/2017/08/index.html","79c9ca9b3f5024d7849a537b5fc3276c"],["/zh-cn/archives/2017/09/index.html","a692b1798f01c60e5c906abf5e6edaa2"],["/zh-cn/archives/2017/10/index.html","6135c1b60721ef815cf1fc7bdd676a4e"],["/zh-cn/archives/2017/index.html","f88606e1770df53d7fb0b99c90a272fe"],["/zh-cn/archives/2017/page/2/index.html","31bedcb7286464f6a3512f59b4864b59"],["/zh-cn/archives/2018/04/index.html","bd12e03d1aefd5bd9949e68897b0f7ef"],["/zh-cn/archives/2018/05/index.html","0dad8af9b539dd1d3434b269542cc53f"],["/zh-cn/archives/2018/index.html","822409807554fb3242668cadb84ba83a"],["/zh-cn/archives/2019/05/index.html","e66c7cbd802f25e47aca0c5a00256bf7"],["/zh-cn/archives/2019/index.html","036a00a724ff59f1adf1fa6c4dc0cf25"],["/zh-cn/archives/2020/06/index.html","c03cfcd399515575ba8dcbed0320c9d2"],["/zh-cn/archives/2020/07/index.html","848dd0fb01a347603a02186cb972072b"],["/zh-cn/archives/2020/index.html","47c9017d6ca7ed8fe6dfd6bca4dc63e5"],["/zh-cn/archives/index.html","6aa74fb848ab7f94ed5bd85679e79ced"],["/zh-cn/archives/page/2/index.html","c872b93e83e5bf592a14fcdde39f1486"],["/zh-cn/archives/page/3/index.html","3a50c27470d5731cc67b8eaa0acdeffc"],["/zh-cn/archives/page/4/index.html","25b3f22e75f287faf4faf4854b219721"],["/zh-cn/archives/page/5/index.html","bfa3578bae9852ea11414d36c4f5ecee"],["/zh-cn/archives/page/6/index.html","233cff9b8a3a4b72a1cbe76cfbf10fdd"],["/zh-cn/categories/ACG/Music/index.html","f7ab0cf065a35b90fd771880217c0e10"],["/zh-cn/categories/ACG/Music/self-copy/index.html","7a11d25f74d95c90241393664c572b7f"],["/zh-cn/categories/ACG/Travel/index.html","d3b3fbbb52c1fc2567573bf86abcd2c1"],["/zh-cn/categories/ACG/figures/index.html","b4c2c6a1a5e3d1dd420a2e0b98743fa2"],["/zh-cn/categories/ACG/index.html","d2239b6f94c63109e3743a86abbb7613"],["/zh-cn/categories/dev/Front-End-Dev/index.html","5acc80b6cf1db496c828ef3659c2cffe"],["/zh-cn/categories/dev/Front-End-Dev/page/2/index.html","062febc6318c5a066bc6fe95dd9883c3"],["/zh-cn/categories/dev/HTML-CSS/index.html","aebe85efbdb0aa863fb3801db545b9c3"],["/zh-cn/categories/dev/android/index.html","8505f89f2f437b88075a006124b699f3"],["/zh-cn/categories/dev/cpp/index.html","f86c4aa00c64a4e5bad065eeefc1955d"],["/zh-cn/categories/dev/git/index.html","7066eba813fdb84ce107a76258bf84ab"],["/zh-cn/categories/dev/index.html","e39f67e182bd49a844a5af4ae92785ae"],["/zh-cn/categories/dev/java/index.html","d1fc8bdd5a9acbd29a4544bfacf7c890"],["/zh-cn/categories/dev/page/2/index.html","60dfbc3c9fd17860dae8ee2174a15076"],["/zh-cn/categories/dev/page/3/index.html","704938f32c42b3dd63cc6d5caa0a47ae"],["/zh-cn/categories/maintaince/blog-setup/index.html","add484816b8c4badc26518c44a239b66"],["/zh-cn/categories/maintaince/index.html","46f31789f5bd0fb12ba6a7c842829f3a"],["/zh-cn/categories/maintaince/macbook/index.html","42e77161db7fae2c771f4075cee11782"],["/zh-cn/categories/maintaince/router-config/index.html","2504f54921f481bc911ad8a6cec9797f"],["/zh-cn/categories/notes/index.html","acf319164ee45c348d8f926c20325e06"],["/zh-cn/categories/tricks/android/index.html","d9a1f203be8c49616504739e244da1e5"],["/zh-cn/categories/tricks/index.html","9c0f68defd21f17140c7b91102d9d2bb"],["/zh-cn/categories/uncategorized/index.html","7e1d8627e03c8dffa22184873911d19c"],["/zh-cn/categories/works/Front-End-Dev/index.html","01c48e422f87594fe49630d481d17716"],["/zh-cn/categories/works/csharp-wpf/index.html","d4a8a5811de5fd00f6425d731754233d"],["/zh-cn/categories/works/index.html","74a2006e333f067e1a7d8997ad78c73b"],["/zh-cn/index.html","034ef92780d7d3709aabc7ad42373ba3"],["/zh-cn/page/2/index.html","f0a0b281871fcd1c14583d5010250bcf"],["/zh-cn/page/3/index.html","8336d3d30ad82c1a7724ecfc82f348a3"],["/zh-cn/page/4/index.html","3800ea6b7186424257f0f4ee973f5188"],["/zh-cn/page/5/index.html","6de2a4aa8e1e710c93a88e49d570d176"],["/zh-cn/page/6/index.html","1d6dfd04ea7ec4d4bb0535cec790884b"]];
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
