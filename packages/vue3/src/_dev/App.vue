<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { Skeleton } from '~/components';
</script>

<template>
  <div class="container">
    <Skeleton type="card" />
  </div>
</template>

<style scoped>
.container {
  align-items: center;
  justify-content: center;
  width: 40vw;
  height: 40vh;
  margin: 10%;
}
</style>
