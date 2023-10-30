<template>
    <section id="homepage">
      <img
        :src="backgroundImage"
        class="w-100 h-100"
        alt="bg"
        id="bg"
      />
      <img
        src="images/homepage-img2.png"
        id="img"
        class="w-100 h-100"
        alt="img"
      />
      <div data-aos="fade-up" data-aos-duration="1500">
        <div id="main-title">
          <img :src="iconImage" id="title-icon" alt="" /> EcoScape
        </div>
      </div>
      <a class="btn-get-started scrollto" id="scroll-icon" href="#about-us">
        <div class="circle-btn">
          <i class="fa fa-angle-double-down" style="font-size: 20px;"></i>
        </div>
      </a>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        backgroundImage: "../images/homepage-bg.jpg", // Provide the path to your background image
        iconImage: "../images/icon2.jpg", // Provide the path to your icon image
      };
    },
    created() {
      window.addEventListener("scroll", this.parallaxScroll);
    },
    beforeDestroy() {
      window.removeEventListener("scroll", this.parallaxScroll);
    },
    methods: {
      parallaxScroll() {
        const bg = document.getElementById("bg");
        const text = document.getElementById("main-title");
        const value = window.scrollY;
  
        bg.style.top = value * 0.5 + "px";
        text.style.top = value * 1 + "px";
      },
    },
  };
  </script>

<style scoped>
    @media screen and (min-width: 1001px) {
  #main-title{
    position: relative;
    margin-bottom: 350px;
    color: #fff;
    font-size: 7em;
    z-index: 1;
    font-family: 'Poppins', sans-serif;
    text-shadow: 4px 4px #00000072;
  }
  #title-icon{
    width: 100px;
    height: 100px;
    position: sticky;

  }
} 

@media screen and (max-width: 1000px) {
    #main-title{
    position: relative;
    margin-bottom: 350px;
    color: #fff;
    font-size: 7em;
    z-index: 1;
    font-family: 'Poppins', sans-serif;
    text-shadow: 4px 4px #00000072;
  }
  #title-icon{
    width: 100px;
    height: 100px;
    position: sticky;

  }
}

@media screen and (max-width: 771px) {
  #main-title{
    position: relative;
    margin-bottom: 350px;
    color: #fff;
    font-size: 6em;
    z-index: 1;
    font-family: 'Poppins', sans-serif;
    text-shadow: 4px 4px #00000072;
  }
  #title-icon{
    width: 80px;
    height: 80px;
    position: sticky;

}
}

@media screen and (max-width: 641px) {
  #main-title{
    position: relative;
    margin-bottom: 350px;
    color: #FFF;
    font-size: 5em;
    z-index: 1;
    font-family: 'Poppins', sans-serif;
    text-shadow: 4px 4px #00000072;
  }
  #title-icon{
    width: 65px;
    height: 65px;
    position: sticky;

  }
}

*{
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
}

body{
    min-height: 1500px;
}

/* #title-icon{
    width: 100px;
    height: 100px;
    position: sticky;

} */

.circle-btn {
    
    display: inline-flex;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    align-items: center;
    line-height: 50px; 
    color: #fff; 
    position: absolute; 
    font-size: 30px;
    justify-content: center;
    border: 3px solid #fff;
    text-shadow: 3px 3px #e4e4e441;
    box-shadow: 2px 2px #e4e4e456;
    bottom: 5%; /* Position at the bottom of the section */
    left: 50%; /* Horizontally center the button */
    transform: translateX(-50%);
    z-index: 2;
}


.btn-get-started .circle-btn:hover {
  padding-top: 8px;
  background: rgba(255, 255, 255, 0.15);
}

section{
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
}

section img{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    pointer-events: none;
}

/* #main-title{
    position: relative;
    margin-bottom: 350px;
    color: #fff;
    font-size: 7em;
    z-index: 1;
    font-family: 'Poppins', sans-serif;
    text-shadow: 4px 4px #00000072;
} */

#img{
    z-index: 2;
}
</style>