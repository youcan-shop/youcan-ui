<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { ResourcePicker } from '~/components';
</script>

<template>
  <div class="container">
    <ResourcePicker />
  </div>
</template>

<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
  border: 1px solid var(--gray-100);
}
</style>
