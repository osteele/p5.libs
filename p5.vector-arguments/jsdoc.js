'use strict';

module.exports = {
  source: {
    "include": [
      "README.md",
      "src",
    ]
  },
  opts: {
    destination: "build",
  },
  plugins: ['plugins/markdown']
};
