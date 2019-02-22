const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define collection and schema for Business
let KC = new Schema({
product_name: {
type: String
},
category_name: {
type: String
},
material_name: {
type: String
},
price: {
type: Number
},
description: {
type: String
},
fileupload: {
type: String
// data: Buffer,
// contentType: String
},
},{
collection: 'productlist'
});
var KC1 = mongoose.model('KC', KC);


let AdLoginDetails = new Schema({
    user_name: {
      type: String
    },
    user_password: {
      type: String
    }
  },{
      collection: 'adlogindetails'
  });
  
  var AdLoginDetails1 = mongoose.model('AdLoginDetails', AdLoginDetails);

  module.exports = {
    KC:KC1,
    AdLoginDetails:AdLoginDetails1
  };