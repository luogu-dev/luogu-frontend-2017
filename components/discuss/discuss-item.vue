<template>
  <li>
    <router-link :to="{ name: 'discuss-id', params: { id: post.PostID } }">
      <span>{{post.Title}}</span>
    </router-link>
    <span class="uk-align-right lg-no-margin-bottom uk-text-meta"><user-link :user="post.Author"/> @ <!--{{post.PostTime | readableDate}}--></span>
  </li>
</template>
<script>
import UserLink from '~components/common/user-link'

export default {
  props: {
    post: Object
  },
  components: { UserLink }
}
</script>
