import Vue from 'vue';
import Vuex from 'vuex';
/* eslint-disable */
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {},
    settings: {
      navbar: {
        show: true,
      },
    },
  },
  mutations: {
    NAVBAR_TOGGLE: state => {
      state.settings.navbar.show = !state.settings.navbar.show;
    },
    NAVBAR_STATE: (state, payload) => {
      state.settings.navbar.show = payload.state;
    },
  },
  actions: {
    NAVBAR_TOGGLE: async (context, payload) => {
      context.commit('NAVBAR_TOGGLE', payload);
    },
    NAVBAR_STATE: async (context, payload) => {
      context.commit('NAVBAR_STATE', payload);
    },
  },
  getters: {
    NAVBAR_SHOW: state => {
      return state.settings.navbar.show;
    },
  },
});
