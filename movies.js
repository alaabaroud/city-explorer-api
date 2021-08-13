
const axios = require('axios');
let moviesObj = {};


function movieHandler(req, res) {
    const city = req.query.city

    const movieKey=process.env.MOVIE_KEY
    const URLMovie = `https://api.themoviedb.org/3/search/movie?api_key=${movieKey}&query=${city}`
    
    if(moviesObj[city]!==undefined){
        
        res.send(moviesObj[city])
        
    }else{

        axios .get(URLMovie).then(result => {
         

            let moviesArr = result.data.results

            moviesObj[city]=moviesArr
        


            res.send(moviesObject(moviesArr));
        })
        .catch(err => {
            res.send(err);
        })
    
}


const moviesObject = (moviesObj) => {

    const forMovies = [];
    moviesObj.map(element => {

    const title = element.title
    const overview = element.overview
    const vote_average = element.vote_average
    const vote_count = element.vote_count
    const poster_path = process.env.img_url+element.poster_path
    const popularity = element.popularity
    const release_date = element.release_date

    forMovies.push(new Movies(title,overview,vote_average,vote_count,poster_path,popularity,release_date));

    });
    return forMovies;
}

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


module.exports = movieHandler;