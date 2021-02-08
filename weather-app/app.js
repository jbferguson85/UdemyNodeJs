const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=654b378456810bff189ab0ce02cb9af6&query=37.8267,-122.4233';

request({url}, (error, response) => {
    const data = JSON.parse(response.body);
    console.log(data.current);
});