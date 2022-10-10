import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from '../views/register.vue'
import Index from '../views/index.vue'
import Login from '../views/login.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: "/register",
    component: Register,
  },
  {
    path: "/index",
    component: Index,
  },
  {
    path: "/login",
    component: Login,
  },
]

const router = new VueRouter({
  routes
})

export default router
