import Vue from 'vue';
import Vuex from 'vuex';
import storage from './plugins/storage';
import permission from './modules/permission';
import user from './modules/user';
import getters from './getters';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    permission,
    user
  },

  plugins: [
    storage
  ],

  state: {
    user: {},
    settings: {
      navbar: {
        show: true
      },
      fullscreen: false
    }
  },

  mutations: {
    NAVBAR_TOGGLE: state => {
      state.settings.navbar.show = !state.settings.navbar.show;
    },
    NAVBAR_STATE: (state, payload) => {
      state.settings.navbar.show = payload.state;
    },
    FULLSCREEN_TOGGLE: (state, payload) => {
      state.settings.fullscreen = payload.state;
    }
  },

  actions: {
    navbarToggle: async (context, payload) => {
      context.commit('NAVBAR_TOGGLE', payload);
    },
    navbarState: async (context, payload) => {
      context.commit('NAVBAR_STATE', payload);
    },
    fullscreenToggle: async (context, payload) => {
      context.commit('FULLSCREEN_TOGGLE', payload);
    }
  },

  getters: {
    ...getters
  }
});
