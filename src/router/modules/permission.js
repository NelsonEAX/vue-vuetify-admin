/** When your routing table is too long, you can split it into small modules */

import Layout from '@/views/layout/TheLayout.vue';

const permissionRouter = {
  path: '/permission',
  component: Layout,
  redirect: 'noredirect',
  name: 'Permission',
  meta: {
    title: 'route.permissions',
    icon: 'mdi-account-group',
  },
  children: [
    {
      path: 'admin',
      component: () => import('@/views/components/Permission/Admin.vue'),
      name: 'PermissionAdmin',
      meta: { title: 'route.permission.admin', roles: ['admin'], noCache: true },
    },
    {
      path: 'editor',
      component: () => import('@/views/components/Permission/Editor.vue'),
      name: 'PermissionEditor',
      meta: { title: 'route.permission.editor', roles: ['editor'], noCache: true },
    },
    {
      path: 'visitor',
      component: () => import('@/views/components/Permission/Visitor.vue'),
      name: 'PermissionVisitor',
      meta: { title: 'route.permission.visitor', roles: ['visitor'], noCache: true },
    },
  ],
};

export default permissionRouter;
