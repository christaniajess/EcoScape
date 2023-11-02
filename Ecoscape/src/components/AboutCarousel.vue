<template>
  <div id="about-us">
    <div class="container-fluid about-container mt-5">
      <div class="row align-items-center">
        <div class="col-12 col-md-4 about_text text-center p-3 ps-5">
          <div data-aos="fade-up" data-aos-duration="1000">
            <h2>ABOUT US</h2>
            <p class="about-para">
              We aim to contribute to raising awareness about
              <span class="fw-bold">SUSTAINABLE TOURISM PRACTICES</span> and
              play a role in preserving Singapore's natural and cultural
              heritage for future generations.
            </p>
          </div>
        </div>
        <div class="col-12 col-md-8 carousel pt-5 pb-5">
          <Carousel
            :itemsToShow="3"
            :wrapAround="true"
            :transition="1000"
            :autoplay="2500"
          >
            <Slide v-for="image in images" :key="image.src">
              <div class="carousel__item">
                <img class="caroImg" :src="image.src" alt="" />
                <div class="caption">
                  <h4>{{ image.caption.title }}</h4>
                  <p>{{ image.caption.description }}</p>
                </div>
              </div>
            </Slide>
          </Carousel>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  data() {
    return {
      images: [
        {
          src: "/images/parkroyal.jpg",
          caption: { title: "Eco-Friendly Retreat", description: "Discover a sustainable paradise that goes beyond luxury." },
        },
        {
          src: "/images/jewel.jpg",
          caption: { title: "Nature's Playground", description: "Discover thrilling adventures while preserving our planet." },
        },
        {
          src: "/images/restaurant.jpg",
          caption: { title: "Gastronomic Greenery", description: "Savor delectable dishes crafted with sustainability in mind." },
        },
        {
          src: "/images/electric_bus.jpg",
          caption: { title: "Ride the Future", description: "Efficient and eco-friendly transport solutions for cleaner cities." },
        },
      ],
    };
  },
  components: {
    Carousel,
    Slide,
  },
  mounted() {
    if (this.$route.meta.referrer !== 'login') {
      this.scrollToAboutUs();
    }
  },
  methods: {
    scrollToAboutUs() {
      // Scroll to the "About Us" section
      const aboutUsElement = document.getElementById('about-us');
      if (aboutUsElement) {
        aboutUsElement.scrollIntoView({ behavior: 'smooth' });
      }
    },
  },
});
</script>

<style scoped>
  @import url(https://db.onlinewebfonts.com/c/ae54ba780341eb52a73bf1c481b8b951?family=Poppins);

  @font-face {
    font-family: "Poppins";
    src: url("https://db.onlinewebfonts.com/t/ae54ba780341eb52a73bf1c481b8b951.eot");
    src: url("https://db.onlinewebfonts.com/t/ae54ba780341eb52a73bf1c481b8b951.eot?#iefix")format("embedded-opentype"),
    url("https://db.onlinewebfonts.com/t/ae54ba780341eb52a73bf1c481b8b951.woff2")format("woff2"),
    url("https://db.onlinewebfonts.com/t/ae54ba780341eb52a73bf1c481b8b951.woff")format("woff"),
    url("https://db.onlinewebfonts.com/t/ae54ba780341eb52a73bf1c481b8b951.ttf")format("truetype"),
    url("https://db.onlinewebfonts.com/t/ae54ba780341eb52a73bf1c481b8b951.svg#Poppins")format("svg");
  }

  #about-us {
    display: flex;
    /* position: static; */
    height: auto; /* Set the height to 100% of the viewport height */
    margin-top: 0; /* Remove the top margin if any */
    padding: 0; /* Remove any padding */
    background-color: #101207;
  }


  .about_text {
    display: flex; 
    position: relative;
    flex-direction: column;
    align-items: center;
    justify-content: center; 
    color: white;
  }

  .about-para{
    font-size: 15px;
    font-family:Verdana, Geneva, Tahoma, sans-serif;
    color: rgb(160, 158, 158);
  }

  .carousel{
    padding-bottom: 1.5rem;
  }

  .carousel__item {
  height: 80vh;
}
  .caroImg {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  .caption {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;
  padding: 10px;
  padding-bottom: 30px;
  color: rgba(255, 255, 255, 0.8); /* Caption text color */
  font-size: 14px; /* Caption text size */
  font-family: 'Poppins', sans-serif;
  line-height: 1.5;
}

  .carousel__slide {
  padding: 5px;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.9);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.9);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.1);
}

</style>
