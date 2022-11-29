---
title: Dart 库-lib
date: '2022-11-14 13:47:08'
sidebar: 'auto'
categories:
 - Dart
tags:
 - Dart基础
---


本文介绍`Dart`的`包`的使用方法，并且介绍了`第三方包`和`类`的导入和使用。
<!-- more -->


### 导入核心库
  - ```dart
    import 'dart:io';

    void main() {
      final f = File('bin/README.md');

      var c = f.readAsStringSync();
      print(c);
    }
    ```

### 导入第三方库
  - 下载库
    - 编辑`pubspec.yaml`
      ```yml
      dependencies:
        dio: ^4.0.6
      ```

    - 安装
      ```sh
      $ dart pub get
      ```

  - 导入并使用
    ```dart
    import 'package:dio/dio.dart';

    void main() {
      Dio dio = Dio();
      print(dio);
    }
    ```

### 导入类
  ```dart
  import 'package:dart_learn/dart_learn.dart';

  void main() {
    final car = Car('carName');

    print(car.getCarName());
  }
  ```

### 别名&前缀
  ```dart
  import 'package:dart_learn/dart_learn.dart' as Caras;

  void main() {
    final car = Caras.Car('carName');

    print(car.getCarName());
  }
  ```

### 过滤包内容
:::tip
hide 筛掉某几个包 show 只使用某几个包；
:::
  ```dart
  import 'package:dart_learn/dart_learn.dart' show Ferrari, Car;

  void main() {
    final ferrari = Ferrari();

    ferrari.getBrand();
  }
  ```

### 延迟载入
:::tip
loadLibrary() 方式在需要的时候载入包 可提高程序启动速度 用在不常使用的功能 用在载入时间过长的包；
:::
  ```dart
  import 'package:dio/dio.dart' deferred as dio;

  void main() async {
    await dio.loadLibrary();

    final d = dio.Dio();
    print(d);
  }

  ```
