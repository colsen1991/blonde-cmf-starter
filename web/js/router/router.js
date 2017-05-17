import Vue from 'vue';
import VueRouter from 'vue-router';
import blonde from '../components/blonde.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: blonde }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
