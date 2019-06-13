import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: '',
    scoreString: '',
    currentScore: 0,
    error: null,
    frameNumber: 1,
  },
  mutations: {
    setUsername(state, name) {
      state.username = name;
    },

    setScoreString(state, string) {
      state.scoreString = string;
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
    },

    resetFrameNumber(state) {
      state.frameNumber = 1;
    },

    clearScores(state) {
      state.currentScore = 0;
      state.frameNumber = 1;
      state.scoreString = '';
      state.error = null;
    }
  },
  actions: {
    fetchScore({ commit }, payload) {
      fetch('https://bowlingscoring.azurewebsites.net/api/CalculateBowlingScore/' + payload.string + '?code=IY8P0FLC7zyMfi7VWxRQBlcCoozjuz7a8y7ErrCXgdPA75yOxWhyng==')
      .then((response) => {
        return response.json();
      }).then((response) => {
        commit('clearError');

        if(response.error === null) {
          commit('setScoreString', payload.string);
          commit('setScore', response.score);
          if(payload.increment === true){
            commit('incrementFrameNumber');
          }
        } else {
          commit('setError', response.error);
        }
      })
    },
  },
})
