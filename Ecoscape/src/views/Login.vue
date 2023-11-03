<template>
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>EcoScape</title>

    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9"
      crossorigin="anonymous"
    />
  </head>
  <NavBar />
  <body>
    <div class="container-fluid p-0">
      <div class="banner full-height p-0">
        <div
          class="section position-relative justify-content-center text-center"
        >
          <div class="row full-height justify-content-center">
            <div class="text-center justify-content-center py-5">
              <div class="section try pb-5 pt-5 pt-sm-2 text-center">
                <h6 class="mb-0 pb-3">
                  <span>Sign Up</span>
                  <span>Log In</span>
                </h6>
                <input
                  class="checkbox"
                  type="checkbox"
                  id="reg-log"
                  name="reg-log"
                />
                <label for="reg-log"></label>
                <div class="card-3d-wrap mx-auto">
                  <div class="card-3d-wrapper">
                    <div class="card-front">
                      <div class="center-wrap">
                        <div class="section text-center">
                          <h4 class="mb-4 pb-3">Sign Up</h4>
                        </div>
                        <div
                          v-if="!signupEmailIsValid && signUpButtonClicked"
                          class="error"
                        >
                          Please enter a valid email (e.g.,
                          yourname@example.com)
                        </div>
                        <div class="form-group">
                          <input
                            type="text"
                            name="SignUpEmail"
                            class="form-style"
                            placeholder="Your Email (e.g james012@gmail.com)"
                            id="SignUpEmail"
                            autocomplete="off"
                            v-model="SignUpEmail"
                          />
                          <i class="input-icon uil uil-user"></i>

                          <div class="form-group mt-2">
                            <input
                              type="password"
                              name="Signpass"
                              class="form-style"
                              placeholder="Your Password"
                              id="Signpass"
                              autocomplete="off"
                              v-model="Signpass"
                            />
                            <i class="input-icon uil uil-lock-alt"></i>
                          </div>
                          <div class="form-group mt-2">
                            <input
                              type="password"
                              name="confirmPass"
                              class="form-style"
                              placeholder="Confirm Password"
                              id="confirmPass"
                              autocomplete="off"
                              v-model="confirmPass"
                            />
                            <i class="input-icon uil uil-lock-alt"></i>
                          </div>
                          <div
                            class="error"
                            v-if="!isPasswordMatch && signUpButtonClicked"
                          >
                            Passwords do not match :(
                          </div>
                          <div
                            class="error"
                            v-if="!passwordValid && signUpButtonClicked"
                          >
                            Your password should be at least 6 characters long!
                          </div>
                          <a
                            href="#"
                            class="btn mt-4"
                            id="signUp"
                            @click="signUp"
                            >Sign Up</a
                          >
                        </div>
                      </div>
                    </div>
                    <div class="card-back">
                      <div class="center-wrap">
                        <div class="section text-center">
                          <h4 class="mb-4 pb-3">Log In</h4>

                          <div class="form-group">
                            <input
                              type="text"
                              name="logEmail"
                              class="form-style"
                              placeholder="Your Email (e.g james012@gmail.com)"
                              id="logEmail"
                              autocomplete="off"
                              v-model="logEmail"
                            />
                            <i class="input-icon uil uil-user"></i>
                          </div>

                          <div
                            v-if="!loginEmailIsValid && loginButtonClicked"
                            class="error"
                          >
                            Please enter a valid email (e.g.,
                            yourname@example.com)
                          </div>

                          <div class="form-group mt-2">
                            <input
                              type="password"
                              name="logpass"
                              class="form-style"
                              placeholder="Your Password"
                              id="logpass"
                              autocomplete="off"
                              v-model="logpass"
                            />
                            <i class="input-icon uil-lock-alt"></i>
                          </div>

                          <a
                            href="#"
                            class="btn mt-4"
                            id="Login"
                            @click="isLogin"
                            >Log In</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
  <Footer />
</template>

<script>
import { defineComponent, ref, computed } from "vue";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
import Dashboard from "@/components/Dashboard.vue";
import { useRouter } from "vue-router";

export default defineComponent({
  components: {
    NavBar,
    Footer,
    Dashboard,
  },
  setup() {
    const email = ref("");
    const logpass = ref("");
    const error = ref(null);
    const logEmail = ref(""); // Define logEmail
    const SignUpEmail = ref(""); // Define SignUpEmail
    const Signpass = ref("");
    const confirmPass = ref("");
    const db = getFirestore(); // Access Firestore without the app parameter
    const auth = getAuth(); // Access the Auth instance
    const signUpButtonClicked = ref(false);
    const loginButtonClicked = ref(false);
    const toDisplay = "";
    const router = useRouter();

    // Function to check if an email is valid
    const isEmailValid = (emailValue) => {
      return emailValue.includes("@");
    };
    // Check if the email is valid for login
    const loginEmailIsValid = computed(() => isEmailValid(logEmail.value));

    // Check if the email is valid for signup
    const signupEmailIsValid = computed(() => isEmailValid(SignUpEmail.value));

    const passwordValid = computed(() => {
      return Signpass.value.length >= 6;
    });

    const isPasswordMatch = computed(() => {
      // Validate if password matches the confirm password
      return Signpass.value === confirmPass.value;
    });

    const isLogin = async () => {
      error.value = null;
      loginButtonClicked.value = true;

      try {
        await signInWithEmailAndPassword(auth, logEmail.value, logpass.value);

        // Query Firestore for user data
        const colRef = collection(db, "users");
        const q = query(colRef, where("uid", "==", auth.currentUser.uid));
        const querySnapshot = await getDocs(q);

        if (querySnapshot.size > 0) {
          // User data found
          querySnapshot.forEach((doc) => {
            const userData = doc.data();
            // Use userData as needed
          });
        }

        // Redirect to the dashboard
        this.$router.replace("Dashboard");
      } catch (e) {
        error.value = e.message;
      }
    };
    const createUserInFirestore = async (user) => {
      const colRef = collection(db, "users");
      const userDoc = {
        uid: user.uid, // Use the Firebase Authentication UID
        email: SignUpEmail.value,
        password: Signpass.value,
        // Other user-specific data
      };
      await addDoc(colRef, userDoc);
    };
    const signUp = async () => {
      error.value = null;
      signUpButtonClicked.value = true;

      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          SignUpEmail.value,
          Signpass.value
        );
        const user = userCredential.user;
        await createUserInFirestore(user);
        // Redirect to the homepage
        toDisplay = "You are signed in!";
      } catch (e) {
        error.value = e.message;
      }
    };

    return {
      email,
      logpass,
      error,
      isLogin,
      signUp,
      isEmailValid,
      isPasswordMatch,
      logEmail,
      SignUpEmail,
      Signpass,
      confirmPass,
      loginButtonClicked,
      signUpButtonClicked,
      signupEmailIsValid,
      loginEmailIsValid,
      passwordValid,
      toDisplay,
    };
  },
});
</script>

