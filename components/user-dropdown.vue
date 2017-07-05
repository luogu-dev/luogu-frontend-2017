<template>
  <li>
    <a href="#">
      <span class="uk-icon uk-margin-small-right" uk-icon="icon: user"></span>
      {{ user.Username }}
    </a>
    <div class="uk-navbar-dropdown">
      <ul class="uk-nav uk-navbar-dropdown-nav">
        <li class="uk-nav-header">个人</li>
        <li>
          <router-link :to="{ name: 'users-id', params: { id: user.UID } }">个人页</router-link>
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
          <a href="#" @click.prevent="logout">
            <span class="uk-icon uk-margin-small-right" uk-icon="icon: sign-out"></span>
            退出登录
          </a>
        </li>
      </ul>
    </div>
  </li>
</template>
<script>
  import { post } from '~plugins/lgapi'

  export default {
    props: { user: Object },
    methods: {
      async logout() {
        const res = await post('/api/authenticate/logout')
        if (!res.error) this.$store.commit('SET_USER', null)
      }
    }
  }
</script>
