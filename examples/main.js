import Vue from 'vue'
import App from './App.vue'

// 导入组件库
import HotKeyInput from './../lib/index.min.js'// './../packages/index'
// import HotKeyInput from './../packages/index'

// 注册组件库
Vue.use(HotKeyInput)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
