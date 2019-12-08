<template>
  <div>
    <h2>我是首页</h2>
    <p>我是首页内容，哈哈哈</p>
    <router-link to="/home/news" replace active-class="active">新闻</router-link>
    <router-link to="/home/message" replace active-class="active">消息</router-link>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    
  </div>
</template>
<script>
export default {
  name: 'Home',
  data () {
    return {
      path: '/home/news'
    }
  },
  created () {
    console.log('created')
  },
  // 路由处于活跃状态时调用
  activated () {
    this.$router.push(this.path)
  },
  // 页面内路由
  beforeRouteLeave (to, from, next) {
    console.log(this.$route.path)
    next()
  }
}
</script>
<style>

</style>
