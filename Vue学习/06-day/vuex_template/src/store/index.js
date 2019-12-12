import Vue from 'vue'
import Vuex from 'vuex'
import {
  INCREMENT
} from './mutation-types'
// 安装插件
Vue.use(Vuex)
const modulesA = {
  state: {
    name: 'WSS'
  }
}
// 2.创建对象
const store = new Vuex.Store({
  // 存储状态的
  state: {
    counter: 100
  },
  // 方法
  mutations: {
    [INCREMENT](state) {
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
    // context 上下文
    aAddCount(context,payload) {
      setTimeout(() => {
        context.commit('addCount', payload.count)
        console.log(payload.message)
        payload.success()
      }, 1000)
    },
    bAddCount(context,payload) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit('addCount', payload)
          console.log('携带的参数',payload)
          resolve('成功回调')
        },1000)
      })
    }
  },
  getters: {
    powerCount(state) {
      return state.counter * state.counter
    }
  },
  modules: {
    a: modulesA
  }
})
// 3.导出
export default store
