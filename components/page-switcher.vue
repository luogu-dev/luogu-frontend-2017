<template>
  <ul class="uk-pagination" uk-margin>
    <li v-if="currentPage > 1"><a :href="'#page-' + (currentPage - 1)"><span uk-pagination-previous></span></a></li>
    <li v-if="currentPage > 3"><a href="#page-1">1</a></li>
    <li v-if="currentPage > 4" class="uk-disabled"><span>...</span></li>
    <li v-if="currentPage > 3"><a :href="'#page-' + (currentPage - 3)">{{currentPage - 3}}</a></li>
    <li v-if="currentPage > 2"><a :href="'#page-' + (currentPage - 2)">{{currentPage - 2}}</a></li>
    <li v-if="currentPage > 1"><a :href="'#page-' + (currentPage - 1)">{{currentPage - 1}}</a></li>
    <li class="uk-active"><span>{{currentPage}}</span></li>
    <li v-if="currentPage < pageCount"><a :href="'#page-' + (currentPage + 1)">{{currentPage + 1}}</a></li>
    <li v-if="currentPage < (pageCount - 1)"><a :href="'#page-' + (currentPage + 2)">{{currentPage + 2}}</a></li>
    <li v-if="currentPage < (pageCount - 2)"><a :href="'#page-' + (currentPage + 3)">{{currentPage + 3}}</a></li>
    <li v-if="currentPage < (pageCount - 3)" class="uk-disabled"><span>...</span></li>
    <li v-if="currentPage < (pageCount - 3)"><a :href="'#page-' + pageCount">{{pageCount}}</a></li>
    <li v-if="currentPage < pageCount"><a :href="'#page-' + (currentPage + 1)"><span uk-pagination-next></span></a></li>
  </ul>
</template>
<script>
const setPage = hash => hash && hash.startsWith('#page-') ?
  parseInt(hash.split('-')[1], 10) :
  1 // Defaults to 1.

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
