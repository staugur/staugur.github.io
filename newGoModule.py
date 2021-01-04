#!/usr/bin/env python

from sys import argv, version_info, exit
from os import makedirs
from os.path import isdir, abspath, dirname, join

PY2 = version_info[0] == 2
tpl = """<!DOCTYPE html>
<html>
<head>
    <meta title="tcw.im/{name}">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta name="go-import" content="tcw.im/{name} git https://github.com/staugur/{pkg}">
    <meta http-equiv="refresh" content="0; url=https://pkg.go.dev/tcw.im/{name}">
</head>
<body>
    Redirecting to docs at <a href="https://pkg.go.dev/tcw.im/{name}">pkg.go.dev/tcw.im/{name}</a>...
</body>
</html>
"""

if __name__ == "__main__":
    try:
        name = argv[1]
    except IndexError:
        print("usage: {} go-module-name".format(argv[0]))
        exit(1)
    try:
        pkg = argv[2]
    except IndexError:
        pkg = name
    pub = join(dirname(abspath(__file__)), ".vuepress", "public", name)
    print(tpl.format(name=name, pkg=pkg))
    try:
        raw_input() if PY2 else input()
    except KeyboardInterrupt:
        pass
    else:
        if not isdir(pub):
            makedirs(pub)
        with open(join(pub, "index.html"), "w") as fp:
            fp.write(tpl.format(name=name, pkg=pkg))
