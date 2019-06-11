import Vue from 'vue'
import Router from 'vue-router'
import Main from './pages/Main.vue'
import Welcome from './components/Welcome.vue'
import Scores from './pages/Scores.vue'

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
        }
      ]
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
