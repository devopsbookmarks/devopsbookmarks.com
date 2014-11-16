/*
 * GET tools page.
 */

var _u = require('underscore');
var data = require('../data');

function onlyUrlFor(tag, groupOfTags, allTags) {
  return _u.union(_u.difference(allTags, _u.pluck(groupOfTags, 'slug')), [tag]).sort().join('+');
}

function extraUrlFor(tag, allTags) {
  var newTags = _u.contains(allTags, tag) ? _u.without(allTags, tag) : _u.union(allTags, [tag]);
  return "/" + newTags.sort().join('+');
}

module.exports = function(req, res) {
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
    // show all tools
    //tools = tools.slice(tools.length > 20 ? tools.length-20 : 0);
  }

  res.render('tools', {
    title: 'Devops Bookmarks',
    tools: tools,
    tags: tags,
    platforms: data.platforms,
    categories: data.categories,
    licenses: data.licenses,
    _u: _u,
    onlyUrlFor: onlyUrlFor,
    extraUrlFor: extraUrlFor
  });
};
