/*
 * GET home page.
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
  res.render('home', {
    tags: [],
    platforms: data.platforms,
    licenses: data.licenses,
    languages: data.languages,
    topics: data.topics,
    _u: _u,
    onlyUrlFor: onlyUrlFor,
    extraUrlFor: extraUrlFor,
    tool: _u.sample(data.tools)
  });
};
