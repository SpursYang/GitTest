## 数据展示
```
<view :data-title='title'>{{title}}</view>
```
数据定义：
data() {
	return {
		title:'标题'
	}
}
```
<view>{{arr.id}}{{arr.name}}</view>
```
数据定义：
data() {
	return {
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
}

## 计算属性
```
export default {
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
```