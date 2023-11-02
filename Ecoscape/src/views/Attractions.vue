<template>
  
    <body>
      <NavBar/>
      <br><br>
      <Tabs/>
      <Waves/> 
      <Footer/>
    </body>
  
  </template>
  
  
  
  <script>
  
  import NavBar from "@/components/NavBar.vue";
  import Footer from "@/components/Footer.vue";
  import Tabs from "@/components/Tabs.vue";
  import Cards from "@/components/Cards.vue";
  import Waves from "@/components/wallpaper.vue";
  import axios from 'axios';
  
  const url = '../destination.json';
  
  export default {
  components: {
    NavBar,
    Footer,
    Tabs,
    Cards,
    Waves,
  },
  data() {
                    return {
                        destinations: [{name:"", image:"", url: "", area: []}],
                        init: true,
                        central_dest: [],
                        north_dest: [],
                        south_dest: [],
                        east_dest: [],
                        west_dest: []
                    }
                },
                methods: {
                  navigateToUrl(index) {
                      // Handle the navigation to the specified URL and pass the index to the next page
                      localStorage.setItem("index", index);
                      window.location.href = "attraction_indiv.html";
                      console.log(index)
                      }
                },
                created() { // lifecycle book -- created is an event tat occurs when the Vue instance has been created
                    axios.get(url)
                            .then(response => {
                                const result = response.data
                                // console.log(result)
                                
                                for (let i = 0; i<result.length; i++) {
                                  // console.log(result[i])
                                  var destination = {}
                                  
                                  destination.index = i
                                  destination.name = result[i].name
                                  destination.image =  result[i].image
                                  destination.url = "attraction_indiv.html"
                                  destination.area = result[i].area
                                  destination.ownUrl = result[i].url
                                  destination.rating = result[i].rating
                                  destination.greenScore = result[i].greenScore
                                  destination.lat = result[i].lat
                                  destination.long = result[i].long
                                  destination.description = result[i].description
                                  if (this.init) {
                                    this.destinations = [destination]
                                    this.init = false
                                } else 
                                    this.destinations.push(destination)
                                }
                                // console.log(this.destinations)
                                
                                // Populating different areas
                                for (destination of this.destinations) {
                                  // console.log(destination)
                                  // console.log(destination.area[1])
                                  if (destination.area[1] == "central") {
                                    this.central_dest.push(destination)
                                  }
                                  else if (destination.area[1] == "north") {
                                    this.north_dest.push(destination)
                                  }
                                  else if (destination.area[1] == "south") {
                                    this.south_dest.push(destination)
                                  }
                                  else if (destination.area[1] == "east") {
                                    this.east_dest.push(destination)
                                  }
                                  else if (destination.area[1] == "west") {
                                    this.west_dest.push(destination)
                                  }
                                }
                            })
                }
            }
  
  </script>
