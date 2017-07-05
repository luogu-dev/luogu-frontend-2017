<template>
  <nav class="uk-navbar-container uk-margin uk-navbar" uk-navbar>
    <div class="uk-navbar-left">

      <router-link class="uk-navbar-item uk-logo" to="/">Luogu</router-link>

      <ul class="uk-navbar-nav uk-visible@m">
        <li>
          <a href="#">
            <span class="uk-icon uk-margin-small-right" uk-icon="icon: table"></span>题目</a>
        </li>
        <li>
          <a href="#">
            <span class="uk-icon uk-margin-small-right" uk-icon="icon: social"></span>比赛</a>
        </li>
        <li>
          <a href="#">
            <span class="uk-icon uk-margin-small-right" uk-icon="icon: comments"></span>讨论</a>
        </li>
        <li>
          <a href="#">
            <span class="uk-icon uk-margin-small-right" uk-icon="icon: bookmark"></span>博客</a>
        </li>
      </ul>

    </div>
    <div class="uk-navbar-right">
      <div class="uk-navbar-item uk-visible@m">
        <form class="uk-search uk-search-navbar">
          <a class="uk-search-icon-flip" uk-search-icon></a>
          <input class="uk-search-input" type="search" placeholder="搜索">
        </form>
      </div>
      <ul class="uk-navbar-nav">
        <app-dropdown :apps="apps" class="uk-visible@m"/>
        <li v-if="$store.state._currentUser">
          <a href="#">
            <span class="uk-icon uk-margin-small-right" uk-icon="icon: bell"></span>通知
          </a>
        </li>
        <user-dropdown v-if="$store.state._currentUser" :user="$store.state._currentUser" />
        <login-dropdown v-else />
        <li class="uk-hidden@m">
          <a href="#offcanvas" uk-toggle>
            <span class="uk-icon" uk-icon="icon: menu"></span>
          </a>
        </li>
      </ul>
    </div>
    <off-canvas id="offcanvas" class="uk-hidden@m" :apps="apps" />
  </nav>
</template>
<style lang="less">

</style>
<script>
import AppDropdown from './app-dropdown'
import UserDropdown from './user-dropdown'
import LoginDropdown from './login-dropdown'
import OffCanvas from './off-canvas'

export default {
  data: () => ({
    apps: [
      { icon: 'star', title: '大牛分站' },
      { icon: 'heart', title: '给洛谷投食' },
      { icon: 'table', title: '评测记录' },
      { icon: 'users', title: '团队' },
      { icon: 'image', title: '图床' }
    ]
  }),
  components: { AppDropdown, UserDropdown, LoginDropdown, OffCanvas }
}
</script>
