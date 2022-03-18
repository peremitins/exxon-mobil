import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isMenuShow: false,
    isSearchShow: false,
    isFilterShow: false
  },
  mutations: {
    CLOSE_MENU(state) {
      state.isMenuShow = !state.isMenuShow;
    },
    CLOSE_FILTER(state) {
      state.isFilterShow = !state.isFilterShow;
    },
    TOGGLE_SEARCH(state) {
      state.isSearchShow = !state.isSearchShow;
    }
  },
  actions: {
  },
  modules: {
  }
})
