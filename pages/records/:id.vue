<template>
  <div>
    <div uk-grid>
      <div class="uk-width-2-3">
        <div class="uk-card uk-card-default uk-card-body">
          <h3 class="uk-card-title lg-color-red">{{stat.word}}</h3>
          <p>得分：{{stat.score}}，占用内存 {{stat.memory}}，耗时 {{stat.time}}。</p>
        </div>
        <div class="uk-card uk-card-default uk-card-body">
          <h3 class="uk-card-title">得分详情</h3>

        </div>
      </div>
      <div class="uk-width-1-3">
        <div class="uk-card uk-card-default uk-card-body" uk-sticky="offset: 30">

        </div>
      </div>
    </div>
  </div>
</template>
<script>
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
  }
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
