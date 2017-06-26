<template>
  <div>
    <nav-bar></nav-bar>
    <div class="uk-container"><nuxt/></div>
    <a href="#" class="uk-position-fixed lg-totop" uk-totop uk-scroll></a>
    <footer></footer>
  </div>
</template>

<script>
import NavBar from '~components/navbar'

export default {
  components: { NavBar },
  beforeMount() {
    //We set this on nuxtServerInit. In this way we get clientId from server.
    console.log(this.$store.state)
    if (this.$store.state._clientId) {
      console.log('found clientId from server')
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
