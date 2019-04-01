/** When your routing table is too long, you can split it into small modules */

import Layout from '@/views/layout/Layout.vue';

const errorsRouter = {
  path: '/error',
  component: Layout,
  redirect: 'noredirect',
  name: 'ErrorPages',
  meta: {
    title: 'errorPages',
    icon: 'error'
  },
  children: [
    {
      path: '401',
      component: () => import('@/views/error/401'),
      name: 'Page401',
      meta: { title: 'page401', noCache: true }
    },
    {
      path: '403',
      component: () => import('@/views/error/403'),
      name: 'Page403',
      meta: { title: 'page404', noCache: true }
    },
    {
      path: '404',
      component: () => import('@/views/error/404'),
      name: 'Page404',
      meta: { title: 'page404', noCache: true }
    },
    {
      path: '500',
      component: () => import('@/views/error/500'),
      name: 'Page500',
      meta: { title: 'page404', noCache: true }
    }
  ]
};

export default errorsRouter;
