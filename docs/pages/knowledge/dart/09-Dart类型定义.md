# Dart 类型定义

### typedef 定义使用
  - ```dart
    typedef Tfunc = void Function(String val);

    class Ponet {
      Tfunc fun;
      Ponet(this.fun);
    }

    void main() async {
      final a = Ponet((val) {
        print(val);
      });

      a.fun('你好');
    }
    ```
    