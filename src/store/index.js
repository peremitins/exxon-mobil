import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isMenuShow: false
  },
  mutations: {
    CLOSE_MENU(state) {
      state.isMenuShow = !state.isMenuShow;
    }
  },
  actions: {
  },
  modules: {
  }
})
