var platforms = [{
  slug: "linux",
  name: "Linux",
  icon: "fa fa-fw fa-linux"
}, {
  slug: "windows",
  name: "Windows",
  icon: "fa fa-fw fa-windows"
}, {
  slug: "osx",
  name: "OSX",
  icon: "fa fa-fw fa-apple"
}];

var licenses = [{
  slug: "open-source",
  name: "Open Source",
  icon: "fa fa-fw fa-code-fork"
}, {
  slug: "free",
  name: "Free / Restricted",
  icon: "fa fa-fw fa-beer"
}, {
  slug: "commercial",
  name: "Proprietary / Commercial",
  icon: "fa fa-fw fa-usd"
}];

var topics = [{
  slug: "scm",
  name: "Source Code Management",
  subcat: "Development"
}, {
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

module.exports = {
  topics: topics,
  platforms: platforms,
  licenses: licenses
}
