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
  created () {
    console.log('created')
  }
}
</script>
<style>

</style>
