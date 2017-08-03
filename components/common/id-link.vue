<template>
  <user-link v-if="idObj._instance === 'Luogu\\Models\\User'" :user="idObj"/>
  <team-link v-else-if="idObj._instance === 'Luogu\\Models\\Team'" :team="idObj"/>

</template>
<script>
import UserLink from './user-link'
import TeamLink from './team-link'

export default {
  props: {
    idObj: Object
  },
  components: { UserLink, TeamLink }
}
</script>
