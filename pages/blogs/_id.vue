<template>
  <div>
    <h1 class="lg-float-title">{{Title}}</h1>
    <div uk-grid>
      <div class="uk-width-2-3">
        <div class="uk-card uk-card-default uk-card-body uk-margin">
          <vue-markdown :source="Content"></vue-markdown>
        </div>
      </div>
      <div class="uk-width-1-3">
        <div class="uk-card uk-card-default uk-card-body">
          <article class="uk-comment">
            <user-info :user="Author"></user-info>
          </article>
          <dl class="uk-description-list">
            <dt>发布时间</dt>
            <dd>{{(new Date(PostTime * 1000)).toLocaleString()}}</dd>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import VueMarkdown from 'vue-markdown'
import UserInfo from '~components/user-info'

import { get } from '~plugins/lgapi'

export default {
  async asyncData({ params, error }) {
    return await get(`/api/blog/detail/${params.id}`)
  },
  components: { VueMarkdown, UserInfo }
}
</script>
