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
  
          <!-- Bicycle Tab Content -->
          <div v-if="activeTab === 'bicycle'">
            <div>
              <label for="origin">Origin:</label>
              <GMapAutocomplete
                placeholder="Search for a location"
                @place_changed="setPlace('bicycle')"
                v-model="bicycleOrigin"
                style="font-size: medium; width: 100%"
                class="ms-4 mb-2"
              ></GMapAutocomplete>
            </div>
            <div>
              <label for="destination">Destination:</label>
              <GMapAutocomplete
                placeholder="Search for a location"
                @place_changed="setPlace('bicycle')"
                v-model="bicycleDestination"
                style="font-size: medium; width: 100%"
                class="ms-4 mb-2"
              ></GMapAutocomplete>
            </div>
  
            <!-- Add a button to trigger fetching bicycle directions -->
            <button @click="getBicycleDirections" class="ms-4 mt-2 btn btn-dark btn-sm">Get Routes</button>
          </div>
  
          <!-- Other tab contents go here -->
          <!-- EV Information -->
          <!-- <div v-if="activeTab === 'ev'">
            <ul>
              <li v-for="carpark in carParksData" :key="carpark.CarParkID">
                <p><strong>Car Park ID:</strong> {{ carpark.CarParkID }}</p>
                <p><strong>Area:</strong> {{ carpark.Area }}</p>
              </li>
            </ul>
          </div> -->
  
          <!-- Bus Information -->
          <!-- <div v-if="activeTab === 'bus'">
            <ul v-if="filteredBusStops.length > 0">
              <li v-for="busStop in filteredBusStops" :key="busStop.BusStopCode">
                <p><strong>Bus Stop Code:</strong> {{ busStop.BusStopCode }}</p>
                <p><strong>Road Name:</strong> {{ busStop.RoadName }}</p>
              </li>
            </ul>
          </div> -->
  
          <!-- MRT Information -->
          <!-- <div v-if="activeTab === 'mrt'">
            <ul v-if="mrtData.length > 0">
              <li v-for="alert in mrtData" :key="alert.ID">
                <p><strong>Status:</strong> {{ alert.status === '1' ? 'Normal' : 'Disrupted' }}</p>
                <p><strong>Line Affected:</strong> {{ alert.lineAffected }}</p>
              </li>
            </ul>
          </div> -->
  
        </div>
        <div class="col-lg-8 col-md-12 map ps-5 mb-3">
          <!-- Include your GoogleMap component here -->
          <TransportGoogleMap />
        </div>
      </div>
    </div>
  </template>
  
  <script> 
  setup() {
    const activeTab = ref('bicycle');
    const bicycleOrigin = ref('');
    const bicycleDestination = ref('');
    const mode = 'bicycle'; 
    const apiKey = 'AIzaSyCifdU9cLDQk5HQX_DKe5A-niK-iCj4q-c';

    // Function to set the place based on the tab (e.g., 'bicycle', 'bus', etc.)
    const setPlace = (tab) => (place) => {
      if (tab === 'bicycle') {
        bicycleOrigin.value = place.formatted_address;
      }
      // You can add similar logic for other tabs if needed.
    };
  }
    return {
      activeTab,
      bicycleOrigin,
      bicycleDestination,
      getBicycleDirections,
      setPlace,
    };

</script>