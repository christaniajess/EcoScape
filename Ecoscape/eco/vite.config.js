import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
// import vuex from 'vite-plugin-vuex'; // Import the Vuex plugin

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  commonjsOptions: {
    esmExternals: true, 
 }
  // build: {
  //   rollupOptions: {
  //     output: {
  //       // Other output options...
  //       assetFileNames: '../images/homepage-img2.png', '../images/icon-lightgreen.png', 
  //     }
  //   }
  //   }

  }); 