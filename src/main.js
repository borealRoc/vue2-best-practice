import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'

Vue.config.productionTip = false

// 自动导入所有svg图标
import '@/icons'
// 自动注册'components/**/index.vue'目录下的自定义组件为全局组件
import '@/components'
// 全局路由守卫
import '@/router/permission'
// 注册自定义的指令
import '@/directives'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
