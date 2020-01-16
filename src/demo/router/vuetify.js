/** When your routing table is too long, you can split it into small modules */

import Layout from '@/views/layout/TheLayout.vue';

const vuetifyRouter = {
  path: '/vuetify',
  component: Layout,
  redirect: 'noredirect',
  name: 'VuetifyDemo',
  meta: {
    title: 'route.vuetify',
    icon: 'mdi-vuetify',
  },
  children: [
    {
      path: '/grid',
      component: () => import('@/demo/views/Vuetify/Grid.vue'),
      name: 'Grid',
      meta: { title: 'route.vuetifyComponents.grid', icon: 'alert', affix: true },
    },
    {
      path: '/alert',
      component: () => import('@/demo/views/Vuetify/Alert.vue'),
      name: 'Alert',
      meta: { title: 'route.vuetifyComponents.alert', icon: 'alert', affix: true },
    },
    {
      path: '/avatar',
      component: () => import('@/demo/views/Vuetify/Avatar.vue'),
      name: 'Avatar',
      meta: { title: 'route.vuetifyComponents.avatar', icon: 'avatar', affix: true },
    },
    {

      path: '/badge',
      component: () => import('@/demo/views/Vuetify/Badge.vue'),
      name: 'Badge',
      meta: { title: 'route.vuetifyComponents.badge', icon: 'badge', affix: true },
    },
    {
      path: 'buttons',
      component: () => import('@/demo/views/Vuetify/Buttons.vue'),
      name: 'Buttons',
      meta: { title: 'route.vuetifyComponents.buttons', icon: 'buttons', affix: true },
    },
    {
      path: 'calendar',
      component: () => import('@/demo/views/Vuetify/Calendar.vue'),
      name: 'Calendar',
      meta: { title: 'route.vuetifyComponents.calendar', icon: 'calendar', affix: true },
    },
    {
      path: 'cards',
      component: () => import('@/demo/views/Vuetify/Cards.vue'),
      name: 'Cards',
      meta: { title: 'route.vuetifyComponents.cards', icon: 'cards', affix: true },
    },
    {
      path: 'carousels',
      component: () => import('@/demo/views/Vuetify/Carousels.vue'),
      name: 'Carousels',
      meta: { title: 'route.vuetifyComponents.carousels', icon: 'carousels', affix: true },
    },
    {
      path: 'chip',
      component: () => import('@/demo/views/Vuetify/Chip.vue'),
      name: 'Chip',
      meta: { title: 'route.vuetifyComponents.chip', icon: 'chip', affix: true },
    },
    {
      path: 'colors',
      component: () => import('@/demo/views/Vuetify/Colors.vue'),
      name: 'Colors',
      meta: { title: 'route.vuetifyComponents.colors', icon: 'colors', affix: true },
    },
    {
      path: 'datepicker',
      component: () => import('@/demo/views/Vuetify/Datepicker.vue'),
      name: 'Datepicker',
      meta: { title: 'route.vuetifyComponents.datepicker', icon: 'datepicker', affix: true },
    },
    {
      path: 'dialogs',
      component: () => import('@/demo/views/Vuetify/Dialogs.vue'),
      name: 'Dialogs',
      meta: { title: 'route.vuetifyComponents.dialogs', icon: 'dialogs', affix: true },
    },
    {
      path: 'icon',
      component: () => import('@/demo/views/Vuetify/Icon.vue'),
      name: 'Icon',
      meta: { title: 'route.vuetifyComponents.icon', icon: 'icon', affix: true },
    },
    {
      path: 'pagination',
      component: () => import('@/demo/views/Vuetify/Pagination.vue'),
      name: 'Pagination',
      meta: { title: 'route.vuetifyComponents.pagination', icon: 'pagination', affix: true },
    },
    {
      path: 'parallax',
      component: () => import('@/demo/views/Vuetify/Parallax.vue'),
      name: 'Parallax',
      meta: { title: 'route.vuetifyComponents.parallax', icon: 'parallax', affix: true },
    },
    {
      path: 'progress',
      component: () => import('@/demo/views/Vuetify/Progress.vue'),
      name: 'Progress',
      meta: { title: 'route.vuetifyComponents.progress', icon: 'progress', affix: true },
    },
    {
      path: 'slider',
      component: () => import('@/demo/views/Vuetify/Slider.vue'),
      name: 'Slider',
      meta: { title: 'route.vuetifyComponents.slider', icon: 'slider', affix: true },
    },
    {
      path: 'snackbar',
      component: () => import('@/demo/views/Vuetify/Snackbar.vue'),
      name: 'Snackbar',
      meta: { title: 'route.vuetifyComponents.snackbar', icon: 'snackbar', affix: true },
    },
    {
      path: 'tables',
      component: () => import('@/demo/views/Vuetify/Tables.vue'),
      name: 'Tables',
      meta: { title: 'route.vuetifyComponents.tables', icon: 'tables', affix: true },
    },
    {
      path: 'timepicker',
      component: () => import('@/demo/views/Vuetify/Timepicker.vue'),
      name: 'timepicker',
      meta: { title: 'route.vuetifyComponents.timepicker', icon: 'timepicker', affix: true },
    },
    {
      path: 'tooltip',
      component: () => import('@/demo/views/Vuetify/Tooltip.vue'),
      name: 'Tooltip',
      meta: { title: 'route.vuetifyComponents.tooltip', icon: 'tooltip', affix: true },
    },
    {
      path: 'typography',
      component: () => import('@/demo/views/Vuetify/Typography.vue'),
      name: 'Typography',
      meta: { title: 'route.vuetifyComponents.typography', icon: 'typography', affix: true },
    },
  ],
};

export default vuetifyRouter;
