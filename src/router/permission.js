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
console.log('[router.whiteList]', whiteList);

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
  let logMsg = '[router.beforeEach]';
  try {
    // determine if there has token
    if (store.getters.token) {
      logMsg += '\t[token]';
      if (whiteList.includes(to.path)) {
        logMsg += '\t[whiteList]';
        next({ path: '/' });
      } else {
        logMsg += '\t[!whiteList]';
        if (!store.getters.roles || store.getters.roles.length === 0) {
          logMsg += `\t[roles=${store.getters.roles}]`;
          // Determine whether the current user has pulled the user_info information
          await store.dispatch('GetUserInfo');
          if (!store.getters.user || !store.getters.user.roles) {
            logMsg += '\t[LogOut]\t[next /]';
            await store.dispatch('LogOut');
            next({ path: '/' });
          }

          // note: roles must be a object array! such as:
          // [{id: '1', name: 'editor'}, {id: '2', name: 'developer'}]
          await store.dispatch('GenerateRoutes', store.getters.user);
          if (!store.getters.permissionRoutes) {
            logMsg += '\t[Redirect]\t[next /]';
            next({ path: '/' });
          }

          // Hack method to ensure that addRoutes is complete,
          // set the replace: true so the navigation will not leave a history record
          next({ ...to, replace: true });
        } else {
          logMsg += `\t[roles=${store.getters.roles}]`;
          // No need to dynamically change permissions can be directly next()
          // delete the following permission judgment ↓
          if (hasPermission(store.getters.roles, to.meta.roles)) {
            logMsg += `\t[Permission=${to.meta.roles}]\t[next]`;
            next();
          } else {
            logMsg += `\t[!Permission=${to.meta.roles}]\t[next /401]`;
            next({ path: '/401', replace: true, query: { noGoBack: true } });
          }
        }
      }
    } else {
      logMsg += '\t[!token]';
      if (whiteList.includes(to.path)) {
        logMsg += '\t[whiteList]';
        next();
      } else {
        logMsg += '\t[!whiteList]';
        next(`/singin?redirect=${to.path}`);
      }
    }
  } catch (err) {
    console.warn(`[router.beforeEach]\t${to.path}: ${err}`);
  }
  console.log(logMsg, to.path);
  NProgress.done();
});

router.afterEach(async () => {
  NProgress.done();
});
