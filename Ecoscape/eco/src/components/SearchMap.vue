<template>
  <div>
    <!-- Input search box for Google Places Autocomplete -->
    <div class="search-box">
      <GMapAutocomplete
        placeholder="Search for a location"
        @place_changed="setPlace"
        v-model="searchInput"
        style="font-size: medium"
      ></GMapAutocomplete>
    </div>

    <!-- Rendering the map on the page -->
    <GMapMap :center="coords" :zoom="10" map-type-id="terrain" style="width: 100%; height: 100vh;">

      <!-- Marker to display the searched location -->
      <GMapMarker
        :key="markerDetails.id"
        :position="coords"
        :clickable="true"
        :draggable="true"
        @click="openMarker()"
      ></GMapMarker>

      <!-- InfoWindow to display the searched location details -->
      <GMapInfoWindow
        v-if="locationDetails.address !== ''"
        :closeclick="true"
        @closeclick="openMarker()"
        :opened="openedMarkerID === markerDetails.id"
        :options="{
          pixelOffset: {
            width: 10,
            height: 10
          },
          maxWidth: 320,
          maxHeight: 320
        }"
      >
        <div class="location-details">
          <h3>Location Details</h3>
          <p>Address: {{ locationDetails.address }}</p>
          <p>
            URL: <a :href="locationDetails.url" target="_blank">{{ locationDetails.url }}</a>
          </p>
        </div>
      </GMapInfoWindow>
    </GMapMap>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';

export default {
  name: 'Map',
  setup() {
    // Setting the default coordinates to GBTB
    const coords = ref({ lat: 1.284722, lng: 103.865 });
    // Marker Details
    const markerDetails = ref({
      id: 1,
      position: coords.value
    });
    const openedMarkerID = ref(null);
    const searchInput = ref('');
    // Places Details
    const locationDetails = ref({
      address: '',
      url: ''
    });

    // Get user's current location using the browser's geolocation API
    const getUserLocation = () => {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
          coords.value.lat = position.coords.latitude;
          coords.value.lng = position.coords.longitude;
        });
      }
    };

    // Set the location based on the place selected
    const setPlace = (searchInput) => {
      coords.value.lat = place.geometry.location.lat();
      coords.value.lng = place.geometry.location.lng();

      // Update the location details
      locationDetails.value.address = place.formatted_address;
      locationDetails.value.url = place.url;
    };

    // Open the marker info window
    const openMarker = (id) => {
      openedMarkerID.value = id;
    };

    onMounted(() => {
      getUserLocation();
    });

    return {
      coords,
      markerDetails,
      openedMarkerID,
      openMarker,
      getUserLocation,
      setPlace,
      locationDetails,
      searchInput
    };
  }
};
</script>

<style scoped>
.search-box {
  width: 100%;
  margin: 10px 2px;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
}
.location-details {
  color: black;
  font-size: 12px;
  font-weight: 500;
}
</style>