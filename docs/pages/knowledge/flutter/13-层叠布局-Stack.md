---
title: 层叠布局
date: '2022-11-23 22:17:07'
sidebar: 'auto'
categories:
 - Flutter
 - Dart
tags:
 - 布局
---

### Stack
:::tip
Stack 允许子组件堆叠；
:::
  - 定义
    ```Dart
    Stack({
      Key key,

      // 对齐方式，默认是左上角（topStart）
      this.alignment = AlignmentDirectional.topStart,

      // 对齐方向
      this.textDirection,

      // 定义如何设置无定位子元素尺寸，默认为loose
      this.fit = StackFit.loose,

      // 对超出 Stack 显示空间的部分如何剪裁
      this.clipBehavior = Clip.hardEdge,

      // 子元素
      List<Widget> children = const <Widget>[],
    })
    ```

### Positioned
:::tip
根据 Stack 的四个角来确定子组件的位置；
:::
  - 定义
    ```Dart
    const Positioned({
      Key key,

      // 上下左右位置
      this.left, 
      this.top,
      this.right,
      this.bottom,

      // 宽高
      this.width, 
      this.height,

      @required Widget child,
    })
    ```

### 示例
  - 代码
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
            body: Stack(
              alignment: Alignment.center,
              // 裁剪
              clipBehavior: Clip.none,
              children: [
                Container(
                  width: 300,
                  height: 300,
                  color: Colors.deepPurpleAccent,
                ),
                Container(
                  width: 200,
                  height: 200,
                  color: Colors.cyan,
                ),
                Container(
                  width: 100,
                  height: 100,
                  color: Colors.amber[100],
                  child: const Text('datadatadatadatadata'),
                ),
                const Positioned(
                  left: 100,
                  top: 300,
                  child: FlutterLogo(
                    size: 100,
                  ),
                )
              ],
            )
          ),
        );
      }
    }
    ```
