# Nest-控制器之方法参数装饰器

### nestjs 提供了方法参数装饰器，可以更便捷获取参数
  - | 装饰器 | 作用 |
    | ------ | ---- |
    | @Request() | req |
    | @response() | res |
    | @Next() | next |
    | @Session() | req.session |
    | @Param(key?: string) | req.params/req.params[key] |
    | @Body(key?: string) | req.body/req.body[key] |
    | @Query(key?: string) | req.query/req.query[key] |
    | @Header(name? string) | req.headers/req.headers[name] |
    | @HttpCode(code: number) | http code |

### 各种参数装饰器使用方法
  ```ts
    import {Controller,Get,Post,Body,Patch,Param,Delete,Req,Res,Request,Response,Session,HttpCode,Headers,Redirect,} from '@nestjs/common';
    import { DemoService } from './demo.service';
    import { CreateDemoDto } from './dto/create-demo.dto';
    import { UpdateDemoDto } from './dto/update-demo.dto';

    @Controller({
      path: 'demo',
    })
    export class DemoController {
      constructor(private readonly demoService: DemoService) {}

      @Post()
      create(@Headers() headers, @Body('id') createDemoDto: CreateDemoDto) {
        console.log(headers);
        return this.demoService.create(createDemoDto);
      }

      @Get()
      // findAll(@Req() req, @Res() res) {
      findAll(@Request() req, @Response() res, @Session() session) {
        console.log(req, res, session);
        return this.demoService.findAll();
      }

      @Get(':id')
      @HttpCode(500)
      findOne(@Param('id') id: string) {
        return this.demoService.findOne(+id);
      }

      @Patch(':id')
      @Redirect('/')
      update(@Param('id') id: string, @Body() updateDemoDto: UpdateDemoDto) {
        return this.demoService.update(+id, updateDemoDto);
      }

      @Delete(':id')
      remove(@Param('id') id: string) {
        return this.demoService.remove(+id);
      }
    }

  ```