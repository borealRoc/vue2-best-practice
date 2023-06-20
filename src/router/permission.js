import router from "@/router";
import store from "@/store"
import whiteList from "./whiteList";
import { Message } from "element-ui";
import errorRoutes from "./errorRoutes";

// 全局路由守卫
// 一、已登录
// 1. 如果去的是登录页：没必要显示登录页，重定向回首页
// 2. 如果去的非登录页
// 2.1 获取用户角色，如果已获取，说明已经过滤好动态路由，直接放行；如果还未获取
// 2.2 先获取用户角色，根据用户角色，过滤出动态路由
// 2.3 把动态路由添加至全局路由，然后继续路由切换

// 二、未登录
// 1. 如果前往白名单页面：直接放行
// 2. 如果前往非白名单页面：重定向会登录页，并把目的页面作为登录页路由的 redirect 参数，以便在登录页登录完成后，再重定向回目的页面


router.beforeEach(async (to, from, next) => {
    // 获取令牌，以判断用户是否登录
    console.log('执行router.beforeEach')
    const hasLogin = store.getters.hasLogin
    if (hasLogin) {
        if (to.path === '/login') {
            next('/')
        } else {
            const hasRoles = store.getters.hasRoles
            if (hasRoles) {
                next()
            } else {
                try {
                    const { roles } = await store.dispatch('user/getUserRoles')
                    const accessedRoutes = await store.dispatch('permission/generateRoutes', roles)
                    for (let i = 0; i < accessedRoutes.length; i++) {
                        // 新增动态路由
                        router.addRoute(accessedRoutes[i])
                    }
                    // 新增404页面路由
                    router.addRoute(errorRoutes[0])
                    next({ ...to, replace: true })
                } catch (error) {
                    console.log('error', error)
                    Message({
                        message: error || '未知错误',
                        type: "error",
                        duration: 5 * 1000
                    });
                    await store.dispatch('user/resetToken')
                    next(`/login?redirect=${to.path}`)
                }
            }
        }


    } else {
        if (whiteList.indexOf(to.path) !== -1) {
            next()
        } else {
            next(`/login?redirect=${to.path}`)
        }
    }
})
