require('promise-polyfill');
require('whatwg-fetch');

const paths = {
  appEntry: `${__dirname}/web/js/app.js`,
  appOutput: `${__dirname}/build/web/js`,
  web: `${__dirname}/web`,
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
        loader: 'babel-loader'
      },
      {
        test: /\.vue$/,
        include: paths.webJs,
        loader: 'vue-loader'
      },
      {
        test: /\.json$/,
        include: paths.web,
        loader: 'json-loader'
      }
    ]
  }
};

exports.paths = paths;
exports.config = config;
