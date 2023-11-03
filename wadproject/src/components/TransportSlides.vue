<template>
    <section id="slide">
      <div class="flex-container">
        <!-- Bicycle Slide -->
        <div
          class="flex-slide bicycle"
          @mouseenter="onSlideHover"
          @mouseleave="onSlideLeave"
        >
          <div class="slide-content">
            <div
              class="flex-title flex-title-bicycle"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              BICYCLE
            </div>
            <div class="flex-about flex-about-bicycle text-center">
              <p>
                Pedal your way to a greener future with bicycle rental services
                across the country. <br />
                Enjoy the freedom of two-wheel transportation while contributing
                to reduced air pollution and traffic congestion.
              </p>
            </div>
            <a
              class="btn-get-started scrollto"
              id="scroll-icon"
              href="#transport-info"
            >
              <div class="down-btn" id="down-btn-bicycle">
                <i class="fa fa-angle-down"></i>
              </div>
            </a>
          </div>
        </div>
  
        <!-- Electric Vehicle Slide -->
        <div
          class="flex-slide ev"
          @mouseenter="onSlideHover"
          @mouseleave="onSlideLeave"
        >
          <div class="slide-content">
            <div class="flex-title" data-aos="fade-up" data-aos-duration="1500">
              ELECTRIC VEHICLE
            </div>
            <div class="flex-about text-center">
              <p>
                Switch to electric vehicles (EVs) for an emission-free ride.
                Electric vehicle rental option is provided for a sustainable way
                to travel, whether it's for a short trip or an extended journey.
              </p>
            </div>
            <a
              class="btn-get-started scrollto"
              id="scroll-icon"
              href="#transport-info"
            >
              <div class="down-btn" id="down-btn-ev">
                <i class="fa fa-angle-down"></i>
              </div>
            </a>
          </div>
        </div>
  
        <!-- Bus Slide -->
        <div
          class="flex-slide bus"
          @mouseenter="onSlideHover"
          @mouseleave="onSlideLeave"
        >
          <div class="slide-content">
            <div class="flex-title" data-aos="fade-up" data-aos-duration="2000">
              BUS
            </div>
            <div class="flex-about text-center">
              <p>
                Hop on board our eco-friendly public buses, designed for maximum
                passenger comfort and minimal environmental impact. Convenient
                routes and reliable schedules make it a breeze to get around.
              </p>
            </div>
            <a
              class="btn-get-started scrollto"
              id="scroll-icon"
              href="#transport-info"
            >
              <div class="down-btn" id="down-btn-bus">
                <i class="fa fa-angle-down"></i>
              </div>
            </a>
          </div>
        </div>
  
        <!-- MRT Slide -->
        <div
          class="flex-slide mrt"
          @mouseenter="onSlideHover"
          @mouseleave="onSlideLeave"
        >
          <div class="slide-content">
            <div class="flex-title" data-aos="fade-up" data-aos-duration="2500">
              MRT
            </div>
            <div class="flex-about text-center">
              <p>
                Experience the speed and efficiency of our MRT system, the
                backbone of urban public transportation. Save time and energy
                while minimizing your carbon emissions.
              </p>
            </div>
            <a
              class="btn-get-started scrollto"
              id="scroll-icon"
              href="#transport-info"
            >
              <div class="down-btn" id="down-btn-mrt">
                <i class="fa fa-angle-down"></i>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  
    <section id="transport-info">
      <div class="d-flex justify-content-center align-items-center">
        <div class="card rounded-2 border mx-5 text-center w-75">
          <div class="card-title mt-4 pt-3">
            Discover Sustainable Mobility with Us
          </div>
          <div class="card-subtitle px-5 pt-4 mx-4">
            Are you ready to embrace eco-friendly transportation and reduce your
            carbon footprint? EcoScape offers a range of sustainable options that
            not only help protect the environment but also make your daily commute
            or travel more convenient. Explore our Green Transport Planner.
          </div>
          <div class="card-text mt-5 pb-3 mb-3" id="card-text">
            Join us in reducing your carbon footprint and protecting the
            environment. Start your journey with EcoScape today!
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    methods: {
      onSlideHover(event) {
        // Handle hover effect
        const slide = event.currentTarget;
        const title = slide.querySelector(".flex-title");
        const about = slide.querySelector(".flex-about");
  
        title.style.transform = "rotate(0deg)";
        title.style.top = "25%";
        about.style.opacity = "1";
      },
      onSlideLeave(event) {
        // Handle mouse leave effect
        const slide = event.currentTarget;
        const title = slide.querySelector(".flex-title");
        const about = slide.querySelector(".flex-about");
  
        title.style.transform = "rotate(90deg)";
        title.style.top = "25%";
        about.style.opacity = "0";
      },
      onMounted() {
        const downBtnBicycle = document.querySelector("#down-btn-bicycle");
        const downBtnEv = document.querySelector("#down-btn-ev");
        const downBtnBus = document.querySelector("#down-btn-bus");
        const downBtnMrt = document.querySelector("#down-btn-mrt");
  
        // Get references to the card's content elements
        // const cardSubtitle = document.getElementById("card-subtitle");
        const cardText = document.getElementById("card-text");
  
        // Event listener for the bicycle down button
        downBtnBicycle.addEventListener("click", function () {
          // Update the card's content for bicycle
          // cardSubtitle.textContent = "Information about Bicycle";
          cardText.textContent =
            "Learn more about our bicycle rental services and how you can contribute to a greener future.";
        });
  
        downBtnEv.addEventListener("click", function () {
          // Update the card's content for bicycle
          // cardSubtitle.textContent = "Information about Bicycle";
          cardText.textContent =
            "Electric vehicle (EV) rentals for an emission-free ride.";
        });
  
        downBtnBus.addEventListener("click", function () {
          cardText.textContent =
            "Public buses designed for maximum comfort and minimal environmental impact.";
        });
  
        // Event listener for the bus down button
        downBtnMrt.addEventListener("click", function () {
          // Update the card's content for bus
          // cardSubtitle.textContent = "Information about Bus";
          cardText.textContent =
            "Efficient MRT system to save time and reduce carbon emissions.";
        });
      },
    },
    mounted() {
      this.onMounted();
    },
  };
  </script>
  
  <style scoped>
  @import url(https://db.onlinewebfonts.com/c/ae54ba780341eb52a73bf1c481b8b951?family=Poppins);
  
  @font-face {
    font-family: "Poppins";
    src: url("https://db.onlinewebfonts.com/t/ae54ba780341eb52a73bf1c481b8b951.eot");
    src: url("https://db.onlinewebfonts.com/t/ae54ba780341eb52a73bf1c481b8b951.eot?#iefix")
        format("embedded-opentype"),
      url("https://db.onlinewebfonts.com/t/ae54ba780341eb52a73bf1c481b8b951.woff2")
        format("woff2"),
      url("https://db.onlinewebfonts.com/t/ae54ba780341eb52a73bf1c481b8b951.woff")
        format("woff"),
      url("https://db.onlinewebfonts.com/t/ae54ba780341eb52a73bf1c481b8b951.ttf")
        format("truetype"),
      url("https://db.onlinewebfonts.com/t/ae54ba780341eb52a73bf1c481b8b951.svg#Poppins")
        format("svg");
  }
  
  .flex-container {
    position: relative;
    min-height: 97vh;
    width: 100%;
    display: -webkit-flex;
    display: flex;
    overflow: hidden;
    @media screen and (max-width: 768px) {
      flex-direction: column;
    }
  }
  
  .flex-title {
    color: #f1f1f1;
    position: relative;
    z-index: 2;
    font-size: 2vw;
    font-family: "Poppins", sans-serif;
    font-weight: bold;
    margin: auto;
    text-align: center;
    transform: rotate(90deg) !important;
    top: 25%;
    -webkit-transition: all 500ms ease;
    -moz-transition: all 500ms ease;
    -ms-transition: all 500ms ease;
    -o-transition: all 500ms ease;
    transition: all 500ms ease;
    @media screen and (max-width: 768px) {
      transform: rotate(0deg) !important;
      font-size: 2.5vw;
    }
  }
  
  .flex-about {
    opacity: 0;
    color: #f1f1f1;
    position: relative;
    width: 70%;
    font-size: 1.2vw;
    padding: 5%;
    top: 30%;
    border: 2px solid #f1f1f1;
    border-radius: 10px;
    line-height: 1.3;
    margin: auto;
    text-align: left;
    transform: rotate(0deg);
    -webkit-transition: all 500ms ease;
    -moz-transition: all 500ms ease;
    -ms-transition: all 500ms ease;
    -o-transition: all 500ms ease;
    transition: all 500ms ease;
    @media screen and (max-width: 768px) {
      font-size: 1vw;
    }
  }
  
  .flex-slide {
    position: relative;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    cursor: pointer;
    -webkit-transition: all 500ms ease;
    -moz-transition: all 500ms ease;
    -ms-transition: all 500ms ease;
    -o-transition: all 500ms ease;
    transition: all 500ms ease;
    @media screen and (max-width: 768px) {
      overflow: auto;
      overflow-x: hidden;
    }
  }
  
  .flex-slide:hover .flex-title {
    transform: rotate(
      0deg
    ) !important; /* Rotate by 0 degrees for horizontal titles on hover */
    top: 30%;
    transition: transform 500ms !important;
  }
  
  .flex-slide p {
    @media screen and (max-width: 768px) {
      font-size: 2em;
    }
  }
  .flex-slide ul li {
    @media screen and (max-width: 768px) {
      font-size: 2em;
    }
  }
  .flex-slide:hover {
    -webkit-flex-grow: 3;
    flex-grow: 3;
  }
  
  .flex-slide:hover .flex-about {
    opacity: 1;
  }
  
  .bicycle {
    /* height: 85vh; */
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(../../images/bicycle1.jpg);
    background-size: cover;
    background-position: center center;
    @media screen and (min-width: 768px) {
      animation-delay: 0s;
    }
  }
  
  @keyframes aboutFlexSlide {
    0% {
      -webkit-flex-grow: 1;
      flex-grow: 1;
    }
    50% {
      -webkit-flex-grow: 3;
      flex-grow: 3;
    }
    100% {
      -webkit-flex-grow: 1;
      flex-grow: 1;
    }
  }
  
  .flex-title-bicycle {
    @media screen and (min-width: 768px) {
      transform: rotate(90deg);
      top: 25%;
      animation-delay: 0s;
    }
  }
  
  @keyframes homeFlextitle {
    0% {
      transform: rotate(90deg);
      top: 25%;
    }
    50% {
      transform: rotate(0deg);
      top: 25%;
    }
    100% {
      transform: rotate(90deg);
      top: 25%;
    }
  }
  
  .flex-about-bicycle {
    opacity: 0;
    @media screen and (min-width: 768px) {
      animation-delay: 0s;
    }
  }
  
  @keyframes flexAboutHome {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  
  .ev {
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(../../images/bluesg1.png);
    background-size: cover;
    background-position: center center;
  }
  .contact-form {
    width: 100%;
  }
  input {
    width: 100%;
  }
  textarea {
    width: 100%;
  }
  .bus {
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(../../images/bus3.jpg);
    background-size: cover;
    background-position: center center;
  }
  .mrt {
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(../../images/mrt2.jpg);
    background-size: cover;
    background-position: center center;
  }
  
  .slide-content {
    height: 100%;
  }
  
  .flex-slide .slide-content .down-btn {
    opacity: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    position: absolute;
    bottom: 40px;
    left: 50%;
    color: #fff;
    font-size: 40px;
    cursor: pointer;
    transition: opacity 0.3s, background-color 0.3s;
  }
  
  @media (max-width: 771px) {
    .flex-slide .slide-content .down-btn {
      font-size: 25px;
    }
  }
  
  .flex-slide:hover .slide-content .down-btn {
    opacity: 1;
  }
  
  .slide-content .down-btn:hover {
    padding-top: 8px;
  }
  
  #transport-info {
    position: relative;
    bottom: 0;
    left: 0;
    min-height: 40vh;
    background-image: linear-gradient(
      to bottom,
      rgb(15, 49, 16),
      rgb(83, 123, 83)
    );
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
  }
  
  .card {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    background-color: #fff;
    padding: 10px;
    position: relative;
    z-index: 2;
    top: -35px;
  }
  
  .card .card-title {
    color: #36502b;
    font-family: "Poppins", sans-serif;
    font-size: 2rem;
    font-weight: bold;
  }
  
  .card-subtitle {
    font-size: 1.2rem;
  }
  
  @media screen and (max-width: 771px) {
    .card .card-title {
      font-size: 1.8rem;
    }
    .card .card-subtitle {
      font-size: 1rem;
    }
  }
  
  @media screen and (max-width: 683px) {
    .card .card-title {
      font-size: 1.5rem;
    }
    .card .card-subtitle {
      font-size: 0.8rem;
    }
  }
  </style>