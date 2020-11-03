import axios from "axios"

export async function handler(event, context) {
    const querystring = event.queryStringParameters;
    const state = querystring.state || 'CA';
    
    const { NPS_API_KEY } = process.env;
    const url =
    `https://developer.nps.gov/api/v1/parks?stateCode=${state}&api_key=` + NPS_API_KEY;

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