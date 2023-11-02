
<template>
    <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>EcoScape</title>
      <!-- update the version number as needed -->
    <!-- <script defer src="/__/firebase/10.5.2/firebase-app-compat.js"></script> -->
    <!-- include only the Firebase features as you need -->
    <!-- <script defer src="/__/firebase/10.5.2/firebase-auth-compat.js"></script>
    <script defer src="/__/firebase/10.5.2/firebase-database-compat.js"></script>
    <script defer src="/__/firebase/10.5.2/firebase-firestore-compat.js"></script>
    <script defer src="/__/firebase/10.5.2/firebase-functions-compat.js"></script>
    <script defer src="/__/firebase/10.5.2/firebase-messaging-compat.js"></script>
    <script defer src="/__/firebase/10.5.2/firebase-storage-compat.js"></script>
    <script defer src="/__/firebase/10.5.2/firebase-analytics-compat.js"></script>
    <script defer src="/__/firebase/10.5.2/firebase-remote-config-compat.js"></script>
    <script defer src="/__/firebase/10.5.2/firebase-performance-compat.js"></script> -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9"
      crossorigin="anonymous"
    />
    </head>
    <NavBar/>
    <body> 
      
    <div class="container-fluid p-0">
      <div class="banner full-height p-0">
        <div class="section position-relative justify-content-center text-center">
          <div class="row full-height justify-content-center">
            <div class="text-center justify-content-center py-5">
              <div class="section try pb-5 pt-5 pt-sm-2 text-center">
                <h6 class="mb-0 pb-3">
                  <span>Sign Up</span>
                  <span>Log In</span>
                </h6>
                <input class="checkbox" type="checkbox" id="reg-log" name="reg-log" v-model="isLogin">
                <label for="reg-log"></label>
                <div class="card-3d-wrap mx-auto">
                  <div class="card-3d-wrapper">
                    <div class="card-front">
                      <div class="center-wrap">
                        <div class="section text-center">
                          <h4 class="mb-4 pb-3">Sign Up</h4>
                          <div class="form-group">
                          <input type="text" name="SignUpEmail" class="form-style" placeholder="Your Email (e.g james012@gmail.com)" id="SignUpEmail" autocomplete="off" v-model="signupName">
                          <i class="input-icon uil uil-user"></i>
                        </div>
                        <div class="form-group mt-2">
                          <input type="password" name="Signpass" class="form-style" placeholder="Your Password" id="Signpass" autocomplete="off" v-model="signupPassword">
                          <i class="input-icon uil uil-lock-alt"></i>
                        </div>
                        <div class="form-group mt-2">
                          <input type="password" name="confirmPass" class="form-style" placeholder="Confirm Password" id="confirmPass" autocomplete="off" v-model="confirmPassword">
                          <i class="input-icon uil uil-lock-alt"></i>
                        </div>
                        <!-- <div class="error" v-show="error">
                            {{ this.errorm }}
                        </div> -->
                        <a href="#" class="btn mt-4" id="word" @click="signUp">Sign Up</a>
                      </div>
                    </div>
                   </div>     
                    <div class="card-back">
                      <div class="center-wrap">
                        <div class="section text-center">
                          <h4 class="mb-4 pb-3">Log In</h4>
                          <div class="form-group">
                            <input type="text" name="logEmail" class="form-style" placeholder="Your Email (e.g james012@gmail.com)" id="logEmail" autocomplete="off" v-model="signupName">
                            <i class="input-icon uil uil-user"></i>
                          </div>
                          <div class="form-group mt-2">
                            <input type="password" name="logpass" class="form-style" placeholder="Your Password" id="logpass" autocomplete="off" v-model="signupPassword">
                            <i class="input-icon uil-lock-alt"></i>
                          </div>
                          <a href="#" class="btn mt-4" id="word" @click="isLogin">Log In</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
  <Footer/>

  </template>


<script>
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
</script>

<style scoped>
    @import url("https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css");
    @import url("https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css"); 
    /* bootstrap, icons & fonts  */
    @import url("https://unicons.iconscout.com/release/v2.1.9/css/unicons.css"); 

    @import url("https://fonts.googleapis.com/css?family=Poppins:400,500,600,700,800,900"); 


body {
    font-family: "Poppins", sans-serif;
    background-image: url("./images/sg1.jpg");
    /* opacity: 0.5;  */
    background-size: cover;
    background-repeat: no-repeat;
    font-weight: 300; 
    font-size: 15px; 
    line-height: 1.7; 
    color: #ddddda; 
    display: flex; 
    height: auto;
    width: 100%; 
    padding:0; 
    margin: 0 ; 
}


.lead{
    font-size: 12px;
    font-weight: 7; 
    text-decoration: underline;
}


h1 span {
    color:rgb(36, 140, 46); 
}
.navbar a:hover,
.navbar.active,
.navbar.active:focus,
.navbar li:hover>a {
    background: rgba(255, 255, 255, 0.2);
  }

.banner {
    margin: 0;
    padding:0; 
    width: 100%; 
    height: 100%;  
    z-index: 2;
}
a {
    cursor: pointer; 
    transition: all 200ms linear; 
}

a:hover{
    text-decoration: none;
}

.link{
    color: #c4c3ca; 
}

.link:hover{
    color:#ddead1; 
}

