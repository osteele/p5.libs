// eslint-disable-next-line no-undef
const { buildSync } = require('esbuild');

buildSync({
  entryPoints: [`./src/rotateAbout.js`],
  outfile: `p5.rotateAbout.js`,
  bundle: true,
  minify: false,
});

buildSync({
  entryPoints: [`./src/rotateAbout.js`],
  outfile: `p5.rotateAbout.min.js`,
  bundle: true,
  minify: true,
});
