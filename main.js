import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
//定义全局数据
Vue.prototype.baseUrl="www.ewellsy.cn";
App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
