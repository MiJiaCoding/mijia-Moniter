import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * constantRoutes
 * 没有权限要求的基页
 * 所有角色均可访问
 */
export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  // {
  //   path: '/auth-redirect',
  //   component: () => import('@/views/login/auth-redirect'),
  //   hidden: true
  // },
  {
    path: '/',
    component: Layout,
    redirect: '/exception/index'
    // redirect:'/Exception_monitoring'
  },
  {

    // path: '/exception',
    path: '/Exception_monitoring',
    component: Layout,
    //http://localhost:9528/#/Exception_monitoring/exception

    // http://localhost:9528/#/exception/exception
    redirect: '/Exception_monitoring/exception',
    name: 'Exception_monitoring',
    children: [
      {
        path: 'exception',
        component: () => import('@/views/Exception_monitoring/exception'),
        name: 'exception',
        meta: {
          title: '健康状况',
          icon: 'el-icon-warning'
        }
      }
    ]
  },
  {
    path: '/documentation',
    component: Layout,
    redirect: '/exception/index', // 重定向地址，在面包屑中点击会重定向去的地址
    alwaysShow: true, // 一直显示根路由
    meta: { title: '异常监控', icon: 'documentation' },
    children: [
      {
        path: 'index',
        component: () => import('@/views/exception/index'),
        name: 'Exception',
        meta: { title: '异常监控', icon: 'documentation', affix: false }
      },
      {
        path: 'xxx',
        component: () => import('@/views/exception/index'),
        name: 'xxx',
        meta: { title: '异常监控', icon: 'documentation', affix: false }
      }
    ]
  },
  {
    path: '/keydata',
    component: Layout,
    redirect: '/keydata/index', // 重定向地址，在面包屑中点击会重定向去的地址
    alwaysShow: true, // 一直显示根路由
    meta: { title: '性能监控', icon: 'documentation' },
    children: [
      {
        path: 'index',
        component: () => import('@/views/keydata/index'),
        name: 'KeyData',
        meta: { title: '数据统计', icon: 'dashboard', affix: false }
      },
      {
        path: 'detail',
        component: () => import('@/views/keydata/detail'),
        name: 'Detail',
        meta: { title: '详情', icon: 'dashboard', affix: false }
      }
    ]
  },
  {
    path: '/httprequest',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/httprequest/index'),
        name: 'HttpRequest',
        meta: { title: 'HTTP请求监控', icon: 'guide' }
      }
    ]
  },
  {
    path: '/useraction',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/useraction/index'),
        name: 'UserAction',
        meta: { title: '用户行为数据', icon: 'documentation', affix: false }
      }
    ]
  }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()
// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
