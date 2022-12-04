---
title: Flutter GetX-路由
date: '2022-12-04 20:32:26'
sidebar: 'auto'
categories:
 - Flutter
 - Dart
 - GetX
tags:
 - GetX
---


本文介绍Flutter的`Getx`的三大功能之一`路由配置`及其使用。
<!-- more -->

### 初始getx项目
  - pubspec.yaml
    ```yaml
    dependencies:
      ...
      get: ^3.26.0
    ```

  - lib/main.dart
    ```dart
    import 'package:flutter/material.dart';
    import 'package:flutter_application_1/common/router/app_pages.dart';
    import 'package:get/get.dart';


    Future<void> main() async {
      runApp(const MyApp());
    }

    class MyApp extends StatelessWidget {
      const MyApp({Key key}) : super(key: key);

      @override
      Widget build(BuildContext context) {
        return GetMaterialApp(
          // 是否开启debug右上角标记
          debugShowCheckedModeBanner: false,
          // 默认路由
          initialRoute: AppPages.INITIAL,
          // 路由表
          getPages: AppPages.routes,
          // 404
          unknownRoute: AppPages.unknownRoute,
        );
      }
    }
    ```

### 路由定义
  - 路由定义
    - lib/common/routes/app_routes.dart
      ```dart
      abstract class AppRoutes {
        static const Home = '/home';
        static const My = '/my';
        static const Details = '/details';
        static const ListDetails = '/list_details';
        static const ParamsDetails = '/details/:id';


        static const Notfound = '/not-found';
      }

      ```

    - lib/common/routes/app_pages.dart
      ```dart
      import 'package:flutter_application_1/common/router/app_routes.dart';
      import 'package:flutter_application_1/pages/Account/index.dart';
      import 'package:flutter_application_1/pages/details/index.dart';
      import 'package:flutter_application_1/pages/details/list_details.dart';
      import 'package:flutter_application_1/pages/details/params_details.dart';
      import 'package:flutter_application_1/pages/home/index.dart';
      import 'package:flutter_application_1/pages/notFound/index.dart';
      import 'package:get/route_manager.dart';

      class AppPages {
        static const INITIAL = AppRoutes.Home;

        static final List<GetPage> routes = [
          GetPage(name: AppRoutes.Home, page: () => const HomePage(), children: [
            GetPage(name: AppRoutes.Details, page: () => const DetailsPage()),
            GetPage(name: AppRoutes.ListDetails, page: () => const ListDetailsPage()),
            GetPage(name: AppRoutes.ParamsDetails, page: () => const ParamsDetails())
          ]),
          GetPage(name: AppRoutes.My, page: () => const AccountPage())
        ];

        static final unknownRoute =
            GetPage(name: AppRoutes.Notfound, page: () => const NotFoundView());
      }
      ```

### 导航跳转操作 命名、视图对象
  - 跳转
    - 跳转新页面
      ```dart
      Get.to(NextScreen());
      ```

    - 返回
      ```dart
      Get.back();
      ```
    
  - 示例
    ```dart
    import 'package:flutter/material.dart';
    import 'package:get/get.dart';

    class HomePage extends StatelessWidget {
      const HomePage({Key key}) : super(key: key);

      @override
      Widget build(BuildContext context) {
        return Scaffold(
            appBar: AppBar(
              title: const Text('Home'),
            ),
            body: ListView(
              children: [
                ListTile(
                  title: const Text("导航-跳转路由 /home > /my"),
                  subtitle: const Text('Get.toNamed("/my")'),
                  onTap: () => Get.toNamed("/my"),
                ),
                ListTile(
                  title: const Text("导航-嵌套路由 /home > /home/details"),
                  subtitle: const Text('Get.toNamed("/home/details")'),
                  onTap: () => Get.toNamed("/home/details"),
                ),
                const Divider(),
                ListTile(
                  title: const Text("导航-arguments 传值+返回值"),
                  subtitle: const Text('Get.toNamed("/home/details")'),
                  onTap: () async {
                    var result = await Get.toNamed("/home/list_details",
                        arguments: {"id": '123'});
                    Get.snackbar("返回值", "success -> " + result["success"].toString());
                  },
                ),
                const Divider(),
                ListTile(
                  title: const Text("导航-params 传值+返回值"),
                  subtitle: const Text('Get.toNamed("/home/details?id=777")'),
                  onTap: () async {
                    var result = await Get.toNamed("/home/list_details?id=777");
                    Get.snackbar("返回值", "success -> " + result["success"].toString());
                  },
                ),
                const Divider(),
                ListTile(
                  title: const Text("导航-参数 传值+返回值"),
                  subtitle: const Text('Get.toNamed("/home/details")'),
                  onTap: () async {
                    var result = await Get.toNamed("/home/details/999");
                    Get.snackbar("返回值", "success -> " + result["success"].toString());
                  },
                ),
                const Divider(),
                ListTile(
                  title: const Text("404"),
                  subtitle: const Text('404页面'),
                  onTap: () async {
                    var result = await Get.toNamed("/home123123");
                  },
                ),
                const Divider(),
              ],
            ));
      }
    }

    ```

