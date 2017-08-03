<template>
  <span>
    <router-link class="uk-link-reset" :to="{ name: 'users-id', params: { id: team.TeamID } }">{{team.Name}}</router-link>
  </span>
</template>
<script>
export default {
  props: {
    team: Object
  }
}
</script>
