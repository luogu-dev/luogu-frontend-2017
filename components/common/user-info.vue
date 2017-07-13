<template>
  <header class="uk-comment-header uk-grid-medium uk-flex-middle" uk-grid>
    <div class="uk-width-auto">
      <img class="uk-comment-avatar uk-border-circle" :src="`//cdn.luogu.org/upload/usericon/${user.UID}.png`" width="80" height="80" alt="">
    </div>
    <div class="uk-width-expand">
      <h4 class="uk-comment-title uk-margin-remove">
        <router-link :class="'uk-link-reset lg-color-' + user.level_color" :to="{ name: 'users-id', params: { id: user.UID } }">{{user.Username}}</router-link>
        <span v-if="user.isAdmin" class="uk-label uk-margin-small-left">管理员</span>
        <span v-if="!user.isValid" class="uk-label uk-margin-small-left">已封禁</span>
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
