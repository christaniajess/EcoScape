// src/firebase.js

// Import specific Firebase services
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

// https://firebase.google.com/docs/web/setup#available-libraries

// import firebase from "firebase/compat/app"; 
// import "firebase/compat/auth"; 
// import "firebase/compat/firestore"; 
// import "firebase/compat/database"; 

// const { getAuth, createUserWithEmailAndPassword } = require("firebase/auth");
// import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { VueFire, VueFireFirestoreOptionsAPI } from "vuefire";

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

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp)
// Get the authentication service
const auth = getAuth(app);
1
// Sign up route
app.post("/signup", (req, res) => {
  const newUser = {
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,

  };

  createUserWithEmailAndPassword(auth, newUser.email, newUser.password)
    .then((data) => {
      return res
         .status(201)
         .json({ message: `user ${data.user.uid} signed up successfully` });
    })
    .catch((err) => {
      console.error(err);
      return res.status(500).json({ error: err.code });
    });
});

exports.api = functions.https.onRequest(app);
export const numbersRef = collection(db, "numbers");
export default {firebaseApp, auth, db}; 
