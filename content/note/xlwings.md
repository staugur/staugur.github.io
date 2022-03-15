---
title: "xlwings操作Excel"
date: 2021-08-16T14:23:13+08:00
tags: ["python"]
categories: ["笔记"]
---

笔记中python版本3.9，使用xlwings模块操作Excel。

### 概念

详细概念可以从引用文章-Python操作工作簿查看。

据我理解，App可以认为是打开的Excel进程，可能是空的，能新建、打开文件（工作簿）。

一般流程是：打开工作簿（Book）->定位到表（Sheet）->操作数据（Range）

### 打开工作簿

可以先构建一个App（打开Excel进程），
或者直接Book打开工作簿（等同于双击文件，同时生成了App）。

```python
import xlwings as xw

app = xw.App(visible=visible, add_book=False) # visible 是否显示Excel界面
app.display_alerts = False  # 不显示Excel消息框
app.screen_updating = False  # 关闭屏幕更新,可加快宏的执行速度，不过某些可能有问题需要用True

app.books.open("filename")
```

或者直接打开：
```python
import xlwings as xw

xw.Book("filename")
```

### 工作表

上述打开工作簿（类型是Book），可以使用 `sheets` 属性查看有哪些表。

获取表后再操作数据。

```python
import xlwings as xw

wb = xw.Book("filename")
sht = wb.sheets[0]

### 获取行数方式
# 返回2个元素的元组
sht.used_range.shape
# 行数，等于元组第一个
sht.last_cell.row
# 列数，等于元组第二个
sht.last_cell.column
```

#### 设置单元格大小

```python
sht.autofit()    # 自动调整单元格大小。注：此方法是在单元格写入内容后，再使用，才有效。
sht.range(1,4).column_width = 5    # 设置第4列 列宽。（1,4）为第1行第4列的单元格
sht.range(1,4).row_height = 20     # 设置第1行 行高

sht.range('A1').columns.autofit()  # 设置区域自动列宽
sht.range('A1').rows.autofit()  # 设置区域自动行高
```

#### 其他可能用到的操记录

1. 加粗
```python
sht.range("A1:A10").api.Font.Bold=True
```

2. 合并、拆分单元格
```python
sht.range("A1:A10").api.Merge()
sht.range("A1:A10").api.UnMerge()
```

### 保存和退出

工作簿（Book）有一个close方法不保存数据并关闭工作簿。

App有一个quit方法不保存数据并关闭进程。

如果更改了工作表，要使用工作簿对象的save方法先保存数据，之后再close、quit。

参照打开方式，如果先构建app：

```python
import xlwings as xw

app = xw.App(visible=False, add_book=False)
wb = app.books.open("filename")
sht = wb.sheets[0]
# 操作了数据
wb.save()
wb.close()
# 没操作数据，可以不用save和close，建议直接使用 app.quit() 退出
```

如果直接打开工作簿：
```python
import xlwings as xw

wb = xw.Book("filename")
sht = wb.sheets[0]
# 操作了数据
wb.save()
wb.close()
```

#### 引用:

- [xlwings Document](https://docs.xlwings.org/zh_CN/latest/)
- [Python操作工作簿&表](https://zhuanlan.zhihu.com/p/120415076)
- [xlwings入门攻略](https://juejin.cn/post/6941349529211895821)

<br>

<center>  ·End·  </center>
