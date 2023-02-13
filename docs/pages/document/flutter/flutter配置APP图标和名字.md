---
title: flutter配置APP图标和名字
date: '2023-02-13 15:02:06'
sidebar: 'auto'
categories:
 - Flutter
tags:
 - Flutter
---


flutter配置APP图标和名字。
<!-- more -->

# iOS

### 名字
  - 修改APP名字的文件在`/ios/Runner/Info.plist`
  - 找到`<key>CFBundleName</key>`下一行就是app名称的设置位置

### 图标
  - 修改app图标的文件目录在`ios/Runner/Assets.xcassets/AppIcon.appiconset`下
  - 将对应尺寸文件改名覆盖最初图片即可(png)



# Android

### 名字
  - 修改APP名字的文件在`android/app/src/main/AndroidManifest.xml`
  - 找到`android:label`修改后面字段即可


### 图标
  - 修改app图标的文件目录在`android/app/src/main/res`
    - `mipmap-hdpi`
    - `mipmap-mdpi`
    - `mipmap-xhdpi`
    - `mipmap-xxhdpi`
    - `mipmap-xxxhdpi`


  - 每个文件夹下有对应尺寸的图标，将对应尺寸文件改名覆盖最初图片即可(png)
