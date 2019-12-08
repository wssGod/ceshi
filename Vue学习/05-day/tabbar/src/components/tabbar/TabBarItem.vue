<template>
  <div class="tab-bar-item" @click="itemClick">
    <slot v-if="!isActive" name="item-icon"></slot>
    <slot v-else name="item-icon-active"></slot>
    <div :class="{active: isActive}">
      <slot name="item-text"></slot>
    </div>
    <!-- <img src="../../assets/img/tabbar/home.svg" alt="" srcset="">
    <div>首页</div> -->
  </div>
</template>
<script>
export default {
  name: 'TabBarItem',
  props: {
    path: String
  },
  data () {
    return {
      isActive: true
    }
  },
  methods: {
    itemClick () {
      console.log(this.path)
      this.$router.replace(this.path)
    } 
  }
}
</script>
<style scoped>
  .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }
  .tab-bar-item img{
    width: 24px;
    height: 24px;
    vertical-align: middle;
    margin-bottom: 2px;
  }
  .active{
    color: #f00;
  }
</style>