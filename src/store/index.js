import Vue from 'vue';
import Vuex from 'vuex';
import permission from './modules/permission';
import getters from './getters';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    permission
  },
  state: {
    user: {},
    settings: {
      navbar: {
        show: true
      }
    }
  },
  mutations: {
    NAVBAR_TOGGLE: state => {
      state.settings.navbar.show = !state.settings.navbar.show;
    },
    NAVBAR_STATE: (state, payload) => {
      state.settings.navbar.show = payload.state;
    }
  },
  actions: {
    navbarToggle: async (context, payload) => {
      context.commit('NAVBAR_TOGGLE', payload);
    },
    navbarState: async (context, payload) => {
      context.commit('NAVBAR_STATE', payload);
    }
  },
  getters: {
    ...getters
  }
});
