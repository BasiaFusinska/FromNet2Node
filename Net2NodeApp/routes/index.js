var config = require('../conf');
var express = require('express');
var router = express.Router();

var restler = require('restler');
var event_finder = require('../lib/events/find_by_user');

router.get('/', function(req, res, next) {
	event_finder(function(err, data){
		console.log(data);
	});
	
	var events = [{username: 'aaa', status: 'AAAAA'}, {username: 'bbb', status: 'BBBBB'}]
	res.render('index', { title: 'Status set', events: events});
});

router.post('/', function (req, res) {
  var data = { data: { status: req.body.status } };
  restler.post(config.events_api.events + '/' + config.username + '?eventType=status', data)
      .on('complete', function (data, resp) {
        res.send('You sent the reqest: <br/>' + JSON.stringify(req.body));
      });
});

module.exports = router;
