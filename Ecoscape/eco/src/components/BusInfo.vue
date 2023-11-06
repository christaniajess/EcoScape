<template>
    <GMapMap
      :center="center"
      :zoom="13.3"
      map-type-id="roadmap"
      style="width: 100%; height: 700px"
    >
      <!-- Add a marker and info window for each bus stop -->
      <GMapMarker v-for="busStop in busStops.value" :key="busStop.BusStopCode"
        :position="{ lat: parseFloat(busStop.Latitude), lng: parseFloat(busStop.Longitude)}" 
        @click="showInfoWindow(busStop.BusStopCode)"  
      >
        <!-- Define the info window content -->
        <GMapInfoWindow :position="{ lat: parseFloat(busStop.Latitude), lng: parseFloat(busStop.Longitude) }" :opened="infoWindowOpen === busStop.BusStopCode">
          <!-- Content for the info window -->
          <div>
            <h3>{{ busStop.Description }}</h3>
            <p>Bus Stop Code: {{ busStop.BusStopCode }}</p>
            <p>Bus Stop Road Name: {{ busStop.RoadName }}</p>

          </div>
        </GMapInfoWindow>
      </GMapMarker>
    </GMapMap>
  </template>
  
  <script>
  import axios from "axios";
  export default {
    name: 'GoogleMap',
    props: {
      lat: {
        type: Number,
        required: true,
      },
      long: {
        type: Number,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
    },
    data() {
      return {
        center: { lat: 1.350270, lng: 103.821784 },
        busStops: []
      };
    },
    mounted() {
      this.fetchBusStopsData();
    },
    methods: {
      async fetchBusStopsData() {
        try {
          const response = await axios.get("/public/response.json");
          const busStopsData = response.data;
          this.busStops = busStopsData.value;
        } catch(error) {
          console.error("Error fetching data:", error);
        }
      },
      showInfoWindow(busStopCode) {
        this.infoWindowOpen = busStopCode; // Open the info window for the clicked bus stop
      },
    },
  };
  </script>
  
  <template>
    <div>
      <GMapMap
        :center="center"
        :zoom="13.3"
        map-type-id="roadmap"
        style="width: 70%; height: 700px; float: left;"
      >
        <!-- Add a marker for each bus stop -->
        <GMapMarker
          v-for="busStop in busStops.value"
          :key="busStop.BusStopCode"
          :position="{ lat: parseFloat(busStop.Latitude), lng: parseFloat(busStop.Longitude) }"
          @click="showInfoWindow(busStop)"
        />
      </GMapMap>
  
      <div class="info-window" v-if="selectedBusStop">
        <h3>{{ selectedBusStop.Description }}</h3>
        <p>Bus Stop Code: {{ selectedBusStop.BusStopCode }}</p>
        <p>Bus Stop Road Name: {{ busStop.RoadName }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    name: "GoogleMap",
    data() {
      return {
        center: { lat: 1.35027, lng: 103.821784 },
        busStops: [],
        selectedBusStop: null,
      };
    },
    mounted() {
      this.fetchBusStopsData();
    },
    methods: {
      async fetchBusStopsData() {
        try {
          const response = await axios.get("/public/response.json");
          this.busStops = response.data.value;
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      },
      showInfoWindow(busStop) {
        this.selectedBusStop = busStop;
      },
    },
  };
  </script>
  
  <style>
    .info-window {
      width: 30%;
      padding: 10px;
      border: 1px solid #ccc;
      background-color: #fff;
      float: left;
    }
  </style>
  