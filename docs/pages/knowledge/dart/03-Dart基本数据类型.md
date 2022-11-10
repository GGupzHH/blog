# Dart 基本数据类型

### 变量
  - 弱类型 
    - `var`如果没有初始值，可以变成任何类型，但是如果有初始值将被锁定类型。
      :::tip
      var声明后默认是`null`，一般在不明确类型的时候使用。
      :::
      ```dart
      var a;
      a = '123';
      a = 123;
      a = {
        name: '张三'
      };
      ```
    - `Object`动态任意类型,编译阶段检查类型
      ```dart
      Object a = 123;
      a = '123';
      a.x();
      ```
    - `dynamic`动态任意类型,编译阶段不检查类型
      ```dart
      dynamic a = 123;
      a = '123';
      a.x();
      ```
  - 强类型
    - 声明类型, `声明之后类型将被锁定`
      - num	数字
      - int	整型
      - double	浮点
      - bool	布尔
      - String	字符串
      - StringBuffer	字符串 buffer
      - DateTime	时间日期
      - Duration	时间区间
      - List	列表
      - Sets	无重复队列
      - Maps	kv 容器
      - enum	枚举

### 常量
  :::tip
  类型声明可以省略，并且初始化后不能在赋值。
  :::
  - `final`适用于初始化成员变量
    ```dart
    final a = 123;
    final b = [1, 2, 3];
    ```
  - `const`适用于定义全局变量
    ```dart
    const a = 123;
    const b = [1, 2, 3];
    ```
  - `final`和`const`区别
    - :::danger
      final不会在内存中重复创建，const声明相同的变量会在内存中重复使用
      :::
    - ```dart
      // identical比较两个引用的是否是同一个对象判断是否相等
      final a = [1, 2, 3];
      final b = [1, 2, 3];
      print(identical(a, b)); // false

      const a = [1, 2, 3];
      const b = [1, 2, 3];
      print(identical(a, b)); // true
      ```

### 数值
  - int
    - 比较两个引用的是否是同一个对象判断是否相等
  
  - double
    - 64-bit (双精度) 浮点数，符合 IEEE 754 标准。
  
  - num
    - int 和 double 都是 num 的子类。

  - 十六进制
    ```dart
    int b = 0xE;
    print(b);

    [14]
    ```

  - 数值转换
    ```dart
    // string -> int
    int a = int.parse('123');

    // string -> double
    double b = double.parse('1.223');

    // int -> string
    String a = 123.toString();

    // double -> string
    String b = 1.223.toString();

    // double -> int
    double a = 1.8;
    int b = a.toInt();
    ```

### 布尔
  - 声明
    ```dart
    bool a;
    print(a);
    ```
  - 判断
    - :::danger
      只有true才会判断为真，其他所有的都是false
      :::
    - ```dart
      bool a = true;
      print(a);

      String b = '';
      if (b.isEmpty) {
        print('b是空的');
      }

      String c = '123';
      if (c.isNotEmpty) {
        print('c不是空的');
      }

      final d = [1];
      print(d.isEmpty);

      // 打印结果
      // true b是空的 c不是空的 false
      ```
