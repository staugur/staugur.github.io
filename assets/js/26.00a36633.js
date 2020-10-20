(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{506:function(s,r,a){"use strict";a.r(r);var e=a(4),t=Object(e.a)({},(function(){var s=this,r=s.$createElement,a=s._self._c||r;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("项目：SwarmOps")]),s._v(" "),a("p",[s._v("说明：Docker Swarm Mode(v1.12.0+)功能封装的API和UI(Flask+Bootstrap)")]),s._v(" "),a("p",[s._v("GitHub："),a("a",{attrs:{href:"https://github.com/staugur/SwarmOps",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/staugur/SwarmOps"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("依赖："),a("strong",[s._v("Passport认证系统(生产必须)，Redis(非必须)")])]),s._v(" "),a("blockquote",[a("p",[a("strong",[s._v("注意：关键信息！")])]),s._v(" "),a("p",[s._v("当前文档版本：Release 0.0.1,  0.0.2")]),s._v(" "),a("p",[a("strong",[s._v("声明：")])]),s._v(" "),a("p",[s._v("当前项目暂无更新计划，针对的swarm版本大概是1.12.x，最新版本无跟进，无法保证正确性！")])]),s._v(" "),a("h2",{attrs:{id:"一-部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一-部署"}},[s._v("#")]),s._v(" 一：部署")]),s._v(" "),a("p",[a("strong",[s._v("###SwarmOps部署需要先部署依赖程序")]),s._v("。")]),s._v(" "),a("p",[a("strong",[s._v("###")]),s._v(" 如果你是正式环境使用，请安装Passport认证系统和Redis(高可用)；")]),s._v(" "),a("p",[a("strong",[s._v("###")]),s._v(" 如果你是快速体验，可以不安装Passport和Redis(设置g.signin=True，使用local存储)；")]),s._v(" "),a("p",[a("strong",[s._v("###")]),s._v(" 下面是具体过程，如果有疑问可以在评论区提出，或者发邮件，"),a("a",{attrs:{href:"mailto:staugur@saintic.com"}},[s._v("staugur@saintic.com")]),s._v("。")]),s._v(" "),a("p",[s._v("1. 认证系统部署")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("1.1 SwarmOps为了安全性首先要求登录状态，登录系统采用passport(简单SSO)认证，绑定全局变量g.signin(Bool)，判断是否已经登录，所以此处也可以采用你自己的登录认证系统。")]),s._v(" "),a("p",[s._v("部署passport，其GitHub地址是"),a("a",{attrs:{href:"https://github.com/staugur/passport",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/staugur/passport"),a("OutboundLink")],1),s._v("，亦可参考本站文档："),a("a",{attrs:{href:"https://blog.saintic.com/blog/134.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://blog.saintic.com/blog/134.html"),a("OutboundLink")],1),s._v("。")])])]),s._v(" "),a("p",[a("strong",[s._v("注意：swarmop于2018-11-07已经更新代码，适配最新版passport，所以使用此最新版需要部署passport！")])]),s._v(" "),a("p",[a("strong",[s._v("以下内容是release中代码，不适用最新版！")])]),s._v(" "),a("p",[a("strong",[s._v("演示地址：")]),s._v(" "),a("a",{attrs:{href:"http://swarmops.demo.saintic.com",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://swarmops.demo.saintic.com"),a("OutboundLink")],1)]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v('1.2 自定义认证\n\n    认证关键在与before\\_request时的g.auth\\(若不了解请参考flask文档\\)，此值即\\`isLogged\\_in\\`函数返回值，所以增加自定义认证需要以下步骤：\n\n    1.2.1 config.py\n\n        新增GLOBAL段Authentication值，例如auth\\_example\n\n    1.2.2 utils/public.py\n\n        在大概45行isLogged\\_in函数中，修改代码if判断，新增一个AuthType=="auth\\_example"段，执行根据cookie信息做认证。\n')])])]),a("p",[s._v("2. redis部署")]),s._v(" "),a("p",[a("strong",[s._v("########")])]),s._v(" "),a("p",[a("strong",[s._v("存储多个swarm的name、ip、token等信息，可以用redis、local，如果你将数据放到redis，便可以多节点，当然步骤也麻烦一点，需要安装redis。如果单点，就用local，本地文件存储即可，省去下面redis部署过程。")])]),s._v(" "),a("p",[a("strong",[s._v("########")])]),s._v(" "),a("p",[s._v("SwarmOps多点分布部署，可以使用redis、etcd、consul等类型的kv存储服务，目前仅支持redis。")]),s._v(" "),a("p",[s._v("安装redis非常简单，不需要集群，单实例，默认写入0库。")]),s._v(" "),a("p",[s._v("第一种比较简单的方法，yum -y install redis(如果没有redis包，可以先执行yum -y install epel-release)，安装完成之后用service或systemctl启动，这样默认监听127.0.0.1:6379，无密码。")]),s._v(" "),a("p",[s._v("第二种方法到<redis.cn>中文版网站文档中查询资料采用源码部署，此处，我早前有个一键部署NoSQL的脚本，GitHub地址是"),a("a",{attrs:{href:"https://github.com/staugur/CoreWeb",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/staugur/CoreWeb"),a("OutboundLink")],1),s._v("。")]),s._v(" "),a("p",[s._v("3. SwarmOps部署")]),s._v(" "),a("p",[s._v("3.1 开发版本体验(不推荐)")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('[root@e50e93de4b75 ~]# yum install -y gcc gcc-c++ python-devel libffi-devel openssl-devel python-pip git\n[root@e50e93de4b75 ~]# git clone https://github.com/staugur/swarmops\n[root@e50e93de4b75 ~]# cd swarmops\n[root@e50e93de4b75 swarmops]# pip install -r requirements.txt\n### 使用redis\n[root@e50e93de4b75 swarmops]# export swarmops_swarmstoragemode=redis\n[root@e50e93de4b75 swarmops]# export swarmops_StorageConnection=redis://127.0.0.1:6379 (格式是"redis://redis_host:redis_port:redis_password", 其中密码可以省略, 则默认None)\n### 使用local\n[root@e50e93de4b75 swarmops]# export swarmops_swarmstoragemode=local\n[root@e50e93de4b75 swarmops]# ./Control.sh     \nSwarmOps start over.\n[root@e50e93de4b75 swarmops]# ./Control.sh status\nSwarmOps:\n  pid: 9298\n  state: running\n  process start time: 2017-Jan-2 13:20:42\n  process running time: 00:02\n[root@e50e93de4b75 swarmops]# ps aux | grep -v grep | grep SwarmOps ; netstat -anptl | grep SwarmOps\n\nroot      9298  0.0  1.1 137000 20920 ?        S    13:20   0:00 SwarmOps                                        \n\ntcp        0      0 0.0.0.0:10130                0.0.0.0:*                 LISTEN           9298/SwarmOps       \n\ntcp        0      0 127.0.0.1:49804             127.0.0.1:6379             ESTABLISHED      9298/SwarmOps       \n\ntcp        0      0 :::10130                     :::*                      LISTEN           9298/SwarmOps  \n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br")])]),a("p",[s._v("3.2 稳定版本(墙裂推荐)")]),s._v(" "),a("p",[s._v("3.2.1 物理机、虚拟机等")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('wget -c -O SwarmOps-v0.0.2.tar.gz "https://codeload.github.com/staugur/SwarmOps/tar.gz/v0.0.2"\ntar zxf SwarmOps-v0.0.2.tar.gz\ncd SwarmOps-0.0.2/\npip install -r requirements.txt\n### 使用redis\nexport swarmops_swarmstoragemode=redis\nexport swarmops_StorageConnection=redis://127.0.0.1:6379 (格式是"redis://redis_host:redis_port:redis_password", 其中密码可以省略, 则默认None)\n### 使用local\nexport swarmops_swarmstoragemode=local\nControl.sh start\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[s._v("3.2.2 docker")]),s._v(" "),a("p",[a("em",[s._v("暂不提供正式版镜像，请自行构建！")])]),s._v(" "),a("p",[s._v("附录1, 关于SwarmOps的使用：")]),s._v(" "),a("p",[s._v("SwarmOps默认监听0.0.0.0:10130，打开浏览器访问你的IP:10130端口，passport验证登录后，即进入UI界面中，UI调用Api操作数据。")]),s._v(" "),a("p",[s._v("附录2, 关于SwarmOps Api的使用(尚未更新完毕)：")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/staugur/SwarmOps/blob/master/docs/SwarmOpsApi_SwarmEngine.md",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/staugur/SwarmOps/blob/master/docs/SwarmOpsApi_SwarmEngine.md"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("附录3,关于Nginx(tengine)的配置：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('upstream SwarmOps {\n    server 127.0.0.1:10130;\n    check interval=3000 rise=2 fall=5 timeout=3000 type=http;\n    check_http_send "GET / HTTP/1.1\\r\\n\\r\\n";\n}\n\nserver {\n    listen 80;\n    server_name swarmops.saintic.com;\n    charset utf8;\n    access_log  logs/swarmops.access.log json;\n    location / {\n        #proxy_pass http://127.0.0.1:10130;\n        proxy_pass http://SwarmOps;\n        proxy_set_header X-Forwared-For $proxy_add_x_forwarded_for ;\n        proxy_set_header Host $http_host ;\n        proxy_set_header X-Real-IP  $remote_addr;\n        proxy_set_header X-Forwarded-For $remote_addr;\n    }\n    location /nstatus {\n        check_status;\n        access_log   off;\n    }\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br")])])])}),[],!1,null,null,null);r.default=t.exports}}]);