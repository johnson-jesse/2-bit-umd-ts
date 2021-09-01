import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import { visualizer } from 'rollup-plugin-visualizer';
import del from 'rollup-plugin-delete';
import fileSize from 'rollup-plugin-filesize';
import { uglify } from "rollup-plugin-uglify";

export default {
  input: "src/main.js",
  output: {
    file: "dist/bundle.js",
    format: "umd",
    name: "2BitUmd"
  },
  plugins: [
    resolve({moduleDirectory: ['node_modules']}),
    babel({babelHelpers: 'bundled' }),
    visualizer({filename:'meta/stats.html'}),
    del({ targets: ['dist/*', 'meta/*'] }),
    fileSize(),
    uglify()
  ]
};
