# Tmux

### `Tmux`是什么
  - Tmux 是一个终端复用器（terminal multiplexer），非常有用，属于常用的开发工具。
  - 每次打开的终端，用户和计算机这种临时交互，成为一次`“会话”`，打开窗口会话开始，关闭窗口会话结束，会话结束之后内部进程也会随之终止。
  - 为了避免关闭窗口结束会话，就得让窗口和会话`解绑`

### `Tmux`的使用
  - 安装
    ```sh
      # Ubuntu 或 Debian
      sudo apt-get install tmux

      # CentOS 或 Fedora
      sudo yum install tmux

      # Mac
      brew install tmux
    ```

  - 新建会话
  
    :::tip Tmux 编号
      第一个启动的 Tmux 窗口，编号是0，第二个窗口的编号是1，以此类推。这些窗口对应的会话，就是 0 号会话、1 号会话。
    :::
    ```sh
      tmux new -s <session-name>
    ```
  - 接入会话
    ```sh
      # 使用会话编号
      tmux attach -t 0

      # 使用会话名称
      tmux attach -t <session-name>
    ```
  - 杀死会话
    ```sh
      # 使用会话编号
      tmux kill-session -t 0

      # 使用会话名称
      tmux kill-session -t <session-name>    
    ```
  - 切换会话
    ```sh
      # 使用会话编号
      tmux switch -t 0

      # 使用会话名称
      tmux switch -t <session-name>
    ```
  - 重命名会话
    ```sh
      tmux rename-session -t 0 <new-name>
    ```
  