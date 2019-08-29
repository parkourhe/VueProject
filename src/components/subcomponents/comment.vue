<template>
	
	<div class="commentCom">
		
		<form action="" class="commentCommit">
			<h4>发表评论</h4>
			<hr>
			<textarea placeholder="请输入评论" rows="5"></textarea>

			<mt-button type="primary" size='large'>提交</mt-button>
		</form>

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
				commentList:[]

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





			}


		},
		props:['id'],

		created(){

			this.getComment()
			console.log(this.id);

		}


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