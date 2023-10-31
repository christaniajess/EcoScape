<template>
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <!-- <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous"> -->
      <!-- <link rel="stylesheet" href="./menu.css"> -->
      <!-- <link rel="stylesheet"  href="../attraction/attractionstyle.css"> -->
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9"
        crossorigin="anonymous"
      />
    </head>

    <body>
      <NavBar/>
      <br><br>
      <Tabs/>
          <!-- put the card component here -->
      <Cards/>
      <Waves/> 
      <Footer/>
    </body>

  </html>
</template>



<script>

import NavBar from "@/components/NavBar.vue";
import HomepageParallax from "@/components/HomepageParallax.vue";
import Footer from "@/components/Footer.vue";
import AboutCarousel from "@/components/AboutCarousel.vue";
import Tabs from "@/components/Tabs.vue";
import Cards from "@/components/Cards.vue";
import Waves from "@/components/wallpaper.vue";

export default {
  components: {
    NavBar,
    HomepageParallax,
    Footer,
    AboutCarousel,
    Tabs,
    Cards,
    Waves,
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