const express = require('express');
const app = express();
const axios = require('axios');
const config = require('./config');

app.get('/data', async (req, res) => {
  try {
    await axios
      .get(
        `${config.BASE_URL}/${config.BASE_PARAMS}ca&api_key=${config.API_KEY}`
      )
      .then(response => {
        console.log('response.json', response.data);
        res.json(response.data);
      });
  } catch (error) {
    console.log(error);
  }
});

app.listen(5000, () => console.log('App listening to port 5000'));
