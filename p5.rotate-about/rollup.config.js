import { babel } from '@rollup/plugin-babel';
import { terser } from "rollup-plugin-terser";

export default [
  {
    input: 'src/rotateAbout.js',
    output: {
      file: './p5.rotateAbout.js',
      format: 'iife',
    },
    plugins: [babel({ babelHelpers: 'bundled' })]
  }, {
    input: 'src/rotateAbout.js',
    output: {
      file: './p5.rotateAbout.min.js',
      format: 'iife',
    },
    plugins: [babel({ babelHelpers: 'bundled' }), terser()]
  }
]
