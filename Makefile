.PHONY: help

help:
	@echo "  make build  - Compile and generate html file"
	@echo "  make dev    - Run dev server"

build:
	@hugo

dev:
	@echo Starting service...
	@hugo server --minify -w

theme:
	git submodule update --init --recursive

push:
	git add . && git ci -m 'update post' && git push
