import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Points from '../views/Points.vue'
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
    path: "*",
    name: 'Error',
    component: Error
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
