<template>
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-4 col-md-12">
          <div id="tabs-container">
            <!-- Bicycle Tab -->
            <input
              id="tab1"
              type="radio"
              checked
              v-model="activeTab"
              value="bicycle"
            />
            <label for="tab1">Bicycle</label>
  
            <div>
            <h2>Bicycle Information</h2>

            <!-- Input fields for latitude and longitude -->
            <div class="values">
              <label for="latitude">Latitude:</label>
              <input
                type="text"
                id="latitude"
                v-model="latitude"
                placeholder="e.g 1.364897"
              />
            </div>
            <div class="values">
              <label for="longitude">Longitude:</label>
              <input
                type="text"
                id="longitude"
                v-model="longitude"
                placeholder="e.g 103.766094"
              />
            </div>
            <button @click="getBicycleParkingData">Get Bicycle Data</button>

            <!-- Display bicycle data below -->
            <div>
              <h3>Bicycle Data:</h3>
              <ul>
                <li v-for="item in bicycleData" :key="item.Description">
                  {{ item.Description }}:
                  Latitude: {{ item.Latitude }}, Longitude: {{ item.Longitude }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
  
</script>

<style scoped>
.values {
    width: 100%; 
    padding: 3px; 
}
</style>