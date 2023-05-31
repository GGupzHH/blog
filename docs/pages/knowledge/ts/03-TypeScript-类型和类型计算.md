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

#### `extends`


#### `infer`

#### `|`

#### `&`

#### `映射`