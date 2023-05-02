<script>
import { mapStores } from 'pinia'
import { useCounterStore } from '../stores/counter.js'

export default {
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapStores(useCounterStore)
  }
}
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    counter: {{ counterStore.count }} <br>
    doubleCounter: {{ counterStore.doubleCount }} <br>
    <input type="button" value="incr" @click="counterStore.increment">
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
