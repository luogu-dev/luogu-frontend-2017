<template>
  <ul class="uk-pagination" uk-margin>
    <li v-if="currentPage > 1" key="prev"><a :href="'#page-' + (currentPage - 1)"><span uk-pagination-previous></span></a></li>
    <li v-if="currentPage > 4" key="1"><a href="#page-1">1</a></li>
    <li v-if="currentPage > 5" class="uk-disabled" key="prev..."><span>...</span></li>
    <li v-if="currentPage > 3" :key="currentPage - 3"><a :href="'#page-' + (currentPage - 3)">{{currentPage - 3}}</a></li>
    <li v-if="currentPage > 2" :key="currentPage - 2"><a :href="'#page-' + (currentPage - 2)">{{currentPage - 2}}</a></li>
    <li v-if="currentPage > 1" :key="currentPage - 1"><a :href="'#page-' + (currentPage - 1)">{{currentPage - 1}}</a></li>
    <li class="uk-active"><span>{{currentPage}}</span></li>
    <li v-if="currentPage < pageCount" :key="currentPage + 1"><a :href="'#page-' + (currentPage + 1)">{{currentPage + 1}}</a></li>
    <li v-if="currentPage < (pageCount - 1)" :key="currentPage + 2"><a :href="'#page-' + (currentPage + 2)">{{currentPage + 2}}</a></li>
    <li v-if="currentPage < (pageCount - 2)" :key="currentPage + 3"><a :href="'#page-' + (currentPage + 3)">{{currentPage + 3}}</a></li>
    <li v-if="currentPage < (pageCount - 4)" class="uk-disabled" key="next..."><span>...</span></li>
    <li v-if="currentPage < (pageCount - 3)" :key="pageCount"><a :href="'#page-' + pageCount">{{pageCount}}</a></li>
    <li v-if="currentPage < pageCount" key="next"><a :href="'#page-' + (currentPage + 1)"><span uk-pagination-next></span></a></li>
  </ul>
</template>
<script>
import { setPage } from '~assets/js/page-helpers'

// TODO: Refactor the component making currentPage a prop.

export default {
  data(){ return { currentPage: setPage(this.$route.hash) } },
  props: {
    itemCount: Number,
  },
  computed: {
    pageCount() { return Math.ceil(this.itemCount / 20) }
  },
  watch: {
    $route({ hash }){ this.currentPage = setPage(hash) }
  }
}
</script>
