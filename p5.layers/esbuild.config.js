// eslint-disable-next-line no-undef
const { buildSync } = require('esbuild');

buildSync({
  entryPoints: [`./src/layers.js`],
  outfile: `p5.layers.js`,
  bundle: true,
  minify: false,
});

buildSync({
  entryPoints: [`./src/layers.js`],
  outfile: `p5.layers.min.js`,
  bundle: true,
  minify: true,
});
