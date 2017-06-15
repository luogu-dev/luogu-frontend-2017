<template>
  <li>
    <a href="#">
      <span class="uk-icon uk-margin-small-right" uk-icon="icon: grid"></span>应用
    </a>
    <div class="uk-width-large" uk-dropdown>
      <div class="uk-dropdown-grid uk-child-width-1-3@m" uk-grid>
        <div v-for="{ title, icon } in apps">
          <div class="uk-tile uk-tile-default uk-padding-small lg-app-icon">
            <span class="uk-position-top-center" :uk-icon="'icon: ' +  icon + '; ratio: 2'"></span>
            <p class="uk-position-bottom-center uk-margin-top">{{title}}</p>
          </div>
        </div>
      </div>
    </div>
  </li>
</template>
<script>
export default {
  props: {
    apps: Array
  }
}
</script>
<style lang="less">
.lg-app-icon {
  height: 4em;
}
</style>
