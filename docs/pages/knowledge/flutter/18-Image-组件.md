---
title: Image 组件
date: '2022-11-25 21:58:38'
sidebar: 'auto'
categories:
 - Flutter
 - Dart
tags:
 - Flutter组件
---


本文介绍Flutter组件之`Image`组件，该组件是一个图像的 Widget，提供了一些类方法来快捷使用来自内存、本地、网络、Assets 的图片。
<!-- more -->

### Image
:::tip
Image 组件的 image 参数是一个 ImageProvider, 这样的设计好处是你的图片对象可以来自于各种方式；
:::
  - 定义
    ```Dart
    //通过ImageProvider来加载图片
    const Image({
      Key key,
      // ImageProvider，图像显示源
      @required this.image,
      this.semanticLabel,
      this.excludeFromSemantics = false,
      //显示宽度
      this.width,
      //显示高度
      this.height,
      //图片的混合色值
      this.color,
      //混合模式
      this.colorBlendMode,
      //缩放显示模式
      this.fit,
      //对齐方式
      this.alignment = Alignment.center,
      //重复方式
      this.repeat = ImageRepeat.noRepeat,
      //当图片需要被拉伸显示的时候，centerSlice定义的矩形区域会被拉伸，类似.9图片
      this.centerSlice,
      //类似于文字的显示方向
      this.matchTextDirection = false,
      //图片发生变化后，加载过程中原图片保留还是留白
      this.gaplessPlayback = false,
      //图片显示质量
      this.filterQuality = FilterQuality.low,
    })
    ```

  - ImageProvider 图片对象
    - `ImageProvider` 是一个抽象类，实现类有 `FileImage`、`MemoryImage`、 `NetWorkImage`
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
            home: Scaffold(
              appBar: AppBar(
                title: const Text('Box Model'),
              ),
              body: Column(
                children: [
                  const Image(image: 
                    NetworkImage('https://i0.hdslb.com/bfs/garb/item/025d07fa04d38236bc2258be2faf2867e2c48fe1.png@144w_144h.webp')
                  )
                ],
              )),
          );
        }
      }
      ```

### Image.network
  - 定义
  ```Dart
  // 加载网络图片，封装类：NetworkImage
  Image.network(
    //路径
    String src,
    {
      Key key,
      //缩放
      double scale = 1.0,
      this.semanticLabel,
      this.excludeFromSemantics = false,
      this.width,
      this.height,
      this.color,
      this.colorBlendMode,
      this.fit,
      this.alignment = Alignment.center,
      this.repeat = ImageRepeat.noRepeat,
      this.centerSlice,
      this.matchTextDirection = false,
      this.gaplessPlayback = false,
      this.filterQuality = FilterQuality.low,
      Map<String, String> headers,
    }
  )
  ```

### Image.file
  - 定义
  ```Dart
  // 加载本地File文件图片，封装类：FileImage
  Image.file(
    //File对象
    File file,
    {
      Key key,
      double scale = 1.0,
      this.semanticLabel,
      this.excludeFromSemantics = false,
      this.width,
      this.height,
      this.color,
      this.colorBlendMode,
      this.fit,
      this.alignment = Alignment.center,
      this.repeat = ImageRepeat.noRepeat,
      this.centerSlice,
      this.matchTextDirection = false,
      this.gaplessPlayback = false,
      this.filterQuality = FilterQuality.low,
    }
  )
  ```
  
### Image.asset
  - 定义
  ```Dart
  // 加载本地资源图片,例如项目内资源图片
  // 需要把图片路径在pubspec.yaml文件中声明一下，如：
  // assets:
  //      - packages/fancy_backgrounds/backgrounds/background1.png
  // 封装类有：AssetImage、ExactAssetImage
  Image.asset(
    //文件名称，包含路径
    String name,
    {
      Key key,
      // 用于访问资源对象
      AssetBundle bundle,
      this.semanticLabel,
      this.excludeFromSemantics = false,
      double scale,
      this.width,
      this.height,
      this.color,
      this.colorBlendMode,
      this.fit,
      this.alignment = Alignment.center,
      this.repeat = ImageRepeat.noRepeat,
      this.centerSlice,
      this.matchTextDirection = false,
      this.gaplessPlayback = false,
      String package,
      this.filterQuality = FilterQuality.low,
    }
  )
  ```
  
### Image.memory
  - 定义
  ```Dart
  // 加载Uint8List资源图片/从内存中获取图片显示
  // 封装类：MemoryImage
  Image.memory(
    // Uint8List资源图片
    Uint8List bytes,
    {
      Key key,
      double scale = 1.0,
      this.semanticLabel,
      this.excludeFromSemantics = false,
      this.width,
      this.height,
      this.color,
      this.colorBlendMode,
      this.fit,
      this.alignment = Alignment.center,
      this.repeat = ImageRepeat.noRepeat,
      this.centerSlice,
      this.matchTextDirection = false,
      this.gaplessPlayback = false,
      this.filterQuality = FilterQuality.low,
    }
  )
  ```

### colorBlendMode 混合参数
  - 定义
    ```dart
    enum BlendMode {
      clear, src, dst, srcOver, dstOver, srcIn, dstIn, srcOut, dstOut, srcATop, dstATop, xor, plus, 
      modulate, screen, overlay, darken, lighten, colorDodge, colorBurn, hardLight, softLight, 
      difference, exclusion, multiply, hue, saturation, color, luminosity,
    }
    ```

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
          home: Scaffold(
            appBar: AppBar(
              title: const Text('Box Model'),
            ),
            body: Center(
              child: _buildNetworkImage(),
            )
          ),
        );
      }

      Image _buildNetworkImage() {
        return Image.network(
          'https://i0.hdslb.com/bfs/garb/item/025d07fa04d38236bc2258be2faf2867e2c48fe1.png@144w_144h.webp',
          colorBlendMode: BlendMode.color,
          color: Colors.deepPurple,
        );
      }
    }
    ```

