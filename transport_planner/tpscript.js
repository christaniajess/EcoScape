
    // Function to make an API request
    function fetchData(apiUrl, requestOptions, elementId, dataHandler) {
        fetch(apiUrl, requestOptions)
            .then(response => response.json())
            .then(data => {
                const element = document.getElementById(elementId);
                dataHandler(element, data);
            })
            .catch(error => {
                console.error('API request error:', error);
            });
    }

    // Function to handle the data for Bicycle Parking
    function handleBicycleParkingData(element, data) {
        data.forEach(parking => {
            const description = parking.description;
            const latitude = parking.latitude;
            const longitude = parking.longitude;
            const rackType = parking.rackType;
            const rackCount = parking.rackCount;
            const shelterIndicator = parking.shelterIndicator;
            const parkingInfo = document.createElement('div');
            parkingInfo.innerHTML = `
                <p><strong>Description:</strong> ${description}</p>
                <p><strong>Latitude:</strong> ${latitude}</p>
                <p><strong>Longitude:</strong> ${longitude}</p>
                <p><strong>Rack Type:</strong> ${rackType}</p>
                <p><strong>Rack Count:</strong> ${rackCount}</p>
                <p><strong>Shelter Indicator:</strong> ${shelterIndicator}</p>
            `;
            element.appendChild(parkingInfo);
        });
    }

    // Function to handle the data for Car Parks
    function handleCarParksData(element, data) {
        data.forEach(carpark => {
            const carParkID = carpark.CarParkID;
            const area = carpark.Area;
            const development = carpark.Development;
            const location = carpark.Location;
            const availableLots = carpark.AvailableLots;
            const lotType = carpark.LotType;
            const agency = carpark.Agency;
            const carParkInfo = document.createElement('div');
            carParkInfo.innerHTML = `
                <p><strong>Car Park ID:</strong> ${carParkID}</p>
                <p><strong>Area:</strong> ${area}</p>
                <p><strong>Development:</strong> ${development}</p>
                <p><strong>Location:</strong> ${location}</p>
                <p><strong>Available Lots:</strong> ${availableLots}</p>
                <p><strong>Lot Type:</strong> ${lotType}</p>
                <p><strong>Agency:</strong> ${agency}</p>
            `;
            element.appendChild(carParkInfo);
        });
    }

    // Function to handle the data for Bus Stops
    function handleBusStopsData(element, data) {
        data.forEach(busStop => {
            const busStopCode = busStop.BusStopCode;
            const roadName = busStop.RoadName;
            const description = busStop.Description;
            const latitude = busStop.Latitude;
            const longitude = busStop.Longitude;
            const busStopInfo = document.createElement('div');
            busStopInfo.innerHTML = `
                <p><strong>Bus Stop Code:</strong> ${busStopCode}</p>
                <p><strong>Road Name:</strong> ${roadName}</p>
                <p><strong>Description:</strong> ${description}</p>
                <p><strong>Latitude:</strong> ${latitude}</p>
                <p><strong>Longitude:</strong> ${longitude}</p>
            `;
            element.appendChild(busStopInfo);
        });
    }

    // Function to handle the data for MRT
    function handleMRTData(element, data) {
        data.forEach(alert => {
            const status = alert.status;
            const lineAffected = alert.lineAffected;
            const direction = alert.direction;
            const stations = alert.stations.join(', ');
            const mrtInfo = document.createElement('div');
            mrtInfo.innerHTML = `
                <p><strong>Status:</strong> ${status === '1' ? 'Normal' : 'Disrupted'}</p>
                <p><strong>Line Affected:</strong> ${lineAffected}</p>
                <p><strong>Direction:</strong> ${direction}</p>
                <p><strong>Stations Affected:</strong> ${stations}</p>
            `;
            element.appendChild(mrtInfo);
        });
    }

    // API URLs
    const apiUrlBicycleParking = 'http://datamall2.mytransport.sg/ltaodataservice/BicycleParkingv2';
    const apiUrlCarParks = 'http://datamall2.mytransport.sg/ltaodataservice/CarParkAvailabilityv2';
    const apiUrlBusStops = 'http://datamall2.mytransport.sg/ltaodataservice/BusStops';
    const apiUrlMRT = 'http://datamall2.mytransport.sg/ltaodataservice/TrainServiceAlerts';

    // Request options
    const requestOptions = {
        method: 'GET',
        headers: new Headers({
            "AccountKey": "mcXYAV2rQXOykVpqXBXaxw==",
            "Accept": "application/json"
        }),
        redirect: 'follow'
    };

    // Call the fetch functions when the page loads
    window.onload = function () {
        fetchData(apiUrlBicycleParking, requestOptions, 'bicycle', handleBicycleParkingData);
        fetchData(apiUrlCarParks, requestOptions, 'carparks', handleCarParksData);
        fetchData(apiUrlBusStops, requestOptions, 'bus', handleBusStopsData);
        fetchData(apiUrlMRT, requestOptions, 'mrt', handleMRTData);
    };

