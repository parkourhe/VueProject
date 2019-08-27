import Vue from 'vue'

import App from './App.vue'

import './lib/Mui/css/mui.css'

import './lib/Mui/css/icons-extra.css'

import VueRouter from 'vue-router'

// 自己的路由模块
import router from './router.js'

import { Header, Swipe, SwipeItem } from 'mint-ui'

import VueResource from 'vue-resource'



Vue.use(VueRouter)

Vue.use(VueResource)

Vue.component(Header.name,Header)

Vue.component(Swipe.name, Swipe)

Vue.component(SwipeItem.name, SwipeItem)


var vm = new Vue({
	el:'#app',
	router,
	render: c=>c(App)

})