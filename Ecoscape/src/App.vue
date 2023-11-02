<template>
  <div id="app">
    <!-- Example router link -->
    <router-view></router-view>
    <!-- This is where your components will render -->
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import HomepageParallax from "@/components/HomepageParallax.vue";
import AboutCarousel from "@/components/AboutCarousel.vue";
import Footer from "@/components/Footer.vue";
import TransportSlides from "./components/TransportSlides.vue";
import Metric from "./components/Metric.vue";
import Cards from "./components/Cards.vue";
import Dest from "./components/Dest.vue";
import Information from "./components/Information.vue";
import Typewriter from "./components/Typewriter.vue";
import Wallpaper from "./components/Wallpaper.vue";
import "aos/dist/aos.css"; // Import the AOS styles
import AOS from "aos";

export default {
  name: "App",
  components: {
    NavBar,
    Footer,
    HomepageParallax,
    AboutCarousel,
    TransportSlides,
    Metric,
    Cards,
    Dest,
    Information,
    Typewriter,
    Wallpaper,
  },
  mounted() {
    AOS.init(); // Initialize AOS
  },
};
</script>

<style>
.pageSizing {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
