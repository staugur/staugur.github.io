---
title: "Docker Buildx Command"
date: 2022-06-06T09:49:44+08:00
draft: false
tags: ["docker"]
categories: [""]
description: 
---

使用 docker buildx 子命令需要内核支持（CentOS7需要安装4.X 5.X版本）

如果私有仓是 http，请新建配置文件：/etc/buildkit/buildkitd.toml，内容是：

```toml
# registry configures a new Docker register used for cache import or output.
[registry."<REGISTRY-DOMAIN-NAME>"]
  http = true
  insecure = true
```

使用：
1. 引入binfmt_misc
```bash
docker run --rm --privileged docker/binfmt:66f9012c56a8316f9244ffd7622d7c21c1f6f28d
```

2. 新建构建器
```bash
docker buildx create --driver docker-container --platform linux/arm64,linux/amd64 --config /etc/buildkit/buildkitd.toml --use --name builder
```

3. 启动构建器
```bash
docker buildx inspect builder --bootstrap
```

4. 构建项目
```bash
docker buildx build -t <REGISTRY-DOMAIN-NAME>/<REPO>:<TAG> --platform=linux/amd64,linux/arm64 --push .
```

5. 删除构建器
```bash
docker buildx stop builder
docker buildx rm builder
```

<br>

<center>  ·End·  </center>
