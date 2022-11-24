---
title: 流式布局
date: '2022-11-23 22:34:37'
sidebar: 'auto'
categories:
 - Flutter
 - Dart
tags:
 - 布局
---

### Wrap
:::tip
用 Row 的时候可以发现子元素不会自动换行，这时候就需要 Wrap 了；
:::
  - 定义
    ```Dart
    Wrap({
      this.direction = Axis.horizontal,
      // 主轴方向的对齐方式
      this.alignment = WrapAlignment.start,
      // 主轴方向子widget的间距
      this.spacing = 0.0,
      // 纵轴方向的对齐方式
      this.runAlignment = WrapAlignment.start,
      // 纵轴方向的间距
      this.runSpacing = 0.0,
      // 交叉轴对齐方式
      this.crossAxisAlignment = WrapCrossAlignment.start,
      this.textDirection,
      this.verticalDirection = VerticalDirection.down,
      List<Widget> children = const <Widget>[],
    })
    ```

  - 示例
    ```Dart
    import 'package:flutter/material.dart';

    void main(List<String> args) {
      runApp(const ModelBox());
    }


    class ModelBox extends StatelessWidget {
      const ModelBox({Key? key}): super(key: key);

      @override
      Widget build(BuildContext context) {
        return MaterialApp(
          home: Scaffold(
            appBar: AppBar(
              title: const Text('Box Model'),
            ),
            body: Wrap(
              spacing: 10,
              runSpacing: 20,
              alignment: WrapAlignment.spaceAround,
              runAlignment: WrapAlignment.center,
              children: const [
                FlutterLogo(size: 80),
                FlutterLogo(size: 80),
                FlutterLogo(size: 80),
                FlutterLogo(size: 80),
                FlutterLogo(size: 80),
                FlutterLogo(size: 80),
              ],
            )
          ),
        );
      }
    }
    ```
