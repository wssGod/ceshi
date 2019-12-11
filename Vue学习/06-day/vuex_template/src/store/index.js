import Vue from 'vue'
import Vuex from 'vuex'
// 安装插件
Vue.use(Vuex)

// 2.创建对象
const store = new Vuex.Store({
  // 存储状态的
  state: {
    counter: 100
  },
  // 方法
  mutations: {
    increment(state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    },
    addCount(state, count) {
      state.counter+= count
    }
  },
  // 进行异步操作（网络请求）
  actions: {

  },
  getters: {
    powerCount(state) {
      return state.counter * state.counter
    }
  },
  modules: {

  }
})

// 3.导出
export default store
