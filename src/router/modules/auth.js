/** When your routing table is too long, you can split it into small modules */

const authRouter = [
  {
    path: '/login',
    alias: '/singin',
    component: () => import('@/views/auth/SingIn.vue'),
    hidden: true,
  },
  {
    path: '/registration',
    alias: '/singup',
    component: () => import('@/views/auth/SingUp.vue'),
    hidden: true,
  },
];

export default authRouter;
