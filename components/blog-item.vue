<template>
  <li>
    <router-link :to="{ name: 'blogs-id', params: { id: blog.BlogID } }">
      {{blog.Title}}
      <span class="uk-align-right lg-no-margin-bottom uk-text-meta">
        by {{blog.Author.Username}} @ {{blog.PostTime | readableDate}}
      </span>
    </router-link>
  </li>
</template>
<style lang="less" scoped>
.lg-no-margin-bottom { margin-bottom: 0 }
</style>
<script>
export default {
  props: {
    blog: Object
  }
}
</script>
