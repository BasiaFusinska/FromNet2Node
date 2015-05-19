var express = require('express');
var router = express.Router();

var mysql      = require('mysql');
var pool = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password: 'root',
  database : 'event_collection'
});

router.get('/events/:username', function(req, res){
  pool.getConnection(function(err, connection) { 
	    if (err) {
	      console.log('ERROR: Unable to get connection due to ' + err.message);
	    } else {
        connection.query('SELECT * from events where username = ?', [req.params.username], function(err, result){
          if (err) {
	          res.status(500).send(err);
	        } else {
            res.json(result);
          }
        });
        connection.release();
      }
  });
});

router.post('/events/:username', function(req, res){
    pool.getConnection(function(err, connection) { 
	    if (err) {
	      console.log('ERROR: Unable to get connection due to ' + err.message);
	    } else {
        console.log('event type: ' + req.query.eventType);
	      connection.query('INSERT INTO events (event_type, payload, created_at, username) values (?, ?, ?, ?)',
	        [req.query.eventType, JSON.stringify(req.body), new Date(), req.params.username], function(err, result) {
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