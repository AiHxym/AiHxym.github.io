#!/usr/bin/env sh
###
 # @Author: Yumeng Xue
 # @Date: 2022-05-17 16:44:49
 # @LastEditTime: 2024-01-17 21:33:12
 # @LastEditors: Yumeng Xue
 # @Description: 
 # @FilePath: /AiHxym.github.io/deploy.sh
### 

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
yarn build

# 复制CNAME文件
cp CNAME dist/

# 进入生成的文件夹
cd dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:AiHxym/AiHxym.github.io.git master:gh-pages

cd -