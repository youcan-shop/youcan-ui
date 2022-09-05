<script setup lang="ts">
import { ref } from 'vue';

const count = ref(0);
</script>

<template>
  <div class="counter" @click="count++">
    <span class="count">{{ count }}</span>
  </div>
</template>

<style lang="scss" scoped>
.counter {
  padding: 4px 8px;
  background-color: red;
  color: white;
  cursor: pointer;
  width: fit-content;

  .count {
    padding: 0 10px;
  }
}
</style>
