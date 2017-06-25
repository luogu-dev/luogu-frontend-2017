<template>
  <div>
    <h1 class="lg-float-title">{{title}}
      <span class="uk-label uk-margin-small-left">P{{id}}</span>
    </h1>
    <div uk-grid>
      <div class="uk-width-2-3">
        <div v-if="content.background" class="uk-card uk-card-default uk-card-body uk-margin">
          <h3 class="uk-card-title">背景</h3>
          <div v-html="content.background"></div>
        </div>
        <div class="uk-card uk-card-default uk-card-body uk-margin">
          <h3 class="uk-card-title">描述</h3>
          <div v-html="content.desc"></div>
        </div>
        <div class="uk-card uk-card-default uk-card-body uk-margin">
          <h3 class="uk-card-title">格式</h3>
          <dl class="uk-description-list">
            <dt>输入格式</dt>
            <dd>{{content.format.input}}</dd>
            <dt>输出格式</dt>
            <dd>{{content.format.output}}</dd>
          </dl>
        </div>
        <div class="uk-card uk-card-default uk-card-body uk-margin">
          <h3 class="uk-card-title">数据样例</h3>
          <div v-for="(sample, i) in content.sample">
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
        <div v-if="content.hint" class="uk-card uk-card-default uk-card-body">
          <h3 class="uk-card-title">提示</h3>
          <div v-html="content.hint"></div>
        </div>
      </div>
      <div class="uk-width-1-3">
        <div class="uk-card uk-card-default uk-card-body">
          <div uk-grid>
            <div class="uk-width-1-2">
              <dl class="uk-description-list">
                <dt>通过量</dt>
                <dd class="lg-largenum">{{stat.ac}}</dd>
              </dl>
            </div>
            <div class="uk-width-1-2">
              <dl class="uk-description-list">
                <dt>提交量</dt>
                <dd class="lg-largenum">{{stat.submit}}</dd>
              </dl>
            </div>
          </div>
          <dl class="uk-description-list">
            <dt>题目提供者</dt>
            <dd>{{provider ? provider : '幽灵用户'}}</dd>
            <dt>标签</dt>
            <dd>
              <span v-for="tag in tags" :class="'uk-label uk-margin-small-right lg-bg-color-' + tag.color">{{tag.name}}</span>
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
export default {
  data(context) {
    return {
      id: 1199,
      title: '三国游戏',
      stat: {
        ac: 740,
        submit: 1284
      },
      tags: [
        { name: '云端', color: 'orange' },
        { name: '2010', color: 'green' },
        { name: 'NOIp普及组', color: 'blue' }
      ],
      difficulty: 3.9593,
      provider: null,
      limits: '1s / 128MB',
      content: {
        background: '',
        desc: `
        <p>小涵很喜欢电脑游戏，这些天他正在玩一个叫做《三国》的游戏。</p>
        <p>在游戏中，小涵和计算机各执一方，组建各自的军队进行对战。游戏中共有 N 位武将（N为偶数且不小于 4），任意两个武将之间有一个“默契值”，表示若此两位武将作为一对组合作战时，该组合的威力有多大。游戏开始前，所有武将都是自由的（称为自由武将，一旦某个自由武将被选中作为某方军队的一员，那么他就不再是自由武将了），换句话说，所谓的自由武将不属于任何一方。</p>
        <p>游戏开始，小涵和计算机要从自由武将中挑选武将组成自己的军队，规则如下：小涵先从自由武将中选出一个加入自己的军队，然后计算机也从自由武将中选出一个加入计算机方的军队。接下来一直按照“小涵→计算机→小涵→……”的顺序选择武将，直到所有的武将被双方均分完。然后，程序自动从双方军队中各挑出一对默契值最高</p>
        <p>的武将组合代表自己的军队进行二对二比武，拥有更高默契值的一对武将组合获胜，表示两军交战，拥有获胜武将组合的一方获胜。</p>
        <p>已知计算机一方选择武将的原则是尽量破坏对手下一步将形成的最强组合，它采取的具体策略如下：任何时刻，轮到计算机挑选时，它会尝试将对手军队中的每个武将与当前每个自由武将进行一一配对，找出所有配对中默契值最高的那对武将组合，并将该组合中的自由武将选入自己的军队。 下面举例说明计算机的选将策略，例如，游戏中一共有 6 个武将，他们相互之间的默契值如下表所示：</p>
        <p><img src="//cdn.luogu.org/upload/pic/54.png"></p>
        <p>双方选将过程如下所示：</p>
        <p><img src="//cdn.luogu.org/upload/pic/55.png"></p>
        <p>小涵想知道，如果计算机在一局游戏中始终坚持上面这个策略，那么自己有没有可能必</p>
        <p>胜？如果有，在所有可能的胜利结局中，自己那对用于比武的武将组合的默契值最大是多</p>
        <p>少？
        <p>假设整个游戏过程中，对战双方任何时候均能看到自由武将队中的武将和对方军队的武将。为了简化问题，保证对于不同的武将组合，其默契值均不相同。</p>
        `,
        format: {
          input: '\u8f93\u5165\u6587\u4ef6\u540d\u4e3a sanguo.in\uff0c\u5171 N \u884c\u3002 <br>\u7b2c\u4e00\u884c\u4e3a\u4e00\u4e2a\u5076\u6570 N\uff0c\u8868\u793a\u6b66\u5c06\u7684\u4e2a\u6570\u3002 <br>\u7b2c 2 \u884c\u5230\u7b2c N \u884c\u91cc\uff0c\u7b2c\uff08i+1\uff09\u884c\u6709\uff08Ni\uff09\u4e2a\u975e\u8d1f\u6574\u6570\uff0c\u6bcf\u4e24\u4e2a\u6570\u4e4b\u95f4\u7528\u4e00\u4e2a\u7a7a\u683c\u9694<br>\u5f00\uff0c\u8868\u793a i \u53f7\u6b66\u5c06\u548c i+1\uff0ci+2\uff0c\u2026\u2026\uff0cN \u53f7\u6b66\u5c06\u4e4b\u95f4\u7684\u9ed8\u5951\u503c\uff080\u2264\u9ed8\u5951\u503c\u22641,000,000,000\uff09\u3002 ',
          output: '\u8f93\u51fa\u6587\u4ef6 sanguo.out \u5171 1 \u6216 2 \u884c\u3002 <br>\u82e5\u5bf9\u4e8e\u7ed9\u5b9a\u7684\u6e38\u620f\u8f93\u5165\uff0c\u5b58\u5728\u53ef\u4ee5\u8ba9\u5c0f\u6db5\u83b7\u80dc\u7684\u9009\u5c06\u987a\u5e8f\uff0c\u5219\u8f93\u51fa 1\uff0c\u5e76\u53e6\u8d77\u4e00\u884c\u8f93\u51fa<br>\u6240\u6709\u83b7\u80dc\u7684\u60c5\u51b5\u4e2d\uff0c\u5c0f\u6db5\u6700\u7ec8\u9009\u51fa\u7684\u6b66\u5c06\u7ec4\u5408\u7684\u6700\u5927\u9ed8\u5951\u503c\u3002 <br>\u5982\u679c\u4e0d\u5b58\u5728\u53ef\u4ee5\u8ba9\u5c0f\u6db5\u83b7\u80dc\u7684\u9009\u5c06\u987a\u5e8f\uff0c\u5219\u8f93\u51fa 0\u3002 '
        },
        sample: [
          [
            "6 \n5 28 16 29 27 \n23 3 20 1 \n8 32 26 \n33 11 \n12 \n",
            "1\n32\n\n"
          ],
          [
            "8 \n42 24 10 29 27 12 58 \n31 8 16 26 80 6 \n25 3 36 11 5 \n33 20 17 13 \n15 77 9 \n4 50 \n19 ",
            "1\n77"
          ]
        ],
        hint: '\u3010\u6570\u636e\u8303\u56f4\u3011 \n\u5bf9\u4e8e 40%\u7684\u6570\u636e\u6709 N\u226410\u3002 \n\u5bf9\u4e8e 70%\u7684\u6570\u636e\u6709 N\u226418\u3002 \n\u5bf9\u4e8e 100%\u7684\u6570\u636e\u6709 N\u2264500\u3002 '
      }
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
