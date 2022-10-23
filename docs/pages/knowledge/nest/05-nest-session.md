# Nest Session

::: tip Session
Session是服务器为每个用户的浏览器创建的一个会话对象，这个session会记录到浏览器的cookie来区分用户。
:::

### 使用的包
  - 因为默认框架是express，所以可以使用express的包
    ```sh
      yarn add express-session
    ```
  - 如果是TS则需要对应的类型包
    ```sh
      yarn add @types/express-session
    ```

### 全局注册
  - 当前端发送请求之后，会注入到此时用户的cookie中，名称为connect.sid
  - 当新的接口发送请求的时候，前端需要带上这个cookie
  - 如果是用的axios，默认不携带cookie，要想带上需要配置`axios.defaults.withCredentials = false`
  ```ts
    import * as session from 'express-session'

    app.use(session({
      secret: 'GGupzHH',   // 签名，类似加盐
      rolling: true,       // 每次请求强行设置cookie，这将重置cookie过期时间。（默认false）
      name: 'connect.sid', // 生成客户端cookie名字，默认connect.sid
      cookie: {
        path: '/',
        secure: false,
        httpOnly: true,    // 是否能够修改
        maxAge: 10000      // 过期时间（毫秒）， 负数仅限于当前会话，null长时间存储
      }
    }))
  ```
### 接口设置session
  ```ts
    @Get('code')
    getCodeInfo(@Session session: any) {
      session.code = '要设置之后回传的信息'
    }

  ```

### 接口获取携带的cookie中的session信息
  ```ts
    @Post('code')
    setCode(@Session session: any) {
      console.log(session.code) // 值：要设置之后回传的信息
    }
  ```
