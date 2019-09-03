import Vue from 'vue'

import App from './App.vue'

import './lib/Mui/css/mui.css'

import './lib/Mui/css/icons-extra.css'

import VueRouter from 'vue-router'

// 自己的路由模块
import router from './router.js'

import VuePreview  from 'vue-preview'

// import { Header, Swipe, SwipeItem ,Button  } from 'mint-ui'

import Mint from 'mint-ui'

import VueResource from 'vue-resource'

import moment from "moment"


Vue.use(VuePreview, {
  mainClass: 'pswp--minimal--dark',
  barsSize: {top: 0, bottom: 0, left:0,right:0},
  captionEl: false,
  fullscreenEl: false,
  shareEl: true,
  bgOpacity: 0.85,
  tapToClose: true,
  tapToToggleControls: false
})

Vue.use(Mint)

import '../node_modules/mint-ui/lib/style.css'

Vue.use(VueRouter)

Vue.use(VueResource)

Vue.http.options.root = 'http://192.168.2.108:3001'



// Vue.component(Header.name,Header)

// Vue.component(Swipe.name, Swipe)

// Vue.component(SwipeItem.name, SwipeItem)

// Vue.component(Button.name,Button)

Vue.http.options.emulateJSON = true

Vue.filter('datafilter',function (date,pattern="YYYY-MM-DD HH:mm:ss") {
		
	return moment(date).format(pattern)


})

var vm = new Vue({
	el:'#app',
	router,
	render: c=>c(App)

})