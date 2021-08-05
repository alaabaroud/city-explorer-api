// 'use strict';
const  express =  require ('express');
const server = express();
const  weatherData =  require ('./data/weather.json');
const cors = require('cors');
server.use(cors()); 
require('dotenv').config();
const axios = require('axios')
const PORT =process.env.PORT

// http://localhost:3000/test
server.get('/test',(req,res) => {
  res.send('test route');
});




// http://localhost:3000/getmovie?city=${city}
server.get('/getmovie',getMovieHandler); 



function getMovieHandler(req, res) {

  const city = req.query.city
  const mKey= process.env.MOVIE_API_KEY
  const mURL = `https://api.themoviedb.org/3/movie/550?api_key=${mKey}&query=${city}`;

  axios
  .get(mURL)
  .then(result=> {
    let mArr = result.data.results
      
      res.send(Movie(mArr));
    
    console.log(mArr);
  })
  .catch(err => {
    res.send(err);
  })
}


const Movie = (mobject) =>{
  const MoviesObj = [];
  mobject.map(element => {

    const title = element.title
    const overview = element.overview
    const vote_average = element.vote_average
    const vote_count = element.vote_count
    const poster_path = process.env.img_url+element.poster_path
    const popularity = element.popularity
    const release_date = element.release_date
    MoviesObj.push(new Movies(title,overview,vote_average,vote_count,poster_path,popularity,release_date));

    console.log(MoviesObj);
});
return MoviesObj;

}

class Movies {
    constructor(title,overview,vote_average,vote_count,poster_path,popularity,release_date) {
    this.title = title
    this.overview = overview
    this.vote_average = vote_average
    this.vote_count = vote_count
    this.poster_path = poster_path
    this.popularity = popularity
    this.release_date = release_date
    }
}




// http://localhost:3000/
// server.get('*',(req,res) => {
//   res.status(404).send('route not found');
// });
// // http://localhost:3000/weather


// server.get('/weather',WeatherFunction);
// server.use('*', (req, res) => res.status(404).send('page not found'));


//  function WeatherFunction (req,res){
//   let searchQuery = req.query.searchQuery;
//          const city= weatherData.find(city=> city.city_name.toLocaleLowerCase()=== searchQuery.toLocaleLowerCase());
// if (city != undefined){
// const arr = city.data.map(day => new update(day));
// res.status(200).send(arr);

// }
// else {
// errorHandler(res);
// }
//  }
//  function errorHandler(err) {
//   response.status(500).send('err');
// }
   



// function update(day) {
//   this.date = day.valid_date
//   this.description = day.weather.description
// }

// //https://api.themoviedb.org/3/movie/550?api_key=4b557fce5a80bc4685790b5ceb6c8804



    server.listen(PORT,()=>{
      console.log(`I am listening on port ${PORT}`);
    })