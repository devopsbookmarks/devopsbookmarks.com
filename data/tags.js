exports.platforms = [{
  slug: "linux",
  name: "Linux"
}, {
  slug: "windows",
  name: "Windows"
}, {
  slug: "osx",
  name: "OSX"
}];

exports.licenses = [{
  slug: "open-source",
  name: "Open Source"
}, {
  slug: "free",
  name: "Free / Restricted"
}, {
  slug: "commercial",
  name: "Proprietary / Commercial"
}];

exports.categories = [{
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
}, {
  slug: "backup",
  name: "Backup and Archival",
  subcat: "Maintenance"
}];

// Dependency Management (and thus Dev Environment Setup) => Merged with Virt/Containers/Provisioning
// Configuration Management => ??
// DevOps Testing
// IRC / Communication => Merge with CI
// Performance / Load Balancing
// Where to put Zookeeper/etcd ?
