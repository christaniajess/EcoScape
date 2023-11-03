<template>
    <body>
      <NavBar />
      <TransportSlides />
      <GoogleMap />
      <tpMap />
      <Metric />
      <Footer />
    </body>
  </template>
  
  <script>
  import NavBar from "@/components/NavBar.vue";
  import TransportSlides from "@/components/TransportSlides.vue";
  import Metric from "@/components/Metric.vue";
  import Footer from "@/components/Footer.vue";
  import tpMap from "@/components/tpMap.vue"; 
  import GoogleMap from "@/components/GoogleMap.vue"; 

  export default {
    name: "Transport",
    data() {
      return {};
    },
    components: {
      NavBar,
      TransportSlides,
      Metric,
      GoogleMap,
      Footer,
      tpMap,
    },
  };
  </script>   