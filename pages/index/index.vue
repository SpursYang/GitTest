<template>
	<view class="container">
		<view>{{msg}}</view>
		<view>{{money}}</view>
		<view>{{isRich}}</view>
		<view>{{arr.id}}{{arr.name}}</view>
		
		<view :data-color="color">color</view>
		<view>==============</view>
		<view 
		v-for="(li,index) in list" 
		:key="li.id"
		v-if="li.id<2"
		>
			{{li.id}}--{{li.test}}--{{index}}
		</view>
		
		<view>------------------</view>
		<view>
			<view v-if="false">隐藏域</view>
			<view v-show="false">频繁显示</view>
		</view>
		
		<view>{{cnMoney}}</view>
		<view v-for="item in filterList" :key="item.id">{{item.test}}</view>
	</view>
</template>

<script>
	export default {
		// 1.data 定义
		data() {
			return {
				msg:"这是消息",
				money:"10000",
				isRich:false,
				arr:{
					name:"刘",
					id:"bc27"
				},
				color:"FFFFFF",
				list:[
					{
						id:1,
						test:"🍌"
					},
					{
						id:2,
						test:"🍎"
					},
					{
						id:3,
						test:"🍊"
					}
				]
			}
		},
		// 2. 计算属性
		computed:{
			// 编辑data样式 ，作为函数使用
			cnMoney(){
				return "¥" + this.money;
			},
			// 过来 list 数组
			filterList(){
				// 判断id变化值
				return this.list.filter(v=>v.id>1);
			}
		}
	}
</script>
