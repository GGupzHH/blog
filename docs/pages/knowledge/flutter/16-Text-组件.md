---
title: Text 组件
date: '2022-11-25 20:02:23'
sidebar: 'auto'
categories:
 - Flutter
 - Dart
tags:
 - Flutter组件
---


本文介绍Flutter组件之`Text`组件，该组件可以控制字体大小、颜色、粗细等，以及扩展组件`RichText`、`TextSpan`，配置超链接、符号、加表情等等
<!-- more -->

### Text
  - 定义
    ```Dart
    const Text(
      //要显示的文字内容
      this.data,
      {
        //key类似于id
        Key key,
        //文字显示样式和属性
        this.style,
        this.strutStyle,
        //文字对齐方式
        this.textAlign,
        //文字显示方向
        this.textDirection,
        //设置语言环境
        this.locale,
        //是否自动换行
        this.softWrap,
        //文字溢出后处理方式
        this.overflow,
        //字体缩放
        this.textScaleFactor,
        //最大显示行数
        this.maxLines,
        //图像的语义描述，用于向Andoid上的TalkBack和iOS上的VoiceOver提供图像描述
        this.semanticsLabel,
      }
    )
    ```

  - TextStyle 定义
    ```Dart
    const TextStyle({
      //是否继承父类组件属性
      this.inherit = true,
      //字体颜色
      this.color,
      //文字大小，默认14px
      this.fontSize,
      //字体粗细
      this.fontWeight,
      //字体样式,normal或italic
      this.fontStyle,
      //字母间距，默认为0，负数间距缩小，正数间距增大
      this.letterSpacing,
      //单词间距，默认为0，负数间距缩小，正数间距增大
      this.wordSpacing,
      //字体基线
      this.textBaseline,
      //行高
      this.height,
      //设置区域
      this.locale,
      //前景色
      this.foreground,
      //背景色
      this.background,
      //阴影
      this.shadows,
      //文字划线，下换线等等装饰
      this.decoration,
      //划线颜色
      this.decorationColor,
      //划线样式，虚线、实线等样式
      this.decorationStyle,
      //描述信息
      this.debugLabel,
      //字体
      String fontFamily,
      List<String> fontFamilyFallback,
      String package,
    })
    ``` 

  - 示例
    ```Dart
    import 'package:flutter/gestures.dart';
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
            body: const Center(
              widthFactor: 2,
              heightFactor: 2,
              child: Text('TextTextTextTextTextTextTextTextTextTextTextTextTextTextextTextTextTextTextTextTextTextTextTextTextTextTextTextTextText',
                textScaleFactor: 2,
                textAlign: TextAlign.center,
                softWrap: true,
                maxLines: 3,
                overflow: TextOverflow.ellipsis,
                style: TextStyle(
                  fontSize: 12,
                  color: Colors.amber,
                  fontWeight: FontWeight.bold,
                  decoration: TextDecoration.underline
                )
              ),
            )
          ),
        );
      }
    }
    ```

### RichText
  - 定义
    ```Dart
    const Text.rich(
      // 样式片段标签TextSpan
      this.textSpan,
      {
        Key key,
        this.style,
        this.strutStyle,
        this.textAlign,
        this.textDirection,
        this.locale,
        this.softWrap,
        this.overflow,
        this.textScaleFactor,
        this.maxLines,
        this.semanticsLabel,
      }
    )

    const RichText({
      Key key,
      // 样式片段标签TextSpan
      @required this.text,
      this.textAlign = TextAlign.start,
      this.textDirection,
      this.softWrap = true,
      this.overflow = TextOverflow.clip,
      this.textScaleFactor = 1.0,
      this.maxLines,
      this.locale,
      this.strutStyle,
    })
    ```

  - 示例
    ```Dart
    import 'package:flutter/gestures.dart';
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
              widthFactor: 2,
              heightFactor: 2,
              child: Text.rich(TextSpan(
                text: '123',
                style: const TextStyle(color: Colors.pink, fontSize: 12),
              ))
            )
          ),
        );
      }
    }
    ```

### TextSpan
  - 定义
    ```Dart
    const TextSpan({
      //样式片段
      this.style,
      //要显示的文字
      this.text,
      //样式片段TextSpan数组，可以包含多个TextSpan
      this.children,
      //用于手势进行识别处理,如点击跳转
      this.recognizer,
    })
    ```

  - 示例
    ```Dart
    import 'package:flutter/gestures.dart';
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
              widthFactor: 2,
              heightFactor: 2,
              child: Text.rich(TextSpan(
                text: '123',
                style: const TextStyle(color: Colors.pink, fontSize: 12),
                children: <TextSpan>[
                  const TextSpan(
                    text: '这是啥',
                    style: TextStyle(
                      color: Colors.green,
                      fontSize: 34
                    )
                  ),
                  TextSpan(
                    text: 'Tap点击',
                    style: const TextStyle(
                      color: Colors.blueGrey,
                    ),
                    // 点击手势
                    recognizer: TapGestureRecognizer()..onTap = () {
                      print('object');
                    }
                  ),
                ]
              ))
            )
          ),
        );
      }
    }
    ```
