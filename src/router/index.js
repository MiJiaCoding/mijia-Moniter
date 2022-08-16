import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    noCache: true                if set true, the page will no be cached(default is false)
    affix: true                  if set true, the tag will affix in the tags-view
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

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
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/auth-redirect'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/exception'
  },
  {

    path: '/exception',

    path: '/Exception_monitoring',
    component: Layout,
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
    children: [
      {
        path: 'index',
        component: () => import('@/views/exception/index'),
        name: 'Exception',
        meta: { title: '异常监控', icon: 'documentation', affix: true }
      }
    ]
  },
  {
    path: '/keydata',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/keydata/index'),
        name: 'KeyData',
        meta: { title: '性能监控', icon: 'dashboard', affix: true }
      }
    ]
  },
  {
    path: '/httprequest',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/keydata/index'),
        name: 'HttpRequest',
        meta: { title: 'HTTP请求监控', icon: 'guide', affix: true }
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
        meta: { title: '用户行为数据', icon: 'documentation', affix: true }
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
