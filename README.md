# Devops Bookmarks

> To discover tools in the devops landscape.

There are new awesome tools and frameworks being released everyday.
This is an open and transparent attempt at aggregating all these tools
and frameworks.

## Deployment Status

[![Build Status][build_image]][build_page]


[build_image]: https://travis-ci.org/devopsbookmarks/devopsbookmarks.com.svg?branch=master
[build_page]: https://travis-ci.org/github/devopsbookmarks/devopsbookmarks.com

## Contributing

Refer to [CONTRIBUTING.md][contributing_url]

[contributing_url]: https://github.com/devopsbookmarks/devopsbookmarks.com/blob/master/CONTRIBUTING.md

## Development

* Have a working `docker` setup and this repository clone
* `docker run --rm -it -v $PWD:/workspace -p 3000:3000 -w /workspace node:12 bash`
* Running `npm i`, `npm test`, and then `npm start`
* Look at the results in your browser: `open http://"$(docker-machine ip)":3000`

[build_issue]: https://travis-ci.org/github/devopsbookmarks/devopsbookmarks.com/builds/690566413

## Maintenance

This project has been alive and keeping for a while now (first commit in 2014), but it has gone
through a period of neglect. The aim now is do a seasonal update which may include things like:

* bump dependencies
* force a redeploy is there's nothing to do
* find an opportunity to remove something
* go through neglected issues and pull requests

## Inspiration

* http://www.unheap.com/
* https://www.ruby-toolbox.com/
* http://microjs.com/
