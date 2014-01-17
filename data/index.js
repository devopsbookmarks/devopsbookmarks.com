var _u = require('underscore');

exports.categories = _u.indexBy(require('./tags').categories, 'slug');
exports.platforms = _u.indexBy(require('./tags').platforms, 'slug');
exports.licenses = _u.indexBy(require('./tags').licenses, 'slug');
exports.tools = require('./tools').tools;
