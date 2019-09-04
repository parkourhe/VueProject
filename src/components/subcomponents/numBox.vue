<template>
	<div class="mui-numbox" data-numbox-max='100' data-numbox-min='1'>
		<!-- "-"按钮，点击可减小当前数值 -->
		<button class="mui-btn mui-numbox-btn-minus" type="button">-</button>
		<input class="mui-numbox-input" type="number" />
		<!-- "+"按钮，点击可增大当前数值 -->
		<button class="mui-btn mui-numbox-btn-plus" type="button">+</button>
	</div>

</template>
<script>

	import mui from '../../lib/Mui/js/mui.js'

	export default {

		mounted(){
			mui('.mui-numbox').numbox()
		}


	}

</script>
<style></style>