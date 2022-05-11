const { merge } = require('webpack-merge');
const common = require('./webpack.config.js');
const TerserPlugin = require("terser-webpack-plugin");
const HtmlInlineScriptPlugin  = require("html-inline-script-webpack-plugin");

module.exports = merge(common, {
  mode: 'production',
  stats: 'errors-only',
  optimization: {
    usedExports: true,
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
        terserOptions: {
          format: {
            comments: false
          }
        }
      })
    ],
  },
  plugins: [
    new HtmlInlineScriptPlugin()
  ]
});
