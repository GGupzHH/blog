# [Nest-cli 基本用法](https://docs.nestjs.cn/9/cli?id=%e6%a6%82%e8%bf%b0)

### 安装
  - ```sh
      npm install -g @nestjs/cli
    ```

### 帮助
  - ```sh
      nest --help
    ```
  - | name          | alias       | description                                  | 
    | :------------ | :---------: | :------------------------------------------- |
    | application   | application | Generate a new application workspace         |
    | class         | cl          | Generate a new class                         |
    | configuration | config      | Generate a CLI configuration file            |
    | controller    | co          | Generate a controller declaration            |
    | decorator     | d           | Generate a custom decorator                  |
    | filter        | f           | Generate a filter declaration                |
    | gateway       | ga          | Generate a gateway declaration               |
    | guard         | gu          | Generate a guard declaration                 |
    | interceptor   | itc         | Generate an interceptor declaration          |
    | interface     | itf         | Generate an interface                        |
    | middleware    | mi          | Generate a middleware declaration            |
    | module        | mo          | Generate a module declaration                |
    | pipe          | pi          | Generate a pipe declaration                  |
    | provider      | pr          | Generate a provider declaration              |
    | resolver      | r           | Generate a GraphQL resolver declaration      |
    | service       | s           | Generate a service declaration               |
    | library       | lib         | Generate a new library within a monorepo     |
    | sub-app       | app         | Generate a new application within a monorepo |
    | resource      | res         | Generate a new CRUD resource                 |

### 获取单个命令的帮助
  - ```sh
      nest <command> --help
    ```

### CLI 命令语法
  - ```sh
      nest commandOrAlias requiredArg [optionalArg] [options]
    ```
  - 例如
    ```sh
      nest new my-nest-project --dry-run
    ```

### 简单操作
  - 生成一个User模块
    ```sh
      nest g md User
    ```
  - 生成RESTful风格
    ```sh
      nest g res Demo
    ```
