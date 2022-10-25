import { createRouter, createWebHistory } from 'vue-router'

import LoginView from '../views/LoginView.vue'
import SingUpView from '../views/SignUpView.vue'
import CommandsView from '../views/CommandsView.vue'
import NewsView from '../views/NewsView.vue'
import NewsCardView from '../views/NewsCardView.vue'
import CommandView from '../views/CommandView.vue'
import UploadPhotoView from '../views/UploadPhotoView.vue'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: LoginView,
  },
  {
    path: '/sign_up',
    name: 'signUp',
    component: SingUpView,
  },
  {
    path: '/commands',
    name: 'commands',
    component: CommandsView,
  },
  {
    path: '/news',
    name: "news",
    component: NewsView
  },
  {
    path: "/news-item/:id",
    name: "news-item",
    component: NewsCardView,
  },
  {
    path: "/command/:id",
    name: "command",
    component: CommandView,
  },
  {
    path: "/uploadphoto",
    name: "uploadphoto",
    component: UploadPhotoView,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
