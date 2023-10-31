import { createRouter, createWebHistory } from 'vue-router';
import Homepage from '@/views/Homepage.vue';
import Login from '@/views/Login.vue';
import NotFound from '@/views/NotFound.vue';

const routes = [
  {
    path: '/',
    name: 'Homepage',
    component: Homepage,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  //catchall404
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound,
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      };
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
