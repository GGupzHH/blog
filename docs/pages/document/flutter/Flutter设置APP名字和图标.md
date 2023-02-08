---
title: Flutter设置APP名字和图标
date: '2023-02-08 17:51:18'
sidebar: 'auto'
categories:
 - Flutter
tags:
 - Flutter
---

Flutter设置APP名字和图标。
<!-- more -->

# Flutter 设置 App 的应用名字和应用 logo 图标的方法


### `Flutter` 中设置 Android 的应用名称和图标
  - APP名称
    - Android/app/src/main/AndroidManifest.xml
    - `android:label`这个字段是设置APP名字的，直接修改即可
      ```
      android:label="APP名称"
      ```
  - APPlogo
    - Android/app/src/main/res/
    - 按照对应尺寸替换即可

### `Flutter` 中设置 iOS 的应用名称和图标
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
  - APPlogo
    - ios/Runner/Assets.xcassets/AppIcon.appiconset
    - 按照对应尺寸替换即可
