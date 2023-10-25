
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
    <link href="vendor/boxicons/css/boxicons.min.css" rel="stylesheet" />
    <link href="css/style.css" rel="stylesheet" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />

    <!-- <script
      src="https://kit.fontawesome.com/831470f68d.js"
      crossorigin="anonymous"
    ></script> -->

  </head>

  <body>
    
  <div>
    <NavBar /> <!-- Include the NavBar component -->
    <HomepageParallax /> <!-- Include the HomepageParallax component -->
    <!-- Add your content here -->
    <router-view /> <!-- This will display the appropriate content based on your routes -->
    <Footer /> <!-- Include the Footer component -->
  </div>
</body>
</template>



<script>
import NavBar from "@/components/NavBar.vue"; // Make sure to adjust the import path as needed
import HomepageParallax from "@/components/HomepageParallax.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    NavBar,
    HomepageParallax,
    Footer,
  },
};
</script>