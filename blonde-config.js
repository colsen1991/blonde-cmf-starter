const { isDev, isTest } = require('./utils/env');

const config = {
  server: {
    /* TODO Server config */
    /* https://expressjs.com/en/4x/api.html */
    middleware: [],
    cors: true,
  },
  database: {
    /* TODO Db config */
    /* https://github.com/pouchdb/pouchdb-server#api */
    /* https://pouchdb.com/api.html#create_database */
    /* https://pouchdb.com/api.html#defaults */
    enable: true,
    memory: isTest() || isDev(),
    prefix: './_db/',
    logPath: './_db/log.txt',
    debug: false,
    plugins: [],
    databases: [
      {
        name: 'blonde',
        type: 'public',
        compaction: false,
        model: {
          test: 'text'
        }
      }
    ]
  },
  frontend: {
    /* TODO Frontend config */
  },
  admin: {
    /* TODO Admin config */
  }
};

module.exports = config;
