<template>
	<div class="photoInfo">
		
			<div class="photoInfo-title">
					<h1>{{comList.title}}</h1>
					<div class="photoInfo-info">
						<span>发表时间:{{comList.add_time | datafilter}}</span><span>点击次数{{comList.click}}次</span>
					</div>
			</div>
			<hr>

			<div class="content" v-html="comList.content">
				
			</div>
			
			<com id=16></com>
	

	</div>

</template>


<script>
	import {Toast} from 'mint-ui'

	import Com1 from '../subcomponents/comment.vue'
	
	export default{
			data(){
				return {
					id: this.$route.params.id,
					comList: ""
				}

			},

			methods:{

				getImgCom(){


					
					this.$http.get('http://192.168.2.108:4000/getImgCom?id='+this.id).then(result=>{

						if (result.status!==200) {
							return Toast('消息获取失败')

						}
						

						this.comList = result.body


					})

				}

			},

			created(){

				this.getImgCom()


			},

			components:{

				com: Com1

			}



	}





</script>
<style lang="less" scoped>
	
	.photoInfo{
		padding: 0 12px;
		.photoInfo-title{
				
				h1{
					color: skyblue;
					font-size:20px;
					text-align:center;
					margin: 20px 0px;

				}

				.photoInfo-info{
					display: flex;
					justify-content:space-between;
					font-size:12px;
					
				}


			

		}
	

	}	

	
</style>