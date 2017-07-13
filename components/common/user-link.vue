<template>
  <span>
    <router-link :class="'uk-link-reset lg-color-' /*+ user.level_color*/" :to="{ name: 'users-id', params: { id: user.UID } }">{{user.Username}}</router-link>
    <!-- <span v-if="user.isAdmin" class="uk-label uk-margin-small-left">管理员</span>
    <span v-if="!user.isValid" class="uk-label uk-margin-small-left">已封禁</span> -->
  </span>
</template>
<script>
export default {
  props: {
    user: Object
  }
}
</script>
