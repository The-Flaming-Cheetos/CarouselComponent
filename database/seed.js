const db = require('./index.js');
const faker = require('faker');



const insertOne = () => {

  const reviews = `{"total": ${faker.random.number({min: 1, max: 10000})}, "average":${faker.random.number({min: 1, max: 5})}}`;
  const duration = faker.random.number({min: 1, max: 6});
  const address = faker.random.number() + ' ' + faker.address.streetName() + ', ' + faker.address.city() + ', ' + faker.address.country();
  const trip_hours = faker.random.number({min: 1, max: 12});
  const trip_days = faker.random.number({min: 1, max: 7});
  const description = faker.lorem.paragraph(nb_sentences=5);
  const title = faker.lorem.sentence();
  const hours = '{"monday":"9 am - 5 pm","tuesday":"9 am - 5 pm","wednesday":"9 am - 5 pm","thursday":"9 am - 5 pm","friday":"9 am - 5 pm","saturday":"9 am - 5 pm","sunday":"closed"}';


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



  var query = `insert into attraction (reviews, duration, trip_address, trip_hours, trip_days, trip_description, attractionTitle, images, hours) values ('${reviews}', '${duration}', '${address}', '${trip_hours}', '${trip_days}', '${description}', '${title}', '${makeImages()}', '${hours}');`;

  db.query(query, (err, res) =>{
    if (err) {
      console.error(err);
      return;
    }
    console.log('Successful insertion');
    db.end();
  });

}

for (let i = 0; i < 10000000; i++) {
  insertOne();
}