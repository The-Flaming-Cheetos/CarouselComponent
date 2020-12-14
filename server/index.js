require('newrelic');
const express = require('express');
const app = express();

const path = require("path");
const db = require("../database/Primary/index.js");
var faker = require('faker');

app.use(express.static(path.join(__dirname, '../client/dist')))

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.get('/api/trips/CarouselComponent/:id/reviews',(req,res,next) => {
  var id = Math.floor(Math.random() * 10000000);
  db.query(`select reviews from attraction where attractionId = ${id};`,(err, results, fields) => {
    if(err) {
      throw err;
    } else {
      var str = results.rows[0].reviews;
      str = str.replace('total', '"total"');
      str = str.replace('average', '"average"');
      console.log(JSON.parse(str));
      res.send(JSON.parse(str));
    }
  })
});

app.get('/api/trips/CarouselComponent/:id/photos',(req,res,next) => {
  var id = Math.floor(Math.random() * 10000000);
  db.query(`select images from attraction where attractionId = ${id};`, (err, results, fields) => {
    if(err) {
      console.error('there is an error getting urls', err);
      throw err;
    } else {
      console.log('here');
      res.send(results.rows[0].images);
    }
  })
});


const PORT = process.env.port || 3000;
app.listen(PORT, () => {
  console.log('Listening on PORT', PORT);
})
module.exports = app;