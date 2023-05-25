---
title: GitHub Actions
date: '2023-02-08 11:25:43'
sidebar: 'auto'
categories:
 - GitHub
tags:
 - GitHub
 - GitHub Actions
---

本文介绍如何使用`GitHub`的`Actions`去实现代码合并自动部署。
<!-- more -->

# 使用`GitHub Actions`实现自动部署

### 介绍
  - `Github Actions` 是 Github 提供的免费自动化构建实现，特别适用于持续集成和持续交付的场景，它具备自动化完成许多不同任务的能力，例如构建、测试和部署等等。

### 概念
  - 在进行操作前，先对 `Github Actions` 基础知识进行补充，具体可查看 [GitHub Actions 入门教程阮一峰](https://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html)
  - 可以在 [GitHub Marketplace · Actions to improve your workflow](https://github.com/marketplace?type=actions) 中找到所有的 Actions。 

### 开始
  - 在项目根目录创建`.github/workflows`文件夹，并且在`workflows`内生成一个 `workflow` 文件，名字可以随便取，这个示例是`pages.yml`。
  - pages.yml
    ```yml
    name: BlogPages


    on: 
      pull_request:
        branches: [ main ]

    jobs:
      build: # 自定义名称
        runs-on: ubuntu-latest # 运行在虚拟机环境ubuntu-latest

        strategy:
          matrix:
            node-version: [14.x]

        steps:
          - name: Checkout # 步骤1
            uses: actions/checkout@v1 # 使用的动作。格式：userName/repoName。作用：检出仓库，获取源码。 官方actions库：https://github.com/actions

          - name: Use Node.js ${{ matrix.node-version }} # 步骤2
            uses: actions/setup-node@v1 # 作用：安装nodejs
            with:
              node-version: ${{ matrix.node-version }} # 版本

          - name: Build-and-deploy # 步骤3
            run: |
              echo '获取仓库基本信息'
              remote_addr=`git remote get-url --push origin`
              commit_info=`git describe --all --always --long`
              user_name='GGupzHH'
              user_email=`git log -1 --pretty=format:'%ae'`
              deploy_branch=blog

              yarn
              yarn build
              echo '安装依赖和构建打包'

              cd docs/.vuepress/dist
              git config --global init.defaultBranch $deploy_branch
              git init
              git config user.name ${user_name}
              git config user.email ${user_email}
              echo '设置git用户信息完成'

              git add -A
              git commit -m "auto deploy, $commit_info"
              remote_addr=`echo $remote_addr | awk -F'://' '{print $2}'`
              remote_addr=https://${user_name}:${{secrets.BLOG_TOKEN}}@${remote_addr}
              echo ${remote_addr}
              git remote add origin ${remote_addr}
              git push origin HEAD:$deploy_branch --force # 推送到github $deploy_branch分支
    ```

  - 上面这个 workflow 文件的要点如下
    - 整个流程在`main`分支发生`pull_request`事件时触发。
    - 只有一个job，运行在虚拟机环境ubuntu-latest。
    - 首先获取当前仓库基本信息并且设置git用户名和邮箱。
    - 安装依赖和构建打包。
    - 进入到打包的目录，初始化git，设置分支和用户信息。
    - 将代码暂存提交，设置远程代码仓库。
    - 推送代码。


  - 设置自己的`TOKEN`
    :::tip
    token 只会在生成的时候显示一次，如需要再次显示，则可以点击，但使用此令牌的任何脚本或应用程序都需要更新！不过记得权限过期以及勾选上 workflow。
    :::
    - [Personal access tokens 生成](https://ggupzhh.github.io/blog/pages/document/github/03-github-token生成.html)
    - push的时候使用
    ![流程](/blog/images/document-github/841675839610_.pic.jpg)
