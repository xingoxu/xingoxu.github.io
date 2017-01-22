cd themes/Paper-White/
mv _config.yml _config.sample.yml
cd ../
cp _config.yml Paper-White/_config.yml
cd ../
hexo clean && hexo g && hexo s
cd themes/Paper-White/
mv _config.sample.yml _config.yml