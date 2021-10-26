const request = require('request')

const forecast = (lat,lon,callback) => {
    coords = '' + lat + ',' + lon;

    url = "http://api.weatherstack.com/current?access_key=7c135dc6e49947f7abf35b7749bb5410&query=40.7831,-73.9712" + coords

    request({url: url, json: true},(err,res) => {
        if(err) {
            callback('Unable to connect',undefined);
        }
        else if(res.body.error) {
            callback('Unable to find location',undefined)
        }
        else {
            callback(undefined,res.body.current.weather_descriptions[0])
        }
    })
}

module.exports = forecast