require('dotenv').config();
const express = require('express');
const app = express();
const axios = require('axios');
const cors = require('cors');
const path = require('path');

app.use(cors());

app.get('/parks', async (req, res) => {
  const state = req.query.state;
  const url =
    `https://developer.nps.gov/api/v1/parks?stateCode=${state}&api_key=` +
    process.env.NPS_API_KEY;

  try {
    await axios.get(url).then((response) => {
      res.json(response.data);
    });
  } catch (error) {
    console.log(error);
  }
});

app.get('/map', async (req, res) => {
  const lng = req.query.lng;
  const lat = req.query.lat;
  const url =
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},${lat}.json?access_token=` +
    process.env.REACT_APP_MAPBOX_API_TOKEN;

  try {
    await axios.get(url).then((response) => {
      res.json({
        data: response.data,
      });
    });
  } catch (error) {
    console.log(error);
  }
});

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
