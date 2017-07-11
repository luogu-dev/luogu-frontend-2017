<template>
  <div>
    <h1 class="lg-float-title">{{Name}}
      <span class="uk-label uk-margin-small-left">TeamID{{TeamID}}</span>
    </h1>
    <div uk-grid>
      <div class="uk-width-2-3">
        <div v-if="Introduction" class="uk-card uk-card-default uk-card-body uk-margin">
          <h3 class="uk-card-title">团队宣言</h3>
          <vue-markdown :source="Introduction"></vue-markdown>
        </div>
        <div v-if="Notice" class="uk-card uk-card-default uk-card-body uk-margin">
          <h3 class="uk-card-title">通知</h3>
          <vue-markdown :source="Notice"></vue-markdown>
        </div>
        <div  class="uk-card uk-card-default uk-card-body uk-margin">
          <h3 class="uk-card-title">成员</h3>
          <div v-if="Members">
            <section v-for="(group, name) in groupedMembers" :key="group">
              <h4>{{name}}</h4>
              <ul class="uk-list uk-list-bullet">
                <li v-for="m in group" :key="m.UID">{{m.RealName}}</li>
              </ul>
            </section>
          </div>
          <div v-else class="uk-placeholder uk-text-center">成为该团队的成员才能查看团队成员信息哦😏</div>
        </div>
      </div>
      <div class="uk-width-1-3">
        <div class="uk-card uk-card-default uk-card-body">
          <div uk-grid v-if="Members">
            <div class="uk-width-1-2">
              <dl class="uk-description-list">
                <dt>成员数量</dt>
                <dd class="lg-largenum">{{Members.count}}</dd>
              </dl>
            </div>
            <div class="uk-width-1-2">
              <dl class="uk-description-list">
                <dt>成员数量</dt>
                <dd class="lg-largenum">{{Members.count}}</dd>
              </dl>
            </div>
          </div>
          <h3 class="uk-card-title">团队负责人</h3>
          <article class="uk-comment">
            <user-info :user="Master.User">
            </user-info>
          </article>
          <dl v-if="Website" class="uk-description-list">
            <dt>团队网站</dt>
            <dd><a :href="Website">{{Website}}</a></dd>
          </dl>
          <dl class="uk-description-list">
            <dt>成立时间</dt>
            <dd>{{(new Date(CreateTime * 1000)).toLocaleString()}}</dd>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import VueMarkdown from 'vue-markdown'
import { groupBy } from 'lodash'
import { get } from '~plugins/lgapi'
import UserInfo from '~components/user-info'

export default {
  async asyncData({ params, error }){
    // We need to ensure that we have those fields to avoid "not defined in data" errors.
    return Object.assign({ Introduction: '', Notice: '', Members: null }, await get(`/api/team/detail/${params.id}`))
  },
  components: { UserInfo, VueMarkdown },
  computed: {
    groupedMembers() {
      return this.Members ? groupBy(this.Members.result, 'Type') : []
    }
  }
}
</script>
