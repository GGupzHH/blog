# Code 码规范

::: danger
以下为个人规范
:::

- | Code码 | 返回信息 | 含义         |
  | :----- | :------- | :----------- |
  | 200    | 👌🏻       | OK           |
  | 304    | Not Modified | 协商缓存 |
  | 400    | Bad Request  | 参数错误 |
  | 401    | Unauthorized token | 错误 |
  | 403    | Forbidden referer origin | 验证失败 |
  | 404    | Not Found | 接口不存在 |
  | 500    | Internal Server Error | 服务端错误 |
  | 502    | Bad Gateway | 上游接口有问题或者服务器问题 |
  