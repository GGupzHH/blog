---
title: 一起实现一个CLI工具
date: '2022-12-26 22:48:04'
sidebar: 'auto'
categories:
 - Other
tags:
 - cli
---


本文带你一起实现一个`cli`工具
<!-- more -->

### [npm地址](https://www.npmjs.com/package/smoothing)
### [仓库地址](https://github.com/GGupzHH/smoothing)

### cli: Smoothing
  - 项目介绍
    - 基于vue模板项目开发的脚手架工具，目前只支持vue模板。
  
  - cli是什么
    - 为减少初始化项目的重复工作，运行一些预设好的命令去构建前端项目，并且可以加入一些自定义配置。


### 开始
  - 项目创建
    - 安装
      ```sh
        npm install -g yo
      ```

    - [yeoman](http://yeoman.io): 是一个前端脚手架工具，可以帮助开发者快速创建和搭建 Web 应用程序的基础结构和模板。它提供了一些常用的项目模板、自动化任务和代码生成器等功能，使得开发者可以更加高效地完成项目开发，同时减少重复性工作和人为出错的风险。 `Yeoman` 基于 Node.js 平台进行开发，并且允许用户使用自己的生成器或从社区中选择合适的生成器来创建和管理项目。通过命令行界面，开发者可以轻松地创建新项目、添加或删除依赖、打包和发布应用等操作，而无需手动维护和配置复杂的项目结构。 总之，`Yeoman` 简化了前端项目的开发流程，提高了开发效率和质量，被广泛应用于各种 Web 开发场景中。
      ```sh
        # 选择node模板
        yo
      ```

  - codeing
    - 配置脚本启动命令
      ```json
        {
          "bin": {
            "smoothing": "./bin/smoothing.js",
            "smo": "./bin/smoothing.js"
          },
        }
      ```

    - 开始 `smoothing.js`
      ```js
        /**
         * 注册一个help的命令
        * 当在终端输入 smoothing --help 或者没有跟参数的话
        * 会输出提示------------------
        */
        function initProgram () {
          // program
          //   .command('create <app-name>')
          //   .description('create a new project')

          program
            .version(pkg.version)
            .parse(process.argv);

          if (program.args.length < 1) return program.help();
        }

        function start() {

          initProgram()
          /**
           * 获取命令行参数
          */
          const templateName = program.args[0] // 命令行第一个参数 文件夹名字 template
          /**
           * 获取项目和模版的完整路径
          */
          const targetPath = path.join(process.cwd(), templateName) // 模版的路径  cwd是当前运行的脚本是在哪个路径下运行 tem

          // 判断是否存在相同文件夹
          if (exists.existsSync(targetPath)) {
            console.log(chalk.red('  # The same project name already exists in the current directory.'))
          } else {
            exists.mkdirSync(targetPath)
            run(templateName, targetPath)
          }
        }
      ```
      
    - download template `smoothing.js`
      ``` js
        /**
         * run函数则是用来调用generate来构建项目
        */
        function run(templateName, targetPath) {
          const spinner = ora({
            // 下载的时候给到更多的提示 作者信息等
            text: `${chalk.green('downloading template')}`,
          })
          spinner.start()
          // 下载模板
          download(`GGupzHH/Vue3-Vite3-TS-Template#y-cli-template`, targetPath, {}, err => {
            spinner.stop()
            if (err) return
            generate(templateName, targetPath, (err) => { // 构建完成的回调函数
              console.log(`🎉  Successfully created project ${templateName}.`)
              console.log(`👉  Get started with the following commands:`)
              console.log(`  $ cd ./${templateName}`)
              // console.log(`  $ yarn serve`)
              
              if (err) console.log(err) // 如果构建失败就输出失败原因
            })
            // console.log(chalk.green(`模版下载完成 ${ targetPath }`))
          })
        }
      ```

    - 收集用户信息
      - `meta.js`
      ```js
        const path = require('path')
        const { installDependencies } = require('./index.js')

        /***
        * 要交互的问题都放在 prompts中 
        * when是当什么情况下 用来判断是否 显示这个问题
        * type是提问的类型
        * message就是要显示的问题
        */
        module.exports = {
          prompts: {
            name: {
              when: 'ismeta',
              type: 'string',
              message: '项目名称:'
            },
            description: {
              when: 'ismeta',
              type: 'string',
              message: '项目介绍:'
            },
            repository: {
              when: 'ismeta',
              type: 'string',
              message: '仓库地址:'
            },
          }
        }
      ```
      - `ask.js`
      ```js
      const async = require('async')
      const inquirer = require('inquirer')

      const promptMapping = {
        string: 'input',
        boolean: 'confirm'
      }

      module.exports = function ask(prompts, metadate, done) {
        async.eachSeries(Object.keys(prompts), (key, next) => {
          inquirer.prompt([{
            type: promptMapping[prompts[key].type] || prompts[key].type,
            name: key,
            message: prompts[key].message,
            choices: prompts[key].choices || []
          }]).then(answers => {
            getConfigs(metadate, answers)
            console.log(metadate)
            console.log(answers)
            if (typeof answers[key] === 'string') {
              metadate[key] = answers[key].replace(/"/g, '\\"')
            } else {
              metadate[key] = answers[key]
            }
            next()
          }).catch(done)
        }, done)
      }

      function getConfigs(metadate, answers) {
        const key = Object.keys(answers)[0]
        const prefixIndex = key.indexOf('with')
        const hasIndex = key.indexOf('with_')
        if (prefixIndex === 0) {
          if (hasIndex === 0) {
            if (answers[key]) {
              metadate.configs.push(`with${ answers[key] }`)
            }
          } else {
            if (answers[key]) {
              metadate.configs.push(key)
            }
          }
        }
      }
      ```

    - 处理静态文件
      - Metalsmith 是一个基于 Node.js 的静态文件处理器
        ```js
          module.exports = function generate(name, tem, done) {
            const opts = meta
            const metalsmith = Metalsmith(tem)
            const data = Object.assign(metalsmith.metadata(), {
              destDirName: name,
              configs: []
            })

            metalsmith
              .use(askQuestions(opts.prompts))
              .use(renderTemplateFiles())

            metalsmith
              // 生成目标文件时候，是否清除原来的文件，默认true
              .clean(false)
              // 模板路径
              .source('.')
              // 目标路径
              .destination(path.join(process.cwd(), name))
              .build((err, files) => {
                done(err)
              })
          }
        ```

    - 模板关键字替换
      ```js
      function renderTemplateFiles() {
        return (files, ms, done) => {
          const keys = Object.keys(files).filter(fileName => fileName.search(/^public|^src/gi) < 0)
          const metadate = ms.metadata()
          keys.forEach(key => {
            const str = files[key].contents.toString()
            // 处理文本，将文本处理成模板语言，等待后续将用户信息填入
            let t = Handlebars.compile(str)
            // 这一步就是讲用户输入的信息匹配文件内容并填充
            let html = t(metadate)
            // 将填充好的文本塞入
            files[key].contents = new Buffer.from(html)
          })
          done()
        }
      }
      ```

  - 整体实现思路
    1. 使用`yeoman`生成模板，设置脚本入口文件；
    2. 接收用户输入的模板名称，判断当前目录是否有同名文件；
    3. 下载远程仓库模板文件；
    4. 收集用户输入信息，自定义模板信息；
    5. 替换下载好的模板内容生成文件
  
  - 发包
    - 账号注册
      - https://www.npmjs.com/signup
    - 切换npm源地址
      ```sh
      npm config get registry // 先康康你的是否是npm官方的源，不是请切回
      npm config set registry https://registry.npmjs.org
      ```

    - 第一次发布用`npm adduser`，或者`npm login`
    - 查看当前登录账号
      ```sh
      npm whoami // 可以查看当前登录的npm用户
      ```

    - 发布
      ```sh
      npm publish
      ```

    - 更新
      - 更新之后注意版本号一起迭代。
        - 手动修改
        - 指令修改
          ```sh
          npm version patch  //补丁版本,最后一位数加1 
          npm version minor  //增加了新功能 中间的数字加1
          npm version major //大改动,不向下兼容 第一位数字加1
          ```
    - 删除
      ```sh
      npm unpublish [packagename]--force
      ```

### 使用
  - 安装
    ```sh
    $ npm install -g smoothing
    ```

  - 使用
    ```sh
    $ smoothing templateName

    $ smo templateName
    ```
### 注意
  - 依赖都安装到`dependencies`，不能安装到`devDependencies`，不然发包之后devDependencies中的依赖是不会自动安装的。
  - 然后脚手架的模块导入规范必须是commonjs，而且都是js直接编写，期间由于部分包升级换代不支持commonjs规范，就得从原来的版本中去找。
  - npm发包：403-重名/登录地址不对

### 一些想法
  - 客制化更多模板，模板更细粒度控制
  - 模板初始化之后安装依赖
