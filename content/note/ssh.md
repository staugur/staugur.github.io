---
title: "ssh远程执行命令、脚本与安全技巧"
date: 2021-09-13T21:23:13+08:00
tags: ["linux"]
categories: ["笔记"]
---

### 通过ssh在远端服务器执行单条、多条命令、脚本的方式

`ssh [option] destination [command]`

#### 分号式

`ssh user@host 'cmd1 ; cmd2 ; cmdn'`

#### EOF式

```bash
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

### sshd_config 配置片段

#### 设置某个用户只允许某个IP登录，其他IP全拒绝，且不影响任何其他用户

场景：每个服务器是个 Agent，上有一个 ansible 用户，此用户只接受来自 Ansible Server 端的 IP 连接 SSH，
拒绝其他 IP 通过 ansible 用户连接 SSH，且其他已有用户、新用户都正常使。

目前发现的两种方式（修改 /etc/ssh/sshd_config 配置文件）：

**1. 使用 DenyUsers 方式**

`DenyUsers ansible@"!IP,*"`

**2. 使用 Match 方式**

```vim
Match User ansible
  AllowUsers ansible@IP
```

这种方式好处是单独匹配 ansible 用户做个性化配置，可以增加额外字段，比如添加 `PasswordAuthentication no` 不允许密码登录。

<br>

<center>  ·End·  </center>
