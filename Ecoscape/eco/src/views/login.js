// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

document.addEventListener("DOMContentLoaded", (event) => {
    if (typeof app == "undefined") {
      const app = firebase.initializeApp(firebaseConfig);
      console.log(app);
    }
  
    // prints the firebase connection to check for bug
    // console.log(app);x
    if (typeof db == "undefined") {
      db = firebase.firestore();
      auth = firebase.auth();
    }
  
});
