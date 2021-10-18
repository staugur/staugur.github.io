---
title: "磁盘与LVM简介"
date: 2021-08-16T14:23:13+08:00
tags: ["LVM"]
categories: ["笔记"]
---

# 磁盘基本概述

## 磁盘分类

- 固态硬盘
- 机械硬盘
- 服务器硬盘

## 固态硬盘的优缺点

- 优点：
  - 读写速度快
  - 防震抗摔性强
  - 低功耗
  - 无躁音
  - 体积小，携带方便

- 缺点：
  - 容量比机械硬盘小
  - 寿命比机械硬盘短
  - 制造成本高所以价格比机械硬盘高

{{< spoiler >}}
【附录】固态硬盘的总线，协议和接口：

从理论上来说，一款固态硬盘选择M.2接口，走PCIe总线，用NVMe协议，性能发挥是最好的。
欲知详情，请参考: https://ssdzg.com/243.html
{{< /spoiler >}}

## Linux磁盘命名方式

- 传统IDE接口硬盘：/dev/hd[a-z]
- SCISI接口硬盘：/dev/sd[a-z]
- 虚拟化硬盘：/dev/vd[a-z]

系统中分区由数字编号表示, 1-4留给主分区使用和扩展分区, 逻辑分区从5开始

## MBR与GPT

MBR支持的磁盘最大容量为2 TB，GPT最大支持的磁盘容量为18 EB，当前数据盘支持的最大容量为32 TB，如果您需要使用大于2 TB的磁盘容量，分区形式请采用GPT。

当磁盘已经投入使用后，此时切换磁盘分区形式时，磁盘上的原有数据将会清除，因此请在磁盘初始化时谨慎选择磁盘分区形式。

### MBR

MBR是Master Boot Record的简称，也就是主引导记录，是位于磁盘最前边的一段引导（Loader）代码，主要用来引导操作系统的加载与启动

特点：
  - MBR支持最大2TB磁盘，无法处理大于2TB容量的磁盘
  - 只支持最多4个主分区。需要更多的分区，则需要创建拓展分区，并在其中创建逻辑分区

备注：在linux操作系统中可用fdisk对磁盘分区。

### GPT

GPT磁盘是指使用GUID分区表的磁盘，GUID磁盘分区表（GUID Partition Table，缩写：GPT）其含义为“全局唯一标识磁盘分区表”，是一个实体硬盘的分区表的结构布局的标准

特点：
  - GPT对磁盘的大小没有限制
  - 最多可以创建128个分区
  - 注意：MBR与GPT之间互相转换会导致数据丢失
  - 磁盘容量检查

备注：在linux操作系统中可用gdisk对磁盘分区。

## 分区、文件系统

- [分区和文件系统](https://www.cnblogs.com/sammyliu/p/4521315.html)

- [XFS vs EXT4](http://xiaqunfeng.cc/2017/07/06/XFS-vs-EXT4/)

# LVM

LVM 是 Logical Volume Manager 的缩写，中文一般翻译为 "逻辑卷管理"，它是 Linux 下对磁盘分区进行管理的一种机制。LVM 是建立在磁盘分区和文件系统之间的一个逻辑层，系统管理员可以利用 LVM 在不重新对磁盘分区的情况下动态的调整分区的大小。如果系统新增了一块硬盘，通过 LVM 就可以将新增的硬盘空间直接扩展到原来的磁盘分区上。

LVM 的优点如下：

- 文件系统可以跨多个磁盘，因此大小不再受物理磁盘的限制。
- 可以在系统运行状态下动态地扩展文件系统大小。
- 可以以镜像的方式冗余重要数据到多个物理磁盘上。
- 可以很方便地导出整个卷组，并导入到另外一台机器上。

LVM 也有一些缺点：

- 在从卷组中移除一个磁盘的时候必须使用 reducevg 命令(这个命令要求root权限，并且不允许在快照卷组中使用)。
- 当卷组中的一个磁盘损坏时，整个卷组都会受影响。
- 因为增加了一个逻辑层，存储的性能会受影响。

## LVM基本概念

- 物理存储设备(Physical Media)：指系统的存储设备文件，比如 /dev/sda、/dev/sdb 等。
- 物理卷(PV)：把常规的块设备（硬盘，分区等可以读写数据的设备）通过pvcreate命令对其进行初始化，就成了物理卷
- 卷组(VG):把多个物理卷的容量组成一个逻辑整体，可以从里面灵活分配容量
- 逻辑卷(LV):从卷组中划分部分空间成为一个可以读写数据的逻辑单元。需要对其格式化然后挂载使用

- PE(Physical Extent)：PV(物理卷)中可以分配的最小存储单元称为 PE，PE 的大小是可以指定的。
- LE(Logical Extent)：LV(逻辑卷)中可以分配的最小存储单元称为 LE，在同一个卷组中，LE 的大小和 PE 的大小是一样的，并且一一对应。

可以这么理解，LVM 是把硬盘的分区分成了更小的单位(PE)，再用这些单元拼成更大的看上去像分区的东西(PV)，进而用 PV 拼成看上去像硬盘的东西(VG)，最后在这个新的硬盘上创建分区(LV)。文件系统则建立在 LV 之上，这样就在物理硬盘和文件系统中间添加了一层抽象(LVM)。

## LVM命令

磁盘分区 - pvcreate添加标记为物理卷 - vgcreate创建卷组 - lvcreate创建逻辑卷 - 格式化lv - 挂载lv

## 新增逻辑卷

新增一块sdb，设为名为VG的卷组，全部空间创建名为Data的lv，挂载到/data

```bash
$ fdisk /dev/sdb #（如果磁盘大于2T，使用GPT类型，用 gdisk /dev/sdb分区），分区
>> n
>> p
>> ...8e (lvm)
>> w

$ pvcreate /dev/sdb1

$ vgcreate -s 4M VG /dev/sdb1

$ lvcreate -L 50G -n Data VG

$ mkfs.ext4 /dev/VG/Data

$ mkdir /data/ && mount /dev/VG/Data /data # blkid查看UUID写入fstab开机自动挂载
```

## 扩容逻辑卷

新增一块sdc，加入VG，扩容Data

```bash
$ fdisk, pv # 同上

$ vgextend VG /dev/sdc1

$ lvextend -L +10G /dev/VG/Data
  # -L：指定扩展（后）的大小。例如，-L +800M表示扩大800M，而-L 800M表示扩大至800M
  # -l：指定扩展（后）的大小（LE数），比如： lvextend -l +100%FREE /dev/VG/Data

$ resize2fs/xfs_growfs <DEVICE>
  # ext2/ext3/ext4文件系统的调整命令是resize2fs（增大和减小都支持）
  # xfs文件系统的调整命令是xfs_growfs（只支持增大）
```

#### 引用:

- [Linux磁盘介绍及LVM磁盘管理](https://blog.51cto.com/bad5/2903258)
- [LVM基础详细说明及动态扩容lvm逻辑卷的操作记录](https://www.cnblogs.com/kevingrace/p/5845634.html)
- [Linux下对LVM逻辑卷分区大小调整【针对xfs和ext4文件系统】](https://www.cnblogs.com/kevingrace/p/5825963.html)

<br>

<center>  ·End·  </center>
