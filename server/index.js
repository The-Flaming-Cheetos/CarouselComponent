require('newrelic');
const express = require('express');
const app = express();

const path = require("path");
var faker = require('faker');
const axios = require('axios');


app.use(express.static(path.join(__dirname, '../client/dist')))

app.use(express.urlencoded({extended:false}));
app.use(express.json());


const db1path = "54.193.44.21:3000";
const db2path = "0.0.0.0";



var proxy = require('express-http-proxy');



app.get('/loaderio-424852de8eb3ce0e4b79874174b19cda', (req, res)=>{
  console.log('made it');
  res.sendFile(path.join(__dirname, 'loader.txt'));
});

app.use('/api/trips/CarouselComponent/:id/reviews', proxy(db1path, {proxyReqPathResolver: function(req) {
  var id = Math.floor(Math.random() * 2000000);
  console.log('resolve', req.url+`reviews/${id}`);
  return req.url + `reviews/${id}`;
}}));


app.use('/api/trips/CarouselComponent/:id/photos', proxy(db1path, {proxyReqPathResolver: function(req) {
  var id = Math.floor(Math.random() * 2000000);
  console.log('resolve', req.url+`reviews/${id}`);
  return req.url + `photos/${id}`;
}}));

/*app.get('/api/trips/CarouselComponent/:id/reviews',(req,res,next) => {
  var id = Math.floor(Math.random() * 4000000);
  //app.use(`/${id}`,createProxyMiddleware({ target: db1path, changeOrigin: true }));
});*/


//app.get('/api/trips/CarouselComponent/:id/photos',(req,res,next) => {
//});


const PORT = process.env.port || 3000;
app.listen(PORT, () => {
  console.log('Listening on PORT', PORT);
})
module.exports = app;
