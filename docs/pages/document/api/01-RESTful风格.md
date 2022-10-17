# RESTful风格设计

:::tip
RESTful只是一种风格，在RESTful中，一切都被认为是资源，每个资源都有对应的url标识。

RESTful不是标准也不是协议，只是一种接口风格。
:::

### 传统接口
  - http://localhost:6000/api/get_list?id=1
  - http://localhost:6000/api/delete_list?id=1
  - http://localhost:6000/api/update_list?id=1

### RESTful接口
  - http://localhost:6000/api/list/1 查询 删除 更新
  - 通过不同的请求方式去区分
