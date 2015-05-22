var index = require('../../routes/index.js');
var routes = require('./route_helper.js').route_helper(index); 

describe('routes', function () {

    it('GET /', function () {
        routes.get('/');
        expect(routes.response.viewName).toBe('');
    });
});
