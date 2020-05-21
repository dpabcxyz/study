import Vue from 'vue'
import App from './App'
import 'babel-polyfill'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import less from 'less'
import echarts from 'echarts'
import i18n from './common/lang' //语言切换demo
import $ from 'jquery'
import '../static/iconfont.js' //阿里图标库
import '@/common/css/public.css' //公共css
import '@/extends/animate/animate.css' // 动画库
import store from './store/index.js' //store

Vue.use(ElementUI);
Vue.use(less);
Vue.prototype.$echarts = echarts;
Vue.prototype.$axios = axios
Vue.config.productionTip = false
new Vue({
    el: '#app',
    store,
    router,
    i18n,
    components: { App },
    template: '<App/>'
})