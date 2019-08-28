import Vue from 'vue'

import App from './App.vue'

import './lib/Mui/css/mui.css'

import './lib/Mui/css/icons-extra.css'

import VueRouter from 'vue-router'

// 自己的路由模块
import router from './router.js'

import { Header, Swipe, SwipeItem ,Button  } from 'mint-ui'

import VueResource from 'vue-resource'

import moment from "moment"



Vue.use(VueRouter)

Vue.use(VueResource)

Vue.http.options.root = ''


Vue.component(Header.name,Header)

Vue.component(Swipe.name, Swipe)

Vue.component(SwipeItem.name, SwipeItem)

Vue.component(Button.name,Button)

Vue.filter('datafilter',function (date,pattern="YYYY-MM-DD HH:mm:ss") {
		
	return moment(date).format(pattern)


})

var vm = new Vue({
	el:'#app',
	router,
	render: c=>c(App)

})