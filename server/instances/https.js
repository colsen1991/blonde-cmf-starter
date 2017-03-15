const path = require('path');
const spdy = require('spdy');
const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const expUa = require('express-useragent');
const { isDev } = require('../utils/env');

function init() {
  const app = express();

  app.set('credentials', {
    cert: fs.readFileSync(path.resolve(`${__dirname}/../config/ssl/cert.pem`)),
    key: fs.readFileSync(path.resolve(`${__dirname}/../config/ssl/key.pem`))
  });

  if (isDev()) {
    const webpackConfig = require(`${__dirname}/../../webpack.config.dev.js`);
    const compiler = require('webpack')(webpackConfig);

    app.use(require('webpack-dev-middleware')(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath }));
    app.use(require('webpack-hot-middleware')(compiler));
  }

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(expUa.express());

  app.use('/js', express.static(path.resolve(`${__dirname}/../../web/js`)));
  app.use('/style', express.static(path.resolve(`${__dirname}/../../web/style`)));
  app.use('/img', express.static(path.resolve(`${__dirname}/../../web/img`)));

  app.get('*', (req, res, next) => {
    if (req.useragent.browser === 'IE' && Number.parseFloat(req.useragent.version) < 11)
      res.sendFile(path.resolve(`${__dirname}/../../web/incompatible-browser.html`));
    else
      next();
  });
  app.get('*', (req, res) => res.sendFile(path.resolve(`${__dirname}/../../web/index.html`)));

  app.use((error, req, res, ignore) => {
    res.status(500);

    if (req.xhr)
      res.json({ error: 'A bad thing happened.' });
    else
      res.sendFile(path.resolve(`${__dirname}/../../web/error.html`));
  });

  const httpsServer = spdy.createServer(app.get('credentials'), app);

  httpsServer.listen(isDev() ? 2443 : 443, () => {
    const { address, port } = httpsServer.address();

    console.log(`Node server listening at https://${address}:${port}`);
  });

  return app;
}

module.exports = init;
