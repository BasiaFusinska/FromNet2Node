var express = require('express');
var router = express.Router();

var mysql      = require('mysql');
var pool = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password: 'root',
  database : 'event_collection'
});


router.post('/event/:eventType', function(req, res){
    pool.getConnection(function(err, connection) { 
	    if (err) {
	      console.log('ERROR: Unable to get connection due to ' + err.message);
	    } else {
	      connection.query('INSERT INTO events (event_type, payload, created_at) values (?, ?,?)',
	        [req.params.eventType, JSON.stringify(req.body), new Date()], function(err, result) {
	        if (err) {
	          res.status(500).send(err);
	        } else {
	          res.status(200).send('Event is queued...');
	        }
	        connection.release();
	      });
	    }
    });
});

module.exports = router;