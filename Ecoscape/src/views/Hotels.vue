<template>

    <body>
      <NavBar/>
      <br><br>
      <TabsHotel/>
      <Waves/> 
      <Footer/>
    </body>
  
  </template>
  
  
  
  <script>
  
  import NavBar from "@/components/NavBar.vue";
  import Footer from "@/components/Footer.vue";
  import Waves from "@/components/wallpaper.vue";
  import TabsHotel from "../components/TabsHotel.vue";
  
  
  export default {
  components: {
      NavBar,
      Footer,
      Waves,
      TabsHotel,
  }
  }
  
  </script>
  
