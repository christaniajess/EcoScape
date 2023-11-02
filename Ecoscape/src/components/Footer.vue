<template>
  <footer id="footer" class="border-top">
    <div class="container-fluid m-0 p-0">
      <div class="row pt-3 mb-2">
        <div class="col-lg-1 col-md-1 mb-2 mb-lg-0"></div>

        <div class="col-lg-4 col-md-4 mb-2 mb-lg-0">
          <div class="d-flex align-items-center">
            <img
              src="images/icon-lightgreen.png"
              alt=""
              class="footer-logo mt-4 mb-3"
            />
            <h2 class="footer-main-title mt-2 ps-3 pt-2">EcoScape</h2>
          </div>
        </div>

        <div class="footer-columns col-lg-2 col-md-2 mb-4 mb-lg-0">
          <h6 class="footer-title text-uppercase fw-bold mb-2">Directory</h6>
          <ul class="list-unstyled mb-0">
            <li class="mb-1">
              <router-link to="/att" class="footer-links"
                >Attractions</router-link
              >
            </li>
            <li class="mb-1">
              <router-link to="/hotels" class="footer-links"
                >Hotels</router-link
              >
            </li>
            <li class="mb-1">
              <router-link to="/restaurants" class="footer-links"
                >Restaurant</router-link
              >
            </li>
            <li class="mb-2">
              <router-link to="/transport" class="footer-links"
                >Green Transport Planner</router-link
              >
            </li>
          </ul>
        </div>

        <div class="footer-columns col-lg-2 col-md-2 mb-4 mb-lg-0">
          <h6 class="footer-title text-uppercase fw-bold mb-2">Account</h6>
          <ul class="list-unstyled mb-0">
            <li class="mb-3">
              <router-link to="/login" class="footer-links"
                >Login/Sign Up</router-link
              >
            </li>
          </ul>
          <h6 class="footer-title text-uppercase fw-bold mb-2">EcoScape</h6>
          <ul class="list-unstyled mb-0">
            <li class="mb-2">
              <router-link to="/#about-us" class="footer-links"
                >About Us</router-link
              >
            </li>
          </ul>
        </div>

        <div class="footer-columns col-lg-2 col-md-2 mb-4 mb-lg-0">
          <h6 class="footer-title text-uppercase fw-bold mb-2">Contact Us</h6>
          <ul class="list-unstyled mb-0">
            <li class="mb-1">
              <a @click="openEmail" class="footer-links"
                ><i class="fa fa-envelope pe-2"></i>Email</a
              >
            </li>
            <li class="mb-1">
              <a @click="openFacebook" class="footer-links"
                ><i class="fa fa-facebook me-1 pe-2"></i>Facebook</a
              >
            </li>
            <li class="mb-1">
              <a @click="openInstagram" class="footer-links"
                ><i class="fa fa-instagram pe-2"></i>Instagram</a
              >
            </li>
          </ul>
        </div>
      </div>

      <div class="col-lg-1 col-md-2 mb-2 mb-lg-0"></div>

      <!-- Copyrights -->
      <div class="footer-copyrights">
        <div class="container-fluid text-center">
          <p class="copyrights-text text-light p-2">
            © <span id="year">2023</span> EcoScape All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  methods: {
    openEmail() {
      window.open("mailto:example@example.com");
    },

    openFacebook() {
      window.open("https://www.facebook.com/your-facebook-page", "_blank");
    },

    openInstagram() {
      window.open("https://www.instagram.com/your-instagram-profile", "_blank");
    },
  },
  created() {
    const yearElement = document.getElementById("year");
    if (yearElement) {
      yearElement.textContent = new Date().getFullYear();
    }
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

#footer {
  position: relative;
  bottom: 0;
  width: 100%;
  background-color: #101207;
  font-family: "Poppins", sans-serif;
  border-top: 1px solid #8ebe6d;
}

footer .footer-title {
  color: #9bb691;
}

footer ul li {
  font-size: small;
}

footer .footer-links {
  color: #fff;
  text-decoration: underline;
  font-weight: 500;
}

footer .footer-news {
  font-size: small;
  color: #75975e;
}

footer .footer-main-title {
  position: relative;
  color: #adc9a1;
}

footer .footer-logo {
  width: 50px;
  height: auto;
  position: relative;
}

.footer-copyrights {
  position: relative;
  bottom: 0;
  left: 0;
  width: 100%;
  height: auto;
  background-color: #192310;
  font-size: 15px;
}

.copyrights-text {
  position: relative;
  margin-top: auto;
  margin-bottom: auto;
}

@media (max-width: 771px) {
  .footer-columns {
    flex-basis: 25%;
    padding-left: 2rem;
  }

  .footer-columns h6 {
    margin-bottom: 0; /* Remove the margin to avoid extra space */
  }
}
</style>
