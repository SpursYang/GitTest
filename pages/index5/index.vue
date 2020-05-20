<template>
	<view class="container">
		<view>子组件传递的参数：{{returnSrc}}</view>
		<!-- 3.使用组件 -->
		<!-- 传递参数给子组件 -->
		<img-borbers @srcChange="handlesrcChange" :src3="src1"></img-borbers>
		<img-borbers @srcChange="handlesrcChange" :src3="src2"></img-borbers>
	</view>
</template>

<script>
	//1.引入自定义组件
	import imgBorber from "@/components/img_border.vue";
	export default{
		data(){
			return {
				returnSrc:"",
				src1:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589993419693&di=609d65ed8148a2b9d473f058552bf497&imgtype=0&src=http%3A%2F%2Fa0.att.hudong.com%2F64%2F76%2F20300001349415131407760417677.jpg",
				src2:"https://wenhui.whb.cn/u/cms/www/202005/19182411n5io.jpg"
			}
		},
		//2.注册组件
		components:{
			imgBorbers:imgBorber
		},
		methods:{
			handlesrcChange(e){
				//console.log("触发监听,参数"+e);
				this.returnSrc=e;
			}
		},
		//onLoad 页面加载完毕就会触发<生命周期>
		onLoad(){
			console.log(this.baseUrl);
		}
	};
</script>

<style>
</style>
