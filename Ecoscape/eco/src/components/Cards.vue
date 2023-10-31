<template>
  <div id="content1" class="tab-content">
    <div class="gallery">
      <Dest
        class="card"
        v-for="(destination, index) in destinations"
        :key="index"
        :name="destination.name"
        :image="destination.image"
        @click="navigateToUrl(destination.url)"
      ></Dest>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Dest from "@/components/Dest.vue";

export default {
  data() {
    return {
      destinations: [],
      central_dest: [],
      north_dest: [],
      south_dest: [],
      east_dest: [],
      west_dest: [],
    };
  },
  methods: {
    navigateToUrl(url) {
      // Handle the navigation to the specified URL
      window.location.href = url;
    },
  },
  created() {
    const url = '../destination.json';
    axios
      .get(url)
      .then((response) => {
        const result = response.data;
        this.destinations = result;

        // Populating different areas
        this.central_dest = this.destinations.filter(destination => destination.area[1] === 'central');
        this.north_dest = this.destinations.filter(destination => destination.area[1] === 'north');
        this.south_dest = this.destinations.filter(destination => destination.area[1] === 'south');
        this.east_dest = this.destinations.filter(destination => destination.area[1] === 'east');
        this.west_dest = this.destinations.filter(destination => destination.area[1] === 'west');
      })
      .catch((error) => {
        console.error(error);
      });
  },
  components: {
    Dest
  }
};
</script>


<style scoped>
  /* Your existing component styles here */
  @import url('https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@500&display=swap');


  .gallery {
    display: flex;
    gap: 1.5cm;
    padding-top: 1rem;
  }
  
  .card {
    position: relative;
    left: 1.5rem;
    width: 190px;
    height: 140px;
    border-radius: 8px;
    transition: 1000ms all;
    transform-origin: center left;
    box-shadow: 0 5px 13px rgba(0, 0, 0, 0.5);
    outline: 1px solid #3c343d;
    overflow: hidden;
  }
  
  .card img {
    height: 160px;
    object-fit: cover;
    border-radius: 4px;
  }
  
  .card:hover {
    cursor: pointer;
    transform: scale(1.15);
  }
  
  .card:hover figcaption {
    font-size: 0.6rem;
    position: absolute;
    height: 180px;
    width: 190px;
    display: flex;
    align-items: end;
    background: 
      linear-gradient(
        to top, 
        rgba(0, 0, 0, 0.9) 0%,
        rgba(0, 0, 0, 0) 100%
      );
    color: white;
    left: 0px;
    bottom: 0px;
    padding-left: 12px;
    padding-bottom: 10px;
  }
  
  .card:hover ~ .card {
    font-weight: bold;
    cursor: pointer;
    transform: translateX(22px);
  }

  /* Add the provided CSS code below this line */

  

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: system-ui;
  }
  
  h2 {
    font-size: 25px;
    margin-left: 3rem;
    padding: 1.5rem;
    font-weight: 50px;
  }
  
  #typewriter {
    color: #628a5c;
  }
  
  #cursor {
    color: #21321F;
    font-weight: bold;
    animation: blink 1s linear infinite;
  }
  
  @keyframes blink {
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
  }
  
  :root {
    --primary: #628a5c;
    --text-color: white;
    --white: white;
    --text-gray: #FEFEFE;
    --text-heading-gray: white;
    --background: #EDF0F9;
    --border: #fff;
  }
  
  *, *::after, *::before {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}

  #header {
    transition: all 0.5s;
    z-index: 997;
    transition: all 0.5s;
    padding: 24px 0;
    background: rgba(103, 176, 209, 0.8);
  }
  
  #header.header-transparent {
    background: transparent;
  }
  
  #header.header-scrolled {
    background: rgba(55, 142, 181, 0.9);
    padding: 12px;
  }
  
  #header .logo img {
    padding: 0;
    margin: 0;
    max-height: 50px;
  }
  
  @media (max-width: 768px) {
    #header.header-scrolled {
      padding: 15px 0;
    }
  }
  
 /* tabs */
  #tab-container 
  {
    /* margin-top: 20px;
    margin-bottom: 10px; */
    padding:1.5rem;
    margin-left:1.5rem;
    

  }

  .tab-content 
  {
    display: none;
    padding: 20px 0 0;
  }

  input 
  {
    display: none;
    &:checked 
    {
      &+label 
      {
        color: #bd235d;
      }
    }
  }
  label {
    display: inline-block;
    padding: 0 25px;
    font-weight: 600;
    &:not(:first-of-type) {
      border-left: 2px solid #628a5c;
      @media screen and (max-width: 480px) {
        border-left: none;
      }
    }
    @media screen and (max-width: 480px) {
      display: block;
    }
    &:hover {
      color: #bd235d;
      cursor: pointer;
      
    }
  }
  #tab1 {
    &:checked {
      &~#content1 {
        display: block;
      }
    }
  }
  #tab2 {
    &:checked {
      &~#content2 {
        display: block;
      }
    }
  }
  #tab3 {
    &:checked {
      &~#content3 {
        display: block;
      }
    }
  }
  #tab4 {
    &:checked {
      &~#content4 {
        display: block;
      }
    }
  }
  #tab5 {
    &:checked {
      &~#content5 {
        display: block;
      }
    }
  }
  #tab6 {
    &:checked {
      &~#content6 {
        display: block;
      }
    }
  }

  .gallery
  {
    display: flex;
    gap:1.5cm;
    padding-top: 1rem;
    
    
  }
  .card
  {
    position:relative;
    left:1.5rem;
    width:190px;
    height:140px;
    border-radius:8px;
    transition:1000ms all;
    transform-origin: center left;
    box-shadow: 0 5px 13px rgba(0, 0, 0, 0.5);
    outline: 1px solid #3c343d;
    overflow:hidden;
  }
  .card img {
    height: 160px;
    object-fit: cover;
    border-radius: 4px;
}

.card:hover {
    cursor: pointer;
    transform: scale(1.15);
}

.card:hover figcaption {
    font-size: 0.6rem;
    position: absolute;
    height: 180px;
    width: 190px;
    display: flex;
    align-items: end;
    background: 
    linear-gradient(
        to top, 
        rgba(0, 0, 0, 0.9) 0%,
        rgba(0, 0, 0, 0) 100%
    );
    color: white;
    left: 0px;
    bottom: 0px;
    padding-left: 12px;
    padding-bottom: 10px;
}

.card:hover ~ .card {
    font-weight: bold;
    cursor: pointer;
    transform: translateX(22px);
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
  color: black;
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
  color:black; 
}
.navbar a:hover,
.navbar.active,
.navbar.active:focus,
.navbar li:hover>a {
  background: #BDBDBD;
}
</style>