### 导航-清除上一个
  ```dart
  import 'package:flutter/material.dart';
  import 'package:flutter_application_1/pages/home/index.dart';
  import 'package:get/get.dart';

  class DetailsPage extends StatelessWidget {
    const DetailsPage({Key key}) : super(key: key);

    @override
    Widget build(BuildContext context) {
      return Scaffold(
        appBar: AppBar(
          title: const Text('detail'),
        ),
        body: Center(
          child: Column(
            children: [
              ElevatedButton(
                onPressed: () {
                  Get.off(const HomePage());
                },
                child: const Text('清除路由')
              ),
            ],
          ),
        ),
      );
    }
  }
  ```

### 导航-清除所有
  ```dart
  import 'package:flutter/material.dart';
  import 'package:flutter_application_1/pages/home/index.dart';
  import 'package:get/get.dart';

  class DetailsPage extends StatelessWidget {
    const DetailsPage({Key key}) : super(key: key);

    @override
    Widget build(BuildContext context) {
      return Scaffold(
        appBar: AppBar(
          title: const Text('detail'),
        ),
        body: Center(
          child: Column(
            children: [
              ElevatedButton(
                onPressed: () {
                  Get.offAll(const DetailsPage());
                },
                child: const Text('清除所有路由')
              )
            ],
          ),
        ),
      );
    }
  }
  ```

### 导航-arguments 传值+返回值
  - 带参跳转
    ```dart
    ListTile(
      title: const Text("导航-arguments 传值+返回值"),
      subtitle: const Text('Get.toNamed("/home/details")'),
      onTap: () async {
        var result = await Get.toNamed("/home/list_details",
            arguments: {"id": '123'});
        Get.snackbar("返回值", "success -> " + result["success"].toString());
      },
    ),
    ```
    
  - 接收返回
    ```dart
    import 'package:flutter/material.dart';
    import 'package:get/get.dart';

    class ListDetailsPage extends StatelessWidget {
      const ListDetailsPage({Key key}) : super(key: key);

      Widget _buildArguments(Map val) {
        return val == null
            ? Container()
            : ListTile(
                title: Text("传值 id = " + val["id"].toString()),
                subtitle: const Text('Get.back(result: {"success": true}'),
                onTap: () => Get.back(result: {"success": true}),
              );
      }

      @override
      Widget build(BuildContext context) {
        final details = Get.arguments as Map;
        final params = Get.parameters;
        return Scaffold(
          appBar: AppBar(
            title: const Text('detail'),
          ),
          body: Center(
            child: Column(
              children: [
                const Text('data'),
                _buildArguments(details),
              ],
            ),
          ),
        );
      }
    }

    ```

### 导航-parameters 传值+返回值
  - 带参跳转
    ```dart
    ListTile(
      title: const Text("导航-params 传值+返回值"),
      subtitle: const Text('Get.toNamed("/home/details?id=777")'),
      onTap: () async {
        var result = await Get.toNamed("/home/list_details?id=777");
        Get.snackbar("返回值", "success -> " + result["success"].toString());
      },
    )
    ```

  - 接收返回
    ```dart
    import 'package:flutter/material.dart';
    import 'package:get/get.dart';

    class ListDetailsPage extends StatelessWidget {
      const ListDetailsPage({Key key}) : super(key: key);

      Widget _buildParams(Map val) {
        print(val);
        return val['id'] == null
            ? Container()
            : ListTile(
                title: Text("传值 id = " + val["id"].toString()),
                subtitle: const Text('Get.back(result: {"success": true}'),
                onTap: () => Get.back(result: {"success": true}),
              );
      }

      @override
      Widget build(BuildContext context) {
        final details = Get.arguments as Map;
        final params = Get.parameters;
        return Scaffold(
          appBar: AppBar(
            title: const Text('detail'),
          ),
          body: Center(
            child: Column(
              children: [
                const Text('data'),
                _buildParams(params)
              ],
            ),
          ),
        );
      }
    }
    ```

