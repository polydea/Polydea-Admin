<template>
  <div class="login columns">
    <div class="column is-7 is-hidden-mobile hero-banner login__left">
      <section class="hero is-fullheight is-dark">
        <div class="hero-body">
          <div class="container">
            <div class="has-text-right">
              <h1 class="title is-1">Connexion</h1> <br>
              <p class="title is-3">Panneau d'administration</p>
            </div>
          </div>
        </div>
      </section>  
    </div>
    <div class="column is-5 login__right">
      <section class="hero is-fullheight">
        <div class="hero-heading">
          <div class="section has-text-centered">
            <a href="http://polydea.com"><img src="../../assets/img/logo_polydea.png" alt="logo polydea" width="150px"></a>
          </div>
        </div>
        <div class="hero-body">
          <div class="container">
            <div class="columns">
              <div class="column is-8 is-offset-2">
                <div class="login-form">
                  <p class="control has-icon has-icon-right">
                    <input class="input email-input" type="text" placeholder="thomas@polydea.com">
                    <span class="icon user">
                      <i class="fa fa-user"></i>
                    </span>
                  </p>
                  <p class="control has-icon has-icon-right">
                    <input class="input password-input" type="password" placeholder="●●●●●●●">
                    <span class="icon user">
                      <i class="fa fa-lock"></i>
                    </span>
                  </p>
                  <p class="control login__button">
                    <button class="button is-success is-outlined is-large is-fullwidth button__polydea">Connexion</button>
                  </p>
                </div>
                <div class="section forgot-password">
                  <p class="has-text-centered">
                    <a href="#">Mot de passe oublié ?</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>  
    </div>
  </div>
</template>

<script>
  export default {
    name: 'login'
  }
</script>
