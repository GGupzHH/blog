---
title: Box Model 盒模型
date: '2022-11-21 13:41:08'
sidebar: 'auto'
categories:
 - Flutter
 - Dart
tags:
 - Flutter组件
 - Flutter布局
---


本文介绍Flutter的`Container`组件，该组件类似web的`div`介绍其定义和用法。
<!-- more -->

### 定义
:::tip
Container 是一个组合类容器，它本身不对应具体的 RenderObject，它是 DecoratedBox、ConstrainedBox、Transform、Padding、Align 等组件组合的一个多功能容器，所以我们只需通过一个 Container 组件可以实现同时需要装饰、变换、限制的场景。
:::
  - Container
    ```dart
    Container({
      Key key,
      // 容器子Widget对齐方式
      this.alignment,
      // 容器内部padding
      this.padding,
      // 背景色
      Color color,
      // 背景装饰
      Decoration decoration,
      // 前景装饰
      this.foregroundDecoration,
      // 容器的宽度
      double width,
      // 容器的高度
      double height,
      // 容器大小的限制条件
      BoxConstraints constraints,
      // 容器外部margin
      this.margin,
      // 变换，如旋转
      this.transform,
      // 容器内子Widget
      this.child,
    })
    ```

  - BoxDecoration 装饰
    ```dart
    const BoxDecoration({
      // 背景色
      this.color,
      // 背景图片
      this.image,
      // 边框样式
      this.border,
      // 边框圆角
      this.borderRadius,
      // 阴影
      this.boxShadow,
      // 渐变
      this.gradient,
      // 背景混合模式
      this.backgroundBlendMode,
      // 形状
      this.shape = BoxShape.rectangle,
    })
    ```

### 示例
  - ```dart
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
            body: Container(
              margin: const EdgeInsets.all(50),
              padding: const EdgeInsets.all(30),
              child: const Text('Box'),
              transform: Matrix4.rotationZ(0.1),
              // alignment: Alignment.centerLeft,
              // 前景装饰
              foregroundDecoration: const BoxDecoration(
                image: DecorationImage(
                  image: AssetImage('assets/flutter.png'),
                ),
              ),
              decoration: BoxDecoration(
                color: Colors.blueAccent,
                border: Border.all(
                  color: Colors.amberAccent,
                  width: 20,
                  style: BorderStyle.solid
                ),
                borderRadius: const BorderRadius.all(
                  Radius.circular(20)
                ),
                boxShadow: const [
                  BoxShadow(
                    blurRadius: 10,
                    offset: Offset(10, 10),
                    color: Colors.pink
                  )
                ],
              ),
            ),
          ),
        );
      }
    }
    ```