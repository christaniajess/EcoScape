<template>
    
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css">
    <div>
      <header class="navbar">
        <div class="container">
          <div class="logo">
            <h1><a href="#"><span>ECOSCAPE</span></a></h1>
          </div>
  
          <nav>
            <ul>
              <li><a class="nav-link" href="#hero">Home</a></li>
              <li><a class="nav-link" href="#about">About Us</a></li>
              <!-- Other navigation items -->
            </ul>
          </nav>
  
          <div class="user-info" v-if="userLoggedIn">
            <div class="dropdown">
              <span class="dropdown-toggle" id="userDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Hello, {{ userName }}
              </span>
              <div class="dropdown-menu" aria-labelledby="userDropdown">
                <a class="dropdown-item" @click="logout">Sign Out</a>
              </div>
            </div>
          </div>
        </div>
      </header>
    <div class="container-fluid p-0">
      <div class="banner full-height p-0">
        <div class="section position-relative justify-content-center text-center">
          <div class="row full-height justify-content-center">
            <div class="text-center justify-content-center py-5">
              <div class="section try pb-5 pt-5 pt-sm-2 text-center">
                <h6 class="mb-0 pb-3">
                  <span v-if="isLogin">Log In</span>
                  <span v-else>Sign Up</span>
                </h6>
                <input class="checkbox" type="checkbox" id="reg-log" name="reg-log" v-model="isLogin">
                <label for="reg-log"></label>
                <div class="card-3d-wrap mx-auto">
                  <div class="card-3d-wrapper">
                    <div class="card-front">
                      <div class="center-wrap">
                        <div class="section text-center">
                          <h4 class="mb-4 pb-3" v-if="isLogin">Log In</h4>
                          <h4 class="mb-4 pb-3" v-else>Sign Up</h4>
                          <div class="form-group">
                            <input v-if="isLogin" type="email" name="logEmail" class="form-style" placeholder="Your Email" id="logEmail" autocomplete="off" v-model="loginEmail">
                            <input v-else type="text" name="signUpName" class="form-style" placeholder="Your Full Name" id="signUpName" autocomplete="off" v-model="signupName">
                            <i class="input-icon uil uil-at"></i>
                          </div>
                          <div class="form-group mt-2">
                            <input v-if="isLogin" type="password" name="logpass" class="form-style" placeholder="Your Password" id="logpass" autocomplete="off" v-model="loginPassword">
                            <input v-else type="email" name="signUpEmail" class="form-style" placeholder="Your Email" id="signUpEmail" autocomplete="off" v-model="signupEmail">
                            <i class="input-icon uil uil-lock-alt"></i>
                          </div>
                          <a href="#" class="btn mt-4" @click="performAction">
                            {{ isLogin ? 'Log In' : 'Sign Up' }}
                          </a>
                          <p class="mb-0 mt-4 text-center">
                            <a href="#0" class="link lead">Forgot your password?</a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="card-back">
                      <div class="center-wrap">
                        <div class="section text-center">
                          <h4 class="mb-4 pb-3">Sign Up</h4>
                          <div class="form-group">
                            <input type="text" name="logname" class="form-style" placeholder="Your Full Name" id="logname" autocomplete="off" v-model="signupName">
                            <i class="input-icon uil uil-user"></i>
                          </div>
                          <div class="form-group mt-2">
                            <input type="password" name="logpass" class="form-style" placeholder="Your Password" id="logpass" autocomplete="off" v-model="signupPassword">
                            <i class="input-icon uil-lock-alt"></i>
                          </div>
                          <a href="#" class="btn mt-4" id="word" @click="performAction">Sign Up</a>
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
    </div>
  </template>
<!-- camille's vue -->
<!-- <script>
import NavBar from "@/components/NavBar.vue"; // Make sure to adjust the import path as needed
import HomepageParallax from "@/components/HomepageParallax.vue";
import Footer from "@/components/Footer.vue";
import AboutCarousel from "@/components/AboutCarousel.vue";

export default {
  components: {
    NavBar,
    HomepageParallax,
    Footer,
    AboutCarousel,
},
}
</script> -->
<script>
export default {
  data() {
    return {
      isLogin: true,
      loginEmail: '',
      loginPassword: '',
      signupName: '',
      signupEmail: '',
      signupPassword: '',
    };
  },
  computed: {
    userLoggedIn() {
      // Check if the user is logged in (replace with your authentication state)
      return this.$store.getters.isUserLoggedIn; // Replace with your authentication state
    },
    userName() {
      // Get the user's name from the state
      return this.$store.state.user.name; // Replace with your user data
    },
  },
  methods: {
    performAction() {
      if (this.isLogin) {
        // Handle login action
        const email = this.loginEmail;
        const password = this.loginPassword;
        // Perform login with email and password
      } else {
        // Handle sign-up action
        const name = this.signupName;
        const email = this.signupEmail;
        const password = this.signupPassword;
        // Perform sign-up with name, email, and password
      }
    },
    logout() {
      // Implement the logout functionality
      this.$store.dispatch('logout'); // Replace with your logout action
    },
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
    background-image: url("img/boat.jpg");
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

.navbar {
    padding: 0;
    position: static;
  }
  
.navbar ul {
    margin: 0;
    padding: 0;
    display: flex;
    list-style: none;
    align-items: center;
  }
  
.navbar li {
    position: relative;
  }
  
.navbar a,
.navbar a:focus {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 13px;
    margin-left: 10px;
    font-family: "Raleway", sans-serif;
    font-size: 16px;
    font-weight: 700;
    color: #fff;
    white-space: nowrap;
    transition: 0.3s;
  }
  
.navbar a i,
.navbar a:focus i {
    font-size: 12px;
    line-height: 0;
    margin-left: 5px;
  }

h1 span {
    color:white; 
}
.navbar a:hover,
.navbar.active,
.navbar.active:focus,
.navbar li:hover>a {
    background: rgba(255, 255, 255, 0.2);
  }
/* .img-responsive {
    max-width: none; 
    margin: 0; 
    padding: 0; 
    background-color:rgb(255, 255, 255);
    opacity:0.6;
    width: 100%; 
    height: 100%; 
    align-items: center;
    
} */
.banner {
    margin: 0;
    padding:0; 
    width: 100%; 
    height: 100%;  
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

.card-front, 
.card-back {
    width: 100%; 
    height:100%; 
    background-color: #2f4425;
    /* background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/pat.svg"); */
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
}
</style>