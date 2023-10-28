import { createRouter, createWebHistory } from 'vue-router';
import Homepage from '../views/Homepage.vue';

const routes = 
[
    {
        path:'/',
        name:'Homepage',
        component: Homepage,
    },

    //add more routes as needed
];

const router = createRouter(
    {
        history: createWebHistory(),
        routes,
    }
);
export default router;

