var express = require('express');
var router = express.Router();

var event_finder = require('../lib/events/find_all');
var event_finder_for_user = require('../lib/events/find_by_user');
var event_creator = require('../lib/events/create');

router.get('/', function(req, res, next) {
	var userOnly = req.query.userOnly || false;
	if (userOnly){
		event_finder_for_user(function(err, data){
			res.render('index', { title: 'Status set', events: data});
		});	
	} else {
		event_finder(function(err, data){
			res.render('index', { title: 'Status set', events: data});
		});	
	}
});

router.post('/', function (req, res) {
	var data = { data: req.body };
	var eventType = req.query.eventType || 'status';
	event_creator(eventType, data, function(err, data){
		res.send('You sent the reqest: <br/>' + JSON.stringify(req.body));
	});
});

module.exports = router;
