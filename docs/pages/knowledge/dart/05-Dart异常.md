# Dart 异常

### 错误的两种类型
  - Exception 类
    :::tip
    一般用在可以捕获的情况下，可以安全处理。
    :::
    | 名称 | 说明 |
    | ----- | ----- |
    | DeferredLoadException |	延迟加载错误 |
    | FormatException	| 格式错误 |
    | IntegerDivisionByZeroException | 整数除零错误 |
    | IOException	IO | 错误 |
    | IsolateSpawnException | 隔离产生错误 |
    | TimeoutException | 超时错误 |

  - Error 类
    :::tip
    一般用在不可恢复，容易崩溃的情况。
    :::
    | 名称 | 说明 |
    | ---- | ---- |
    | AbstractClassInstantiationError |	抽象类实例化错误 |
    | ArgumentError |	参数错误 |
    | AssertionError |	断言错误 |
    | AsyncError |	异步错误 |
    | CastError |	Cast 错误 |
    | ConcurrentModificationError |	并发修改错误 |
    | CyclicInitializationError |	周期初始错误 |
    | FallThroughError Fall Through | 错误 |
    | JsonUnsupportedObjectError json | 不支持错误 |
    | NoSuchMethodError |	没有这个方法错误 |
    | NullThrownError Null | 错误错误 |
    | OutOfMemoryError | 内存溢出错误 |
    | RemoteError |	远程错误 |
    | StackOverflowError | 堆栈溢出错误 |
    | StateError | 状态错误 |
    | UnimplementedError | 未实现的错误 |
    | UnsupportedError | 不支持错误 |
    

### 抛出异常
  ```dart
  throw TimeoutException('超时错误');
  throw ArgumentError.value('参数错误');
  ```

### 捕获异常
  ```dart
  try {
    throw ArgumentError.value('参数错误');
  } on ArgumentError {
    print('第一次捕获');
  } catch (e) {
    print(e);
  }
  ```

### 重新抛出异常
  ```dart
  try {
    throw ArgumentError.value('参数错误');
  } on ArgumentError {
    print('第一次捕获');
    rethrow;
  } catch (e) {
    print(e);
  }
  ```

### Finally执行
  ```dart
  try {
    throw ArgumentError.value('参数错误');
  } on ArgumentError {
    print('第一次捕获');
    rethrow;
  } catch (e) {
    print(e);
  } finally {
    print('？？？');
  }
  ```

### 自定义异常
  ```dart
  class CustomError implements Exception {
    CustomError(this.message, this.type);

    final String message;
    final String type;

    @override
    String toString() {
      return 'CustomError: { message: $message, type: $type }';
    }
  }

  void main(List<String> args) {
    throw CustomError('自定义异常', '类型');
  }
  ```
  