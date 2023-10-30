var cw = window.rating1.clientWidth; 
function rating( stars ) {
  window.rating1.style.width = Math.round(cw * (stars / 5)) + 'px';
}

var attractionID = localStorage.getItem("index")

axios.get('destination.json')
                .then(response => {
                    // this gets the data from hotel.json, which is an array
                    // console.log(response.data)
                    document.getElementById("attraction-img").setAttribute("src", response.data[attractionID].image)
                    document.getElementById("open-web-link").setAttribute("href", response.data[attractionID].url)
                    document.getElementById("attraction-name").innerText = response.data[attractionID].name
                    document.getElementById("rating").innerText = "Green Score: " + response.data[attractionID].greenScore
                    rating(response.data[attractionID].rating)
                    document.getElementById("description").innerText = response.data[attractionID].description

                    console.log(response.data[attractionID].url)
                    let map;

                    async function initMap() {
                      const { Map } = await google.maps.importLibrary("maps");
                      
                      map = new Map(document.getElementById("map"), {
                        center: { lat: parseFloat(response.data[attractionID].lat), lng: parseFloat(response.data[attractionID].long) },
                        zoom: 15
                      });

                      const marker = new google.maps.Marker({
                        position: { lat: parseFloat(response.data[attractionID].lat), lng: parseFloat(response.data[attractionID].long) },
                        map: map,
                        title: response.data[attractionID].name,
                        draggable: false,
                        animation: google.maps.Animation.DROP
                      });

                      const infoWindow = new google.maps.InfoWindow({
                        content: "<h3>" + response.data[attractionID].name +"</h3>"
                      });
                      infoWindow.open(map, marker)
                    }

                    initMap();
                                    })
