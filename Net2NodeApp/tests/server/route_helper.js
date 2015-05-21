exports.route_helper = function (routes) {
        var obj = {};

        obj.response = {
            viewName: "",
            data: {},
            status: 0,
            send: function(data){},
            render: function (view, viewData) {
                this.viewName = view;
                this.data = viewData;
            }
        };

        ['get', 'post'].forEach(function(verb){
           obj[verb] = function (name, req) {
               handle(verb, name, (req || {}), obj.response);
           };
        });

        function handle(verb, path, req, res) {
            var route = getRoute(path, verb);
            if(route !== undefined)
                route.stack[0].handle(req, res);
        }

        function getRoute(path, verb) {
            for(var i = 0, len = routes.stack.length; i < len; i++) {
                var route = routes.stack[i].route;
                if(route.path === path && route.stack[0].method === verb)
                    return route;
            }
            return undefined;
        }

        return obj;
    };