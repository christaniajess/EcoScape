<template>
  <div id="content1" class="tab-content">
    <div class="gallery" v-if="destinations.length > 0">
      <Dest
        v-for="destination in destinations"
        :key="destination.url"
        :name="destination.name"
        :image="destination.image"
        :url="destination.url"
        />
      </div>
      <div v-else>
        Loading... <!-- Or some loading message -->
      </div>
  </div>
</template>

<script>
import axios from 'axios';
import Dest from "@/components/Dest.vue";

export default {
  data() {
    return {
      destinations: [{ name: '', image: '', url: '', area: [] }],
      init: true,
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
  computed: {
    dividedAllDestinations() {
      // Divide the destinations array into groups of 6
      const result = [];
      const groupSize = 6;
      for (let i = 0; i < this.destinations.length; i += groupSize) {
        result.push(this.destinations.slice(i, i + groupSize));
      }
      return result;
    },
    dividedCentralDestinations() {
      // Divide the destinations array into groups of 6
      const resultC = [];
      const groupSize = 6;
      for (let i = 0; i < this.central_dest.length; i += groupSize) {
        resultC.push(this.central_dest.slice(i, i + groupSize));
      }
      return resultC;
    },
    dividedNorthDestinations() {
      // Divide the destinations array into groups of 6
      const resultN = [];
      const groupSize = 6;
      for (let i = 0; i < this.north_dest.length; i += groupSize) {
        resultN.push(this.north_dest.slice(i, i + groupSize));
      }
      return resultN;
    },
    dividedSouthDestinations() {
      // Divide the destinations array into groups of 6
      const resultS = [];
      const groupSize = 6;
      for (let i = 0; i < this.south_dest.length; i += groupSize) {
        resultS.push(this.south_dest.slice(i, i + groupSize));
      }
      return resultS;
    },
    dividedEastDestinations() {
      // Divide the destinations array into groups of 6
      const resultE = [];
      const groupSize = 6;
      for (let i = 0; i < this.east_dest.length; i += groupSize) {
        resultE.push(this.east_dest.slice(i, i + groupSize));
      }
      return resultE;
    },
    dividedWestDestinations() {
      // Divide the destinations array into groups of 6
      const resultW = [];
      const groupSize = 6;
      for (let i = 0; i < this.west_dest.length; i += groupSize) {
        resultW.push(this.west_dest.slice(i, i + groupSize));
      }
      return resultW;
    },
  },
  created() {
    const url = '../destination.json';
    axios
      .get(url)
      .then((response) => {
        const result = response.data;
        console.log(result)

        for (let i = 0; i < result.length; i++) {
          const destination = {};

          destination.name = result[i].name;
          destination.image = '../' + result[i].image;
          destination.url = result[i].url;
          destination.area = result[i].area;
          if (this.init) {
            this.destinations = [destination];
            this.init = false;
          } else this.destinations.push(destination);
        }
        
        // Populating different areas
        for (const destination of this.destinations) {
          if (destination.area[1] == 'central') {
            this.central_dest.push(destination);
          } else if (destination.area[1] == 'north') {
            this.north_dest.push(destination);
          } else if (destination.area[1] == 'south') {
            this.south_dest.push(destination);
          } else if (destination.area[1] == 'east') {
            this.east_dest.push(destination);
          } else if (destination.area[1] == 'west') {
            this.west_dest.push(destination);
          }
        }
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
  
  /* ... (Continue adding the rest of the provided CSS code) ... */

  /* Add the provided CSS code above this line */
</style>
