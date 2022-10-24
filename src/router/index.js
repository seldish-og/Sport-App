import { createRouter, createWebHistory } from 'vue-router'

import LoginView from '../views/LoginView.vue'
import SingUpView from '../views/SignUpView.vue'

const routes = [
  {
    path: '/login',
    name: 'signUp',
    component: SingUpView,
  },
  {
    path: '/sign_up',
    name: 'login',
    component: LoginView,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
