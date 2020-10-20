(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{543:function(s,t,a){"use strict";a.r(t);var l=a(4),n=Object(l.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("    本文是关于自己写文档（不局限于接口文档）时的一些记录，一条流程，即：文档源码托管在github->文档编写用vscode编辑器->采用sphinx+rst标记语言->发布到rtd。")]),s._v(" "),a("p",[s._v("目录")]),s._v(" "),a("ul",{staticClass:"markdown-toc-list"},[a("li",[a("a",{staticClass:"toc-level-3",attrs:{href:"#1. GitHub",level:"3"}},[s._v("1. GitHub")])]),a("li",[a("a",{staticClass:"toc-level-3",attrs:{href:"#2. VSCode",level:"3"}},[s._v("2. VSCode")])]),a("li",[a("a",{staticClass:"toc-level-3",attrs:{href:"#3. Sphinx+RST",level:"3"}},[s._v("3. Sphinx+RST")])]),a("li",[a("a",{staticClass:"toc-level-3",attrs:{href:"#4. ReadTheDocs",level:"3"}},[s._v("4. ReadTheDocs")])]),a("li",[a("a",{staticClass:"toc-level-3",attrs:{href:"#END",level:"3"}},[s._v("END")])])]),a("p",[s._v("下面是每部分的概述。")]),a("h3",{attrs:{id:"h3-1-github"}},[a("a",{staticClass:"reference-link",attrs:{name:"1. GitHub"}}),a("span",{staticClass:"header-link octicon octicon-link"}),s._v("1. GitHub")]),a("p",[s._v("代码托管平台，龙头般的存在，此用于托管文档源码，官网是："),a("a",{attrs:{href:"https://github.com"}},[s._v("https://github.com")])]),s._v(" "),a("p",[a("strong",[s._v("    1.1 新建仓库")])]),s._v(" "),a("p",[s._v("        选择.gitignore并通过README.md初始化。")]),s._v(" "),a("p",[a("strong",[s._v("    1.2 检出或克隆仓库")])]),s._v(" "),a("p",[s._v("        可以使用svn检出或git克隆仓库到本地，看个人喜好，墙裂推荐git！")]),s._v(" "),a("h3",{attrs:{id:"h3-2-vscode"}},[a("a",{staticClass:"reference-link",attrs:{name:"2. VSCode"}}),a("span",{staticClass:"header-link octicon octicon-link"}),s._v("2. VSCode")]),a("p",[s._v("Visual Studio Code，微软力作，真心好用，用过的人都知道，官网是："),a("a",{attrs:{href:"https://code.visualstudio.com"}},[s._v("https://code.visualstudio.com")])]),s._v(" "),a("p",[s._v("主要记录下我常用的插件和配置：")]),s._v(" "),a("p",[a("strong",[s._v("    2.1 Chinese (Simplified) Language Pack for Visual Studio Code")])]),s._v(" "),a("p",[s._v("        额，不用说，简体中文语言包")]),s._v(" "),a("p",[a("strong",[s._v("    2.2 Python")])]),s._v(" "),a("p",[s._v("        支持很多中编程语言，按需安装，Python的话顺道也安装Anaconda插件吧。")]),s._v(" "),a("p",[a("strong",[s._v("    2.3 Shell Launcher")])]),s._v(" "),a("p",[s._v("        用以配置启动多种终端的，比如powershell、cmd、wsl bash、git bash等。")]),s._v(" "),a("p",[s._v("        多说一句，当时终端这个问题折腾太久了，我需要python、git等命令，可是又想用wsl里的，最后也没一个完美的办法，只得安装了Git for Windows，它带了一个git-bash使得可以支持windows的程序，又能作为默认终端虽比不上wsl可也比cmd强太多。后来用这个插件，配合快捷键开启多种类型终端。")]),s._v(" "),a("p",[a("strong",[s._v("    2.4 Windows opacity")])]),s._v(" "),a("p",[s._v("        vscode透明度的插件")]),s._v(" "),a("p",[a("strong",[s._v("    2.5 backgound-cover")])]),s._v(" "),a("p",[s._v("        vscode背景图插件，可配合2.4中透明度插件食用。")]),s._v(" "),a("p",[a("strong",[s._v("    2.6 Bracket Pair Colorizer")])]),s._v(" "),a("p",[s._v("        小括号、大括号、中括号等等颜色高亮、对称显示")]),s._v(" "),a("p",[a("strong",[s._v("    2.7 Indent-Rainbow")])]),s._v(" "),a("p",[s._v("        缩进浅颜色显示。")]),s._v(" "),a("p",[a("strong",[s._v("    2.8 REST Client")])]),s._v(" "),a("p",[s._v("        可以在vscode中发起API请求的插件。")]),s._v(" "),a("p",[a("strong",[s._v("    2.9 reStructuredText")])]),s._v(" "),a("p",[s._v("        支持rst标记语言的插件。")]),s._v(" "),a("p",[a("strong",[s._v("    2.10 Settings Sync")])]),s._v(" "),a("p",[s._v("        很实在的插件，把vscode的配置、插件等信息上传到github gist，或读取信息更新vscode，可以说实现了一处上传、多处同步的效果，避免了重复性配置vscode！")]),a("p",[s._v("   "),a("b",[s._v(" 2.12 remote ssl")]),a("br")]),a("p",[s._v("        这个扩展插件能让vscode在wsl中运行。")]),a("p",[s._v("        - 打开windows上的vscode，安装remote ssl扩展")]),a("p",[s._v("        - 在windows上输入wsl命令调起wsl终端，在wsl环境里随便找个目录输入 "),a("code",[a("b",[s._v("code . ")])]),s._v("命令（注意有个点，而这个code命令就是vscode安装目录/bin/code，如果安装vscode时将命令添加到PATH中，这个命令可以直接使用，否则请使用绝对路径。）")]),a("p",[s._v("        - 上述命令第一次使用会很快安装好所需组件，并在vscode通知区有提示信息，完成后，在底部栏左下角会有wsl的提示字样（可能要重启下vscode）")]),a("p",[s._v("        - 以后打开vscode就会自动连接到wsl中，你的扩展需要重新安装下（算是可以从原有扩展中一键安装）")]),a("p",[s._v("        - 更多参考"),a("a",{attrs:{href:"https://code.visualstudio.com/docs/remote/wsl",target:"_blank"}},[s._v("官方文档")])]),a("p",[a("b",[s._v("配置：")]),s._v("顶部[菜单栏、LOGO、关闭按钮等]所在的背景颜色及底部[状态等]所在背景颜色的配置，如下示例底部是白底透明、顶部是护眼的绿色：")]),a("pre",{staticStyle:{"max-width":"100%"}},[a("code",{staticClass:"json hljs",attrs:{codemark:"1"}},[s._v("{\n    "),a("span",{staticClass:"hljs-attr"},[s._v('"other"')]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v('"..."')]),s._v(",\n    "),a("span",{staticClass:"hljs-attr"},[s._v('"workbench.colorCustomizations"')]),s._v(": {\n        "),a("span",{staticClass:"hljs-attr"},[s._v('"editor.selectionBackground"')]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v('"#f00"')]),s._v(",\n        "),a("span",{staticClass:"hljs-attr"},[s._v('"[Quiet Light]"')]),s._v(": {\n            "),a("span",{staticClass:"hljs-attr"},[s._v('"statusBar.background"')]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v('"#ffffff00"')]),s._v(",\n            "),a("span",{staticClass:"hljs-attr"},[s._v('"statusBar.foreground"')]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v('"#616161"')]),s._v(",\n            "),a("span",{staticClass:"hljs-attr"},[s._v('"titleBar.activeBackground"')]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v('"#19CAAD"')]),s._v(",\n            "),a("span",{staticClass:"hljs-attr"},[s._v('"titleBar.activeForeground"')]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v('"#191919"')]),s._v(",\n        },\n    },\n    "),a("span",{staticClass:"hljs-attr"},[s._v('"other"')]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v('"..."')]),s._v("\n}")])]),a("p",[s._v(" ")]),s._v(" "),a("p",[a("strong",[s._v("其他的主题、图标等网上很多样例，不再累述，这里贴一个我的截图和配置吧")])]),a("p",[a("img",{staticStyle:{"max-width":"100%",height:"350px"},attrs:{src:"https://static.saintic.com/EauDouce/blog/201909121126002159.png"}}),a("b",[a("br"),a("br")])]),s._v(" "),a("pre",[a("code",{staticClass:"lang-json hljs",attrs:{codemark:"1"}},[s._v("{\n    "),a("span",{staticClass:"hljs-attr"},[s._v('"workbench.startupEditor"')]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v('"newUntitledFile"')]),s._v(",\n    "),a("span",{staticClass:"hljs-attr"},[s._v('"workbench.colorTheme"')]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v('"Quiet Light"')]),s._v(",\n    "),a("span",{staticClass:"hljs-attr"},[s._v('"files.exclude"')]),s._v(": {\n        "),a("span",{staticClass:"hljs-attr"},[s._v('"**/__pycache__"')]),s._v(": "),a("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v(",\n        "),a("span",{staticClass:"hljs-attr"},[s._v('"**/.eggs"')]),s._v(": "),a("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v(",\n        "),a("span",{staticClass:"hljs-attr"},[s._v('"**/*.egg-info"')]),s._v(": "),a("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v(",\n        "),a("span",{staticClass:"hljs-attr"},[s._v('"**/*.pyc"')]),s._v(": "),a("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v(",\n        "),a("span",{staticClass:"hljs-attr"},[s._v('"**/*.pyo"')]),s._v(": "),a("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v("\n    },\n    "),a("span",{staticClass:"hljs-attr"},[s._v('"workbench.tree.indent"')]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("12")]),s._v(",\n    "),a("span",{staticClass:"hljs-attr"},[s._v('"git.enableCommitSigning"')]),s._v(": "),a("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v(",\n    "),a("span",{staticClass:"hljs-attr"},[s._v('"git.path"')]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v('"git.exe"')]),s._v(",\n    "),a("span",{staticClass:"hljs-attr"},[s._v('"git.enabled"')]),s._v(": "),a("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v(",\n    "),a("span",{staticClass:"hljs-attr"},[s._v('"python.pythonPath"')]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v('"python.exe"')]),s._v(",\n    "),a("span",{staticClass:"hljs-attr"},[s._v('"python.linting.flake8Enabled"')]),s._v(": "),a("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v(",\n    "),a("span",{staticClass:"hljs-attr"},[s._v('"python.analysis.logLevel"')]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v('"Warning"')]),s._v(",\n    "),a("span",{staticClass:"hljs-attr"},[s._v('"python.globalModuleInstallation"')]),s._v(": "),a("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v(",\n    "),a("span",{staticClass:"hljs-attr"},[s._v('"python.linting.pep8Enabled"')]),s._v(": "),a("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v(",\n    "),a("span",{staticClass:"hljs-attr"},[s._v('"terminal.external.windowsExec"')]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v('"C:\\\\Git\\\\git-bash.exe"')]),s._v(",\n    "),a("span",{staticClass:"hljs-attr"},[s._v('"terminal.integrated.shell.windows"')]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v('"C:\\\\WINDOWS\\\\System32\\\\wsl.exe"')]),s._v(",\n    "),a("span",{staticClass:"hljs-attr"},[s._v('"explorer.confirmDelete"')]),s._v(": "),a("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v(",\n    "),a("span",{staticClass:"hljs-attr"},[s._v('"files.encoding"')]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v('"utf8"')]),s._v(",\n    "),a("span",{staticClass:"hljs-attr"},[s._v('"files.eol"')]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v('"\\n"')]),s._v(",\n    "),a("span",{staticClass:"hljs-attr"},[s._v('"sync.gist"')]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v('"Setting Sync要求的github token for gist"')]),s._v(",\n    "),a("span",{staticClass:"hljs-attr"},[s._v('"backgroundCover.enabled"')]),s._v(": "),a("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v(",\n    "),a("span",{staticClass:"hljs-attr"},[s._v('"backgroundCover.imagePath"')]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v('"C:/VSCodeBgImg/3.png"')]),s._v(",\n    "),a("span",{staticClass:"hljs-attr"},[s._v('"backgroundCover.opacity"')]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("0.5")]),s._v(",\n    "),a("span",{staticClass:"hljs-attr"},[s._v('"shellLauncher.shells.windows"')]),s._v(": [\n        {\n            "),a("span",{staticClass:"hljs-attr"},[s._v('"shell"')]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v('"C:\\\\Windows\\\\System32\\\\cmd.exe"')]),s._v(",\n            "),a("span",{staticClass:"hljs-attr"},[s._v('"label"')]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v('"cmd"')]),s._v("\n        },\n        {\n            "),a("span",{staticClass:"hljs-attr"},[s._v('"shell"')]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v('"C:\\\\Windows\\\\System32\\\\WindowsPowerShell\\\\v1.0\\\\powershell.exe"')]),s._v(",\n            "),a("span",{staticClass:"hljs-attr"},[s._v('"label"')]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v('"PowerShell"')]),s._v("\n        },\n        {\n            "),a("span",{staticClass:"hljs-attr"},[s._v('"shell"')]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v('"C:\\\\Git\\\\bin\\\\bash.exe"')]),s._v(",\n            "),a("span",{staticClass:"hljs-attr"},[s._v('"label"')]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v('"Git bash"')]),s._v("\n        },\n        {\n            "),a("span",{staticClass:"hljs-attr"},[s._v('"shell"')]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v('"C:\\\\Windows\\\\System32\\\\bash.exe"')]),s._v(",\n            "),a("span",{staticClass:"hljs-attr"},[s._v('"label"')]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v('"WSL Bash"')]),s._v("\n        }\n    ],\n    "),a("span",{staticClass:"hljs-attr"},[s._v('"breadcrumbs.enabled"')]),s._v(": "),a("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v(",\n    "),a("span",{staticClass:"hljs-attr"},[s._v('"workbench.statusBar.feedback.visible"')]),s._v(": "),a("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v(",\n    "),a("span",{staticClass:"hljs-attr"},[s._v('"workbench.tips.enabled"')]),s._v(": "),a("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v(",\n    "),a("span",{staticClass:"hljs-attr"},[s._v('"extensions.closeExtensionDetailsOnViewChange"')]),s._v(": "),a("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v(",\n    "),a("span",{staticClass:"hljs-attr"},[s._v('"window.zoomLevel"')]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(",\n    "),a("span",{staticClass:"hljs-attr"},[s._v('"window.titleBarStyle"')]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v('"custom"')]),s._v(",\n    "),a("span",{staticClass:"hljs-attr"},[s._v('"bracketPairColorizer.forceUniqueOpeningColor"')]),s._v(": "),a("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v(",\n    "),a("span",{staticClass:"hljs-attr"},[s._v('"editor.minimap.enabled"')]),s._v(": "),a("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v(",\n    "),a("span",{staticClass:"hljs-attr"},[s._v('"editor.tabSize"')]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("4")]),s._v(",\n    "),a("span",{staticClass:"hljs-attr"},[s._v('"editor.detectIndentation"')]),s._v(": "),a("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v(",\n    "),a("span",{staticClass:"hljs-attr"},[s._v('"editor.insertSpaces"')]),s._v(": "),a("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v(",\n    "),a("span",{staticClass:"hljs-attr"},[s._v('"editor.wordWrap"')]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v('"on"')]),s._v(",\n    "),a("span",{staticClass:"hljs-attr"},[s._v('"winopacity.opacity"')]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("245")]),s._v(",\n    //设置用户选中代码段的颜色\n    "),a("span",{staticClass:"hljs-attr"},[s._v('"workbench.colorCustomizations"')]),s._v(": {\n        "),a("span",{staticClass:"hljs-attr"},[s._v('"editor.selectionBackground"')]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v('"#f00",\n')]),s._v('        "[Quiet Light]": {\n            "statusBar.background": "#ffffff00",\n            "statusBar.foreground": "#616161",\n            "titleBar.activeBackground": "#19CAAD",\n            "titleBar.activeForeground": "#191919",\n        },\n    },\n    '),a("span",{staticClass:"hljs-attr"},[s._v('"TortoiseSVN.tortoiseSVNProcExePath"')]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v('"TortoiseProc.exe"')]),s._v(",\n    "),a("span",{staticClass:"hljs-attr"},[s._v('"TortoiseSVN.autoCloseUpdateDialog"')]),s._v(": "),a("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v(",\n    "),a("span",{staticClass:"hljs-attr"},[s._v('"workbench.activityBar.visible"')]),s._v(": "),a("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v(",\n    "),a("span",{staticClass:"hljs-attr"},[s._v('"window.menuBarVisibility"')]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v('"default"')]),s._v(",\n    "),a("span",{staticClass:"hljs-attr"},[s._v('"[javascript]"')]),s._v(": {\n        "),a("span",{staticClass:"hljs-attr"},[s._v('"editor.defaultFormatter"')]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v('"HookyQR.beautify"')]),s._v("\n    },\n    "),a("span",{staticClass:"hljs-attr"},[s._v('"[html]"')]),s._v(": {\n        "),a("span",{staticClass:"hljs-attr"},[s._v('"editor.defaultFormatter"')]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v('"HookyQR.beautify"')]),s._v("\n    },\n    "),a("span",{staticClass:"hljs-attr"},[s._v('"[json]"')]),s._v(": {\n        "),a("span",{staticClass:"hljs-attr"},[s._v('"editor.defaultFormatter"')]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v('"HookyQR.beautify"')]),s._v("\n    },\n    "),a("span",{staticClass:"hljs-attr"},[s._v('"rest-client.timeoutinmilliseconds"')]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("5000")]),s._v(",\n    "),a("span",{staticClass:"hljs-attr"},[s._v('"workbench.iconTheme"')]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v('"vscode-icons"')]),s._v("\n}\n")])]),s._v(" "),a("h3",{attrs:{id:"h3-3-sphinx-rst"}},[a("a",{staticClass:"reference-link",attrs:{name:"3. Sphinx+RST"}}),a("span",{staticClass:"header-link octicon octicon-link"}),s._v("3. Sphinx+RST")]),a("p",[s._v("之前写过一个制作接口文档的记录，"),a("a",{attrs:{href:"https://blog.saintic.com/blog/263.html"}},[s._v("https://blog.saintic.com/blog/263.html")])]),s._v(" "),a("p",[s._v("不局限于接口文档，用sphinx写书也绰绰有余，基于rst并增加了许多功能，十分强大，官网是："),a("a",{attrs:{href:"http://www.sphinx-doc.org"}},[s._v("http://www.sphinx-doc.org")]),s._v("， 这里是一个中文翻译文档："),a("a",{attrs:{href:"https://zh-sphinx-doc.readthedocs.io"}},[s._v("https://zh-sphinx-doc.readthedocs.io")])]),s._v(" "),a("p",[s._v("sphinx有很多主题可选，之后要托管的rtd有一款主题挺好，sphinx_rtd_theme，文档是："),a("a",{attrs:{href:"https://sphinx-rtd-theme.readthedocs.io"}},[s._v("https://sphinx-rtd-theme.readthedocs.io")])]),s._v(" "),a("p",[s._v("此外，我在使用这款主题时，增加了一些自定义配置，关于配置的详细文档是："),a("a",{attrs:{href:"http://www.sphinx-doc.org/en/master/usage/configuration.html#options-for-html-output"}},[s._v("http://www.sphinx-doc.org/en/master/usage/configuration.html#options-for-html-output")])]),a("p",[a("strong",[s._v("3.1 自定义css")])]),s._v(" "),a("p",[s._v("通过sphinx-quickstart建立的文档项目配置文件是conf.py，自定义配置需要在这个文件中更改。")]),s._v(" "),a("p",[s._v("新增一行，比如："),a("code",[s._v("html_css_files = ['css/my.css']")]),s._v("，姑且放到 "),a("code",[s._v("html_static_path")]),s._v(" 这行后面，这个意思是引入css/my.css文件，这个文件放在html_static_path定义的目录下，一般是在 “文档项目/_static“ 下，新建css目录，创建my.css，例如：")]),s._v(" "),a("pre",[a("code",{staticClass:"lang-css hljs",attrs:{codemark:"1"}},[s._v("@"),a("span",{staticClass:"hljs-keyword"},[s._v("charset")]),s._v(" "),a("span",{staticClass:"hljs-string"},[s._v('"utf-8"')]),s._v(";\n"),a("span",{staticClass:"hljs-selector-class"},[s._v(".wy-nav-content")]),s._v(" {\n    "),a("span",{staticClass:"hljs-attribute"},[s._v("max-width")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("100%")]),s._v(" "),a("span",{staticClass:"hljs-meta"},[s._v("!important")]),s._v(";\n}\n"),a("span",{staticClass:"hljs-selector-class"},[s._v(".ethical-rtd")]),a("span",{staticClass:"hljs-selector-class"},[s._v(".ethical-dark-theme")]),s._v(" {\n    "),a("span",{staticClass:"hljs-attribute"},[s._v("display")]),s._v(":none;\n}\n")])]),s._v(" "),a("p",[s._v("示例的css用以将sphinx_rtd_theme主题的内容页右侧栏最大化、关闭左侧栏rtd显示的广告。")]),a("p",[a("strong",[s._v("3.2 自定义js")])]),s._v(" "),a("p",[s._v("类似于自定义css，配置项是"),a("code",[s._v("html_js_files = ['js/my.js']")]),s._v("，同样在"),a("code",[s._v("html_static_path")]),s._v("定义的目录下新建js目录和my.js文件，可以写你的js代码。")]),a("p",[a("strong",[s._v("3.3 logo")])]),s._v(" "),a("p",[s._v("配置项是"),a("code",[s._v("html_logo")]),s._v("，比如我的是："),a("code",[s._v("html_logo = '_static/images/logo.png'")]),s._v("，不晓得为什么还需要写_static，这个参数不是很了解，google得知的示例。")]),a("p",[a("strong",[s._v("3.4 favicon")])]),s._v(" "),a("p",[s._v("配置项是"),a("code",[s._v("html_favicon")]),s._v("，类似"),a("code",[s._v("html_logo")]),s._v("，比如"),a("code",[s._v("html_favicon = '_static/images/favicon.png'")])]),a("h3",{attrs:{id:"h3-4-readthedocs"}},[a("a",{staticClass:"reference-link",attrs:{name:"4. ReadTheDocs"}}),a("span",{staticClass:"header-link octicon octicon-link"}),s._v("4. ReadTheDocs")]),a("p",[s._v("同样可以参考之前的文章："),a("a",{attrs:{href:"https://blog.saintic.com/blog/263.html"}},[s._v("https://blog.saintic.com/blog/263.html")])]),s._v(" "),a("p",[s._v("额外提一点，关于自定义域名部分，文档是："),a("a",{attrs:{href:"https://docs.readthedocs.io/en/stable/custom_domains.html"}},[s._v("https://docs.readthedocs.io/en/stable/custom_domains.html")])]),s._v(" "),a("p",[s._v("定位到项目-管理-域，可以添加你的域名，然后CNAME解析到"),a("code",[s._v(".readthedocs.io")]),s._v("，勾选上使用HTTPS后，无需其他操作，便可以支持安全访问，极其方便！"),a("br"),a("img",{attrs:{src:"https://static.saintic.com/EauDouce/blog/201905091349349437.png",alt:""}})]),s._v(" "),a("h3",{attrs:{id:"h3-end"}},[a("a",{staticClass:"reference-link",attrs:{name:"END"}}),a("span",{staticClass:"header-link octicon octicon-link"}),s._v("END")]),a("p",[s._v("以上是个人使用记录，刚开始写RST不熟悉是很痛苦的，熟练后便能感觉到好处。")]),s._v(" "),a("p",[s._v("文章中示例仓库是："),a("a",{attrs:{href:"https://github.com/saintic/docs"}},[s._v("https://github.com/saintic/docs")])]),s._v(" "),a("p",[s._v("示例文档地址是："),a("a",{attrs:{href:"https://docs.saintic.com"}},[s._v("https://docs.saintic.com")])]),a("p",[a("br")])])}),[],!1,null,null,null);t.default=n.exports}}]);