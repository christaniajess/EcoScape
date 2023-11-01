import { createRouter, createWebHistory } from 'vue-router';
import Homepage from '@/views/Homepage.vue';
import Attraction from '@/views/Attractions.vue';
import Hotel from '@/views/Hotels.vue';
import Restaurants from '@/views/Restaurants.vue';
import Individual from '@/views/Indiv.vue'; // Delete when done
import IndividualHotel from '@/views/IndivHotel.vue';

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
  {
    // testing only to see if can make the individual pages
    //Delete when done
    path: '/individual/:id',
    name: 'Individual',
    component: Individual,
  },
  {
    path: '/individualHotel/:id',
    name: 'IndividualHotel',
    component: IndividualHotel
}
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
