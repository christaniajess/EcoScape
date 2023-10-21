let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: 1.3448, lng: 103.8224 },
    zoom: 15
  });

  const marker = new google.maps.Marker({
    position: { lat: 1.3448, lng: 103.8224 },
    map: map,
    label: "A",
    title: "Random Title",
    draggable: false,
    animation: google.maps.Animation.DROP
  });

  const infoWindow = new google.maps.InfoWindow({
    content: "<p>This is a window info</p>"
  });
  infoWindow.open(map, marker)
}

initMap();

const app = Vue.createApp ({
  data() {
    return {
      attraction_detail: [
        {
          hotelname: "",
          lat: "",
          long: "",
          img: "",
          description: "",

        }
      ]
    }
  },
  methods: {
    
  }
})


