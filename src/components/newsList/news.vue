<template>
	<div class="news-list">
		<ul class="mui-table-view" v-for="item in newList" :key="item.id">
			<li class="mui-table-view-cell mui-media">
				<router-link :to="'/home/news/info/'+item.id">
					<img class="mui-media-object mui-pull-left" :src="item.img_url">
					<div class="mui-media-body">
						{{item.title}}
						<p class='mui-ellipsis'>
							<span>{{item.add_time | datafilter}}</span>
							<span>点击{{item.click}}次</span>
						</p>
					</div>
				</router-link>
			</li>
			

		</ul>

	</div>

</template>

<script>
	import {Toast} from 'mint-ui'

	export default{
		data(){
			return{
				newList:[]
			}

		},

		methods:{

			getList(){

				this.$http.get('newList').then(res=>{
					if (res.body.status!==0) {
						Toast("读取失败")
					}

					this.newList = res.body.messages



				})


			}
		},
		created(){

			this.getList()


		}



	}
	


</script>
<style lang="less" scoped>
	.news-list{
			width: 100%;
			height: 100%;
			.mui-ellipsis{
				font-size: 12px;
				display: flex;
				justify-content: space-between;

			}

	}
	
</style>