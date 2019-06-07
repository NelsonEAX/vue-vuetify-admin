/** When your routing table is too long, you can split it into small modules */

import Layout from '@/views/layout/Layout.vue';

const chartsRouter = {
  path: '/charts',
  component: Layout,
  redirect: 'noRedirect',
  name: 'Charts',
  meta: {
    title: 'route.charts',
    icon: 'bar_chart'
  },
  children: [
    {
      path: 'keyboard',
      component: () => import('@/views/components-demo/chart.vue'),
      name: 'KeyboardChart',
      meta: { title: 'route.chart.keyboardChart', noCache: true },
      props: { keyboard: true }
    },
    {
      path: 'line',
      component: () => import('@/views/components-demo/chart.vue'),
      name: 'LineChart',
      meta: { title: 'route.chart.lineChart', noCache: true },
      props: { line: true }
    },
    {
      path: 'mix-chart',
      component: () => import('@/views/components-demo/chart.vue'),
      name: 'MixChart',
      meta: { title: 'route.chart.mixChart', noCache: true },
      props: { mix: true }
    }
  ]
};

export default chartsRouter;
