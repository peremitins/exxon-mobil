import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import PointsM1C from '../views/PointsM1C.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/pointsm1c',
    name: 'PointsM1C',
    component: PointsM1C
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
