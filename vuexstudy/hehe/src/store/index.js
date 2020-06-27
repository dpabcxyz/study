import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
import test1 from './modules/test1.js'  //系统管理
import test2 from './modules/test2.js'  //应用管理

export default new Vuex.Store({
    modules: {
        test1,
        test2
    }
})
