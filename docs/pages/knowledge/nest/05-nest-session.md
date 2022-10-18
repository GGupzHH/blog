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