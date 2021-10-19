// eslint-disable-next-line no-undef
const { buildSync } = require('esbuild');

buildSync({
  entryPoints: [`./src/vector-arguments.js`],
  outfile: `p5.vector-arguments.js`,
  bundle: true,
  minify: false,
});

buildSync({
  entryPoints: [`./src/vector-arguments.js`],
  outfile: `p5.vector-arguments.min.js`,
  bundle: true,
  minify: true,
});
