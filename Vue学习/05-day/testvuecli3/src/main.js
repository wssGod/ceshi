import Vue from 'vue'
import App from './App.vue'
// 产品的提示信息，没什么太大的作用，当需要看发布的信息的时候可以设置成true
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
