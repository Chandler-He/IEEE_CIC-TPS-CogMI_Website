#!/bin/bash

# CSS版本号更新脚本
# 用法: ./update_version.sh

# 生成新的版本号（当前时间戳格式：YYYYMMDDHHMMSS）
NEW_VERSION=$(date +%Y%m%d%H%M%S)

echo "更新CSS版本号为: $NEW_VERSION"

# 更新 _config.yml 中的版本号
sed -i.bak "s/css_version: \"[^\"]*\"/css_version: \"$NEW_VERSION\"/" _config.yml

echo "版本号已更新到 _config.yml"
echo "请重新构建Jekyll网站以应用更改"
echo ""
echo "运行以下命令构建网站:"
echo "bundle exec jekyll build"
echo ""
echo "或者启动开发服务器:"
echo "bundle exec jekyll serve"