p{
    font-weight:500; 
    font-size: 14px; 
    line-height: 1.7; 
}

h4{
    font-weight:600; 
    font-size: 30px; 
}

h6 span {
    padding: 0 20px; 
    display:inline-block; 
    /* background-color: #2f4425 ; */
    text-transform: uppercase;
    font-weight: 700;
    font-size: 20px; 
    color:#ffffff; 
    margin: 5px; 
    
}

.section{
    position: relative; 
    margin-top: 19px; 
    max-width: 100%; 
    display: block; 

}

.full-height {
    min-height:100vh;

}

[type="checkbox"]{
    position:absolute;
    appearance: none; 
}

.checkbox:checked+label, 
.checkbox:not(:checked)+label {
    position:relative; 
    display: block;  
    text-align: center; 
    width: 60px; 
    height: 16px; 
    background-color: #e4e9ea; 
    border-radius: 8px; 
    padding:0; 
    margin: 10px auto; 
    cursor: pointer; 
}
.checkbox:checked+label:before, 
.checkbox:not(:checked)+label:before {
    position: absolute; 
    display: block; 
    width: 36px; 
    height: 36px; 
    background-color: #055a72;
    border-radius: 50%; 
    color: #ffffff;
    font-family: "unicons"; 
    content:"\eb4f"; 
    z-index: 20; 
    top: -10px; 
    left: -10px; 
    line-height: 36px; 
    text-align: center; 
    font-size: 24px;
    transition: all 0.5s ease; 

}

.checkbox:checked+label:before {
    transform: translateX(44px) rotate(-270deg); 
}

.card-3d-wrap {
    position:relative; 
    width: 440px; 
    max-width: 100%; 
    height: 400px; 
    transform-style: preserve-3d; 
    perspective: 800px; 
    margin-top: 60px; 
}

.card-3d-wrapper {
    width: 100%; 
    height: 100%; 
    display: flex; 
    gap: 10px; 
    position: absolute; 
    top:0; 
    left:0; 
    transform-style: preserve-3d; 
    transition: all 600ms ease-out; 
}

.card-front, .card-back {
    width: 100%; 
    height:100%; 
    background-color: #2f4425;
    background-position: bottom center; 
    background-repeat: no-repeat;
    background-size: 300%; 
    border-radius: 6px; 
    left:0;
    top:0; 
    transform-style:preserve-3d;
    backface-visibility: hidden;
}

.center-wrap{
    position:absolute; 
    width: 100%; 
    padding: 0 35px; 
    top: 50%; 
    left: 0; 
    transform: translate3d(0,-50%, 35px) perspective(100px); 
    z-index: 20; 
    display: block; 
}

.form-group{
    position: relative; 
    display: block; 
    margin: 0; 
    padding: 0; 
}

.form-style {
    color:#c4c3ca; 
    background-color: #1f2927;
    padding: 13px 20px; 
    padding-left: 55px; 
    height: 48px; 
    width: 100%; 
    font-weight: 500; 
    border-radius: 4px;
    font-size: 14px; 
    line-height: 22px; 
    letter-spacing: 0.5px; 
    outline: none; 
    border: none; 
    transition: all 200ms linear; 
    box-shadow: 0 4px 8px 0 rgba(21,21,21,0.2); 

}

.form-style:focus {
    border: none; 
    outline: none; 
    box-shadow: 0 4px 8px 0 rgba(21,21,21,0.2); 
}

.input-icon {
    position: absolute; 
    top: 7px; 
    left: 13px; 
    height: 48px; 
    font-size: 24px; 
    line-height: 35px; 
    text-align: left; 
    align-items: center;
    color: #ffffff; 
    transition: all 200ms linear; 
}

input:focus::-webkit-input-placeholder {
    opacity: 0;
    transition: all 200ms linear; 
}

.btn {
    background-color: #87ab69;
    color: #ffffff; 
    border-radius: 4px;
    height: 44px; 
    font-size: 15px; 
    font-weight: 600; 
    text-transform: uppercase; 
    transition: all 200ms linear; 
    padding: 0 30px; 
    letter-spacing: 1px;
    display:inline-flex; 
    align-items: center; 
    justify-content: center; 
    text-align: center; 
    border: none; 
    box-shadow: 0 8px 24px 0 rgba(255,235,167,0.2);
}

.btn:hover {
    background-color: #4A707A;
    color: #ffffff; 
    box-shadow: 0 8px 24px 0 rgba(16,39,112,0.2);
}

.card-front, 
.card-back {
    position: absolute; 
}

.card-back {
    transform: rotateY(180deg);
}

.checkbox:checked~.card-3d-wrap .card-3d-wrapper {
    transform:rotateY(180deg);
}

i {
    align-self: left ;
}

@media screen and (min-width: 1001px) {
    .try{
        justify-content: center;
    }
}

@media screen and (max-width: 1000px) {
    .try{
        justify-content: center;
    }
}

@media screen and (max-width: 700px) {
    .try{
        justify-content: center;
    }
}

@media screen and (max-width: 501px) {
    .try{
        justify-content: center;
    }
#footer-separation {
  background-color: #8ebe6d; /* Remove white space above and below */
  border: none; /* Remove the default line */
  height: 1px; /* Increase line thickness */
  width: 80%; /* Adjust width as needed */
  margin: 0 auto; /* Center the line horizontally */
}
}
</style>