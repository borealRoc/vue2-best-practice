import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import permission from './modules/permission'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
    roles(state) {
      return state.user.roles
    },
    hasRoles(state) {
      return state.user.roles && state.user.roles.length > 0
    },
    hasLogin(state) {
      return !!state.user.token
    },
    fullRoutes(state) {
      return state.permission.fullRoutes
    },
    username(state) {
      return state.user.token
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    user,
    permission
  }
})
