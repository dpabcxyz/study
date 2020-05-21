import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)

const i18n = new VueI18n({
    locale: localStorage.getItem('lang') || 'zh', // 语言标识
    messages: {
        'zh': require('./zh'), // 中文语言包
        'en': require('./en'), // 英文语言包
        'ja': require('./ja'), // 日语
        'ko': require('./ko'), // 韩语
        'ru': require('./ru') // 韩语
    }
})

export default i18n