---
title: TypeScript-类型转换
date: '2023-06-12 16:58:22'
sidebar: 'auto'
categories:
- TypeScript
tags:
- TypeScript
---

本文介绍`TypeScript`中各种类型如果转换。
<!-- more -->

## 类型转换-重新构造
:::tip
`TypeScript` 的 `type`、`infer`、类型参数声明的变量都不能修改，想对类型做各种变换产生新的类型就需要`重新构造`。
:::

### 数组类型的重新构造
  - `Push`：给元组类型再添加一些类型
    ```TypeScript
      type arr = [1, 2, 3]
      type Push<Arr extends unknown[], last> = [...Arr, last]
      type push = Push<arr, 4>
    ```

  - `Unshift`：在前面添加
    ```TypeScript
      type arr = [1, 2, 3]
      type Unshift<Arr extends unknown[], first> = [first, ...Arr]
      type unshift = Unshift<arr, 0>
    ```
  
### 字符串类型的重新构造
  - `CapitalizeStr`：首字母大写
    ```TypeScript
      type str = 'yellow'
      type CapitalizeStr<Str extends string> = Str extends `${infer First}${infer All}` ? `${Uppercase<First>}${All}` : Str
      type CapitalizeStrCase = CapitalizeStr<str>
    ```
  - `CamelCase`：转驼峰
    ```TypeScript
      type str1 = 'yellow_yellow_yellow_yellow_yellow'
      type CamelCase<Str extends string> = Str extends `${infer first}_${infer next}${infer rest}` ? `${first}${Uppercase<next>}${CamelCase<rest>}`: Str
      type CamelCaseCase = CamelCase<str1>
    ```
  - `DropSubStr`：删除一段字符
    ```TypeScript
      type str2 = 'hello !!!!!'
      type DropSubStr<Str extends string, Substr extends string> = Str extends `${infer Prefix}${Substr}${infer Suffix}` ? DropSubStr<`${Prefix}${Suffix}`, Substr> : Str
      type DropSubStrCase = DropSubStr<str2, '!'>
    ```

### 函数类型的重新构造
  - `AppendArgument`：添加参数
    ```TypeScript
      type func1 = (name: string, age: number) => void
      type AppendArgument<Func extends Function, addParams> = Func extends (...arg: infer Args) => infer ReturnType ? (...args: [...Args, addParams]) => ReturnType : never
      type AppendArgumentCase = AppendArgument<func1, 'gender'>
    ```

### 索引类型的重新构造
  - `Mapping`：映射修改
    ```TypeScript
      type map = {
        a: 1,
        b: 2,
        c:3
      }
      type Mapping<map extends object> = {
        [Key in keyof map]: [map[Key], map[Key]]
      }
      type MappingCase = Mapping<map>
    ```

  - `UppercaseKey`：把索引变成大写
    ```TypeScript
    type map = {
      a: 1,
      b: 2,
      c:3
    }
    type UppercaseKey<Obj extends object> = {
      [Key in keyof Obj as Uppercase<Key & string>]: Obj[Key]
    }
    type UppercaseKeyCase = UppercaseKey<map> 
    //   Record  可以约束
    type UppercaseKeyRecord<Obj extends Record<string, any>> = {
      [Key in keyof Obj as Uppercase<Key & string>]: Obj[Key]
    }
    ```

  - `ToReadonly`：添加`readonly`
    ```TypeScript
    type map = {
      a: 1,
      b: 2,
      c:3
    }
    type ToReadonly<T> =  {
      readonly [Key in keyof T]: T[Key];
    }
    type ToReadonlyCase = ToReadonly<map>
    ```

  - `ToPartial`：索引可选
    ```TypeScript
    type map = {
      a: 1,
      b: 2,
      c:3
    }
    type ToPartial<T> =  {
      [Key in keyof T]?: T[Key];
    }
    type ToPartialCase = ToPartial<map>
    ```

  - `ToMutable`：去掉`readonly`
    ```TypeScript
    type map = {
      a: 1,
      b: 2,
      c:3
    }
    type ToMutable<T> = {
      -readonly [Key in keyof T]: T[Key];
    }
    type ToMutableCase = ToMutable<ToReadonly<map>>
    ```

  - `ToRequired`：去掉可选
    ```TypeScript
    type map = {
      a: 1,
      b: 2,
      c:3
    }
    type ToRequired<T> = {
      [Key in keyof T]-?: T[Key];
    }
    type ToRequiredCase = ToRequired<ToPartial<map>>
    ```

  - `FilterByValueType`：过滤属性
    ```TypeScript
    interface obj {
      name: 'zs',
      age: 12,
      run: () => void
    }
    type FilterByValueType<T extends Record<string, any>, valueType> = {
      [Key in keyof T as T[Key] extends valueType ? Key : never]: T[Key]
    }

    type FilterByValueTypeCase1 = FilterByValueType<obj, number>
    type FilterByValueTypeCase2 = FilterByValueType<obj, number | string>
    type FilterByValueTypeCase3 = FilterByValueType<obj, () => any>
    ```
