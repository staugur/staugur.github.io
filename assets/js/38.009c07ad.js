(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{518:function(s,t,n){"use strict";n.r(t);var e=n(4),a=Object(e.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[s._v("使用Python计算Linux Crontab定时任务下次运行时间，直接上代码：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('#coding:utf8\n\nimport croniter, datetime, time\n\ndef datetime_to_timestamp(timestring, format="%Y-%m-%d %H:%M:%S"):\n    """ 将普通时间格式转换为时间戳(10位), 形如 \'2016-05-05 20:28:54\'，由format指定 """\n    try:\n        # 转换成时间数组\n        timeArray = time.strptime(timestring, format)\n    except Exception:\n        raise\n    else:\n        # 转换成10位时间戳\n        return int(time.mktime(timeArray))\n\ndef get_current_timestamp():\n    """ 获取本地当前时间戳(10位): Unix timestamp：是从1970年1月1日（UTC/GMT的午夜）开始所经过的秒数，不考虑闰秒 """\n    return int(time.mktime(datetime.datetime.now().timetuple()))\n\ndef timestamp_after_timestamp(timestamp=None, seconds=0, minutes=0, hours=0, days=0):\n    """ 给定时间戳(10位),计算该时间戳之后多少秒、分钟、小时、天的时间戳(本地时间) """\n    # 1. 默认时间戳为当前时间\n    timestamp = get_current_timestamp() if timestamp is None else timestamp\n    # 2. 先转换为datetime\n    d1 = datetime.datetime.fromtimestamp(timestamp)\n    # 3. 根据相关时间得到datetime对象并相加给定时间戳的时间\n    d2 = d1 + datetime.timedelta(seconds=int(seconds), minutes=int(minutes), hours=int(hours), days=int(days))\n    # 4. 返回某时间后的时间戳\n    return int(time.mktime(d2.timetuple()))\n\n\ndef timestamp_datetime(timestamp, format=\'%Y-%m-%d %H:%M:%S\'):\n    """ 将时间戳(10位)转换为可读性的时间 """\n    # timestamp为传入的值为时间戳(10位整数)，如：1332888820\n    timestamp = time.localtime(timestamp)\n    # 经过localtime转换后变成\n    ## time.struct_time(tm_year=2012, tm_mon=3, tm_mday=28, tm_hour=6, tm_min=53, tm_sec=40, tm_wday=2, tm_yday=88, tm_isdst=0)\n    # 最后再经过strftime函数转换为正常日期格式。\n    return time.strftime(format, timestamp)\n\ndef CrontabRunNextTime(sched, timeFormat="%Y-%m-%d %H:%M", queryTimes=1):\n    """计算定时任务下次运行时间\n    sched str: 定时任务时间表达式\n    timeFormat str: 格式为"%Y-%m-%d %H:%M"\n    queryTimes int: 查询下次运行次数\n    """\n    try:\n        now = datetime.datetime.now()\n    except ValueError:\n        raise\n    else:\n        # 以当前时间为基准开始计算\n        cron = croniter.croniter(sched, now)\n        return [ cron.get_next(datetime.datetime).strftime(timeFormat) for i in range(queryTimes) ]\n\ndef CrontabRunTime(sched, ctime, timeFormat="%Y-%m-%d %H:%M"):\n    """计算定时任务运行次数\n    sched str: 定时任务时间表达式\n    ctime str: 定时任务创建的时间，与timeFormat格式对应\n    timeFormat str: 格式为"%Y-%m-%d %H:%M"\n    """\n    try:\n        ctimeStrp = datetime.datetime.strptime(ctime, timeFormat)\n    except ValueError:\n        raise\n    else:\n        # 根据定时任务创建时间开始计算\n        cron = croniter.croniter(sched, ctimeStrp)\n        now = get_current_timestamp()\n        num = 0\n        while 1:\n            timestring = cron.get_next(datetime.datetime).strftime(timeFormat)\n            timestamp = datetime_to_timestamp(timestring, "%Y-%m-%d %H:%M")\n            if timestamp > now:\n                break\n            else:\n                num += 1\n        return num\n            \nsched="* */6 * * *"\nctime="2017-08-16 15:24"\nprint CrontabRunNextTime(sched)\nprint CrontabRunTime(sched, ctime)\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br"),n("span",{staticClass:"line-number"},[s._v("58")]),n("br"),n("span",{staticClass:"line-number"},[s._v("59")]),n("br"),n("span",{staticClass:"line-number"},[s._v("60")]),n("br"),n("span",{staticClass:"line-number"},[s._v("61")]),n("br"),n("span",{staticClass:"line-number"},[s._v("62")]),n("br"),n("span",{staticClass:"line-number"},[s._v("63")]),n("br"),n("span",{staticClass:"line-number"},[s._v("64")]),n("br"),n("span",{staticClass:"line-number"},[s._v("65")]),n("br"),n("span",{staticClass:"line-number"},[s._v("66")]),n("br"),n("span",{staticClass:"line-number"},[s._v("67")]),n("br"),n("span",{staticClass:"line-number"},[s._v("68")]),n("br"),n("span",{staticClass:"line-number"},[s._v("69")]),n("br"),n("span",{staticClass:"line-number"},[s._v("70")]),n("br"),n("span",{staticClass:"line-number"},[s._v("71")]),n("br"),n("span",{staticClass:"line-number"},[s._v("72")]),n("br"),n("span",{staticClass:"line-number"},[s._v("73")]),n("br"),n("span",{staticClass:"line-number"},[s._v("74")]),n("br"),n("span",{staticClass:"line-number"},[s._v("75")]),n("br"),n("span",{staticClass:"line-number"},[s._v("76")]),n("br"),n("span",{staticClass:"line-number"},[s._v("77")]),n("br"),n("span",{staticClass:"line-number"},[s._v("78")]),n("br"),n("span",{staticClass:"line-number"},[s._v("79")]),n("br"),n("span",{staticClass:"line-number"},[s._v("80")]),n("br"),n("span",{staticClass:"line-number"},[s._v("81")]),n("br"),n("span",{staticClass:"line-number"},[s._v("82")]),n("br"),n("span",{staticClass:"line-number"},[s._v("83")]),n("br")])]),n("p",[s._v("使用方法：")]),s._v(" "),n("p",[s._v('CrontabRunNextTime("*/5 * * * *", queryTimes=3)')]),s._v(" "),n("p",[s._v("输出：")]),s._v(" "),n("p",[s._v("['2017-09-15 16:25', '2017-09-15 16:30', '2017-09-15 16:35']")]),s._v(" "),n("p",[s._v("参考链接："),n("a",{attrs:{href:"https://ask.helplib.com/1573434",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://ask.helplib.com/1573434"),n("OutboundLink")],1)]),s._v(" "),n("p",[s._v("开放接口："),n("a",{attrs:{href:"https://open.saintic.com/#%E5%AE%9A%E6%97%B6%E4%BB%BB%E5%8A%A1%E6%9F%A5%E8%AF%A2",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://open.saintic.com/#定时任务查询"),n("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=a.exports}}]);