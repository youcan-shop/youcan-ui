<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { Spinner } from '~/components';
</script>

<template>
  <div class="container">
    <Spinner
      color="var(--blue-300)"
      size="10px"
      label="YouCan"
      label-color="var(--blue-500)"
      label-font-size="xs"
    />
    <Spinner />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: auto;
}
</style>
