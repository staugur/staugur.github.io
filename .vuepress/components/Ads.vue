<template>
    <div id="google-adsense">
        <ins
            class="adsbygoogle"
            style="display: block"
            data-ad-client="ca-pub-5102708766475618"
            data-ad-slot="9244112237"
            data-ad-format="auto"
            data-full-width-responsive="true"
        ></ins>
    </div>
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
        initAds() {
            this.addJS(
                'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
                () => {
                    var load_google_ad = function () {
                            ;(adsbygoogle = window.adsbygoogle || []).push({})
                        },
                        callback = function () {
                            setTimeout('load_google_ad()', 3000)
                        }

                    if (
                        document.readyState === 'complete' ||
                        (document.readyState !== 'loading' &&
                            !document.documentElement.doScroll)
                    ) {
                        callback()
                    } else {
                        document.addEventListener('DOMContentLoaded', callback)
                    }
                }
            )
        }
    },
    mounted() {
        this.initAds()
    }
}
</script>
