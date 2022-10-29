# Nest-Providers 提供者

### 基本用法
  - 很多基本的类都能被看做`provider`，都可以通过constructor注入依赖关系。
  - Provider只是一个用@Injectable()装饰器注释的类。

### service 自定义名称
::: tip
  自定义名称可以通过`useClass`更改注入的值，不过`controller`中需要使用`@Inject`装饰器声明
:::
  - demo.module.ts
    ```ts
      import { Module } from '@nestjs/common';
      import { DemoService } from './demo.service';
      import { DemoController } from './demo.controller';

      @Module({
        controllers: [DemoController],
        providers: [
          {
            // 自定义名称注入
            provide: 'Self',
            useClass: DemoService,
          },
        ],
      })
      export class DemoModule {}
    ```
  - demo.controller.ts
    ```ts
      import { Controller, Post, Body, Headers, Inject, } from '@nestjs/common';
      import { DemoService } from './demo.service';

      @Controller({
        path: 'demo',
      })
      export class DemoController {
        // 自定义名称注册，通过@Inject
        constructor(@Inject('Self') private readonly demoService: DemoService) {}

        @Post()
        create(@Headers() headers, @Body('id') createDemoDto: CreateDemoDto) {
          return this.demoService.create(createDemoDto);
        }
      }

    ```

### service 自定义注入值
::: tip
  自定义注入值可以通过`useValue`传入一些值
:::
  - demo.module.ts
    ```ts
      import { Module } from '@nestjs/common';
      import { DemoController } from './demo.controller';

      @Module({
        controllers: [DemoController],
        providers: [
          // 自定义注入值
          {
            provide: 'DemoValue',
            useValue: 1,
          },
        ],
      })
      export class DemoModule {}
    ```
    
  - demo.controller.ts
    ```ts
      import { Controller, Get, Request, Response, Session, Inject, } from '@nestjs/common';
      import { DemoService } from './demo.service';

      @Controller({
        path: 'demo',
      })
      export class DemoController {
        constructor(
          // 挂载使用
          @Inject('DemoValue') private readonly DemoValue: number,
        ) {}

        @Get()
        // findAll(@Req() req, @Res() res) {
        findAll(@Request() req, @Response() res, @Session() session) {
          // console.log(req, res, session);
          console.log(this.DemoValue); // 1
          return this.DemoValue;
        }
      }

    ```

### service 工厂模式
::: tip
  工厂模式中可以在`useFactory`写一些自己的逻辑，返回一些不同的类或者函数
:::
  - demo.module.ts
    ```ts
      import { Module } from '@nestjs/common';
      import { DemoService } from './demo.service';
      import { DemoService111 } from './demo.service-copy';
      import { DemoController } from './demo.controller';

      @Module({
        controllers: [DemoController],
        providers: [
          // 注入服务
          DemoService111,
          {
            provide: 'Self',
            useClass: DemoService,
          },
          {
            provide: 'DemoValue',
            useValue: 1,
          },
          {
            provide: 'UserService111',
            // 工厂模式下也可以做服务类的关联关系，但是前提是此服务已经注入
            inject: [DemoService111],
            useFactory(DemoService111: DemoService111) {
              // return UserService.getMetabase(query);
              
              console.log(DemoService111.create(111123));
              return 123;
            },
          },
        ],
      })
      export class DemoModule {}
    ```

  - demo.controller.ts
    ```ts
      import { Controller, Get, Request, Response, Session, Inject, } from '@nestjs/common';
      import { DemoService } from './demo.service';
      import { CreateDemoDto } from './dto/create-demo.dto';
      import { UpdateDemoDto } from './dto/update-demo.dto';

      @Controller({
        path: 'demo',
      })
      export class DemoController {
        constructor(
          // 声明
          @Inject('UserService111') private readonly UserService: number,
        ) {}

        @Get()
        // findAll(@Req() req, @Res() res) {
        findAll(@Request() req, @Response() res, @Session() session) {
          // console.log(req, res, session);
          console.log(this.UserService);
          return this.demoService.findAll();
        }
      }

    ```

### service 异步模式
::: tip
  异步工厂模式就是异步的返回`Promise`
:::
