<template>
    <div id="comment"></div>
</template>

<script>
export default {
    name: 'Utterances',
    methods: {
        initValine() {
            // 匿名函数，防止污染全局变量
            let utterances = window.document.createElement('script')
            utterances.type = 'text/javascript'
            utterances.async = true
            utterances.setAttribute('issue-term', 'pathname')
            utterances.setAttribute('theme', 'github-light')
            utterances.setAttribute('repo', 'staugur/blog')
            utterances.crossorigin = 'anonymous'
            utterances.src = 'https://utteranc.es/client.js'
            window.document.getElementById('comment').appendChild(utterances)
        }
    },
    mounted() {
        // 每次挂载时候，进行初始化
        this.initValine()
    }
}
</script>