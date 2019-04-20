import router from './router';
import store from './store';
import NProgress from 'nprogress'; // progress bar
import 'nprogress/nprogress.css'; // progress bar style
import { getToken } from '@/utils/auth'; // get token from cookie

NProgress.configure({ showSpinner: false }); // NProgress Configuration

// permission judge function
function hasPermission(roles, permissionRoles) {
  if (roles.includes('admin')) return true; // admin permission passed directly
  if (!permissionRoles) return true;
  return roles.some(role => permissionRoles.indexOf(role) >= 0);
}

const whiteList = ['/login', '/auth-redirect']; // no redirect whitelist

router.beforeEach((to, from, next) => {
  NProgress.start(); // start progress bar
  console.log('beforeEach');
  if (getToken()) {
    // determine if there has token
    /* has token */
    if (to.path === '/login') {
      next({ path: '/' });
      // if current page is dashboard will not trigger afterEach hook, so manually handle it
      NProgress.done();
    } else {
      console.log('~4');
      if (store.getters.roles.length === 0) {
        // Determine whether the current user has pulled the user_info information
        store.dispatch('GetUserInfo')
          .then(res => {
            // Pull user_info
            const { roles } = res.data; // note: roles must be a object array! such as:
            // [{id: '1', name: 'editor'}, {id: '2', name: 'developer'}]
            store.dispatch('generateRoutes', { roles })
              .then(accessRoutes => {
                // Generate accessible routing tables based on roles
                router.addRoutes(accessRoutes); // Dynamically add accessible routing tables
                next({ ...to, replace: true }); // Hack method to ensure that addRoutes is complete,
                // set the replace: true so the navigation will not leave a history record
              });
          })
          .catch(err => {
            store.dispatch('FedLogOut')
              .then(() => {
                // Message.error(err);
                console.log(err);
                next({ path: '/' });
              });
          });
      } else {
        // No need to dynamically change permissions can be directly next()
        // delete the following permission judgment ↓
        if (hasPermission(store.getters.roles, to.meta.roles)) {
          next();
        } else {
          next({ path: '/401', replace: true, query: { noGoBack: true } });
        }
        console.log('~1');
        // can be deleted ↑
      }
      console.log('~2');
    }
  } else {
    /* has no token */
    if (whiteList.indexOf(to.path) !== -1) {
      // In the free login whitelist, go directly
      next();
    } else {
      next(`/login?redirect=${to.path}`); // Otherwise redirect all to the login page
      // if current page is login will not trigger afterEach hook, so manually handle it
      NProgress.done();
    }
    console.log('~3');
  }
});

router.afterEach(() => {
  NProgress.done(); // finish progress bar
});
