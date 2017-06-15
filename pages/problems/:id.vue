<template>
  <div>
    <h1>{{title}}
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
        desc: '\u3000\u3000\u5c0f\u6db5\u5f88\u559c\u6b22\u7535\u8111\u6e38\u620f\uff0c\u8fd9\u4e9b\u5929\u4ed6\u6b63\u5728\u73a9\u4e00\u4e2a\u53eb\u505a\u300a\u4e09\u56fd\u300b\u7684\u6e38\u620f\u3002 \n\u3000\u3000\u5728\u6e38\u620f\u4e2d\uff0c\u5c0f\u6db5\u548c\u8ba1\u7b97\u673a\u5404\u6267\u4e00\u65b9\uff0c\u7ec4\u5efa\u5404\u81ea\u7684\u519b\u961f\u8fdb\u884c\u5bf9\u6218\u3002\u6e38\u620f\u4e2d\u5171\u6709 N \u4f4d\u6b66\u5c06\uff08N\u4e3a\u5076\u6570\u4e14\u4e0d\u5c0f\u4e8e 4\uff09\uff0c\u4efb\u610f\u4e24\u4e2a\u6b66\u5c06\u4e4b\u95f4\u6709\u4e00\u4e2a\u201c\u9ed8\u5951\u503c\u201d\uff0c\u8868\u793a\u82e5\u6b64\u4e24\u4f4d\u6b66\u5c06\u4f5c\u4e3a\u4e00\u5bf9\u7ec4\u5408\u4f5c\u6218\u65f6\uff0c\u8be5\u7ec4\u5408\u7684\u5a01\u529b\u6709\u591a\u5927\u3002\u6e38\u620f\u5f00\u59cb\u524d\uff0c\u6240\u6709\u6b66\u5c06\u90fd\u662f\u81ea\u7531\u7684\uff08\u79f0\u4e3a\u81ea\u7531\u6b66\u5c06\uff0c\u4e00\u65e6\u67d0\u4e2a\u81ea\u7531\u6b66\u5c06\u88ab\u9009\u4e2d\u4f5c\u4e3a\u67d0\u65b9\u519b\u961f\u7684\u4e00\u5458\uff0c\u90a3\u4e48\u4ed6\u5c31\u4e0d\u518d\u662f\u81ea\u7531\u6b66\u5c06\u4e86\uff09\uff0c\u6362\u53e5\u8bdd\u8bf4\uff0c\u6240\u8c13\u7684\u81ea\u7531\u6b66\u5c06\u4e0d\u5c5e\u4e8e\u4efb\u4f55\u4e00\u65b9\u3002\n\u3000\u3000\u6e38\u620f\u5f00\u59cb\uff0c\u5c0f\u6db5\u548c\u8ba1\u7b97\u673a\u8981\u4ece\u81ea\u7531\u6b66\u5c06\u4e2d\u6311\u9009\u6b66\u5c06\u7ec4\u6210\u81ea\u5df1\u7684\u519b\u961f\uff0c\u89c4\u5219\u5982\u4e0b\uff1a\u5c0f\u6db5\u5148\u4ece\u81ea\u7531\u6b66\u5c06\u4e2d\u9009\u51fa\u4e00\u4e2a\u52a0\u5165\u81ea\u5df1\u7684\u519b\u961f\uff0c\u7136\u540e\u8ba1\u7b97\u673a\u4e5f\u4ece\u81ea\u7531\u6b66\u5c06\u4e2d\u9009\u51fa\u4e00\u4e2a\u52a0\u5165\u8ba1\u7b97\u673a\u65b9\u7684\u519b\u961f\u3002\u63a5\u4e0b\u6765\u4e00\u76f4\u6309\u7167\u201c\u5c0f\u6db5\u2192\u8ba1\u7b97\u673a\u2192\u5c0f\u6db5\u2192\u2026\u2026\u201d\u7684\u987a\u5e8f\u9009\u62e9\u6b66\u5c06\uff0c\u76f4\u5230\u6240\u6709\u7684\u6b66\u5c06\u88ab\u53cc\u65b9\u5747\u5206\u5b8c\u3002\u7136\u540e\uff0c\u7a0b\u5e8f\u81ea\u52a8\u4ece\u53cc\u65b9\u519b\u961f\u4e2d\u5404\u6311\u51fa\u4e00\u5bf9\u9ed8\u5951\u503c\u6700\u9ad8\n\u7684\u6b66\u5c06\u7ec4\u5408\u4ee3\u8868\u81ea\u5df1\u7684\u519b\u961f\u8fdb\u884c\u4e8c\u5bf9\u4e8c\u6bd4\u6b66\uff0c\u62e5\u6709\u66f4\u9ad8\u9ed8\u5951\u503c\u7684\u4e00\u5bf9\u6b66\u5c06\u7ec4\u5408\u83b7\u80dc\uff0c\u8868\u793a\u4e24\u519b\u4ea4\u6218\uff0c\u62e5\u6709\u83b7\u80dc\u6b66\u5c06\u7ec4\u5408\u7684\u4e00\u65b9\u83b7\u80dc\u3002 \n\u3000\u3000\u5df2\u77e5\u8ba1\u7b97\u673a\u4e00\u65b9\u9009\u62e9\u6b66\u5c06\u7684\u539f\u5219\u662f\u5c3d\u91cf\u7834\u574f\u5bf9\u624b\u4e0b\u4e00\u6b65\u5c06\u5f62\u6210\u7684\u6700\u5f3a\u7ec4\u5408\uff0c\u5b83\u91c7\u53d6\u7684\u5177\u4f53\u7b56\u7565\u5982\u4e0b\uff1a\u4efb\u4f55\u65f6\u523b\uff0c\u8f6e\u5230\u8ba1\u7b97\u673a\u6311\u9009\u65f6\uff0c\u5b83\u4f1a\u5c1d\u8bd5\u5c06\u5bf9\u624b\u519b\u961f\u4e2d\u7684\u6bcf\u4e2a\u6b66\u5c06\u4e0e\u5f53\u524d\u6bcf\u4e2a\u81ea\u7531\u6b66\u5c06\u8fdb\u884c\u4e00\u4e00\u914d\u5bf9\uff0c\u627e\u51fa\u6240\u6709\u914d\u5bf9\u4e2d\u9ed8\u5951\u503c\u6700\u9ad8\u7684\u90a3\u5bf9\u6b66\u5c06\u7ec4\u5408\uff0c\u5e76\u5c06\u8be5\u7ec4\u5408\u4e2d\u7684\u81ea\u7531\u6b66\u5c06\u9009\u5165\u81ea\u5df1\u7684\u519b\u961f\u3002 \u4e0b\u9762\u4e3e\u4f8b\u8bf4\u660e\u8ba1\u7b97\u673a\u7684\u9009\u5c06\u7b56\u7565\uff0c\u4f8b\u5982\uff0c\u6e38\u620f\u4e2d\u4e00\u5171\u6709 6 \u4e2a\u6b66\u5c06\uff0c\u4ed6\u4eec\u76f8\u4e92\u4e4b\u95f4\u7684\u9ed8\u5951\u503c\u5982\u4e0b\u8868\u6240\u793a\uff1a\n[pic=54]\n\u53cc\u65b9\u9009\u5c06\u8fc7\u7a0b\u5982\u4e0b\u6240\u793a\uff1a \n[pic=55]\n\u5c0f\u6db5\u60f3\u77e5\u9053\uff0c\u5982\u679c\u8ba1\u7b97\u673a\u5728\u4e00\u5c40\u6e38\u620f\u4e2d\u59cb\u7ec8\u575a\u6301\u4e0a\u9762\u8fd9\u4e2a\u7b56\u7565\uff0c\u90a3\u4e48\u81ea\u5df1\u6709\u6ca1\u6709\u53ef\u80fd\u5fc5\n\u80dc\uff1f\u5982\u679c\u6709\uff0c\u5728\u6240\u6709\u53ef\u80fd\u7684\u80dc\u5229\u7ed3\u5c40\u4e2d\uff0c\u81ea\u5df1\u90a3\u5bf9\u7528\u4e8e\u6bd4\u6b66\u7684\u6b66\u5c06\u7ec4\u5408\u7684\u9ed8\u5951\u503c\u6700\u5927\u662f\u591a\n\u5c11\uff1f \n\u3000\u3000\u5047\u8bbe\u6574\u4e2a\u6e38\u620f\u8fc7\u7a0b\u4e2d\uff0c\u5bf9\u6218\u53cc\u65b9\u4efb\u4f55\u65f6\u5019\u5747\u80fd\u770b\u5230\u81ea\u7531\u6b66\u5c06\u961f\u4e2d\u7684\u6b66\u5c06\u548c\u5bf9\u65b9\u519b\u961f\u7684\u6b66\u5c06\u3002\u4e3a\u4e86\u7b80\u5316\u95ee\u9898\uff0c\u4fdd\u8bc1\u5bf9\u4e8e\u4e0d\u540c\u7684\u6b66\u5c06\u7ec4\u5408\uff0c\u5176\u9ed8\u5951\u503c\u5747\u4e0d\u76f8\u540c\u3002 ',
        format: {
          input: '\u8f93\u5165\u6587\u4ef6\u540d\u4e3a sanguo.in\uff0c\u5171 N \u884c\u3002 \n\u7b2c\u4e00\u884c\u4e3a\u4e00\u4e2a\u5076\u6570 N\uff0c\u8868\u793a\u6b66\u5c06\u7684\u4e2a\u6570\u3002 \n\u7b2c 2 \u884c\u5230\u7b2c N \u884c\u91cc\uff0c\u7b2c\uff08i+1\uff09\u884c\u6709\uff08Ni\uff09\u4e2a\u975e\u8d1f\u6574\u6570\uff0c\u6bcf\u4e24\u4e2a\u6570\u4e4b\u95f4\u7528\u4e00\u4e2a\u7a7a\u683c\u9694\n\u5f00\uff0c\u8868\u793a i \u53f7\u6b66\u5c06\u548c i+1\uff0ci+2\uff0c\u2026\u2026\uff0cN \u53f7\u6b66\u5c06\u4e4b\u95f4\u7684\u9ed8\u5951\u503c\uff080\u2264\u9ed8\u5951\u503c\u22641,000,000,000\uff09\u3002 ',
          output: '\u8f93\u51fa\u6587\u4ef6 sanguo.out \u5171 1 \u6216 2 \u884c\u3002 \n\u82e5\u5bf9\u4e8e\u7ed9\u5b9a\u7684\u6e38\u620f\u8f93\u5165\uff0c\u5b58\u5728\u53ef\u4ee5\u8ba9\u5c0f\u6db5\u83b7\u80dc\u7684\u9009\u5c06\u987a\u5e8f\uff0c\u5219\u8f93\u51fa 1\uff0c\u5e76\u53e6\u8d77\u4e00\u884c\u8f93\u51fa\n\u6240\u6709\u83b7\u80dc\u7684\u60c5\u51b5\u4e2d\uff0c\u5c0f\u6db5\u6700\u7ec8\u9009\u51fa\u7684\u6b66\u5c06\u7ec4\u5408\u7684\u6700\u5927\u9ed8\u5951\u503c\u3002 \n\u5982\u679c\u4e0d\u5b58\u5728\u53ef\u4ee5\u8ba9\u5c0f\u6db5\u83b7\u80dc\u7684\u9009\u5c06\u987a\u5e8f\uff0c\u5219\u8f93\u51fa 0\u3002 '
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
