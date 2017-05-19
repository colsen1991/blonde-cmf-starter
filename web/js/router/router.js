import VueRouter from 'vue-router';

function init(Vue, routes) {
  Vue.use(VueRouter);

  return new VueRouter({
    mode: 'history',
    routes
  });
}

export default init;
