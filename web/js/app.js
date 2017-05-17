import Vue from 'vue';
import { sync } from 'vuex-router-sync';
import app from './components/app.vue';
import initServiceWorker from './sw/sw-reg';
import { isDev, isTest } from '../../utils/env';
import router from './router/router';
import store from './store/store';

initServiceWorker();

sync(store, router);

const vue = new Vue({
  el: '#app',
  render: f => f(app),
  router,
  store
});

if (isDev() || isTest()) {
  window.store = store;
  window.router = router;
  window.vue = vue;
}
