var express = require('express');
var router = express.Router();
var CRUD = require('mysql-crud');
var currentdate = new Date();
var time = currentdate.getTime();

var connection = require('./database');
var userCRUD = CRUD(connection, 'user');

// middleware specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});


router.get('/', function( req, res ) {
    userCRUD.load(function (err, val) {
    var resdata={
        records:val,
        status:false,
        message :'err'
      };
    res.jsonp(resdata);
    });

});

module.exports = router;
