export default {
	// 列表配置
	// 菜单列表
	menu: [
		{
			title: '主菜单1',            // 一级菜单名称
			icon: 'el-icon-location',   // 一级菜单 icon
			menuId: '1',                // 索引(必须唯一，是字符串)
			sub: [                      // 子菜单(二级菜单)
				{
					title: '站点列表',      // 菜单名称
					component: 'userslist',    // 点击菜单打开的组件名称
					menuId: '1-1'           // 索引 (用于识别当前打开的tab,必须唯一，是字符串)
				},
				{title: '新增站点', component: 'userscreate', menuId: '1-2'}
			]
		}
	],

	// 主页 tab 配置
	homeTab: {
		title: '首页',                     //  tab 显示标题
		menuId: 'home',                   //  tab 内部名称(用来识别当前打开的tab)
		components: [{path: 'home'}],     //  tab 对应的组件
	}
}
