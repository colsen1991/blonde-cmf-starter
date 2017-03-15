const express = require('express');
const http = require('http');
const { isDev } = require('../utils/env');

function init() {
  const app = express();

  app.get('*', (req, res) =>
    res.redirect(`https://${isDev() ? req.host.substr(0, req.host.indexOf(':')) + ':2443' : req.host}${req.url}`)
  );

  const httpServer = http.createServer(app);

  httpServer.listen(isDev() ? 2080 : 80, () => {
    const { address, port } = httpServer.address();

    console.log(`Node server listening at http://${address}:${port}`);
  });

  return app;
}

module.exports = init;