### fit 图片大小适配
  - 定义
    | 名称 | 说明 |
    | ---- | :--: |
    | fill | 图片按照指定的大小在 Image 中显示，拉伸显示图片，不保持原比例，填满 Image。 |
    | contain | 以原图正常显示为目的，如果原图大小大于 Image 的 size，就按照比例缩小原图的宽高，居中显示在 Image 中。如果原图 size 小于 Image 的 size，则按比例拉升原图的宽和高，填充 Image 一边并居中显示。 |
    | cover | 以原图填满 Image 为目的，如果原图 size 大于 Image 的 size，按比例缩小，居中显示在 Image 上。如果原图 size 小于 Image 的 size，则按比例拉升原图的宽和高，填充 Image 居中显示。 |
    | fitWidth | 以原图正常显示为目的，如果原图宽大小大于（小于）Image 的宽，就缩小（放大）原图的宽与 Image 一致，居中显示在 Image 中。 |
    | fitHeight | 以原图正常显示为目的，如果原图高大小大于（小于）Image 的高，就缩小（放大）原图的高与 Image 一致，居中显示在 Image 中。 |
    | none | 保持原图的大小，显示在 Image 的中心。当原图的 size 大于 Image 的 size 时，多出来的部分被截掉。 |
    | scaleDown | 以原图正常显示为目的，如果原图大小大于 Image 的 size，就按照比例缩小原图的宽高，居中显示在 Image 中。如果原图 size 小于 Image 的 size，则不做处理居中显示图片。 |
    
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
          home: Scaffold(
            appBar: AppBar(
              title: const Text('Box Model'),
            ),
            body: Column(
              children: [for (var it in BoxFit.values) _buildFit(it)],
            )),
        );
      }

      Widget _buildFit(fit) {
        return Column(
          children: [
            Text('$fit'),
            Container(
              color: Colors.blueAccent,
              child: SizedBox(
                width: 100,
                height: 40,
                child: _buildNetworkImage(fit)
              ),
            )
          ],
        );
      }


      Image _buildNetworkImage([fit = 'none']) {
        return Image.network(
          'https://i0.hdslb.com/bfs/garb/item/025d07fa04d38236bc2258be2faf2867e2c48fe1.png@144w_144h.webp',
          colorBlendMode: BlendMode.color,
          color: Colors.deepPurple,
          fit: fit ?? 'none',
        );
      }
    }
    ```
