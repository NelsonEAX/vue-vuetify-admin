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
    avatar: state => state.avatar,
    status: state => state.status,
    introduction: state => state.introduction,
    setting: state => state.setting
  },

  mutations: {
    SET_USER_INFO: (state, payload) => {
      state.token = payload.token;
      state.roles = payload.roles;
      state.user = payload.user;
      state.name = payload.name;
      state.avatar = payload.avatar;
      state.code = payload.code;
    },
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles;
    },
    SET_NAME: (state, name) => {
      state.name = name;
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar;
    },
    SET_STATUS: (state, status) => {
      state.status = status;
    },
    SET_CODE: (state, code) => {
      state.code = code;
    },
    SET_INTRODUCTION: (state, introduction) => {
      state.introduction = introduction;
    },
    SET_SETTING: (state, setting) => {
      state.setting = setting;
    }
  },

  actions: {
    // Username login
    LoginByEmail({ commit }, payload) {
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
    GetUserInfo({ commit, state }) {
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

    // Third party verification login
    // LoginByThirdparty({ commit, state }, code) {
    //   return new Promise((resolve, reject) => {
    //     commit('SET_CODE', code)
    //     loginByThirdparty(state.status, state.email, state.code).then(response => {
    //       commit('SET_TOKEN', response.data.token)
    //       resolve()
    //     }).catch(error => {
    //       reject(error)
    //     })
    //   })
    // },

    // Sign out
    // LogOut({ commit, state }) {
    //   return new Promise((resolve, reject) => {
    //     logout(state.token).then(() => {
    //       commit('SET_TOKEN', '');
    //       commit('SET_ROLES', []);
    //       resolve();
    //     }).catch(error => {
    //       reject(error);
    //     });
    //   });
    // },

    // Front end
    LogOut({ commit }) {
      return new Promise(resolve => {
        commit('SET_USER_INFO', {});
        resolve();
      });
    },

    // Dynamically modify permissions
    ChangeRoles({ commit, dispatch }, role) {
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
