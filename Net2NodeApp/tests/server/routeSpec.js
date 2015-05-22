/// <reference path="../../typings/jasmine/jasmine.d.ts"/>
var sinon = require('sinon');
var index = require('../../routes/index.js');
var routes = require('./route_helper.js').route_helper(index);
var event_finder = require('../../lib/events/find_all');

describe('routes', function () {
    var eventsData = [{evt: 'Test'}];
    beforeEach(function(){
      sinon.stub(event_finder, 'all').yields(null, eventsData);
    });

    afterEach(function() {
      event_finder.all.restore();
    })

    it('GET /', function () {
        routes.get('/');
        expect(routes.response.viewName).toBe('index');
    });

    it('Returns all the events', function () {
      routes.get('/');
      expect(routes.response.data.events).toBe(eventsData);
    });
});
