<template>
	
	<div class="App">
		<mt-header fixed title="VueApp" class="appHeader">
			<router-link to=''  slot="left" style="color: #fff !important">
				<mt-button icon="back" @click="back" v-if="isHome">返回</mt-button>
			</router-link>	
		</mt-header>

		<transition mode="out-in">

			<router-view></router-view>

		</transition>

		<nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item-lib" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item-lib" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item-lib" to="/shoping">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge" id="badge">{{this.$store.getters.getTotalCount}}</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item-lib" to="/serach">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
	</div>
	


	
</template>
<script>
	export default{
		data(){
			return {
				isHome: false
			}
		},
		methods:{

			back(){

				this.$router.go(-1)
								
			}

		},
		created(){

			this.$route.path == '/home' ? this.isHome=false : this.isHome=true


		},

		
		watch:{

			// 这里必须这样写

			"$route.path": function(newValue,oldValue){

				if (newValue=='/home') {
					
					this.isHome = false
				}else {
					this.isHome = true
				}
				
			}

		}
		



	}

</script>
<style lang="less" scoped>
body{
	padding: 0;
	margin: 0;

}
.App{
	padding-top: 40px;
	padding-bottom: 50px;

	overflow-x: hidden;
}

.v-enter{
	opacity: 1;
	transform:translateX(100%)	

}

.v-leave-to{
	opacity:0;
	transform:translateX(-100%);
	position: absolute;

}


.v-enter-active,
.v-leave-active{

	transition:all 0.2s ease;


}

.mui-active{
	color: #007aff !important;

}


.mui-bar-tab .mui-tab-item-lib{
	display: table-cell;
	overflow: hidden;
	width: 1%;
	height: 50px;
	text-align: center;
	vertical-align: middle;
	white-space: nowrap;
	text-overflow: ellipsis;
	color: #929292;

}

.mui-bar-tab .mui-tab-item-lib .mui-icon{

	top: 3px;
	width: 24px;
	height: 24px;
	padding-top: 0;
	padding-bottom: 0;
}

.mui-bar-tab .mui-tab-item-lib .mui-icon ~ .mui-tab-label{
	font-size: 11px;
	display: block;
	overflow: hidden;
	text-overflow: ellipsis;
}
.appHeader{
	z-index: 999;
}


.mui-bar .mui-bar-tab{
	z-index:999;

}
</style> 