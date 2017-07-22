<template>
  <div>
    <h1 class="lg-float-title">讨论</h1>
    <div class="uk-card uk-card-default uk-card-body uk-margin">
      <div v-show="loading" uk-spinner></div>
      <ul v-show="!loading" class="uk-list uk-list-divider">
        <discuss-item v-for="post in posts.result" :key="post.PostID" :post="post"/>
      </ul>
      <page-switcher :itemCount="posts.count"/>
    </div>
  </div>
</template>
<script>
import PageSwitcher from '~components/common/page-switcher'
import DiscussItem from '~components/discuss/discuss-item'

import { setPage } from '~assets/js/page-helpers'

import { get } from '~plugins/lgapi'

export default {
  data(){ return { current: setPage(this.$route.hash), loading: false } },
  async asyncData({ route }){
    return { posts: await get(`/api/discuss/lists?page=${setPage(route.hash)}`) }
  },
  components: { PageSwitcher, DiscussItem },
  watch: {
    async $route({hash}){
      this.current = setPage(hash)
      this.loading = true
      this.blogs = await get(`/api/discuss/lists?page=${this.current}`)
      this.loading = false
    }
  }
}
</script>
