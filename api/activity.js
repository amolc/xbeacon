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


router.post('/loginuser', function( req, res ) {
  console.log(req.body);
    userCRUD.load({
      email_id : req.body.email_id,
      //userpassword : password
    }, function (err, val) {
    console.log(val);
    console.log(err);
    var resdata={
        record:'',
        status:false,
        message :'err'
      };
      /*console.log(val);*/
          if(val.length>0){
            resdata.record=val;
            resdata.status=true;
            console.log("login");
            resdata.message='successfully login welcome ';
            res.jsonp(resdata);
            console.log(resdata);
          }else{
          resdata.status = false;
          resdata.message = 'Wrong user name or password';
          console.log(resdata);
          res.jsonp(resdata);
        }
    });
  });

/**
* Defined the user add post call route here
* @author ankush [ankush.lomte@fountaintechies.com]
* @since   1
* @Version 1
* @summary This api allow add user.
*/
router.post('/add_device', function( req, res ) {
  console.log("in add_device api");
  console.log(req.body);
  connection.query( "INSERT INTO devices (device_id, proximity) VALUES ('123', 'AAA21312332' )", function( error , result ){
      console.log(error);
      console.log(result);
      if(result ){
        devicedata = {
              status: true,
              record : result,
              device_id : result.insertId
          }
      } else {
        devicedata = {
              status: false,
              message:'Insert Failed.'
          }
      }
      res.jsonp( devicedata );

    });
});

/**
* Defined the getallusers Details post call route here
* @author ankush [ankush.lomte@fountaintechies.com]
* @since   1
* @Version 1
* @summary This api allow to get Details of representative.
*/
router.get('/getallusers', function( req, res ) {
  console.log("in get all users  api");
  console.log(req.body);
  connection.query( "SELECT * FROM user" , function( error , result ){
      console.log(error);
      console.log(result);
      if(result ){
        responsedata = {
              status: true,
              record : result,
          }
      } else {
        responsedata = {
              status: false,
              message:'Insert Failed.'
          }
      }
      res.jsonp( responsedata );

    });
});

/**
* Defined the getallDevices get call route here
* @author ankush [ankush.lomte@fountaintechies.com]
* @since   1
* @Version 1
* @summary This api allow to get Details of representative.
*/
router.get('/getalldevices', function( req, res ) {
  console.log("in get all devices  api");
  console.log(req.body);
  connection.query( "SELECT * FROM devices" , function( error , result ){
      console.log(error);
      console.log(result);
      if(result ){
        responsedata = {
              status: true,
              record : result,
          }
      } else {
        responsedata = {
              status: false,
              message:'Insert Failed.'
          }
      }
      res.jsonp( responsedata );

    });
});

/**
* Defined the user add post call route here
* @author ankush [ankush.lomte@fountaintechies.com]
* @since   1
* @Version 1
* @summary This api allow add user.
*/
router.post('/adduser', function( req, res ) {
  console.log("in adduser api");
  console.log(req.body);
  connection.query( "INSERT INTO user (email_id) VALUES ('"+ req.body.email_id +"' )", function( error , result ){
      console.log(error);
      console.log(result);
      if(result ){
        userdata = {
              status: true,
              record : result,
              user_id : result.insertId
          }
      } else {
        userdata = {
              status: false,
              message:'Insert Failed.'
          }
      }
      res.jsonp( userdata );

    });
});

module.exports = router;
