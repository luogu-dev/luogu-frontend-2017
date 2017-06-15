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
            <span class="uk-icon uk-margin-small-right" uk-icon="icon: bell"></span>通知</a>
        </li>
        <li>
          <a href="#">
            <span class="uk-icon uk-margin-small-right" uk-icon="icon: user"></span>
            laosb
          </a>
          <div class="uk-navbar-dropdown">
            <ul class="uk-nav uk-navbar-dropdown-nav">
              <li class="uk-nav-header">个人</li>
              <li>
                <a href="#">个人页</a>
              </li>
              <li>
                <a href="#">私信</a>
              </li>
              <li class="uk-nav-divider"></li>
              <li class="uk-nav-header">团队</li>
              <li>
                <a href="#">这是一个普通的团队</a>
              </li>
              <li class="uk-nav-divider"></li>
              <li class="uk-nav-header">比赛</li>
              <li>
                <a href="#">这是一个普通的比赛</a>
              </li>
              <li class="uk-nav-divider"></li>
              <li>
                <a href="#">
                  <span class="uk-icon uk-margin-small-right" uk-icon="icon: sign-out"></span>
                  退出登录
                </a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>
<style lang="less">

</style>
<script>
import AppDropdown from './app-dropdown'

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
  components: { AppDropdown }
}
</script>
