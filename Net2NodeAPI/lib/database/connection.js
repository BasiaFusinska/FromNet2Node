var pool = require('./pool')

module.exports = function(query, params, callback){
	pool.getConnection(function(err, connection) { 
	    if (err) {
	      console.log('ERROR: Unable to get connection due to ' + err.message);
	    } else {
        connection.query(query, params, function(err, result){
          callback(err, result);
        });
        connection.release();
      }
  });
};