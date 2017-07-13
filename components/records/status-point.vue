<template>
    <a :href="'#point-' + pointId" uk-scroll><span :class="color"></span></a>
</template>
<script>
import { RecordStatuses } from '~assets/js/status-mapping';

export default {
  props: {
    status: String,
    pointId: Number
  },
  computed: {
    color(){ return RecordStatuses[this.status] ? `lg-bg-color-${RecordStatuses[this.status].color}` : 'lg-bg-color-red' }
  }
}
</script>
<style lang="less" scoped>
  span {
    display: inline-block;
    margin-right: .3em;
    width: 1em;
    height: 1em;
    //background: #333;
  }
</style>
