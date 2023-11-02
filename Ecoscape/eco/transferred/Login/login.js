
import firebase from "firebase/compat/app"; 
// import { initializeApp } from 'firebase/compat/functions';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import 'firebase/auth';
import 'firebase/firestore';
import {numbersRef} from "@/firebase/firebase.js"; 
import auth from "@/firebase/firebase.js";
import db from "@/firebase/firebase.js";
import { collection, getDoc, addDoc } from 'firebase/firestore';
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
import Dashboard from "@/components/Dashboard.vue";

// const firebaseConfig = {
//   apiKey: "AIzaSyDmN08IvkUv2vQn7o_Cbd5daeQ3OXxGRpo",
//   authDomain: "ecoscape-ea1d6.firebaseapp.com",
//   databaseURL: "https://ecoscape-ea1d6-default-rtdb.asia-southeast1.firebasedatabase.app",
//   projectId: "ecoscape-ea1d6",
//   storageBucket: "ecoscape-ea1d6.appspot.com",
//   messagingSenderId: "104462396856",
//   appId: "1:104462396856:web:bcaaa850fb71afed13b34d",
//   measurementId: "G-35CF9R9L0S"
// };

// firebase.initializeApp(firebaseConfig);



  
export default {
  components: {
    NavBar,
    Footer,
  },
  methods: {
    data() {
    return {
      email: "",
      password: "",
      error: null,
    };
  },
  methods: {
    async isLogin() {
      this.error = null;
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.$router.replace("dashboard");
        })
        .catch(error => {
          this.error = alert(error.message);
        });
    },
  },
    async signUp() {

      // 'users' collection reference
      const colRef = collection(db, 'users')
      //data to send
      const dataObj = {
        email : "james012@gmail.com", 
        password: "01212"
      }
      const docRef = await addDoc(colRef, dataObj)

      console.log('Document was created with ID', docRef.id)
      this.error = null;
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(() => {
          const user = firebase.auth().currentUser;
          const actionCodeSettings = {
            url: `${process.env.VUE_APP_HOST_NAME}/sign-in/?email=${user.email}`,
          };
          user.sendEmailVerification(actionCodeSettings);
        })
        .catch(error => {
          this.error = alert(error.message);
        });
    },
  },
  created() {
    this.$store.dispatch('checkUserAuthentication');
  },
};