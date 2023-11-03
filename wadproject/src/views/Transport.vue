<template>
    <body>
      <NavBar />
      <TransportSlides />
      <!-- <GMap /> -->
      <tpMap />
      <Metric />
      <Footer />
    </body>
  </template>
  
  <script>
  import NavBar from "@/components/NavBar.vue";
  import TransportSlides from "../components/TransportSlides.vue";
  import Metric from "../components/Metric.vue";
  import Footer from "@/components/Footer.vue";
  import tpMap from "@/components/tpMap.vue"; 
  import GMap from "@/components/GMap.vue"; 

  export default {
    name: "Transport",
    data() {
      return {};
    },
    components: {
      NavBar,
      TransportSlides,
      Metric,
      GMap,
      Footer,
      tpMap,
    },
  };
  </script>   