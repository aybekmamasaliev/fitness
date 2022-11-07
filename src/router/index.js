import { createRouter, createWebHistory } from 'vue-router'
import StartPage from '../components/StartPage.vue'
import LoginPage from '../components/LoginPage.vue'
import CreateAccaunt from "../components/CreateAccaunt"
import ForgotPassword from "../components/ForgotPassword"
import CheckEmail from "../components/CheckEmail"
import CreatePassword from "../components/CreatePassword"
import ProfileFitness from "../components/ProfileFitness"
import ScheduleUser from "../components/ScheduleUser"
import ScheduleAppointment from "../components/ScheduleAppointment"
import ScheduleCancel from "../components/ScheduleCancel"


const routes = [
  {
    path: '/',
    name: 'start',
    component: StartPage
  },
  {
    path: '/loginpage',
    name: 'loginpage',
    component: LoginPage
  },
  {
    path: '/register',
    name: 'register',
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
    path: "/password/:token",
    name:"password",
    component: CreatePassword
  },
  {
    path: "/profile",
    name:"profile",
    component: ProfileFitness
  },
  {
    path: "/schedule",
    name:"schedule",
    component: ScheduleUser
  },
  {
    path: "/scheduleappo",
    name:"scheduleappo",
    component: ScheduleAppointment
  },
  {
    path: "/schedulecancel",
    name:"schedulecancel",
    component: ScheduleCancel
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router