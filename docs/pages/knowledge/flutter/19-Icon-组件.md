---
title: Icon 组件
date: '2022-11-26 20:29:09'
sidebar: 'auto'
categories:
 - Flutter
 - Dart
tags:
 - Flutter组件
---


本文介绍Flutter组件之`Icon`组件，Icon 组件用来显示可缩放的图标，不会像图片一样失真，还能设置颜色。
<!-- more -->

### Icon
  - 定义
    ```Dart
    const Icon(
      // IconData 图标数据
      this.icon, {
      Key? key,

      // 尺寸
      this.size,

      // 颜色
      this.color,

      // 方向
      this.textDirection,

      this.semanticLabel,
    }) : super(key: key);
    ```
  - 示例
    ```Dart
    import 'package:flutter/material.dart';

    void main(List<String> args) {
      runApp(const ModelBox());
    }

    class ModelBox extends StatelessWidget {
      const ModelBox({Key? key}) : super(key: key);

      @override
      Widget build(BuildContext context) {
        return MaterialApp(
          home: Scaffold(
            appBar: AppBar(
              title: const Text('Box Model'),
            ),
            body: Column(
              children: const [
                Icon(
                  Icons.tty_outlined,
                  color: Colors.amber,
                  size: 24,
                  textDirection: TextDirection.rtl,
                ),
              ],
            )),
        );
      }
    }
    ```

  - 开启 `pubspec.yaml`
    ```yaml
    flutter:
    # The following line ensures that the Material Icons font is
    # included with your application, so that you can use the icons in
    # the material Icons class.
    uses-material-design: true
    ```

  - [Google图标库](https://fonts.google.com/icons?selected=Material+Icons)

### 苹果Icon
:::tip
苹果风格 icon 需要用 CupertinoIcons 对象来访问；
:::
  - 示例
    ```Dart
    import 'package:flutter/cupertino.dart';
    import 'package:flutter/material.dart';

    void main(List<String> args) {
      runApp(const ModelBox());
    }

    class ModelBox extends StatelessWidget {
      const ModelBox({Key? key}) : super(key: key);

      @override
      Widget build(BuildContext context) {
        return MaterialApp(
          home: Scaffold(
            appBar: AppBar(
              title: const Text('Box Model'),
            ),
            body: Column(
              children: const [
                Icon(
                  CupertinoIcons.add,
                  color: Colors.amber,
                  size: 24,
                  textDirection: TextDirection.rtl,
                ),
              ],
            )),
        );
      }
    }
    ```

  - [IOS图标库](https://api.flutter.dev/flutter/cupertino/CupertinoIcons-class.html)
