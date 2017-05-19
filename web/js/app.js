import Vue from 'vue';
import { sync } from 'vuex-router-sync';
import app from './components/app.vue';
import initServiceWorker from './sw/sw-reg';
import { isDev, isTest } from '../../utils/env';
import initRouter from './router/router';
import initStore from './store/store';
import getters from './store/getters';
import actions from './store/actions';
import mutations from './store/mutations';
import routes from './router/routes';
import initDatabase from './db/db';
import config from '../../blonde-config';

initServiceWorker();

const store = initStore(Vue, {}, getters, actions, mutations);

const router = initRouter(Vue, routes);

const database = initDatabase(config.database);

sync(store, router);

const vue = new Vue({
  el: '#app',
  render: f => f(app),
  router,
  store
});

if (isDev() || isTest()) {
  window.VueRouter = require('vue-router');
  window.router = router;
  window.Vuex = require('vuex');
  window.store = store;
  window.Vue = Vue;
  window.vue = vue;
  window.PouchDB = require('pouchdb-browser');
  window.database = database;
}
