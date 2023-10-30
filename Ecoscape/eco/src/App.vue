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
import Tabs from "./components/Tabs.vue";
import Cards from "./components/Cards.vue";

export default {
  name: "App",
  components: {
    NavBar,
    Footer,
    HomepageParallax,
    AboutCarousel,
    Tabs,
    Cards,
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