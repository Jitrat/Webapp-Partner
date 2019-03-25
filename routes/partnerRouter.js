const express = require('express');
const app = express();
const partnerRouter = express.Router();
const Partner = require('../models/partner');
var userLogin = "";
  
partnerRouter.route('/partner').post(function (req, res) {
  const DataPartner = new Partner(req.body);
    console.log(DataPartner);
    DataPartner.save()
    res.redirect('/home/partner');

});

partnerRouter.route('/partner').get(function (req, res) {
  Partner.find(function (err, partner) {
    if (err) {
      console.log(err);
    }
    else {
      res.render('บันทึกข้อมูลคู่ค้า',{partner: partner }); 
    }
  });
});

module.exports = partnerRouter;