import { createRouter, createWebHistory } from 'vue-router';
import Homepage from '@/views/Homepage.vue';
import Attraction from '@/views/Attractions.vue';

const routes = [
  {
    path: '/',
    name: 'Homepage',
    component: Homepage,
  },
  // Add more routes as needed
  {
    path: '/att',
    name: 'Attraction',
    component: Attraction,
  },
  // {
  //   path: '/hotels',
  //   name: 'Hotels',
  //   component: Hotel,
  // },
 

 
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
