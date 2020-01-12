/** When your routing table is too long, you can split it into small modules */

import Layout from '@/views/layout/TheLayout.vue';
import ErrorPage from '@/views/components/ErrorPage.vue';

const errorsRouter = {
  path: '/error',
  component: Layout,
  redirect: 'noredirect',
  name: 'ErrorPages',
  meta: {
    title: 'route.errors',
    icon: 'mdi-information',
  },
  children: [
    {
      path: '301',
      component: ErrorPage,
      name: 'Page301',
      meta: { title: 'route.errorPages.page301', noCache: true },
      props: { errorCode: 301 },
    },
    {
      path: '401',
      component: ErrorPage,
      name: 'Page401',
      meta: { title: 'route.errorPages.page401', noCache: true },
      props: { errorCode: 401 },
    },
    {
      path: '403',
      component: ErrorPage,
      name: 'Page403',
      meta: { title: 'route.errorPages.page403' },
      props: { errorCode: 403 },
    },
    {
      path: '404',
      component: ErrorPage,
      name: 'Page404',
      meta: { title: 'route.errorPages.page404' },
      props: { errorCode: 404 },
    },
    {
      path: '500',
      component: ErrorPage,
      name: 'Page500',
      meta: { title: 'route.errorPages.page500' },
      props: { errorCode: 500 },
    },
  ],
};

export default errorsRouter;
