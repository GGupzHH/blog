---
title: 路由 Navigator
date: '2022-11-27 23:04:12'
sidebar: 'auto'
categories:
 - Flutter
 - Dart
tags:
 - Flutter路由
---


本文介绍Flutter的路由配置和使用，并且实现简单的案例。
<!-- more -->


### 匿名路由
  - 路由传值
    - 传递可以在初始新界面对象时通过构造函数压入
    - 新界面退出后的返回值通过 Navigator.pop 的参数返回

  - 定义
    ```dart
    MaterialPageRoute({
      // 是一个WidgetBuilder类型的回调函数，它的作用是构建路由页面的具体内容，返回值是一个widget。我们通常要实现此回调，返回新路由的实例。
      WidgetBuilder builder,

      // 包含路由的配置信息，如路由名称、是否初始路由（首页）。
      RouteSettings settings,

      // 默认情况下，当入栈一个新路由时，原来的路由仍然会被保存在内存中，如果想在路由没用的时候释放其所占用的所有资源，可以设置maintainState为 false。
      bool maintainState = true,

      // 表示新的路由页面是否是一个全屏的模态对话框，在 iOS 中，如果fullscreenDialog为true，新页面将会从屏幕底部滑入（而不是水平方向）。
      bool fullscreenDialog = false,
    })
    ```
  - 示例
    - 父页面
    ```dart
    import 'package:flutter/material.dart';
    import 'package:flutter_application_1/date_child.dart';

    void main(List<String> args) {
      runApp(const ModelBox());
    }

    class ModelBox extends StatelessWidget {
      const ModelBox({Key? key}) : super(key: key);

      @override
      Widget build(BuildContext context) {
        return MaterialApp(
          home: Scaffold(
            appBar: AppBar(
              title: const Text('Box Model'),
            ),
            body: Column(
              children: const [
                ParentWidget(),
              ],
            )),
        );
      }
    }

    class ParentWidget extends StatelessWidget {
      const ParentWidget({Key? key}) : super(key: key);

      @override
      Widget build(BuildContext context) {
        return Container(
          child: TextButton(
            onPressed: () async {
              print('object');
              var result = await Navigator.push(context,
                MaterialPageRoute(builder: (context) {
                  return const DateChildWidget(title: '父组件给你的名字');
                })
              );
              print(result);
            },
            child: const Text('跳转child')),
        );
      }
    }
    ```

    - 子页面
    ```dart
    import 'package:flutter/material.dart';

    class DateChildWidget extends StatelessWidget {
      final String? title;
      const DateChildWidget({Key? key, this.title}) : super(key: key);

      @override
      Widget build(BuildContext context) {
        return Scaffold(
          appBar: AppBar(
            title: const Text('Datechild'),
          ),
          body: Column(
            children: [
              const Text('这是子页面'),
              ElevatedButton(
                onPressed: () {
                  Navigator.pop(context, 'ok');
                },
                child: const Text('返回父页面'))
            ],
          ),
        );
      }
    }
    ```


### 命名路由
  - 定义路由名称
    ```dart
    import 'package:flutter/material.dart';
    import 'package:flutter_application_1/date_child.dart';

    void main(List<String> args) {
      runApp(const ModelBox());
    }

    class ModelBox extends StatelessWidget {
      const ModelBox({Key? key}) : super(key: key);

      @override
      Widget build(BuildContext context) {
        return MaterialApp(
          routes: {
            '/child': (context) => const DateChildWidget(
              title: '命名路由',
            )
          },
          home: Scaffold(
            appBar: AppBar(
              title: const Text('Box Model'),
            ),
            body: Column(
              children: const [
                ParentWidget()
              ],
            )),
        );
      }
    }
    ```

  - 跳转child
    ```dart    
    class ParentWidget extends StatelessWidget {
      const ParentWidget({Key? key}) : super(key: key);

      @override
      Widget build(BuildContext context) {
        return Container(
          child: TextButton(
            onPressed: () async {
              var result = await Navigator.pushNamed(
                context,
                '/child',
                arguments: {
                  'title': 'oiiiiiiiiiiiiiio'
                }
              );
            },
            child: const Text('跳转子路由')
          )
        );
      }
    }
    ```

  - 取值
    ```dart
    import 'package:flutter/material.dart';

    class DateChildWidget extends StatelessWidget {
      final String? title;
      const DateChildWidget({Key? key, this.title}) : super(key: key);

      @override
      Widget build(BuildContext context) {
        // 取值
        final arguments = (ModalRoute.of(context)?.settings.arguments ?? <String, dynamic>{}) as Map;
        var title = arguments['title'];
        return Scaffold(
          appBar: AppBar(
            title: const Text('Datechild'),
          ),
          body: Column(
            children: [
              Text(title ?? ''),
              ElevatedButton(
                onPressed: () {
                  Navigator.pop(context, 'ok');
                },
                child: const Text('返回父页面')
              )
            ],
          ),
        );
      }
    }
    ```


