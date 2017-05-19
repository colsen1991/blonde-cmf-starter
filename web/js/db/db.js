import PouchDB from 'pouchdb-browser';
import { isDev, isTest } from '../../../utils/env';

export function getBaseDBUrl() {
  return `${window.location.protocol}//${window.location.hostname + (isDev() || isTest() ? ':3000' : '')}`;
}

function init(config) {
  const baseDbUrl = getBaseDBUrl();

  return config.databases.reduce((acc, { name, type }) => {
    if (type === 'public') {
      const local = new PouchDB(name);
      const remote = new PouchDB(`${baseDbUrl}/${name}`);

      local.replicate.from(remote, {
        live: true,
        retry: true
      });

      acc[ name ] = local;
    }

    return acc;
  }, {});
}

export default init;
