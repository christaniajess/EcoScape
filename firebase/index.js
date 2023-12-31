// Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
// import { getAnalytics } from "firebase/analytics";
// import {getAuth} from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js'; 
// import {getFirestore} from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js';  
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";
// import {getFirestore, doc} from 'firebase/firestore'; 

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firestore = getFirestore(); 

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(firebaseApp);
const auth = getAuth(firebaseApp); 
const db = getFirestore(firebaseApp);

// detect auth state
onAuthStateChanged(auth, (user) => {
    if (user !== null) {
        console.log('logged in!');
    } else {
        console.log('No user');
    }
});
