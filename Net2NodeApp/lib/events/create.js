var config = require('../../conf');
var restler = require('restler');

module.exports = function(eventType, data, callback){
	  restler.post(config.events_api.events + '/' + config.username + '?eventType=' + eventType, data)
      .on('complete', function (data, resp) {
      	callback(null, data)
      });
};