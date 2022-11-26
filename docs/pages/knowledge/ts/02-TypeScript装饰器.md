# TypeScript-装饰器

## 装饰器
  - 装饰器本身就是一种语法糖，装饰器也有很多类型。

::: warning
  每种装饰器都有不同的内置类型！！！
:::

### 类装饰器
  - ```TypeScript
      // 此时的 target 是这个类
      const doc: ClassDecorator = (target) => { 
        target.prototype.name = "GG"
      }

      @doc
      class A {
        constructor() { 
        }
      }
    ```
  - ::: tip 
    其实上面的装饰器相当于下面的写法
    :::
  - ```TypeScript
      const doc = (target) => { 
        target.prototype.name = "GG"
      }

      class A {
        constructor() { 
        }
      }
      doc(A)
    ```
  

### 属性装饰器
  - ```TypeScript
      const doc: PropertyDecorator = (target, key: symbol | string) => {
        // target是原型对象
        // key是当前属性 
        console.log(target, key)
      }

      class A {
        @doc
        public name
        constructor() { 
            
        }
      }
    ```

### 参数装饰器
  - ```TypeScript
      const doc: ParameterDecorator = (target, fnName: symbol | string, index: any) => {
        // target 是原型对象
        // fnName 是函数名称
        // index 是参数所在索引
        console.log(target, fnName, index) 
      }

      class A {
        constructor() { 
            
        }

        getList(params: any, @doc query) { 

        }
      }

    ```


### 方法装饰器
  - ```TypeScript
      const doc: MethodDecorator = (target, fnName: symbol | string, descriptor: any) => {
        // target 是原型对象
        // fnName 是函数名称
        // descriptor 是当前方法的描述
        console.log(target, fnName, descriptor) 
      }

      class A {
        constructor() { 
            
        }

        @doc
        getList() { 

        }
      }
    ```

### 装饰器工厂
  :::tip
  nest内部用了大量的装饰器工厂函数，是为了减少代码的耦合
  :::
  - ```TypeScript
      import axios from 'axios'

      const Get = (uri: string) => {
        return (target, key: any, descriptor: PropertyDecorator) => {
          const fnc = descriptor.value

          axios.get(url)
            .then(res => { 
              fnc(res)
            })
            .catch(err => { 
              fnc(err)
            })
        }
      }

      class A {
        constructor() { 
            
        }

        @Get('/api/login')
        getList(res: any) { 
          console.log(res)
        }
      }

    ```