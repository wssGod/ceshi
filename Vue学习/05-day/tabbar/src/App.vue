<template>
  <div id="app">
    <router-view></router-view>
    <tab-bar>
      <tab-bar-item path="/home">
        <img slot="item-icon" src="./assets/img/tabbar/home.svg" alt="" srcset="">
        <img slot="item-icon-active" src="./assets/img/tabbar/home-active.svg" alt="" srcset="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <img slot="item-icon" src="./assets/img/tabbar/home.svg" alt="" srcset="">
        <img slot="item-icon-active" src="./assets/img/tabbar/home-active.svg" alt="" srcset="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <img slot="item-icon" src="./assets/img/tabbar/home.svg" alt="" srcset="">
        <img slot="item-icon-active" src="./assets/img/tabbar/home-active.svg" alt="" srcset="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <img slot="item-icon" src="./assets/img/tabbar/home.svg" alt="" srcset="">
        <img slot="item-icon-active" src="./assets/img/tabbar/home-active.svg" alt="" srcset="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from './components/tabbar/TabBar'
import TabBarItem from './components/tabbar/TabBarItem'
export default {
  name: 'App',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style>
  @import "./assets/css/base.css";
</style>
