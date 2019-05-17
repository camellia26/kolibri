import * as actions from './actions';

function defaultState() {
  return {
    subscriptionModalShown: '',
  };
}

export default {
  namespaced: true,
  state: defaultState(),
  mutations: {
    SET_STATE(state, payload) {
      Object.assign(state, payload);
    },
    RESET_STATE(state) {
      Object.assign(state, defaultState());
    },
    SET_SUBSCRIPTION_MODAL(state, modalName) {
      state.subscriptionModalShown = modalName;
    },
  },
  actions,
};
