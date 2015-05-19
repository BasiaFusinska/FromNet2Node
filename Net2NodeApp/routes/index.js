var express = require('express');
var router = express.Router();

var restler = require('restler');

/* GET home page. */
router.get('/', function(req, res, next) {
	var events = [{username: 'aaa', status: 'AAAAA'}, {username: 'bbb', status: 'BBBBB'}]
	res.render('index', { title: 'Status set', events: events});
});

router.post('/', function (req, res) {
  var data = { data: { status: req.body.status } };
  restler.post('http://localhost:3030/api/events/NETDeveloper?eventType=status', data)
      .on('complete', function (data, resp) {
        res.send('You sent the reqest: <br/>' + JSON.stringify(req.body));
      });
});

module.exports = router;
