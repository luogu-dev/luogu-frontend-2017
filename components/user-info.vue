<template>
  <header class="uk-comment-header uk-grid-medium uk-flex-middle" uk-grid>
    <div class="uk-width-auto">
      <img class="uk-comment-avatar uk-border-circle" :src="user.avatar_url" width="80" height="80" alt="">
    </div>
    <div class="uk-width-expand">
      <h4 class="uk-comment-title uk-margin-remove">
        <a :class="'uk-link-reset lg-color-' + user.level_color" href="#">{{user.username}}</a>
      </h4>
      <slot></slot>
    </div>
  </header>
</template>
<script>
export default {
  props: {
    user: Object
  }
}
</script>
<style lang="less" scoped>
  .uk-comment-avatar {
    height: 80px;
    width: 80px;
  }
</style>
