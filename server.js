// 'use strict';
const  express =  require ('express');
const server = express();
const  weatherData =  require ('./data/weather.json');
const cors = require('cors');
server.use(cors()); 
require('dotenv').config();
const PORT =process.env.PORT
// http://localhost:3001/weather
server.get('/weather',(req,res) => {
    let wheatherUbdate=weatherData.find(item=>{
        return [item.searchQuery,item.lat,item.long];
    })
    // console.log(wheatherUbdate);
    res.send(wheatherUbdate);
  })
  server.get('*', (req, res)=>{
      res.status(404).send('page not found');
  })
    server.listen(PORT,()=>{
      console.log(`I am listening on port ${PORT}`);
    })