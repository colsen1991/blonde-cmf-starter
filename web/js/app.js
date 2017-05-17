import Vue from 'vue';
import Test from './app.vue';
import initServiceWorker from './swreg';

initServiceWorker();

new Vue({
  el: '#app',
  render: (h) => h(Test)
});
