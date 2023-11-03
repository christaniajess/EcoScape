<template>
  <header id="header" class="fixed-top header-transparent">
    <div
      class="container-fluid d-flex align-items-center justify-content-between position-relative"
    >
      <div class="logo ps-3">
        <h1 class="text-light">
          <router-link
            to="/"
            class="nav-link scrollto"
            exact
            :class="{
              'text-white': isHomepage || isLoginPage || isTransportPage,
            }"
          >
            <span id="ecoscape-span">ECOSCAPE</span></router-link
          >
        </h1>
      </div>
      <nav class="navbar navbar-mobile navbar-expand-lg pt-3" :class="{ 'background-black': !backgroundTransparent }">
        <div class="container-fluid p-0 m-0">
          <button class="navbar-toggler" type="button" @click="toggleNavbar">
            <i class="fa fa-bars text-white"></i>
          </button>
          <div
            class="collapse navbar-collapse"
            id="navbarExamples"
            :class="{ show: isNavbarOpen }"
          >
            <ul>
              <li class="nav-item">
                <router-link
                  to="/"
                  class="nav-link scrollto"
                  exact
                  :class="{
                    'text-white': isHomepage || isLoginPage || isTransportPage,
                  }"
                  >Home</router-link
                >
              </li>
              <li class="nav-item">
                <router-link
                  to="/#about-us"
                  class="nav-link"
                  :class="{
                    'text-white': isHomepage || isLoginPage || isTransportPage,
                  }"
                  >About Us</router-link
                >
              </li>
              <li class="dropdown nav-item">
                <a href="#"
                  ><span
                    :class="{
                      'text-white':
                        isHomepage || isLoginPage || isTransportPage,
                    }"
                    >Directory</span
                  >
                  <i
                    class="fa fa-angle-down"
                    :class="{
                      'text-white':
                        isHomepage || isLoginPage || isTransportPage,
                    }"
                  ></i
                ></a>
                <ul>
                  <li><router-link to="/hotels">Hotels</router-link></li>
                  <li><router-link to="/att">Attractions</router-link></li>
                  <li>
                    <router-link to="/restaurants">Restaurants</router-link>
                  </li>
                  <li>
                    <router-link to="/transport"
                      >Green Transport Planner</router-link
                    >
                  </li>
                </ul>
              </li>
              <li class="nav-item" v-if="!userLoggedIn">
                <router-link
                  to="/login"
                  class="nav-link"
                  :class="{
                    'text-white': isHomepage || isLoginPage || isTransportPage,
                  }"
                >
                  Login / Sign Up
                </router-link>
              </li>
              <li class="nav-item" v-else>
                <div class="dropdown">
                  <span
                    class="dropdown-toggle"
                    id="userDropdown"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Hello, {{ userName }}
                  </span>
                  <div class="dropdown-menu" aria-labelledby="userDropdown">
                    <a class="dropdown-item" @click="logout">Sign Out</a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isNavbarOpen: false, 
      backgroundTransparent: true, 
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
    isHomepage() {
      return this.$route.path === "/";
    },
    isLoginPage() {
      return this.$route.path === "/login";
    },
    isTransportPage() {
      return this.$route.path === "/transport"; // Adjust the login route as needed
    },
  },
  methods: {
    toggleNavbar() {
      this.isNavbarOpen = !this.isNavbarOpen; 
      this.backgroundTransparent = !this.isNavbarOpen;
    },
    logout() {
      // Implement the logout functionality
      this.$store.dispatch("logout"); // Replace with your logout action
    },
  },
};
</script>

<style scoped>
@import url(https://db.onlinewebfonts.com/c/ae54ba780341eb52a73bf1c481b8b951?family=Poppins);

@font-face {
  font-family: "Poppins";
  src: url("https://db.onlinewebfonts.com/t/ae54ba780341eb52a73bf1c481b8b951.eot");
  src: url("https://db.onlinewebfonts.com/t/ae54ba780341eb52a73bf1c481b8b951.eot?#iefix")
      format("embedded-opentype"),
    url("https://db.onlinewebfonts.com/t/ae54ba780341eb52a73bf1c481b8b951.woff2")
      format("woff2"),
    url("https://db.onlinewebfonts.com/t/ae54ba780341eb52a73bf1c481b8b951.woff")
      format("woff"),
    url("https://db.onlinewebfonts.com/t/ae54ba780341eb52a73bf1c481b8b951.ttf")
      format("truetype"),
    url("https://db.onlinewebfonts.com/t/ae54ba780341eb52a73bf1c481b8b951.svg#Poppins")
      format("svg");
}

#header {
  transition: all 0.5s;
  z-index: 1000;
  transition: all 0.5s;
  padding: 0;
}

#header.header-transparent {
  background: transparent;
}

#header .logo h1 {
  font-size: 24px;
  margin: 0;
  line-height: 1;
  font-weight: 700;
  letter-spacing: 1px;
  font-family: "Poppins", sans-serif;
  text-transform: uppercase;
}

#header .logo h1 a,
#header .logo h1 a:hover {
  color: #4b6043;
  text-decoration: none;
}

#header .logo img {
  padding: 0;
  margin: 0;
  max-height: 40px;
}

@media (max-width: 768px) {
  #header.header-scrolled {
    padding: 15px 0;
  }
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
  color: #4b6043;
  white-space: nowrap;
  transition: 0.3s;
}

.navbar a i,
.navbar a:focus i {
  font-size: 12px;
  line-height: 0;
  margin-left: 5px;
}

.navbar a:hover,
.navbar .active,
.navbar .active:focus,
.navbar li:hover > a {
  background: rgba(213, 213, 213, 0.2);
  color: #87ab69;
}

.nav-link .text-white:hover {
  background: rgba(213, 213, 213, 0.2);
  color: #87ab69;
}

.navbar .dropdown a {
  text-decoration: none; /* Removes the underline */
}

.navbar .dropdown ul {
  display: block;
  position: absolute;
  left: 10px;
  top: 20px;
  margin: 0;
  padding: 10px 0;
  z-index: 99;
  opacity: 0;
  visibility: hidden;
  background: #fff;
  box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.25);
  transition: 0.3s;
}

.navbar .dropdown ul li {
  min-width: 200px;
}

.navbar .dropdown ul a {
  padding: 10px 20px;
  font-size: 15px;
  text-transform: none;
  font-weight: 600;
  color: #4b6043;
}

.navbar .dropdown ul a i {
  font-size: 12px;
}

.navbar .dropdown ul a:hover,
.navbar .dropdown ul .active:hover,
.navbar .dropdown ul li:hover > a {
  color: #87ab69;
}

.navbar .dropdown:hover > ul {
  opacity: 1;
  top: 100%;
  visibility: visible;
}

@media (max-width: 991px) {
  .navbar-mobile {
    display: flex;
    padding-top: 0px;
    padding-right: 5%;

  }

  .navbar-mobile ul {
    display: block;
    background-color: #0d190b;
    min-height: 100vh;
    
  }

  .navbar-mobile ul .nav-item{
    margin-bottom: 20px;

  }

  .navbar-mobile .dropdown ul {
    min-height: 20vh;
  }
}

.background-black {
    background: #0d190b; /* Set the background color to black */
    
  }

#ecoscape-span {
  position: absolute;
  top: 25px;
  left: 4%;
}
</style>
