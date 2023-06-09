---
title: TypeScript-模式匹配
date: '2023年06月07日15:38:31'
sidebar: 'auto'
categories:
- TypeScript
tags:
- TypeScript
---

本文介绍如`TypeScript`怎么匹配各种类型并提取出来
<!-- more -->

## 模式匹配
:::tip
`Typescript` 类型的模式匹配是通过 `extends` 对类型参数做匹配，结果保存到通过 `infer` 声明的局部类型变量里，如果匹配就能从该局部变量里拿到提取出的类型。
模式匹配的套路在数组、字符串、函数、构造器、索引类型、Promise 等类型中都有大量的应用，掌握好这个套路能提升很大一截类型体操水平。
:::

### 数组类型
  - First
    ```TypeScript
      type GetArrFirst<Arr extends unknown[]> = Arr extends [infer F, ...unknown[]] ? F : never;
      type arr = [1, 2, '3']
      type firstArrType = GetArrFirst<arr>
    ```
  - Last
    ```TypeScript
      type GetArrLast<Arr extends unknown[]> = Arr extends [...unknown[], infer F] ? F : never;
      type arr = [1, 2, '3']
      type lastArrType = GetArrLast<arr>
    ```
  - PopArr
    ```TypeScript
      type PopArr<Arr extends unknown[]> = Arr extends [...infer F, unknown] ? F : never;
      type arr = [1, 2, '3']
      type popArrType = PopArr<arr>
    ```
  - ShiftArr
    ```TypeScript
      type ShiftArr<Arr extends unknown[]> = Arr extends [unknown, ... infer F]? F : never;
      type arr = [1, 2, '3']
      type shiftType = ShiftArr<arr>
    ```

### 字符串类型
  - 基本同上
  
### 函数
  - GetParameters
    ```TypeScript
        type GetParameters<Fun extends Function> = Fun extends (...arg: infer Arg) => unknown ? Arg : never;
        const fun = (age: number) => age + 1
        type getParameter = GetParameters<typeof fun>
    ```
  - GetReturnType
    ```TypeScript
      type GetReturnType<Fun extends Function> = Fun extends (...arg: any[]) => infer Ren ? Ren : never;
      const fun = (age: number) => age + 1
      type getReturnType = GetReturnType<typeof fun>
    ```

### 索引类型
  - GetRefProps
    ```TypeScript
      type GetRefProps<Props> = 'value' extends keyof Props ? Props extends { value: infer ValueType } ? ValueType : never : never
      type props = GetRefProps<{value: { name: 1}}>
    ```
