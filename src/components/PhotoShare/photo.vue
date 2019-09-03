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

		<ul class="photo-list">
			<router-link v-for="item in imgList" :key="item._id" :to="'/home/photo/photoList/'+item._id" tag="li">
				<img v-lazy="item.img_url">
				<div class="info">
					<h3 class="info-title">{{item.title}}</h3>
					<div class="info-body">{{item.zhaiyao}}</div>

				</div>
			</router-link>
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

				this.id = id

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

.photo-list{
	text-align: center;
	padding:10px;
	padding-bottom:0;
	li{
		list-style: none;
		background-color:#ccc;
		margin-bottom:10px;
		box-shadow: 0 0 6px #333;
		position: relative;
		text-align:left;
		.info{
			width: 100%;
			padding: 5px;
			position:absolute;
			bottom: 0;
			max-height: 100px;
			background-color: rgba(0,0,0,0.5);

			.info-title{
				margin:0;
				font-size:20px;
				color: #fff
			}
			.info-body{
				width: 100%;
				font-size:14px;
				color: skyblue
			}

		}


	}
	img{
		
		width: 100%;
		height: auto;
		vertical-align:middle;
	
	}

	img[lazy=loading] {
		width: 40px;
		height: 300px;
		margin: auto;
	}
	

}




</style>