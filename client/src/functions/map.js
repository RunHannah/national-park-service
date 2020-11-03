import axios from "axios"

export async function handler(event, context) {
    const querystring = event.queryStringParameters;
    const lng = querystring.lng || '-119.7462';
    const lat = querystring.lat || '36.17';

    const { MAPBOX_API_TOKEN } = process.env;
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},${lat}.json?access_token=` + MAPBOX_API_TOKEN; 

    try {
        const response = await axios.get(url, { headers: { Accept: "application/json" }});
        const data = response.data
        return {
            statusCode: 200,
            body: JSON.stringify({ results: data })
        }
    } catch (err) {
        console.log('ERROR', err);
         return {
            statusCode: 500,
            body: JSON.stringify({ msg: err.message })
        }
    }
}