(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{535:function(s,n,e){"use strict";e.r(n);var t=e(4),a=Object(t.a)({},(function(){var s=this,n=s.$createElement,e=s._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("blockquote",[e("p",[s._v("关于python setup.py文件的编写技巧")])]),s._v(" "),e("p",[s._v("环境：最新版setuptools，初步认识setuptools可以参考"),e("a",{attrs:{href:"http://blog.konghy.cn/2018/04/29/setup-dot-py/",target:"_blank",rel:"noopener noreferrer"}},[s._v("这篇文章"),e("OutboundLink")],1)]),s._v(" "),e("p",[e("strong",[s._v("1. 自定义命令")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('from setuptools import setup, Command\n\nclass MyCommand(Command):\n    description = "Description of the command"\n    user_options = []\n\n    # This method must be implemented\n    def initialize_options(self):\n        pass\n\n    # This method must be implemented\n    def finalize_options(self):\n        pass\n\n    def run(self):\n        print("My command runs!")\n\nsetup(..., cmdclass={\n    #"命令": 继承类\n    "mycommand": MyCommand\n})\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br")])]),e("p",[s._v("格式大概是上面这样了，这是一个没有自定义命令子选项的最简单例子，下面是一个稍微复杂的例子，它的作用是将包发布到pypi：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('import os\nfrom setuptools import setup, Command\n\nclass PublishCommand(Command):\n\n    description = "Publish a new version to pypi"\n\n    user_options = [\n        # The format is (long option, short option, description).\n        ("test", None, "Publish to test.pypi.org"),\n        ("release", None, "Publish to pypi.org"),\n    ]\n\n    def initialize_options(self):\n        """Set default values for options."""\n        self.test = False\n        self.release = False\n\n    def finalize_options(self):\n        """Post-process options."""\n        if self.test:\n            print("V%s will publish to the test.pypi.org" % version)\n        elif self.release:\n            print("V%s will publish to the pypi.org" % version)\n\n    def run(self):\n        """Run command."""\n        os.system("pip install -U setuptools twine wheel")\n        os.system("rm -rf build/ dist/ Flask_PluginKit.egg-info/")\n        os.system("python setup.py sdist bdist_wheel")\n        if self.test:\n            os.system("twine upload --repository-url https://test.pypi.org/legacy/ dist/*")\n        elif self.release:\n            os.system("twine upload dist/*")\n        os.system("rm -rf build/ dist/ Flask_PluginKit.egg-info/")\n        if self.test:\n            print("V%s publish to the test.pypi.org successfully" % version)\n        elif self.release:\n            print("V%s publish to the pypi.org successfully" % version)\n        exit()\n\nsetup(..., cmdclass={\n    \'publish\': PublishCommand,\n})\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br"),e("span",{staticClass:"line-number"},[s._v("38")]),e("br"),e("span",{staticClass:"line-number"},[s._v("39")]),e("br"),e("span",{staticClass:"line-number"},[s._v("40")]),e("br"),e("span",{staticClass:"line-number"},[s._v("41")]),e("br"),e("span",{staticClass:"line-number"},[s._v("42")]),e("br"),e("span",{staticClass:"line-number"},[s._v("43")]),e("br"),e("span",{staticClass:"line-number"},[s._v("44")]),e("br")])]),e("p",[s._v("这个发布命令使用方法是：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("$ python setup.py publish --help\nCommon commands: (see '--help-commands' for more)\n\n  setup.py build      will build the package underneath 'build/'\n  setup.py install    will install the package\n\nGlobal options:\n  --verbose (-v)  run verbosely (default)\n  --quiet (-q)    run quietly (turns verbosity off)\n  --dry-run (-n)  don't actually do anything\n  --help (-h)     show detailed help message\n  --no-user-cfg   ignore pydistutils.cfg in your home directory\n\nOptions for 'PublishCommand' command:\n  --test     Publish to test.pypi.org\n  --release  Publish to pypi.org\n\nusage: setup.py [global_opts] cmd1 [cmd1_opts] [cmd2 [cmd2_opts] ...]\n   or: setup.py --help [cmd1 cmd2 ...]\n   or: setup.py --help-commands\n   or: setup.py cmd --help\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br")])]),e("p",[s._v("解释：参考代码和帮助，publish定义了两个子选项，test和release，后面run根据判断子选项值来执行上传到不同环境的命令，所以执行"),e("code",[s._v("python setup.py publish --test")]),s._v("可以发布到python官方测试仓库test.pypi.org，执行"),e("code",[s._v("python setup.py publish --release")]),s._v("可以发布到python官方正式仓库pypi.org！")])])}),[],!1,null,null,null);n.default=a.exports}}]);