<style scoped>
@import url("https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css");
@import url("https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css");
/* bootstrap, icons & fonts  */
@import url("https://unicons.iconscout.com/release/v2.1.9/css/unicons.css");

@import url("https://fonts.googleapis.com/css?family=Poppins:400,500,600,700,800,900");

body {
  font-family: "Poppins", sans-serif;
  background-image: url("./images/sg1.jpg");
  /* opacity: 0.5;  */
  background-size: cover;
  background-repeat: no-repeat;
  font-weight: 300;
  font-size: 15px;
  line-height: 1.7;
  color: #ddddda;
  display: flex;
  height: auto;
  width: 100%;
  padding: 0;
  margin: 0;
}

.lead {
  font-size: 12px;
  font-weight: 7;
  text-decoration: underline;
}

h1 span {
  color: rgb(36, 140, 46);
}

.banner {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
}
a {
  cursor: pointer;
  transition: all 200ms linear;
}

a:hover {
  text-decoration: none;
}

.link {
  color: #c4c3ca;
}

.link:hover {
  color: #ddead1;
}

p {
  font-weight: 500;
  font-size: 14px;
  line-height: 1.7;
}

h4 {
  font-weight: 600;
  font-size: 30px;
}

h6 span {
  padding: 0 20px;
  display: inline-block;
  /* background-color: #2f4425 ; */
  text-transform: uppercase;
  font-weight: 700;
  font-size: 20px;
  color: #ffffff;
  margin: 5px;
}
.error {
  font-size: 12px;
}
.section {
  position: relative;
  margin-top: 19px;
  max-width: 100%;
  display: block;
}

.full-height {
  min-height: 100vh;
}

