<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="wrapper">
    <div>
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
}
</style>
