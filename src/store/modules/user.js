import { loginByEmail, getUserInfo } from '@/api/login';

const user = {
  state: {
    token: '',
    roles: [],
    user: '',
    name: '',
    avatar: '',
    status: '',
    code: '',
    introduction: '',
    setting: {
      articlePlatform: []
    }
  },

  getters: {
    token: state => state.token,
    roles: state => state.roles,
    name: state => state.name,
    user: state => state.user,
    avatar: state => state.avatar,
    status: state => state.status,
    introduction: state => state.introduction,
    setting: state => state.setting
  },

  mutations: {
    SET_USER_INFO: (state, payload) => {
      if (payload.logout) {
        state.token = '';
        state.roles = '';
        state.user = '';
        state.name = '';
        state.avatar = '';
        state.code = '';
      } else {
        state.token = payload.token || state.token;
        state.roles = payload.roles || state.roles;
        state.user = payload.user || state.user;
        state.name = payload.name || state.name;
        state.avatar = payload.avatar || state.avatar;
        state.code = payload.code || state.code;
      }
    },
    SET_TOKEN: (state, token) => {
      state.token = token;
    }
  },

  actions: {
    // Username login
    LoginByEmail: async ({ commit }, payload) => {
      console.log('LoginByEmail');
      return new Promise((resolve, reject) => {
        loginByEmail(payload.email.trim(), payload.password).then(response => {
          const { data } = response;
          commit('SET_TOKEN', data.user.token);
          resolve(data);
        }).catch(error => {
          reject(error);
        });
      });
    },

    // Get user information
    GetUserInfo: async ({ commit, state }) => {
      console.log('GetUserInfo');
      return new Promise((resolve, reject) => {
        getUserInfo(state.token).then(response => {
          // Since mockjs does not support custom status codes, it can only be hacked like this
          if (!response.data) {
            reject(new Error('Verification failed, please login again.'));
          }
          const { data } = response;

          // Verify returned roles are a non-null array
          if (data.user.roles && data.user.roles.length === 0) {
            reject(new Error('getInfo: roles must be a non-null array!'));
          }

          commit('SET_USER_INFO', data.user);
          resolve(response);
        }).catch(error => {
          reject(error);
        });
      });
    },

    // Front end
    LogOut: async ({ commit }) => {
      console.log('LogOut');
      return new Promise(resolve => {
        commit('SET_USER_INFO', { logout: true });
        resolve();
      });
    },

    // Dynamically modify permissions
    ChangeRoles: async ({ commit, dispatch }, role) => {
      console.log('ChangeRoles');
      return new Promise(resolve => {
        commit('SET_TOKEN', role);
        getUserInfo(role).then(response => {
          const { data } = response;
          commit('SET_USER_INFO', data);
          // Redraw the side menu after dynamically modifying the permissions
          dispatch('GenerateRoutes', data);
          resolve();
        });
      });
    }
  }
};

export default user;
