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
  - APP名称
    - ios/Runner/Info.plist
    - `CFBundleName`这个字段的下一个标签是设置APP名字的，直接修改即可
      ```
      <string>6.0</string>
      <key>CFBundleName</key>
      <string>APP名称</string>
      <key>CFBundlePackageType</key>
      <string>APPL</string>
      ```

### 图标
  - 修改app图标的文件目录在`ios/Runner/Assets.xcassets/AppIcon.appiconset`下
  - 将对应尺寸文件改名覆盖最初图片即可(png)



# Android

### 名字
  - 修改APP名字的文件在`android/app/src/main/AndroidManifest.xml`
  - `android:label`这个字段是设置APP名字的，直接修改即可
      ```
      android:label="APP名称"
      ```


### 图标
  - 修改app图标的文件目录在`android/app/src/main/res`
    - `mipmap-hdpi`
    - `mipmap-mdpi`
    - `mipmap-xhdpi`
    - `mipmap-xxhdpi`
    - `mipmap-xxxhdpi`


  - 每个文件夹下有对应尺寸的图标，将对应尺寸文件改名覆盖最初图片即可(png)
