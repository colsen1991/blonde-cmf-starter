const ExpressPouchDB = require('express-pouchdb');
const PouchDB = require('pouchdb-node');
const mkdirp = require('mkdirp');
const { databases: blondeDatabases } = require('./blonde-db-config');

function init(config) {
  const { memory, prefix, logPath, plugins, debug, databases } = config;

  mkdirp('_db');

  if (memory) PouchDB.plugin(require('pouchdb-adapter-memory'));

  const BlondePouchDB = PouchDB.defaults({
    adapter: memory ? 'memory' : 'leveldb',
    prefix
  });

  if (plugins && plugins.length) plugins.forEach(plugin => BlondePouchDB.plugin(plugin));

  if (debug) BlondePouchDB.debug.enable('*');

  const api = ExpressPouchDB(BlondePouchDB, {
    mode: 'fullCouchDB',
    inMemoryConfig: true,
    logPath,
    overrideMode: {
      exclude: [
        'routes/authentication',
        'routes/authorization',
        'routes/session'
      ]
    }
  });

  const allDatabases = databases.concat(blondeDatabases);

  const databaseInstances = allDatabases.reduce((acc, { name, type, compaction, model }) => {
    acc[ name ] = {
      db: new BlondePouchDB(name, { auto_compaction: compaction }), // eslint-disable-line camelcase
      type,
      model
    };

    return acc;
  }, {});

  return {
    instance: BlondePouchDB,
    api,
    dbs: databaseInstances
  }
}

module.exports = init;
