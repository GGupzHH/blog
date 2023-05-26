---
title: GitHub Token
date: '2023-05-26 14:17:20'
sidebar: 'auto'
categories:
 - GitHub
tags:
 - GitHub
 - GitHub Token
---

本文介绍如生成`GitHub`的` Personal access tokens (classic)`，和相关权限配置。
<!-- more -->

### 生成`Personal access tokens (classic)`
  1. [进入到设置页面](https://github.com/settings)
  2. 选择要生成的令牌类型
     1. [`Fine-grained personal access tokens`](https://github.com/settings/tokens?type=beta) 创建一个细粒度的存储库作用域令牌，适合个人API使用和通过HTTPS使用git。
     2. [`Generate new token (classic)`](https://github.com/settings/tokens) 个人访问令牌，与OAhth访问令牌类似，可以代替git在HTTPS上的密码，或者可以用来通过基本身份验证来验证API。
  
### 建议使用`Fine-grained personal access tokens`去配置个人令牌
  - 每个令牌只能访问单个用户或组织拥有的资源。
  - 每个令牌只能访问特定的存储库。
  - 每个令牌都被授予特定的权限，这些权限比授予 personal access tokens (classic) 的范围提供更多的控制。
  - 每个令牌都必须具有到期日期。
  - 组织所有者可要求必须获取对可访问组织中资源的任何 fine-grained personal access token 的批准。

:::warning
注意：Fine-grained personal access token 目前处于 beta 状态，且可能会更改。 若要留下反馈，请参阅反馈讨论。
:::

:::warning
在脚本那种使用时，请考虑将`Personal access tokens (classic)`存到当前项目的`secrets`中，并通过`GitHub Actions`运行脚本
:::

:::warning
作为安全预防措施，GitHub 会自动删除一年内未使用过的 personal access token。 为了提供进一步的安全性，强烈建议将过期时间添加到 personal access token。
:::

### [GitHub文档](https://docs.github.com/zh/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)
