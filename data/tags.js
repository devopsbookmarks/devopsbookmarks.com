var tools = require('./tools').tools;
var _u = require('underscore');

function withCount(tags) {
  _u.each(tags, function(tag) {
    tag.count = _u.filter(tools, function(tool) {
      return _u.contains(tool.tags, tag.slug);
    }).length;
  });
  return tags;
}

var platforms = [{
  slug: "linux",
  name: "Linux",
  icon: "fa fa-linux"
}, {
  slug: "windows",
  name: "Windows",
  icon: "fa fa-windows"
}, {
  slug: "osx",
  name: "OSX",
  icon: "fa fa-apple"
}];

var licenses = [{
  slug: "open-source",
  name: "Open Source",
  icon: "fa fa-code-fork"
}, {
  slug: "free",
  name: "Free / Restricted",
  icon: "fa fa-beer"
}, {
  slug: "commercial",
  name: "Proprietary / Commercial",
  icon: "fa fa-usd"
}];

var categories = [{
  slug: "scm",
  name: "Source Code Management",
  subcat: "Development"
}, {

//   slug: "dep-mgmt",
//   name: "Dependency Management",
//   subcat: "Development"
// }, {

  slug: "ci",
  name: "Continuous Integration & Delivery",
  subcat: "Integration"
}, {
  slug: "packaging",
  name: "Packaging & Artifacts",
  subcat: "Integration"
}, {
  slug: "virt",
  name: "Virtualization & Containers",
  subcat: "Deployment"
}, {
  slug: "cloud-paas",
  name: "Cloud & PaaS Environments",
  subcat: "Deployment"
}, {
  slug: "provisioning",
  name: "Provisioning",
  subcat: "Deployment"
}, {
  slug: "orchestration",
  name: "Orchestration",
  subcat: "Maintenance"
}, {
  slug: "process-mgmt",
  name: "Process Management",
  subcat: "Maintenance"
}, {
  slug: "monitoring",
  name: "Logging & Monitoring",
  subcat: "Maintenance"
}];

// Dependency Management (and thus Dev Environment Setup) => Merged with Virt/Containers/Provisioning
// Configuration Management => ??
// DevOps Testing
// IRC / Communication => Merge with CI
// Performance / Load Balancing
// Backup?
// Where to put Zookeeper/etcd ?

exports.categories = withCount(categories);
exports.platforms = withCount(platforms);
exports.licenses = withCount(licenses);
