import Vue from 'vue'
import VueRouter from 'vue-router'
import constRoutes from './constRoutes'

// 解决路由跳转错误：Uncaught (in promise) Error: Redirected when going from “...“ to “...“ via a navigation guard
// https://blog.csdn.net/weixin_46873254/article/details/119358833
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, resolve, reject) {
  if (resolve || reject) return originalPush.call(this, location, resolve, reject)
  return originalPush.call(this, location).catch(() => { })
}

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: constRoutes
})

export default router
