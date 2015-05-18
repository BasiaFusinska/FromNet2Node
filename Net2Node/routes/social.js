var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('social', { title: 'Status set' });
});

router.post('/', function (req, res) {
  res.send('You sent the reqest: <br/>' + req.body.status);
});

module.exports = router;