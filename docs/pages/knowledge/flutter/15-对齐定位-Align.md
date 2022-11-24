---
title: 对齐定位
date: '2022-11-23 22:44:33'
sidebar: 'auto'
categories:
 - Flutter
 - Dart
tags:
 - 布局
---


对齐定位
<!-- more -->

### Align
  - 定义
    ```Dart
    Align({
      Key key,

      // 需要一个AlignmentGeometry类型的值
      // AlignmentGeometry 是一个抽象类，
      // 它有两个常用的子类：Alignment和 FractionalOffset
      this.alignment = Alignment.center,

      // 两个缩放因子
      // 会分别乘以子元素的宽、高，最终的结果就是 Align 组件的宽高
      this.widthFactor,
      this.heightFactor,
      Widget child,
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
            body: const Align(
              widthFactor: 2,
              heightFactor: 1,
              alignment: Alignment.bottomRight,
              child: FlutterLogo(size: 100,),
            )
          ),
        );
      }
    }
    ```

### Alignment
:::tip
Alignment 是从 Align 的中心点出发，Alignment(-1.0, -1.0) 标识从中心点出发，左上角；
:::
  - 定义
    ```Dart
    /// The top left corner.
    static const Alignment topLeft = Alignment(-1.0, -1.0);

    /// The center point along the top edge.
    static const Alignment topCenter = Alignment(0.0, -1.0);

    /// The top right corner.
    static const Alignment topRight = Alignment(1.0, -1.0);

    /// The center point along the left edge.
    static const Alignment centerLeft = Alignment(-1.0, 0.0);

    /// The center point, both horizontally and vertically.
    static const Alignment center = Alignment(0.0, 0.0);

    /// The center point along the right edge.
    static const Alignment centerRight = Alignment(1.0, 0.0);

    /// The bottom left corner.
    static const Alignment bottomLeft = Alignment(-1.0, 1.0);

    /// The center point along the bottom edge.
    static const Alignment bottomCenter = Alignment(0.0, 1.0);

    /// The bottom right corner.
    static const Alignment bottomRight = Alignment(1.0, 1.0);
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
            body: const Align(
              widthFactor: 2,
              heightFactor: 2,
              alignment: Alignment(1, 0),
              child: FlutterLogo(size: 100,),
            )
          ),
        );
      }
    }
    ```

### FractionalOffset
:::tip
这种方式是固定从左上角出发；
:::
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
            body: const Align(
              widthFactor: 2,
              heightFactor: 2,
              alignment: FractionalOffset(0, 0),
              child: FlutterLogo(size: 100,),
            )
          ),
        );
      }
    }
    ```

### Center
:::tip
Center 是集成了 Align 对象，默认 alignment=Alignment.center；
:::
  - Center 定义, 少了一个 alignment 参数
    ```Dart
    class Center extends Align {
      /// Creates a widget that centers its child.
      const Center({ Key? key, double? widthFactor, double? heightFactor, Widget? child })
        : super(key: key, widthFactor: widthFactor, heightFactor: heightFactor, child: child);
    }
    ```

  - 然后 Align 定义, 默认了 this.alignment = Alignment.center
    ```Dart
    class Align extends SingleChildRenderObjectWidget {
      /// Creates an alignment widget.
      ///
      /// The alignment defaults to [Alignment.center].
      const Align({
        Key? key,
        this.alignment = Alignment.center,
        this.widthFactor,
        this.heightFactor,
        Widget? child,
      })
    // ....
    ```