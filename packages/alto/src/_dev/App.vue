<script setup lang="ts">
import 'uno.css';
import '../assets/main.css';
import { Spinner } from '~/components';
</script>

<template>
  <div class="container">
    <div class="row">
      <Spinner />
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  gap: 40px;
}
</style>
