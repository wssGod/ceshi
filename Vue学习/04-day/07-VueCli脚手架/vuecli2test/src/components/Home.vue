<template>
  <div>
    <h2>我是首页</h2>
    <p>我是首页内容，哈哈哈</p>
    <router-link to="/home/news" replace active-class="active">新闻</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  
}
</script>
<style>

</style>
