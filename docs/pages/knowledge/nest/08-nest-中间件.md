---
title: Nest-Middleware 中间件
date: '2022-10-30 14:45:08'
sidebar: 'auto'
categories:
 - Nest
tags:
 - Nest
 - Nest-Middleware
 - Nest-跨域
---

本文介绍`Nest-Middleware中间件`，介绍了使用`cli`创建一个中间件和全局中间件的方法，并且配置跨域。
<!-- more -->


### 依赖注入的中间件
- 使用nest-cli创建一个logger的中间件
  - nest g mi logger
  ```ts
  import { Injectable, NestMiddleware } from '@nestjs/common';
  import { Request, Response } from 'express';

  @Injectable()
  export class LoggerMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: () => void) {
      // req 请求
      // res 响应
      // next 通过
      // res 和 next 不可以同时用
      res.send('当前接口被拦截了');
    }
  }
  ```

- 使用
  - 指定路由拦截
    ```ts user.module.ts
    import {
      MiddlewareConsumer,
      Module,
      NestModule,
      RequestMethod,
    } from '@nestjs/common';
    import { UserController } from './user.controller';
    import { UserService } from './user.service';
    import { LoggerMiddleware } from 'src/middleware/logger.middleware';

    @Module({
      imports: [],
      controllers: [UserController],
      providers: [UserService],
    })
    export class UserModule implements NestModule {
      // 依赖注入的中间件
      // 定义拦截器
      configure(consumer: MiddlewareConsumer): void {
        // 指定拦截的路由
        consumer.apply(LoggerMiddleware).forRoutes('auto');
      }
    }
    ```
  - 指定请求类型拦截
    ```ts user.module.ts
    import {
      MiddlewareConsumer,
      Module,
      NestModule,
      RequestMethod,
    } from '@nestjs/common';
    import { UserController } from './user.controller';
    import { UserService } from './user.service';
    import { LoggerMiddleware } from 'src/middleware/logger.middleware';

    @Module({
      imports: [],
      controllers: [UserController],
      providers: [UserService],
    })
    export class UserModule implements NestModule {
      // 依赖注入的中间件
      // 定义拦截器
      configure(consumer: MiddlewareConsumer): void {
        // 可以选择拦截的请求类型
        consumer.apply(LoggerMiddleware).forRoutes({
          path: 'auto',
          method: RequestMethod.GET,
        });
      }
    }
    ```
  - 拦截当前控制器所有接口
    ```ts user.module.ts
    import {
      MiddlewareConsumer,
      Module,
      NestModule,
      RequestMethod,
    } from '@nestjs/common';
    import { UserController } from './user.controller';
    import { UserService } from './user.service';
    import { LoggerMiddleware } from 'src/middleware/logger.middleware';

    @Module({
      imports: [],
      controllers: [UserController],
      providers: [UserService],
    })
    export class UserModule implements NestModule {
      // 依赖注入的中间件
      // 定义拦截器
      configure(consumer: MiddlewareConsumer): void {
        // 拦截当前控制器所有接口
        consumer.apply(LoggerMiddleware).forRoutes(UserController);
      }
    }
    ```

### 全局中间件
::: warning 全局中间件
全局中间件 必须是个函数，不可以使用类,一般作为全局白名单判断和token校验。
:::
- 声明
  ```ts
  function ModdlewareAll(req: Request, res: Response, next: () => void) {
    res.send('所有接口被拦截了 ');
    // next();
  }
  ```
- 挂载必须在main.ts中挂载
  ```ts
  import { NestFactory } from '@nestjs/core';
  import { AppModule } from './modules/app.module';
  import { gerLocalhost } from './utils';
  import { Request, Response } from 'express';

  // 全局中间件 必须是个函数，不可以使用类
  // 可以用作全局白名单判断 或者 token 判断
  function ModdlewareAll(req: Request, res: Response, next: () => void) {
    res.send('所有接口被拦截了 ');
    // next();
  }

  async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.use(ModdlewareAll);

    await app.listen(11000);

    const localhost = gerLocalhost();
    console.log('\n', '🚀   Nest Starter Server\n');
    console.log(`> Local: http://localhost:${11000}`);
    console.log(`> Network: http://${localhost}:${11000}\n`);
  }

  bootstrap();
  ```

### 配置跨域
- 安装配置跨域的包
  ```sh
  yarn add cors
  yarn add @types/cors
  ```
- 配置跨域
  ```ts
  import { NestFactory } from '@nestjs/core';
  import { AppModule } from './modules/app.module';
  import { gerLocalhost } from './utils';
  import * as cors from 'cors';

  async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.use(cors());

    await app.listen(11000);

    const localhost = gerLocalhost();
    console.log('\n', '🚀   Nest Starter Server\n');
    console.log(`> Local: http://localhost:${11000}`);
    console.log(`> Network: http://${localhost}:${11000}\n`);
  }

  bootstrap();
  ```
