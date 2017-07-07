import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/Home'
import Login from '@/components/pages/Login'
import Clients from '@/components/pages/Clients'
import Work from '@/components/pages/Work'
import Team from '@/components/pages/Team'
import Services from '@/components/pages/Services'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/clients',
      name: 'Clients',
      component: Clients
    },
    {
      path: '/realisations',
      name: 'work',
      component: Work
    },
    {
      path: '/equipe',
      name: 'Team',
      component: Team
    },
    {
      path: '/services',
      name: 'Services',
      component: Services
    }
  ]
})
