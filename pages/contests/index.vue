<template>
  <div>
    <h1 class="lg-float-title">比赛</h1>
    <div class="uk-card uk-card-default uk-card-body uk-margin">
      <ul class="uk-list uk-list-divider">
        <contest-item v-for="contest in contests.result" :key="contest.TID" :contest="contest"/>
      </ul>
      <page-switcher :itemCount="contests.count"/>
    </div>
  </div>
</template>
<script>
import PageSwitcher from '~components/page-switcher'
import ContestItem from '~components/contest-item'

import { setPage } from '~assets/js/page-helpers'

import { get } from '~plugins/lgapi'

export default {
  data(){ return { current: setPage(this.$route.hash) } },
  async asyncData({ route }){
    return { contests: await get(`/api/contest/lists?page=${setPage(route.hash)}`) }
  },
  components: { PageSwitcher, ContestItem },
  watch: {
    async $route({hash}){
      this.current = setPage(hash)
      this.contests = await get(`/api/contest/lists?page=${this.current}`)
    }
  }
}
</script>
