<script>
import { RouterLink } from 'vue-router'
import { users, hobbies } from '../data/users.js'

export default {
  components: {
    RouterLink,
  },
  props: {
    userId: String
  },
  computed: {
    name() {
      const user = users.find(user => user.id === Number(this.userId))
      return user?.name ?? "unknown"
    },
    hobby() {
      return hobbies[this.userId]
    }
  }
}
</script>

<template>
  <div class="users">
    <h1>This is an user page for user {{ userId }} aka {{  name }} with hobby {{ hobby }}</h1>
    <RouterLink to="/">Back to home</RouterLink>
  </div>
</template>
