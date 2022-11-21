# MaterialApp

### `MaterialApp`组件
:::tip
Material 风格的程序的构建，当然相对应的是 ios 风格是 CupertinoApp
:::
  - 组件定义
    ```dart
    const MaterialApp({
      Key key,
      // 导航键 , key的作用提高复用性能
      this.navigatorKey,
      // 主页
      this.home,
      // 路由
      this.routes = const <String, WidgetBuilder>{},
      // 初始命名路由
      this.initialRoute,
      // 路由构造
      this.onGenerateRoute,
      // 未知路由
      this.onUnknownRoute,
      // 导航观察器
      this.navigatorObservers = const <NavigatorObserver>[],
      // 建造者
      this.builder,
      // APP 标题
      this.title = '',
      // 生成标题
      this.onGenerateTitle,
      // APP 颜色
      this.color,
      // 样式定义
      this.theme,
      // 主机暗色模式
      this.darkTheme,
      // 样式模式
      this.themeMode = ThemeMode.system,
      // 多语言 本地化
      this.locale,
      // 多语言代理
      this.localizationsDelegates,
      // 多语言回调
      this.localeListResolutionCallback,
      this.localeResolutionCallback,
      // 支持的多国语言
      this.supportedLocales = const <Locale>[Locale('en', 'US')],
      // 调试显示材质网格
      this.debugShowMaterialGrid = false,
      // 显示性能叠加
      this.showPerformanceOverlay = false,
      // 检查缓存图片的情况
      this.checkerboardRasterCacheImages = false,
      // 检查不必要的setlayer
      this.checkerboardOffscreenLayers = false,
      // 显示语义调试器
      this.showSemanticsDebugger = false,
      // 显示debug标记 右上角
      this.debugShowCheckedModeBanner = true,
    })
    ```

  - 示例
    ```dart
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
            primarySwatch: Colors.cyan,
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

### `CupertinoApp`组件
  - 组件定义
    ```dart
    const CupertinoApp=({
      this.navigatorKey,
      this.home,
      this.theme,
      Map<String, Widget Function(BuildContext)> this.routes = const <String, WidgetBuilder>{},
      this.initialRoute,
      this.onGenerateRoute,
      this.onGenerateInitialRoutes,
      this.onUnknownRoute,
      List<NavigatorObserver> this.navigatorObservers = const <NavigatorObserver>[],
      this.builder,
      this.title = '',
      this.onGenerateTitle,
      this.color,
      this.locale,
      this.localizationsDelegates,
      this.localeListResolutionCallback,
      this.localeResolutionCallback,
      this.supportedLocales = const <Locale>[Locale('en', 'US')],
      this.showPerformanceOverlay = false,
      this.checkerboardRasterCacheImages = false,
      this.checkerboardOffscreenLayers = false,
      this.showSemanticsDebugger = false,
      this.debugShowCheckedModeBanner = true,
      this.shortcuts,
      this.actions,
      this.restorationScopeId,
      this.scrollBehavior,
      this.useInheritedMediaQuery = false,
    })
    ```

  - 实例
    ```dart
    import 'package:flutter/cupertino.dart';

    void main() {
      runApp(const MyApp());
    }

    class MyApp extends StatelessWidget {
      const MyApp({Key? key}) : super(key: key);

      @override
      Widget build(BuildContext context) {
        return const CupertinoApp(
          home: CupertinoPageScaffold(
            navigationBar: CupertinoNavigationBar(
              middle: Text('Home'),
            ),
            child: Center(
              child: Icon(CupertinoIcons.share)
            ),
          ),
          debugShowCheckedModeBanner: false,
        );
      }
    }
    ```
