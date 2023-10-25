import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import routes from '/router/index.js';

// Create a Vue app instance
const app = createApp(App);

// Create a Vue Router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Use the Vue Router in your app
app.use(router);

// Mount your Vue app to an HTML element
app.mount('#app');
