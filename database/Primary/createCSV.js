const db = require('./index.js');
const faker = require('faker');
const fs = require('fs');
const path = require('path');

const writeStream = fs.createWriteStream(path.join(__dirname, "/data.csv"));
writeStream.write('reviews, duration, trip_address, trip_hours, trip_days, trip_description, attractionTitle, images, hours\n');



var makeImages = () => {
  var num = faker.random.number({min: 1, max: 25});
  var imgs = '{'
  for (let i = 0; i < num; i++) {
    var im = faker.random.number({min:0,max: 999});
    imgs+= `"https://sdc--bucket.s3-us-west-1.amazonaws.com/lorem_pics/${im}.jpg",`;
  }
  imgs = imgs.slice(0, -1);
  imgs += '}';
  return imgs;
}

var generateRecord = () => {
  const reviews = `{"total": ${faker.random.number({min: 1, max: 10000})}, "average":${faker.random.number({min: 1, max: 5})}}`;
  const duration = faker.random.number({min: 1, max: 6});
  const address = faker.random.number() + ' ' + faker.address.streetName() + ', ' + faker.address.city() + ', ' + faker.address.country();
  const trip_hours = faker.random.number({min: 1, max: 12});
  const trip_days = faker.random.number({min: 1, max: 7});
  const description = faker.lorem.paragraph(nb_sentences=5);
  const title = faker.lorem.sentence();
  const hours = '{"monday":"9 am - 5 pm","tuesday":"9 am - 5 pm","wednesday":"9 am - 5 pm","thursday":"9 am - 5 pm","friday":"9 am - 5 pm","saturday":"9 am - 5 pm","sunday":"closed"}';
  const images = makeImages();

  const record = `"${reviews}", "${duration}", "${address}", "${trip_hours}", "${trip_days}", "${description}", "${title}", "${images}", "${hours}"\n`
  return record;
}



//write data to CSV file mentioned in writer and specify i as the number of lines to write
function createCSV(writer, i, callback) {
  // let i = 1000000;
  write();
  function write() {
    let ok = true;
    do {
      i--;
      data=callback();
      if (i === 0) {
        // Last time!
        writer.write(data);
      } else {
        // See if we should continue, or wait.
        // Don't pass the callback, because we're not done yet.
        ok = writer.write(data);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      // Had to stop early!
      // Write some more once it drains.
      writer.once('drain', write);
      console.log('e', i);
    } else {
      console.log('done');
      writer.end();
    }
  }
}
const it = 10000000;
createCSV(writeStream, it, generateRecord);









  // var query = `insert into attraction (reviews, duration, trip_address, trip_hours, trip_days, trip_description, attractionTitle, images, hours) values ('${reviews}', '${duration}', '${address}', '${trip_hours}', '${trip_days}', '${description}', '${title}', '${makeImages()}', '${hours}');`;

  // db.query(query, (err, res) =>{
  //   if (err) {
  //     console.error(err);
  //     return;
  //   }
  //   console.log('Successful insertion');
  //   db.end();
  // });