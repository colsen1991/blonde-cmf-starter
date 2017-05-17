const { optimize: { UglifyJsPlugin }, DefinePlugin } = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { config } = require('./webpack.config.common');


module.exports = Object.assign({
  plugins: [
    new UglifyJsPlugin(),
    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new CopyWebpackPlugin([
      {
        from: 'server',
        to: '../../server'
      },
      {
        from: 'web/index.html',
        to: '..'
      },
      {
        from: 'web/error.html',
        to: '..'
      },
      {
        from: 'web/browser.html',
        to: '..'
      },
      {
        from: 'web/style',
        to: '../style'
      },
      {
        from: 'web/img',
        to: '../img'
      },
      {
        from: 'package.json',
        to: '../..'
      }
    ])
  ]
}, config);
