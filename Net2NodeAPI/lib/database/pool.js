var mysql= require('mysql');
var config = require('../../conf');

var pool = mysql.createPool({
  host     : config.mysql.host,
  user     : config.mysql.user,
  password : config.mysql.password,
  database : config.mysql.database
});

module.exports = pool;