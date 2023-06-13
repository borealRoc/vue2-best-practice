import API from "@/apis";


export default {
    namespaced: true,
    state: {
        token: localStorage.getItem('token'),
        roles: []
    },
    mutations: {
        setToken: (state, token) => {
            state.token = token;
        },
        setRoles: (state, roles) => {
            state.roles = roles;
        }
    },
    actions: {
        // 模拟用户登录
        login({ commit }, userInfo) {
            return API.user.login(userInfo).then((res) => {
                commit("setToken", res.data);
                localStorage.setItem("token", res.data);
            });
        },
        // 模拟清空令牌和角色状态
        resetToken({ commit }) {
            return new Promise(resolve => {
                commit("setToken", "");
                commit("setRoles", []);
                localStorage.removeItem('token');
                resolve();
            });
        },
        // 模拟获取用户角色信息
        getUserRoles({ commit, state }) {
            return API.user.getUserRoles(state.token).then(({ data: roles }) => {
                commit("setRoles", roles);
                return { roles }
            })
        }
    }
}