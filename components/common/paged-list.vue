<template>
  <div>
    <h1 class="lg-float-title">{{title}}</h1>
    <div class="uk-card uk-card-default uk-card-body uk-margin">
      <div v-show="loading" uk-spinner></div>
      <ul v-show="!loading" class="uk-list uk-list-divider">
        <slot name="item" v-for="item in items.result"  :item="item"/>
      </ul>
      <page-switcher :itemCount="items.count"/>
    </div>
  </div>
</template>
<script>

// Don't ask me why I did this; "I don't know."

// Now I would abandon this. That's a faulty extraction.

import PageSwitcher from '~components/common/page-switcher'

export default {
  data() {
    return {
      loading: false
    }
  },
  props: {
    title: String,
    items: Object,
    laoding: Boolean
  },
  components: { PageSwitcher }
}
</script>
