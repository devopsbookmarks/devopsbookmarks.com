
/*
 * GET home page.
 */

var _u = require('underscore');
var data = require('../data');

exports.index = function(req, res) {
  var tools = data.tools, tags = [];

  if (req.params[0] && req.params[0].length > 0) {
    tags = req.params[0].split("+");

    var selCategories = _u.intersection(tags, _u.keys(data.categories));
    var selPlatforms = _u.intersection(tags, _u.keys(data.platforms));
    var selLicenses = _u.intersection(tags, _u.keys(data.licenses));

    tools = _u.filter(tools, function(tool) {
      return (selCategories.length == 0 || _u.intersection(selCategories, tool.tags).length > 0) &&
             (selPlatforms.length == 0 || _u.intersection(selPlatforms, tool.tags).length > 0) &&
             (selLicenses.length == 0 || _u.intersection(selLicenses, tool.tags).length > 0);
    });
  } else {
    tools = tools.slice(tools.length > 20 ? tools.length-20 : 0);
  }

  res.render('index', {
    title: 'Devops Bookmarks',
    tools: tools,
    tags: tags,
    platforms: data.platforms,
    categories: data.categories,
    licenses: data.licenses,
    _u: _u
  });
};
