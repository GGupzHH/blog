---
title: 用node执行ffmpeg指令给图片加水印
date: '2023-07-21 16:17:41'
sidebar: 'auto'
categories:
- Node
tags:
- watermark
---

本文介绍如何用node执行ffmpeg给图片加水印
<!-- more -->

### [仓库地址](https://github.com/GGupzHH/image-watermark)

### 简单介绍下需要的环境
  - ffmpeg
    - [安装](https://zhuanlan.zhihu.com/p/569139548)
  - Node
    - 使用`Yeoman`初始化项目目录
    - 内置模块
      - util
      - fs
      - execcmd

### ffmpeg
  - 设置字体
    `fontfile=./text.ttf`
  - 水印位置，`H-th-280`指的是距离底部280px
    `x=80:y=H-th-280`
  - 字体颜色、大小，用冒号分割，逗号结束
    `fontsize=40:fontcolor=black`
  - 换行`只能在另写一条新的，重新设置位置`
    `drawtext=fontfile=./text.ttf: x=80:y=H-th-240:text=滩3号升压站送出线路工程:fontsize=40:fontcolor=black,`
  - 转义
    `\\\\\\:`
  - 路径：`goalImagePath`图片初始路径， `resultImagePath`结果路径，原图不变
  - 执行：用`child_process`指定FFmpeg指令

### 开发
  ```js
    const execcmd = require("child_process");
    const util = require("util");
    const fs = require("fs");

    async function imagesWatermark(imageFile) {
      const exec = util.promisify(execcmd.exec);
      const fileNameKeys = handleImageNameKeys(imageFile);
      const goalImagePath = process.cwd() + goalPath + "/" + imageFile;
      const resultImagePath = process.cwd() + resultPath + "/" + imageFile;
      var cmdstr =
        "ffmpeg -i " +
        goalImagePath +
        // eslint-disable-next-line no-template-curly-in-string
        ' -vf "' +
        "drawtext=fontfile=./text.ttf: x=80:y=H-th-280:text=工程名称\\\\\\:凉州区330千伏九墩:fontsize=40:fontcolor=black," +
        "drawtext=fontfile=./text.ttf: x=80:y=H-th-240:text=滩3号升压站送出线路工程:fontsize=40:fontcolor=black," +
        "drawtext=fontfile=./text.ttf: x=80:y=H-th-160:text=施工部位\\\\\\:" +
        fileNameKeys.name +
        "拆模:fontsize=40:fontcolor=black," +
        "drawtext=fontfile=./text.ttf: x=80:y=H-th-80:text=日期\\\\\\:" +
        fileNameKeys.time +
        // eslint-disable-next-line no-template-curly-in-string
        ':fontsize=40:fontcolor=black" ' +
        resultImagePath;
      console.log(cmdstr);
      await exec(cmdstr);
      // 工程名称:凉州区3滩3号升压站送出线路工 // 施工部位:GA53钢筋工程A腿 // 日期:2023年03月22日
    }

  ```