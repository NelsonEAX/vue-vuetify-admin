import NProgress from 'nprogress'; // progress bar
import router from './router';
import store from './store';
import authRouter from './router/modules/auth';
import 'nprogress/nprogress.css'; // progress bar style

NProgress.configure({ showSpinner: false }); // NProgress Configuration

// Generate white list
const whiteList = (['/landing', '/land']
  .concat(Array.from(authRouter, route => route.path))
  .concat(Array.from(authRouter, route => route.alias)))
  .filter(route => route); // remove undefined element
console.log('whiteList', whiteList);

// permission judge function
function hasPermission(roles, permissionRoles) {
  if (roles.includes('admin')) return true; // admin permission passed directly
  if (!permissionRoles) return true;
  return roles.some(role => permissionRoles.indexOf(role) >= 0);
}

router.beforeEach((to, from, next) => {
  NProgress.start(); // start progress bar
  console.groupCollapsed(`beforeEach ${to.path}`);
  if (store.getters.token) {
    // determine if there has token
    /* has token */
    console.log('has token');
    if (whiteList.includes(to.path)) {
      console.log('/login');
      next({ path: '/' });
      // if current page is dashboard will not trigger afterEach hook, so manually handle it
      NProgress.done();
    } else {
      console.log('not /login');
      if (!store.getters.roles || store.getters.roles.length === 0) {
        console.warn('roles.length === 0');
        // Determine whether the current user has pulled the user_info information
        store.dispatch('GetUserInfo')
          .then(res => {
            console.log('GetUserInfo', res);
            // Pull user_info
            const { roles } = res.data.user; // note: roles must be a object array! such as:
            // [{id: '1', name: 'editor'}, {id: '2', name: 'developer'}]
            store.dispatch('GenerateRoutes', { roles })
              .then(accessRoutes => {
                console.log('GenerateRoutes', accessRoutes);
                // Generate accessible routing tables based on roles
                router.addRoutes(accessRoutes); // Dynamically add accessible routing tables
                next({ ...to, replace: true }); // Hack method to ensure that addRoutes is complete,
                // set the replace: true so the navigation will not leave a history record
              })
              .catch(err => {
                console.log(`GenerateRoutes ${err}`);
                next({ path: '/' });
              });
          })
          .catch(err => {
            store.dispatch('LogOut')
              .then(() => {
                // Message.error(err);
                console.log(`LogOut ${err}`);
                next({ path: '/' });
              });
          });
      } else {
        console.warn('roles.length !== 0');
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
    /* has no token */
    console.log('has no token');
    if (whiteList.includes(to.path)) {
      console.info(`whiteList.indexOf(${to.path})`);
      // In the free login whitelist, go directly
      next();
    } else {
      console.warn(`not whiteList.indexOf(${to.path})`);
      next(`/login?redirect=${to.path}`); // Otherwise redirect all to the login page
      // if current page is login will not trigger afterEach hook, so manually handle it
      NProgress.done();
    }
  }
  console.groupEnd();
});

router.afterEach(() => {
  NProgress.done();
});
