// 配置路由相关的配置
import VueRouter from 'vue-router'
import Vue from 'vue'
import Home from '../components/Home'
import About from '../components/About'
// 1.通过Vue.use（插件），安装插件
Vue.use(VueRouter)

// 2.创建VueRouter对象
const routes = [
  // 路由的默认值
  {
    path: '/',
    // 重定向
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/about',
    component: About
  }
]

const router = new VueRouter({
  // 配置路径和组件的映射关系
  routes,
  // 使用H5的history模式(地址栏中不会有#号)
  mode: 'history'
})

// 3.将router对象传入到Vue实例中
export default router
