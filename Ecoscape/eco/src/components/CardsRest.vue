<template>
  <div id="content1" class="tab-content">
    <div class="gallery">
      <Dest
        class="card"
        v-for="(destination, index) of destinations"
        :key="index"
        :name="destination.name"
        :image="destination.image"  
        @click="navigateToUrl(destination.index)"
      ></Dest>
    </div>
  </div>

  <div id="content2" class="tab-content">
    <div class="gallery">
      <Dest
        class="card"
        v-for="(destination, index) of central_dest"
        :key="index"
        :name="destination.name"
        :image="destination.image"
        @click="navigateToUrl(destination.index)"
      ></Dest>
    </div>
  </div>

  <div id="content3" class="tab-content">
    <div class="gallery">
      <Dest
        class="card"
        v-for="(destination, index) of east_dest"
        :key="index"
        :name="destination.name"
        :image="destination.image"
        @click="navigateToUrl(destination.index)"
      ></Dest>
    </div>
  </div>

  <div id="content4" class="tab-content">
    <div class="gallery">
      <Dest
        class="card"
        v-for="(destination, index) of south_dest"
        :key="index"
        :name="destination.name"
        :image="destination.image"
        @click="navigateToUrl(destination.index)"
      ></Dest>
    </div>
  </div>

  <div id="content5" class="tab-content">
    <div class="gallery">
      <Dest
        class="card"
        v-for="(destination, index) of north_dest"
        :key="index"
        :name="destination.name"
        :image="destination.image"
        @click="navigateToUrl(destination.index)"
      ></Dest>
    </div>
  </div>

  <div id="content6" class="tab-content">
    <div class="gallery">
      <Dest
        class="card"
        v-for="(destination, index) of west_dest"
        :key="index"
        :name="destination.name"
        :image="destination.image"
        @click="navigateToUrl(destination.index)"
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
  navigateToUrl(destinationIndex) {
    this.$router.push({ name: 'IndividualRest', params: { id: destinationIndex } });
    }
  },
  created() {
    const url = '../restaurant.json';
    axios
      .get(url)
      .then((response) => {
        const result = response.data;
        this.destinations = result;
        this.destinations.forEach((destination, index) => {
          destination.index = index; // Add the 'index' attribute
        });

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

  .gallery {
  display: grid;
  grid-template-columns: repeat(6, 1fr); /* Display 3 cards per row by default */
  gap: 20px; /* Adjust the gap between cards */
}
  /* .card
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
  } */
  .card {
  border: 1px solid #ccc; /* Card border */
  border-radius: 8px; /* Rounded corners */
  padding: 0;
  display: flex; /* Make the card a flex container */
  flex-direction: column; /* Arrange card contents vertically */
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
@media (max-width: 1400px) {
  .gallery {
    grid-template-columns: repeat(4, 1fr); /* Display 2 cards per row for medium-sized screens */
  }
  
}
@media (max-width: 992px) {
  .gallery {
    grid-template-columns: repeat(3, 1fr); /* Display 2 cards per row for medium-sized screens */
  }
  
}
@media (max-width: 768px) {
  .gallery {
    grid-template-columns: repeat(2, 1fr); /* Display 2 cards per row for medium-sized screens */
  }
  
}

@media (max-width: 480px) {
  .gallery {
    grid-template-columns: 1fr; /* Display 1 card per row for small screens */
  }
  
}
</style>
