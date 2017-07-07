<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <a class="navbar-item" href="http://bulma.io">
        <img src="../assets/img/logo_polydea.png" alt="Bulma: a modern CSS framework based on Flexbox" height="28">
      </a>
      <a class="navbar-item is-hidden-desktop" href="https://github.com/jgthms/bulma" target="_blank">
        <span class="icon" style="color: #333;">
          <i class="fa fa-github"></i>
        </span>
      </a>
      <a class="navbar-item is-hidden-desktop" href="https://twitter.com/jgthms" target="_blank">
        <span class="icon" style="color: #55acee;">
          <i class="fa fa-twitter"></i>
        </span>
      </a>
      <div class="navbar-burger burger" data-target="navMenuExample">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div id="navMenuExample" class="navbar-menu">
      <div class="navbar-start">
        <router-link to="/" class="btn-floating red navbar-item">Accueil</router-link>
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link  is-active" href="/documentation/overview/start/">
            Contenu
          </a>
          <div class="navbar-dropdown ">
            <router-link to="/clients" class="btn-floating red navbar-item">Clients</router-link>
            <router-link to="/realisations" class="btn-floating red navbar-item">Réalisations</router-link>
            <router-link to="/equipe" class="btn-floating red navbar-item">Equipe</router-link>
            <router-link to="/services" class="btn-floating red navbar-item">Services</router-link>
          </div>
        </div>
      </div>
      <div class="navbar-end">
        <a class="navbar-item" href="https://github.com" target="_blank">
          Lien 1
        </a>
        <a class="navbar-item" href="https://twitter.com" target="_blank">
          Lien 2
        </a>
    </div>
  </div>
</nav>
</template>
<script>
  export default {
    name: 'navbar'
  }
</script>
