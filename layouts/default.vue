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
  created() {
    //We set this on nuxtServerInit. In this way we get clientId from server.
    if (this.$store._clientId) {
      const bc = require('browser-cookies')
      bc.set('__client_id', this.$store._clientId, { domain: 'luogu.org' })
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
