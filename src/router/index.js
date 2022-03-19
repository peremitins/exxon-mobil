import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Points from '../views/Points.vue'
import Settings from '../views/Settings.vue'
import Error from '../views/Error.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/points/:id',
    name: 'Points',
    component: Points
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings
  },
  {
    path: "*",
    name: 'Error',
    component: Error
  }
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router
