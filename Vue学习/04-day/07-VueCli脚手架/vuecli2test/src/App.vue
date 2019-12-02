<template>
  <div id="app">
    <button @click="btnClick">按钮</button>
    <router-link tag="button" to="/home" replace>首页</router-link>
    <router-link to="/about" replace active-class="active">关于</router-link>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  methods: {
    btnClick () {
      this.$router.push('/home')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.active{
  color: #f00;
}
</style>
