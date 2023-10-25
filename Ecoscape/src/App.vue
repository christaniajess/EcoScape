<template>
  <div id="app">
    <router-link to="/home">Home</router-link> <!-- Example router link -->
    <router-view></router-view> <!-- This is where your components will render -->
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import { ref, onMounted } from "vue";
import HomepageParallax from "./components/HomepageParallax.vue";
import Footer from "@/components/Footer.vue";
// animate on scroll library
import { AOS } from "aos";
const el = ref();

export default {
  name: "App",
  components: {
    NavBar,
    Footer,
    HomepageParallax,
  },
  created() {
    AOS.init()
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