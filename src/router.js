import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/home' },
    {
      name: 'home',
      path: '/home',
      components: {},
    },
    { path: '/:notFound(.*)', redirect: '/home' },
  ],
});

export default router;
