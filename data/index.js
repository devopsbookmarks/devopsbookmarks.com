var _u = require('underscore');
var walk = require('walk');
var fs = require('fs');
var tools = [];

exports.categories = _u.indexBy(require('./tags').categories, 'slug');
exports.platforms = _u.indexBy(require('./tags').platforms, 'slug');
exports.licenses = _u.indexBy(require('./tags').licenses, 'slug');
exports.tools = tools;

walker = walk.walk(__dirname + '/tools/');

walker.on('file', function(root, fileStats, next) {
  if (fileStats.name.match(/.json$/)) {
    var toolStr = fs.readFileSync(root + '/' + fileStats.name, 'utf-8');
    var toolJson = JSON.parse(toolStr);
    toolJson.forEach(function(tool) {
      tools.push(tool);
    });
  }

  next();
});

walker.on('end', function() {
  console.log('Read ' + tools.length + ' tools');
});
