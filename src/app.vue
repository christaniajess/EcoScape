<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

  <script>
    import navbar from "@/components/navbar.vue";
    import "aos/dist/aos.css";
    import AOS from "aos";

    export default 
    {
      name: "App",
      components: 
      {
        navbar,
      },
      mounted() 
      {
        AOS.init(); // Initialize AOS
      },
  };  

  </script>
<style>
  .pageSizing 
  {
    min-height: 100vh;
    display:flex;
    flex-direction:column;
    justify-content: space-between;
  }
</style>