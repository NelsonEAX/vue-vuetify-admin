/** When your routing table is too long, you can split it into small modules */

import Layout from '@/views/layout/Layout.vue';

const vuetifyRouter = {
  path: '/vuetify',
  component: Layout,
  redirect: 'noredirect',
  name: 'VuetifyDemo',
  meta: {
    title: 'route.vuetify',
    icon: 'view_compact'
  },
  children: [
    {
      path: '/grid',
      component: () => import('@/views/components/Vuetify/Grid.vue'),
      name: 'Grid',
      // eslint-disable-next-line
      meta: { title: 'route.vuetifyComponents.grid', icon: 'alert', noCache: true, affix: true }
    },
    {
      path: '/alert',
      component: () => import('@/views/components/Vuetify/Alert.vue'),
      name: 'Alert',
      // eslint-disable-next-line
      meta: { title: 'route.vuetifyComponents.alert', icon: 'alert', noCache: true, affix: true }
    },
    {
      path: 'buttons',
      component: () => import('@/views/components/Vuetify/Buttons.vue'),
      name: 'Buttons',
      // eslint-disable-next-line
      meta: { title: 'route.vuetifyComponents.buttons', icon: 'buttons', noCache: true, affix: true }
    },
    {
      path: 'calendar',
      component: () => import('@/views/components/Vuetify/Calendar.vue'),
      name: 'Calendar',
      // eslint-disable-next-line
      meta: { title: 'route.vuetifyComponents.calendar', icon: 'calendar', noCache: true, affix: true }
    }
  ]
};

export default vuetifyRouter;
