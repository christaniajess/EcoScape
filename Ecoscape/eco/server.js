// const express = require('express');
// const app = express();
// const apiCall = require('@/components/apiCall.js'); // Import the apiCall module

// // Define an endpoint to fetch bus stops
// app.get('/api/bus-stops', (req, res) => {
//   apiCall.fetchBusStops()
//     .then((data) => {
//       res.json(data);
//     })
//     .catch((error) => {
//       res.status(500).json({ error: 'Failed to fetch bus stops' });
//     });
// });

// // Start the server
// const port = process.env.PORT || 3000;
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
// ^ AN ATTEMPT TO USE NODE.JS TO CALL EXTERNAL API 