const path = require("path");
const webpack = require("./webpack.base.config");

module.exports = {
  sections: [
    {
      name: "Atomic Components",
      components: "components/**/*.js"
    }
  ],
  ignore: ["**/tests/**"],
  defaultExample: true,
  webpackConfig: webpack,
  showCode: true,
  editorConfig: {
    lineNumbers: false
  },
  styleguideComponents: {
    Wrapper: path.join(__dirname, "/lib/Themewrapper.js")
  }
};
