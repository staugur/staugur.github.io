---
title: "govc使用片段"
date: 2022-08-08T18:00:13+08:00
tags: ["govc","vsphere"]
categories: ["笔记"]
---

[govc](https://github.com/vmware/govmomi/tree/master/govc) 是基于 [govmomi](https://github.com/vmware/govmomi/) 实现的命令行工具，用于对 VCenter 或 ESXi 主机、存储、虚拟机等管理。

以下是我的一些使用片段记录：

### 1. 开启VM网络
```bash
$ govc device.connect -vm <VM-NAME> ethernet-0
```

### 2. 客户机运行命令
```bash
$ govc guest.run -l user:pwd -vm <VM-NAME> command
```

### 3. 更改密码

#### 3.1 linux
```bash
$ govc guest.run -vm <VM-NAME> -l 'root:pwd' -- 'echo change-user:new-pwd | chpasswd && echo ok'
> exit code: 0
> output: ok
```

#### 3.2 windows
```bash
$ govc guest.run -vm <VM-NAME> -l 'Administrator:pwd' -- 'net user change-user new-pwd'
> exit code: 0
> output: 命令成功完成
```

### 4. 根据模板克隆LINUX
```bash
$ govc vm.clone -annotation=test -c=2 -m=4096 -net=VLAN -vm=模板名 -folder=文件夹 -host=主机IP -ds=存储名 -on=false <VM-NAME>

$ govc vm.customize -vm=<VM-NAME> -ip=10.6.X.Y -netmask=255.255.254.0 -gateway=10.6.X.Z -dns-server=10.6.1.1,10.6.2.2 -dns-suffix=saintic.com -type=Linux
```

克隆 Linux 可以不用虚拟机自定义规范，当然，有的话更好，可以在规范中定义所需。

### 5. 根据模板克隆WINDOWS
```bash
$ govc vm.clone -annotation=test -c=4 -m=8192 -net=vm_662 -vm=Windows模板名 -folder=文件夹 -host=主机IP -ds=存储名 -on=false <VM-NAME>

$ govc vm.customize -vm=<VM-NAME> -ip=10.6.X.Y -netmask=255.255.254.0 -gateway=10.6.X.Z -dns-server=10.6.1.1,10.6.2.2 -dns-suffix=saintic.com -type=Windows 虚拟机自定义规范
```

克隆 Windows 需要使用一个已有的虚拟机自定义规范，否则有 govc: A specified parameter was not correct: spec.identity.userData.fullName 错误

### 6. 虚拟机创建磁盘
```bash
$ govc vm.disk.create -vm <VM-NAME> -name <VM-NAME>/disk2 -size=10G -ds=存储名
```

### 7. 开关机
```bash
$ govc vm.power -on/-off <VM-NAME>
```


<br>

<center>  ·End·  </center>
