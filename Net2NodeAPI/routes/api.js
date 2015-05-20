var express = require('express');
var router = express.Router();
var connection = require('../lib/database/connection')

router.get('/events', function(req, res){
    connection('SELECT * from events', [], function(err, result) {
      if (err) {
        res.status(500).send(err);
      }
      else {
        res.json(result);
      }
    });
});

router.get('/events/:username', function(req, res){
    connection('SELECT * from events where username = ?', [req.params.username], function(err, result) {
      if (err) {
        res.status(500).send(err);
      }
      else {
        res.json(result);
      }
    });
});

router.post('/events/:username', function(req, res){
    connection('INSERT INTO events (event_type, payload, created_at, username) values (?, ?, ?, ?)',
      [req.query.eventType, JSON.stringify(req.body), new Date(), req.params.username], function(err, result) {
        if (err) {
          res.status(500).send(err);
        }
        else {
          res.status(200).send('Event is queued...');
        }
    });
});

module.exports = router;