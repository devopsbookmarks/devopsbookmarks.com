var cluster = require('cluster');

if (cluster.isMaster) {
  var cpuCount = require('os').cpus().length;
  for (var i=0; i < cpuCount; i++)
    cluster.fork();
} else {
  var express = require('express');
  var routes = require('./routes');
  var http = require('http');
  var path = require('path');

  var app = express();

  // all environments
  app.set('port', process.env.PORT || 3000);
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'jade');

  app.use(express.favicon());
  app.use(express.json());
  app.use(express.urlencoded());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use('/assets', express.static(path.join(__dirname, 'public')));

  // development only
  if ('development' == app.get('env')) {
    app.use(express.logger('dev'));
    app.use(express.errorHandler());
  }

  app.get(/^\/(?!(assets))([+-_\w]*)$/, routes.index);

  http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
  });
}
