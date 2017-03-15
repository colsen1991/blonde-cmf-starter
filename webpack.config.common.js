require('promise-polyfill');
require('whatwg-fetch');

const paths = {
  appEntry: `${__dirname}/web/js/app.js`,
  appOutput:`${__dirname}/build/web/js`,
  webJs: `${__dirname}/web/js`,
  nodeModules: `${__dirname}/node_modules/`
};

const config = {
  entry: [
    'promise-polyfill',
    'whatwg-fetch',
    paths.appEntry
  ],
  output: {
    filename: 'app.js',
    path: paths.appOutput,
    publicPath: '/js/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: paths.webJs,
        exclude: paths.nodeModules,
        loader: 'babel-loader'
      },
      {
        test: /\.vue$/,
        include: paths.webJs,
        exclude: paths.nodeModules,
        loader: 'vue-loader'
      },
      {
        test: /\.json$/,
        exclude: paths.nodeModules,
        loader: 'json-loader'
      }
    ]
  }
};

exports.paths = paths;
exports.config = config;
