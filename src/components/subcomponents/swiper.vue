<template>

	<mt-swipe :auto="4000">
		<mt-swipe-item v-for="item in imgList" :key="item.url">
			<img :src="item.img" alt="" :class="{full:isAuto}">
		</mt-swipe-item>
	</mt-swipe>

</template>
<script>


	export default{

		data(){
			return {}
		},
		methods:{

		},

		props:['imgList','isAuto']


	}


</script>
<style lang="less">
.mint-swipe{
	
	height: 200px;
	.mint-swipe-item{

		text-align:center;
		
		img{

			height: 100%;	

		}


	}
	

	
	/*
	.mint-swipe-item{

			&:nth-child(1){
				background-color: skyblue;

			}


			&:nth-child(2){
				background-color: blue;

			}
	
			&:nth-child(3){
				background-color: pink;

			}

			

	}
	*/
}

.full{
	width: 100%;
}
</style>