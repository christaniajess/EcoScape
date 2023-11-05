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

  </script>
  