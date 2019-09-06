<template>
	<div class="mui-numbox">
		<!-- "-"按钮，点击可减小当前数值 -->
		<button class="mui-btn mui-numbox-btn-minus" type="button">-</button>
		<input class="mui-numbox-input" type="number" @change = "getNum" ref="theNum" />
		<!-- "+"按钮，点击可增大当前数值 -->
		<button class="mui-btn mui-numbox-btn-plus" type="button">+</button>
	</div>

</template>	
<script>

	import mui from '../../lib/Mui/js/mui.min.js'

	export default {
		data(){
			return{
				

			}	
		},

		methods:{

			getNum(){

				this.$emit('getSelectNum', parseInt(this.$refs.theNum.value))

			}

		},

		mounted(){
			mui('.mui-numbox').numbox().setOption('step',1)
			mui('.mui-numbox').numbox().setOption('min',1)
			mui('.mui-numbox').numbox().setValue(1)
		},	

		props:['max'],

		watch:{

			// 因为在父组件里，获取数据是一个异步函数，所以可能导致页面渲染完后，还没有值，所以可以用watch来监听值的改变
		   max:(newValue,oldValue)=>{

		   		mui('.mui-numbox').numbox().setOption('max',newValue)

		   }

		}


	}

</script>
<style></style>