<template>
	<div class="mui-numbox" data-numbox-min='1'>
		<!-- "-"按钮，点击可减小当前数值 -->
		<button class="mui-btn mui-numbox-btn-minus" type="button" >-</button>
		<input class="mui-numbox-input" type="number" @change = "getNum" ref="theNum" v-model="data" readonly />
		<!-- "+"按钮，点击可增大当前数值 -->
		<button class="mui-btn mui-numbox-btn-plus" type="button">+</button>
	</div>

</template>	
<script>

	import mui from '../../lib/Mui/js/mui.min.js'

	export default {
		data(){
			return{
				data: ''
			}	
		},

		methods:{

			getNum(){

				this.data = this.$refs.theNum.value

				this.$store.commit('updateShopCar',{
					id:this.id,
					count : this.data
				})
				
			}

		},

		mounted(){
			mui('.mui-numbox').numbox().setOption('step',1)
			mui('.mui-numbox').numbox().setValue(this.count)
		},

		props:['count','id']





	}

</script>
<style></style>