### onGenerateRoute 手动解析
  - 示例
    ```dart
    import 'package:flutter/material.dart';

    void main(List<String> args) {
      runApp(const ModelBox());
    }

    class ModelBox extends StatelessWidget {
      const ModelBox({Key? key}) : super(key: key);

      @override
      Widget build(BuildContext context) {
        return MaterialApp(
          onGenerateRoute: (settings) {
            // 匹配/child
            if (settings.name == '/child') {
              return MaterialPageRoute(builder: (context) => const ChildPage());
            }

            // 匹配/detail/:id
            var uri = Uri.parse(settings.name!);
            print(uri);
            if (uri.pathSegments.length == 2 && uri.pathSegments.first == 'detail') {
              String uid = uri.pathSegments[1];
              return MaterialPageRoute(
                builder: (context) => DetailPage(uid: uid)
              );
            }

            // 404 娄底
            return MaterialPageRoute(builder: (context) => const UnknownPage());
          },
          home: Scaffold(
            appBar: AppBar(
              title: const Text('Box Model'),
            ),
            body: Column(
              children: const [ParentWidget()],
            )),
        );
      }
    }

    class ChildPage extends StatelessWidget {
      const ChildPage({Key? key}) : super(key: key);

      @override
      Widget build(BuildContext context) {
        return Scaffold(
          appBar: AppBar(title: const Text('123')),
          body: Container(
            child: Column(
              children: [
                const Text('首页'),
                OutlinedButton(
                  onPressed: () {
                    Navigator.pop(context, '回来了');
                  },
                  child: const Text('返回'))
              ],
            ),
          ),
        );
      }
    }

    class DetailPage extends StatelessWidget {
      final String? uid;
      const DetailPage({Key? key, this.uid}) : super(key: key);

      @override
      Widget build(BuildContext context) {
        return Scaffold(
          appBar: AppBar(
            title: const Text('Detail Page'),
          ),
          body: Text(uid ?? ''),
        );
      }
    }

    // 默认展示页面
    class ParentWidget extends StatelessWidget {
      const ParentWidget({Key? key}) : super(key: key);

      @override
      Widget build(BuildContext context) {
        return Container(
            child: Column(
          children: [
            TextButton(
              onPressed: () async {
                var result = await Navigator.pushNamed(context, '/child',
                    arguments: {'title': 'oiiiiiiiiiiiiiio'});
              },
              child: const Text('跳转子路由')
            ),
            TextButton(
              onPressed: () async {
                var result = await Navigator.pushNamed(context, '/detail/id999');
              },
              child: const Text('跳转带参数/detail路由')
            ),
            TextButton(
              onPressed: () async {
                var result = await Navigator.pushNamed(context, '/detailsss');
              },
              child: const Text('跳转404')
            )
          ],
        ));
      }
    }

    // 404 最后匹配
    class UnknownPage extends StatelessWidget {
      const UnknownPage({Key? key}) : super(key: key);

      @override
      Widget build(BuildContext context) {
        return Scaffold(
          appBar: AppBar(
            title: const Text('404'),
          ),
          body: const Center(
            child: Text('404', style: TextStyle(color: Colors.amber, fontSize: 40)),
          ),
        );
      }
    }
    ```
