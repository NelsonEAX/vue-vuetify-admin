import Vue from 'vue';
import Router from 'vue-router';

/* Layout */
import Layout from '@/views/layout/Layout.vue';

/* Router Modules */
// import componentsRouter from './modules/components'
// import chartsRouter from './modules/charts'
// import tableRouter from './modules/table'
// import treeTableRouter from './modules/tree-table'
// import nestedRouter from './modules/nested'

import vuetifyRouter from './modules/vuetify';
import errorsRouter from './modules/errors';
import nestedRouter from './modules/nested';
// import componentsRouter from './modules/components';

Vue.use(Router);

/** note: sub-menu only appear when children.length>=1
 *  detail see  https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 */

/**
 * hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu, whatever its
 *                                child routes length
 *                                if not set alwaysShow, only more than one route under the children
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    will control the page roles (you can set multiple roles)
    title: 'title'               the name show in sub-menu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    noCache: true                if true, the page will no be cached(default is false)
    breadcrumb: false            if false, the item will hidden in breadcrumb(default is true)
    affix: true                  if true, the tag will affix in the tags-view
  }
 */
/*
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/About.vue'),
    },
    {
      path: '',
      component: Layout,
      redirect: 'dashboard',
      children: [
        {
          path: 'dashboard',
          component: () => import('@/views/'),
          name: 'Dashboard',
          // eslint-disable-next-line
          meta: { public: true, title: 'dashboard', icon: 'dashboard', noCache: true, affix: true },
        },
      ],
    },
    /** When your routing table is too long, you can split it into small modules * /
    // componentsRouter,
    vuetifyRouter,
  ],
}); */


export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login2',
    alias: '/singin',
    component: () => import('@/views/auth/SingIn') /* ,
    hidden: true */
  },
  {
    path: '/registration',
    alias: '/singup',
    component: () => import('@/views/auth/SingUp') /* ,
    hidden: true */
  },
  {
    path: '/redirect',
    component: () => import('@/views/auth/Redirect'),
    hidden: true
  },
  /* {
    path: 'dashboard',
    component: () => import('@/views/dashboard/index'),
    name: 'Dashboard',
    // eslint-disable-next-line
    meta: { title: 'route.dashboard', icon: 'dashboard', noCache: true, affix: true }
  }, */
  {
    path: '',
    component: Layout,
    redirect: 'dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        // eslint-disable-next-line
        meta: { title: 'route.dashboard', icon: 'dashboard', noCache: true, affix: true }
      }
    ]
  },
  errorsRouter
];

export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
});

export const asyncRoutes = [
  /** When your routing table is too long, you can split it into small modules */
  vuetifyRouter,
  nestedRouter,
  { path: '*', redirect: '/404', hidden: true }
];
