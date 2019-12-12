<template>
  <div id="app">
    {{ message }}
    <h2>{{ $store.state.counter }}</h2>
    <button @click="addClick">+</button>
    <button @click="deClick">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <hello-world></hello-world>
    <h2>---------App内容：相关信息---------</h2>
    <h2>{{ $store.getters.powerCount }}</h2>
    <h2>---------App内容：modules里面的内容---------</h2>
    <h2>{{ $store.state.a.name }}</h2>
  </div>
</template>
<script>
import HelloWorld from '@/components/HelloWorld'
import {
  INCREMENT
} from '@/store/mutation-types'
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      message: '我是App组件',
      // counter: 0
    }
  },
  methods: {
    addClick() {
      this.$store.commit(INCREMENT)
    },
    deClick() {
      this.$store.commit('decrement')
    },
    addCount(count) {
      // this.$store.commit('addCount', count)
      // this.$store.dispatch('aAddCount', {
      //   count: count,
      //   message: '我是携带的信息',
      //   success: () => {
      //     console.log('里面已经完成')
      //   }
      // })
      this.$store.dispatch('bAddCount', count).then((data) => {
        console.log(data)
      })
    }
  }
}
</script>
<style lang="scss">

</style>
