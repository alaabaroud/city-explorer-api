// 'use strict';
const  express =  require ('express');
const server = express();
const  weatherData =  require ('./data/weather.json');
const cors = require('cors');
server.use(cors()); 
require('dotenv').config();

const PORT =process.env.PORT

// http://localhost:3001/weather


server.get('/weather',WeatherFunction);
server.use('*', (req, res) => res.status(404).send('page not found'));


 function WeatherFunction (req,res){
  let searchQuery = req.query.searchQuery;
         const city= weatherData.find(city=> city.city_name.toLocaleLowerCase()=== searchQuery.toLocaleLowerCase());
if (city != undefined){
const arr = city.data.map(day => new update(day));
res.status(200).send(arr);

}
else {
errorHandler(res);
}
 }
 function errorHandler(err) {
  response.status(500).send('err');
}
   




function update(day) {
  this.date = day.valid_date
  this.description = day.weather.description
}



    server.listen(PORT,()=>{
      console.log(`I am listening on port ${PORT}`);
    })