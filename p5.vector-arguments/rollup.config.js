import { babel } from '@rollup/plugin-babel';
import { terser } from "rollup-plugin-terser";

export default [
  {
    input: 'src/vector-arguments.js',
    output: {
      file: './p5.vector-arguments.js',
      format: 'iife',
    },
    plugins: [babel({ babelHelpers: 'bundled' })]
  },
  {
    input: 'src/vector-arguments.js',
    output: {
      file: './p5.vector-arguments.min.js',
      format: 'iife',
    },
    plugins: [babel({ babelHelpers: 'bundled' }), terser()]
  }]
