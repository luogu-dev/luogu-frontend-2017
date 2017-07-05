<template>
  <div uk-offcanvas="mode: push; overlay: true">
    <div class="uk-offcanvas-bar uk-flex uk-flex-column">

      <ul class="uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical">
        <li class="uk-nav-item">
          <form class="uk-search uk-search-default">
            <span uk-search-icon></span>
            <input class="uk-search-input" type="search" placeholder="搜索">
          </form>
        </li>
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
        <li class="uk-parent">
          <span>应用</span>
          <ul class="uk-nav-sub">
            <li v-for="app in apps" :key="app.title">
              <a href="#"><span class="uk-icon uk-margin-small-right" :uk-icon="'icon: ' + app.icon"></span>{{app.title}}</a>
            </li>
          </ul>
        </li>
      </ul>

    </div>
  </div>
</template>
<script>
export default {
  props: {
    apps: Array
  }
}
</script>
