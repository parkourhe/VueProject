<template>
	<div class="shopContainer">
		<div class="mui-card">
			<div class="mui-card-content">
				<div class="mui-card-content-inner myStyle" v-for="item in data" :key='item._id'>
					<mt-switch v-model="$store.getters.getSelectdStatus[item._id]" @change="selectChage(item._id,$store.getters.getSelectdStatus[item._id])"></mt-switch>
					
					<div class="goods-body">
						<img :src="item.img_url" alt="">
						<div class="goods-item">
							<div class="goods-title">
								{{item.title}}
							</div>	
							<div class="goods-mess">
								<span class="goods-price">￥{{item.sell_price}}</span>
								<shop-car :count="$store.getters.getCount[item._id]" :id="item._id"></shop-car>
								<a class="goods-delete" @click="remove(item._id)">删除</a>
								
							</div>
						</div>	
					</div>
				</div>
			</div>
		</div>
		<div class="mui-card">
			<div class="mui-card-content">
				<div class="mui-card-content-inner carPay">
					<div class="shop-pay"> 
						<span>总计(不含运费)</span>
						<span>已勾选{{$store.getters.getTotalPrice.count}}件，总价￥{{$store.getters.getTotalPrice.totalPrice}}</span>
					</div>
					<mt-button type="danger">结算</mt-button>
				</div>
			</div>
		</div>

	</div>

</template>
<script>

	import shopCarNumBox from '../subcomponents/shopCarNumBox.vue'

	export default{
		data(){
			return {
				
				data:''
			}
		},
		methods:{
			getShopCar(){
				var goods = localStorage.getItem('car') || '[]'

				var goods = JSON.parse(goods)


				let idArr = goods.map(item=>{
					return item.id 
				})

				this.$http.get('http://192.168.2.108:4000/getShopCar?id='+idArr).then(result=>{

					if (result.status!==200) {
						return this.$toast('获取消息失败')
					}

					this.data = result.body

				})

				
			},

			getCount(){

				let count = localStorage.getItem('car')	

				


			},
			remove(id){

				this.data.some((item,i)=>{

					if (item._id==id) {
						
						this.data.splice(i, 1)

						return true

					}
				})	

				this.$store.commit('removeShopCar',{
					id:id
				})
				
			},

			selectChage(id,status){


				this.$store.commit('updateSelect',{
					id:id,
					selectd:status

				})

			}

		},

		components:{
			shopCar : shopCarNumBox

		},

		created(){
			this.getShopCar();
			this.getCount();
			

		}


	}
</script>
<style lang="less" scoped>

.shopContainer{
	.myStyle{
		display: flex;
		justify-content: space-between;
		img{
			width: 40px;
			margin: 0px 10px;
		}
		.goods-body{
			display: flex;
			align-items: center;
		}
		.goods-item{
			display: flex;
			flex-direction: column;
			justify-content: space-between;
		}
		.goods-title{
			font-size:12px;
			display: flex;
		}
		.goods-mess{
			display:flex;
			flex-wrap:wrap;
			align-items:center;
			.mui-numbox{
				margin:0px 10px;

			}
		}
		.goods-price{
			font-weight: 700;
			font-size: 12px;
		}
		.goods-delete{
			color:red;

		}

	}

	.carPay{

		display:flex;
		justify-content:space-between;

		.shop-pay{
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			span{
				font-size:12px;
				letter-spacing: 1px;
				color:#333;

			}
		}

	}

	

}



</style>