<template>
    <div id="google-adsense"></div>
</template>

<script>
export default {
    name: 'Utterances',
    methods: {
        addJS(src, cb) {
            var script = document.createElement('script')
            script.type = 'text/javascript'
            script.src = src
            document.getElementsByTagName('head')[0].appendChild(script)
            script.onload = typeof cb === 'function' ? cb : function () {}
        },
        loadAd() {
            window.document
                .getElementById('google-adsense')
                .html(
                    "<ins class='adsbygoogle' style='display:block' data-ad-client='ca-pub-{{ ad_client }}' data-ad-slot='{{ ad_slot }}' data-ad-format='auto' data-full-width-responsive='true'></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script>"
                )
        },
        initAds() {
            this.addJS(
                'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
                this.loadAd
            )
        }
    },
    mounted() {
        this.initAds()
    }
}
</script>
