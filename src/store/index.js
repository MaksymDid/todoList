import Vue from "vue";
import Vuex from "vuex";
import users from "./modules/users";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoading: true,
  },
  getters: {},
  mutations: {
    SET_LOADER_VALUE: (state, value) => (state.isLoading = value),
  },
  actions: {},
  modules: {
    users,
  },
});
