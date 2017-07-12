<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view></router-view>
  </div>
</template>

<script>
  import Vue from 'vue'
  import VueResource from 'vue-resource'
  import Navbar from './components/Navbar.vue'
  Vue.use(VueResource)
  Vue.http.options.root = 'http://thomas-sanlis.com/polydea/api'

  export default {
    name: 'app',
    components: {
      Navbar
    }
  }
</script>
