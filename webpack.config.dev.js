const { HotModuleReplacementPlugin, NoEmitOnErrorsPlugin, DefinePlugin } = require('webpack');
const { config } = require('./webpack.config.common');

module.exports = Object.assign({
  devtool: 'source-map',
  plugins: [
    new HotModuleReplacementPlugin(),
    new NoEmitOnErrorsPlugin(),
    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ]
}, config)
