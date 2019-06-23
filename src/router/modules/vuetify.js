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
      meta: { title: 'route.vuetifyComponents.grid', icon: 'alert', affix: true }
    },
    {
      path: '/alert',
      component: () => import('@/views/components/Vuetify/Alert.vue'),
      name: 'Alert',
      meta: { title: 'route.vuetifyComponents.alert', icon: 'alert', affix: true }
    },
    {
      path: '/avatar',
      component: () => import('@/views/components/Vuetify/Avatar.vue'),
      name: 'Avatar',
      meta: { title: 'route.vuetifyComponents.avatar', icon: 'avatar', affix: true }
    },
    {
      path: '/badge',
      component: () => import('@/views/components/Vuetify/Badge.vue'),
      name: 'Badge',
      meta: { title: 'route.vuetifyComponents.badge', icon: 'badge', affix: true }
    },
    {
      path: 'buttons',
      component: () => import('@/views/components/Vuetify/Buttons.vue'),
      name: 'Buttons',
      meta: { title: 'route.vuetifyComponents.buttons', icon: 'buttons', affix: true }
    },
    {
      path: 'calendar',
      component: () => import('@/views/components/Vuetify/Calendar.vue'),
      name: 'Calendar',
      meta: { title: 'route.vuetifyComponents.calendar', icon: 'calendar', affix: true }
    },
    {
      path: 'cards',
      component: () => import('@/views/components/Vuetify/Cards.vue'),
      name: 'Cards',
      meta: { title: 'route.vuetifyComponents.cards', icon: 'cards', affix: true }
    },
    {
      path: 'carousels',
      component: () => import('@/views/components/Vuetify/Carousels.vue'),
      name: 'Carousels',
      meta: { title: 'route.vuetifyComponents.carousels', icon: 'carousels', affix: true }
    },
    {
      path: 'chip',
      component: () => import('@/views/components/Vuetify/Chip.vue'),
      name: 'Chip',
      meta: { title: 'route.vuetifyComponents.chip', icon: 'chip', affix: true }
    },
    {
      path: 'colors',
      component: () => import('@/views/components/Vuetify/Colors.vue'),
      name: 'Colors',
      meta: { title: 'route.vuetifyComponents.colors', icon: 'colors', affix: true }
    },
    {
      path: 'datepicker',
      component: () => import('@/views/components/Vuetify/Datepicker.vue'),
      name: 'Datepicker',
      meta: { title: 'route.vuetifyComponents.datepicker', icon: 'datepicker', affix: true }
    },
    {
      path: 'dialogs',
      component: () => import('@/views/components/Vuetify/Dialogs.vue'),
      name: 'Dialogs',
      meta: { title: 'route.vuetifyComponents.dialogs', icon: 'dialogs', affix: true }
    },
    {
      path: 'icon',
      component: () => import('@/views/components/Vuetify/Icon.vue'),
      name: 'Icon',
      meta: { title: 'route.vuetifyComponents.icon', icon: 'icon', affix: true }
    }
  ]
};

export default vuetifyRouter;
