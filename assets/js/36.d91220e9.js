(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{516:function(t,a,e){"use strict";e.r(a);var s=e(4),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("blockquote",[e("p",[t._v("请转到"),e("a",{attrs:{href:"https://blog.saintic.com/blog/264.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://blog.saintic.com/blog/264.html"),e("OutboundLink")],1),t._v("查看服务器命令审计。")])]),t._v(" "),e("p",[t._v("linux命令审计功能，CentOS7下测试，记录所有用户的命令操作。")]),t._v(" "),e("p",[t._v("1. 准备")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("touch /var/log/myaudit.log\nchmod a+w /var/log/myaudit.log\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("p",[t._v("2. 根据变量写日志")]),t._v(" "),e("p",[t._v("修改/etc/profile，追加以下代码，重新登录生效。")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('HISTTIMEFORMAT="%Y/%m/%d %T  "\nHISTORY_FILE=/var/log/myaudit.log\nreadonly PROMPT_COMMAND=\'{ date "+%y-%m-%d %T ##### $(who am i |awk "{print \\$1\\" \\"\\$2\\" \\"\\$5}") #### $(pwd) #### $(history 1 | { read x cmd; echo "$cmd"; })"; } >> $HISTORY_FILE\'\nexport HISTTIMEFORMAT HISTORY_FILE PROMPT_COMMAND\n')])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br")])]),e("p",[t._v("效果如下图，")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://static.saintic.com/EauDouce/blog/201708201816342539.png",alt:"QQ截图20170820181608"}})])])}),[],!1,null,null,null);a.default=n.exports}}]);