[type="checkbox"] {
  position: absolute;
  appearance: none;
}

.checkbox:checked + label,
.checkbox:not(:checked) + label {
  position: relative;
  display: block;
  text-align: center;
  width: 60px;
  height: 16px;
  background-color: #e4e9ea;
  border-radius: 8px;
  padding: 0;
  margin: 10px auto;
  cursor: pointer;
}
.checkbox:checked + label:before,
.checkbox:not(:checked) + label:before {
  position: absolute;
  display: block;
  width: 36px;
  height: 36px;
  background-color: #055a72;
  border-radius: 50%;
  color: #ffffff;
  font-family: "unicons";
  content: "\eb4f";
  z-index: 20;
  top: -10px;
  left: -10px;
  line-height: 36px;
  text-align: center;
  font-size: 24px;
  transition: all 0.5s ease;
}

.checkbox:checked + label:before {
  transform: translateX(44px) rotate(-270deg);
}

.card-3d-wrap {
  position: relative;
  width: 440px;
  max-width: 100%;
  height: 400px;
  transform-style: preserve-3d;
  perspective: 800px;
  margin-top: 60px;
}

.card-3d-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  gap: 10px;
  position: absolute;
  top: 0;
  left: 0;
  transform-style: preserve-3d;
  transition: all 600ms ease-out;
}

.card-front,
.card-back {
  width: 100%;
  height: 100%;
  background-color: #2f4425;
  background-position: bottom center;
  background-repeat: no-repeat;
  background-size: 300%;
  border-radius: 6px;
  left: 0;
  top: 0;
  transform-style: preserve-3d;
  backface-visibility: hidden;
}

.center-wrap {
  position: absolute;
  width: 100%;
  padding: 0 35px;
  top: 50%;
  left: 0;
  transform: translate3d(0, -50%, 35px) perspective(100px);
  z-index: 20;
  display: block;
}

.form-group {
  position: relative;
  margin: 0;
  padding: 0;
}

.form-style {
  color: #c4c3ca;
  background-color: #1f2927;
  padding: 13px 20px;
  padding-left: 55px;
  height: 48px;
  width: 100%;
  font-weight: 500;
  border-radius: 4px;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.5px;
  outline: none;
  border: none;
  transition: all 200ms linear;
  box-shadow: 0 4px 8px 0 rgba(21, 21, 21, 0.2);
}

.form-style:focus {
  border: none;
  outline: none;
  box-shadow: 0 4px 8px 0 rgba(21, 21, 21, 0.2);
}

.input-icon {
  position: absolute;
  top: 7px;
  left: 13px;
  height: 48px;
  font-size: 24px;
  line-height: 35px;
  text-align: left;
  align-items: center;
  color: #ffffff;
  transition: all 200ms linear;
}

input:focus::-webkit-input-placeholder {
  opacity: 0;
  transition: all 200ms linear;
}

.btn {
  background-color: #87ab69;
  color: #ffffff;
  border-radius: 4px;
  height: 44px;
  font-size: 15px;
  font-weight: 600;
  text-transform: uppercase;
  transition: all 200ms linear;
  padding: 0 30px;
  letter-spacing: 1px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: none;
  box-shadow: 0 8px 24px 0 rgba(255, 235, 167, 0.2);
}

.btn:hover {
  background-color: #4a707a;
  color: #ffffff;
  box-shadow: 0 8px 24px 0 rgba(16, 39, 112, 0.2);
}

.card-front,
.card-back {
  position: absolute;
}

.card-back {
  transform: rotateY(180deg);
}

.checkbox:checked ~ .card-3d-wrap .card-3d-wrapper {
  transform: rotateY(180deg);
}

i {
  align-self: left;
}

@media screen and (min-width: 1001px) {
  .try {
    justify-content: center;
  }
}

@media screen and (max-width: 1000px) {
  .try {
    justify-content: center;
  }
}

@media screen and (max-width: 700px) {
  .try {
    justify-content: center;
  }
}

@media screen and (max-width: 501px) {
  .try {
    justify-content: center;
  }
  #footer-separation {
    background-color: #8ebe6d; /* Remove white space above and below */
    border: none; /* Remove the default line */
    height: 1px; /* Increase line thickness */
    width: 80%; /* Adjust width as needed */
    margin: 0 auto; /* Center the line horizontally */
  }
}
</style>
