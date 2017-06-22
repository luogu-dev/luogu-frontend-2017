<template>
  <nav class="uk-navbar-container uk-margin uk-navbar" uk-navbar>
    <div class="uk-navbar-left">

      <a class="uk-navbar-item uk-logo" href="#">Luogu</a>

      <ul class="uk-navbar-nav">
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
      <div class="uk-navbar-item">
        <form class="uk-search uk-search-navbar">
          <a class="uk-search-icon-flip" uk-search-icon></a>
          <input class="uk-search-input" type="search" placeholder="题目搜索">
        </form>
      </div>
      <ul class="uk-navbar-nav">
        <app-dropdown :apps="apps" />
        <li>
          <a href="#">
            <span class="uk-icon uk-margin-small-right" uk-icon="icon: bell"></span>通知
          </a>
        </li>
        <user-dropdown v-if="currentUser" />
        <login-dropdown v-else />
      </ul>
    </div>
  </nav>
</template>
<style lang="less">

</style>
<script>
import AppDropdown from './app-dropdown'
import UserDropdown from './user-dropdown'
import LoginDropdown from './login-dropdown'

export default {
  data: () => ({
    apps: [
      { icon: 'star', title: '大牛分站' },
      { icon: 'heart', title: '给洛谷投食' },
      { icon: 'table', title: '评测记录' },
      { icon: 'users', title: '团队' },
      { icon: 'image', title: '图床' }
    ],
    currentUser: null /* {
      username: 'laosb'
    } */
  }),
  mounted() { console.log('navbar mounted') },
  components: { AppDropdown, UserDropdown, LoginDropdown }
}
</script>
