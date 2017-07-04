<template>
  <div>
    <h1 class="lg-float-title">{{Username}}
      <span class="uk-label uk-margin-small-left">U{{UID}}</span>
    </h1>
    <div uk-grid>
      <div class="uk-width-2-3">
        <div class="uk-card uk-card-default uk-card-body uk-margin">
          <h3 class="uk-card-title">个人介绍</h3>
          <div v-if="Introduction" v-html="Introduction"></div>
          <div v-else class="uk-placeholder uk-text-center">这家伙并没有介绍自己🙃</div>
        </div>
      </div>
      <div class="uk-width-1-3">
        <div class="uk-card uk-card-default uk-card-body">
          <article class="uk-comment">
            <user-info :user="{ Username, UID, isAdmin, isValid }" />
          </article>
          <!--
          <div uk-grid>
            <div class="uk-width-1-2">
              <dl class="uk-description-list">
                <dt>通过量</dt>
                <dd class="lg-largenum">{{PassedCount}}</dd>
              </dl>
            </div>
            <div class="uk-width-1-2">
              <dl class="uk-description-list">
                <dt>提交量</dt>
                <dd class="lg-largenum">{{SubmitCount}}</dd>
              </dl>
            </div>
          </div> -->
          <dl class="uk-description-list">
            <dt>注册时间</dt>
            <dd>{{(new Date(RegisterTime * 1000)).toLocaleString()}}</dd>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { get } from '~plugins/lgapi'
import UserInfo from '~components/user-info'

export default {
  async asyncData({ params }){
    return await get(`/api/user/detail/${params.id}`)
  },
  components: { UserInfo }
}
</script>
