const path = require("path");
const webpack = require("./webpack.base.config");

module.exports = {
  require: [path.join(__dirname, "./styles/normalize.css")],
  sections: [
    {
      name: "Atomic Components",
      components: "components/**/*.js"
    }
  ],
  ignore: ["**/tests/**", "**/components/**/lib/*.js"],
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
