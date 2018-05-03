const path = require("path");

module.exports = {
  sections: [
    {
      name: "Atomic Components",
      components: "components/**/*.js"
    }
  ],
  ignore: ["**/tests/**"],
  defaultExample: true,
  showCode: true,
  editorConfig: {
    lineNumbers: false
  },
  styleguideComponents: {
    Wrapper: path.join(__dirname, "/lib/Themewrapper.js")
  }
};
