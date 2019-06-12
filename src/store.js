import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: '',
    currentScore: 0,
    error: null,
    frameNumber: 1,
  },
  mutations: {
    setUsername(state, name) {
      state.username = name;
    },

    setScore(state, score) {
      state.currentScore = score;
    },

    setError(state, message) {
      state.error = message;
    },

    clearError(state) {
      state.error = null;
    },

    incrementFrameNumber(state) {
      state.frameNumber++;
    }
  },
  actions: {
    fetchScore({ commit }, payload) {
      fetch('https://bowlingscoring.azurewebsites.net/api/CalculateBowlingScore/' + payload + '?code=IY8P0FLC7zyMfi7VWxRQBlcCoozjuz7a8y7ErrCXgdPA75yOxWhyng==')
      .then((response) => {
        return response.json();
      }).then((response) => {
        commit('clearError');
        
        if(response.error === null) {
          commit('setScore', response.score);
          commit('incrementFrameNumber');
        } else {
          commit('setError', response.error);
        }
      })
    },
  },
})
