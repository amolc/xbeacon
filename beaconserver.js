// =======================
// get the packages we need ============
// =======================
var express     = require('express');
var router = express.Router();
var app         = express();
var bodyParser  = require('body-parser');
var morgan      = require('morgan');
    
// =======================
// configuration =========
// =======================
var port = process.env.PORT || 8001;

// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// use morgan to log requests to the console
app.use(morgan('dev'));
app.use('/', express.static(__dirname + '/beaconadmin'));
app.use('/public', express.static(__dirname + '/public'));



app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
 });

var beaconapis = require('./app/beaconapi');
app.use('/app/beaconapi', beaconapis);



// =======================
// start the server ======
// =======================
app.listen(port);
console.log('Magic happens at http://localhost:' + port);
