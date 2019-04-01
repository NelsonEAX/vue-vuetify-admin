/** When your routing table is too long, you can split it into small modules */

import Layout from '@/views/layout/Layout.vue';

const vuetifyRouter = {
  path: '/vuetify',
  component: Layout,
  redirect: 'noredirect',
  name: 'VuetifyDemo',
  meta: {
    title: 'route.vuetify.vuetify',
    icon: 'view_compact'
  },
  children: [
    {
      path: 'alert',
      component: () => import('@/views/vuetify/Alert.vue'),
      name: 'Alert',
      // eslint-disable-next-line
      meta: { title: 'route.vuetify.alert', icon: 'alert', noCache: true, affix: true }
    },
    {
      path: 'buttons',
      component: () => import('@/views/vuetify/Buttons.vue'),
      name: 'Buttons',
      // eslint-disable-next-line
      meta: { title: 'route.vuetify.buttons', icon: 'buttons', noCache: true, affix: true }
    },
    {
      path: 'calendar',
      component: () => import('@/views/vuetify/Calendar.vue'),
      name: 'Calendar',
      // eslint-disable-next-line
      meta: { title: 'route.vuetify.calendar', icon: 'calendar', noCache: true, affix: true }
    }
  ]
};

export default vuetifyRouter;
