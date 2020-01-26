import NProgress from 'nprogress'; // progress bar
import router from './index';
import store from '../store';
import authRouter from './modules/auth';
import 'nprogress/nprogress.css'; // progress bar style

NProgress.configure({ showSpinner: false }); // NProgress Configuration

/**
 * Generate white list
 */
const whiteList = (['/landing', '/land']
  .concat(Array.from(authRouter, (route) => route.path))
  .concat(Array.from(authRouter, (route) => route.alias)))
  .filter((route) => route); // remove undefined element
console.log('whiteList', whiteList);

/**
 * Check user has permission for this routes.
 * 'admin' permission passed directly.
 * @param {Array} roles
 * @param {Array} permissionRoles
 */
function hasPermission(roles, permissionRoles) {
  if (roles.includes('admin')) return true;
  if (!permissionRoles) return true;
  return roles.some((role) => permissionRoles.includes(role));
}

router.beforeEach(async (to, from, next) => {
  NProgress.start();
  console.groupCollapsed(`[router.beforeEach] ${to.path}`);
  try {
    // determine if there has token
    if (store.getters.token) {
      console.log('has token');
      if (whiteList.includes(to.path)) {
        console.log(`${to.path} in whiteList`);
        next({ path: '/' });
      } else {
        console.log(`${to.path} not in whiteList`);
        if (!store.getters.roles || store.getters.roles.length === 0) {
          console.log('user roles.length === 0', store.getters.roles);

          // Determine whether the current user has pulled the user_info information
          await store.dispatch('GetUserInfo');
          if (!store.getters.user || !store.getters.user.roles) {
            console.log('no user roles information, LogOut');
            await store.dispatch('LogOut');
            next({ path: '/' });
          }

          // note: roles must be a object array! such as:
          // [{id: '1', name: 'editor'}, {id: '2', name: 'developer'}]
          await store.dispatch('GenerateRoutes', store.getters.user);
          if (!store.getters.permissionRoutes) {
            console.log('no user accessed routes information, redirect /');
            next({ path: '/' });
          }

          // Dynamically add accessible routing tables
          router.addRoutes(store.getters.permissionRoutes, { override: true });
          // Hack method to ensure that addRoutes is complete,
          // set the replace: true so the navigation will not leave a history record
          next({ ...to, replace: true });
        } else {
          console.log('user roles.length !== 0', store.getters.roles);
          // No need to dynamically change permissions can be directly next()
          // delete the following permission judgment ↓
          if (hasPermission(store.getters.roles, to.meta.roles)) {
            console.info(`hasPermission([${store.getters.roles}] => ${to.meta.roles})`);
            next();
          } else {
            console.warn(`not hasPermission([${store.getters.roles}] => ${to.meta.roles})`);
            next({ path: '/401', replace: true, query: { noGoBack: true } });
          }
        }
      }
    } else {
      console.log('has no token');
      if (whiteList.includes(to.path)) {
        console.info(`whiteList.indexOf(${to.path})`);
        next();
      } else {
        console.warn(`not whiteList.indexOf(${to.path})`);
        next(`/singin?redirect=${to.path}`);
      }
    }
  } catch (err) {
    console.warn('[router.beforeEach]', err);
  }
  console.groupEnd();
  NProgress.done();
});

router.afterEach(async () => {
  NProgress.done();
});
