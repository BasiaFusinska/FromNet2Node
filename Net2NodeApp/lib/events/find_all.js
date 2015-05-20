var config = require('../../conf');
var restler = require('restler');
var _ = require('underscore');

var rewriteJson = function(data){
	return _.map(data, function(event){
		event.payload = JSON.parse(event.payload);
		return event;
	});
};

module.exports = function(callback) {
	restler.get(config.events_api.events)
	.on('complete', function(data) {
  		callback(null, rewriteJson(data));	
	});
};