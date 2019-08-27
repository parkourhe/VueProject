<template>
	<div>
		<h1>用户界面</h1>
		
		<router-link to='/login'>登陆</router-link>
		<router-link to='/register'>注册</router-link>
		<router-view></router-view>

	</div>
</template>
<script></script>

<!-- 样式的scoped是通过css的属性选择器实现的 -->
<style scoped lang="less">
	body{
		h1{
			color: red	
		
		}

	}

</style>