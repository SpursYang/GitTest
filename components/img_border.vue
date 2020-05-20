<template>
	<image @click="handleClickimg" class="img-border" :src="src3"></image>
</template>

<script>
	export default {
		// 声明需要接收的父组件传递属性
		props:{
			src3:String
		},
		methods:{
			handleClickimg(){
				//console.log("点击图片");
				//向父级传递参数
				this.$emit("srcChange",this.src3);
			}
		}
	}
</script>

<style>
	.img-border{
		border-radius: 50%;
	}
</style>
