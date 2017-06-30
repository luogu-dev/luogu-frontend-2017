<template>
  <li>
    <a v-if="isEnded" href="#" class="uk-link-muted">
      {{contest.Name}}
      <span class="uk-align-right lg-no-margin-bottom">
        <span :class="'uk-label uk-margin-small-right lg-bg-color-' + methodLabel.color">{{methodLabel.name}}</span>
        <span :class="'uk-label uk-margin-small-right lg-bg-color-' + publicLabel.color">{{publicLabel.name}}</span>
        <span>@ {{contest.StartTime | readableDate}}</span>
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
        <div class="uk-width-1-2">
          <h5>{{contest.Name}}<span class="uk-label uk-margin-small-left">即将开始</span></h5>
          <p>
            <span :class="'uk-label uk-margin-small-right lg-bg-color-' + methodLabel.color">{{methodLabel.name}}</span>
            <span :class="'uk-label uk-margin-small-right lg-bg-color-' + publicLabel.color">{{publicLabel.name}}</span>
            将于{{contest.StartTime | readableDate}}开始，{{contest.EndTime | readableDate}}结束，共{{contest.ProblemCount}}题。
          </p>
        </div>
        <div class="uk-width-1-2 lg-countdown-container">
          <div :uk-countdown="'date: ' + (new Date(contest.StartTime * 1000)).toISOString()">
            <span class="uk-countdown-number uk-countdown-days"></span>
            <span class="uk-countdown-separator">:</span>
            <span class="uk-countdown-number uk-countdown-hours"></span>
            <span class="uk-countdown-separator">:</span>
            <span class="uk-countdown-number uk-countdown-minutes"></span>
            <span class="uk-countdown-separator">:</span>
            <span class="uk-countdown-number uk-countdown-seconds"></span>
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
    font-size: 3rem;
  }
  .lg-countdown-container {
    text-align: right;
  }
</style>

<script>
import { contestMethods, contestPublic } from '~assets/js/contest-consts'

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
  }
}
</script>
