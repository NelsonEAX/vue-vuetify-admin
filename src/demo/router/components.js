/** When your routing table is too long, you can split it into small modules */

import Layout from '@/views/layout/TheLayout.vue';

const componentsRouter = [
  {
    path: '/components',
    component: Layout,
    redirect: '/components/tinymce',
    name: 'ComponentDemo',
    meta: {
      title: 'route.components',
      icon: 'mdi-view-module',
    },
    children: [
      {
        path: 'tinymce',
        component: () => import('@/demo/views/Components/tinymce'),
        name: 'TinymceDemo',
        meta: { title: 'route.component.tinymce' },
      },
      {
        path: 'markdown',
        component: () => import('@/demo/views/Components/markdown'),
        name: 'MarkdownDemo',
        meta: { title: 'route.component.markdown' },
      },
      {
        path: 'json-editor',
        component: () => import('@/demo/views/Components/jsonEditor'),
        name: 'JsonEditorDemo',
        meta: { title: 'route.component.jsonEditor' },
      },
      {
        path: 'splitpane',
        component: () => import('@/demo/views/Components/splitpane'),
        name: 'SplitpaneDemo',
        meta: { title: 'route.component.splitPane' },
      },
      {
        path: 'dropzone',
        component: () => import('@/demo/views/Components/dropzone'),
        name: 'DropzoneDemo',
        meta: { title: 'route.component.dropzone' },
      },
      {
        path: 'sticky',
        component: () => import('@/demo/views/Components/sticky'),
        name: 'StickyDemo',
        meta: { title: 'route.component.sticky' },
      },
      {
        path: 'count-to',
        component: () => import('@/demo/views/Components/countTo'),
        name: 'CountToDemo',
        meta: { title: 'route.component.countTo' },
      },
      {
        path: 'back-to-top',
        component: () => import('@/demo/views/Components/backToTop'),
        name: 'BackToTopDemo',
        meta: { title: 'route.component.backToTop' },
      },
      {
        path: 'drag-kanban',
        component: () => import('@/demo/views/Components/dragKanban'),
        name: 'DragKanbanDemo',
        meta: { title: 'route.component.dragKanban' },
      },
    ],
  },
  {
    path: '/charts',
    component: Layout,
    redirect: '/charts/keyboard',
    name: 'Charts',
    meta: {
      title: 'route.charts',
      icon: 'mdi-chart-bar',
    },
    children: [
      {
        path: 'keyboard',
        component: () => import('@/demo/views/Components/chart.vue'),
        name: 'KeyboardChart',
        meta: { title: 'route.chart.keyboardChart', noCache: true },
        props: { keyboard: true },
      },
      {
        path: 'line',
        component: () => import('@/demo/views/Components/chart.vue'),
        name: 'LineChart',
        meta: { title: 'route.chart.lineChart', noCache: true },
        props: { line: true },
      },
      {
        path: 'mix-chart',
        component: () => import('@/demo/views/Components/chart.vue'),
        name: 'MixChart',
        meta: { title: 'route.chart.mixChart', noCache: true },
        props: { mix: true },
      },
    ],
  },
  /*
  {
    path: '/excel',
    component: Layout,
    redirect: '/excel/export-excel',
    name: 'Excel',
    meta: {
      title: 'excel',
      icon: 'excel'
    },
    children: [
      {
        path: 'export-excel',
        component: () => import('@/demo/views/excel/export-excel'),
        name: 'ExportExcel',
        meta: { title: 'exportExcel' }
      },
      {
        path: 'export-selected-excel',
        component: () => import('@/demo/views/excel/select-excel'),
        name: 'SelectExcel',
        meta: { title: 'selectExcel' }
      },
      {
        path: 'export-merge-header',
        component: () => import('@/demo/views/excel/merge-header'),
        name: 'MergeHeader',
        meta: { title: 'mergeHeader' }
      },
      {
        path: 'upload-excel',
        component: () => import('@/demo/views/excel/upload-excel'),
        name: 'UploadExcel',
        meta: { title: 'uploadExcel' }
      }
    ]
  }, */
  /*
  {
    path: '/zip',
    component: Layout,
    redirect: '/zip/download',
    alwaysShow: true,
    name: 'Zip',
    meta: { title: 'zip', icon: 'zip' },
    children: [
      {
        path: 'download',
        component: () => import('@/demo/views/zip/index'),
        name: 'ExportZip',
        meta: { title: 'exportZip' }
      }
    ]
  }, */
  /*
  {
    path: '/pdf',
    component: Layout,
    redirect: '/pdf/index',
    children: [
      {
        path: 'index',
        component: () => import('@/demo/views/pdf/index'),
        name: 'PDF',
        meta: { title: 'pdf', icon: 'pdf' }
      }
    ]
  },
  {
    path: '/pdf/download',
    component: () => import('@/demo/views/pdf/download'),
    hidden: true
  }, */

  /* {
    path: '/clipboard',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/demo/views/Components/clipboard.vue'),
        name: 'ClipboardDemo',
        meta: { title: 'route.clipboard', icon: 'clipboard' }
      }
    ]
  }, */

  /* {
    path: 'external-link',
    component: Layout,
    children: [
      {
        path: 'https://github.com/NelsonEAX/vue-vuetify-admin',
        meta: { title: 'route.externalLink', icon: 'link' }
      }
    ]
  } */
];

export default componentsRouter;
