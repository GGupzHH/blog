---
title: TypeScript-类型和类型计算
date: '2023-05-31 17:20:10'
sidebar: 'auto'
categories:
- TypeScript
tags:
- TypeScript
---

本文介绍TypeScript中的类型和类型计算
<!-- more -->


### `TypeScript`中的类型

#### 特殊的基本类型
  - never：never是任何类型的子类型,也就是说never可以赋值给任何类型
  - void：void 表示没有任何类型，没有返回值的函数
  - any：是任意类型，任何类型都可以赋值给它，它也可以赋值给任何类型（除了 never）
  - unknown：是未知类型，任何类型都可以赋值给它，但是它不可以赋值给别的类型

#### 字面量类型
  - 值也可以直接作为类型使用
    ```TypeScript
      // 直接使用
      type name = string
      const tomName: name = 'Tom'

      // 模板字面量使用
      type firstName = `Jost ${string}`
      const jsyName: firstName = 'Jost jsy'
    ```

#### 接口
  - 接口可以用来描述`函数`、`构造器`、`索引类型（对象、class、数组）`等`复合类型`。
  - 函数
    ```TypeScript
      interface IAge {
        (age: number): number
      }

      const getAge: IAge = (age) => {
        return age + 1
      }
    ```
    
  - 对象
    ```TypeScript
      interface IInfo {
        name: string
        age: number
        gender: string
      }

      const tom: IInfo = {
        name: 'Tom',
        age: 12,
        gender: '男'
      }
    ```
  
  - 构造器
    ```TypeScript
      interface IPeopleConstructor {
        new (
          info: IInfo
        ): IInfo
      }

      function People (cons: IPeopleConstructor): IInfo {
        return new cons(tom)
      }
    ```





### `TypeScript`中的类型计算

#### `extends ? :`可以理解为三目运算符
:::tip
`extends ? :`是条件运算，和`extends`不一样，`extends`是约束的意思
:::
  - 主要场景是一些动态的类型计算，这种类型也叫做`高级类型`, `高级类型`的特点是传入类型参数，经过一系列类型运算逻辑后，返回新的类型。
    ```TypeScript
      type name = string
      type lenName = `first ${string}`

      type names<T> = T extends 'len' ? lenName : name;


      const tomName: names<'tom'> = 'tom'

      const jckName: names<'len'> = 'first Jck'
    ```

#### `infer`
  - `infer`可以提取类型的一部分
  ```TypeScript
    type First<Array extends unknown[]> = Array extends [infer T, ...infer R] ? T : never

    type res = First<[1, 2, 3]> // 1
    type res1 = First<['1', '2', 3]> // '1'
  ```

#### `|`
  - 联合类型，也就是`或`
  ```TypeScript
    type Env1 = 'prod' | 'dev';
    type Env2 = 'prod' | 'ssh';

    type EnvUnion = Env1 | Env2; // 'prod' | 'dev' | 'ssh'

    type Age = {
        age:number
    }

    type Named  = {
        name: string
    }

    type Mim = Age | Named
    const mim: Mim = {
      name: 'mim',
      age: 123
    }
    const mim1: Mim = {
      name: 'mim'
    }
    const mim2: Mim = {
      age: 123
    }
  ```

#### `&`
  - 交叉类型，也就是`于`
  ```TypeScript
    type Env1 = 'prod' | 'dev';
    type Env2 = 'prod' | 'ssh';

    type EnvInter = Env1 & Env2; // 'prod'

    type Age = {
      age:number
    }

    type Named  = {
      name: string
    }

    type Tom = Age & Named
    const tom: Tom = {
      name: 'tom',
      age: 12
    }
  ```

#### `映射`
  - `映射类型`就相当于把一个集合映射到另一个集合
  - `索引查询`keyof T 是查询索引类型中所有的索引
  - `索引访问`T[Key] 是取索引类型某个索引的值
  ```TypeScript
  type keyMap<T> = {
    [key in keyof T]: T[key]
  }

  const aaa = {a: 1, b: 2}
  type a = keyMap<typeof aaa>
  // type a = {
  //     a: number;
  //     b: number;
  // }

  type a1 = keyMap<{a: 1, b: 2}>
  // type a1 = {
  //     a: 1;
  //     b: 2;
  // }


  type keyTuple<T> = {
      [key in keyof T]: [T[key], T[key]]
  }

  type b = keyTuple<{a: 1}>
  const bbb  = { a: 1}
  type b1 = keyTuple<typeof bbb>
  ```
