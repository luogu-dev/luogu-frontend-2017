<template>
  <div>
    <nav-bar></nav-bar>
    <div class="uk-container"><nuxt/></div>
    <a href="#" class="uk-position-fixed lg-totop" uk-totop uk-scroll></a>
    <lg-footer></lg-footer>
  </div>
</template>

<script>
import NavBar from '~components/layout/nav-bar'
import LgFooter from '~components/layout/lg-footer'
import axios from 'axios'

export default {
  components: { NavBar, LgFooter },
  beforeMount() {
    //We set this on nuxtServerInit. In this way we get clientId from server.
    console.log(this.$store.state)
    if (this.$store.state._apiBaseURL) axios.defaults.baseURL = this.$store.state._apiBaseURL
    if (this.$store.state._clientId) {
      console.log('found clientId from server:', this.$store.state._clientId)
      const bc = require('browser-cookies')
      bc.set('__client_id', this.$store.state._clientId, { domain: 'luogu.org' })
    }
  }
}
</script>

<style lang="less">
@import "~assets/css/lg-theme";

.lg-totop {
  right: 10%;
  bottom: 10%;
}
/*
.uk-container {
  min-height: 1024px; // Workaround for sticker component
  /*
   The sticker component would cause
   [Vue warn]: The client-side rendered virtual DOM tree is not matching server-rendered content.
   If there is no enough page height for the sticker to function.
   So we manully apply a min-height there to make this page scrollable for most users.

}
*/
</style>
