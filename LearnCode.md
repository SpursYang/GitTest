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
