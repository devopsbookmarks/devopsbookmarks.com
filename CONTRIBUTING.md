# Contributing

## Adding a Tool

* Fork the Repo
* Add a JSON file under `data/tools`. Here is a sample, don't include the comments though ;)

    ```
    [
      {
        "slug": "<URL Slug>",
        "name": "<Name>",
        "description": "<Description>",
        "url": "<URL to project homepage>",
        "tags": [
          // Mention Platform
          // ref: https://github.com/devopsbookmarks/devopsbookmarks.com/blob/master/data/platforms.json
          "linux",
          "windows",
          "osx",
          "bsd",
          "solaris",

          // Mention License
          // ref: https://github.com/devopsbookmarks/devopsbookmarks.com/blob/master/data/licenses.json
          "open-source",
          "free",
          "commercial",
          
          // And add tags related to this tool
          // Tags are grouped into topic
          // Cross verify if these tags belong to a topic
          // ref: https://github.com/devopsbookmarks/devopsbookmarks.com/blob/master/data/topics.json
          "scm",
          "vcs",
          etc.
        ]
      }
    ]
    ```
* Raise a pull request and ensure sure tests pass
* Discuss in the pull request
* Once its merged, enjoy the satisfaction of contributing. Travis-CI will do the rest.
