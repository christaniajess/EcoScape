<!-- NOT USING ANYMORE  -->

<template>
  <div class="container-fluid tp-map">
    <div class="row">
      <div class="col-lg-4 col-md-12">
        <div id="tabs-container">
          <!-- Bicycle Tab -->
          <input
            id="tab1"
            type="radio"
            name="tabs"
            checked
            v-model="activeTab"
            value="bicycle"
          />
          <label for="tab1">Bicycle</label>

          <!-- EV Tab -->
          <input id="tab2" type="radio" name="tabs" v-model="activeTab" value="ev" />
          <label for="tab2">EV</label>

          <!-- Bus Tab -->
          <input id="tab3" type="radio" name="tabs" v-model="activeTab" value="bus" />
          <label for="tab3">Bus</label>

          <!-- MRT Tab -->
          <input id="tab4" type="radio" name="tabs" v-model="activeTab" value="mrt" />
          <label for="tab4">MRT</label>
        </div>
<!-- 
        <form>
          <div class="form-group">
            <span class="ps-4 fw-bold">Enter Your Location</span>
            <br>
            <input type="text" class="form-control ms-4" v-model="address" placeholder="E.g. Gardens By the Bay">
            <br>
            <button type="button" @click="getFullAddress('addr')" class="btn btn-dark text-white ms-4">Get Full Address!</button>
            <button type="button" @click="getPostCode('postcode')" class="btn btn-dark text-white m-2">Get Postal Code!</button>

            <input type="hidden" id="lat" name="lat" :value="lat" />
            <input type="hidden" id="lng" name="lng" :value="lng" />
          </div>
        </form> -->

        <!-- Bicycle Information -->
        <div v-if="activeTab === 'bicycle'">
          <ul>
            <li v-for="parking in bicycleParkingData" :key="parking.ID">
              <p><strong>Description:</strong> {{ parking.Description }}</p>
              <p><strong>Latitude:</strong> {{ parking.Latitude }}</p>
              <p><strong>Longitude:</strong> {{ parking.Longitude }}</p>
            </li>
          </ul>
        </div>

        <!-- EV Information -->
        <div v-if="activeTab === 'ev'">
          <ul>
            <li v-for="carpark in carParksData" :key="carpark.CarParkID">
              <p><strong>Car Park ID:</strong> {{ carpark.CarParkID }}</p>
              <p><strong>Area:</strong> {{ carpark.Area }}</p>
            </li>
          </ul>
        </div>

        <!-- Bus Information -->
        <div v-if="activeTab === 'bus'">
          <ul v-if="filteredBusStops.length > 0">
            <li v-for="busStop in filteredBusStops" :key="busStop.BusStopCode">
              <p><strong>Bus Stop Code:</strong> {{ busStop.BusStopCode }}</p>
              <p><strong>Road Name:</strong> {{ busStop.RoadName }}</p>
            </li>
          </ul>
        </div>

        <!-- MRT Information -->
        <div v-if="activeTab === 'mrt'">
          <ul v-if="mrtData.length > 0">
            <li v-for="alert in mrtData" :key="alert.ID">
              <p><strong>Status:</strong> {{ alert.status === '1' ? 'Normal' : 'Disrupted' }}</p>
              <p><strong>Line Affected:</strong> {{ alert.lineAffected }}</p>
            </li>
          </ul>
        </div>

        <p id="display" class="lead text-center">{{ displayInfo }}</p>
      </div>
      <div class="col-lg-8 col-md-12 map ps-5 mb-3">
        <!-- Use a container to limit the map width -->

      </div>
    </div>
  </div>
</template>

<script>

 import axios from 'axios';

 export default {
    props: {
    index: {
      type: Number,
      required: true,
    },
  },
    data() {
      return {
        address: 'Singapore Management University',
        mapCenter: "1.2832854986190796,103.86353302001953",
        markerPosition: "1.2832854986190796,103.86353302001953",
        searchText: "",
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
  methods: {
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

                this.bicycleParkingData = response.data;
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
      

    },
    created() {
    // Initialize your component when it's created
    this.getBicycleParkingData();
    this.getCarParksData();
    this.getBusStopsData();
    this.getMRTData();
  }
}
 };
</script>