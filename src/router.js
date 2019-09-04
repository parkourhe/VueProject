// 抽离路由模块

import VueRouter from 'vue-router'

import HomeCon from './components/tabbar/HomeContainer.vue'
import MemberCon from './components/tabbar/MemberContainer.vue'
import SerachCon from './components/tabbar/SerachContainer.vue'
import ShopCon from './components/tabbar/ShopContainer.vue'
import News from './components/newsList/news.vue'
import NewsInfo from './components/newsList/newinfo.vue'
import Photo from './components/PhotoShare/photo.vue'
import photoList from './components/PhotoShare/photoInfo.vue'
import Goods from './components/GoodsList/Goods.vue'
import goodsList from './components/GoodsList/goodInfo.vue'
import goodsJieshao from './components/GoodsList/Goodjieshao.vue'
import GoodsCom from './components/GoodsList/GoodsCom.vue'


let router = new VueRouter({

	routes:[
		{path:'/',redirect:'/home'},
		{path:'/home',component:HomeCon},
		{path:'/member',component:MemberCon},
		{path:'/shoping',component:ShopCon},
		{path:'/serach',component:SerachCon},
		{path:'/home/news',component:News},
		{path:'/home/news/info/:id',component:NewsInfo},
		{path:'/home/photo',component:Photo},
		{path:'/home/photo/photoList/:id',component:photoList},
		{path:'/home/goods',component:Goods},
		// name是命名式导航的参数
		{path:'/home/goods/goodsInfo/:id',component:goodsList,name:'goodsInfo'},
		{path:'/home/goods/goodsJieshao/:id',component:goodsJieshao,name:'goodsjieshao'},
		{path:'/home/goods/GoodsCom/:id',component:GoodsCom,name:"GoodsCom"}


	],
	// 第二个参数，路由的默认的点击类,属于router-link
	linkActiveClass:'mui-active'


})


export default router