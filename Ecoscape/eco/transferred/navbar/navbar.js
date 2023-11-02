export default {
  data() {
    return {
      showSearchBar: false,
      isNavbarOpen: false, // Add a data property to track the state of the navbar
    };
  },
  methods: {
    toggleSearch() {
      console.log('hihi')
      this.showSearchBar = !this.showSearchBar;
    },
    toggleNavbar() {
      this.isNavbarOpen = !this.isNavbarOpen; // Toggle the collapsed navbar
    },
  },
};
