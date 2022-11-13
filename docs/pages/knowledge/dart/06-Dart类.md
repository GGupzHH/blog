# Dart 类

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

### abstract 类、继承、类型
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
