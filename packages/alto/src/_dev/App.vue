<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { Loader } from '~/components';
</script>

<template>
  <div class="container">
    <Loader type="spinner" label="Loading..." />
    <Loader type="brand" />
    <Loader type="bar" />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  gap: 80px;
}
</style>
