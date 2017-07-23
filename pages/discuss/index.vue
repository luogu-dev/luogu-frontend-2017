<template>
  <paged-list title="讨论" :items="posts" :loading="loading">
    <template slot="item" scope="props">
      <discuss-item :post="props.item"/>
    </template>
  </paged-list>
</template>
<script>
import PagedList from '~components/common/paged-list'
import DiscussItem from '~components/discuss/discuss-item'

import { setPage } from '~assets/js/page-helpers'

import { get } from '~plugins/lgapi'

export default {
  data(){ return { current: setPage(this.$route.hash), loading: false } },
  async asyncData({ route }){
    return { posts: await get(`/api/discuss/lists?page=${setPage(route.hash)}`) }
  },
  components: { PagedList, DiscussItem },
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
