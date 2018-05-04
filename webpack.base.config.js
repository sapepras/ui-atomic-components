/**
 * COMMON WEBPACK CONFIGURATION
 */

const path = require("path");

const baseConfig = () => ({
  entry: "index.js",
  output: {
    // Compile into js/build.js
    path: path.resolve(process.cwd(), "dist"),
    publicPath: "/",
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Transform all .js files required somewhere with Babel
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        // Preprocess our own .css files
        // This is the place to add your own loaders (e.g. sass/less etc.)
        // for a list of loaders, see https://webpack.js.org/loaders/#styling
        test: /\.css$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader?modules&importLoaders=1"]
      },
      {
        // Preprocess our own .scss files
        test: /\.scss/,
        exclude: /node_modules/,
        use: [
          "style-loader",
          "css-loader?modules&importLoaders=1",
          "sass-loader"
        ]
      },
      {
        test: /\.(eot|svg|otf|ttf|woff|woff2)$/,
        use: "file-loader"
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: [
          "file-loader",
          {
            loader: "image-webpack-loader",
            options: {
              progressive: true,
              optimizationLevel: 7,
              interlaced: false,
              pngquant: {
                quality: "65-90",
                speed: 4
              }
            }
          }
        ]
      },
      {
        test: /\.html$/,
        use: "html-loader"
      },
      {
        type: "javascript/auto",
        test: /\.json$/,
        use: "json-loader"
      },
      {
        test: /\.(mp4|webm)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 10000
          }
        }
      }
    ]
  },
  performance: {
    hints: false
  }
});

module.exports = baseConfig;
