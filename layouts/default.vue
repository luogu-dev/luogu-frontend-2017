<template>
  <div>
    <nav-bar></nav-bar>
    <div class="uk-container"><nuxt/></div>
    <a href="#" class="uk-position-fixed lg-totop" uk-totop uk-scroll></a>
  </div>
</template>

<script>
import NavBar from '~components/navbar'

export default {
  components: { NavBar }
}
</script>

<style lang="less">
@import "~assets/css/lg-theme";

.lg-totop {
  right: 10%;
  bottom: 10%;
}

</style>
