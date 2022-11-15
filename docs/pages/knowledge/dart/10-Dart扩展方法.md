# Dart 扩展

### extension扩展
  - :::tip
    我们给可以扩展类加个前缀 Ex 这样一看就知道是扩展；
    :::

  - :::tip 业务场景
    可以做一些功能函数的二次扩展和视图组件的扩展；
    :::
    
  - ```dart
    import 'package:intl/intl.dart';

    extension ExDateTime on DateTime {
      /// 方法，格式化日期 yyyy-MM-dd
      String toDateString({String format = 'yyyy-MM-dd'}) {
        return DateFormat(format).format(this);
      }

      // 属性
      int get nowTicket => this.microsecondsSinceEpoch;
    }

    main() {
      var now = DateTime.now();
      print(now.microsecondsSinceEpoch);

      print(DateFormat('yyyy-MM-dd').format(DateTime.now()));
      print(now.toDateString());
      print(now.nowTicket);
    }    
    ```
