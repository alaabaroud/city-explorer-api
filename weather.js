  
const axios = require('axios');
const weather = {};
weather.getWeatherHandler=function(req, res) {

    const weatherKey =process.env.WEATHER_API_KEY
    const cityName = req.query.cityName
    const lat = req.query.lat
    const lon = req.query.lon
    const URL = `https://api.weatherbit.io/v2.0/forecast/daily?city=${cityName}&lat=${lat}&lon=${lon}&key=${weatherKey}`;


    axios.get(URL)
    .then(result => {  
    let weatherArray = result.data.data
    res.send(wetherObj(weatherArray));
    })
    .catch(err => {
    res.send(err);
    })
    
}

const wetherObj = (weathermap) => {
const forcast = [];
weathermap.map(element => {
  const description = `Low  ${element.low_temp} High  ${element.max_temp} with ${element.weather.description}`;
  const date = element.datetime;
   forcast.push(new Forcast(description, date));
    });
    return forcast;
    };

    class Forcast {
    constructor(description, date) {
        this.date = date;
        this.description = description;
    
        }
    }
module.exports = weather;