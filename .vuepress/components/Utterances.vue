<template>
    <div id="comment"></div>
</template>

<script>
export default {
    name: 'Utterances',
    methods: {
        initValine() {
            let utterances = window.document.createElement('script')
            utterances.type = 'text/javascript'
            utterances.async = true
            utterances.setAttribute('issue-term', 'pathname')
            utterances.setAttribute('theme', 'github-light')
            utterances.setAttribute('repo', 'staugur/staugur.github.io')
            utterances.crossorigin = 'anonymous'
            utterances.src = 'https://utteranc.es/client.js'
            window.document.getElementById('comment').appendChild(utterances)
        }
    },
    mounted() {
        this.initValine()
    }
}
</script>