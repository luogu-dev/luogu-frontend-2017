<template>
  <li>
    <a href="#" :class="isEnded ? 'uk-link-muted' : ''">
      {{contest.Name}}
      <span class="uk-align-right lg-no-margin-bottom">
        <span :class="'uk-label uk-margin-small-right lg-bg-color-' + methodLabel.color">{{methodLabel.name}}</span>
        <span :class="'uk-label uk-margin-small-right lg-bg-color-' + publicLabel.color">{{publicLabel.name}}</span>
      </span>
    </a>
  </li>
</template>
<style lang="less" scoped>
.lg-no-margin-bottom { margin-bottom: 0 }
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
    isEnded() { return (new Date()) > (new Date(this.contest.EndTime * 1000)) }
  }
}
</script>
