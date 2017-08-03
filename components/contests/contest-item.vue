<template>
  <li>
    <a v-if="isEnded" href="#" class="uk-link-muted">
      {{contest.Name}}
      <span class="uk-align-right lg-no-margin-bottom">
        <span>{{methodLabel.name}}</span>
        <span> · </span>
        <span>{{publicLabel.name}}</span>
        <span> · </span>
        <span>结束于 {{contest.EndTime | readableDate}}</span>
      </span>
    </a>
    <a v-else-if="isOngoing" href="#">
      <div>
        <h5>{{contest.Name}}<span class="uk-label uk-margin-small-left">正在进行</span></h5>
        <p>
          <span :class="'uk-label uk-margin-small-right lg-bg-color-' + methodLabel.color">{{methodLabel.name}}</span>
          <span :class="'uk-label uk-margin-small-right lg-bg-color-' + publicLabel.color">{{publicLabel.name}}</span>
          开始于{{contest.StartTime | readableDate}}，将于{{contest.EndTime | readableDate}}结束，共{{contest.ProblemCount}}题。
        </p>
      </div>
    </a>
    <a v-else-if="isToStart" href="#">
      <div class="uk-grid-collapse" uk-grid>
        <div class="uk-width-2-3@m uk-width-1-1@s lg-contest-item">
          <h4>{{contest.Name}}</h4>
          <p>
            <span class="uk-label uk-margin-small-right">即将开始</span>
            <span :class="'uk-label uk-margin-small-right lg-bg-color-' + methodLabel.color">{{methodLabel.name}}</span>
            <b>{{publicLabel.name}}</b>
            由<id-link :idObj="contest.Hoster"/>主办，将于{{contest.StartTime | readableDate}}开始，{{contest.EndTime | readableDate}}结束，共{{contest.ProblemCount}}题。
          </p>
        </div>
        <div class="uk-width-1-3@m uk-visible@m lg-countdown-container">
          <div :uk-countdown="'date: ' + (new Date(contest.StartTime * 1000)).toISOString()">
            <span class="uk-countdown-number uk-countdown-days"></span>
            <span class="uk-countdown-separator">:</span>
            <span class="uk-countdown-number uk-countdown-hours"></span>
            <span class="uk-countdown-separator">:</span>
            <span class="uk-countdown-number uk-countdown-minutes"></span>
            <span class="uk-countdown-separator">:</span>
            <span class="uk-countdown-number uk-countdown-seconds"></span>
            <span>后开始</span>
          </div>
        </div>
      </div>
    </a>
  </li>
</template>
<style lang="less" scoped>
  a {
    text-decoration: none;
    color: inherit;
  }
  .uk-countdown-number {
    font-size: 2.5rem;
    line-height: 2.5rem;
  }
  .lg-countdown-container {
    text-align: right;
  }
  .lg-contest-item h4, p {
    margin: 0;
  }
  .lg-contest-item h4 {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>

<script>
import { contestMethods, contestPublic } from '~assets/js/contest-consts'
import IdLink from '~components/common/id-link'

export default {
  props: {
    contest: Object
  },
  computed: {
    publicLabel() { return contestPublic[this.contest.Public] },
    methodLabel() { return contestMethods[this.contest.Method] },
    isEnded() { return (new Date()) > (new Date(this.contest.EndTime * 1000)) },
    isToStart() { return (new Date()) < (new Date(this.contest.StartTime * 1000)) },
    isOngoing() { return (new Date()) < (new Date(this.contest.EndTime * 1000)) && (new Date()) > (new Date(this.contest.StartTime * 1000)) },
  },
  components: { IdLink }
}
</script>
