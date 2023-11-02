<template>
  <header id="header" class="fixed-top header-transparent">
    <div class="container-fluid d-flex align-items-center justify-content-between position-relative">
      <div class="logo ps-3">
        <h1 class="text-light">
          <router-link to="/"><span>ECOSCAPE</span></router-link>
        </h1>
      </div>
      <nav class="navbar navbar-expand-lg p-0">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" @click="toggleNavbar">
            <i class="fa fa-bars mobile-nav-toggle"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarExamples" :class="{ 'show': isNavbarOpen }">
            <ul>
              <li>
                <router-link to="/" class="nav-link scrollto" exact>Home</router-link>
              </li>
              <li class="search-icon">
                <button @click="toggleSearch">
                  <i class="fa fa-search"></i>
                </button>
                <div class="search-bar" :class="{ 'show': showSearchBar }">
                  <input
                    type="text"
                    class="search-input"
                    placeholder="Enter keywords to search"
                  />
                  <button @click="toggleSearch">
                    <i class="fa fa-times"></i>
                  </button>
                </div>
              </li>
              <li>
                <router-link to="/#about-us" class="nav-link">About Us</router-link>
              </li>
              <li class="dropdown">
                <a href="#"><span>Directory</span> <i class="fa fa-angle-down"></i></a>
                <ul>
                  <li><router-link to="#">Hotels</router-link></li>
                  <li><router-link to="#">Attractions</router-link></li>
                  <li><router-link to="#">Restaurants</router-link></li>
                  <li><router-link to="/transport">Green Transport Planner</router-link></li>
                </ul>
              </li>
              <li v-if="!userLoggedIn">
                <router-link to="/login" class="nav-link">
                  <img src="/images/profile-icon.png" class="profile-icon" alt="profile" />Login / Sign Up
                </router-link>
              </li>
              <li v-else>
                <div class="dropdown">
                  <span class="dropdown-toggle" id="userDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
      showSearchBar: false,
      isNavbarOpen: false, // Add a data property to track the state of the navbar
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
    toggleSearch() {
      this.showSearchBar = !this.showSearchBar;
    },
    toggleNavbar() {
      this.isNavbarOpen = !this.isNavbarOpen; // Toggle the collapsed navbar
    },
    logout() {
      // Implement the logout functionality
      this.$store.dispatch('logout'); // Replace with your logout action
    },
  },
};
</script>

<style scoped>
  @import url(https://db.onlinewebfonts.com/c/ae54ba780341eb52a73bf1c481b8b951?family=Poppins);

  @font-face {
    font-family: "Poppins";
    src: url("https://db.onlinewebfonts.com/t/ae54ba780341eb52a73bf1c481b8b951.eot");
    src: url("https://db.onlinewebfonts.com/t/ae54ba780341eb52a73bf1c481b8b951.eot?#iefix")format("embedded-opentype"),
    url("https://db.onlinewebfonts.com/t/ae54ba780341eb52a73bf1c481b8b951.woff2")format("woff2"),
    url("https://db.onlinewebfonts.com/t/ae54ba780341eb52a73bf1c481b8b951.woff")format("woff"),
    url("https://db.onlinewebfonts.com/t/ae54ba780341eb52a73bf1c481b8b951.ttf")format("truetype"),
    url("https://db.onlinewebfonts.com/t/ae54ba780341eb52a73bf1c481b8b951.svg#Poppins")format("svg");
}

#header {
    transition: all 0.5s;
    z-index: 1000;
    transition: all 0.5s;
    padding: 24px 0;
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
    color: #fff;
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
  
  .navbar a:hover,
  .navbar .active,
  .navbar .active:focus,
  .navbar li:hover>a {
    background: rgba(255, 255, 255, 0.2);
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
  .navbar .dropdown ul li:hover>a {
    color: #87ab69;
  }


  .navbar .dropdown:hover>ul {
    opacity: 1;
    top: 100%;
    visibility: visible;
  }
  
  /*
  Mobile Navigation 
  */
  .mobile-nav-toggle {
    color: #fff;
    font-size: 40px;
    cursor: pointer;
    display: none;
    line-height: 0;
    transition: 0.5s;
  }
  
  @media (max-width: 991px) {
    .mobile-nav-toggle {
      display: block;
    }
  
    .navbar ul {
      display: none;
    }
  }
  
  .navbar-mobile {
    position: fixed;
    overflow: hidden;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(43, 111, 142, 0.9);
    transition: 0.3s;
  }
  
  .navbar-mobile .mobile-nav-toggle {
    position: absolute;
    top: 15px;
    right: 15px;
  }
  
  .navbar-mobile ul {
    display: block;
    position: absolute;
    top: 55px;
    right: 15px;
    bottom: 15px;
    left: 15px;
    padding: 10px 0;
    background-color: #fff;
    overflow-y: auto;
    transition: 0.3s;
  }
  
  .navbar-mobile a,
  .navbar-mobile a:focus {
    padding: 10px 20px;
    font-size: 15px;
    color: #4b6043;
  }
  
  .navbar-mobile a:hover,
  .navbar-mobile .active,
  .navbar-mobile li:hover>a {
    color: #87ab69;
  }
  
  .navbar-mobile .getstarted,
  .navbar-mobile .getstarted:focus {
    margin: 15px;
  }
  
  .navbar-mobile .dropdown ul {
    position: static;
    display: none;
    margin: 10px 20px;
    padding: 10px 0;
    z-index: 99;
    opacity: 1;
    visibility: visible;
    background: #fff;
    box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.25);
  }
  
  .navbar-mobile .dropdown ul li {
    min-width: 200px;
  }
  
  .navbar-mobile .dropdown ul a {
    padding: 10px 20px;
  }
  
  .navbar-mobile .dropdown ul a i {
    font-size: 12px;
  }
  
  .navbar-mobile .dropdown ul a:hover,
  .navbar-mobile .dropdown ul .active:hover,
  .navbar-mobile .dropdown ul li:hover>a {
    color: #87ab69;
  }
  
  .navbar-mobile .dropdown>.dropdown-active {
    display: block;
  }

  .navbar-toggler{
    border: 0px;
}

.navbar .search-icon {
  position: relative;
}

.navbar .search-icon button {
  background: transparent;
  border: none;
  color: white;
  outline: none;
  padding-left: 1.5rem;
  padding-right: 1rem;
}

.navbar .search-bar {
  display: none;
  position: absolute;
  right: 0;
  top: 100%;
  background: #fff; /* Background color for the search bar */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* Box shadow for the search bar */
  padding: 10px; /* Adjust padding as needed */
}

.navbar .search-bar .search-input {
  width: 150px;
  padding: 8px;
  border: none; /* Remove the border */
  background: transparent; /* Background color for the input field */
  font-size: 16px;
  color: #000; /* Text color */
}

.navbar .search-bar button#search-close {
  background: transparent;
  border: none;
  outline: none;
  color: #000; /* Color for the close button */
}

.profile-icon{
  height: 35px;
  width: 35px;
  padding: 5px;
}
</style>
