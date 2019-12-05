// 配置路由相关的配置
import VueRouter from 'vue-router'
import Vue from 'vue'
import Home from '../components/Home'
import About from '../components/About'
import User from '../components/User'
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
    component: Home,
    // 原数据
    meta: {
      title: '首页'
    },
    children: [
      {
        path: '',
        redirect: 'news'
      },
      {
        path: 'news',
        component: () => import('../components/HomeNews')
      },
      {
        path: 'message',
        component: () => import('../components/HomeMessage')
      }
    ]
  },
  {
    path: '/about',
    meta: {
      title: '关于'
    },
    component: About
  },
  // 动态路由
  {
    path: '/user/:userId',
    meta: {
      title: '用户'
    },
    component: User
  },
  {
    path: '/profile',
    meta: {
      title: '档案'
    },
    component: () => import('../components/Profile')
  }
]

const router = new VueRouter({
  // 配置路径和组件的映射关系
  routes,
  // 使用H5的history模式(地址栏中不会有#号)
  mode: 'history'
})
// 在路由跳转之前指向的方法
router.beforeEach((to, from, next) => {
  console.log(111)
  // 从from 跳到to
  // document.title = to.meta.title
  document.title = to.matched[0].meta.title
  // 默认是指向next的但是我们写方法了会覆盖掉所以要手动执行一下，若不执行路由不会跳转
  next()
})

router.afterEach((to, from) => {
  console.log(22222)
})

// 3.将router对象传入到Vue实例中
export default router
