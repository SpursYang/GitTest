<template>
	<view class="container">
		<view @click="handleClick">点击事件</view>
		<button @click="handleClick1">点击事件1</button>
		
		<button data-index="11" data-msg="参数1" @click="handleClick2(1,$event)">事件传参1</button>
		<button data-index="22" data-msg="参数2" @click="handleClick2(2,$event)">事件传参2</button>
	</view>
</template>

<script>
	export default{
		//在methods里边定义事件回调
		methods:{
			handleClick(){
				console.log("放弃吧");
			},
			handleClick1(){
				console.log("一样的");
			},
			handleClick2(index,event){
				console.log(index);
				console.log(event.currentTarget.dataset);
			}
		}
	}
</script>

<style>
</style>
