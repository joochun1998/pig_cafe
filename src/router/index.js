import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import second from '../views/second'
import Third from '../views/Third'
import Typography from '../views/Typography'
import Breakpoint from '../views/Typography'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/second',
    name: 'second',
    component: second
  },
  {
    path: '/Third',
    name: 'Third',
    component: Third
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {path: '/Typography',
    name: 'Typography',
    component: Typography
  },
  {path: '/Breakpoint',
    name: 'Breakpoint',
    component: Breakpoint
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
