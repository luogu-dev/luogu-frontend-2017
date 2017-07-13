<template>
  <div>
    <h1 class="lg-float-title">比赛</h1>
    <div class="uk-card uk-card-default uk-card-body uk-margin">
      <div v-show="loading" uk-spinner></div>
      <ul v-show="!loading" class="uk-list uk-list-divider">
        <contest-item v-for="contest in contests.result" :key="contest.TID" :contest="contest"/>
      </ul>
      <page-switcher :itemCount="contests.count"/>
    </div>
  </div>
</template>
<script>
import PageSwitcher from '~components/common/page-switcher'
import ContestItem from '~components/contests/contest-item'

import { setPage } from '~assets/js/page-helpers'

import { get } from '~plugins/lgapi'

export default {
  data(){ return { current: setPage(this.$route.hash), loading: false } },
  async asyncData({ route }){
    return { contests: await get(`/api/contest/lists?page=${setPage(route.hash)}`) }
  },
  components: { PageSwitcher, ContestItem },
  watch: {
    async $route({hash}){
      this.current = setPage(hash)
      this.loading = true
      this.contests = await get(`/api/contest/lists?page=${this.current}`)
      this.loading = false
    }
  }
}
</script>
