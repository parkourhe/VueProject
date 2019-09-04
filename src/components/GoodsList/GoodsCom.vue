<template>
	<div>
		<com :id=13 class="mystyle"></com>
	</div>
</template>
<script>
	import com from '../subcomponents/comment.vue'

	export default{

		data(){
			return{}
		},

		components:{
			com

		}


	}	
	

</script>
<style lang="less" scoped>
	.mystyle{
		padding:10px;

	}


</style>