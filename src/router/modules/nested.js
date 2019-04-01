/** When your routing table is too long, you can split it into small modules */

import Layout from '@/views/layout/Layout.vue';

const nestedRouter = {
  path: '/nested',
  component: Layout,
  redirect: 'noredirect',
  name: 'NestedMenu',
  meta: {
    title: 'route.nested.nested',
    icon: 'looks_one'
  },
  children: [
    {
      path: 'nested1',
      component: () => import('@/views/dashboard/index'),
      name: 'Nested1',
      // eslint-disable-next-line
      meta: { title: 'route.nested.nested1', icon: 'looks_two', noCache: true, affix: true },
      children: [
        {
          path: 'nested1_1',
          component: () => import('@/views/dashboard/index'),
          name: 'Nested1_1',
          // eslint-disable-next-line
          meta: { title: 'route.nested.nested2', icon: 'looks_3', noCache: true, affix: true },
          children: [
            {
              path: 'nested1_1_1',
              component: () => import('@/views/dashboard/index'),
              name: 'Nested1_1_1',
              // eslint-disable-next-line
              meta: { title: 'route.nested.nested2', icon: 'looks_4', noCache: true, affix: true }
            },
            {
              path: 'nested1_1_2',
              component: () => import('@/views/dashboard/index'),
              name: 'Nested1_1_2',
              // eslint-disable-next-line
              meta: { title: 'route.nested.nested2', icon: 'looks_4', noCache: true, affix: true }
            },
            {
              path: 'nested1_1_3',
              component: () => import('@/views/dashboard/index'),
              name: 'Nested1_1_3',
              // eslint-disable-next-line
              meta: { title: 'route.nested.nested2', icon: 'looks_4', noCache: true, affix: true }
            }
          ]
        },
        {
          path: 'nested1_2',
          component: () => import('@/views/dashboard/index'),
          name: 'Nested1_2',
          // eslint-disable-next-line
          meta: { title: 'route.nested.nested2', icon: 'looks_3', noCache: true, affix: true }
        },
        {
          path: 'nested1_3',
          component: () => import('@/views/dashboard/index'),
          name: 'Nested1_3',
          // eslint-disable-next-line
          meta: { title: 'route.nested.nested2', icon: 'looks_3', noCache: true, affix: true }
        }
      ]
    },
    {
      path: 'nested2',
      component: () => import('@/views/dashboard/index'),
      name: 'Nested2',
      // eslint-disable-next-line
      meta: { title: 'route.nested.nested1', icon: 'looks_two', noCache: true, affix: true }
    },
    {
      path: 'nested3',
      component: () => import('@/views/dashboard/index'),
      name: 'Nested3',
      // eslint-disable-next-line
      meta: { title: 'route.nested.nested1', icon: 'looks_two', noCache: true, affix: true }
    }
  ]
};

export default nestedRouter;
