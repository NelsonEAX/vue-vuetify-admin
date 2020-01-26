import router, { asyncRoutes, constantRoutes } from '@/router';

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
    },
  },
  actions: {
    GenerateRoutes: async ({ commit }, { roles }) => {
      try {
        console.groupCollapsed(`[vuex.permission] GenerateRoutes [${roles}]`);
        let accessedRoutes;
        if (roles.includes('admin')) {
          accessedRoutes = asyncRoutes;
        } else {
          accessedRoutes = filterAsyncRoutes(roles, asyncRoutes);
        }
        commit('SET_ROUTES', accessedRoutes);
        // Apply selected allowed routes
        router.addRoutes(accessedRoutes);
        console.log('[vuex.permission] accessedRoutes ', constantRoutes);
        console.groupEnd();
      } catch (err) {
        console.warn('[vuex.permission] GenerateRoutes', err);
      }
    },
  },
};

export default permission;
