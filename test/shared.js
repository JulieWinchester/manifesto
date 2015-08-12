var finalhandler = require('finalhandler');
var http = require('http');
var serveStatic = require('serve-static');

exports.serve = function(){
    before(function(done) {

        var serve = serveStatic('fixtures', {'index': ['index.html', 'index.htm']})

        var server = http.createServer(function(req, res){
            var done = finalhandler(req, res)
            serve(req, res, done)
        });

        server.listen(8002);

        done();
    });
};