<template>
  <div>
    <h1 class="lg-float-title">{{Name}}
      <span class="uk-label uk-margin-small-left">{{StringPID}}</span>
    </h1>
    <div uk-grid>
      <div class="uk-width-2-3">
        <div v-if="Background" class="uk-card uk-card-default uk-card-body uk-margin">
          <h3 class="uk-card-title">背景</h3>
          <vue-markdown :source="Background"></vue-markdown>
        </div>
        <div class="uk-card uk-card-default uk-card-body uk-margin">
          <h3 class="uk-card-title">描述</h3>
          <vue-markdown :source="Description"></vue-markdown>
        </div>
        <div class="uk-card uk-card-default uk-card-body uk-margin">
          <h3 class="uk-card-title">格式</h3>
          <dl class="uk-description-list">
            <dt>输入格式</dt>
            <dd><vue-markdown :source="InputFormat"></vue-markdown></dd>
            <dt>输出格式</dt>
            <dd><vue-markdown :source="OutputFormat"></vue-markdown></dd>
          </dl>
        </div>
        <div class="uk-card uk-card-default uk-card-body uk-margin">
          <h3 class="uk-card-title">数据样例</h3>
          <div v-for="(sample, i) in Sample" :key="i">
            <h4>#{{i + 1}}</h4>
            <div uk-grid>
              <div class="uk-width-1-2">
                <dl class="uk-description-list">
                  <dt>输入样例</dt>
                  <dd>
                    <pre>{{sample[0]}}</pre>
                  </dd>
                </dl>
              </div>
              <div class="uk-width-1-2">
                <dl class="uk-description-list">
                  <dt>输出样例</dt>
                  <dd>
                    <pre>{{sample[1]}}</pre>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
        <div v-if="Hint" class="uk-card uk-card-default uk-card-body">
          <h3 class="uk-card-title">提示</h3>
          <vue-markdown :source="Hint"></vue-markdown>
        </div>
      </div>
      <div class="uk-width-1-3">
        <div class="uk-card uk-card-default uk-card-body">
          <div uk-grid>
            <div class="uk-width-1-2">
              <dl class="uk-description-list">
                <dt>通过量</dt>
                <dd class="lg-largenum">233</dd>
              </dl>
            </div>
            <div class="uk-width-1-2">
              <dl class="uk-description-list">
                <dt>提交量</dt>
                <dd class="lg-largenum">2048</dd>
              </dl>
            </div>
          </div>
          <dl class="uk-description-list">
            <dt>题目提供者</dt>
            <dd>{{provider ? provider : '幽灵用户'}}</dd>
            <dt>标签</dt>
            <dd>
              <span v-for="tag in tags" :class="'uk-label uk-margin-small-right lg-bg-color-' + tag.color" :key="tag.name">{{tag.name}}</span>
            </dd>
            <dt>难度</dt>
            <dd>{{difficulty}}</dd>
            <dt>时空限制</dt>
            <dd>{{limits}}</dd>
          </dl>
          <div class="uk-child-width-1-2@m lg-margin-reset" uk-grid>
            <button class="uk-button uk-button-primary lg-padding-reset">提交答案</button>
            <button class="uk-button uk-button-default lg-padding-reset">查看题解</button>
          </div>
          <ul class="uk-iconnav uk-margin">
            <li>
              <a href="#" uk-icon="icon: comments" title="查看本题讨论" uk-tooltip></a>
            </li>
            <li>
              <a href="#" uk-icon="icon: table" title="查看本题评测记录" uk-tooltip></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { get } from '~plugins/lgapi'
import VueMarkdown from 'vue-markdown'
// import UserInfo from '~components/common/user-info'

export default {
  async asyncData({ params }){
    return Object.assign({ provider: null, limits: '1s / 128KB', tags: [], difficulty: 'Very Hard' }, await get(`/api/problem/detail/${params.id}`))
  },
  components: { VueMarkdown }
}
</script>
