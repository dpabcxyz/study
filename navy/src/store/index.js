import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);



import getters from './getters'
import layout from './modules/layout.js'
import theme from './modules/theme.js'
export default new Vuex.Store({
    getters,
    modules: {
        layout: layout,
        theme

    }
})
