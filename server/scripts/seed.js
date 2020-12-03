const faker = require("faker");
const Seeder = require("mysql-db-seed").Seeder;
const db = require("../../database/index.js");

const seed = new Seeder(10, "localhost", "root", "MyNewPass", "carousel");

for(let i = 0; i < 30; i++) {
(async () => {
  await seed.seed(1,
    "attraction",
    {
      reviewCount: faker.random.number(),
      duration: faker.random.number({
        'min': 2,
        'max': 6
      }),
      trip_address: faker.random.words(15),
      trip_hours: faker.random.number({
        'min': 3,
        'max': 12
      }),
      trip_days: faker.random.number({
        'min': 4,
        'max': 7
      }),
      trip_description: faker.random.words(60),
      attractionTitle: faker.random.words(6)
    }
  )
  seed.exit();
  process.exit();
})();
}
for(let i = 0; i < 30; i++) {
  (async () => {
    await seed.seed(1,
      "reviews",
      {
        travelerRating: faker.random.number({
          'min': 1,
          'max': 5
      }),

        attractionID: faker.random.number({
          'min': 1,
          'max': 5
        })
      }
    )
    seed.exit();
    process.exit();
  })();
  }
  for(let i = 0; i < 30; i++) {
    (async () => {
      await seed.seed(1,
        "images",
        {
          urlLink: faker.internet.url(),
          attractionID: faker.random.number({
            'min': 1,
            'max': 5
          })
        }
      )
      seed.exit();
      process.exit();
    })();
    }

module.exports = {
  seed : seed
}

// db.connection.query("update reviews set attractionID = 1 where reviewID = 1");
// db.connection.query("update reviews set attractionID = 2 where reviewID = 2");
// db.connection.query("update reviews set attractionID = 3 where reviewID = 3");
// db.connection.query("update reviews set attractionID = 4 where reviewID = 4");
// db.connection.query("update reviews set attractionID = 5 where reviewID = 5");

// db.connection.query("update images set urlLink = 'https://myfecimages.s3-us-west-1.amazonaws.com/winchester+pictures/WinchesterHouse_PChang-4330.0.1484336386.jpg' where attractionID = 1");
// db.connection.query("update images set urlLink = 'https://myfecimages.s3-us-west-1.amazonaws.com/winchester+pictures/the-winchester-mystery.jpg' where attractionID = 2");
// db.connection.query("update images set urlLink = 'https://myfecimages.s3-us-west-1.amazonaws.com/winchester+pictures/smokey-shapes-not-visible.jpg' where attractionID = 3");
// db.connection.query("update images set urlLink = 'https://myfecimages.s3-us-west-1.amazonaws.com/winchester+pictures/orbs-of-light-floating.jpg' where attractionID = 4");
// db.connection.query("update images set urlLink = 'https://myfecimages.s3-us-west-1.amazonaws.com/winchester+pictures/santana-row.jpg' where attractionID = 5");

// var attractionID = Math.floor(Math.random() * 5) + 1
// var reviewID = Math.floor(Math.random() + 1 * Math.floor(18));
// var count = 1;

// for(var i = 0; i < 18; i++) {
// db.connection.query(`update reviews set attractionID = ${attractionID} where reviewID = ${count}`);
// ++count;
// attractionID = Math.floor(Math.random() * 5) + 1
// }
// count = 1;
// for(var i = 0; i < 18; i++) {
//   db.connection.query(`update images set attractionID = ${attractionID} where imageID = ${count}`);
//   attractionID = Math.floor(Math.random() + 1 * Math.floor(6));
//   reviewID = Math.floor(Math.random() + 1 * Math.floor(18));
//   count++;
// }

// db.connection.query(`update images set attractionID = ${attractionID} where imageID = ${count}`);

 db.connection.query("update images set urlLink = 'https://myfecimages.s3-us-west-1.amazonaws.com/winchester+pictures/WinchesterHouse_PChang-4330.0.1484336386.jpg' where attractionID = 1 and imageID = 1");
 db.connection.query("update images set urlLink = 'https:myfecimages.s3-us-west-1.amazonaws.com/winchester+pictures/the-winchester-mystery.jpg' where attractionID = 1 and imageID = 2");
 db.connection.query("update images set urlLink = 'https://myfecimages.s3-us-west-1.amazonaws.com/winchester+pictures/smokey-shapes-not-visible.jpg' where attractionID = 1 and imageID = 3");
 db.connection.query("update images set urlLink = 'https://myfecimages.s3-us-west-1.amazonaws.com/winchester+pictures/orbs-of-light-floating.jpg' where attractionID = 1 and imageID = 4");
 db.connection.query("update images set urlLink = 'https://myfecimages.s3-us-west-1.amazonaws.com/winchester+pictures/santana-row.jpg' where attractionID = 1 and imageID = 5");
