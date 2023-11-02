import { createRouter, createWebHistory } from 'vue-router';
import Homepage from '@/views/Homepage.vue';
import Login from '@/views/Login.vue';
import NotFound from '@/views/NotFound.vue';
import Transport from '@/views/Transport.vue';
import Attraction from '@/views/Attractions.vue';
import Hotel from '@/views/Hotels.vue';
import Restaurants from '@/views/Restaurants.vue';
import Individual from '@/views/Indiv.vue'; // Delete when done
import IndividualHotel from '@/views/IndivHotel.vue';
import IndividualRest from '@/views/IndivRest.vue';


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
  {
    path: '/transport',
    name: 'Transport',
    component: Transport,
  },
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
    // testing only to see if can make the individual pages
    //Delete when done
  //   path: '/individual/:id',
  //   name: 'Individual',
  //   component: Individual,
  // },
  // {
  //   path: '/individualHotel/:id',
  //   name: 'IndividualHotel',
  //     component: IndividualHotel
  // },
  // {
  //   path: '/individualRest/:id',
  //   name: 'IndividualRest',
  //   component: IndividualRest
  // },
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
