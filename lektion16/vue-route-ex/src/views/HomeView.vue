<script>
import { RouterLink } from 'vue-router'
import { users } from '../data/users.js'

export default {
  components: {
    RouterLink
  },
  data() {
    return {
      users: users,
    }
  }
}
</script>


<template>
  <main>
    <RouterLink v-for="user of users" :key="user.id" :to="`/user/${user.id}`">{{ user.name }}</RouterLink>
  </main>
</template>

<style scoped>
main {
  display: flex;
  gap: 1.25rem;
}

main a {
  display: inline-block;
}
</style>