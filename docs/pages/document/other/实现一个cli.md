---
title: 一起实现一个CLI工具
date: '2022-12-26 22:48:04'
sidebar: 'auto'
categories:
 - Come Together!
tags:
 - cli
---


本文带你一起实现一个`cli`工具
<!-- more -->

首先
项目生成：可以使用yo去生成一个项目模板，http://yeoman.io

开发规范：然后脚手架的模块导入规范必须是commonjs，而且都是js直接编写，期间由于部分包升级换代不支持commonjs规范，就得从原来的版本中去找。

依赖安装：依赖都安装到`dependencies`，不能安装到`devDependencies`，不然发包之后devDependencies中的依赖是不会自动安装的。

npm发包：403-重名/登录地址不对
