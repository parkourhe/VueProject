// 抽离路由模块

import VueRouter from 'vue-router'

import HomeCon from './components/tabbar/HomeContainer.vue'
import MemberCon from './components/tabbar/MemberContainer.vue'
import SerachCon from './components/tabbar/SerachContainer.vue'
import ShopCon from './components/tabbar/ShopContainer.vue'

let router = new VueRouter({

	routes:[
		{path:'/',redirect:'/home'},
		{path:'/home',component:HomeCon},
		{path:'/member',component:MemberCon},
		{path:'/shoping',component:ShopCon},
		{path:'/serach',component:SerachCon}

	],
	// 第二个参数，路由的默认的点击类,属于router-link
	linkActiveClass:'mui-active'


})


export default router