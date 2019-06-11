import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: '',
    currentScore: 0,
  },
  mutations: {
    setUsername(state, name) {
      state.username = name;
    },

    setScore(state, score) {
      state.currentScore += score;
    }
  },
  actions: {
    fetchScore({ commit }, payload) {
      fetch('https://bowlingscoring.azurewebsites.net/api/CalculateBowlingScore/' + payload + '?code=IY8P0FLC7zyMfi7VWxRQBlcCoozjuz7a8y7ErrCXgdPA75yOxWhyng==')
      .then((response) => {
        if(!response.ok) {
          throw Error(response.statusText);
        }
        return response;
      }).then((response) => {
        let data = response.json();
        commit('setScore', data.score);
      })
      .catch((err) => {
        console.log(err);
      })
    },
  },
})
