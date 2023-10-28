// import Vue from 'vue'
// import Chakra, { CThemeProvider } from '@chakra-ui/vue'
// import App from './App.vue'


// Vue.use(Chakra)

// new Vue({
//   el: '#app',
//   render: (h) => h(CThemeProvider, [h(App)]);
//   render: (h) => h(CThemeProvider, [h(CReset), h(App)])
// }).$mount()



// import { createApp } from 'vue';
// import app from './app.vue';
// import router from '/src/router/index.js';
// import 'font-awesome/css/font-awesome.min.css';

// const app = createApp(app);

// app.mount('#app');

import Vue from 'vue';
import App from './App.vue'; // Assuming this is your main app component
import Tabs from './Tabs.vue'; // Import the Tabs component

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');