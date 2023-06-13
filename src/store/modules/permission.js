import constRoutes from '@/router/constRoutes'
import asyncRoutes from '@/router/asyncRoutes'

export default {
    namespaced: true,
    state: {
        fullRoutes: [], // 完整路由
        asyncRoutes: [], // 根据用户角色过滤出的动态路由
    },
    mutations: {
        setRoutes: (state, routes) => {
            state.asyncRoutes = routes;
            state.fullRoutes = constRoutes.concat(routes);
        }
    },
    actions: {
        // 根据用户角色生成动态路由
        generateRoutes({ commit }, roles) {
            return new Promise(resolve => {
                const accessedRoutes = filterAsyncRoutes(asyncRoutes, roles);
                commit("setRoutes", accessedRoutes);
                resolve(accessedRoutes);
            })
        }
    }
}

/**
 * 递归过滤 asyncRoutes 路由表
 * @routes 待过滤路由表，首次传入的就是 asyncRoutes
 * @roles 用户拥有角色
 */
export function filterAsyncRoutes(routes, roles) {
    const res = [];
    routes.forEach(route => {
        // 复制一份
        const tmp = { ...route };
        // 如果用户有访问权则加入结果路由表
        if (hasPermission(roles, tmp)) {
            // 如果存在子路由则递归过滤之
            if (tmp.children) {
                tmp.children = filterAsyncRoutes(tmp.children, roles);
            }
            res.push(tmp);
        }
    });
    return res;
}

/**
 * 根据路由 meta.role 确定是否当前用户拥有访问权限
 * @roles 用户拥有角色
 * @route 待判定路由
 */
function hasPermission(roles, route) {
    // 如果当前路由有roles字段则需判断用户访问权限
    if (route.meta && route.meta.roles) {
        // 若用户拥有的角色中有被包含在待判定路由角色表中的则拥有访问权
        return roles.some(role => route.meta.roles.includes(role));
    } else {
        // 没有设置roles则无需判定即可访问
        return true;
    }
}