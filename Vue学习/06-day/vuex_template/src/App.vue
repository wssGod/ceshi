<template>
  <div id="app">
    {{ message }}
    <h2>{{ $store.state.counter }}</h2>
    <button @click="addClick">+</button>
    <button @click="deClick">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <hello-world></hello-world>
    <h2>---------App内容：getters相关信息---------</h2>
    <h2>{{ $store.getters.powerCount }}</h2>
  </div>
</template>
<script>
import HelloWorld from '@/components/HelloWorld'
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
      this.$store.commit('increment')
    },
    deClick() {
      this.$store.commit('decrement')
    },
    addCount(count) {
      this.$store.commit('addCount', count)
    }
  }
}
</script>
<style lang="scss">

</style>
