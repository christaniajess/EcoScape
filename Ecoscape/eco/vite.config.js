
  import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },

  optimizeDeps: {
    include: [
      "@fawmi/vue-google-maps",
      "fast-deep-equal",
    ],
  },
  // server: {
  //   proxy: {
  //     // '/api/geocode/json': 'https://maps.googleapis.com/maps/' , 
  //     '/BicycleParkingv2' : 'http://datamall2.mytransport.sg/ltaodataservice/',
  //     '/BusStops' : 
  //       }

  // }
});
