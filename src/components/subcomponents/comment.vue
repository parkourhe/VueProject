<template>
	
	<div class="commentCom">
		

		<h4>发表评论</h4>
		<hr>
		<textarea placeholder="请输入评论" rows="5" v-model="content"></textarea>

		<mt-button type="primary" size='large' @click="commitCon">提交</mt-button>
		

		<div class="commentList">
			<div class="commentItem" v-for="(item,i) in commentList ">
				<div class="commentItem-title">
					<span>第{{i+1}}楼</span>
					<span>用户:{{item.user_name}}</span>
					<span>发表时间:{{item.add_time | datafilter}}</span>

				</div>
				<div class="commentItem-body">
					{{item.content}}
				</div>	

			</div>

		</div>
		<mt-button type="primary" size="large" plain @click="more">点击加载更多评论</mt-button>

	</div>

</template>
<script>
	
	import {Toast} from "mint-ui"
	export default {
		data(){

			return{
				pageIndex:0,
				commentList:[],
				content:''

			}

		},
		methods:{

			getComment(){

				this.$http.get('http://192.168.2.108:4000/comment?id='+this.id+"&pageIndex="+this.pageIndex).then(res=>{

					if (res.status!==200) {
						
						return Toast('获取新闻消息失败')

					}

					this.commentList = this.commentList.concat(res.body)

					if (res.body.length==0) {
						
						Toast("没有了")

					}

				})


			},
			more(){

				this.pageIndex++;

				this.getComment()

			},
			commitCon(){
				
				if (!this.content.trim()) {
					
					return Toast("请添加评论")

				}

				if (this.content.length<5) {
					
					return Toast("请多写一点")
				}

				this.$http.post("http://192.168.2.108:4000/comment?id="+this.$route.params.id,{
					"content":this.content
				}).then((result,reject)=>{
					if (reject) {
						 return console.log(reject);
					}

					if (result.status!==200) {
						return Toast("提交失败，请稍后再试试")
					}

					console.log(result);
					Toast("提交成功")


					let newCom = {"add_time":Date.now(),"content":this.content,"user_name":"parkourhe"}

					this.commentList.unshift(newCom)



				})


			}


		},
		props:['id'],

		created(){

			this.getComment()
			console.log(this.id);

			console.log(this.$route.params);

		},

		


	}


</script>
<style lang="less" scoped>

.commentCom{
	font-size:24px;
	.commentCommit{
		
	}
	
	.commentList{
		.commentItem{
			.commentItem-title{
				background-color: #999;
				font-size:12px;
				width: 100%;
				height: 20px;

			}
			.commentItem-body{
				font-size:16px;
				padding:8px 0px;


			}


		}


	}
	[data-v-6d8edfc6]{
		margin-bottom:20px;

	}
}



</style>