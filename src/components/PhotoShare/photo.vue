<template>
	<div class="photo-container">
		<div id="slider" class="mui-slider">
			<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
				<div class="mui-scroll">
					<a :class="['mui-control-item', i==0 ? 'mui-active':'']" @click.prevent="getImagesList(item._id)" data-wid="tab-top-subpage-1.html" v-for="(item,i) in cateGory" :key="item.event_id" :data="item._id">
						{{item.title}}
					</a>
					
				</div>
			</div>

		</div>

		<ul>
			<li v-for="item in imgList" :key="item._id">
				<img v-lazy="item.img_url">
			</li>
		</ul>

	</div>
	

</template>
<script>
	import mui from '../../lib/Mui/js/mui.min.js'
	
	
	export default {

		data(){

			return {

				cateGory:[],
				imgList:[]

			}
		},

		methods:{

			MuiInit(){
				mui('.mui-scroll-wrapper').scroll({
	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
})

			},

			getCategory(){

				this.$http.get('http://192.168.2.108:4000/getCategory').then(result=>{

					if (result.status!==200) {
						return Toast('获取新闻消息失败')
					}
					

					this.cateGory = result.body

					this.cateGory.unshift({_id:'0',event_id:0,title:"全部"})



					

				})

			},

			// 需要传值时直接用v-bind指令绑定一个传参的函数

			getImagesList(id){



				this.$http.get('http://192.168.2.108:4000/getImage?id='+id).then(result=>{

					if (result.status!==200) {
						
						return	Toast('获取图片列表失败')
					}


					this.imgList = result.body


				})


			}

		},
		created(){

			this.getCategory()

			this.getImagesList(0)

		},

		mounted(){

			this.MuiInit()


		}





	}

	


</script>
<style lang="less" scoped>
.photo-container{
	ul{
		padding:20px;
	}
	
	li{

		list-style: none;

	}


	img[lazy=loading] {
		width: 100%;
		height: 100%;
		margin: auto;
	}

	li[data-v-735cf6a0]{
		width: 100%;
		height: 200px;

	}
	
	img[data-v-735cf6a0]{
		width: 100%;
		height: 100%;

	}


}



</style>