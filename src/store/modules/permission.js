import { asyncRoutes, constantRoutes } from '@/router';

/**
 * Through meta.role determines whether the current user rights match
 * @param roles
 * @param route
 */
const hasPermission = (roles, route) => {
  if (route.meta && route.meta.roles) {
    return roles.some((role) => route.meta.roles.includes(role));
  }
  return true;
};

/**
 * Recursively filter asynchronous routing tables to return routing tables
 * that meet user role permissions
 * @param roles
 * @param routes asyncRoutes
 */
export const filterAsyncRoutes = (roles, routes) => {
  const res = [];
  routes.forEach((route) => {
    const tmp = { ...route };
    if (hasPermission(roles, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(roles, tmp.children);
      }
      res.push(tmp);
    }
  });
  return res;
};

const permission = {
  state: {
    routes: [],
    addRoutes: [],
  },

  getters: {
    permissionRoutes: (state) => state.routes,
    addRoutes: (state) => state.addRoutes,
  },

  mutations: {
    SET_ROUTES: (state, routes) => {
      state.addRoutes = routes;
      state.routes = constantRoutes.concat(routes);

      console.log('SET_ROUTES state.addRoutes', state.addRoutes);
      console.log('SET_ROUTES state.routes', state.routes);
    },
  },
  actions: {
    GenerateRoutes: async ({ commit }, { roles }) => {
      let accessedRoutes;
      console.groupCollapsed('[vuex.permission] GenerateRoutes', roles);
      try {
        console.log('asyncRoutes ', asyncRoutes);
        console.log('constantRoutes ', constantRoutes);

        if (roles.includes('admin')) {
          accessedRoutes = asyncRoutes;
          console.log('roles.includes(admin) ', accessedRoutes);
        } else {
          accessedRoutes = filterAsyncRoutes(roles, asyncRoutes);
          console.log('!roles.includes(admin) ', accessedRoutes);
        }
        commit('SET_ROUTES', accessedRoutes);
      } catch (err) {
        console.warn('[vuex.permission] GenerateRoutes', err);
      }
      console.groupEnd();
      return accessedRoutes;
    },
  },
};

export default permission;
