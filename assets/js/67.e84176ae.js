(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{547:function(t,a,r){"use strict";r.r(a);var e=r(4),s=Object(e.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("div",{staticClass:"custom-block tip"},[r("p",[t._v("手机端在国内(CN)环境使用v2ray注册Telegram")])]),t._v(" "),r("h2",{attrs:{id:"概述"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),r("p",[t._v("本文是记录的用国内手机号注册Telegram的过程，至于注册的这个是神马请自行了解。")]),t._v(" "),r("p",[t._v("在国内的网络环境，+86的手机号无法收到验证码，而Telegram目前只能使用手机验证码登录，所以国内手机号只能在国外环境下才能正常收到验证码，也就是要求使用国外v-p-n，开启全局代理，假装自己的手机在国外。")]),t._v(" "),r("p",[t._v("所以在国内想要成功注册的前提是先有国外的v-p-n，这里我用了v2ray搭建了服务，当然，使用诸如openvpn、pptp应该也是ok的，注册好之后可以仅使用MTProto/SOCKS5代理了。")]),t._v(" "),r("h2",{attrs:{id:"v2ray"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#v2ray"}},[t._v("#")]),t._v(" V2Ray")]),t._v(" "),r("p",[t._v("v2ray是Project V的核心项目，旨在科学上网环境，官方文档："),r("a",{attrs:{href:""}},[t._v("https://www.v2ray.com")]),t._v("，代码开源，更高效，但是配置略复杂，不过好在gayhub上好心人多，这里用到好心人写的一键安装与管理脚本，亲测好用。")]),t._v(" "),r("h3",{attrs:{id:"安装"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),r("p",[t._v("打开脚本的作者教程（一键安装脚本 & 管理脚本地址）： "),r("a",{attrs:{href:""}},[t._v("https://233v2.com/post/1/")]),t._v("，跟着来基本没问题，我安装时的操作系统是CentOS7.7, 位于洛杉矶的vps，步骤大概如下：")]),t._v(" "),r("p",[r("strong",[t._v("1、运行脚本")])]),t._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("# yum install -y curl unzip\n# bash <(curl -s -L https://git.io/v2ray.sh)\n")])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br"),r("span",{staticClass:"line-number"},[t._v("2")]),r("br")])]),r("p",[t._v("我安装中有一次好像unzip命令没安装失败了，所以直接先安装curl和unzip，脚本没毛病，也是开源的，无后门。")]),t._v(" "),r("p",[t._v("这个脚本执行后交互确认是安装还是卸载，所以即便有毛病，大不了卸掉再安装，安装过程中提示的选项基本上保持默认也行了。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://static.saintic.com/EauDouce/blog/201911261507242781.png",alt:""}})]),t._v(" "),r("p",[t._v("上图最后输入y安装了shadowsocks，根据你自己的需要安装吧，它已经被封了，安装这个服务的话服务器ip有被封的风险，v2ray的协议更隐秘。")]),t._v(" "),r("p",[t._v("下图是安装ss的选项：")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://static.saintic.com/EauDouce/blog/201911261507398197.png",alt:""}})]),t._v(" "),r("p",[t._v("回车确认下v2ray信息和ss信息，没问题就回车开启正式安装，我这系统CentOS会yum安装很多包，另外也支持Ubuntu、debian等系统。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://static.saintic.com/EauDouce/blog/201911261507489690.png",alt:""}})]),t._v(" "),r("p",[t._v("到这里安装完毕，脚本输出服务的信息，依照输出，使用客户端连接吧。"),r("br"),t._v(" "),r("img",{attrs:{src:"https://static.saintic.com/EauDouce/blog/201911261507578192.png",alt:""}})]),t._v(" "),r("p",[t._v("当然，此时系统有一个v2ray命令，用来管理v2ray服务，比如使用status查看状态：")]),t._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("# v2ray status\n\n V2Ray 状态: 正在运行\n")])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br"),r("span",{staticClass:"line-number"},[t._v("2")]),r("br"),r("span",{staticClass:"line-number"},[t._v("3")]),r("br")])]),r("p",[t._v("使用-h/—help查看支持的选项，比如"),r("code",[t._v("v2ray info")]),t._v("查看v2ray信息，"),r("code",[t._v("v2ray ssinfo")]),t._v("查看ss信息等。")]),t._v(" "),r("p",[r("strong",[t._v("2、客户端连接")])]),t._v(" "),r("p",[t._v("使用上述脚本安装的话，其作者也给了各平台客户端使用教程："),r("a",{attrs:{href:"https://233v2.com/post/4/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://233v2.com/post/4/"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("我是安卓手机，用的V2RayNG，在服务器上输入"),r("code",[t._v("v2ray qr")]),t._v("显示v2ray的二维码链接（如下图），在浏览器打开链接会显示二维码，打开客户端V2RayNG，右上角+，选择扫描二维码，然后扫描刚才浏览器上的二维码就能自动填充信息了，保存即可。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://static.saintic.com/EauDouce/blog/201911261544021736.png",alt:""}})]),t._v(" "),r("p",[t._v("选中刚才保存的一个连接，右下角一个V字图标，点击即开启v-p-n了！")]),t._v(" "),r("p",[t._v("当然还可以配置一些别的，比如设置-预定义规则，选择绕过大陆地址。")]),t._v(" "),r("p",[t._v("更多客户端使用说明参考脚本作者的教程或Google吧。")]),t._v(" "),r("h2",{attrs:{id:"telegram"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#telegram"}},[t._v("#")]),t._v(" Telegram")]),t._v(" "),r("p",[t._v("上面一步是准备工作，这一步才进入正题。")]),t._v(" "),r("p",[t._v("启动全局v-p-n，打开客户端telegram，根据提示输入手机号、获取验证码、输入短信收到的【CMK】验证码，嗯，进入主界面。")]),t._v(" "),r("p",[t._v("PS：可以启动v-p-n后，先试试在浏览器中能不能访问google.com，或者V2RayNG客户端也支持测试。")]),t._v(" "),r("p",[t._v("注册完成后，正常的聊天等操作也不需要每次都开启v-p-n了，v2ray可以为Telegram开启一个专门的代理，这样，就不会影响其他app的流量访问了。")]),t._v(" "),r("p",[r("strong",[t._v("专用代理")])]),t._v(" "),r("p",[t._v("这个在刚才的"),r("a",{attrs:{href:"https://233v2.com/post/1/",target:"_blank",rel:"noopener noreferrer"}},[t._v("教程"),r("OutboundLink")],1),t._v("可以查阅，服务器上执行 "),r("strong",[t._v("v2ray tg")]),t._v(" 交互确认生成一个MTProto协议的代理，如图：")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://static.saintic.com/EauDouce/blog/201911261545016207.png",alt:""}})]),t._v(" "),r("blockquote",[r("p",[t._v("PS：")]),t._v(" "),r("p",[t._v("后续忘记信息的时候，仍可以执行 "),r("code",[t._v("v2ray tg")]),t._v(" 进行修改、删除、查看等。")]),t._v(" "),r("p",[t._v("但是请注意，很容易被封端口，注意安全！")])]),t._v(" "),r("p",[t._v("在telegram客户端主界面，打开设置-数据和存储-代理设置-添加代理，选择MTProto代理并根据刚才服务器生成的信息填写保存即可。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://static.saintic.com/EauDouce/blog/201911261546014390.jpg",alt:""}})]),t._v(" "),r("p",[r("strong",[t._v("汉化")])]),t._v(" "),r("p",[t._v("不论是Telegram移动端还是PC端，汉化都要在正常启动了软件后进行的，这里有一个汉化包："),r("a",{attrs:{href:"https://t.me/zh_CN",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://t.me/zh_CN"),r("OutboundLink")],1),t._v("，在软件中打开它，是个群组，里面有点击安装的链接。")]),t._v(" "),r("p",[t._v("详细的可以参考"),r("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/25889598",target:"_blank",rel:"noopener noreferrer"}},[t._v("这篇文章"),r("OutboundLink")],1),t._v("。")]),t._v(" "),r("p",[t._v("----------软件附录---------")]),t._v(" "),r("p",[t._v("1. "),r("a",{attrs:{href:"https://static.saintic.com/download/tg/Telegram_v5.12.1.apk",target:"_blank",rel:"noopener noreferrer"}},[t._v("Telegram 5.1 apk"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("2. "),r("a",{attrs:{href:"https://static.saintic.com/download/tg/tsetup.1.8.15.exe",target:"_blank",rel:"noopener noreferrer"}},[t._v("Telegram 1.8 Windows"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("3. "),r("a",{attrs:{href:"https://static.saintic.com/download/tg/v2rayNG_1.1.12.apk",target:"_blank",rel:"noopener noreferrer"}},[t._v("V2RayNG 1.1"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("当然，版本是写这篇文章时的最新版（apk是APKpure.com下载的），不过你已经可以fan-qiang了，可以再自行下载最新版。")])])}),[],!1,null,null,null);a.default=s.exports}}]);