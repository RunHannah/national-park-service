require('dotenv').config();
const express = require('express');
const app = express();
const axios = require('axios');

const apiKey = process.env.API_KEY;

axios
  .get(`https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=${apiKey}`)
  .then(results => {
    console.log(results.data);
  });

app.listen(3000, () => console.log('App listening to port 3000'));
