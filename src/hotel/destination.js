

var cw = window.rating1.clientWidth; 
function rating( stars ) {
  window.rating1.style.width = Math.round(cw * (stars / 5)) + 'px';
}

axios.get('destination.json')
                .then(response => {
                    // this gets the data from destination.json, which is an array
                    console.log(response.data)
                    document.getElementById("attraction-img").setAttribute("src", response.data[0].image)
                    document.getElementById("open-web-link").setAttribute("href", response.data[0].url)
                    document.getElementById("attraction-name").innerText = response.data[0].name
                    document.getElementById("rating").innerHTML = "Green Score: " + response.data[0].greenScore
                    rating(response.data[0].rating)
                    document.getElementById("description").innerText = response.data[0].description

                    let map;

                    async function initMap() {
                      const { Map } = await google.maps.importLibrary("maps");

                      map = new Map(document.getElementById("map"), {
                        center: { lat: parseFloat(response.data[0].lat), lng: parseFloat(response.data[0].long) },
                        zoom: 15
                      });

                      const marker = new google.maps.Marker({
                        position: { lat: parseFloat(response.data[0].lat), lng: parseFloat(response.data[0].long) },
                        map: map,
                        title: response.data[0].name,
                        draggable: false,
                        animation: google.maps.Animation.DROP
                      });

                      const infoWindow = new google.maps.InfoWindow({
                        content: "<h3>" + response.data[0].name +"</h3>"
                      });
                      infoWindow.open(map, marker)
                    }

                    initMap();
                                    })

