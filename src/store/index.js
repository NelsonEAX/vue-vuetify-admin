import Vue from 'vue';
import Vuex from 'vuex';
import syncStorage from './plugins/syncStorage';
import permission from './modules/permission';
import settings from './modules/settings';
import user from './modules/user';
import getters from './getters';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    permission,
    settings,
    user
  },

  plugins: [
    syncStorage({})
  ],

  state: {},
  mutations: {},
  actions: {},
  getters: {
    ...getters
  }
});
