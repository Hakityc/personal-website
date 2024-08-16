#!/bin/bash

# rsa路径
rsa_path="C:/Users/LX/.ssh/tyc_rsa" 
# 源文件
source_dir="build/*" 
# 目标目录
target_dir="root@139.196.10.107:/usr/local/nginx" 

echo "
🔨 开始部署测试环境...
"

scp -i $rsa_path -r $source_dir $target_dir

echo "
🎊 测试环境部署成功！部署版本:$npm_package_version"
