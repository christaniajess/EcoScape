<template>
    <GMapMap
      :center="center"
      :zoom="16"
      map-type-id="roadmap"
      style="width: 100%; height: 700px"
    >
      <!-- Add a marker -->
      <GMapMarker 
      :position="center" 
      :clickable="true"
      />

    </GMapMap>
  </template>
  
  <script>
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
        center: { lat: this.lat, lng: this.long },
      };
    },
  };
  </script>