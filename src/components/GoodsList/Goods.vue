<template>
	<div class="Goods">
		<div class="Goods-item" v-for="item in goodsList" :key="item._id">
			<div class="Goods-img">
				<img :src="item.img_url" alt="">
			</div>
			<div class="Goods-body">
				<h3 class="Goods-title">
					{{item.title}}
				</h3>
				<div class="Goods-pirce">
					<span class="pirce-now">¥{{item.sell_price}}</span>
					<span class="pirce-old">¥<s>{{item.market_price}}</s></span>
				</div>
				<div class="Goods-residue">
					<span class="Goods-status">热卖中</span>
					<span class="Goods-left">剩下{{item.stock_quantity}}件</span>
				</div>
			</div>

		</div>	
		
		<mt-button type="primary" size="large" plain @click="getMore">加载更多</mt-button>	
	
	</div>

</template>
<script>
	export default{

		data(){
			return {
				pageIndex:0,
				goodsList:[]

			}
		},

		methods:{

			getGoods(){

				this.$http.get('http://192.168.2.108:4000/getGoods?pageIndex='+this.pageIndex).then(result=>{
					if (result.status!==200) {
						return this.$toast('消息获取失败')
					}

					this.goodsList =this.goodsList.concat(result.body)

					if (result.body.length==0) {
						this.$toast('灭有了')
					}

				})

			},

			getMore(){
				this.pageIndex++
				this.getGoods()

			}


		},

		created(){

			this.getGoods()

		}

	}



</script>
<style lang="less" scoped>
.Goods{
	display: flex;
	flex-wrap: wrap;
	justify-content:space-between;
	padding: 10px;
	.Goods-body{

		padding:5px;
		background-color: #eee;

	}
	.Goods-title{
		font-size:16px;
		margin: 0;
		word-wrap: break-word;

	}
	.Goods-item{
		margin-bottom: 10px;
		min-height: 180px;	
		width: 49%;	
		box-shadow: 0 0 5px #000;
		flex-direction: column;
		justify-content:space-between;
		display: flex;

		img{
			width: 100%;
			vertical-align: middle;
		}
		
		.Goods-residue{
			display: flex;
			justify-content:space-between;
			font-size:12px;
			color: #666;

		}


	}
	.Goods-pirce{
		
		span{
			font-size:12px;
			color: #666;
		}

		

	}	


}


</style>