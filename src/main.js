// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import Bulma from 'bulma'
import auth from './auth'
import 'bulma/css/bulma.css'
import './assets/scss/main.scss'
import 'font-awesome/css/font-awesome.css'

Vue.use(Bulma)
Vue.use(router)
Vue.use(VueResource)

Vue.config.productionTip = false

auth.checkAuth()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
