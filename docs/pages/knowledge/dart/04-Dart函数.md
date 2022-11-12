# Dart 函数

### 声明
  ```dart
  String printString(String s) {
    return s;
  }
  ```

### 参数
  ```dart
  String printString(String s, [String? s2]) {
    s2 ??= '123';
    return s + s2;
  }
  ```

### 参数默认值
  ```dart
  String printString({String s = 'abc', String s2 = '123'}) {
    return s + s2;
  }
  ```

### 函数作为返回值
  ```dart
  Function getMake(String name) {
    return () => name;
  }
  ```

### 匿名函数
  ```dart
  final l = [1, 2, 3];
  print(l.indexWhere(((element) => element > 1)));
  ```
  