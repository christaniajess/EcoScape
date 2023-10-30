// main.js

import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router/index.js';
import 'font-awesome/css/font-awesome.min.css';
import store from './store/store';


const app = createApp(App);

app.use(router);
app.use(store);

app.mount('#app');
