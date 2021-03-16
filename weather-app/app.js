const request = require('request');

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

request({ url: mapboxUrl, json: true }, (error, response) => {
    if (error) {
        console.log('Unable to connect to geolocator service.');
    } else if (response.body.features.length === 0) {
        console.log('Invalid search term.');
    } else {
        const place = response.body.features[0];
        console.log(`You searched for ${place.place_name}. Latitude: ${place.center[1]} Longitude: ${place.center[0]}`);
    }
});