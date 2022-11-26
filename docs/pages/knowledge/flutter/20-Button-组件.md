---
title: Button 组件
date: '2022-11-26 20:46:19'
sidebar: 'auto'
categories:
 - Flutter
 - Dart
tags:
 - Flutter组件
---


本文介绍Flutter组件之`Button`组件，该组件是一个基本的交互组件，将详细介绍`Button`组件的使用和配置。
<!-- more -->


### ElevatedButton
  - 定义
    ```Dart
    const ElevatedButton({
      Key? key,
      // 点击事件
      required VoidCallback? onPressed,
      // 长按
      VoidCallback? onLongPress,
      // hover
      ValueChanged<bool>? onHover,
      ValueChanged<bool>? onFocusChange,

      // 样式
      ButtonStyle? style,

      // 焦点
      FocusNode? focusNode,
      bool autofocus = false,
      Clip clipBehavior = Clip.none,

      // 按钮内容
      required Widget? child,
    })
    ```

  - `ButtonStyle`定义
    ```Dart
    class ButtonStyle with Diagnosticable {
    /// Create a [ButtonStyle].
    const ButtonStyle({
      // 文字
      this.textStyle,
      // 背景色
      this.backgroundColor,
      // 前景色
      this.foregroundColor,
      // 鼠标滑过颜色
      this.overlayColor,
      // 阴影
      this.shadowColor,
      // 阴影高度
      this.elevation,
      // 内边距
      this.padding,
      // 最小尺寸
      this.minimumSize,
      // 固定 size
      this.fixedSize,
      // 最大最小尺寸
      this.maximumSize,
      // 边框
      this.side,
      // 形状
      this.shape,
      // 鼠标光标
      this.mouseCursor,
      // 紧凑程度
      this.visualDensity,
      // 配置可以按下按钮的区域的尺寸
      this.tapTargetSize,
      // 定义 [shape] 和 [elevation] 的动画更改的持续时间
      this.animationDuration,
      // 检测到的手势是否应该提供声音和/或触觉反馈
      this.enableFeedback,
      // 子元素对齐方式
      this.alignment,
      // 墨水效果
      this.splashFactory,
    });
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
              children: [
                ElevatedButton(
                  onPressed: () {
                    print('object');
                  },
                  child: Row(children: const [
                    Icon(
                      Icons.tty_outlined,
                    ),
                    Text('data')
                  ]),
                  style: ButtonStyle(
                    backgroundColor: MaterialStateProperty.all(Colors.amber),
                    foregroundColor: MaterialStateProperty.all(Colors.red),
                    overlayColor: MaterialStateProperty.all(Colors.pink),
                    shadowColor: MaterialStateProperty.all(Colors.black),
                    elevation: MaterialStateProperty.all(20),
                    side: MaterialStateProperty.all(
                        const BorderSide(width: 5, color: Colors.blueAccent)),
                    fixedSize: MaterialStateProperty.all(const Size(100, 10))
                  ),
                )
              ],
            )
          ),
        );
      }
    }
    ```

### TextButton 文字按钮
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
              children: [
                TextButton(onPressed: () {}, child: const Text('data')),
                TextButton.icon(
                  onPressed: () {},
                  icon: const Icon(Icons.tty_outlined),
                  label: const Text('data')
                ),
              ],
            )
          ),
        );
      }
    }
    ```

### OutlinedButton 边框按钮
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
              children: [
                OutlinedButton(onPressed: () {}, child: const Text('data')),
                OutlinedButton.icon(onPressed: () {}, icon: const Icon(Icons.ac_unit_rounded), label: const Text('label'))
              ],
            )
          ),
        );
      }
    }
    ```

### IconButton 图标按钮
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
              children: [
                IconButton(onPressed: () {}, icon: const Icon(Icons.access_time_rounded))
              ],
            )
          ),
        );
      }
    }
    ```
