import Vue from 'vue'

// import Cookies from 'js-cookie'
import 'normalize.css/normalize.css' // a modern alternative to CSS resets
import Element from 'element-ui'
import './styles/element-variables.scss'
import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'

import './icons' // icon
import './permission' // permission control
import './utils/error-log' // error log

import * as filters from './filters' // global filters

Vue.use(Element)

import * as echarts from 'echarts'
Vue.prototype.$echarts = echarts
/**
 如果不想使用模拟服务器，则必须将404页面放置在endIf中
 你想使用MockJs来模拟api
 你可以执行:
 目前MockJs将用于生产环境，
 请在上线前删除!！
 */
if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('../mock')
  mockXHR()
}

// Vue.use(Element, {
//   size: Cookies.get('size') || 'medium', // set element-ui default size
// })

// register global utility filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