### 导航-参数 传值+返回值
  - 路由定义
    ```dart
    abstract class AppRoutes {
      // ...
      static const ParamsDetails = '/details/:id';
      // ...
    }
    ```

  - 带参跳转
    ```dart
    ListTile(
      title: const Text("导航-参数 传值+返回值"),
      subtitle: const Text('Get.toNamed("/home/details")'),
      onTap: () async {
        var result = await Get.toNamed("/home/details/999");
        Get.snackbar("返回值", "success -> " + result["success"].toString());
      },
    ),
    ```

  - 接收返回
    ```dart
    import 'package:flutter/material.dart';
    import 'package:get/get.dart';

    class ParamsDetails extends StatelessWidget {
      const ParamsDetails({Key key}) : super(key: key);

      Widget _buildParams(Map val) {
        return val == null
            ? Container()
            : ListTile(
                title: Text("传值 id = " + val["id"].toString()),
                subtitle: const Text('Get.back(result: {"success": true}'),
                onTap: () => Get.back(result: {"success": true}),
              );
      }

      @override
      Widget build(BuildContext context) {
        final params = Get.parameters;
        return Scaffold(
          appBar: AppBar(
            title: const Text('detail'),
          ),
          body: Center(
            child: Column(
              children: [const Text('data'), _buildParams(params)],
            ),
          ),
        );
      }
    }

    ```

### 导航-not found
  - 配置
    - 声明
      - app_routes.dart
      ```dart
      abstract class AppRoutes {
        // ...
        static const Notfound = '/not-found';
      }
      ```

    - 路由
      ```dart
      import 'package:flutter_application_1/common/router/app_routes.dart';
      import 'package:flutter_application_1/pages/Account/index.dart';
      import 'package:flutter_application_1/pages/details/index.dart';
      import 'package:flutter_application_1/pages/details/list_details.dart';
      import 'package:flutter_application_1/pages/details/params_details.dart';
      import 'package:flutter_application_1/pages/home/index.dart';
      import 'package:flutter_application_1/pages/notFound/index.dart';
      import 'package:get/route_manager.dart';

      class AppPages {
        static const INITIAL = AppRoutes.Home;

        static final List<GetPage> routes = [
          GetPage(name: AppRoutes.Home, page: () => const HomePage(), children: [
            GetPage(name: AppRoutes.Details, page: () => const DetailsPage()),
            GetPage(name: AppRoutes.ListDetails, page: () => const ListDetailsPage()),
            GetPage(name: AppRoutes.ParamsDetails, page: () => const ParamsDetails())
          ]),
          GetPage(name: AppRoutes.My, page: () => const AccountPage())
        ];

        static final unknownRoute =
            GetPage(name: AppRoutes.Notfound, page: () => const NotFoundView());
      }
      ```

    - 挂载
      ```dart
      import 'package:flutter/material.dart';
      import 'package:flutter_application_1/common/router/app_pages.dart';
      import 'package:get/get.dart';


      Future<void> main() async {
        runApp(const MyApp());
      }

      class MyApp extends StatelessWidget {
        const MyApp({Key key}) : super(key: key);

        @override
        Widget build(BuildContext context) {
          return GetMaterialApp(
            // 是否开启debug右上角标记
            debugShowCheckedModeBanner: false,
            // 默认路由
            initialRoute: AppPages.INITIAL,
            // 路由表
            getPages: AppPages.routes,
            // 404 声明并挂载
            unknownRoute: AppPages.unknownRoute,
          );
        }
      }
      ```
  - 页面
    ```dart
    import 'package:flutter/material.dart';
    import 'package:flutter_application_1/common/router/app_routes.dart';
    import 'package:get/get.dart';

    class NotFoundView extends StatelessWidget {
      const NotFoundView({Key key}) : super(key: key);

      @override
      Widget build(BuildContext context) {
        return Scaffold(
          appBar: AppBar(
            title: const Text('Not Found'),
          ),
          body: Center(
            child: Column(
              children: [
                const Text('什么都没找到'),
                ElevatedButton(
                    onPressed: () {
                      Get.offAllNamed(AppRoutes.Home);
                    },
                    child: const Text('返回首页'))
              ],
            ),
          ),
        );
      }
    }
    ```
