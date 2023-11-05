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
import { getFirestore } from 'firebase/firestore';
import { initializeApp} from 'firebase/app'; 
import VueGoogleMaps from '@fawmi/vue-google-maps'; 

// import firebase from "firebase/compat/app"; 
const firebaseConfig = {
    apiKey: "AIzaSyDmN08IvkUv2vQn7o_Cbd5daeQ3OXxGRpo",
    authDomain: "ecoscape-ea1d6.firebaseapp.com",
    databaseURL: "https://ecoscape-ea1d6-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "ecoscape-ea1d6",
    storageBucket: "ecoscape-ea1d6.appspot.com",
    messagingSenderId: "104462396856",
    appId: "1:104462396856:web:bcaaa850fb71afed13b34d",
    measurementId: "G-35CF9R9L0S"
  };

  const app = createApp(App);

const firebaseApp = initializeApp(firebaseConfig);
// Provide FirebaseApp instance to Vue for global use
app.config.globalProperties.$firebaseApp = firebaseApp;

// Initialize Firestore
const db = getFirestore(firebaseApp);

// store.dispatch('checkUserAuthentication')

app.use(router);
app.use(store);
// app.use(VueGoogleMaps, {
//     load: {
//         key: 'AIzaSyDmN08IvkUv2vQn7o_Cbd5daeQ3OXxGRpo',
//         libraries: "places", // Include additional libraries as needed

//     },
// })

app.mount('#app');

  





