import Vue from 'vue'
import Router from 'vue-router'
import Main from './pages/Main.vue'
import Welcome from './components/Welcome.vue'
import Scores from './pages/Scores.vue'
import FinalScore from './pages/FinalScore.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Main,
      children: [
        {
          path: '/',
          name: 'home',
          component: Welcome,
        },
        {
          path: '/scores',
          name: 'scores',
          component: Scores,
        },
        {
          path: '/final',
          name: 'final',
          component: FinalScore,
        },
      ]
    },
  ]
})
