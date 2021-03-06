#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 推送本地原始文件
git add -A
git commit -m 'deploy'
git push -f git@github.com:mapxn/caipu.git main

# 生成静态文件
yarn docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'
git branch -M gh-pages
git remote add origin git@github.com:mapxn/caipu.git
git push -f git@github.com:mapxn/caipu.git gh-pages

cd -