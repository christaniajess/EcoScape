// import Vue from 'vue'
// import Chakra, { CThemeProvider } from '@chakra-ui/vue'
// import App from './App.vue'


// Vue.use(Chakra)

// new Vue({
//   el: '#app',
//   render: (h) => h(CThemeProvider, [h(App)]);
//   render: (h) => h(CThemeProvider, [h(CReset), h(App)])
// }).$mount()



import { createApp } from 'vue';
import App from './app.vue';
import 'font-awesome/css/font-awesome.min.css';

const app = createApp(App);

app.mount('#app');

