---
title: fvm 版本控制
date: '2022-11-9 20:44:08'
sidebar: 'auto'
categories:
 - Flutter
 - Dart
tags:
 - fvm
---


本文介绍Flutter的版本控制器fvm，fvm可以切换和控制flutter和dart的版本。
<!-- more -->


### 安装fvm
:::tip
建议科学上网
:::
```sh
  brew tap leoafarias/fvm
  brew install leoafarias/fvm/fvm
``` 

### 安装指定版本SDK
:::tip
如果下载太慢可以直接去flutter官网下载指定版本后放入`~/fvm/default/bin`并改名
:::
  ```sh
  fvm install 2.10.5
  ```

### 全局设置SDK版本
  ```sh
  fvm global 3.0.1
  ```

### 查看当前SDK列表
  ```sh
  fvm list
  ```

### 设置环境变量
:::warning
如果用的是`oh-my-zsh`则需要去`code ~/.zshrc`下设置环境变量，并重启命令行
:::
  ```sh
  code ~/.bash_profile
  # flutter sdk
  export PATH=${PATH}:~/fvm/default/bin

  # dart sdk
  export PATH=${PATH}:~/fvm/default/bin/cache/dart-sdk/bin
  export PATH=${PATH}:~/.pub-cache/bin
  ```

### VScode配置，去`setting.json`加入设置
```json
{
  "dart.flutterSdkPath": "~/fvm/default/bin"
}
```

### 设置项目单独版本
  - 在flutter项目下执行
  ```sh
  fvm use 3.0.1
  ```

