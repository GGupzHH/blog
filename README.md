# 序

此仓库提供了一些常用的 VuePress配置案例

### [首页](https://ggupzhh.github.io/vue-element-admin-press/)

## 目录
```js
|-- docs
|--  |-- .vuepress
|--  |--  |   |--components
|--  |--  |   |   |--NavigationChunk.vue
|--  |--  |   |--data
|--  |--  |   |   |--index.js
|--  |--  |   |   |--readdir.js
|--  |--  |   |--public
|--  |--  |   |   |--icon.png
|--  |--  |   |   |--logo.jpg
|--  |--  |   |--styles
|--  |--  |   |   |--index.styl
|--  |--  |   |   |--palette.styl
|--  |--  |-- config.js
|--  |--  |-- style.styl
|--  |-- pages
|--  |--  |   |--feature
|--  |--  |   |   |--built-in
|--  |--  |   |   |  |-- basic.md
|--  |--  |   |   |--components
|--  |--  |   |   |  |-- 拖拽.md
|--  |--  |   |   |--utils
|--  |--  |   |   |  |-- 单例模式.md
|--  |--  |   |   |  |-- 国际化i18n.md
|--  |--  |   |   |  |-- 类型处理.md
|--  |--  |   |   |  |-- 全局路由搜索.md
|--  |--  |   |   |  |-- 驼峰命名处理.md
|--  |--  |   |   |  |-- 自定义指令.md
|--  |--  |   |   |  |-- cookie.md
|--  |--  |   |   |  |-- mock.md
|--  |--  |   |   |  |-- request.md
|--  |--  |   |   |--visual
|--  |--  |   |   |  |-- 折线图.md
|--  |--  |   |   |  |-- 柱状.md
|--  |--  |   |-- README.md
|--  |--  |-- README.md
|--  |-- .gitignore
|--  |-- README.md
|--  |-- package.json
|--  |-- yarn.lock
```

## 功能列表
# Blog

## 安装、启动和打包
在使用前请先安装VuePress
  - 安装
  ```sh
  $ yarn 
  ```

  - 启动
  ```sh
  $ yarn serve
  ```

  - 打包
  ```sh
  $ yarn docs:build
  ```