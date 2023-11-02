<template>
  <body>
    <NavBar />
    <TransportSlides />
    <Metric />
    <Footer />
  </body>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import TransportSlides from "../components/TransportSlides.vue";
import Metric from "../components/Metric.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Transport",
  data() {
    return {};
  },
  components: {
    NavBar,
    TransportSlides,
    Metric,
    Footer,
  },
};
</script>
