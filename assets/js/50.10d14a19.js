(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{530:function(s,t,n){"use strict";n.r(t);var a=n(4),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("blockquote",[n("p",[s._v("本文系整理+修改而成，参考……忘记了，侵删。")]),s._v(" "),n("p",[s._v("主题是：WSL(Windows Subsystem for Linux)开机自启动ssh服务。")])]),s._v(" "),n("h4",{attrs:{id:"壹、用法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#壹、用法"}},[s._v("#")]),s._v(" "),n("strong",[s._v("壹、用法")])]),s._v(" "),n("ol",[n("li",[n("p",[s._v("win+R键调出运行，输入shell:startup确定进入开始菜单启动程序目录(大致是C:\\Users\\用户名\\AppData\\Roaming\\Microsoft\\Windows\\Start Menu\\Programs\\Startup);")])]),s._v(" "),n("li",[n("p",[s._v("startWSL.vbs放到上述目录;")])]),s._v(" "),n("li",[n("p",[s._v("打开wsl，将init.sh放到/目录，即/init.sh，记得要提前安装openssh-server(apt-get install openssh-server)，应该默认安装好了;")])]),s._v(" "),n("li",[n("p",[s._v("下次开机将自动启动wsl，并运行着ssh的进程，任务管理器中可以看到如下图内容。")]),s._v(" "),n("p",[s._v("此时，可以使用xshell等连接localhost，可以使用密码或密钥连接，方式同linux，这里不予累述。")]),s._v(" "),n("p",[n("img",{attrs:{src:"https://static.saintic.com/EauDouce/blog/201804271004293550.png",alt:"p"}})])])]),s._v(" "),n("h4",{attrs:{id:"贰、代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#贰、代码"}},[s._v("#")]),s._v(" "),n("strong",[s._v("贰、代码")])]),s._v(" "),n("p",[s._v("1. startWSL.vbs")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('Set ws = WScript.CreateObject("WScript.Shell")\ncmd = "C:\\Windows\\System32\\bash.exe -c ""bash /init.sh"""\n\'运行命令不显示cmd窗口\nws.Run cmd, 0, false\nSet ws = Nothing\nWScript.quit\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("2. init.sh")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('#!/bin/bash\npn=$(ps aux|grep -v grep|grep sshd|wc -l)\n[ -d /var/run/sshd ] || mkdir /var/run/sshd\nchmod 744 /var/run/sshd\nif [ "${pn}" != "0" ]; then\n    pid=$(ps aux|grep -v grep|grep /usr/sbin/sshd|awk \'{print $2}\')\n    kill $pid\nfi\n/usr/sbin/sshd -D\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);