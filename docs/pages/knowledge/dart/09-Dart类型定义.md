---
title: Dart 类型定义
date: '2022-11-15 15:05:08'
sidebar: 'auto'
categories:
 - Dart
tags:
 - Dart基础
---


本文介绍`Dart`的`类型`的定义。
<!-- more -->


### typedef 定义使用
  - ```dart
    typedef Tfunc = void Function(String val);

    class Ponet {
      Tfunc fun;
      Ponet(this.fun);
    }

    void main() async {
      final a = Ponet((val) {
        print(val);
      });

      a.fun('你好');
    }
    ```
    