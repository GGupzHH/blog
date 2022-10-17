# Nest [RESTful风格](https://ggupzhh.github.io/blog/pages/document/api/01-RESTful%E9%A3%8E%E6%A0%BC.html)

:::tip 
`Version` 最好提取成环境变量，这样不管是接口版本控制还是swagger版本控制就都可以一起控制了。
:::

### 版本控制
  - 版本控制位置
    - VersioningType
      - URI
      - HEADER
      - MEDIA_TYPE
      - CUSTOM
       
    - | 控制位置 | Annotation |
      | :------------ | :---------: |
      | URI Versioning | 版本将在请求的`URI`中传递（默认）|
      | Header Versioning | 自定义`请求头`设置版本 |
      | Media Type Versioning | 请求的`Accept`标头指定版本 |
      | Custom Versioning | 自定义 |

  - 设置版本控制和控制位置
    ```ts
      import { NestFactory } from '@nestjs/core';
      import { AppModule } from './modules/app.module';
      import { VersioningType } from '@nestjs/common';

      async function bootstrap() {
        const app = await NestFactory.create(AppModule);
        app.enableVersioning({
          type: VersioningType.URI,
        });
        await app.listen(11000);
      }

      bootstrap();
    ```
  - 然后在模块demo的`controller`配置版本
    ```ts
      import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
      import { DemoService } from './demo.service';
      import { CreateDemoDto } from './dto/create-demo.dto';
      import { UpdateDemoDto } from './dto/update-demo.dto';

      @Controller({
        path: 'demo',
        version: '1',
      })
      export class DemoController {
        constructor(private readonly demoService: DemoService) {}

        @Post()
        create(@Body() createDemoDto: CreateDemoDto) {
          return this.demoService.create(createDemoDto);
        }

        @Get()
        findAll() {
          return this.demoService.findAll();
        }

        @Get(':id')
        findOne(@Param('id') id: string) {
          return this.demoService.findOne(+id);
        }

        @Patch(':id')
        update(@Param('id') id: string, @Body() updateDemoDto: UpdateDemoDto) {
          return this.demoService.update(+id, updateDemoDto);
        }

        @Delete(':id')
        remove(@Param('id') id: string) {
          return this.demoService.remove(+id);
        }
      }

    ```
  - 配置之后的路径就是，只有请求方式的不同去区别不同的接口
    - /v1/demo
    - /v1/demo/{id}

### 单个接口版本控制
  - 单个接口的控制
    ```ts
      import {
        Controller,
        Post,
        Body,
        Version,
      } from '@nestjs/common';
      import { DemoService } from './demo.service';
      import { CreateDemoDto } from './dto/create-demo.dto';
      import { UpdateDemoDto } from './dto/update-demo.dto';

      @Controller({
        path: 'demo',
      })
      export class DemoController {
        constructor(private readonly demoService: DemoService) {}

        @Version('1')
        @Post()
        create(@Body() createDemoDto: CreateDemoDto) {
          return this.demoService.create(createDemoDto);
        }

        @Get()
        findAll() {
          return this.demoService.findAll();
        }
      }
    ```
  - 配置之后的路径是
    - /v1/demo
    - /demo