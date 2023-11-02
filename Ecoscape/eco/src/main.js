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
// import firebase from "firebase/compat/app"; 

// store.dispatch('checkUserAuthentication');


// Initialize Firebase with your configuration
// const firebaseApp = initializeApp(firebaseConfig);
// Create the Vue app instance
const app = createApp(App);

// Provide the Firebase app instance and the store to your Vue app
// app.config.globalProperties.$firebase = firebaseApp;
// app.use(store); 


// app.use(VueFire, {
//     firebaseApp,
//     modules: [VueFireFirestoreOptionsAPI()],
//   });
  
  
app.use(router);

// Mount the app to the DOM
app.mount('#app');




