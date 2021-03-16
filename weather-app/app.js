const request = require('request');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const url = 'http://api.weatherstack.com/current?access_key=654b378456810bff189ab0ce02cb9af6&query=37.8267,-122.4233';
//const url = 'wrong';
const mapboxUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiamJmZXJndXNvbjg1IiwiYSI6ImNra3d2YXZ4bDI5cjUydnBheG4zZjAzdWYifQ.1UXYEg0WClblYfQCcHYnYA&limit=1';
//const mapboxUrl = 'wrong';
// request({url, json: true}, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to weather service.');
//     } else if (response.body.error) {
//         console.log('Unable to find location');
//     }
//     else {
//         console.log(`${response.body.current.weather_descriptions[0]}. It is currently ${response.body.current.temperature} degrees out. It feels like ${response.body.current.feelslike} degrees out.`);
//     }
// });

// geocode('Omaha', (error, data) => {
//     console.log('Error', error);
//     console.log('Data', data);
// });


//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

forecast(-75.7088, 44.1545, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
});