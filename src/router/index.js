import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Demo1 from '../views/demo1.vue'
import Demo2 from '../views/demo2_EventMethod.vue'
import Demo3 from '../views/demo3_data.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/demo1',
    name: 'demo1',
    component: Demo1
  },
  {
    path:'/demo2',
    name: 'demo2',
    component: Demo2
  },
  {
    path:'/demo3',
    name: 'demo3',
    component: Demo3
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
