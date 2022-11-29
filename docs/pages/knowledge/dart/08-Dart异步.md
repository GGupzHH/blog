---
title: Dart 异步
date: '2022-11-14 14:12:08'
sidebar: 'auto'
categories:
 - Dart
tags:
 - Dart基础
---


本文介绍`Dart`的`异步`的处理方法，并且介绍了`语法糖`的使用方法。
<!-- more -->


### 异步回调`then`
  - ```dart{7}
    import 'package:dio/dio.dart';

    void main() async {
      final dio = Dio();
      const url = "https://wpapi.ducafecat.tech/products/categories";

      dio.get(url).then((response) {
        print(response.data);
      });
    }
    ```

### 语法糖`await`
  - ```dart{7}
    import 'package:dio/dio.dart';

    void main() async {
      final dio = Dio();
      const url = "https://wpapi.ducafecat.tech/products/categories";

      Response<String> response = await dio.get(url);
      print(response);
    }
    ```

### 异步返回值
:::tip
定义 Future\<T\> 返回对象；
:::
  - ```dart{4}
    // dart_learn
    import 'package:dio/dio.dart';

    Future<String?> getUrl(String url) async {
      final dio = Dio();
      Response<String> response = await dio.get(url);
      return response.data;
    }
    ```

  - ```dart
    import 'package:dart_learn/dart_learn.dart';

    void main() async {
      const url = "https://wpapi.ducafecat.tech/products/categories";

      var res = await getUrl(url);
      print(res);
    }
    ```
