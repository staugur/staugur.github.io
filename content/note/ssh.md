---
title: "ssh远程执行命令、脚本"
date: 2021-09-13T21:23:13+08:00
tags: ["linux"]
categories: ["笔记"]
---

### 通过ssh在远端服务器执行单条、多条命令、脚本的方式

`ssh [option] destination [command]`

#### 分号式

`ssh user@host 'cmd1 ; cmd2 ; cmdn'`

#### EOF式

```
ssh user@host << EOF
cmd1
cmd2
cmdn
EOF
```

#### 通过ssh在远端服务器上执行远程脚本

即执行位于目标服务器本地的脚本

`ssh user@host /path/to/remote/script-file`

#### 通过ssh在远端服务器上执行本地脚本

即把客户端本地脚本放到目标服务器上执行

- 不带位参

  `ssh user@host < /path/to/local/script-file`

- 传递位参

  `ssh user@host bash -s < /path/to/local/script-file args...`

#### 引用

- [SSH 远程执行任务](https://www.cnblogs.com/sparkdev/p/6842805.html)


<br>

<center>  ·End·  </center>
