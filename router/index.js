import { createRouter } from 'vue-router';
import Homepage from "./src/views/Homepage.vue";

const routes = 
[
    {
        path: '/',
        name: 'Homepage',
        component: Homepage,
    },
    // Add more routes here
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;