var cw = window.rating1.clientWidth; 
function rating( stars ) {
  window.rating1.style.width = Math.round(cw * (stars / 5)) + 'px';
}

var restaurantID = localStorage.getItem("index")

axios.get('restaurant.json')
                .then(response => {
                    // this gets the data from hotel.json, which is an array
                    // console.log(response.data)
                    document.getElementById("attraction-img").setAttribute("src", response.data[restaurantID].image)
                    document.getElementById("open-web-link").setAttribute("href", response.data[restaurantID].url)
                    document.getElementById("attraction-name").innerText = response.data[restaurantID].name
                    document.getElementById("rating").innerText = "Green Score: " + response.data[restaurantID].greenScore
                    rating(response.data[restaurantID].rating)
                    document.getElementById("description").innerText = response.data[restaurantID].description

                    console.log(response.data[restaurantID].url)
                    let map;

                    async function initMap() {
                      const { Map } = await google.maps.importLibrary("maps");
                      
                      map = new Map(document.getElementById("map"), {
                        center: { lat: parseFloat(response.data[restaurantID].lat), lng: parseFloat(response.data[restaurantID].long) },
                        zoom: 15
                      });

                      const marker = new google.maps.Marker({
                        position: { lat: parseFloat(response.data[restaurantID].lat), lng: parseFloat(response.data[restaurantID].long) },
                        map: map,
                        title: response.data[restaurantID].name,
                        draggable: false,
                        animation: google.maps.Animation.DROP
                      });

                      const infoWindow = new google.maps.InfoWindow({
                        content: "<h3>" + response.data[restaurantID].name +"</h3>"
                      });
                      infoWindow.open(map, marker)
                    }

                    initMap();
                                    })
