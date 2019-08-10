const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');

aws.config.update({
   secretAccessKey :'uroxRawWh2tL6CXuvprB7eu98GMcsQV1HGcjayjs',
   accessKeyId: 'AKIAI2MCHADSCAQWPN2Q',
   region:'ap-south-1'
});

const s3 = new aws.S3();
 
const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'kartikcreation',
    acl: 'public-read',
    metadata: function (req, file, cb) {
      cb(null, {fieldName: file.fieldname});
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString())
    }
  })
})


module.exports = upload;