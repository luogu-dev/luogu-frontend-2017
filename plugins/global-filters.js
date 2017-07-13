import Vue from 'vue'
import moment from '~plugins/moment'

Vue.filter('readableDate', timestamp => moment(timestamp * 1000).calendar())
