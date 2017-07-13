import Vue from 'vue'

Vue.filter('readableDate', date => (new Date(date * 1000)).toLocaleString())
