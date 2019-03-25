const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Partner = new Schema({
  ID_partner: {type: String},
  name: {type: String},
  address: {type: String},
  telephone: {type: String},
  emai: {type: String},
  fax: {type: String},
  partner_type: {type: String}}, 
  {
    collection: 'MST_partner'
  });

module.exports = mongoose.model('Partner', Partner);