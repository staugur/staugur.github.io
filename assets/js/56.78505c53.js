(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{538:function(t,p,e){"use strict";e.r(p);var i=e(4),s=Object(i.a)({},(function(){var t=this,p=t.$createElement,e=t._self._c||p;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("此sphinx可不是彼sphinx，此篇是指生成文档的工具，是python下最流行的文档生成工具，python官方文档即是它生成，官方网站是"),e("a",{staticStyle:{"background-color":"rgb(255, 255, 255)"},attrs:{href:"http://www.sphinx-doc.org",target:"_blank"}},[t._v("http://www.sphinx-doc.org")]),t._v("，这里是一个中文翻译站："),e("a",{staticStyle:{"background-color":"rgb(255, 255, 255)"},attrs:{href:"https://zh-sphinx-doc.readthedocs.io",target:"_blank"}},[t._v("https://zh-sphinx-doc.readthedocs.io")])]),e("p",[t._v("readthedocs.org(下文简称rtd)是一个基于sphinx、mkdocs的在线文档托管网站，支持git、subversion等版本控制系统，并提供多版本、翻译、下载文档等，颇受欢迎。")]),e("p",[t._v("此篇文章记录了本人使用sphinx和rtd的经验，以"),e("a",{attrs:{href:"https://github.com/staugur/Flask-PluginKit",target:"_blank"}},[t._v("Flask-PluginKit")]),t._v("为例，文档地址是"),e("a",{staticStyle:{"background-color":"rgb(255, 255, 255)"},attrs:{href:"https://flask-pluginkit.readthedocs.io",target:"_blank"}},[t._v("https://flask-pluginkit.readthedocs.io")])]),e("p",[t._v("一、新项目整体流程")]),e("p",[t._v("0. 说在前面")]),e("p",[t._v("    $project - 项目名可见名，比如Flask-PluginKit，$package - 项目包名，比如flask_pluginkit")]),e("p",[t._v("    $author - 作者")]),e("p",[t._v("    $src - reStructuredText源文档目录")]),e("p",[t._v("1. 安装依赖")]),e("p",[t._v("    "),e("code",[t._v("pip install sphinx")])]),e("p",[t._v("2. 初始化项目文档")]),e("p",[t._v("    使用sphinx-quickstart，网上很多例子，这里说一个无交互，按例子：")]),e("p",[t._v("    "),e("code",[t._v("sphinx-quickstart -q -p $project -a $author --ext-autodoc --ext-viewcode --no-makefile --no-batchfile $src")])]),e("p",[t._v("3. 从项目中提取接口文档")]),e("p",[t._v("    "),e("code",[t._v("sphinx-apidoc -d 2 -f --ext-autodoc --ext-viewcode --private -o $src $package")])]),e("p",[t._v("4. 生成html文件")]),e("p",[t._v("    第三步中，根据包中函数、类等注释会生成.rst文件，你可以编写组织它们，然后生成html文件：")]),e("p",[t._v("    "),e("code",[t._v("cd $src && sphinx-build -b html . _build/html")])]),e("p",[t._v("5. 说在后面")]),e("p",[t._v("    修改过rst文件后可以多次生成html文件，默认只有更新过的文件才会重新生成html。生成的html静态文件可以放到github pages或任何支持静态访问的web服务器中。")]),e("p",[t._v("二、翻译")]),e("p",[t._v("sphinx支持你给文档添加翻译以支持国际化功能，使用工具sphinx-intl，安装它："),e("code",[t._v("pip install sphinx-intl")])]),e("p",[t._v("详细使用可以参考这篇文章，以下简单流程是将中文翻译成英文的。")]),e("p",[t._v("1. gettext-初始化翻译")]),e("p",[t._v("    "),e("code",[t._v("cd $src && sphinx-build -b gettext . _build/locale")])]),e("p",[t._v("2. 更新翻译")]),e("p",[t._v("    "),e("code",[t._v("cd $src && sphinx-intl update -p _build/locale/ -l en")])]),e("p",[t._v("3. 生成翻译文档")]),e("p",[t._v("    "),e("code",[t._v("cd $src && sphinx-build -D language=en -b html . _build/html_en")])]),e("p",[t._v("三、托管")]),e("p",[t._v("sphinx生成接口文档+github托管源代码+rtd在线托管文档，简单爽的不要不要的，提交后自动构建并生成文档，美滋滋。")]),e("p",[t._v("使用github登录可以选择项目导入，自动添加webhook，使用不介绍，这里提一个翻译的经验。")]),e("p",[t._v("1. rtd同一个项目同时支持多种翻译")]),e("p",[t._v("    rtd的支持翻译，但是需要添加某个项目为翻译版本，比如著名的requests，就有很多翻译，每个翻译是一个git仓库，都需要维护。")]),e("p",[t._v("    但是有时候我们就一个项目不想那么麻烦，而且一个项目使用sphinx-intl添加了翻译支持，那么怎么处理呢？")]),e("p",[t._v("    其实简单，rtb导入一个项目，选择手动导入，设置不同名称、相同代码库地址，然后文档主项目设置此项目为翻译版本即可，嗯，点到即止，参考上面Flask-PluginKit的文档地址。")]),e("p",[e("br")]),e("p",[e("br")])])}),[],!1,null,null,null);p.default=s.exports}}]);