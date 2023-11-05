<template>
  <div>
    <button @click="fetchBusStops">Fetch Bus Stops</button>
    <ul>
      <li v-for="busStop in busStops" :key="busStop.BusStopCode">
        {{ busStop.Description }} (Code: {{ busStop.BusStopCode }})
        <br />
        Road Name: {{ busStop.RoadName }}
        <br />
        Latitude: {{ busStop.Latitude }}, Longitude: {{ busStop.Longitude }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      busStops: [],
    };
  },
  methods: {
    fetchBusStops() {
      const apiUrl = "http://datamall2.mytransport.sg/ltaodataservice/BusStops";
      const headers = new Headers();
      headers.append("AccountKey", "mcXYAV2rQXOykVpqxBXaxw==");
      headers.append("Accept", "application/json");

      const requestOptions = {
        method: "GET",
        headers: headers,
        redirect: "follow",
      };

      fetch(apiUrl, requestOptions)
        .then((response) => response.json())
        .then((data) => {
          this.busStops = data;
        })
        .catch((error) => {
          console.error("Error fetching bus stops:", error);
        });
    },
  },
};
</script>
