var express = require('express');
var router = express.Router();
var http = require('http');
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

// /**
// * Defined the updaterepresentative post call route here
// * @author ankush [ankush.lomte@fountaintechies.com]
// * @since   1
// * @Version 1
// * @summary This api allow update representative.
// */
// router.post('/updaterepresentative', function( req, res ) {
//   console.log("in updaterepresentative api");
//   console.log(req.body);
//   connection.query( "UPDATE representatives SET representative_number='"+ req.body.representative_number +"', first_name='"+ req.body.first_name +"', last_name = '"+ req.body.last_name +"', full_name= '"+ req.body.full_name +"', modified_on = '"+ time +"' WHERE representative_id= "+ req.body.representative_id , function( error , result ){
//       console.log(error);
//       console.log(result);
//       if(result ){
//         responsedata = {
//               status: true,
//               record : result,
//               representative_id : result.insertId
//           }
//       } else {
//         responsedata = {
//               status: false,
//               message:'Insert Failed.'
//           }
//       }
//       res.jsonp( responsedata );

//     });
// });


// /**
// * Defined the representatives report structure Update post call route here
// * @author ankush [ankush.lomte@fountaintechies.com]
// * @since   1
// * @Version 1
// * @summary This api allow to Update report structure of representative.
// */
// router.post('/updatereport', function( req, res ) {
//   console.log("in updatereport representative api");
//   console.log(req.body);
//   connection.query( "UPDATE representatives SET team_id= "+ req.body.team_id + ", team_name='"+req.body.team_name+"', area_manager_id=" + req.body.area_manager_id + ", area_manager_name='"+req.body.area_manager_name+"', regional_manager_id="+req.body.regional_manager_id+", regional_manager_name='"+req.body.regional_manager_name+"', territory_id="+req.body.territory_id+", territory_name='"+req.body.territory_name+"' WHERE representative_id ="+ req.body.representative_id, function( error , result ){
//       console.log(error);
//       console.log(result);
//       if(result ){
//         responsedata = {
//               status: true,
//               record : result
//           }
//       } else {
//         responsedata = {
//               status: false,
//               message:'Update Failed.'
//           }
//       }
//       res.jsonp( responsedata );

//     });
// });

// /**
// * Defined the representatives adrress Update post call route here
// * @author ankush [ankush.lomte@fountaintechies.com]
// * @since   1
// * @Version 1
// * @summary This api allow to Update adrress  of representative.
// */
// router.post('/updateadrress', function( req, res ) {
//   console.log("in updateadrress representative api");
//   console.log(req.body);
//   connection.query( "UPDATE representatives SET street='"+req.body.street+"', city='"+req.body.city+"', office='"+req.body.office+"', zip="+req.body.zip+", district='"+req.body.district+"', province='"+req.body.province+"' WHERE representative_id ="+ req.body.representative_id, function( error , result ){
//       console.log(error);
//       console.log(result);
//       if(result ){
//         responsedata = {
//               status: true,
//               record : result
//           }
//       } else {
//         responsedata = {
//               status: false,
//               message:'Update Failed.'
//           }
//       }
//       res.jsonp( responsedata );

//     });
// });

// /**
// * Defined the representatives adrress Update post call route here
// * @author ankush [ankush.lomte@fountaintechies.com]
// * @since   1
// * @Version 1
// * @summary This api allow to Update contact details  of representative.
// */
// router.post('/updatecontact', function( req, res ) {
//   console.log("in updatecontact representative api");
//   console.log(req.body);
//   connection.query( "UPDATE representatives SET phone='"+req.body.phone+"', cell_phone='"+req.body.cell_phone+"', email_address='"+req.body.email_address+"' WHERE representative_id ="+ req.body.representative_id, function( error , result ){
//       console.log(error);
//       console.log(result);
//       if(result ){
//         responsedata = {
//               status: true,
//               record : result
//           }
//       } else {
//         responsedata = {
//               status: false,
//               message:'Update Failed.'
//           }
//       }
//       res.jsonp( responsedata );

//     });
// });

// /**
// * Defined the representatives Details post call route here
// * @author ankush [ankush.lomte@fountaintechies.com]
// * @since   1
// * @Version 1
// * @summary This api allow to get Details of representative.
// */
// router.post('/getrepresentative', function( req, res ) {
//   console.log("in get representative api");
//   console.log(req.body);
//   connection.query( "SELECT * FROM representatives WHERE representative_id = "+ req.body.representative_id , function( error , result ){
//       console.log(error);
//       console.log(result);
//       if(result ){
//         responsedata = {
//               status: true,
//               record : result,
//               representative_id : result.insertId
//           }
//       } else {
//         responsedata = {
//               status: false,
//               message:'Insert Failed.'
//           }
//       }
//       res.jsonp( responsedata );

//     });
// });

// /**
// * Defined the representatives Details post call route here
// * @author ankush [ankush.lomte@fountaintechies.com]
// * @since   1
// * @Version 1
// * @summary This api allow to get Details of representative.
// */
// router.get('/getallrepresentative', function( req, res ) {
//   console.log("in get all representative  api");
//   console.log(req.body);
//   connection.query( "SELECT * FROM representatives " , function( error , result ){
//       console.log(error);
//       console.log(result);
//       if(result ){
//         responsedata = {
//               status: true,
//               record : result,
//               representative_id : result.insertId
//           }
//       } else {
//         responsedata = {
//               status: false,
//               message:'Insert Failed.'
//           }
//       }
//       res.jsonp( responsedata );

//     });
// });

// /**
// * Defined the deleterepresentative post call route here
// * @author ankush [ankush.lomte@fountaintechies.com]
// * @since   1
// * @Version 1
// * @summary This api allow to Delete a representative.
// */
// router.post('/deleterepresentative', function( req, res ) {
//   console.log("in delete representative  api");
//   console.log(req.body);
//   connection.query( "DELETE FROM representatives WHERE representative_id ="+req.body.representative_id , function( error , result ){
//       console.log(error);
//       console.log(result);
//       if(result ){
//         responsedata = {
//               status: true,
//               record : result,
//               representative_id : result.insertId
//           }
//       } else {
//         responsedata = {
//               status: false,
//               message:'Delete Failed.'
//           }
//       }
//       res.jsonp( responsedata );

//     });
// });

// /**
// * Defined the deletemultilerepresentatives post call route here
// * @author ankush [ankush.lomte@fountaintechies.com]
// * @since   1
// * @Version 1
// * @summary This api allow to Delete a representative.
// */
// router.post('/deletemultilerepresentatives', function( req, res ) {
//   console.log("in delete multile representatives  api");
//   //console.log(req.body);
//   var delResult = {};
//   var representatives = req.body;
//   var no_of_representatives = representatives.length;
//   for (var i in representatives) {
//       console.log(representatives[i].representative_id );
//       connection.query( "DELETE FROM representatives WHERE representative_id ="+representatives[i].representative_id , function( error , result ){
//       console.log(error);
//       console.log(result);
//       delResult = result;
//     });
//   }
//   if(delResult ){
//         responsedata = {
//               status: true,
//               message:'Delete Sucessful.'
//           }
//       } else {
//         responsedata = {
//               status: false,
//               message:'Delete Failed.'
//           }
//       }
//       res.jsonp( responsedata );
// });

module.exports = router;