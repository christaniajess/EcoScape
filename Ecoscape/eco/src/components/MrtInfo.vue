<template>
    <GMapMap
      :center="center"
      :zoom="13.3"
      map-type-id="roadmap"
      style="width: 100%; height: 700px"
    >
      <!-- Add a marker -->
      <GMapMarker v-for="MrtStation in MrtStations.value" :key="MrtStation['Station Name']"
      :position="{ lat: parseFloat(MrtStation.Latitude), lng: parseFloat(MrtStation.Longitude)}" 
/>


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
        MrtStations: []
      };
    },
    mounted() {
      this.fetchMrtStationsData();
    },
    methods: {
      async fetchMrtStationsData() {
        try {
          const response = await axios.get("/public/mrt_stations.json");
          const MrtStationsData = response.data
          console.log(MrtStationsData.value.length)
          this.MrtStations = MrtStationsData;
        } catch(error) {
          console.error("Error fetching data:", error);
        }
      }
    }
  };
  </script>
  