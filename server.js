var cluster = require('cluster');

if (cluster.isMaster && process.env.NODE_ENV) {
  var cpuCount = require('os').cpus().length;
  for (var i=0; i < cpuCount; i++)
    cluster.fork();
} else {
  var express = require('express');
  var app = express();

  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(require('connect-redirecthost').redirectHost('www.devopsbookmarks.com'));
  app.use(require('morgan')('combined'));
  app.use(require('compression')());
  app.use(require('errorhandler')());

  app.use(express.static(__dirname + '/public'));
  app.get('/', require('./routes/home'));
  app.get('/:tags', require('./routes/tools'));

  app.listen(process.env.PORT || 3000);
}
