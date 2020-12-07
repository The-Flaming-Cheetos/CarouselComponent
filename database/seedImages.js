// seed 1000 images in s3 bucket

require('dotenv').config();

const AWS = require('aws-sdk');

const { AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY } = process.env;
// console.log('hello');
// console.log(AWS_SECRET_ACCESS_KEY);

AWS.config.update({
  accessKeyId: AWS_ACCESS_KEY_ID,
  secretAccessKey: AWS_SECRET_ACCESS_KEY,
  region:'us-west-1'
});

const s3Bucket = new AWS.S3({ params : {Bucket: 'sdc--bucket'} });


const { Buffer } = require('buffer');
var getImgBuffer = (base64) => {
  const base64str = base64.replace(/^data:image\/\w+;base64,/, "");
  return Buffer.from(base64str, 'base64');
}

const imageUpload = (path, buffer) => {
  const data = {
    Key: path,
    Body: buffer,
    ContentEncoding: 'base64',
    ContentType: 'image/jpeg',
    ACL: 'public-read'
  };
  return new Promise((resolve, reject) => {
    s3Bucket.putObject(data, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve('https://s3.amazonaws.com/sdc--bucket/imagename.jpg');
      }
    });
  });
};


for (let i =0; i<5; i ++) {
  imageUpload(`${i}.jpg`, getImgBuffer(`/Users/Arman/lorem_pics/${i}.jpg`))
    .then((res) => {console.log(res)});
}
