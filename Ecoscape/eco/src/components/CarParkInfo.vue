 <template>

        <div v-if="activeTab === 'ev'">
            <ul>
              <li v-for="carpark in carParksData" :key="carpark.CarParkID">
                <p><strong>Car Park ID:</strong> {{ carpark.CarParkID }}</p>
                <p><strong>Area:</strong> {{ carpark.Area }}</p>
              </li>
            </ul>
          </div>>

</template>

<script>

 
</script>