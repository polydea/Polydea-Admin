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
                    <input v-model="credentials.username" class="input email-input" type="text" placeholder="thomas@polydea.com">
                    <span class="icon user">
                      <i class="fa fa-user"></i>
                    </span>
                  </p>
                  <p class="control has-icon has-icon-right">
                    <input v-model="credentials.password" class="input password-input" type="password" placeholder="●●●●●●●">
                    <span class="icon user">
                      <i class="fa fa-lock"></i>
                    </span>
                  </p>
                  <p class="control login__button">
                    <button class="button is-success is-outlined is-large is-fullwidth button__polydea" @click="submit()">Connexion</button>
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
  import Vue from 'vue'
  import VueResource from 'vue-resource'
  Vue.use(VueResource)
  Vue.http.options.root = 'http://thomas-sanlis.com/polydea/api'

  export default {
    name: 'login',
    data () {
      return {
        credentials: {
          username: '',
          password: ''
        },
        error: ''
      }
    },
    methods: {
      submit () {
        var credentials = {
          username: this.credentials.username,
          password: this.credentials.password
        }
        this.getToken(credentials)
      },
      getToken: function (credentials) {
        Vue.http.post('token', {grant_type: 'client_credentials', client_id: 'admin', client_secret: '5z28eE@?DnCD'}).then(response => {
          this.getUser(response.data.access_token, credentials)
        })
      },
      getUser: function (currentToken, credentials) {
        Vue.http.get('http://thomas-sanlis.com/polydea/api/user/' + credentials.username + '/' + credentials.password, { headers: { authorization: 'Bearer ' + currentToken } }).then(response => {
          if (response.data[0]) {
            console.log('Authentifié !')
          } else {
            console.log('Mauvaise authentification')
          }
        })
      }
    }
  }
</script>
