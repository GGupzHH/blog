---
title: Dart 类
date: '2022-11-14 13:06:08'
sidebar: 'auto'
categories:
 - Dart
tags:
 - Dart基础
---


本文介绍`Dart`的`类`的使用方法，并且介绍了类作为`类型接口`的使用和实现了类的`继承`。
<!-- more -->

### 定义
  - ```dart
    class Car {
      num length;
      String color;

      Car(this.length, this.color);
    }
    ```

### 初始化列表
  - ```dart
    class Car {
      num length;
      String color;
      Map na1, na2;

      Car(this.length, this.color)
          : na1 = {'na': length},
            na2 = {'na': color};
    }
    final car = Car(110, 'red');
    print(car.na1);
    print(car.na2);
    ```

### 命名构造函数
  - ```dart
    class Car {
      Map na1, na2;
      // Map na3, na4;

      Car.first1(Map json)
          : na1 = {'first1': json['length']},
            na2 = {'first1': json['color']};

      Car.first2(Map json)
          : na1 = {'first2': json['length']},
            na2 = {'first2': json['color']};
    }
    final carFirst = new Car.first1({'length': 111, 'color': 'red'});
    final carFirst2 = new Car.first2({'length': 111, 'color': 'red'});
    print(carFirst.na1);
    print(carFirst2.na1);

    ```

### callable
  - ```dart
    class Car {
      call(String name) {
        print('Name is $name');
      }

      cell(num nums) {
        call(nums.toString());
      }
    }
    final car = Car();
    car('123');
    car.call('123');
    car.cell(222123);

    ```

### set 和 get
:::tip
实际的业务场景就是可以在获取值的同时，去加工当前类的属性。
:::
  - ```dart
    class Car {
      String? _color;

      Car();

      set color(String val) => _color = val;

      String get info => 'Car is $_color';
    }
    final car = Car();
    car.color = '123';
    print(car.info);
    ```

### 静态
  - ```dart
    class Car {
      static String carName = 'mustang';
      static void getCarName() => {print('car is name: $carName')};
    }
    print(Car.carName);
    Car.getCarName();
    ```

### abstract 类
  - abstract 类
    :::tip
    abstract类无法实例化
    :::
    ```dart
    abstract class Car {
      String carName = '';
      void getCarName();
    }
    ```

### 继承
  - 继承
    ```dart
    abstract class Car {
      String carName = '';
      void getCarName();
    }

    class Ferrari extends Car {
      @override
      String carName;

      Ferrari(this.carName);

      @override
      void getCarName() {
        print('car name is $carName');
      }
    }

    
    final ferrari = Ferrari('法拉利');
    print(ferrari.carName);
    ferrari.getCarName();
    ```
  
  - 父类调用
    ```dart
    class Car {
      String carName;
      Car(this.carName);

      void getCarName() {
        print('this is $carName');
      }
    }

    class Ferrari extends Car {
      Ferrari(super.carName);

      @override
      void getCarName() {
        super.getCarName();
        print('重写父类');
      }
    }
    final f = Ferrari('法拉利');
    print(f.carName);
    f.getCarName();
    ```
  
  - 调用父类构造
    ```dart
    class Car {
      String carName;
      Car(this.carName);

      void getCarName() {
        print('this is $carName');
      }
    }

    class Mustang extends Car {
      Mustang(String carName) : super(carName);
    }

    final m = Mustang('野马');
    print(m.carName);
    m.getCarName();
    ```

  - 多继承
    ```dart
    mixin Plane {
      void getCarName() {
        print('this is Plane');
      }
    }

    // 限定依赖
    mixin Car on Plane{
      void getName() {
        print('this is Car');
      }

      @override
      void getCarName() {
        print('this is Car');
      }
    }

    mixin Train {
      void getName() {
        print('this is Train');
      }

      void getTrainName() {
        print('this is Train');
      }
    }

    // with混入之前要根据依赖顺序混入
    class Mustang with Plane, Car, Train {
      String carName;
      Mustang(this.carName);
    }

    final m = Mustang('野马');
    print(m.carName);
    m.getCarName();
    m.getTrainName();
    // 如果函数重名则以后注入的为主
    m.getName();
    ```

  - 工厂
    - 调用子类
      ```dart
      abstract class Car {
        void call();
        factory Car(String type) {
          switch (type) {
            case "ferrari":
              return Ferrari();
            case "mustang":
              return Mustang();
            default:
              throw "The '$type' is not an animal";
          }
        }
      }

      class Ferrari implements Car {
        @override
        void call() {
          print('ferrari Calling...');
        }
      }

      class Mustang implements Car {
        @override
        void call() {
          print('mustang Calling...');
        }
      }

      void main() {
        var ferrari = Car('ferrari');
        var mustang = Car('mustang');

        ferrari.call();
        mustang.call();
      }
      ```

    - 单例模式
      ```dart
      class Car {
        static final Car _carName = Car._internal();

        Car._internal();

        factory Car() {
          // carName = name;
          return _carName;
        }

        void getCarName() {
          print('car $_carName');
        }
      }

      var ferrari = Car();
      var mustang = Car();

      print(identical(ferrari, mustang));

      Car().getCarName();
      Car().getCarName();
      ```

    - 减少重复实例对象
      ```dart
      class Car {
        String carName;
        Car(this.carName);

        factory Car.handleName(String name) => Car(name);

        void getCarName() {
          print('car $carName');
        }
      }

      void main() {
        var ferrari = Car('ferrari');
        var mustang = Car('mustang');

        ferrari.getCarName();
        mustang.getCarName();
      }
      ```

### 类型
  - 类型
    ```dart
    abstract class Car {
      String carName = '';
      void getCarName();
    }

    class Mustang implements Car {
      @override
      String carName;

      Mustang(this.carName);

      @override
      void getCarName() {
        print('car name is $carName');
      }
    }
    
    final mustang = Mustang('野马');
    print(mustang.carName);
    mustang.getCarName();
    ```
