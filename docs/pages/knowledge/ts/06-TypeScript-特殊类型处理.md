---
title: TypeScript 特殊类型处理
date: '2023-06-20 14:55:43'
sidebar: 'auto'
categories:
- TypeScript
tags:
- TypeScript
---

本文介绍`TypeScript`中一些特殊类型的判断。
<!-- more -->

##
:::tip
`TypeScript`中类型的判断要根据它的特性来。
:::

### IsAny
  - any 类型与任何类型的交叉都是 any，也就是 1 & any 结果是 any。
    ```TypeScript
    type IsAny<T> = 'string' extends ('string' & T) ? true : false
    type typeAny = any
    type anyResult = IsAny<typeAny>
    ```

### IsEqual
  - 这种写法可以避免`any`的问题，具体原理等后面原理讲解。
    ```TypeScript
    type IsEqual<A, B> = (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2) ? true : false
    type typeEqual1 = 1
    type typeEqual2 = 2
    type equalResult = IsEqual<typeEqual1, typeEqual2>
    ```

### IsNever
  - never 在条件类型中也比较特殊，如果条件类型左边是类型参数，并且传入的是 never，那么直接返回 never。
    ```TypeScript
    type IsNever<T> = [T] extends [never] ? true : false
    type typeNaver = never
    type naverResult = IsNever<typeNaver>
    ```

### GetOptional
  - 可选索引的值为 undefined 和值类型的联合类型。
    ```TypeScript
    type people = {
      name: string,
      age: number,
      love?: string
    }

    type GetOptional<Obj extends Record<string, any>> = {
      [
        Key in keyof Obj
          as {} extends Pick<Obj, Key> ? Key : never
      ]: Obj[Key]
    }
    type opPeopleResult = GetOptional<people>
    ```

### GetRequired
  - 反着取一下就可以。
    ```TypeScript
    type people = {
      name: string,
      age: number,
      love?: string
    }

    type GetRequired<Obj extends Record<string, any>> = {
      [
        Key in keyof Obj
          as {} extends Pick<Obj, Key> ? never : Key
      ]: Obj[Key]
    }
    type rePeopleResult = GetRequired<people>
    ```

### GetSpecifiedAttribute
  - 合并上面两个写法
    ```TypeScript
    type GetSpecifiedAttribute<Obj extends Record<string, any>, S = 'Options' | 'Required'> = {
      [
        Key in keyof Obj
          as {} extends Pick<Obj, Key>
            ? (S extends 'Optional' ? Key : never) 
            : (S extends 'Required' ? Key : never)
      ]: Obj[Key]
    }

    type getAttrType = GetSpecifiedAttribute<people, 'Optional'>
    ```
     
### as const
   - TypeScript 默认推导出来的类型并不是字面量类型。但是类型编程很多时候是需要推导出字面量类型的，这时候就需要用 as const：
    ```TypeScript
      const zs = {
        name: 'zs',
        age: 12
      }

      const ls = {
        name: 'ls',
        age: 19
      } as const

      type zsType = typeof zs
      type lsType = typeof ls
    ```


