import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import { visualizer } from 'rollup-plugin-visualizer';
import del from 'rollup-plugin-delete';
import fileSize from 'rollup-plugin-filesize';
import { uglify } from "rollup-plugin-uglify";
import typescript from 'rollup-plugin-typescript2';

export default {
  input: "src/main.ts",
  output: {
    file: "dist/bundle.js",
    format: "umd",
    name: "2BitUmd"
  },
  plugins: [
    del({ targets: ['dist/*', 'meta/*'] }),
    resolve({moduleDirectories: ['node_modules']}),
    babel({babelHelpers: 'bundled' }),
    typescript(),
    uglify(),
    visualizer({filename:'meta/stats.html'}),
    fileSize(),
  ]
};
