---
title: Flutter GetX-转场动画
date: '2022-12-05 16:59:53'
sidebar: 'auto'
categories:
 - Flutter
 - Dart
 - GetX
tags:
 - GetX
---


本文介绍`Getx`路由转场动画的定义和使用。
<!-- more -->

### 定义
```dart
import 'package:flutter/widgets.dart';

enum Transition {
  fade,
  fadeIn,
  rightToLeft,
  leftToRight,
  upToDown,
  downToUp,
  rightToLeftWithFade,
  leftToRightWithFade,
  zoom,
  topLevel,
  noTransition,
  cupertino,
  cupertinoDialog,
  size,
  native
}

typedef GetPageBuilder = Widget Function();

```

### 示例
```dart
class AppPages {
  static const INITIAL = AppRoutes.Home;

  static final List<GetPage> routes = [

    GetPage(
      name: AppRoutes.Login, 
      page: () => const LoginView(), 
      // 定义转场动画
      transition: Transition.downToUp
    ),
  ];

  static final unknownRoute = GetPage(name: AppRoutes.Notfound, page: () => const NotFoundView());
}
```
