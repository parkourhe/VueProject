// 抽离路由模块

import VueRouter from 'vue-router'

import HomeCon from './components/tabbar/HomeContainer.vue'
import MemberCon from './components/tabbar/MemberContainer.vue'
import SerachCon from './components/tabbar/SerachContainer.vue'
import ShopCon from './components/tabbar/ShopContainer.vue'
import News from './components/newsList/news.vue'
import NewsInfo from './components/newsList/newinfo.vue'
import Photo from './components/PhotoShare/photo.vue'


let router = new VueRouter({

	routes:[
		{path:'/',redirect:'/home'},
		{path:'/home',component:HomeCon},
		{path:'/member',component:MemberCon},
		{path:'/shoping',component:ShopCon},
		{path:'/serach',component:SerachCon},
		{path:'/home/news',component:News},
		{path:'/home/news/info/:id',component:NewsInfo},
		{path:'/home/photo',component:Photo}


	],
	// 第二个参数，路由的默认的点击类,属于router-link
	linkActiveClass:'mui-active'


})


export default router