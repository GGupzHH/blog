# Scaffold 脚手架

### Scaffold 脚手架
:::tip
Scaffold 是一个页面布局脚手架，实现了基本的 Material 布局，继承自 StatefulWidget，是有状态组件。我们知道大部分的应用页面都是含有标题栏，主体内容，底部导航菜单或者侧滑抽屉菜单等等构成，那么每次都重复写这些内容会大大降低开发效率，所以 Flutter 提供了 Material 风格的 Scaffold 页面布局脚手架，可以很快地搭建出这些元素部分。对应 ios 的是 CupertinoPageScaffold
:::
  - 定义
    ```dart
    const Scaffold({
      Key key,
      // 菜单栏
      this.appBar,
      // 中间主体内容部分
      this.body,
      // 悬浮按钮
      this.floatingActionButton,
      // 悬浮按钮位置
      this.floatingActionButtonLocation,
      // 悬浮按钮动画
      this.floatingActionButtonAnimator,
      // 固定在下方显示的按钮
      this.persistentFooterButtons,
      // 左侧 侧滑抽屉菜单
      this.drawer,
      // 右侧 侧滑抽屉菜单
      this.endDrawer,
      // 底部菜单
      this.bottomNavigationBar,
      // 底部拉出菜单
      this.bottomSheet,
      // 背景色
      this.backgroundColor,
      // 自动适应底部padding
      this.resizeToAvoidBottomPadding,
      // 重新计算body布局空间大小，避免被遮挡
      this.resizeToAvoidBottomInset,
      // 是否显示到底部，默认为true将显示到顶部状态栏
      this.primary = true,
      this.drawerDragStartBehavior = DragStartBehavior.down,
    })
    ```

  - 示例
    ```dart
    import 'package:flutter/cupertino.dart';
    import 'package:flutter/material.dart';

    void main() {
      runApp(const MyApp());
    }

    class MyApp extends StatelessWidget {
      const MyApp({Key? key}) : super(key: key);

      @override
      Widget build(BuildContext context) {
        return MaterialApp(
          // APP 标题
          // ios 没有用、 android 进程名称 、 web 标题tab栏名称
          title: 'Material App',

          // APP 颜色
          color: Colors.green,

          // 样式
          theme: ThemeData(
            primarySwatch: Colors.yellow,
          ),

          // 主机暗色模式
          darkTheme: ThemeData(
            primarySwatch: Colors.red,
          ),

          // 显示debug标记 右上角
          debugShowCheckedModeBanner: false,

          // 调试显示材质网格
          debugShowMaterialGrid: true,

          // 显示性能叠加
          // showPerformanceOverlay: true,

          // 检查缓存图片的情况
          // checkerboardRasterCacheImages: true,

          // 检查不必要的setlayer
          // checkerboardOffscreenLayers: true,

          // 显示语义调试器
          // showSemanticsDebugger: true,

          // 首页
          home: Scaffold(
            // 悬浮按钮
            floatingActionButton: FloatingActionButton(
              onPressed: () {},
              child: const Icon(Icons.add_photo_alternate),
            ),

            // 悬浮按钮位置
            floatingActionButtonLocation: FloatingActionButtonLocation.centerTop,

            // 固定在下方显示的按钮
            persistentFooterButtons: const [
              Icon(CupertinoIcons.share),
              Icon(CupertinoIcons.share),
            ],

            // 压缩顶部菜单空间
            primary: true,

            // 左侧 侧滑抽屉菜单
            drawer: const Drawer(
              child: Text('data'),
            ),

            // 右侧 侧滑抽屉菜单
            endDrawer: const Drawer(
              child: Text('data'),
            ),

            // 检测手势行为方式，与drawer配合使用 down 方式有卡顿，可以 start 方式
            // drawerDragStartBehavior: DragStartBehavior.start,

            // 底部导航栏
            bottomNavigationBar: const Text('bottomNavigationBar'),

            // 底部拉出菜单
            bottomSheet: const Text('bottomSheet'),

            // 背景色
            backgroundColor: Colors.grey[300],

            // 自动适应底部padding
            resizeToAvoidBottomInset: true,

            appBar: AppBar(
              title: const Text('Material App'),
            ),
            body: Center(
              child: Column(
                children: const [
                  Text("这是怎么回事"),
                  FlutterLogo(
                    size: 100,
                  ),
                ],
              ),
            ),
          ),
        );
      }
    }
    ```
