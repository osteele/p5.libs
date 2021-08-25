import { babel } from '@rollup/plugin-babel';
import { terser } from "rollup-plugin-terser";

export default [
  {
    input: 'src/layers.js',
    output: {
      file: './p5.layers.js',
      format: 'iife',
    },
    plugins: [babel({ babelHelpers: 'bundled' })]
  }, {
    input: 'src/layers.js',
    output: {
      file: './p5.layers.min.js',
      format: 'iife',
    },
    plugins: [babel({ babelHelpers: 'bundled' }), terser()]
  }
]
