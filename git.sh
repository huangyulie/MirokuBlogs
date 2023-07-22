#!/bin/bash
read -p "请输入本次提交信息:" message    #获取键盘输入的message变量数字
time=$(date "+%Y.%m.%d")
git add .
git commit -m ${time}:${message}
git push