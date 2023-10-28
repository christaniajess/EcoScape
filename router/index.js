import { createRouter } from 'vue-router';
import Homepage from '';

const routers = 
[
    {
        path:'/',
        name:'Homepage',
        component: Homeapge,
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