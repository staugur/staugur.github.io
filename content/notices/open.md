---
title: "诏预开放平台公告"
date: "2021-12-15"
showComments: true
---

## 诏预开放平台地址

[https://open.saintic.com](https://open.saintic.com)

### 2025-06-01

> open.saintic.com 相关服务将逐步迁移到 hub.saintic.com

### 2025-02-06

解耦下线 IP 查询接口，改为 `https://hub.saintic.com/openservice/ip/`，
可调用接口如下：

- `/rest`: 仅查询访问者IP
- `/addr`: 查询访问者IP及信息，可用查询参数 ip 改为查询其他值
- `/rest`: addr 接口 json 版本。


### 2021-12-15

> update @ 2021-12-22
>
> 鉴于个人收款接口限制，届时将首先使用收款码手工录入。

> update @ 2021-12-25
>
> 更新最终定价与规则

偶然发现百度收录查询接口极易触发图形验证（实际已经很久），导致未缓存的查询总是失败。

遂决定重构后端查询程序，初步拆分作为微服务，使用 k8s 分发到全部节点，后续代理优化。

并于 **2021-12-26** 号凌晨开始限制速率，初步策略如下：

匿名用户：**5/d/ip**（每IP每天总共 5 次）；

登录用户：**20/d/user**（每用户每天总共 20 次）。

如次数不足，请查看 [诏预开放平台-OpenApi-文档](https://docs.saintic.com/open/api.html) 查看付费说明。

<br>

<center>  ·End·  </center>
