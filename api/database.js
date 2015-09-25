//for database connection
var mysql = require('mysql');
var connection = mysql.createPool({
		database : 'xcellen',
	    user : 'ftdev',
		password : '10gXWOqeaf',
	    host :'apps.fountaintechies.com',
	});	

module.exports = connection;
 

