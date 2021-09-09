'use strict';

module.exports = {
  source: {
    "include": [
      "README.md",
    ]
  },
  opts: {
    destination: "build",
  },
  plugins: ['plugins/markdown']
};
