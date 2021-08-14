'use strict'

require('dotenv').config();
const express = require('express');
const server = express();
// const weatherData = require('./data/weather.json')
const cors = require('cors');
const PORT = process.env.PORT
const axios = require('axios')
const movies = require('./movies');
const weather = require('./weather');
server.use(cors())

// http://localhost:3001/test
// server.get('/test',(req,res) => {
//   res.send('test route');
// });

//http://localhost:3000/getWeather?lat=31.95&lon=35.91&cityName=amman
server.get('/getWeather', weather.getWeatherHandler)



// http://localhost:3000/movies?city=Amman
server.get('/movies', movies)


  
// }
// axios.get(URL)
// .then(result => {
//   let weatherArr =  result.data.data
//   res.send(weatherObject (weatherArr));
// })
// .catch(err => {
//   res.send(err);
// })


// const weatherObject = (mapp) => {
//   const fcast = [];
//   mapp.map(element=>{
// const description = `Low of ${element.low_temp} ,High of ${element.max_temp} with ${element.weather.description}`;
// const date = element.datetime;
// fcast.push(new Forcast(description, date))
// })
// return fcast;
// }

// class Forcast {
//   constructor(description, date) {
//       this.date = date;
//       this.description = description;

//   }
// }







// function getMovieHandler(req, res) {

//   const city = req.query.city
//   const mKey= process.env.MOVIE_API_KEY
//   const mURL = `https://api.themoviedb.org/3/movie/550?api_key=${mKey}&query=${city}`;

//   axios
//   .get(mURL)
//   .then(result=> {
//     let mArr = result.data.results
      
//       res.send(Movie(mArr));
    
//     console.log(mArr);
//   })
//   .catch(err => {
//     res.send(err);
//   })
// }


// const Movie = (mobject) =>{
//   const MoviesObj = [];
//   mobject.map(element => {

//     const title = element.title
//     const overview = element.overview
//     const vote_average = element.vote_average
//     const vote_count = element.vote_count
//     const poster_path = process.env.img_url+element.poster_path
//     const popularity = element.popularity
//     const release_date = element.release_date
//     MoviesObj.push(new Movies(title,overview,vote_average,vote_count,poster_path,popularity,release_date));

//     console.log(MoviesObj);
// });
// return MoviesObj;

// }

// class Movies {
//     constructor(title,overview,vote_average,vote_count,poster_path,popularity,release_date) {
//     this.title = title
//     this.overview = overview
//     this.vote_average = vote_average
//     this.vote_count = vote_count
//     this.poster_path = poster_path
//     this.popularity = popularity
//     this.release_date = release_date
//     }
// }





server.get('*', (req, res) => {
  res.send('not found');
  
})

server.listen(PORT, () => console.log(`listening on ${PORT}`))