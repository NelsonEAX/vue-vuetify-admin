import { loginByUsername, logout, getUserInfo } from '@/api/login';
import { getToken, setToken, removeToken } from '@/utils/auth';

const user = {
  state: {
    user: '',
    status: '',
    code: '',
    token: getToken(),
    name: '',
    avatar: '',
    introduction: '',
    roles: [],
    setting: {
      articlePlatform: []
    }
  },

  mutations: {
    SET_CODE: (state, code) => {
      state.code = code;
    },
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
    SET_INTRODUCTION: (state, introduction) => {
      state.introduction = introduction;
    },
    SET_SETTING: (state, setting) => {
      state.setting = setting;
    },
    SET_STATUS: (state, status) => {
      state.status = status;
    },
    SET_NAME: (state, name) => {
      state.name = name;
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar;
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles;
    }
  },

  actions: {
    // Username login
    LoginByUsername({ commit }, userInfo) {
      const username = userInfo.username.trim();
      return new Promise((resolve, reject) => {
        loginByUsername(username, userInfo.password).then(response => {
          const { data } = response;
          commit('SET_TOKEN', data.token);
          setToken(response.data.token);
          resolve();
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

          if (data.roles && data.roles.length > 0) { // Verify returned roles are a non-null array
            commit('SET_ROLES', data.roles);
          } else {
            reject(new Error('getInfo: roles must be a non-null array!'));
          }

          commit('SET_NAME', data.name);
          commit('SET_AVATAR', data.avatar);
          commit('SET_INTRODUCTION', data.introduction);
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
    //       setToken(response.data.token)
    //       resolve()
    //     }).catch(error => {
    //       reject(error)
    //     })
    //   })
    // },

    // Sign out
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout(state.token).then(() => {
          commit('SET_TOKEN', '');
          commit('SET_ROLES', []);
          removeToken();
          resolve();
        }).catch(error => {
          reject(error);
        });
      });
    },

    // Front end
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '');
        removeToken();
        resolve();
      });
    },

    // Dynamically modify permissions
    ChangeRoles({ commit, dispatch }, role) {
      return new Promise(resolve => {
        commit('SET_TOKEN', role);
        setToken(role);
        getUserInfo(role).then(response => {
          const { data } = response;
          commit('SET_ROLES', data.roles);
          commit('SET_NAME', data.name);
          commit('SET_AVATAR', data.avatar);
          commit('SET_INTRODUCTION', data.introduction);
          // Redraw the side menu after dynamically modifying the permissions
          dispatch('GenerateRoutes', data);
          resolve();
        });
      });
    }
  }
};

export default user;
