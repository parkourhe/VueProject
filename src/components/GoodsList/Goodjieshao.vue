<template>
	<div class="goodIntroduce">
		<h1>{{jieshaoCon.title}}</h1>
		<div v-html="jieshaoCon.content" class="content"></div>

	</div>
	
</template>
<script>
	export default {

		data(){
			return {
				id: this.$route.params.id,
				jieshaoCon:[]
			}
		},

		methods:{
			getGoodsjieshao(){

				this.$http.get('http://192.168.2.108:4000/getJieshao?id='+ this.id).then(result=>{
					if (result.status!==200) {
						return 	this.$toast('消息失败')
					}


					this.jieshaoCon = result.body[0]


				})

			}

		},

		created(){

			this.getGoodsjieshao()

		}


	}

	

</script>
<style lang="less" >
.goodIntroduce{

	text-align:center;

	h1{
		color: skyblue;
		font-size: 24px;

	}
	.content{
		padding:12px;
		img{
			width: 100%;
		}


	}


}



</style>