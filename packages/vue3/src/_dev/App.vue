<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { Skeleton } from '~/components';
</script>

<template>
  <div class="container">
    <Skeleton type="content" width="80%" height="40%" />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90vh;
  margin: auto;
}
</style>
