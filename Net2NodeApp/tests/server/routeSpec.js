
var index = require('../../routes/index.js');
var routes = require('./route_helper.js').route_helper(index); 

var event_finder = function(callback){
    console.log('aaa');
    callback(null, []);
};

    describe('routes', function () {

        it('GET /', function () {
            routes.get('/');
                console.log(routes.response);

            expect(routes.response.viewName).toBe('');
        });

    });
