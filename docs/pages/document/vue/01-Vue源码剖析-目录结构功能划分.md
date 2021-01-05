# Vue源码剖析-目录结构功能划分

## 当前分析只是个人进度 并不代表Vue官方

### [Vue源码地址](https://github.com/vuejs/vue)

### [Vue当前目录分析](https://github.com/GGupzHH/vue/tree/dev/src)

### 前情提要
  - 源码中使用的  [flow](https://zhenyong.github.io/flowtype/) 代码类型检查
  - 首先要了解Vue源码目录中各个文件夹的作用
  - 源码目录(当前只分析src目录下的源码)
    ```txt
      src
        |- compiler      编译相关 将模板转换成render函数 render创建虚拟DOM `
        |- core          Vue 核心库`core和平台是无关的 是vue最核心的代码`
        |- platforms     平台相关代码`和平台相关的代码`
        |- server        SSR 服务端渲染`SSR服务端渲染相关代码`
        |- sfc           .vue 文件编译为 .js 文件`Single file component`
        |- shared        公共的代码`通用函数`
    ```
  
- compiler 
  - 编译器
  ```txt
    将模板转换成render函数 render创建虚拟DOM 
  ```

- core
  ```txt
    core和平台是无关的
  ```
  - components
    ```txt
      keep-alive 组件
    ```
  - global-api
    ```txt
      vue 的静态方法
    ```
  - instance
    ```txt
      创建vue实例
    ```
  - observer
    ```txt
      响应式实现机制
    ```
  - util
    ```txt
      公共成员
    ```
  - vdom
    ```txt
      虚拟DOM
      增加了组件的机制
    ```
- platforms
  - 平台相关的
    - web 
    - weex
- server
  - 服务端相关代码
- sfc
  - Single file component
    ```txt
      单文件组件
    ```
- shared 
  - 公共的代码
