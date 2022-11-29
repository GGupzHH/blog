---
title: Nest-Module 模块
date: '2022-10-30 14:45:08'
sidebar: 'auto'
categories:
 - Nest
tags:
 - Nest
---


本文介绍`Nest-Module`，介绍了`模块Service互用`和`全局模块使用`、`全局动态模块`的定义和使用。
<!-- more -->


### 模块Service互用
- 场景：有两个模块`Bank`模块和`Module1`模块，要在`Module1`模块中使用`Bank`模块的`Service`方法
  - 首先需要在`Bank`模块中将`Service`导出
    ```ts
    import { Module } from '@nestjs/common';
    import { BankController } from './bank.controller';
    import { BankService } from './bank.service';

    @Module({
      imports: [],
      controllers: [BankController],
      providers: [BankService],
      exports: [BankService],
    })
    export class BankModule {}
    ```
  - 然后将导出的`BankService`导入到`Module1`模块中
    ```ts
    import { Module } from '@nestjs/common';
    import { Module1Service } from './module1.service';
    import { Module1Controller } from './module1.controller';
    import { BankService } from '../Bank/bank.service';

    @Module({
      controllers: [Module1Controller],
      providers: [
        Module1Service,
        {
          provide: 'BankService',
          useClass: BankService,
        },
      ],
    })
    export class Module1Module {}
    ```
  - 最后就可以在`Module1`中使用
    ```ts 
    import { Controller, Get, Inject } from '@nestjs/common';
    import { BankService } from '../Bank/bank.service';

    @Controller('module1')
    export class Module1Controller {
      constructor(
        @Inject('BankService') private readonly bankService: BankService,
      ) {}

      @Get()
      findAll() {
        return this.bankService.findAll();
      }
    }

    ```
    

### 全局模块使用
:::tip 全局模块装饰器
@Global 是全局模块装饰器。
:::

- 全局模块创建
  ```ts
  import { DynamicModule, Global, Module } from '@nestjs/common';

  @Global()
  @Module({})
  export class GlobalModuleModule {
    static findPath(): DynamicModule {
      return {
        module: GlobalModuleModule,
        providers: [
          {
            provide: 'GlobalModule',
            useValue: {
              base: '/111111111111',
            },
          },
        ],
        exports: [
          {
            provide: 'GlobalModule',
            useValue: {
              base: '/111111111111',
            },
          },
        ],
      };
    }
  }
  ```

- 全局模块挂载
  ```ts
  import { Module } from '@nestjs/common';
  import { GlobalModuleModule } from './global-module/global-module.module';

  @Module({
    imports: [
      GlobalModuleModule.findPath(),
    ],
  })
  export class AppModule {}
  ```
- 全局模块使用
  ```ts
  import { Controller, Get, Inject } from '@nestjs/common';

  @Controller('module1')
  export class Module1Controller {
    constructor(
      @Inject('GlobalModule') private readonly GlobalModule: any,
    ) {}

    @Get()
    findAll() {
      return this.GlobalModule;
    }
  }
  ```
  

### 全局动态模块
:::tip 全局动态模块
全局动态模块就是全局模块的有参数版本，参数在挂载的传入。
:::

- 全局动态模块创建
  ```ts
  import { DynamicModule, Global, Module } from '@nestjs/common';

  interface IOptions {
    path: string;
  }

  @Global()
  @Module({})
  export class GlobalModuleModule {
    static findPath(options: IOptions): DynamicModule {
      return {
        module: GlobalModuleModule,
        providers: [
          {
            provide: 'GlobalModule',
            useValue: {
              base: '/111111111111' + options.path,
            },
          },
        ],
        exports: [
          {
            provide: 'GlobalModule',
            useValue: {
              base: '/111111111111' + options.path,
            },
          },
        ],
      };
    }
  }
  ```

- 全局动态模块挂载
  ```ts
  import { Module } from '@nestjs/common';
  import { GlobalModuleModule } from './global-module/global-module.module';

  @Module({
    imports: [
      GlobalModuleModule.findPath({
        path: '动态全局模块',
      }),
    ],
  })
  export class AppModule {}
  ```
- 全局动态模块使用
  ```ts
  import { Controller, Get, Inject } from '@nestjs/common';

  @Controller('module1')
  export class Module1Controller {
    constructor(
      @Inject('GlobalModule') private readonly GlobalModule: any,
    ) {}

    @Get()
    findAll() {
      return this.GlobalModule;
    }
  }
  ```
