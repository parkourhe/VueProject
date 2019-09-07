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

import Vuex from 'vuex'

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

Vue.use(Vuex)

Vue.http.options.root = 'http://192.168.2.108:3001'

  


// 每次进入页面前，会先初始化car参数为空，所以要在car设置为空前拿到缓存

var car = JSON.parse(localStorage.getItem('car') || '[]')

// 实例化一个Vuex公共数据管理
var Store = new Vuex.Store({

  state:{

      car: car

  },

  mutations:{

    // 公共状态的函数第一个参数是state
      addShopCar(state,data){
    
          // 假设购物没有这个物品
          var flag = false

          state.car.some(item=>{

              if (item.id== data.id ) {
                  
                  item.count += data.count  

                  flag = true    

              }

          })

          if (!flag) {
              state.car.push(data)      
                      
         }


         let Jcar = JSON.stringify(state.car)

         localStorage.setItem('car',Jcar)

      },

      updateShopCar(state,data){

      
        state.car.some(item=>{

              if (item.id == data.id) {
                
                  item.count = data.count

                  return true
              }
              


        })

    

        // localStorage.setItem('car',JSON.stringify(car))

      },
      removeShopCar(state,data){

        state.car.some((item,i)=>{

            if (item.id==data.id) {
                 
                 state.car.splice(i,1) 

                 return true

            }


        })

        localStorage.setItem('car',JSON.stringify(car))

      },
      updateSelect(state,data){

        state.car.some(item=>{
          if (item.id==data.id) {

            item.selectd = data.selectd

            return true
          }

        })

        localStorage.setItem('car',JSON.stringify(car))


      }


  },

  getters:{


    getTotalCount(state){
      let totalCount = 0

      state.car.forEach(item=>{

       totalCount += parseInt(item.count)

      })

      return totalCount

    },

    getCount(state){

        let  obj  = {};

        state.car.forEach(item=>{

            obj[item.id] = item.count 

        })

        return obj
    },

     getSelectdStatus(state){

        let obj = {}

        state.car.forEach(item=>{

            obj[item.id] = item.selectd

        })

        console.log(obj);
        return obj


      },
      getTotalPrice(state){

        let obj = {
          count : 0,
          totalPrice : 0

        }

        state.car.forEach(item=>{



            if (item.selectd) {
                
                obj.count += parseInt(item.count)

                obj.totalPrice += parseInt(item.sell_price) * parseInt(item.count)


            }


        })

        return obj

      }     

  }




})




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
	render: c=>c(App),
  store:Store

})