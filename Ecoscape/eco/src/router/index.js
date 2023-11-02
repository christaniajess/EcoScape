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
  },
  {
    path: '/transport',
    name: 'Transport',
    component: Transport,
  }
  // {
  //   path: '/sign-in', // set the URL the user will visit
  //   name: 'signIn', // use this name as a shortcut in your links
  //   component: SignIn // load the SignIn component
  //  }
  // Add more routes as needed
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
// const router = createRouter({
//   // history: createWebHistory(process.env.BASE_URL),
//   routes
// });


// router.beforeEach((to, from, next) => {
//   const currentUser = Firebase.auth().currentUser;
//   const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
//   if (requiresAuth && !currentUser) {
//    next('/sign-in');
//   } else if (requiresAuth && currentUser) {
//    next();
//   } else {
//    next();
//   }
//   });
export default router;









