---
title: Flutter GetX-依赖注入
date: '2022-12-14 23:04:10'
sidebar: 'auto'
categories:
 - Flutter
 - Dart
 - GetX
tags:
 - GetX
---


本文介绍Flutter的`GetX`的`依赖注入`懒加载。
<!-- more -->


:::tip
只有使用Get.find才能更新视图，直接使用控制器去更新视图是不起作用的。
:::

### Get.put
  - 控制器
    ```dart
    import 'package:get/get.dart';

    class PutController extends GetxController {
      final _count = 0.obs;
      set count(value) => _count.value = value;
      get count => _count.value;

      add() => _count.value++;
    }
    ```

  - 第一个视图：put controller 实时更新
    ```dart
    import 'package:flutter/material.dart';
    import 'package:flutter_application_1/pages/put/controller.dart';
    import 'package:flutter_application_1/pages/put/put_next.dart';
    import 'package:get/get.dart';

    class PutView extends StatelessWidget {
      PutView({Key key}) : super(key: key);

      final controller = Get.put<PutController>(PutController());

      @override
      Widget build(BuildContext context) {
        return Scaffold(
          appBar: AppBar(
            title: const Text('Put'),
          ),
          body: Column(
            children: [
              GetX<PutController>(
                init: controller,
                initState: (_) {},
                builder: (_) => Text('${_.count}'),
              ),
              ElevatedButton(
                  onPressed: () {
                    controller.add();
                  },
                  child: const Text('add')),
              ElevatedButton(
                onPressed: () {
                  Get.to(PutNextView());
                },
                child: const Text('next page'),
              )
            ],
          ),
        );
      }
    }
    ```

  - 第二个视图：find controller 延时更新
    ```dart
    import 'package:flutter/material.dart';
    import 'package:flutter_application_1/pages/put/controller.dart';
    import 'package:get/get.dart';

    class PutNextView extends StatelessWidget {
      PutNextView({Key key}) : super(key: key);

      final controller = Get.find<PutController>();
      @override
      Widget build(BuildContext context) {
        return Scaffold(
          appBar: AppBar(
            title: const Text('Put Next'),
          ),
          body: Column(
            children: [
              GetX<PutController>(
                init: controller,
                builder: (_) => Text('${_.count}'),
              ),
              ElevatedButton(
                  onPressed: () {
                    controller.add();
                  },
                  child: const Text('add')),
            ],
          ),
        );
      }
    }
    ```

### Get.lazyPut + GetView 懒加载
  - 控制器
    ```dart
    import 'package:get/get.dart';

    class LazyController extends GetxController {
      final _count = 0.obs;
      set count(value) => _count.value = value;
      get count => _count.value;

      add() => _count.value++;

      @override
      void onInit() {
        super.onInit();
        print("onInit");
      }

      @override
      void onClose() {
        super.onClose();
        print("onClose");
      }
    }
    ```

  - 第一个视图
    ```dart
    import 'package:flutter/material.dart';
    import 'package:flutter_application_1/common/router/app_routes.dart';
    import 'package:flutter_application_1/pages/lazyPut/controller.dart';
    import 'package:get/get.dart';

    class LazyPutView extends StatelessWidget {
      const LazyPutView({Key key}) : super(key: key);

      @override
      Widget build(BuildContext context) {
        return Scaffold(
          appBar: AppBar(
            title: const Text('lazy put'),
          ),
          body: Column(
            children: [
              GetX<LazyController>(
                init: Get.find<LazyController>(),
                initState: (_) {},
                builder: (_) => Text('${_.count}'),
              ),
              const SizedBox(
                height: 20,
              ),
              ElevatedButton(
                onPressed: () {
                  Get.find<LazyController>().add();
                },
                child: const Text('add')
              ),
              ElevatedButton(onPressed: () {
                Get.toNamed(AppRoutes.Home + AppRoutes.LazyNext);
              }, child: const Text('Next GetView Page'))
            ],
          ),
        );
      }
    }

    ```

  - 第二个视图
    ```dart
    import 'package:flutter/material.dart';
    import 'package:flutter_application_1/pages/lazyPut/controller.dart';
    import 'package:get/get.dart';

    class NextPageView extends GetView<LazyController> {
      const NextPageView({Key key}) : super(key: key);

      @override
      Widget build(BuildContext context) {
        return Scaffold(
          appBar: AppBar(title: const Text('MyPage')),
          body: Column(
            children: [
              Obx(() => Text('value -> ${controller.count}')),
              ElevatedButton(
                onPressed: () {
                  controller.add();
                },
                child: const Text('add'),
              ),
            ],
          ));
      }
    }

    ```

  - 绑定`bindings`
    ```dart
    import 'package:flutter_application_1/pages/lazyPut/controller.dart';
    import 'package:get/get.dart';

    class LazyBinding implements Bindings {
      @override
      void dependencies() {
        Get.lazyPut<LazyController>(() => LazyController());
      }
    }
    ```

  - 路由
    ```dart
    GetPage(
      name: AppRoutes.LazyPut, 
      binding: LazyBinding(), 
      page: () => const LazyPutView()
    ),
    ```
