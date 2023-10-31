// src/firebase.js

// Import specific Firebase services
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your Firebase configuration
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

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Get the authentication service
const auth = getAuth(app);

export { auth }; // Export the auth service for use in your components
export default firebaseApp;
export {firebaseConfig};