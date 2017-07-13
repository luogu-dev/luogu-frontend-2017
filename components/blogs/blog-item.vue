<template>
  <li>
    <router-link :to="{ name: 'blogs-id', params: { id: blog.BlogID } }">
      <span>{{blog.Title}}</span>
    </router-link>
    <span class="uk-align-right lg-no-margin-bottom uk-text-meta"><user-link :user="blog.Author"/> @ {{blog.PostTime | readableDate}}</span>
  </li>
</template>
<script>
import UserLink from '~components/common/user-link'

export default {
  props: {
    blog: Object
  },
  components: { UserLink }
}
</script>
