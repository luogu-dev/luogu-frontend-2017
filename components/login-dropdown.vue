<template>
  <li>
    <a href="#">
      <span class="uk-icon uk-margin-small-right" uk-icon="icon: sign-in"></span>登录 / 注册
    </a>
    <div class="uk-width-medium" uk-dropdown>
      <form @submit.prevent="login">
        <fieldset class="uk-fieldset">
          <div class="uk-margin-small uk-inline uk-width-1-1">
            <span class="uk-form-icon" uk-icon="icon: user"></span>
            <input ref="username" class="uk-input uk-width-1-1" placeholder="用户名">
          </div>
          <div class="uk-margin-small uk-inline uk-width-1-1">
            <span class="uk-form-icon" uk-icon="icon: lock"></span>
            <input ref="password" class="uk-input" placeholder="密码" type="password">
          </div>
          <div class="uk-margin-small">
            <a class="uk-float-right" href="#">忘记密码？</a>
          </div>
          <div class="uk-margin-small">
            <input type="submit" class="uk-button uk-button-primary uk-width-1-1" value="登录">
          </div>
          <div class="uk-small-margin">
            <a href="#">没有账号？现在注册</a>
          </div>
        </fieldset>
      </form>
    </div>
  </li>
</template>
<script>
import axios from 'axios'

export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async login() {
      // TODO: use try...catch there
      try {
        const { data } = await axios.post('https://www.luogu.org/api/authenticate/userPassLogin', {
          username: this.$refs.username.value,
          password: this.$refs.password.value
        })
        if (data.status === 200) {
          alert('login success')
        } else {
          console.log('req eror:', data)
        }
      } catch (e) {
        if (e) console.log(e)
      }
    }
  }
}
</script>
