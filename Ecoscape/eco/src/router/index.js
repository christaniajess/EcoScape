import { createRouter, createWebHistory } from 'vue-router';
import Homepage from '@/views/Homepage.vue';
import Login from '@/views/Login.vue';
import store from "@/store/index.js"; // Assuming you have a Vuex store

const routes = [
  {
    path: '/',
    name: 'Homepage',
    component: Homepage,
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login,
  },
  {
    path: "/Dashboard",
    name: "Dashboard",
    component: () => import("@/components/Dashboard.vue"),
    meta: { requiresAuth: true }, // Add this meta field to specify that authentication is required
  }
  // Add more routes as needed
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  // Check if the route requires authentication
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    // Check if the user is authenticated
    if (store.getters.isUserAuthenticated) { // Adjust this to your Vuex store's state
      next(); // Continue to the requested route
    } else {
      next({ name: "Login" }); // Redirect to the login page (or any other route)
    }
  } else {
    next(); // No authentication required, continue to the route
  }
});

export default router;






