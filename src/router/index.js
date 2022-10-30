import { createRouter, createWebHistory } from 'vue-router'
import StartPage from '../components/StartPage.vue'
import WellcomeBack from '../components/WellcomeBack.vue'
import CreateAccaunt from "../components/CreateAccaunt"
import ForgotPassword from "../components/ForgotPassword"
import CheckEmail from "../components/CheckEmail"
import CreatePassword from "../components/CreatePassword"


const routes = [
  {
    path: '/',
    name: 'start',
    component: StartPage
  },
  {
    path: '/wellcome',
    name: 'wellcome',
    component: WellcomeBack
  },
  {
    path: '/create',
    name: 'create',
    component: CreateAccaunt
  },
  {
    path: '/forgot',
    name: 'forgot',
    component: ForgotPassword
  },
  {
    path: '/check',
    name: 'check',
    component: CheckEmail
  },
  {
    path: "/password",
    name:"password",
    component: CreatePassword
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router