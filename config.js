require('dotenv').config();

module.exports = {
  API_KEY: process.env.API_KEY,
  BASE_URL: 'https://developer.nps.gov/api/v1',
  BASE_PARAMS: 'parks?parkCode='
};
