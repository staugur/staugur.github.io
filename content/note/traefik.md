---
title: "traefik"
date: 2021-10-22T12:00:13+08:00
tags: ["k8s"]
categories: ["笔记"]
---

使用 Helm(v3) 安装 Traefik(v2)，
部署为：DaemonSet，使用主机网络，监听Node的80、443。

```yaml
deployment:
  kind: DaemonSet
  dnsPolicy: ClusterFirstWithHostNet
ports:
  web:
    port: 80
    hostPort: 80
  websecure:
    port: 443
    hostPort: 443
service:
  type: NodePort
hostNetwork: true
securityContext:
  capabilities:
    drop: [ALL]
    add: [NET_BIND_SERVICE]
  readOnlyRootFilesystem: true
  runAsGroup: 0
  runAsNonRoot: false
  runAsUser: 0
```

<br>

<center>  ·End·  </center>
