---
title: 一起实现一个VSCode插件
date: '2023-04-07 17:31:29'
sidebar: 'auto'
categories:
 - Other
tags:
 - VSCode
 - VSCode Plugin
---


本文带你一起实现一个`VSCode`插件
<!-- more -->


### [仓库地址](https://github.com/GGupzHH/smoothing)

### smoothing-generator
  - 项目介绍
    搭配Smoothing-cli实现的VSCode插件，可以直接生成完整的模块

  - 项目目录

### 开始
  - 项目创建
    - 运行
      ```sh
        npm install -g yo smoothing-generator
      ```
    - 输出，这里选择的是TypeScript
      ```sh
      yo code

      # ? What type of extension do you want to create? New Extension (TypeScript)
      # ? What's the name of your extension? copyFileOrDirName
      ### Press <Enter> to choose default for all options below ###

      # ? What's the identifier of your extension? helloworld
      # ? What's the description of your extension? LEAVE BLANK
      # ? Enable stricter TypeScript checking in 'tsconfig.json'? Yes
      # ? Setup linting using 'tslint'? Yes
      # ? Initialize a git repository? Yes
      # ? Which package manager to use? npm

      ```

  - 配置
    - 这里主要是`package.json`的配置
    - main 定义了整个插件的主入口，，可以新建 src 文件夹，将 extension.ts 已到 src 文件夹下面。
    - `contributes.commands`注册了名为`smoothing.generator-module`的命令，并在`src/extension.ts`实现。
    - 最后在`activationEvents`中加入要注册的插件名`onCommand:smoothing.generator-module`


    ```json
      {
        "name": "smoothing-generator",
        "displayName": "smoothing-generator",
        "description": "An extension to accelerate the process of developing applications with Vue, aimed at everyone using the Vue-Template.",
        "version": "0.0.3",
        "engines": {
          "vscode": "^1.74.0"
        },
        "categories": [
          "Snippets",
          "Programming Languages",
          "Other"
        ],
        "activationEvents": [
          "onCommand:smoothing.generator-module"
        ],
        "keywords": [
          "vue-modules"
        ],
        "repository": {
          "type": "git",
          "url": "https://github.com/GGupzHH/smoothing-generator.git"
        },
        "author": "Smoothness",
        "publisher": "smoothness",
        "bugs": {
          "url": "https://github.com/GGupzHH/smoothing-generator/issues"
        },
        "main": "./out/extension.js",
        "contributes": {
          "snippets": [
            {
              "language": "vue",
              "path": "./snippets/vue.snippets.json"
            },
            {
              "language": "typescript",
              "path": "./snippets/pinia.snippets.json"
            },
            {
              "language": "typescript",
              "path": "./snippets/vue-ts.snippets.json"
            },
            {
              "language": "html",
              "path": "./snippets/vue-pug.snippets.json"
            }
          ],
          "commands": [
            {
              "command": "smoothing.generator-module",
              "title": "Smo: Create Module Template"
            }
          ],
          "menus": {
            "explorer/context": [
              {
                "command": "smoothing.generator-module",
                "group": "blocGroup@1",
                "when": "explorerResourceIsFolder"
              }
            ]
          }
        },
        "scripts": {
          "vscode:prepublish": "yarn run compile",
          "compile": "tsc -p ./",
          "watch": "tsc -watch -p ./",
          "pretest": "yarn run compile && yarn run lint",
          "lint": "eslint src --ext ts",
          "test": "node ./out/test/runTest.js"
        },
        "devDependencies": {
          "@types/glob": "^8.0.0",
          "@types/mocha": "^10.0.1",
          "@types/node": "16.x",
          "@types/vscode": "^1.74.0",
          "@typescript-eslint/eslint-plugin": "^5.45.0",
          "@typescript-eslint/parser": "^5.45.0",
          "@vscode/test-electron": "^2.2.0",
          "eslint": "^8.28.0",
          "glob": "^8.0.3",
          "mocha": "^10.1.0",
          "typescript": "^4.9.3"
        },
        "dependencies": {
          "@types/lodash": "^4.14.191",
          "@types/mkdirp": "^0.5.2",
          "change-case": "^3.1.0",
          "lodash": "^4.17.19",
          "mkdirp": "^0.5.1"
        }
      }
    ```

  - 实现
    - extension.ts
      ```ts
        // The module 'vscode' contains the VS Code extensibility API
        // Import the module and reference it with the alias vscode in your code below
        import * as vscode from 'vscode';

        import { commands } from './commands';

        // This method is called when your extension is activated
        // Your extension is activated the very first time the command is executed
        export function activate(context: vscode.ExtensionContext) {
          
          // 注册指令
          context.subscriptions.push(
            vscode.commands.registerCommand(
              'smoothing.generator-module',
              commands.newGetxGetBuilderPage
            )
          );
        }

        // This method is called when your extension is deactivated
        export function deactivate() {}
      ```

  - 模板
    - generator.module.template.ts
      ```ts
        import * as changeCase from "change-case";
        import { existsSync, lstatSync, writeFile } from "fs";

        /**
        * pascalCaseName: The first letter is uppercase module name
        * snakeCaseName: The module name
        * targetPath: The module path
        */ 

        // api
        function apiTemplate(pageName: string, targetDirectory: string) {
          const pascalCaseName = changeCase.pascalCase(pageName.toLowerCase());
          const snakeCaseName = changeCase.snakeCase(pageName.toLowerCase());
          const targetPath = `${targetDirectory}/${pascalCaseName}/api/api.ts`;
          const template = `
            import request from '@/utils/request'
            const ${snakeCaseName}Api = {
              getDemoTestListID(id: string) {
                return request.get(\`/api/\${ id }/list\`)
              }
            }

            export default ${snakeCaseName}Api
          `;

          return new Promise(async (resolve, reject) => {
            writeFile(targetPath, template, "utf8", (error) => {
              if (error) {
                reject(error);
                return;
              }
              resolve;
            });
          });
        }

        // page
        function pageTemplate(pageName: string, targetDirectory: string) {
          const pascalCaseName = changeCase.pascalCase(pageName.toLowerCase());
          const snakeCaseName = changeCase.snakeCase(pageName.toLowerCase());
          const targetPath = `${targetDirectory}/${pascalCaseName}/pages/${snakeCaseName}.vue`;
          const template = `
            <template>

            </template>

            <script lang="ts">
            import {
              defineComponent,
              getCurrentInstance
            } from 'vue'
            export default defineComponent({
              name: '${pascalCaseName}'
            })
            </script>

            <script setup lang="ts">
            const proxy = getCurrentInstance()?.proxy
            </script>

            <style scoped lang="scss">

            </style>
          `;

          return new Promise(async (resolve, reject) => {
            writeFile(targetPath, template, "utf8", (error) => {
              if (error) {
                reject(error);
                return;
              }
              resolve;
            });
          });
        }

        // store
        function storeTemplate(pageName: string, targetDirectory: string) {
          const pascalCaseName = changeCase.pascalCase(pageName.toLowerCase());
          const snakeCaseName = changeCase.snakeCase(pageName.toLowerCase());
          const targetPath = `${targetDirectory}/${pascalCaseName}/store/index.ts`;
          const template = `
            import { defineStore } from 'pinia'
            import ${snakeCaseName}Api from 'modules/${pascalCaseName}/api'

            export const use${pascalCaseName} = defineStore('${pascalCaseName}', {
              state: () => {
                return {
                  id: 'absdb'
                }
              },
              actions: {
                async getDemoTestList() {
                  const res = await ${snakeCaseName}Api.getDemoTestListID(this.id)
                  return this.filterResponse(res)
                }
              }
            })
          `;

          return new Promise(async (resolve, reject) => {
            writeFile(targetPath, template, "utf8", (error) => {
              if (error) {
                reject(error);
                return;
              }
              resolve;
            });
          });
        }

        export default {
          apiTemplate,
          pageTemplate,
          storeTemplate
        };
      ```

  - snippets
    - pinia.snippets.json
      ```json
        {
          "smoothing generator Pinia Template": {
            "prefix": "smo-pinia-init",
            "body": [
              "import { defineStore } from 'pinia'",
              "import $1AllApi from '@/modules/$1/api/index'",
              "export const use$1 = defineStore('$1', {",
              "\tstate: () => {",
              "\t\treturn {",
              "\t\t\t",
              "\t\t}",
              "\t},",
              "\tactions: {",
              "\t\tasync getProjectList(params: any) {",
              "\t\t\tconst res = await $1AllApi.getProjectList(params)",
              "\t\t\treturn this.filterResponse(res)",
              "\t\t},",
              "\t}",
              "})",
              "",
              "export type Iuse$1 = ReturnType<typeof use$1>"
            ]
          },

          "smoothing generator Pinia Actions": {
            "prefix": "smo-pinia-actions",
            "body": [
              "async $1($2: $3) {",
              "\tconst result = await $4($2)",
              "\treturn this.filterResponse(result)",
              "},"
            ]
          }
        }
      ```

    - vue-pug.snippets.json
      ```json
        {
          "Vue v-for": {
            "prefix": "vfor",
            "body": [
              "<${1:div} v-for=\"${2:item} in ${2:item}s\" :key=\"${2:item}.id\">",
              "\t{{ ${2:item} }}",
              "</${1:div}>"
            ],
            "description": "vfor statement"
          }
        }
      ```

    - vue-ts.snippets.json
      ```json
        {
          "smoothing generator handleFunction": {
            "prefix": "smo-handleFunction",
            "body": [
              "const handle$1 = () => {",
              "}"
            ],
            "description": "Create Handle Function"
          },

          "smoothing generator init Vue-Router": {
            "prefix": "smo-init-router",
            "body": [
              "const router = useRouter()"
            ],
            "description": "Create Vue Router"
          },

          "smoothing generator init Vue-Route": {
            "prefix": "smo-init-route",
            "body": [
              "const route = useRoute()"
            ],
            "description": "Create Vue Route"
          },

          "smoothing generator init Pinia-store": {
            "prefix": "smo-init-store",
            "body": [
              "const storeUse$1 = use$1()"
            ],
            "description": "Create Pinia Store"
          }
        }
      ```

    - vue.snippets.json
      ```json
        {
          "smoothing generator Vue2 Template": {
            "prefix": "smo-vue-2",
            "body": [
              "<template>",
              "\t<div>\n",
              "\t</div>",
              "</template>\n",
              "<script>",
              "export default {",
              "\tname: '$1',",
              "\tdata() {",
              "\t\treturn {\n",
              "\t\t};",
              "\t},",
              "\tcreated() {\n",
              "\t},",
              "\tmounted() {\n",
              "\t},",
              "\tmethods: {\n",
              "\t}",
              "};",
              "</script>\n",
              "<style scoped lang=\"${1:scss}\">\n",
              "</style>\n"
            ],
            "description": "Create vue2 template"
          },

          "smoothing generator Vue3 Template": {
            "prefix": "smo-vue-3",
            "body": [
              "<template>",
              "</template>",

              "<script lang=\"ts\">",
              "import {",
              "\tdefineComponent,",
              "} from 'vue'",

              "export default defineComponent({",
              "\tname: '$1',",
              "\tcomponents: {},",
              "\tprops: {},",
              "\tsetup () {",
              "\t\treturn {",
              "\t\t}",
              "\t}",
              "})",
              "</script>",

              "<style lang=\"scss\" scoped>",
              "</style>"
            ],
            "description": "Create vue3 setup template"
          },

          "smoothing generator Vue3 Template setup syntactic sugar": {
            "prefix": "smo-vue-3-s-t",
            "body": [
              "<template>",
              "",
              "</template>",
              "",
              "<script lang=\"ts\">",
              "import {",
              "\tdefineComponent,",
              "\tgetCurrentInstance",
              "} from 'vue'",
              "export default defineComponent({",
              "\tname: '$1'",
              "})",
              "</script>",
              "",
              "<script setup lang=\"ts\">",
              "const proxy = getCurrentInstance()?.proxy",
              "</script>",
              "",
              "<style scoped lang=\"scss\">",
              "",
              "</style>"
            ],
            "description": "Create vue3 setup sugar template"
          }
        }
      ```

  - 打包
    - 安装`vsce`
      ```sh
        npm install vsce -g
      ```

    - 打包
      ```sh
        vsce package
      ```
  - 发布
    - [官网](https://marketplace.visualstudio.com/manage/publishers)

### 使用
  - 安装
    - 直接搜索`smoothing-generator`安装即可
  - 使用
    - 在目标文件夹右键
    - 找到选项`Smo: Create Module Template`
    - 输入模块名称即可

