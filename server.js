const express = require('express');
const app = express();
const axios = require('axios');
const config = require('./config');
const cors = require('cors');

app.use(cors());

app.get('/', async (req, res) => {
  const { state } = req.query;
  console.log('state', state);

  try {
    await axios
      .get(
        `${config.BASE_URL}/${config.BASE_PARAMS}${state}&api_key=${config.API_KEY}`
      )
      .then(response => {
        res.json(response.data);
      });
  } catch (error) {
    console.log(error);
  }
});

app.listen(5000, () => console.log('App listening to port 5000'));
