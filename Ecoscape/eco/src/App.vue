<template>
  <div id="app">
 <!-- Example router link -->
    <router-view></router-view> <!-- This is where your components will render -->
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import HomepageParallax from "@/components/HomepageParallax.vue";
import AboutCarousel from "@/components/AboutCarousel.vue";
import Footer from "@/components/Footer.vue";
import "aos/dist/aos.css"; // Import the AOS styles
import AOS from "aos";
import SearchMap from "@/components/SearchMap.vue"; 
import TransportSlides from "@/components/TransportSlides.vue"; 

//import firestore instance & relevant methods 
// import firebaseApp from "@/firebase/firebase.js";
// import { doc, getDoc, addDoc } from 'firebase/firestore';
// import db from '@/firebase/firebase.js'; 


export default {
  name: "App",
  components: {
    NavBar,
    Footer,
    HomepageParallax,
    AboutCarousel,
    SearchMap, 
    TransportSlides, 
  },
  mounted() {
    AOS.init(); // Initialize AOS
  },

};
</script>


<style >
.pageSizing {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>