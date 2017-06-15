<template>
  <div>
    <div uk-grid>
      <div class="uk-width-2-3">
        <div class="uk-card uk-card-default uk-card-body uk-margin">
          <h3 class="uk-card-title">
            <status-label :status="stat.word" />
          </h3>
          <p>得分：{{stat.score}}，占用内存 {{stat.memory}}，耗时 {{stat.time}}。</p>
        </div>
        <div class="uk-card uk-card-default uk-card-body uk-margin">
          <h3 class="uk-card-title">得分详情</h3>
          <div class="lg-rec-points">
            <status-point v-for="point in result" :status="point.stat" :point-id="point.id" :key="point.id" />
          </div>
          <table class="uk-table">
            <thead>
              <tr>
                <th>#</th>
                <th>状态</th>
                <th>耗时</th>
                <th>内存占用</th>
                <th>评测信息</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="point in result" :key="point.id" :id="'point-' + point.id">
                <td>{{point.id}}</td>
                <td>
                  <status-label :status="point.stat" />
                </td>
                <td>{{point.time}}</td>
                <td>{{point.memory}}</td>
                <td>
                  <span :title="point.msg" uk-icon="icon: info" uk-tooltip></span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="uk-card uk-card-default uk-card-body uk-margin">
          <h3 class="uk-card-title">源代码</h3>
          <pre v-if="source">{{source}}</pre>
          <div v-else class="uk-placeholder">
            <p>只有以下用户可以查看代码：</p>
            <ul class="uk-list uk-list-bullet">
              <li>代码的提交人</li>
              <li>题目所属团队的管理员或者私有题目的上传者</li>
              <li>CodeForces 系列比赛中已锁定本题</li>
              <li>加入了代码公开计划且这道题达到了 60 分（同时该记录的提交者也加入了代码公开计划）</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="uk-width-1-3">
        <div class="uk-card uk-card-default uk-card-body">
          <article class="uk-comment">
            <user-info :user="user"/>
          </article>
          <dl class="uk-description-list">
            <dt>评测记录 #</dt>
            <dd>{{id}}</dd>
            <dt>题目</dt>
            <dd>{{prob.title}}<span class="uk-label uk-margin-small-left">P{{prob.id}}</span></dd>
            <dt>选手程序语言</dt>
            <dd>{{code.lang}}</dd>
            <dt>选手程序长度</dt>
            <dd>{{code.length}}</dd>
            <dt>评测机</dt>
            <dd><span :class="'uk-label lg-bg-color-' + judger.color">{{judger.name}}</span></dd>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import StatusLabel from '~components/status-label'
import StatusPoint from '~components/status-point'
import UserInfo from '~components/user-info'

export default {
  data(context) {
    return {
      id: 2365388,
      prob: {
        id: 1255,
        title: '数楼梯'
      },
      stat: {
        word: 'Unaccepted',
        score: 70,
        time: '6ms',
        memory: '11886KB'
      },
      code: {
        lang: 'C++11',
        length: '0.9KB'
      },
      contest: null,
      user: {
        avatar_url: '//luogu.oss-cn-hangzhou.aliyuncs.com/upload/usericon/14822.png',
        username: 'xmwangpeiyi',
        level_color: 'red',
      },
      judger: {
        name: 'Aqours',
        color: 'blue'
      },
      compile_msg: null,
      source: null,
      result: [
        { id: 1, stat: 'AC', time: '0ms', memory: '11886kB', msg: '通过该测试点。得分10' },
        { id: 2, stat: 'WA', time: '76ms', memory: '11886kB', msg: '错误的答案。得分0\nOn line 1 column 1, read 07364, expected 62763.' },
        { id: 3, stat: 'AC', time: '0ms', memory: '11886kB', msg: '通过该测试点。得分10' },
        { id: 4, stat: 'AC', time: '0ms', memory: '11886kB', msg: '通过该测试点。得分10' },
        { id: 5, stat: 'AC', time: '0ms', memory: '11886kB', msg: '通过该测试点。得分10' },
        { id: 6, stat: 'WA', time: '0ms', memory: '11886kB', msg: '错误的答案。得分0\nToo many or too few lines.' },
        { id: 7, stat: 'WA', time: '0ms', memory: '11886kB', msg: '错误的答案。得分0\nToo many or too few lines.' },
        { id: 8, stat: 'AC', time: '0ms', memory: '11886kB', msg: '通过该测试点。得分10' },
        { id: 9, stat: 'AC', time: '1ms', memory: '11886kB', msg: '通过该测试点。得分10' },
        { id: 10, stat: 'AC', time: '5ms', memory: '11886kB', msg: '通过该测试点。得分10' }
      ]
    }
  },
  components: { StatusLabel, StatusPoint, UserInfo }
}
</script>
<style lang="less">
.lg-largenum {
  font-size: 2em;
}

.lg-margin-reset {
  margin: 0;
}

.lg-padding-reset {
  padding: 0;
}
</style>
