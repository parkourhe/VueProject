<template>
	<div class="newInfo">

		<h3>新闻内容 --{{id}}</h3>
		
		<p class="newInfo-p">
			<span>发表时间{{list.add_time | datafilter}}</span>
			<span>点击{{list.click}}次</span>
		</p>

		<div class="content" v-html="list.content"></div>

		<comment-box></comment-box>
		
	</div>
	
	
</template>
<script>
	import comment from '../subcomponents/comment.vue'
	
	import {Toast} from "mint-ui"

	export default{

		data(){
			return {
				id: this.$route.params.id,
				list:{}
			}
		},

		methods:{

			getNewInfo(){

				this.$http.get(`http://127.0.0.1:3001/${this.id}`).then(res=>{

					if (res.body.status!==0) {
							
						Toast("获取新闻消息失败")

						return  
					}

					this.list = res.body.messages

					console.log(this.list);
					
				})

			}

		},

		created(){

			this.getNewInfo()

		},

		components:{

			"comment-box" : comment

		}


	}	


</script>
<style lang="less" scoped>
		
		.newInfo{
			padding: 0px 16px;
			h3{
				text-align: center;
			}
			.newInfo-p{
					display: flex;
					justify-content:space-between;

			}

		}
	

</style>