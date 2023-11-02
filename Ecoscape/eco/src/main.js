// main.js

// Ensure that the checkUserAuthentication action is called when the app is created
// This makes sure the user's authentication status is checked right at the app start
// import firebaseApp from '@/firebase/firebase.js'; 
import { createApp } from 'vue';
import App from './App.vue';
// import {firebaseConfig} from './firebase/firebase.js'; // Import your Firebase configuration
import store from "./store/index.js"; 
import router from './router/index.js';
import 'font-awesome/css/font-awesome.min.css';
// import VueGoogleMaps from '@fawmi/vue-google-maps';

// import firebase from "firebase/compat/app"; 

// store.dispatch('checkUserAuthentication')



const app = createApp(App);

app.use(router);
app.use(store);
// app.use(VueGoogleMaps, {
//     load: {
//         key: 'AIzaSyAEdK4QmPR7xGkCxDcpoD1GLKBwBL-R0zQ',
//     },
// })

app.mount('#app');
// Initialize Firebase with your configuration
// const firebaseApp = initializeApp(firebaseConfig);
// Create the Vue app instance

// Provide the Firebase app instance and the store to your Vue app
// app.config.globalProperties.$firebase = firebaseApp;
// app.use(store); 


// app.use(VueFire, {
//     firebaseApp,
//     modules: [VueFireFirestoreOptionsAPI()],
//   });
  
  





