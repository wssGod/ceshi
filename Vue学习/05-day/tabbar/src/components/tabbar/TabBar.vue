<template>
  <div id="tab-bar">
    <slot></slot>
    <!-- <div class="tab-bar-item">
      <img src="../../assets/img/tabbar/home.svg" alt="" srcset="">
      首页
    </div>
    <div class="tab-bar-item">
      <img src="../../assets/img/tabbar/home.svg" alt="" srcset="">
      分类
    </div>
    <div class="tab-bar-item">
      <img src="../../assets/img/tabbar/home.svg" alt="" srcset="">
      购物车
    </div>
    <div class="tab-bar-item">
      <img src="../../assets/img/tabbar/home.svg" alt="" srcset="">
      我的
    </div> -->
  </div>
</template>
<script>
export default {
  name: 'TabBar'
}
</script>
<style scoped>
  #tab-bar {
    display: flex;
    background-color: #f6f6f6;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0 -3px 1px rgba(100, 100, 100, 0.1)
  }
</style>