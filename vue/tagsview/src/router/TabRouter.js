const route = Object.create(null)
route.install = function (vue) {
  // 第一个字符串是 组件名，第二个是组件路径，第三个是包名(如果不指定则已1.js,2.js....n.js命名)
	vue.component('home', (resolve) => {require.ensure([], ()=>resolve(require('@/Views/index/adminIndex.vue')), 'home')})
	vue.component('userscreate', (resolve) => {require.ensure([], ()=>resolve(require('@/Views/demo/Sitecreate.vue')), 'userscreate')})
	vue.component('userslist', (resolve) => {require.ensure([], ()=>resolve(require('@/Views/demo/Sitelists.vue')), 'userslist')})
}


export default route
