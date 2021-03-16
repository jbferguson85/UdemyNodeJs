const request = require('request');

const forecast = (lat, lon, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=654b378456810bff189ab0ce02cb9af6&query=${lon},${lat}&units=f`;
    request({url, json: true}, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service.', undefined);
        } else if (response.body.error) {
            callback('Unable to find location', undefined);
        } else {
            callback(undefined, {
                description: response.body.current.weather_descriptions[0],
                temperature: response.body.current.temperature,
                feelsLike: response.body.current.feelslike
            });
        }
    });
}

module.exports = forecast;