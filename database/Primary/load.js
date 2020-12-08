const db = require('./index.js');
const path = require('path');


const query = `COPY attraction(reviews, duration, trip_address, trip_hours, trip_days, trip_description, attractionTitle, images, hours) FROM '${path.join(__dirname, 'data.csv')}' DELIMITER ',' CSV HEADER;`

db.query(query, (err, res) =>{
    if (err) {
      console.error(err);
      return;
    }
    console.log('Successful insertion');
    db.end();
  });