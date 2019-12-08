/** When your routing table is too long, you can split it into small modules */

import Layout from '@/views/layout/Layout.vue';

const vuetifyRouter = {
  path: '/vuetify',
  component: Layout,
  redirect: 'noredirect',
  name: 'VuetifyDemo',
  meta: {
    title: 'route.vuetify',
    icon: 'view_compact',
  },
  children: [
    {
      path: '/grid',
      component: () => import('@/views/components/Vuetify/Grid.vue'),
      name: 'Grid',
      meta: { title: 'route.vuetifyComponents.grid', icon: 'alert', affix: true },
    },
    {
      path: '/alert',
      component: () => import('@/views/components/Vuetify/Alert.vue'),
      name: 'Alert',
      meta: { title: 'route.vuetifyComponents.alert', icon: 'alert', affix: true },
    },
    {
      path: '/avatar',
      component: () => import('@/views/components/Vuetify/Avatar.vue'),
      name: 'Avatar',
      meta: { title: 'route.vuetifyComponents.avatar', icon: 'avatar', affix: true },
    },
    {
      path: '/badge',
      component: () => import('@/views/components/Vuetify/Badge.vue'),
      name: 'Badge',
      meta: { title: 'route.vuetifyComponents.badge', icon: 'badge', affix: true },
    },
    {
      path: 'buttons',
      component: () => import('@/views/components/Vuetify/Buttons.vue'),
      name: 'Buttons',
      meta: { title: 'route.vuetifyComponents.buttons', icon: 'buttons', affix: true },
    },
    {
      path: 'calendar',
      component: () => import('@/views/components/Vuetify/Calendar.vue'),
      name: 'Calendar',
      meta: { title: 'route.vuetifyComponents.calendar', icon: 'calendar', affix: true },
    },
    {
      path: 'cards',
      component: () => import('@/views/components/Vuetify/Cards.vue'),
      name: 'Cards',
      meta: { title: 'route.vuetifyComponents.cards', icon: 'cards', affix: true },
    },
    {
      path: 'carousels',
      component: () => import('@/views/components/Vuetify/Carousels.vue'),
      name: 'Carousels',
      meta: { title: 'route.vuetifyComponents.carousels', icon: 'carousels', affix: true },
    },
    {
      path: 'chip',
      component: () => import('@/views/components/Vuetify/Chip.vue'),
      name: 'Chip',
      meta: { title: 'route.vuetifyComponents.chip', icon: 'chip', affix: true },
    },
    {
      path: 'colors',
      component: () => import('@/views/components/Vuetify/Colors.vue'),
      name: 'Colors',
      meta: { title: 'route.vuetifyComponents.colors', icon: 'colors', affix: true },
    },
    {
      path: 'datepicker',
      component: () => import('@/views/components/Vuetify/Datepicker.vue'),
      name: 'Datepicker',
      meta: { title: 'route.vuetifyComponents.datepicker', icon: 'datepicker', affix: true },
    },
    {
      path: 'dialogs',
      component: () => import('@/views/components/Vuetify/Dialogs.vue'),
      name: 'Dialogs',
      meta: { title: 'route.vuetifyComponents.dialogs', icon: 'dialogs', affix: true },
    },
    {
      path: 'icon',
      component: () => import('@/views/components/Vuetify/Icon.vue'),
      name: 'Icon',
      meta: { title: 'route.vuetifyComponents.icon', icon: 'icon', affix: true },
    },
    {
      path: 'pagination',
      component: () => import('@/views/components/Vuetify/Pagination.vue'),
      name: 'Pagination',
      meta: { title: 'route.vuetifyComponents.pagination', icon: 'pagination', affix: true },
    },
    {
      path: 'parallax',
      component: () => import('@/views/components/Vuetify/Parallax.vue'),
      name: 'Parallax',
      meta: { title: 'route.vuetifyComponents.parallax', icon: 'parallax', affix: true },
    },
    {
      path: 'progress',
      component: () => import('@/views/components/Vuetify/Progress.vue'),
      name: 'Progress',
      meta: { title: 'route.vuetifyComponents.progress', icon: 'progress', affix: true },
    },
    {
      path: 'slider',
      component: () => import('@/views/components/Vuetify/Slider.vue'),
      name: 'Slider',
      meta: { title: 'route.vuetifyComponents.slider', icon: 'slider', affix: true },
    },
    {
      path: 'snackbar',
      component: () => import('@/views/components/Vuetify/Snackbar.vue'),
      name: 'Snackbar',
      meta: { title: 'route.vuetifyComponents.snackbar', icon: 'snackbar', affix: true },
    },
    {
      path: 'tables',
      component: () => import('@/views/components/Vuetify/Tables.vue'),
      name: 'Tables',
      meta: { title: 'route.vuetifyComponents.tables', icon: 'tables', affix: true },
    },
    {
      path: 'timepicker',
      component: () => import('@/views/components/Vuetify/Timepicker.vue'),
      name: 'timepicker',
      meta: { title: 'route.vuetifyComponents.timepicker', icon: 'timepicker', affix: true },
    },
    {
      path: 'tooltip',
      component: () => import('@/views/components/Vuetify/Tooltip.vue'),
      name: 'Tooltip',
      meta: { title: 'route.vuetifyComponents.tooltip', icon: 'tooltip', affix: true },
    },
    {
      path: 'typography',
      component: () => import('@/views/components/Vuetify/Typography.vue'),
      name: 'Typography',
      meta: { title: 'route.vuetifyComponents.typography', icon: 'typography', affix: true },
    },
  ],
};

export default vuetifyRouter;
