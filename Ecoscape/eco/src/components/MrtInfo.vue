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