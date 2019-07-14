import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Accommodation from './components/Accommodation.vue'
import Yard from './components/Yard.vue'
import MeetUp3G from './components/MeetUp3G.vue'
import Gallery from "./components/Gallery"

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    /*  */
    {
      path: '/Accommodation',
      name: 'accommodation',
      component: Accommodation
    },
    {
      path: '/Yard',
      name: 'yard',
      component: Yard
    },
    {
      path: '/MeetUp3G',
      name: 'meetUp3G',
      component: MeetUp3G
    },
    {
      path: '/Gallery',
      name: 'gallery',
      component: Gallery
    }

  ]
})
