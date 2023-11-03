<template>
    <div>
      <h3>Google Map</h3>
      <div id="map"></div>
      <head>
    <title>Simple Marker</title>
    <!-- The callback parameter is required, so we use console.debug as a noop -->
 
  </head>
  <body>
    <gmp-map center="1.2832854986190796,103.86353302001953" zoom="14" map-id="DEMO_MAP_ID">
      <gmp-advanced-marker position="1.2832854986190796,103.86353302001953" title="My location">
      </gmp-advanced-marker>
    </gmp-map>
  </body>
       <div class="jumbotron">
      <!-- <p class="lead text-center">Get Geo Location</p> -->
      <form>
        <div class="form-group">
          <label for="addr">Enter Your Location</label>
          <input type="text" class="form-control" v-model="address" placeholder="E.g. Gardens By the Bay">
          <br>
          <button type="button" onclick="getLoc('addr')" class="btn btn-success">Get Full Address!</button>
            <button type="button" onclick="getLoc('postcode')" class="btn btn-success">Get Postal Code!</button>
          <!-- the following set the lat, lng values to put a marker on the map-->
          <input type="hidden" id="lat" name="lat" :value="lat" />
          <input type="hidden" id="lng" name="lng" :value="lng" />
          <!-- Buttons to fetch data for different modes of transportation -->
          <button @click="getBicycleParkingData">Get Bicycle Parking Data</button>
          <button @click="getCarParksData">Get Car Parks Data</button>
          <button @click="getBusStopsData">Get Bus Stops Data</button>
          <button @click="getMRTData">Get MRT Data</button>

          <!-- Display transportation data -->
          <div id="transportData">
            <h3>Transportation Data</h3>
            <!-- Display bicycle parking data -->
            <ul v-if="bicycleParkingData.length > 0">
            <li v-for="parking in bicycleParkingData" :key="parking.ID">
                <p><strong>Description:</strong> {{ parking.Description }}</p>
                <p><strong>Latitude:</strong> {{ parking.Latitude }}</p>
                <p><strong>Longitude:</strong> {{ parking.Longitude }}</p>
                <!-- Add other bicycle parking data properties here -->
            </li>
            </ul>

            <!-- Display car parks data -->
            <ul v-if="carParksData.length > 0">
            <li v-for="carpark in carParksData" :key="carpark.CarParkID">
                <p><strong>Car Park ID:</strong> {{ carpark.CarParkID }}</p>
                <p><strong>Area:</strong> {{ carpark.Area }}</p>
                <!-- Add other car park data properties here -->
            </li>
            </ul>
            <!-- Display bus stops data -->
            <ul v-if="filteredBusStops.length > 0">
             <li v-for="busStop in filteredBusStops" :key="busStop.BusStopCode">
                <p><strong>Bus Stop Code:</strong> {{ busStop.BusStopCode }}</p>
                <p><strong>Road Name:</strong> {{ busStop.RoadName }}</p>
        <!-- Add other bus stop data properties here -->
                </li>
            </ul>
            <!-- Display MRT data -->
            <ul v-if="mrtData.length > 0">
              <li v-for="alert in mrtData" :key="alert.ID">
                <p><strong>Status:</strong> {{ alert.status === '1' ? 'Normal' : 'Disrupted' }}</p>
                <p><strong>Line Affected:</strong> {{ alert.lineAffected }}</p>
                <!-- Add other MRT data properties here -->
              </li>
            </ul>
          </div>
        </div>
        <p id="display" class="lead text-center">{{ displayInfo }}</p>
      </form>
      </div>
    </div>
  </template>
  <script>

 import axios from 'axios';
  import GoogleMap from '@/components/GoogleMap.vue';

  
  export default {
    components: {
        GoogleMap
    },
    props: {
    index: {
      type: Number,
      required: true,
    },
  },
    data() {
      return {
        address: 'Singapore Management University',
        lat: '1.2973784',
        lng: '103.8495219',
        title: 'Hello SMU',
        displayInfo: '',
        bicycleParkingData: [],
        carParksData: [],
        busStopsData: [],
        mrtData: [],
        image: "",
        url: "",
        name: "",

      };
    },
    computed: {
    filteredBusStops() {
      // Filter the bus stops based on the user's entered location
      if (this.address) {
        if (this.locationFilterType === 'fullAddress') {
          return this.busStopsData.filter(busStop => busStop.RoadName.includes(this.address));
        } else if (this.locationFilterType === 'postalCode') {
          return this.busStopsData.filter(busStop => busStop.PostalCode === this.address);
        } else {
        // If no address is entered, return all bus stops
        var errorMsg = "There are no bus stops nearby!"
        return errorMsg; 
        }
        }       
    },
    filteredCarParks() {
        if (this.address) {
        if (this.locationFilterType === 'fullAddress') {
          return this.carParksData.filter(carPark => this.address.includes(carPark.area));
        } else if (this.locationFilterType === 'postalCode') {
          return this.carParksData.filter(carPark => carPark.PostalCode === this.address);
        }
    
  }
  },
  mounted() {
    this.loadGoogleMapsScript();
    console.log("mounted")
  },
  methods: {
    loadGoogleMapsScript() {
      const script = document.createElement("script");
      script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyAEdK4QmPR7xGkCxDcpoD1GLKBwBL-R0zQ&libraries=maps,marker&v=beta";
      script.async = true;
      script.defer = true;
      script.onload = this.initializeMap;
      document.head.appendChild(script);
    },
    initializeMap() {
      // Your map initialization logic here
      this.lat = parseFloat(this.lat);
        this.lng = parseFloat(this.lng);
        var loc = { lat: this.lat, lng: this.lng };
      const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 1.2973784, lng: 103.8495219 },
        zoom: 14,
      });
      const marker = new google.maps.Marker({ position: loc, map: map, title: this.title });
      },
      //  getLoc(action) {
      //       var addr = document.getElementById("addr").value;
      //       console.log(addr);
      //       var url = "https://maps.googleapis.com/maps/api/geocode/json";
      //       var key = "AIzaSyDksVIycjBKa9SOthsJq5gbpXpM-DbgBWc"
            
      //       axios.get(url, {
      //                   params: {
      //                       address : addr,
      //                       key : key
      //                   }
      //               })
      //               .then(response =>  {
      //                   let data = response.data
      //                   console.log(data);

      //                   let info = '';
      //                   if (action == 'postcode') {
      //                       // display postal code, given an address
      //                       info = getPostCode(data);
      //                   } else {
      //                       // display full address, given post code or partial addr
      //                       info = getFullAddress(data);
      //                   }
      //                   console.log(info);
                        
      //                   document.getElementById("display").innerText = info;
      //                   // refresh the hidden input values with new lat lng coordinates
      //                   let coordinate = getLatLng(data);
      //                   lat = coordinate["lat"];
      //                   lng = coordinate["lng"];
      //                   title = "Hello " + addr
      //                   // now refresh the map
      //                   initMap();
      //               })
      //               .catch(error => {
      //                   // not a good idea to directly show err.message 
      //                   // as it may contain sensitive info
      //                   // document.getElementById("display").innerText = error.message;
      //                   // show a predefined error message string
      //                   document.getElementById("display").innerText = "Sorry, invalid address. Please try again!";
      //               }); 
      //   },

        getFullAddress (data) {
            var addr = data["results"][0]["formatted_address"];
            var loc = getLatLng(data);
            return addr + ", lat: " + loc["lat"] + ", lng: " + loc["lng"];
        },

        getLatLng(data) {
            var location= data["results"][0]["geometry"]["location"];
            return location; 
        },

        getPostCode(data) {
            var addrcomponents = data["results"][0]["address_components"];
            var postcode = addrcomponents.filter(postcodeHelper);
            // country is an array but there should be only one element
            return postcode[0]["long_name"];
        },

        postcodeHelper(addr) {  
            return addr["types"][0] == "postal_code" ;
        },

        getKeys(data){
            // data["results"][0] is an object
            // this gets the keys/properties of results[0] object
            var keys = Object.keys(data["results"][0]);
            for (key of keys) {
                // this prints --
                /*  address_components
                    formatted_address
                    geometry
                    place_id
                    plus_code
                    types */
                document.getElementById("display").innerText += key + "; ";
            }
        },

        getCountry(data) {
            // this is an array
            var addrcomponents = data["results"][0]["address_components"];
            // The filter() method creates a new array with array elements that passes a test.
            var country = addrcomponents.filter(countryHelper);
            // country is an array but there should be only one element
            return country[0]["long_name"];
        },

        countryHelper(addr, index) {    
            return addr["types"][0] == "country" ;
        },
      //   async getBicycleParkingData() {
      //       const apiUrl = 'http://datamall2.mytransport.sg/ltaodataservice/BicycleParkingv2';
      //       const key = 'mcXYAV2rQXOykVpqXBXaxw=='; // Replace with your LTA API key
      //       const latitude = this.lat;
      //       const longitude = this.lng;
      //       const distance = 0.5; // Default radius in kilometers

      //       try {
      //           const response = await axios.get(apiUrl, {
      //           headers: {
      //               AccountKey: key,
      //           },
      //           params: {
      //               latitude,
      //               longitude,
      //               distance,
      //           },
      //           });

      //           this.bicycleParkingData = response.data;
      //       } catch (error) {
      //           console.error('Error fetching bicycle parking data:', error);
      //       }
      //       },
      // async getCarParksData() {
      //   const apiUrl = 'http://datamall2.mytransport.sg/ltaodataservice/CarParkAvailabilityv2';
      //   const key = 'mcXYAV2rQXOykVpqXBXaxw=='; // Replace with your LTA API key
  
      //   try {
      //     const response = await axios.get(apiUrl, {
      //       headers: {
      //         AccountKey: key,
      //       },
      //     });
  
      //     const data = response.data;
      //     this.carParksData = data;
          
      //   } catch (error) {
      //     console.error('Error fetching car parks data:', error);
      //   }
      // },
      // async getBusStopsData() {
      //   const apiUrl = 'http://datamall2.mytransport.sg/ltaodataservice/BusStops';
      //   const key = 'mcXYAV2rQXOykVpqXBXaxw=='; // Replace with your LTA API key
  
      //   try {
      //     const response = await axios.get(apiUrl, {
      //       headers: {
      //         AccountKey: key,
      //       },
      //     });
  
      //     const data = response.data;
      //     this.busStopsData = data;
      //   } catch (error) {
      //     console.error('Error fetching bus stops data:', error);
      //   }
      // },
      // async getMRTData() {
      //   const apiUrl = 'http://datamall2.mytransport.sg/ltaodataservice/TrainServiceAlerts';
      //   const key = 'mcXYAV2rQXOykVpqXBXaxw=='; // Replace with your LTA API key
  
      //   try {
      //     const response = await axios.get(apiUrl, {
      //       headers: {
      //         AccountKey: key,
      //       },
      //     });
  
      //     const data = response.data;
      //     this.mrtData = data;
      //   } catch (error) {
      //     console.error('Error fetching MRT data:', error);
      //   }
      // },
      

    },

    created() {
    // Load the Google Maps script here if not already loaded
    if (typeof google === 'undefined') {
      const script = document.createElement('script');
      script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAEdK4QmPR7xGkCxDcpoD1GLKBwBL-R0zQ';
      script.onload = this.initMap;
      document.body.appendChild(script);
    } else {
      this.initMap();
    }
  
      // this.getFullAddress();
      // this.getBicycleParkingData();
      // this.getCarParksData();
      // this.getBusStopsData();
      // this.getMRTData();
    }
  }}
  </script>
  
  
  <style>
/* Always set the map height explicitly to define the size of the div
 * element that contains the map. */
 gmp-map {
  height: 100%;
}

/* Optional: Makes the sample page fill the window. */
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}
  </style>