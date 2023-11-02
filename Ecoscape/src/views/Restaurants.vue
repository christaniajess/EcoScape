<template>

  
    <body>
      <NavBar/>
      <br><br>
      <TabsRest/>
      <Waves/> 
      <Footer/>
    </body>
  

  </template>
  
  
  
  <script>
  
  import NavBar from "@/components/NavBar.vue";
  import Footer from "@/components/Footer.vue";
  import Tabs from "@/components/Tabs.vue";
  import Cards from "@/components/Cards.vue";
  import Waves from "@/components/wallpaper.vue";
  import TabsRest from "../components/TabsRest.vue";
  
  
  export default {
  components: {
      NavBar,
      Footer,
      Tabs,
      Cards,
      Waves,
      TabsRest,
  }
  }
  
  </script>
  
