import Vuex from 'vuex';

function init(Vue, initialState, getters, actions, mutations) {
  Vue.use(Vuex);

  return new Vuex.Store({
    state: initialState,
    getters,
    actions,
    mutations
  });
}

export default init;
