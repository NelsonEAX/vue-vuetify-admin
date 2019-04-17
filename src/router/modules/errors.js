/** When your routing table is too long, you can split it into small modules */

import Layout from '@/views/layout/Layout.vue';

const errorsRouter = {
  path: '/error',
  component: Layout,
  redirect: 'noredirect',
  name: 'ErrorPages',
  meta: {
    title: 'route.errorPages',
    icon: 'error'
  },
  children: [
    {
      path: '401',
      component: () => import('@/views/error/pg401'),
      name: 'Page401',
      meta: { title: 'route.page401', noCache: true }
    },
    {
      path: '403',
      component: () => import('@/views/error/pg403'),
      name: 'Page403',
      meta: { title: 'route.page403', noCache: true }
    },
    {
      path: '404',
      component: () => import('@/views/error/pg404'),
      name: 'Page404',
      meta: { title: 'route.page404', noCache: true }
    },
    {
      path: '500',
      component: () => import('@/views/error/pg500'),
      name: 'Page500',
      meta: { title: 'route.page500', noCache: true }
    }
  ]
};

export default errorsRouter;
