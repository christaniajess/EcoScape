<template>
    <script src="tpscript.js"></script>
    <div>
      <h3>Google Map</h3>
      <div id="map"></div>
  
       <div class="jumbotron">
      <p class="lead text-center">Get Geo Location</p>
      <form>
        <div class="form-group">
          <label for="addr">Enter An Address</label>
          <input type="text" class="form-control" v-model="address" placeholder="E.g. Gardens By the Bay">
          <br>
          <button type="button" @click="getFullAddress" class="btn btn-success">Get Full Address!</button>
          <button type="button" @click="getPostalCode" class="btn btn-success">Get Postal Code!</button>
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
            <ul v-if="busStopsData.length > 0">
              <li v-for="busStop in busStopsData" :key="busStop.BusStopCode">
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
  
  export default {
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
      };
    },
    methods: {
      initMap() {
        this.lat = parseFloat(this.lat);
        this.lng = parseFloat(this.lng);
        var loc = { lat: this.lat, lng: this.lng };
        var map = new google.maps.Map(document.getElementById('map'), {
          center: loc,
          zoom: 14,
        });
        // marker, positioned at SIS, SMU
        const marker = new google.maps.Marker({ position: loc, map: map, title: this.title });
      },
      async getFullAddress() {
        const addr = this.address;
        const apiUrl = 'http://datamall2.mytransport.sg/ltaodataservice/BicycleParkingv2';
        const key = 'mcXYAV2rQXOykVpqXBXaxw=='; // Replace with your LTA API key
  
        try {
          const response = await axios.get(apiUrl, {
            headers: {
              AccountKey: key,
            },
            params: {
              address: addr,
            },
          });
  
          const data = response.data;
          let info = this.getFullAddressData(data);
          this.displayInfo = info;
  
          // Refresh the hidden input values with new lat lng coordinates
          let coordinate = this.getLatLng(data);
          this.lat = coordinate["lat"];
          this.lng = coordinate["lng"];
          this.title = "Hello " + addr;
  
          // Now refresh the map
          this.initMap();
        } catch (error) {
          this.displayInfo = 'Sorry, invalid address. Please try again!';
        }
      },
      async getBicycleParkingData() {
        const apiUrl = 'http://datamall2.mytransport.sg/ltaodataservice/BicycleParkingv2';
        const key = 'mcXYAV2rQXOykVpqXBXaxw=='; // Replace with your LTA API key
        const latitude = this.lat;
        const longitude = this.lng;
        const distance = 0.5; // Default radius in kilometers
        try {
        const response = await axios.get(apiUrl, {
          headers: {
            AccountKey: key,
          },
          params: {
            latitude,
            longitude,
            distance,
          },
        });
  
          const data = response.data;
          this.bicycleParkingData = data;
        } catch (error) {
          console.error('Error fetching bicycle parking data:', error);
        }
      },
      async getCarParksData() {
        const apiUrl = 'http://datamall2.mytransport.sg/ltaodataservice/CarParkAvailabilityv2';
        const key = 'mcXYAV2rQXOykVpqXBXaxw=='; // Replace with your LTA API key
  
        try {
          const response = await axios.get(apiUrl, {
            headers: {
              AccountKey: key,
            },
          });
  
          const data = response.data;
          this.carParksData = data;
        } catch (error) {
          console.error('Error fetching car parks data:', error);
        }
      },
      async getBusStopsData() {
        const apiUrl = 'http://datamall2.mytransport.sg/ltaodataservice/BusStops';
        const key = 'mcXYAV2rQXOykVpqXBXaxw=='; // Replace with your LTA API key
  
        try {
          const response = await axios.get(apiUrl, {
            headers: {
              AccountKey: key,
            },
          });
  
          const data = response.data;
          this.busStopsData = data;
        } catch (error) {
          console.error('Error fetching bus stops data:', error);
        }
      },
      async getMRTData() {
        const apiUrl = 'http://datamall2.mytransport.sg/ltaodataservice/TrainServiceAlerts';
        const key = 'mcXYAV2rQXOykVpqXBXaxw=='; // Replace with your LTA API key
  
        try {
          const response = await axios.get(apiUrl, {
            headers: {
              AccountKey: key,
            },
          });
  
          const data = response.data;
          this.mrtData = data;
        } catch (error) {
          console.error('Error fetching MRT data:', error);
        }
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
        }
    },

    created() {
      // Load the Google Maps script here if not already loaded
      if (typeof google === 'undefined') {
        const script = document.createElement('script');
        script.src = 'https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY&callback=initMap';
        document.body.appendChild(script);
      } else {
        this.initMap();
      }
  
      this.getFullAddress();
      this.getBicycleParkingData();
      this.getCarParksData();
      this.getBusStopsData();
      this.getMRTData();
    },
  };
  </script>
  
  
  <style>
  /* Set your styles here */
  </style>
  