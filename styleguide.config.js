const path = require('path');
const webpack = require('./webpack.base.config');

module.exports = {
  require: [
    path.join(__dirname, './styles/normalize.css'),
    path.join(__dirname, './styles/fonts/font-mallory.css')
  ],
  sections: [
    {
      name: 'Atomic Components',
      components: 'components/**/*.js'
    }
  ],
  ignore: ['**/tests/**', '**/lib/**'],
  defaultExample: true,
  webpackConfig: webpack,
  showCode: true,
  editorConfig: {
    lineNumbers: false
  },
  styleguideComponents: {
    Wrapper: path.join(__dirname, '/lib/Themewrapper.js')
  },
  assetsDir: path.join(__dirname, '/assets')
};
