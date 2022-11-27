---
title: vue-codemirror
date: '2022-11-27 17:56:48'
sidebar: 'auto'
categories:
 - Vue-插件
tags:
 - Vue组件
 - 在线编辑-IDE
---


本文介绍`Vue`组件之`vue-codemirror`，该组件提供一个在线IDE编辑器，并且可以高亮语法和语法提示。
<!-- more -->

:::tip
npm地址：https://www.npmjs.com/package/vue-codemirror
:::

### 安装`codemirror`
  ```sh
  $ yarn add codemirror vue-codemirror
  ```

### 安装语言包，根据实际需求，需要安装更多的包，这里我们拿`JavaScript`举例
  ```sh
  $ yarn add @codemirror/lang-javascript
  ```

### 安装代码主题
  ```sh
  $ yarn add @codemirror/theme-one-dark
  ```

### Vue3示例
  ```vue
  <template>
    <codemirror
      v-model="code"
      placeholder="Code goes here..."
      :style="{ height: '400px' }"
      :autofocus="true"
      :indent-with-tab="true"
      :tab-size="2"
      :extensions="extensions"
      @ready="handleReady"
      @change="log('change', $event)"
      @focus="log('focus', $event)"
      @blur="log('blur', $event)"
    />
  </template>

  <script>
  import { defineComponent, ref, shallowRef } from 'vue'
  import { Codemirror } from 'vue-codemirror'
  import { javascript } from '@codemirror/lang-javascript'
  import { oneDark } from '@codemirror/theme-one-dark'

  export default defineComponent({
    components: {
      Codemirror
    },
    setup() {
      const code = ref(`console.log('Hello, world!')`)
      const extensions = [javascript(), oneDark]

      // Codemirror EditorView instance ref
      const view = shallowRef()
      const handleReady = (payload) => {
        view.value = payload.view
      }

      // Status is available at all times via Codemirror EditorView
      const getCodemirrorStates = () => {
        const state = view.value.state
        const ranges = state.selection.ranges
        const selected = ranges.reduce((r, range) => r + range.to - range.from, 0)
        const cursor = ranges[0].anchor
        const length = state.doc.length
        const lines = state.doc.lines
        // more state info ...
        // return ...
      }

      return {
        code,
        extensions,
        handleReady,
        log: console.log
      }
    }
  })
  </script>
  ```
