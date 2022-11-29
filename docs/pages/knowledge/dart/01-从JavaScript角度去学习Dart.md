---
title: Dart
date: '2022-11-10 14:42:08'
sidebar: 'auto'
categories:
 - Dart
tags:
 - Dart基础
---


本文介绍从`JavaScript`角度去学习`Dart`，介绍了`Dart`的基本数据类型、函数和类、库的使用。
<!-- more -->

:::tip
Dart是静态脚本语言
:::
### Dart 相关链接
  - [官网](https://dart.cn/guides/language/language-tour)

### Dart 创建项目
  - 创建项目
    ```sh
      dart create dart_learn
    ```
  - 运行
    ```sh
      dart run
    ```

### Dart 基本数据类型
  - **Null**
    - `null`在`Dart`中是存在的，`null`是弱类型object的子类型，并非基础数据类型。
    - 所有的数据类型，如果初始化后没有赋值都将被赋值`null`类型。
    - 
  - **Symbol**
    - `JavaScript`中**Symbol**是基础数据类型，一般用作唯一标识或者键名。
    - `Dart`中，Symbol是一个不透明的动态字符串名称，反映库中的源数据。
      ```Dart
        void main() {
          Map test = new Map();

          test[#t] = 'symbol test';

          print(test);
          print(test[#t]);
          print(test[Symbol('t')]);
          print(#t);
          print();
        }
      ```
    - 代码运行结果
      ```txt
        {Symbol("t"): symbol test}
        symbol test
        symbol test
        Symbol("t")
      ```
    - **Symbol 在Dart中是一张反射概念**


  - **弱类型**
    - **var**
      - var数据类型声明第一次赋值的时候会将其数据类型绑定
        ```Dart
          // 会报错 Assign value to new local variable
          var t = 123
          t = '123'
        ```

    - **object**
      - object 可以进行任何赋值，没有约束，但是在编译的时候会做一些判断并且给出报错。如果数据来自接口层就会很容易导致运行时报错，所以要减少使用。

    - **dynamic**
      - dynamic 也是`动态`的数据类型，但是数据类型调用异常，则只是会在运行时报错，很`危险`，所以要慎重。
    
  - **Map和List**
    - 和`JavaScript`基本用法一致
    
  - **基础运算符**
    - Dart中没有 `===`运算符，不过Dart也有一些类型测试运算符。
      - `??` 运算符，比如，t??'test' 是 t!= null ? t : 'test' 的缩写；
      - 链式调用
        ```Dart
          testObj.add('t')
          ..delete('d')
          ..show()
        ```
**************
### Dart 函数和类
  - **函数**
    - 和JavaScript的函数区别不大。箭头函数，闭包，匿名函数，高阶函数，参数等。

  - **类**
    - 概念基本一致，用法上有少许差异。
    - 基本用法
      ```Dart
        class Dog {
          // 实例属性
          String color = '白色';
          String type = '🐕';
          String actions = '趴着';
          String name = '狗子';

          // 静态属性
          static String dogName = '小黑';

          // 可选参数要放到{}
          setColor({String color = "black"}) {
            this.color = color;
          }

          // 静态方法
          static setName(String name) {
            dogName = name;
            return name;
          }

        }

        void main() {
          Dog.setName('小狗子');
          print(Dog.dogName);

          Dog xiaohei = new Dog();
          xiaohei.setColor(color: 'red');

          print(xiaohei);
          print(xiaohei.color);
        }
      ```


  - **命名构造函数**
    - `Dart`支持一个函数有多个构造函数，并且在实例化的时候可以选择不同的构造函数。
      ```Dart
        class Dog {
          String color = '白色';
          String name = '小黑子';

          Dog.SetDogColor(String color) {
            this.color = color;
          }

          Dog.SetDogName(String name) {
            this.name = name;
          }
        }

        void main() {
          Dog block = new Dog.SetDogColor('黑色');

          Dog heizi = new Dog.SetDogName('大黑子');

          print(block.color);
          print(heizi.name);
        }
      ```
  
  - **访问控制**
    - 默认情况都是public，如果需要设置为私有属性，则需要在方法或者属性前使用`"_"`。

  - **抽象类和泛型类**
    - `抽象类`: 主要是实现一个类被其他子类继承，抽象类无法实例化。
      ```Dart
        abstract class Actions {
          run();
          jump();
        }

        class Dog extends Actions {
          run() {
            print('这只狗在跑');
          }

          jump() {
            print('这只狗在跳');
          }
        }

        class Cat extends Actions {
          run() {
            print('这只猫在跑');
          }

          jump() {
            print('这只猫在跳');
          }
        }

        void main() {
          Dog dog = new Dog();
          Cat cat = new Cat();
          dog.run();
          cat.jump();
        }
      ```
    - `泛型类`: 定义类型
      ```Dart
        class Array<T> {
          List _list = new List<T>();
          Array();
          void add<T>(T value) {
            this._list.add(value);
          }

          get value{
            return this._list;
          }
        }

        void main(List<String> args) {
          Array arr = new Array<String>();
          arr.add('aa');
          arr.add('bb');
          print(arr.value);

          Array arr2 = new Array<int>();
          arr2.add(1);
          arr2.add(2);
          print(arr2.value);
        }
      ```

*************
### Dart 库与调用
  - **Dart库管理**
    - Dart一样有自己的包管理工具`pub.dev`。
    - 配置文件 `pubspec.yaml` 中增加该库即可。
    - 和在 JavaScript 的 package.json 中增加声明一样，同样也有 dependencies 和 dev_dependencies。
    ```dev
      dependencies:
        cupertino_icons: ^1.0.2
      dev_dependencies:
        flutter_test:
          sdk: flutter
    ```

  - **Dart调用库**
    - 引入使用`import`。
    - 引入 pages 下的 header.dart 模块。
    - `import` 为关键词。
    - `package` 为协议，可以使用 http 的方式，不过最好使用本地 package 方式，避免性能受影响。
    - `project_names` 为库名或者说是该项目名。
    - `第三方模块`则必须使用 package 的引入方式。
      ```dev
        // 当然这里也可以使用相对路径的方式，不过建议使用 package 的方式，以保持整个项目代码的一致性
        import 'package:project_names/pages/header.dart';
      ```
