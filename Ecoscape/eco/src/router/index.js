import { createRouter, createWebHistory } from 'vue-router';
import Homepage from '@/views/Homepage.vue';
import Attraction from '@/views/Attractions.vue';
import Hotel from '@/views/Hotels.vue';
import Restaurants from '@/views/Restaurants.vue';

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
  {
    path: '/hotels',
    name: 'Hotels',
    component: Hotel,
  },
  {
    path: '/restaurants',
    name: 'Restaurants',
    component: Restaurants,
  },
 

 
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
