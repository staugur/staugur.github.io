;(function() {
    //baidu autopush
    var bp = document.createElement('script')
    var curProtocol = window.location.protocol.split(':')[0]
    if (curProtocol === 'https') {
        bp.src = 'https://zz.bdstatic.com/linksubmit/push.js'
    } else {
        bp.src = 'http://push.zhanzhang.baidu.com/push.js'
    }
    var s = document.getElementsByTagName('script')[0]
    s.parentNode.insertBefore(bp, s)
    //baidu statictis
    var _hmt = _hmt || []
    var hm = document.createElement('script')
    hm.src = 'https://hm.baidu.com/hm.js?ccc146f638178f462dc741559602236c'
    var s = document.getElementsByTagName('script')[0]
    s.parentNode.insertBefore(hm, s)
})()
