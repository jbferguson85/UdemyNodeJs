const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=654b378456810bff189ab0ce02cb9af6&query=37.8267,-122.4233';

const mapboxUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Lost%20Angeles.json?access_token=pk.eyJ1IjoiamJmZXJndXNvbjg1IiwiYSI6ImNra3d2YXZ4bDI5cjUydnBheG4zZjAzdWYifQ.1UXYEg0WClblYfQCcHYnYA&limit=1';

// request({url, json: true}, (error, response) => {
//     //console.log(response.body.current);
//     console.log(`${response.body.current.weather_descriptions[0]}. It is currently ${response.body.current.temperature} degrees out. It feels like ${response.body.current.feelslike} degrees out.`);
// });

request({url: mapboxUrl, json: true}, (error, response) => {
    const place = response.body.features[0];
    console.log(place);
    console.log(`You searched for ${place.place_name}. Latitude: ${place.center[1]} Longitude: ${place.center[0]}`);
});


// Challenge

/*

1. Make new request to URL in Postman
2. Auto parse into JSON
3. Print the lat and lon to the console.


*/