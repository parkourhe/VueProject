<template >
	
	<div class="goodInfo">
		<transition
		@before-enter="beforeEnter"
		@enter="enter"
		@after-enter="afterEnter"
		@enter-cancelled="enterCancelled"
		>
		<div class="ball" v-show="show" ref="myBall"></div>
	</transition>
	<div class="mui-card lunbo">
		<div class="mui-card-content">
			<div class="mui-card-content-inner mystyle">
				<swiper :imgList="imgList" :isAuto="false"></swiper>
			</div>
		</div>
	</div>
	<div class="mui-card">
		<div class="mui-card-header">{{goodsMess.title }}</div>
		<div class="mui-card-content">
			<div class="mui-card-content-inner">
				<div class="goods-pirce">
					<span>商场价：<del>{{goodsMess.market_price}}</del></span>
					<span>销售价：<em>{{goodsMess.sell_price}}</em></span>
				</div>
				<div class="goods-payNum">
					<span>购买数量</span>
					<numBox @getSelectNum='getSelectNum' :max="goodsMess.stock_quantity"></numBox>

				</div>
				<div class="goods-caozuo">
					<mt-button type="primary">购买</mt-button>
					<mt-button type="danger" @click="addCar">加入购物车</mt-button>
				</div>


			</div>
		</div>
	</div>

	<div class="mui-card">
		<div class="mui-card-header">商品参数</div>
		<div class="mui-card-content">
			<div class="mui-card-content-inner">
				<div class="goods-infomation">
					<p>商品货号:{{goodsMess.goods_no}}</p>
					<p>库存情况:{{goodsMess.stock_quantity}}</p>
					<p>上架时间:{{goodsMess.add_time | datafilter}}</p>
				</div>
			</div>
		</div>
		<div class="mui-card-footer">
			<mt-button type="primary" plain  size="large" @click="goodsJieshao(id)">商品介绍</mt-button>
			<mt-button type="danger" plain  size="large" @click="goodsCom(id)">商品评论</mt-button>
		</div>
	</div>

</div>

</template>
<script>
	// 轮播组件
	import swiper from '../subcomponents/swiper.vue'

	import numBox from '../subcomponents/numBox.vue'

	export default{

		data(){
			return {
				id: this.$route.params.id,
				imgList:[],
				goodsMess:[],
				show:false,
				selectNum:1,


			}
		},

		methods:{
			getGoodsCarousel(){

				this.$http.get('http://192.168.2.108:4000/getthunimages?id='+this.id).then(result=>{
					if (result.status!=200) {
						return	this.$toast('获取消息失败')

					}

					this.imgList = result.body

					this.imgList.forEach(item=>{

						item.img = item.src

					})


				})

			},

			getGoodsMess(){

				this.$http.get('http://192.168.2.108:4000/getGoodsInfo?id='+this.id).then(result=>{
					if (result.status!==200) {
						return this.$toasat('获取消息失败')

					}

					this.goodsMess = result.body[0]

				})

			},
			goodsJieshao(id){

				this.$router.push({name:'goodsjieshao',params:{id}})


			},
			goodsCom(id){

				this.$router.push({name:'GoodsCom',params:{id}})

			},

			addCar(){

				this.show = !this.show

				let car = {}

				car.id = this.$route.params.id

				car.stock_quantity = this.goodsMess.stock_quantity

				car.sell_price = this.goodsMess.sell_price

				car.count = this.selectNum

				this.$store.commit('addShopCar',car)
				


			},
			beforeEnter(el){

				el.style.transform = 'translate(0px,0px)'

			},
			enter(el,done){

				el.offsetWidth;

				let ballPosition = this.$refs.myBall.getBoundingClientRect()


				let badgePosition = document.getElementById('badge').getBoundingClientRect()

					// 应该移动的值

					moveY = badgePosition.y - ballPosition.y

					moveX = badgePosition.x - ballPosition.x

					el.style.transition  = 'all 0.5s cubic-bezier(.75,-0.5,1,1.21)'

					el.style.transform = `translate(${moveX}px, ${moveY}px)`
					done()


				},
				afterEnter(el){
					this.show=!this.show

				},
				enterCancelled(el){

				},

				getSelectNum(num){

					this.selectNum = num
					

				}



			},

			created(){

				this.getGoodsCarousel(),

				this.getGoodsMess()

			},

			components:{

				swiper,numBox


			}
		}



	</script>
	<style lang="less" scoped>

	.goodInfo{

		.ball{
			width: 12px;
			height: 12px;
			border-radius: 50%;
			position: absolute;
			background-color: red;
			z-index: 99;
			top: 355px;
			left: 140px;
			transform:translate(0px,0px);


		}

		.mystyle{

			padding: 0;
		}

		.goods-pirce{
			margin-bottom: 5px;
		}

		.goods-payNum{
			position:relative;
			margin-bottom: 5px;
		}

		.mui-card-footer{
			display: block;
			button{
				margin-bottom: 10px;
			}
		}

	}



</style>