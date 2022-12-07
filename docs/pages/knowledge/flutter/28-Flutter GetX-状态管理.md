---
title: Flutter GetX-状态管理
date: '2022-12-06 21:24:22'
sidebar: 'auto'
categories:
 - Flutter
 - Dart
 - GetX
tags:
 - GetX
---


本文介绍Flutter的`Getx`的三大功能之一`状态管理`及其使用。
<!-- more -->

### 4种状态管理
  - Obx
    :::tip
    适合界面上 简单状态管理，写起来很快。
    :::
    - 定义
      ```dart
      extension StringExtension on String {
        /// Returns a `RxString` with [this] `String` as initial value.
        RxString get obs => RxString(this);
      }

      extension IntExtension on int {
        /// Returns a `RxInt` with [this] `int` as initial value.
        RxInt get obs => RxInt(this);
      }

      extension DoubleExtension on double {
        /// Returns a `RxDouble` with [this] `double` as initial value.
        RxDouble get obs => RxDouble(this);
      }

      extension BoolExtension on bool {
        /// Returns a `RxBool` with [this] `bool` as initial value.
        RxBool get obs => RxBool(this);
      }

      extension RxT<T> on T {
        /// Returns a `Rx` instace with [this] `T` as initial value.
        Rx<T> get obs => Rx<T>(this);
      }

      ```

    - 实例
      ```dart
      import 'package:flutter/material.dart';
      import 'package:get/get.dart';

      class ObxView extends StatelessWidget {
        ObxView({Key key}) : super(key: key);

        final count = 0.obs;

        @override
        Widget build(BuildContext context) {
          return Scaffold(
            appBar: AppBar(
              title: const Text('Obx'),
            ),
            body: Center(
              child: Column(
                children: [
                  Obx(() => Text(count.toString())),
                  ElevatedButton(
                    onPressed: () {
                      count.value++;
                    },
                    child: const Text('add')
                  )
                ],
              ),
            ),
          );
        }
      }
      ```

  - GetX
    :::tip
    适合控制多控制器、多状态更新，可精细控制初始、局部渲染。
    :::
    - controller
      ```dart
      import 'package:get/get.dart';
      class GetxCustomController extends GetxController {
        final _obj = 0.obs;
        set obj(value) => _obj.value = value;
        get obj => _obj.value;

        add() => _obj.value++;
      }
      ```

    - 示例
      ```dart
      import 'package:flutter/material.dart';
      import 'package:flutter_application_1/pages/getx/controller.dart';
      import 'package:get/get.dart';

      class GetXView extends StatelessWidget {
        GetXView({Key key}) : super(key: key);

        final controller = GetxCustomController();

        @override
        Widget build(BuildContext context) {
          return Scaffold(
            appBar: AppBar(
              title: const Text('Getx'),
            ),
            body: Center(
              child: Column(
                children: [
                  GetX<GetxCustomController>(
                    init: controller,
                    initState: (_) {},
                    builder: (_) => Text(_.obj.toString()),
                  ),
                  ElevatedButton(
                    onPressed: () {
                      controller.add();
                    },
                    child: const Text('add obj')
                  )
                ],
              ),
            ),
          );
        }
      }
      ```

  - GetBuilder
    :::tip
    和 GetX 比起来，多了手动控制更新，有两点需要注意。
    1. controller.update(); 触发更新
    2. id: "id2", 标记哪个 builder ，触发方式 controller.update(["id2"]); ，可传多个 Array 类型。
    :::
    - controller
      ```dart
      import 'package:get/get.dart';

      class GetBuildController extends GetxController {
        final _obj = 0.obs;
        set obj(value) => _obj.value = value;
        get obj => _obj.value;

        add() {
          _obj.value++;
        }
      }
      ```

    - 示例
      ```dart
      import 'package:flutter/material.dart';
      import 'package:flutter_application_1/pages/get-builder/controller.dart';
      import 'package:get/get.dart';

      class GetBuilderXView extends StatelessWidget {
        GetBuilderXView({Key key}) : super(key: key);

        final controller = GetBuildController();

        @override
        Widget build(BuildContext context) {
          return Scaffold(
            appBar: AppBar(
              title: const Text('Get Builder'),
            ),
            body: Center(
              child: Column(
                children: [
                  GetBuilder<GetBuildController>(
                    init: controller,
                    initState: (_) {},
                    builder: (_) => Text(_.obj.toString()),
                  ),
                  ElevatedButton(
                    onPressed: () {
                      controller.add();
                    },
                    child: const Text('add obj')
                  ),
                  ElevatedButton(
                    onPressed: () {
                      controller.update();
                    },
                    child: const Text('add obj')
                  )
                ],
              ),
            ),
          );
        }
      }
      ```

  - ValueBuilder
    :::tip
    适合局部的状态管理，很灵活。
    :::
    - 示例
      ```dart
      import 'package:flutter/material.dart';
      import 'package:get/get_state_manager/get_state_manager.dart';

      class ValueBuildView extends StatelessWidget {
        const ValueBuildView({Key key}) : super(key: key);

        @override
        Widget build(BuildContext context) {
          return Scaffold(
            appBar: AppBar(
              title: const Text('value-build'),
            ),
            body: Center(
              child: Column(
                children: [
                  ValueBuilder<int>(
                    initialValue: 100,
                    builder: (value, updateFn) {
                      return Column(
                        children: [
                          Text('$value'),
                          ElevatedButton(
                            onPressed: () {
                              updateFn(value + 1);
                            },
                            child: const Text('data')
                          )
                        ],
                      );
                    },
                    onUpdate: (val) {
                      print(val);
                    },
                  )
                ],
              ),
            ),
          );
        }
      }
      ```

### 状态控制器-内置方法
  - 每次
    ```dart
    ever(_count, (value) => print('每次改变' + value.toString()));
    ```

  - 防抖
    ```dart
    debounce(_count, (value) => print('防抖' + value.toString()), time: const Duration(seconds: 5));
    ```

  - 节流
    ```dart
    interval(_count, (value) => print('节流' + value.toString()), time: const Duration(seconds: 2));
    ```

  - 第一次
    ```dart
    once(_count, (value) => print('触发一次' + value.toString()));
    ```
    
  - 示例
    ```dart
    import 'package:get/get.dart';
    class BuiltInController extends GetxController {
      final _count = 0.obs;
      set count(value) => _count.value = value;
      get count => _count.value;

      add() => _count.value++;

      @override
      void onInit() {
        super.onInit();

        ever(_count, (value) => print('每次改变' + value.toString()));

        once(_count, (value) => print('触发一次' + value.toString()));

        debounce(_count, (value) => print('防抖' + value.toString()),
            time: const Duration(seconds: 5));

        interval(_count, (value) => print('节流' + value.toString()),
            time: const Duration(seconds: 2));
      }
    }
    ```
