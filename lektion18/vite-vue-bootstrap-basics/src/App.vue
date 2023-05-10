<template>
  <main>
    Hello

    <div class="btn-group" role="group" aria-label="Basic example">
      <a href="#" class="btn btn-secondary btn-sm">apa</a>
      <a href="#" class="btn btn-primary btn-sm">bepa</a>
      <a href="#" class="btn btn-warning btn-sm">cepa</a>
    </div>

    <div class="custom-element">apansson</div>
    <div class="custom-element2">apansson</div>
  </main>
</template>

<style lang="scss" scoped>
@import '~bootstrap/scss/mixins';
@import '~bootstrap/scss/functions';
@import '~bootstrap/scss/variables';

.custom-element2 {
  background-color: tint-color($primary, 10%);
}
</style>
