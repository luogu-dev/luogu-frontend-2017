<template>
    <span :class="color"><span class="uk-margin-small-right" :uk-icon="'icon: ' + icon"></span>{{status}}</span>
</template>
<script>
import { RecordStatuses } from '~assets/js/status-mapping';

export default {
  props: {
    status: String
  },
  computed: {
    icon(){ return RecordStatuses[this.status] ? RecordStatuses[this.status].icon : '' },
    color(){ return RecordStatuses[this.status] ? `lg-color-${RecordStatuses[this.status].color}` : 'lg-color-red' },
  }
}
</script>
<style lang="less" scoped>
  span {
    font: inherit;
  }
</style>
