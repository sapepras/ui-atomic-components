/**
 * DIST WEBPACK CONFIGURATION
 * configuration is used to pack and publish the modules to npm repo
 */

const baseConfig = require('./webpack.base.config');

const distConfig = Object.assign(baseConfig(), {
  mode: 'production',
  devtool: 'source-map'
});

module.exports = distConfig;
