import Vue from 'vue'
import store from '@/store/index.js'
import $ from 'jquery'
import Router from 'vue-router'
import Login from '@/pages/login'
import Main from '@/pages/main'
import Main1 from '@/pages/main1'
import Main2 from '@/pages/main2'
import Main3 from '@/pages/main3'
import Main4 from '@/pages/main4'
import Main5 from '@/pages/main5'
import Table1 from '@/pages/table/table1'
import Table2 from '@/pages/table/table2'
import Table3 from '@/pages/table/table3'
import Echarts1 from '@/pages/echarts/echarts1'
import Echarts2 from '@/pages/echarts/echarts2'
import Notfound from '@/pages/notfound'
Vue.use(Router)
const router = new Router({
        routes: [{
                path: '/',
                name: 'Login',
                component: Login
            },

            {
                path: '/main',
                name: 'Main',
                component: Main,
                children: [{
                        path: '/',
                        name: 'Table1',
                        component: Table1
                    },
                    //表格
                    {
                        path: 'table1',
                        name: 'Table1',
                        component: Table1
                    },
                    {
                        path: 'table2',
                        name: 'Table2',
                        component: Table2
                    },
                    {
                        path: 'table3',
                        name: 'Table3',
                        component: Table3
                    },
                    //echarts
                    {
                        path: 'echarts1',
                        name: 'Echarts1',
                        component: Echarts1
                    },
                    {
                        path: 'echarts2',
                        name: 'Echarts2',
                        component: Echarts2
                    },
                ]
            },

            // 配色1
            {
                path: '/main1',
                name: 'Main1',
                component: Main1,
                children: [{
                    path: '/',
                    name: 'Table1',
                    component: Table1
                }]
            },
            // 配色2
            {
                path: '/main2',
                name: 'Main2',
                component: Main2,
                children: [{
                    path: '/',
                    name: 'Table1',
                    component: Table1
                }]
            },
            // 配色2
            {
                path: '/main3',
                name: 'Main3',
                component: Main3,
                children: [{
                    path: '/',
                    name: 'Table1',
                    component: Table1
                }]
            },
            // 配色4
            {
                path: '/main4',
                name: 'Main4',
                component: Main4,
                children: [{
                    path: '/',
                    name: 'Table1',
                    component: Table1
                }]
            },
            // 配色4
            {
                path: '/main5',
                name: 'Main5',
                component: Main5,
                children: [{
                    path: '/',
                    name: 'Table1',
                    component: Table1
                }]
            },

        ],
        mode: 'history'
    })
    // router.beforeEach((to, from, next) => {
    //     next()
    // })
    // router.afterEach((to, from, next) => {

// })
export default router;