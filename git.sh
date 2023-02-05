#!/bin/bash
# author:tianmengmeng
read -p "请输入本次提交信息:" message    #获取键盘输入的 a 变量数字
git add .
git commit -m ${message}
git push