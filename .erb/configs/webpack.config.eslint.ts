/* eslint import/no-unresolved: off, import/no-self-import: off */

import path from 'path';
import TsconfigPathsPlugins from 'tsconfig-paths-webpack-plugin';
import webpackPaths from './webpack.paths';

const config = require('./webpack.config.renderer.dev').default;

config.resolve = {
  extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
  modules: [webpackPaths.srcPath, 'node_modules'],
  // There is no need to add aliases here, the paths in tsconfig get mirrored
  plugins: [new TsconfigPathsPlugins()],
  alias: {
    '@': path.join(__dirname, '../../src/renderer'),
    '@/main': path.join(__dirname, '../../src/main'),
  },
};

module.exports = config;
