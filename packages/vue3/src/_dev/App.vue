<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { Skeleton } from '~/components';
</script>

<template>
  <div class="container">
    <Skeleton type="text" :lines="5" />
  </div>
</template>

<style scoped>
.container {
  align-items: center;
  justify-content: center;
  width: 30vw;
  height: 100vh;
  margin: 10%;
}
</style>
