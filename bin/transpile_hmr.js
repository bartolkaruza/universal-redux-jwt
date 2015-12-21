const config = {
  "presets": [
    "es2015",
    "stage-0",
    "react"
  ],
  "env": {
    "development": {
      "plugins": [
        [
          "react-transform", {
            "transforms": [{
              "transform": "react-transform-hmr",
              "imports": ["react"],
              "locals": ["module"]
            }, {
              "transform": "react-transform-catch-errors",
              "imports": ["react", "redbox-react"]
            }]
          }
        ],
        [ "transform-runtime" ],
        [ "typecheck" ],
        [ "transform-decorators-legacy" ]
      ]
    }
  }
}

require('babel-core/register')(config);
