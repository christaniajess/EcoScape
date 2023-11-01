// src/firebase.js

// Import specific Firebase services
// import { initializeApp } from 'firebase/app';
// import { getAuth } from 'firebase/auth';

const functions = require("firebase-functions");
const admin = require("firebase-admin");
const firebase = require("firebase/app");
const { getAuth, createUserWithEmailAndPassword } = require("firebase/auth");
const app = require("express")();
const { initializeApp } = require('firebase-admin/app');
import 'firebase/auth';

admin.initializeApp();
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

// Get the authentication service
const auth = getAuth();

// Sign up route
app.post("/signup", (req, res) => {
  const newUser = {
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
    handle: req.body.handle,
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

// Initialize Firebase
// const firebaseApp = initializeApp(firebaseConfig);


// export { auth }; // Export the auth service for use in your components
// export default firebaseApp;
// export {firebaseConfig};