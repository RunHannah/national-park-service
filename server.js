const express = require('express');
const app = express();
const axios = require('axios');
const config = require('./config');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/npsBlog';
const client = new MongoClient(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

client.connect((err, client) => {
  if (err) throw err;
  const db = client.db('npsBlog');
  const collection = db.collection('posts');
  app.locals.collection = collection;
});

app.use(cors());

app.get('/', async (req, res) => {
  try {
    const collection = req.app.locals.collection;
    collection
      .find({})
      .toArray()
      .then(response => res.json(response));
  } catch (error) {
    console.log(error);
  }
});

app.get('/parks', async (req, res) => {
  try {
    await axios
      .get(`${config.BASE_URL}/${config.BASE_PARAMS}&api_key=${config.API_KEY}`)
      .then(response => {
        res.json(response.data);
      });
  } catch (error) {
    console.log(error);
  }
});

app.listen(5000, () => console.log('App listening to port 5000'));
