---
title: Box Model 盒模型
date: '2022-11-22 13:50:08'
sidebar: 'auto'
categories:
 - Flutter
 - Dart
tags:
 - Flutter组件
 - Flutter布局
---

本文介绍Flutter的`Flex`、`Expanded`、`Spacer`组件，详细介绍了组件的定义和用法。
<!-- more -->

### Flex
:::tip
我们可以发现 Column Row 组件都是继承与 Flex，功能非常强大，通常我们直接用 Column Row 即可；
:::

### Expanded
:::tip
Expanded 只能放在 Flex、Column、Row 中使用。把包裹的元素撑开，也就是撑满，并且可以使用flex去控制盒子所占比例；
:::
  - 示例
    ```dart
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
            body: Row(
              children: [
                const Text('Box'),
                Expanded(
                  flex: 1,
                  child: Container(
                    height: 100,
                    color: Colors.blueAccent,
                  )
                ),
                Expanded(
                  flex: 2,
                  child: Container(
                    color: Colors.amber,
                    height: 100,
                  )
                )
              ],
            ),
          ),
        );
      }
    }

    ```


### Spacer
:::tip
留白撑开，很适合用在标题按钮的场景中；
:::
  - 示例
    ```dart
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
            body: Row(
              children: const [
                Text('Box'),
                Spacer(),
                FlutterLogo(
                  size: 20,
                )
              ],
            ),
          ),
        );
      }
    }

    ```
