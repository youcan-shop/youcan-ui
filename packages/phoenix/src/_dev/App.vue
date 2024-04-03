<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { Progress } from '~/components';
</script>

<template>
  <div class="container">
    <Progress :value="0" :max-value="677" />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px;
  gap: 0.5rem;
}
</style>
