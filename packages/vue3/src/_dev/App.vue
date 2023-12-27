<script setup lang="ts">
import { Divider } from '~/components';
</script>

<template>
  <div class="container">
    <Divider width="light" />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

p {
  margin: 0;
  color: var(--gray-600);
}
</style>
