// main.js

import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router/index.js';
import 'font-awesome/css/font-awesome.min.css';
import store from './store/store';
import VueGoogleMaps from '@fawmi/vue-google-maps';



const app = createApp(App);

app.use(router);
app.use(store);
app.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyAEdK4QmPR7xGkCxDcpoD1GLKBwBL-R0zQ',
    },
})

app.mount('#app');
