
<template>
    <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>EcoScape</title>

    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9"
      crossorigin="anonymous"
    />

    <!-- <script src="https://unpkg.com/axios/dist/axios.min.js"></script> -->

    <link rel="icon" href="./public/favicon.ico" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

    <link rel="stylesheet" href="../index.css">

  </head>

  <body>
    
      <NavBar />  <!-- Include the NavBar component -->
      <HomepageParallax /> <!-- Include the HomepageParallax component -->
      <!-- Add your content here -->
      <section>
        <AboutCarousel />
      </section>
      <hr id="footer-separation">
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

<style scoped>
  #footer-separation {
  background-color: #8ebe6d; /* Remove white space above and below */
  border: none; /* Remove the default line */
  height: 1px; /* Increase line thickness */
  width: 80%; /* Adjust width as needed */
  margin: 0 auto; /* Center the line horizontally */
}
</style>