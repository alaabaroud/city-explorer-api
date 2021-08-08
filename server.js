// 'use strict';
const  express =  require ('express');
const server = express();
const cors = require('cors');

require('dotenv').config();
const axios = require('axios')
const PORT =process.env.PORT
server.use(cors()); 
const movies = require('./movies');
const weather = require('./weather');
// http://localhost:3001/test
server.get('/test',(req,res) => {
  res.send('test route');
});
server.get('/getWeather',weather.WeatherHandler); 
// function getWeatherHandler(req, res) {
//   const weatherKey =process.env.WEATHER_API_KEY
//   const cityName = req.query.cityName
//   const lon = req.query.lon
//   const lat = req.query.lat
//   const URL = `https://api.weatherbit.io/v2.0/forecast/daily?city=${cityName}&lat=${lat}&lon=${lon}&key=${weatherKey}`;

  
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





// // http://localhost:3001/getmovie?city=${city}
server.get('/movie',movies); 



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




// // http://localhost:3001/
// // server.get('*',(req,res) => {
// //   res.status(404).send('route not found');
// // });
// // // http://localhost:3000/weather


// // server.get('/weather',WeatherFunction);
// // server.use('*', (req, res) => res.status(404).send('page not found'));


// //  function WeatherFunction (req,res){
// //   let searchQuery = req.query.searchQuery;
// //          const city= weatherData.find(city=> city.city_name.toLocaleLowerCase()=== searchQuery.toLocaleLowerCase());
// // if (city != undefined){
// // const arr = city.data.map(day => new update(day));
// // res.status(200).send(arr);

// // }
// // else {
// // errorHandler(res);
// // }
// //  }
// //  function errorHandler(err) {
// //   response.status(500).send('err');
// // }
   



// // function update(day) {
// //   this.date = day.valid_date
// //   this.description = day.weather.description
// // }

// // //https://api.themoviedb.org/3/movie/550?api_key=4b557fce5a80bc4685790b5ceb6c8804

server.get('*', (req, res) => {
  res.send('not found');
})

server.listen(PORT, () => console.log(`listening on ${PORT}`))