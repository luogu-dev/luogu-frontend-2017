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

import { get } from '~plugins/lgapi'

export default {
  async asyncData(){
    return { contests: await get(`/api/contest/lists`) }
  },
  components: { PageSwitcher, ContestItem }
}
</script>
