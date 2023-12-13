<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { ref } from 'vue';
import { Skeleton } from '~/components';

const lines = ref(10);
</script>

<template>
  <div class="container">
    <Skeleton type="text" :lines="lines" />
    <Skeleton type="media" />
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
