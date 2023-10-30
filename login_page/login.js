export default {
    // components: {
    //   NavBar,
    //   Footer,
  
    // },
    data() {
      return {
        isLogin: true,
        loginEmail: '',
        loginPassword: '',
        signupName: '',
        signupEmail: '',
        signupPassword: '',
      };
    },
    computed: {
      userLoggedIn() {
        // Check if the user is logged in (replace with your authentication state)
        return this.$store.getters.isUserLoggedIn; // Replace with your authentication state
      },
      userName() {
        // Get the user's name from the state
        return this.$store.state.user.name; // Replace with your user data
      },
    },
    methods: {
      performAction() {
        if (this.isLogin) {
          // Handle login action
          const email = this.loginEmail;
          const password = this.loginPassword;
          // Perform login with email and password
        } else {
          // Handle sign-up action
          const name = this.signupName;
          const email = this.signupEmail;
          const password = this.signupPassword;
          // Perform sign-up with name, email, and password
        }
      },
      logout() {
        // Implement the logout functionality
        this.$store.dispatch('logout'); // Replace with your logout action
      },
    },
  };