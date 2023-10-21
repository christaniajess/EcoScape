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



axios.get('destination.json')
                .then(response => {
                    // this gets the data from destination.json, which is an array
                    console.log(response.data)
                    console.log(response.data[0].image)
                    document.getElementById("attraction-img").setAttribute("src", response.data[0].image)
                    document.getElementById("open-web-link").setAttribute("href", response.data[0].url)
                    document.getElementById("attraction-name").innerText = response.data[0].name
                    document.getElementById("rating").innerHTML = "Green Score: " + response.data[0].greenScore
                    
                    document.getElementById("description").innerText = response.data[0].description
                })