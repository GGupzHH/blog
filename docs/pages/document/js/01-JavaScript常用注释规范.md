# JavaScript 常用注释规范

- 常用注释规范
  | 常用符号 | 类型 |
  |  ----  | ----  |
  | @param  | 描述参数 |
  | @argument  | 单元格 |
  | @author | 作者 |
  | @version | 版本 |
  | @returns | 返回值 |
  | @class | 提供类相关信息 |
  | @private | 类或函数私有的 |

- 示例
  ```JavaScript
    /**
     * 测试函数
     * @param {number} num
     * @returns {void}
     */
    function test(num) {
      console.log(num)
    }
  ```

  ```JavaScript
    /**
     * 函数功能描述
     * @param {number} num
     * @param {?string} name Username
     * @returns {void}
     */
    function test(num, name) {
      console.log(num, name)
    }
  ```

