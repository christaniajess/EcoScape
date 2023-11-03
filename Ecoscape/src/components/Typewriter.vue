<template>
    <div id="typewriter">{{ currentWord }}</div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        words: ['sustainable accommodations here!', 'eco-friendly accommodations here!'],
        currentWordIndex: 0,
        currentWord: '',
        sleepTime: 100,
      };
    },
    created() {
      this.initTypewriter();
    },
    methods: {
      sleep(time) {
        return new Promise((resolve) => setTimeout(resolve, time));
      },
      async initTypewriter() {
        while (true) {
          const currentWord = this.words[this.currentWordIndex];
  
          for (let i = 0; i <= currentWord.length; i++) {
            this.currentWord = currentWord.substring(0, i);
            await this.sleep(this.sleepTime);
          }
  
          await this.sleep(500);
  
          this.currentWordIndex = (this.currentWordIndex + 1) % this.words.length;
        }
      },
    },
  };
  </script>
  

  