/** When your routing table is too long, you can split it into small modules */

const authRouter = [
  {
    path: '/singin',
    alias: '/login',
    component: () => import('@/views/auth/SingIn.vue'),
    hidden: true,
  },
  {
    path: '/singup',
    alias: '/registration',
    component: () => import('@/views/auth/SingUp.vue'),
    hidden: true,
  },
];

export default authRouter;
