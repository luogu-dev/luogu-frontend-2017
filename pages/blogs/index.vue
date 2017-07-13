<template>
  <div>
    <h1 class="lg-float-title">博客</h1>
    <div class="uk-card uk-card-default uk-card-body uk-margin">
      <div v-show="loading" uk-spinner></div>
      <ul v-show="!loading" class="uk-list uk-list-divider">
        <blog-item v-for="blog in blogs.result" :key="blog.BlogID" :blog="blog"/>
      </ul>
      <page-switcher :itemCount="blogs.count"/>
    </div>
  </div>
</template>
<script>
import PageSwitcher from '~components/page-switcher'
import BlogItem from '~components/blog-item'

import { setPage } from '~assets/js/page-helpers'

import { get } from '~plugins/lgapi'

export default {
  data(){ return { current: setPage(this.$route.hash), loading: false } },
  async asyncData({ route }){
    return { blogs: await get(`/api/blog/lists?page=${setPage(route.hash)}`) }
  },
  components: { PageSwitcher, BlogItem },
  watch: {
    async $route({hash}){
      this.current = setPage(hash)
      this.loading = true
      this.blogs = await get(`/api/blog/lists?page=${this.current}`)
      this.loading = false
    }
  }
}
</script>
