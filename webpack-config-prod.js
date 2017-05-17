const { optimize: { UglifyJsPlugin }, DefinePlugin } = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { config } = require('./webpack-config-common');

module.exports = Object.assign({
  plugins: [
    new UglifyJsPlugin(),
    new DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new CopyWebpackPlugin([
      { from: 'server', to: '../../server' },
      { from: 'web/index.html', to: '..' },
      { from: 'web/50x.html', to: '..' },
      { from: 'web/old-browser.html', to: '..' },
      { from: 'web/404.html', to: '..' },
      { from: 'web/browserconfig.xml', to: '..' },
      { from: 'web/robots.txt', to: '..' },
      { from: 'web/sw.js', to: '..' },
      { from: 'web/humans.txt', to: '..' },
      { from: 'web/manifest.json', to: '..' },
      { from: 'web/sitemap.xml', to: '..' },
      { from: 'web/style', to: '../style' },
      { from: 'web/img', to: '../img' },
      { from: 'package.json', to: '../..' }
    ])
  ]
}, config);
