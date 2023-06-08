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
:::

### 数组类型
  - First
  - Last
  - PopArr
  - ShiftArr

### 字符串类型
  - StartsWith
  - Replace
  - Trim

### 函数
  - GetParameters
  - GetReturnType
  - GetThisParameterType

### 构造器
  - GetInstanceType
  - GetConstructorParameters

### 索引类型
  - GetRefProps
