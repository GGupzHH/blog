# zsh命令自动补全插件 `zsh-autosuggestions` Mac安装和配置

### [仓库地址](https://github.com/zsh-users/zsh-autosuggestions)

### 安装
  - 克隆插件到`$ZSH_CUSTOM/plugins` （默认位置`~/.oh-my-zsh/custom/plugins`）
  ```yaml copy
    git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
  ```

### 配置
  - 将clone的插件名添加到 `.zshrc` 中
    - vim ~/.zshrc
    ```
      plugins=(
        zsh-autosuggestions
      )
    ```
  - 保存关闭
  - 执行 `source ~/.zshrc` 使配置生效
