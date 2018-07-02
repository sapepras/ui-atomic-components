/**
 * DEV WEBPACK CONFIGURATION
 */

const baseConfig = require('./webpack.base.config');

const devConfig = Object.assign(baseConfig(), {
    devtool: 'inline-source-maps',
    mode: 'development'


});


module.exports = devConfig;
