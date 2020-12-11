;(function() {
    //tools
    function ajax(options) {
        options = options || {}
        options.type = (options.type || 'GET').toUpperCase()
        options.dataType = options.dataType || 'json'
        var params = formatParams(options.data)
        if (window.XMLHttpRequest) {
            var xhr = new XMLHttpRequest()
        } else {
            var xhr = new ActiveXObject('Microsoft.XMLHTTP')
        }
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4) {
                var status = xhr.status
                if (status >= 200 && status < 300) {
                    options.success &&
                        options.success(xhr.responseText, xhr.responseXML)
                } else {
                    options.fail && options.fail(status)
                }
            }
        }
        if (options.type == 'GET') {
            xhr.open('GET', options.url + '?' + params, true)
            xhr.send(null)
        } else if (options.type == 'POST') {
            xhr.open('POST', options.url, true)
            xhr.setRequestHeader(
                'Content-Type',
                'application/x-www-form-urlencoded'
            )
            xhr.send(params)
        }
    }
    function formatParams(data) {
        var arr = []
        for (var name in data) {
            arr.push(
                encodeURIComponent(name) + '=' + encodeURIComponent(data[name])
            )
        }
        arr.push(('v=' + Math.random()).replace('.', ''))
        return arr.join('&')
    }

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

    //my notice
    function showNotice() {
        function setNotice(response) {
            try {
                let res = JSON.parse(response)
                if (res.code === 0 && res.data.length > 0) {
                    let nh = res.data
                        .map(d => {
                            return '- ' + d.content
                        })
                        .join('<br>')
                    let pre =
                        '<h4><i class="iconfont reco-tongzhi"></i> 公告</h4>'
                    document.getElementById('notice').innerHTML = pre + nh
                }
            } catch {
                console.error('invalid json response')
            }
        }
        ajax({
            url: 'https://open.saintic.com/CrawlHuaban/notice',
            type: 'GET',
            data: { catalog: 4 },
            dataType: 'json',
            success: function(res) {
                let me = document.querySelector(
                    '#app .info-wrapper .personal-info-wrapper'
                )
                if (!me) return
                let div = document.createElement('div')
                div.id = 'notice'
                me.appendChild(div)
                setNotice(res)
            }
        })
    }
    document.addEventListener('DOMContentLoaded', event => {
        setTimeout(function() {
            showNotice()
        }, 2000)
    })
})()
