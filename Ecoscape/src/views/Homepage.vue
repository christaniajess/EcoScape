
<template>
  <body>
    
      <NavBar />  <!-- Include the NavBar component -->
      <HomepageParallax /> <!-- Include the HomepageParallax component -->
      <section>
        <AboutCarousel />
      </section>
    <Footer />


</body>
</template>



<script>
import NavBar from "@/components/NavBar.vue"; // Make sure to adjust the import path as needed
import HomepageParallax from "@/components/HomepageParallax.vue";
import Footer from "@/components/Footer.vue";
import AboutCarousel from "@/components/AboutCarousel.vue";

export default {
  name: "HomePage",
  data() {
    return {};
  },
  components: {
    NavBar,
    HomepageParallax,
    Footer,
    AboutCarousel,
},
}
</script>
