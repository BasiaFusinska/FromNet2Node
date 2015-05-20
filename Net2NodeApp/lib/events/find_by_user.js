var config = require('../../conf');
var restler = require('restler');
var _ = require('underscore');

var rewriteJson = function(data){
	return _.map(data, function(event){
		event.payload = JSON.parse(event.payload);
		event.created_at = (new Date(event.created_at)).toLocaleDateString("en-GB");
		return event;
	});
};

module.exports = function(callback) {
	restler.get(config.events_api.events + '/' + config.username)
	.on('complete', function(data) {
  		callback(null, rewriteJson(data));	
	});
};