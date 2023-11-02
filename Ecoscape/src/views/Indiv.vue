<template>

  <body>
        <NavBar/>
      <!--Header -->
        <br><br><br>
        <Information :index="index"/>
        <!-- <Info/> -->
        <!-- put the card component here -->
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
import Information from "@/components/Information.vue";

export default {
  data() {
    return {
      index: this.$route.params.id
    }
  },
  components: {
    NavBar,
    Footer,
    Tabs,
    Cards,
    Waves,
    Information,
},
}
</script>
