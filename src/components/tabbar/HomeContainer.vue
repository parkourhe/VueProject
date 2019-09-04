<template>
	<div>
		

		

		<swiper :imgList="imgList" :isAuto="true"></swiper>
		
		<ul class="mui-table-view mui-grid-view mui-grid-9">


		  <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/news">
		  		<img src="../../images/menu1.png" alt="">	
		          <div class="mui-media-body">新闻资讯</div></router-link></li>
		  <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/photo">
		  		<img src="../../images/menu2.png" alt="">	
		          <div class="mui-media-body">图片分享</div></router-link></li>
		  <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/goods">
		  		<img src="../../images/menu3.png" alt="">	
		          <div class="mui-media-body">商品购买</div></router-link></li>
		  <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		  		<img src="../../images/menu4.png" alt="">	
		          <div class="mui-media-body">留言反馈</div></a></li>
		  <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		  		<img src="../../images/menu5.png" alt="">	
		          <div class="mui-media-body">视频专区</div></a></li>
		  <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		  		<img src="../../images/menu6.png" alt="">	
		                    <div class="mui-media-body">联系我们</div></a></li>
		            
		  </ul> 


	</div>


</template>
<script>
	import {Toast} from "mint-ui"

	import swiper  from '../subcomponents/swiper.vue'

	export default{


		data(){
			return {
				// 用于保存轮播图的数据
				imgList:[]

			}

		},

		methods:{

			getData(){


				this.$http.get('http://192.168.2.108:4000/Imglist').then(res=>{


					if (res.status!==200) {
						Toast('获取数据错误')
					}

					this.imgList = res.body

				})


			}

		},

		created(){

			this.getData()

		},

		components:{

			swiper : swiper

		}

	}



</script>
<style lang="less" scoped>
	

.mui-grid-view.mui-grid-9{

	background-color:#fff;
	
	img{
		width: 60px;
		height: 60px;

	}
	
	
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
	border: 0;

}


</style>